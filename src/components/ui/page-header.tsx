import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line/70 bg-surface/25",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-40 size-[420px] rounded-full bg-signal/[0.055] blur-3xl"
      />
      <div className="shell relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 font-display text-[2.35rem] font-bold leading-[1.05] tracking-[-0.04em] text-mist text-balance sm:text-5xl lg:text-[3.55rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-fog sm:text-base">
            {description}
          </p>
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
