import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-line bg-card/40 px-6 py-14 text-center",
        className,
      )}
    >
      <span className="grid size-12 place-items-center rounded-lg border border-line bg-surface text-dim">
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold text-mist">
        {title}
      </h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-fog">
        {description}
      </p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
