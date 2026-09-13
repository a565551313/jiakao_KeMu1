import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function FieldsetBox({
  legend,
  className,
  bodyClassName,
  children,
}: {
  legend: string;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn("fieldset-box", className)}>
      <span className="fieldset-legend">{legend}</span>
      <div className={cn("h-full", bodyClassName)}>{children}</div>
    </section>
  );
}
