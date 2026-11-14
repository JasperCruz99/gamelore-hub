import { EyeOff, Info, Lightbulb, TriangleAlert } from "lucide-react";

import type { CalloutType } from "@/types";
import { cn } from "@/lib/utils";

const calloutStyles: Record<
  CalloutType,
  { wrapper: string; icon: string; label: string; Icon: typeof Info }
> = {
  tip: {
    wrapper: "border-success/35 bg-success/[0.06]",
    icon: "text-success",
    label: "Tip",
    Icon: Lightbulb,
  },
  warning: {
    wrapper: "border-caution/40 bg-caution/[0.06]",
    icon: "text-caution",
    label: "Warning",
    Icon: TriangleAlert,
  },
  spoiler: {
    wrapper: "border-arcane/40 bg-arcane/[0.07]",
    icon: "text-arcane",
    label: "Spoiler warning",
    Icon: EyeOff,
  },
  note: {
    wrapper: "border-signal/30 bg-signal/[0.045]",
    icon: "text-signal",
    label: "Note",
    Icon: Info,
  },
};

type CalloutProps = {
  type: CalloutType;
  title: string;
  body: string;
  className?: string;
};

export function Callout({ type, title, body, className }: CalloutProps) {
  const style = calloutStyles[type];
  const Icon = style.Icon;

  return (
    <aside
      aria-label={`${style.label}: ${title}`}
      className={cn(
        "my-7 rounded-lg border px-4 py-4 sm:px-5",
        style.wrapper,
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <Icon
          aria-hidden="true"
          className={cn("mt-0.5 size-[18px] shrink-0", style.icon)}
          strokeWidth={1.8}
        />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mist">
            {style.label}
          </p>
          <p className="mt-1 text-sm font-semibold text-mist">{title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-fog">{body}</p>
        </div>
      </div>
    </aside>
  );
}
