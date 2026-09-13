import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExamScreen } from "@/components/exam-screen";
import { ResultScreen } from "@/components/result-screen";
import { StartScreen } from "@/components/start-screen";
import { useExamStore } from "@/lib/exam-store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const hydrate = useExamStore((s) => s.hydrate);
  const hydrated = useExamStore((s) => s.hydrated);
  const screen = useExamStore((s) => s.screen);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  if (!hydrated || screen === "start") return <StartScreen />;
  if (screen === "exam") return <ExamScreen />;
  return <ResultScreen />;
}
