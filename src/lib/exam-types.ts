export type QType = "judge" | "single";
export type AnswerKey = "T" | "F" | "A" | "B" | "C" | "D";
export type Gender = "男" | "女";
export type VehicleType = "小车" | "货车" | "客车" | "摩托车";
export type Screen = "start" | "exam" | "result";
export type SignId =
  | "stop" | "yield" | "no-entry" | "no-pass" | "no-parking" | "no-stopping"
  | "no-horn" | "speed-40" | "speed-end" | "crosswalk" | "pedestrian" | "children"
  | "danger" | "construction" | "tunnel" | "honk" | "no-left" | "straight" | "roundabout"
  | "no-overtake" | "parking" | "min-speed" | "highway" | "slippery" | "rocks" | "u-turn"
  | "give-way" | "no-u-turn" | "height" | "lane-bus";

export interface Question {
  id: string;
  type: QType;
  text: string;
  options?: readonly [string, string, string, string];
  answer: AnswerKey;
  explain: string;
  sign?: SignId;
  image?: string;
}

export interface Candidate {
  name: string;
  gender: Gender;
  vehicleType: VehicleType;
  idNumber: string;
  station: string;
}

export interface ExamAnswer {
  selected: AnswerKey | null;
  judged: boolean;
}

export interface ExamSession {
  questions: Question[];
  answers: ExamAnswer[];
  current: number;
  startedAt: number;
  durationMs: number;
}

export interface ExamResult {
  score: number;
  passed: boolean;
  correct: number;
  wrong: number;
  blank: number;
  usedMs: number;
  questions: Question[];
  answers: ExamAnswer[];
}

export const EXAM_SIZE = 100;
export const EXAM_DURATION_MS = 45 * 60 * 1000;
export const PASS_SCORE = 90;
export const JUDGE_COUNT = 40;
export const SINGLE_COUNT = 60;

export const DEFAULT_CANDIDATE: Candidate = {
  name: "秋名山车神",
  gender: "男",
  vehicleType: "小车",
  idNumber: "123456789123456789",
  station: "01",
};

export function labelForAnswer(q: Question, key: AnswerKey | null): string {
  if (!key) return "";
  if (q.type === "judge") return key === "T" ? "正确" : "错误";
  const idx = key.charCodeAt(0) - 65;
  const opt = q.options?.[idx] ?? "";
  return `${key}. ${opt}`;
}

export function isCorrect(q: Question, selected: AnswerKey | null): boolean {
  return selected !== null && selected === q.answer;
}
