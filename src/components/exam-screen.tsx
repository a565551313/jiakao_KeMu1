import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Check, ChevronLeft, X } from "lucide-react";
import { FieldsetBox } from "@/components/fieldset-box";
import { DialogActions, DialogShell } from "@/components/dialog-shell";
import { TrafficSign } from "@/components/traffic-signs";
import { liveStats, useExamStore } from "@/lib/exam-store";
import { isCorrect, type AnswerKey, type ExamSession } from "@/lib/exam-types";
import { cn, formatTime, maskName } from "@/lib/utils";

const KEYS_SINGLE: AnswerKey[] = ["A", "B", "C", "D"];

function Avatar() {
  return (
    <svg viewBox="0 0 80 80" className="size-20 text-ink" aria-hidden="true">
      <circle cx="40" cy="40" r="38" fill="#f4f4ea" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="30" r="12" fill="currentColor" />
      <path d="M16 68c4-16 14-24 24-24s20 8 24 24" fill="currentColor" />
    </svg>
  );
}

function useRemain(startedAt: number, durationMs: number) {
  const [remain, setRemain] = useState(() => Math.max(0, durationMs - (Date.now() - startedAt)));
  useEffect(() => {
    const id = window.setInterval(() => {
      setRemain(Math.max(0, durationMs - (Date.now() - startedAt)));
    }, 250);
    return () => window.clearInterval(id);
  }, [startedAt, durationMs]);
  return remain;
}

export function ExamScreen() {
  const candidate = useExamStore((s) => s.candidate);
  const exam = useExamStore((s) => s.exam);
  const showSubmit = useExamStore((s) => s.showSubmit);
  const abortAsk = useExamStore((s) => s.abortAsk);
  const wrongAlert = useExamStore((s) => s.wrongAlert);
  const selectAnswer = useExamStore((s) => s.selectAnswer);
  const goTo = useExamStore((s) => s.goTo);
  const next = useExamStore((s) => s.next);
  const prev = useExamStore((s) => s.prev);
  const requestSubmit = useExamStore((s) => s.requestSubmit);
  const cancelSubmit = useExamStore((s) => s.cancelSubmit);
  const confirmSubmit = useExamStore((s) => s.confirmSubmit);
  const dismissWrong = useExamStore((s) => s.dismissWrong);
  const requestAbort = useExamStore((s) => s.requestAbort);
  const cancelAbort = useExamStore((s) => s.cancelAbort);
  const confirmAbort = useExamStore((s) => s.confirmAbort);

  if (!exam) return null;

  const q = exam.questions[exam.current];
  const a = exam.answers[exam.current];
  if (!q || !a) return null;

  return (
    <ExamBody
      exam={exam}
      q={q}
      a={a}
      candidate={candidate}
      showSubmit={showSubmit}
      abortAsk={abortAsk}
      wrongAlert={wrongAlert}
      selectAnswer={selectAnswer}
      goTo={goTo}
      next={next}
      prev={prev}
      requestSubmit={requestSubmit}
      cancelSubmit={cancelSubmit}
      confirmSubmit={confirmSubmit}
      dismissWrong={dismissWrong}
      requestAbort={requestAbort}
      cancelAbort={cancelAbort}
      confirmAbort={confirmAbort}
    />
  );
}

function ExamBody({
  exam,
  q,
  a,
  candidate,
  showSubmit,
  abortAsk,
  wrongAlert,
  selectAnswer,
  goTo,
  next,
  prev,
  requestSubmit,
  cancelSubmit,
  confirmSubmit,
  dismissWrong,
  requestAbort,
  cancelAbort,
  confirmAbort,
}: {
  exam: ExamSession;
  q: ExamSession["questions"][number];
  a: ExamSession["answers"][number];
  candidate: { name: string; gender: string; vehicleType: string; station: string };
  showSubmit: boolean;
  abortAsk: boolean;
  wrongAlert: { correctLabel: string; explain: string } | null;
  selectAnswer: (k: AnswerKey) => void;
  goTo: (i: number) => void;
  next: () => void;
  prev: () => void;
  requestSubmit: () => void;
  cancelSubmit: () => void;
  confirmSubmit: () => void;
  dismissWrong: () => void;
  requestAbort: () => void;
  cancelAbort: () => void;
  confirmAbort: () => void;
}) {
  const stats = liveStats(exam);
  const remain = useRemain(exam.startedAt, exam.durationMs);
  const judged = a.judged;
  const chosen = a.selected;
  const hintType = q.type === "judge" ? "判断题" : "单选题";
  const hintBody =
    q.type === "judge" ? "本题为判断题，请判断对错！" : "本题为单选题，请选择正确答案！";

  useEffect(() => {
    if (remain <= 0) confirmSubmit();
  }, [remain, confirmSubmit]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
      if (wrongAlert) {
        if (e.key === "Enter" || e.key === "Escape") dismissWrong();
        return;
      }
      if (showSubmit || abortAsk) return;
      const k = e.key.toLowerCase();
      if (q.type === "judge") {
        if (k === "a" || k === "1" || k === "y") selectAnswer("T");
        if (k === "b" || k === "2" || k === "n") selectAnswer("F");
      } else {
        if (k === "a" || k === "1") selectAnswer("A");
        if (k === "b" || k === "2") selectAnswer("B");
        if (k === "c" || k === "3") selectAnswer("C");
        if (k === "d" || k === "4") selectAnswer("D");
      }
      if (k === "arrowright" || k === "enter") next();
      if (k === "arrowleft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [q.type, selectAnswer, next, prev, wrongAlert, showSubmit, abortAsk, dismissWrong]);

  return (
    <div className="flex min-h-dvh flex-col bg-paper">
      <div className="exam-board mx-auto w-full max-w-7xl flex-1 p-2 sm:p-3">
        <aside className="area-side flex flex-col gap-3">
          <FieldsetBox legend="极客驾考26版" bodyClassName="px-3 py-4 text-center font-sans">
            <div className="text-base font-medium">第{candidate.station}考台</div>
          </FieldsetBox>
          <FieldsetBox
            legend="考生信息"
            className="flex-1"
            bodyClassName="flex flex-col items-center px-3 py-4 font-sans text-sm"
          >
            <Avatar />
            <dl className="mt-3 w-full space-y-1 text-ink">
              <div>姓名：{maskName(candidate.name)}</div>
              <div>性别：{candidate.gender}</div>
              <div>类型：{candidate.vehicleType}</div>
              <div>科目：科目一</div>
            </dl>
          </FieldsetBox>
          <FieldsetBox
            legend="剩余时间"
            bodyClassName="px-3 py-3 text-center font-sans text-2xl font-semibold tabular-nums"
          >
            {formatTime(remain)}
          </FieldsetBox>
        </aside>

        <FieldsetBox
          legend="考试题目"
          className="area-question min-h-52"
          bodyClassName="flex h-full min-h-0 flex-col gap-3 p-4 sm:p-5"
        >
          <p className="font-sans text-base leading-relaxed sm:text-lg">
            <span className="mr-1 font-medium">{exam.current + 1}、</span>
            {q.text}
          </p>
          {q.type === "judge" ? (
            <div className="space-y-2 font-sans text-base">
              <div>A.</div>
              <div>B.</div>
            </div>
          ) : (
            <ul className="space-y-1.5 font-sans text-base">
              {q.options?.map((opt, i) => {
                const key = KEYS_SINGLE[i]!;
                return (
                  <li key={key}>
                    <button
                      type="button"
                      className={cn(
                        "w-full rounded-sm px-1 py-1 text-left",
                        chosen === key && !judged && "bg-grid-head/15",
                        judged && chosen === key && !isCorrect(q, key) && "bg-bad/15",
                        judged && q.answer === key && "bg-ok/15",
                      )}
                      disabled={judged}
                      onClick={() => selectAnswer(key)}
                    >
                      {key}. {opt}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </FieldsetBox>

        <div className="area-grid">
          <QuestionGrid
            current={exam.current}
            answers={exam.answers}
            questions={exam.questions}
            onJump={goTo}
          />
        </div>

        <div className="area-answer flex flex-wrap items-center justify-between gap-3 border border-win-border bg-sheet px-3 py-2 font-sans text-sm">
          <div>
            您选择的答案：
            <span className="ml-1 font-medium">
              {q.type === "judge"
                ? chosen === "T"
                  ? "正确"
                  : chosen === "F"
                    ? "错误"
                    : ""
                : (chosen ?? "")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>选项：</span>
            {q.type === "judge" ? (
              <>
                <OptionFace
                  label="正确"
                  active={chosen === "T"}
                  judged={judged}
                  right={q.answer === "T"}
                  onClick={() => selectAnswer("T")}
                >
                  <Check className="size-5" strokeWidth={3} />
                </OptionFace>
                <OptionFace
                  label="错误"
                  active={chosen === "F"}
                  judged={judged}
                  right={q.answer === "F"}
                  onClick={() => selectAnswer("F")}
                >
                  <X className="size-5" strokeWidth={3} />
                </OptionFace>
              </>
            ) : (
              KEYS_SINGLE.map((key) => (
                <OptionFace
                  key={key}
                  label={key}
                  active={chosen === key}
                  judged={judged}
                  right={q.answer === key}
                  onClick={() => selectAnswer(key)}
                >
                  <span className="font-sans text-sm font-semibold">{key}</span>
                </OptionFace>
              ))
            )}
          </div>
        </div>

        <div className="area-hint border border-grid-head bg-sheet px-3 py-2 font-sans text-sm">
          <div className="font-medium text-hint">操作提示：{hintType}</div>
          <div className="text-ink">{hintBody}</div>
        </div>
        <div className="area-nav flex items-center justify-end gap-2 border border-grid-head bg-sheet px-3 py-2">
          <button
            type="button"
            className="win-btn min-h-11 px-4 py-1.5 text-sm"
            onClick={prev}
            disabled={exam.current === 0}
          >
            上一题
          </button>
          <button type="button" className="win-btn min-h-11 px-4 py-1.5 text-sm" onClick={next}>
            下一题
          </button>
          <button type="button" className="win-btn min-h-11 px-4 py-1.5 text-sm" onClick={requestSubmit}>
            交卷
          </button>
        </div>

        <div className="area-media relative min-h-28 border border-win-border bg-sheet">
          <button
            type="button"
            className="absolute top-1/2 left-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-paper-2"
            aria-label="退出考试"
            onClick={requestAbort}
          >
            <ChevronLeft className="size-6" strokeWidth={2.5} />
          </button>
          <div className="flex h-full items-center justify-center py-3">
            {q.sign ? (
              <TrafficSign id={q.sign} className="size-28 sm:size-32" />
            ) : (
              <p className="font-sans text-sm text-muted">多媒体展示区</p>
            )}
          </div>
        </div>
      </div>

      {wrongAlert && (
        <DialogShell title="答题提示">
          <div className="mx-5 bg-paper-2 px-6 py-5 font-sans text-base leading-relaxed text-ink">
            <p className="mb-2 font-semibold text-bad">回答错误！</p>
            <p>正确答案：{wrongAlert.correctLabel}</p>
            <p className="mt-2 text-sm text-muted">{wrongAlert.explain}</p>
          </div>
          <DialogActions>
            <button type="button" className="win-btn min-h-12 min-w-36 px-8 py-2 text-base" onClick={dismissWrong}>
              确定
            </button>
          </DialogActions>
        </DialogShell>
      )}

      {showSubmit && (
        <DialogShell title="考试确认窗口" wide>
          <div className="mx-5 bg-paper-2 px-6 py-6 font-sans text-base leading-relaxed text-ink">
            <p className="mb-2 font-medium">操作提示：</p>
            <p>
              你当前考试答对{stats.correct}题，答错{stats.wrong}题，未答{stats.blank}题
            </p>
            <p className="mt-2">1.点击【确认交卷】，将提交考试成绩，考试结束！</p>
            <p>2.点击【继续考试】，将关闭本窗口，继续考试！</p>
          </div>
          <DialogActions>
            <button type="button" className="win-btn min-h-12 min-w-36 px-8 py-2 text-base" onClick={confirmSubmit}>
              确认交卷
            </button>
            <button type="button" className="win-btn min-h-12 min-w-36 px-8 py-2 text-base" onClick={cancelSubmit}>
              继续考试
            </button>
          </DialogActions>
        </DialogShell>
      )}

      {abortAsk && (
        <DialogShell title="退出确认">
          <div className="mx-5 bg-paper-2 px-6 py-5 font-sans text-base text-ink">
            退出将结束本次考试且不记成绩，确定离开？
          </div>
          <DialogActions>
            <button type="button" className="win-btn min-h-12 min-w-32 px-6 py-2" onClick={confirmAbort}>
              确定退出
            </button>
            <button type="button" className="win-btn min-h-12 min-w-32 px-6 py-2" onClick={cancelAbort}>
              继续考试
            </button>
          </DialogActions>
        </DialogShell>
      )}
    </div>
  );
}

function OptionFace({
  children,
  label,
  active,
  judged,
  right,
  onClick,
}: {
  children: ReactNode;
  label: string;
  active: boolean;
  judged: boolean;
  right: boolean;
  onClick: () => void;
}) {
  const wrong = judged && active && !right;
  const showRight = judged && right;
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      disabled={judged}
      data-on={active && !judged ? "true" : undefined}
      data-wrong={wrong ? "true" : undefined}
      data-right={showRight ? "true" : undefined}
      className="opt-btn flex size-11 items-center justify-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function QuestionGrid({
  current,
  answers,
  questions,
  onJump,
}: {
  current: number;
  answers: { selected: AnswerKey | null; judged: boolean }[];
  questions: { answer: AnswerKey }[];
  onJump: (i: number) => void;
}) {
  const cells = useMemo(() => Array.from({ length: 100 }, (_, i) => i), []);
  return (
    <div className="h-full overflow-auto border border-win-border bg-sheet">
      <table className="w-full table-fixed border-collapse font-sans text-xs">
        <thead>
          <tr className="bg-grid-head text-paper-2">
            <th className="border border-grid-head/40 px-0.5 py-1 font-medium">题目</th>
            {Array.from({ length: 10 }, (_, c) => (
              <th key={c} className="border border-grid-head/40 px-0.5 py-1 font-medium">
                {c + 1}列
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, r) => (
            <tr key={r}>
              <th className="border border-line bg-grid-head/15 px-0.5 py-1 font-medium text-legend">
                {r + 1}行
              </th>
              {cells.slice(r * 10, r * 10 + 10).map((i) => {
                const ans = answers[i];
                const qn = questions[i];
                const isNow = i === current;
                let tone = "bg-paper-2";
                if (ans?.judged && qn) {
                  tone = ans.selected === qn.answer ? "bg-ok text-paper-2" : "bg-bad text-paper-2";
                }
                if (isNow && !ans?.judged) tone = "bg-grid-now text-paper-2";
                return (
                  <td key={i} className="border border-line p-0">
                    <button
                      type="button"
                      className={cn(
                        "flex min-h-8 w-full items-center justify-center",
                        tone,
                        isNow && "ring-2 ring-inset ring-ink/70",
                      )}
                      onClick={() => onJump(i)}
                      aria-label={`第${i + 1}题`}
                    >
                      {ans?.judged ? (ans.selected === qn?.answer ? "√" : "×") : ""}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
