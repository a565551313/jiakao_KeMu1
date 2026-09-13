import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { TrafficSign } from "@/components/traffic-signs";
import { useExamStore } from "@/lib/exam-store";
import { PASS_SCORE, isCorrect, labelForAnswer } from "@/lib/exam-types";
import { cn, formatTime } from "@/lib/utils";

export function ResultScreen() {
  const result = useExamStore((s) => s.result);
  const candidate = useExamStore((s) => s.candidate);
  const passCount = useExamStore((s) => s.passCount);
  const retry = useExamStore((s) => s.retry);
  const backHome = useExamStore((s) => s.backHome);
  const [review, setReview] = useState(false);

  if (!result) return null;

  const wrongItems = result.questions
    .map((q, i) => ({ q, a: result.answers[i]!, i }))
    .filter(({ q, a }) => a.selected !== null && !isCorrect(q, a.selected));

  return (
    <div className="flex min-h-dvh flex-col bg-paper">
      <header className="relative h-24 shrink-0 overflow-hidden border-b border-line sm:h-28">
        <img src="/exam-sky.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <img
          src="/exam-hall.jpg"
          alt=""
          className="absolute top-0 right-0 h-full w-2/5 object-cover hall-fade"
        />
        <button
          type="button"
          className="absolute top-1/2 left-3 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-paper-2"
          aria-label="返回"
          onClick={backHome}
        >
          <ChevronLeft className="size-6" strokeWidth={2.5} />
        </button>
        <h1 className="title-3d absolute inset-x-14 top-1/2 -translate-y-1/2 text-center text-2xl sm:text-4xl">
          考试成绩
        </h1>
      </header>

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-4 px-3 py-5 sm:px-5">
        <div className="relative border border-ink bg-paper-2 px-5 py-6 sm:px-10">
          <div
            className={cn(
              "pointer-events-none absolute top-4 right-6 rotate-12 rounded-full border-4 px-4 py-6 font-sans text-3xl font-black tracking-widest sm:right-10 sm:text-4xl",
              result.passed ? "border-ok text-ok" : "border-bad text-bad",
            )}
          >
            {result.passed ? "合格" : "不合格"}
          </div>
          <h2 className="mb-4 font-sans text-lg text-legend">第{candidate.station}考台 · {candidate.name}</h2>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-2 font-sans text-base sm:grid-cols-3">
            <div>
              成绩：<strong className={result.passed ? "text-ok" : "text-bad"}>{result.score} 分</strong>
            </div>
            <div>合格线：{PASS_SCORE} 分</div>
            <div>用时：{formatTime(result.usedMs)}</div>
            <div>答对：{result.correct} 题</div>
            <div>答错：{result.wrong} 题</div>
            <div>未答：{result.blank} 题</div>
            <div className="col-span-2 sm:col-span-3">累计合格次数：{passCount}</div>
          </dl>
          <p className="mt-4 font-sans text-sm text-muted">
            {result.passed
              ? "恭喜，本次科目一模拟考试达到合格标准。"
              : "未达到90分合格标准，建议先把错题看一遍再考。"}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" className="win-btn min-h-11 px-6 py-2" onClick={retry}>
              再考一次
            </button>
            <button type="button" className="win-btn min-h-11 px-6 py-2" onClick={() => setReview((v) => !v)}>
              {review ? "收起错题" : `查看错题（${wrongItems.length}）`}
            </button>
            <button type="button" className="win-btn min-h-11 px-6 py-2" onClick={backHome}>
              返回首页
            </button>
          </div>
        </div>

        {review && (
          <div className="border border-win-border bg-sheet p-4">
            <h3 className="mb-3 font-sans text-base text-legend">错题回顾</h3>
            {wrongItems.length === 0 ? (
              <p className="font-sans text-sm text-muted">没有答错的题目。</p>
            ) : (
              <ol className="space-y-4">
                {wrongItems.map(({ q, a, i }) => (
                  <li key={q.id} className="border border-line bg-paper-2 p-3 font-sans text-sm">
                    <p className="mb-2 leading-relaxed">
                      <span className="mr-1 text-muted">{i + 1}.</span>
                      {q.text}
                    </p>
                    {q.sign && <TrafficSign id={q.sign} className="mb-2 size-20" />}
                    {q.type === "single" && (
                      <ul className="mb-2 space-y-0.5 text-muted">
                        {q.options?.map((opt, oi) => (
                          <li key={opt}>
                            {String.fromCharCode(65 + oi)}. {opt}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="text-bad">你的答案：{labelForAnswer(q, a.selected) || "未答"}</p>
                    <p className="text-ok">正确答案：{labelForAnswer(q, q.answer)}</p>
                    <p className="mt-1 text-muted">{q.explain}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
