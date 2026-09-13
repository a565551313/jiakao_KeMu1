import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function DialogShell({
  title,
  children,
  wide,
}: {
  title: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/45 px-3">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dlg-title"
        className={cn(
          "w-full overflow-hidden rounded-sm bg-modal shadow-2xl",
          wide ? "max-w-xl" : "max-w-lg",
        )}
      >
        <h2
          id="dlg-title"
          className="px-4 py-3 text-center font-sans text-xl font-bold tracking-wide text-paper-2"
        >
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

export function DialogActions({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 px-6 py-5">{children}</div>
  );
}
