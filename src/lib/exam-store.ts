import { create } from "zustand";
import { getExamQuestions } from "@/lib/exam-questions.functions";
import {
  DEFAULT_CANDIDATE,
  EXAM_DURATION_MS,
  EXAM_SIZE,
  JUDGE_COUNT,
  PASS_SCORE,
  SINGLE_COUNT,
  isCorrect,
  type AnswerKey,
  type Candidate,
  type ExamAnswer,
  type ExamResult,
  type ExamSession,
  type Question,
  type Screen,
} from "@/lib/exam-types";

const STORAGE_KEY = "geek-jiakao-26";

interface Persisted {
  candidate: Candidate;
  passCount: number;
  screen: Screen;
  exam: ExamSession | null;
  result: ExamResult | null;
}

export interface WrongAlert {
  correctLabel: string;
  explain: string;
}

interface ExamStore {
  hydrated: boolean;
  candidate: Candidate;
  passCount: number;
  screen: Screen;
  exam: ExamSession | null;
  result: ExamResult | null;
  loadingQuestions: boolean;
  questionError: string | null;
  showSubmit: boolean;
  abortAsk: boolean;
  wrongAlert: WrongAlert | null;
  pendingIndex: number | "submit" | null;
  hydrate: () => void;
  setCandidate: (patch: Partial<Candidate>) => void;
  startExam: () => Promise<void>;
  resumeExam: () => void;
  selectAnswer: (key: AnswerKey) => void;
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  requestSubmit: () => void;
  cancelSubmit: () => void;
  confirmSubmit: () => void;
  dismissWrong: () => void;
  requestAbort: () => void;
  cancelAbort: () => void;
  confirmAbort: () => void;
  retry: () => void;
  backHome: () => void;
}

function blankAnswers(n: number): ExamAnswer[] {
  return Array.from({ length: n }, () => ({ selected: null, judged: false }));
}

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j]!, result[i]!];
  }
  return result;
}

function buildExam(pool: Question[]): Question[] {
  const judge = shuffle(pool.filter((q) => q.type === "judge")).slice(0, JUDGE_COUNT);
  const single = shuffle(pool.filter((q) => q.type === "single")).slice(0, SINGLE_COUNT);
  if (judge.length < JUDGE_COUNT || single.length < SINGLE_COUNT) {
    throw new Error(`题库数量不足，无法组成${EXAM_SIZE}题考试。`);
  }
  return shuffle([...judge, ...single]);
}

function persist(state: ExamStore) {
  if (typeof window === "undefined") return;
  const data: Persisted = {
    candidate: state.candidate,
    passCount: state.passCount,
    screen: state.screen,
    exam: state.exam,
    result: state.result,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* ignore quota */
  }
}

function load(): Partial<Persisted> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Persisted;
  } catch {
    return {};
  }
}

function finishExam(exam: ExamSession, passCount: number) {
  const { correct, wrong, blank, score } = examStats(exam.questions, exam.answers);
  const passed = score >= PASS_SCORE;
  const usedMs = Math.min(EXAM_DURATION_MS, Date.now() - exam.startedAt);
  const result: ExamResult = {
    score,
    passed,
    correct,
    wrong,
    blank,
    usedMs,
    questions: exam.questions,
    answers: exam.answers,
  };
  return {
    result,
    passCount: passed ? passCount + 1 : passCount,
    screen: "result" as const,
    exam: null,
    showSubmit: false,
    abortAsk: false,
    wrongAlert: null,
    pendingIndex: null,
  };
}

function leaveCurrent(
  exam: ExamSession,
  nextIndex: number | "submit",
): { exam: ExamSession; wrong: WrongAlert | null; pending: number | "submit" | null } {
  const i = exam.current;
  const q = exam.questions[i];
  const a = exam.answers[i];
  if (!q || !a || a.judged || a.selected === null) {
    return {
      exam: nextIndex === "submit" ? exam : { ...exam, current: nextIndex },
      wrong: null,
      pending: nextIndex === "submit" ? "submit" : null,
    };
  }
  const answers = exam.answers.map((item, idx) =>
    idx === i ? { ...item, judged: true } : item,
  );
  const judgedExam = { ...exam, answers };
  if (isCorrect(q, a.selected)) {
    return {
      exam: nextIndex === "submit" ? judgedExam : { ...judgedExam, current: nextIndex },
      wrong: null,
      pending: nextIndex === "submit" ? "submit" : null,
    };
  }
  const opt = q.type === "judge"
    ? q.answer === "T" ? "正确" : "错误"
    : `${q.answer}. ${q.options?.[q.answer.charCodeAt(0) - 65] ?? ""}`;
  return {
    exam: judgedExam,
    wrong: { correctLabel: opt, explain: q.explain },
    pending: nextIndex,
  };
}

export const useExamStore = create<ExamStore>((set, get) => ({
  hydrated: false,
  candidate: DEFAULT_CANDIDATE,
  passCount: 0,
  screen: "start",
  exam: null,
  result: null,
  loadingQuestions: false,
  questionError: null,
  showSubmit: false,
  abortAsk: false,
  wrongAlert: null,
  pendingIndex: null,

  hydrate: () => {
    if (get().hydrated) return;
    const saved = load();
    set({
      hydrated: true,
      candidate: { ...DEFAULT_CANDIDATE, ...saved.candidate },
      passCount: saved.passCount ?? 0,
      screen:
        saved.exam && saved.screen !== "result"
          ? "exam"
          : saved.screen === "result" && saved.result
            ? "result"
            : "start",
      exam: saved.exam ?? null,
      result: saved.result ?? null,
    });
  },

  setCandidate: (patch) => {
    set({ candidate: { ...get().candidate, ...patch }, questionError: null });
    persist(get());
  },

  startExam: async () => {
    if (get().loadingQuestions) return;
    set({ loadingQuestions: true, questionError: null });
    try {
      const pool = await getExamQuestions({ data: { vehicleType: get().candidate.vehicleType } });
      const questions = buildExam(pool);
      set({
        screen: "exam",
        exam: {
          questions,
          answers: blankAnswers(questions.length),
          current: 0,
          startedAt: Date.now(),
          durationMs: EXAM_DURATION_MS,
        },
        result: null,
        loadingQuestions: false,
        questionError: null,
        showSubmit: false,
        abortAsk: false,
        wrongAlert: null,
        pendingIndex: null,
      });
      persist(get());
    } catch (error) {
      const message = error instanceof Error ? error.message : "题库获取失败，请稍后重试。";
      set({ loadingQuestions: false, questionError: message });
    }
  },

  resumeExam: () => {
    if (get().exam) set({ screen: "exam", questionError: null });
  },

  selectAnswer: (key) => {
    const { exam } = get();
    if (!exam) return;
    const a = exam.answers[exam.current];
    if (!a || a.judged) return;
    const answers = exam.answers.map((item, idx) =>
      idx === exam.current ? { ...item, selected: key } : item,
    );
    set({ exam: { ...exam, answers } });
    persist(get());
  },

  goTo: (index) => {
    const { exam } = get();
    if (!exam) return;
    const clamped = Math.max(0, Math.min(exam.questions.length - 1, index));
    if (clamped === exam.current) return;
    const { exam: next, wrong, pending } = leaveCurrent(exam, clamped);
    set({ exam: next, wrongAlert: wrong, pendingIndex: pending, showSubmit: pending === "submit" });
    persist(get());
  },

  next: () => {
    const { exam } = get();
    if (!exam) return;
    const target = Math.min(exam.questions.length - 1, exam.current + 1);
    if (target === exam.current) {
      get().requestSubmit();
      return;
    }
    get().goTo(target);
  },

  prev: () => {
    const { exam } = get();
    if (!exam) return;
    get().goTo(Math.max(0, exam.current - 1));
  },

  requestSubmit: () => {
    const { exam } = get();
    if (!exam) return;
    const { exam: next, wrong, pending } = leaveCurrent(exam, "submit");
    set({ exam: next, wrongAlert: wrong, pendingIndex: pending, showSubmit: wrong ? false : true });
    persist(get());
  },

  cancelSubmit: () => set({ showSubmit: false, pendingIndex: null }),

  confirmSubmit: () => {
    const { exam, passCount } = get();
    if (!exam) return;
    set(finishExam(exam, passCount));
    persist(get());
  },

  dismissWrong: () => {
    const { pendingIndex, exam } = get();
    if (pendingIndex === "submit") {
      set({ wrongAlert: null, pendingIndex: null, showSubmit: true });
      return;
    }
    if (typeof pendingIndex === "number" && exam) {
      set({ exam: { ...exam, current: pendingIndex }, wrongAlert: null, pendingIndex: null });
      persist(get());
      return;
    }
    set({ wrongAlert: null, pendingIndex: null });
  },

  requestAbort: () => set({ abortAsk: true }),
  cancelAbort: () => set({ abortAsk: false }),
  confirmAbort: () => {
    set({ abortAsk: false, screen: "start", exam: null, showSubmit: false, wrongAlert: null, pendingIndex: null });
    persist(get());
  },

  retry: () => { void get().startExam(); },

  backHome: () => {
    set({ screen: "start", exam: null, result: null, showSubmit: false });
    persist(get());
  },
}));

export function liveStats(exam: ExamSession) {
  return examStats(exam.questions, exam.answers);
}

export function remainingMs(exam: ExamSession): number {
  return Math.max(0, exam.durationMs - (Date.now() - exam.startedAt));
}

export function examStats(questions: Question[], answers: ExamAnswer[]) {
  let correct = 0;
  let wrong = 0;
  let blank = 0;
  questions.forEach((q, i) => {
    const a = answers[i];
    if (!a || a.selected === null) {
      blank += 1;
      return;
    }
    if (isCorrect(q, a.selected)) correct += 1;
    else wrong += 1;
  });
  return { correct, wrong, blank, score: correct };
}
