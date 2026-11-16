"use client";

import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const VISIBILITY_THRESHOLD = 600;

export function BackToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    function updateVisibility() {
      frame = 0;
      setVisible(window.scrollY > VISIBILITY_THRESHOLD);
    }

    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(updateVisibility);
    }

    updateVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  function scrollToTop() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      title="Back to top"
      className={cn(
        "fixed right-4 bottom-[calc(1rem_+_env(safe-area-inset-bottom))] z-40 grid size-11 place-items-center rounded-full border border-line bg-surface/90 text-fog shadow-panel backdrop-blur-md transition-[opacity,transform,color,border-color,background-color] duration-200 hover:border-signal/60 hover:bg-raised hover:text-signal sm:right-6 sm:bottom-6 print:hidden",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp aria-hidden="true" className="size-5" strokeWidth={2} />
    </button>
  );
}
