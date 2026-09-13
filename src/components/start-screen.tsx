import { ChevronLeft } from "lucide-react";
import { useExamStore } from "@/lib/exam-store";
import type { Gender, VehicleType } from "@/lib/exam-types";

const RULES = [
  "遵守考场纪律，服从监考人员指挥",
  "进入考场、手机关闭。禁止抽烟，禁止吃零食。",
  "未经工作人员允许，考生禁止随意出入考场。",
  "考场内禁止大声喧哗，禁止随意走动。",
  "考试中认真答题，不准交头接耳。",
  "考试中不准冒名顶替，不准弄虚作假。",
  "注意考场卫生，禁止随地吐痰，禁止乱扔纸屑。",
  "爱护公物及考试设备。",
];

export function StartScreen() {
  const candidate = useExamStore((s) => s.candidate);
  const passCount = useExamStore((s) => s.passCount);
  const exam = useExamStore((s) => s.exam);
  const setCandidate = useExamStore((s) => s.setCandidate);
  const startExam = useExamStore((s) => s.startExam);
  const resumeExam = useExamStore((s) => s.resumeExam);

  return (
    <div className="flex min-h-dvh flex-col bg-paper">
      <header className="relative h-28 shrink-0 overflow-hidden border-b border-line sm:h-36">
        <img
          src="/exam-sky.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-sky/30 via-transparent to-transparent" />
        <img
          src="/exam-hall.jpg"
          alt="考场机位"
          className="absolute top-0 right-0 h-full w-2/5 object-cover object-center hall-fade"
        />
        <button
          type="button"
          className="absolute top-1/2 left-3 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-paper-2 shadow-md sm:left-4"
          aria-label="返回"
        >
          <ChevronLeft className="size-6" strokeWidth={2.5} />
        </button>
        <h1 className="title-3d absolute top-1/2 left-14 w-3/5 -translate-y-1/2 text-left text-2xl sm:left-16 sm:text-3xl lg:text-4xl">
          驾驶人科目一考试系统
        </h1>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-3 py-4 sm:px-5 sm:py-5">
        <div className="flex flex-1 flex-col border border-ink bg-paper-2 shadow-sm md:flex-row">
          <div className="flex-1 border-b border-ink px-5 py-6 sm:px-8 sm:py-7 md:border-r md:border-b-0">
            <h2 className="mb-4 font-sans text-lg font-bold text-ink">考试须知：</h2>
            <ol className="space-y-2.5 font-sans text-sm leading-relaxed text-ink sm:text-base">
              {RULES.map((rule, i) => (
                <li key={rule} className="flex gap-1">
                  <span className="w-5 shrink-0 font-medium">{i + 1}.</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex w-full flex-col px-5 py-6 sm:px-8 sm:py-7 md:w-96 md:shrink-0">
            <div className="mb-4 flex items-baseline justify-between gap-3 font-sans text-base text-ink sm:text-lg">
              <span>理论考试{candidate.station}考台</span>
              <span>
                合格次数：<strong>{passCount}</strong>
              </span>
            </div>

            <label className="mb-2 block font-sans text-base text-bad sm:text-lg">
              身份证号：
              <input
                value={candidate.idNumber}
                onChange={(e) => setCandidate({ idNumber: e.target.value.replace(/\s/g, "") })}
                className="ml-1 w-[11.5rem] border-0 border-b border-bad/40 bg-transparent font-sans text-base text-bad outline-none sm:w-56"
                inputMode="numeric"
                maxLength={18}
                aria-label="身份证号"
              />
            </label>
            <label className="mb-4 block font-sans text-base text-bad sm:text-lg">
              考生姓名：
              <input
                value={candidate.name}
                onChange={(e) => setCandidate({ name: e.target.value })}
                className="ml-1 w-40 border-0 border-b border-bad/40 bg-transparent font-sans text-base text-bad outline-none"
                maxLength={12}
                aria-label="考生姓名"
              />
            </label>

            <div className="mb-5 flex flex-wrap gap-4 font-sans text-sm text-ink">
              <label className="flex items-center gap-1">
                性别
                <select
                  className="border border-line bg-paper-2 px-1 py-0.5"
                  value={candidate.gender}
                  onChange={(e) => setCandidate({ gender: e.target.value as Gender })}
                >
                  <option>男</option>
                  <option>女</option>
                </select>
              </label>
              <label className="flex items-center gap-1">
                类型
                <select
                  className="border border-line bg-paper-2 px-1 py-0.5"
                  value={candidate.vehicleType}
                  onChange={(e) => setCandidate({ vehicleType: e.target.value as VehicleType })}
                >
                  <option>小车</option>
                  <option>货车</option>
                  <option>客车</option>
                  <option>摩托车</option>
                </select>
              </label>
            </div>

            <div className="flex flex-col items-center gap-3">
              {exam ? (
                <div className="flex w-full flex-col items-center gap-2">
                  <button type="button" className="win-btn px-10 py-2.5 text-lg" onClick={resumeExam}>
                    继续考试
                  </button>
                  <button type="button" className="win-btn px-10 py-2 text-base" onClick={startExam}>
                    重新开考
                  </button>
                </div>
              ) : (
                <button type="button" className="win-btn px-12 py-2.5 text-lg" onClick={startExam}>
                  确认
                </button>
              )}
              <p className="mt-2 text-center font-sans text-lg font-medium text-bad">
                点击“确认”按钮开始考试！
              </p>
            </div>

            <p className="mt-auto pt-6 font-sans text-xs leading-relaxed text-muted sm:text-sm">
              操作提示：每题考试答案确定后，点击【下一题】，电脑立即判定所选答案，如选择错误，系统将提示正确答案，提示后不允许修改答案。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
