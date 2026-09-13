import type { Question, VehicleType } from "@/lib/exam-types";

const API_URL = "https://www.mxnzp.com/api/driver_exam/question/list";
const MAX_PAGES_PER_REQUEST = 60;
const CACHE_TTL_MS = 10 * 60 * 1000;

type MxnzpItem = {
  id: number | string;
  title: string;
  titleType: number | string;
  op1?: string;
  op2?: string;
  op3?: string;
  op4?: string;
  titlePic?: string;
};

type MxnzpResponse = {
  code?: number | string;
  msg?: string;
  data?: {
    page?: number;
    totalCount?: number;
    totalPage?: number;
    limit?: number;
    list?: MxnzpItem[];
  };
};

type CacheEntry = { expiresAt: number; questions: Question[] };
const cache = new Map<string, CacheEntry>();

export function rankForVehicle(vehicleType: VehicleType): number {
  switch (vehicleType) {
    case "货车": return 2;
    case "客车": return 3;
    case "摩托车": return 4;
    case "小车": return 1;
  }
}

function cleanOption(value: string | undefined): string {
  return (value ?? "").replace(/^[A-D][、.．]\s*/, "").trim();
}

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j]!, result[i]!];
  }
  return result;
}

function toQuestion(item: MxnzpItem): Question | null {
  const title = item.title?.trim();
  const titleType = Number(item.titleType);
  if (!title) return null;

  if (titleType === 2) {
    const op1 = cleanOption(item.op1);
    const op2 = cleanOption(item.op2);
    let answer: "T" | "F" | null = null;
    if (/正确|对|是/.test(op1) && /错误|错|否/.test(op2)) answer = "T";
    if (/错误|错|否/.test(op1) && /正确|对|是/.test(op2)) answer = "F";
    if (!answer) return null;
    return {
      id: String(item.id), type: "judge", text: title, answer,
      explain: "答案来自驾考题库接口。", image: item.titlePic?.trim() || undefined,
    };
  }

  // MXNZP documents titleType=1 as single choice. titleType=3 is multiple choice,
  // but this endpoint's documented payload does not expose a reliable correct-answer
  // field for multi-choice questions, so those questions are intentionally skipped.
  if (titleType !== 1) return null;

  const sourceOptions = [item.op1, item.op2, item.op3, item.op4].map(cleanOption).filter(Boolean);
  if (sourceOptions.length !== 4) return null;
  const correctText = cleanOption(item.op1);
  const options = shuffle(sourceOptions);
  const answerIndex = options.indexOf(correctText);
  if (answerIndex < 0 || answerIndex > 3) return null;

  return {
    id: String(item.id), type: "single", text: title,
    options: options as [string, string, string, string],
    answer: String.fromCharCode(65 + answerIndex) as "A" | "B" | "C" | "D",
    explain: "答案来自驾考题库接口。", image: item.titlePic?.trim() || undefined,
  };
}

async function fetchPage(rank: number, page: number, appId: string, appSecret: string) {
  const url = new URL(API_URL);
  url.searchParams.set("page", String(page));
  url.searchParams.set("rank", String(rank));
  url.searchParams.set("type", "1");
  url.searchParams.set("app_id", appId);
  url.searchParams.set("app_secret", appSecret);

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) throw new Error(`题库接口 HTTP ${response.status}`);

  const json = (await response.json()) as MxnzpResponse;
  if (Number(json.code) !== 1 || !json.data?.list) {
    throw new Error(json.msg || "题库接口返回异常");
  }
  return json.data;
}

export async function getMxnzpExamQuestions(vehicleType: VehicleType): Promise<Question[]> {
  const appId = process.env.MXNZP_APP_ID?.trim();
  const appSecret = process.env.MXNZP_APP_SECRET?.trim();
  if (!appId || !appSecret) {
    throw new Error("未配置 MXNZP_APP_ID / MXNZP_APP_SECRET，请先配置服务端环境变量。");
  }

  const rank = rankForVehicle(vehicleType);
  const cacheKey = `${rank}:1`;
  const cached = cache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now() && cached.questions.length >= 100) return shuffle(cached.questions);

  const judge: Question[] = [];
  const single: Question[] = [];
  let totalPage = 1;

  for (let page = 1; page <= Math.min(totalPage, MAX_PAGES_PER_REQUEST); page += 1) {
    const data = await fetchPage(rank, page, appId, appSecret);
    totalPage = Math.max(1, Number(data.totalPage) || 1);
    for (const item of data.list ?? []) {
      const question = toQuestion(item);
      if (!question) continue;
      if (question.type === "judge") judge.push(question);
      else single.push(question);
    }
    if (judge.length >= 40 && single.length >= 60) break;
  }

  if (judge.length < 40 || single.length < 60) {
    throw new Error(`题库数量不足：判断题 ${judge.length} 题，单选题 ${single.length} 题，无法组成100题考试。`);
  }

  const pool = [...judge, ...single];
  cache.set(cacheKey, { expiresAt: Date.now() + CACHE_TTL_MS, questions: pool });
  return shuffle(pool);
}
