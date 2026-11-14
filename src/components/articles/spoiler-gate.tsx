import { ChevronDown, EyeOff } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SpoilerGateProps = {
  label?: string;
  children: ReactNode;
  className?: string;
};

export function SpoilerGate({
  label = "This section discusses major story events.",
  children,
  className,
}: SpoilerGateProps) {
  return (
    <details
      className={cn(
        "spoiler-details group overflow-hidden rounded-xl border border-arcane/35 bg-arcane/[0.055]",
        className,
      )}
    >
      <summary className="flex items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-arcane/[0.06]">
        <span className="grid size-9 shrink-0 place-items-center rounded-md border border-arcane/30 bg-arcane/10 text-arcane">
          <EyeOff aria-hidden="true" className="size-[18px]" strokeWidth={1.8} />
        </span>
        <span className="min-w-0">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-arcane">
            Major spoilers
          </span>
          <span className="mt-0.5 block text-sm text-fog">{label}</span>
        </span>
        <span className="ml-auto flex shrink-0 items-center gap-2 text-xs font-semibold text-arcane">
          <span className="group-open:hidden">Reveal</span>
          <span className="hidden group-open:inline">Hide</span>
          <ChevronDown
            aria-hidden="true"
            className="size-4 transition-transform group-open:rotate-180"
          />
        </span>
      </summary>
      <div className="border-t border-arcane/20 px-5 py-5">{children}</div>
    </details>
  );
}
