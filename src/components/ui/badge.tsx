import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "default"
  | "signal"
  | "arcane"
  | "success"
  | "caution"
  | "danger"
  | "outline";

const variants: Record<BadgeVariant, string> = {
  default: "border-line bg-surface/80 text-fog",
  signal: "border-signal/35 bg-signal/10 text-signal",
  arcane: "border-arcane/35 bg-arcane/10 text-arcane",
  success: "border-success/35 bg-success/10 text-success",
  caution: "border-caution/40 bg-caution/10 text-caution",
  danger: "border-red-400/40 bg-red-400/10 text-red-300",
  outline: "border-line bg-transparent text-fog",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium leading-none tracking-wide",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
