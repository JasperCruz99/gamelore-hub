"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type QuickNavItem = {
  id: string;
  label: string;
  count?: number;
};

type QuickNavProps = {
  items: QuickNavItem[];
  ariaLabel?: string;
};

export function QuickNav({
  items,
  ariaLabel = "Page sections",
}: QuickNavProps) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="sticky top-16 z-40 border-b border-line/80 bg-page/88 backdrop-blur-xl">
      <nav aria-label={ariaLabel} className="shell">
        <ul className="scrollbar-none flex items-center gap-1 overflow-x-auto py-2">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium transition-colors sm:text-[13px]",
                    isActive
                      ? "bg-signal/10 text-signal"
                      : "text-fog hover:bg-raised/70 hover:text-mist",
                  )}
                >
                  {item.label}
                  {typeof item.count === "number" ? (
                    <span
                      className={cn(
                        "rounded-full border px-1.5 py-0.5 text-[10px] leading-none",
                        isActive
                          ? "border-signal/30 text-signal"
                          : "border-line text-dim",
                      )}
                    >
                      {item.count}
                    </span>
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
