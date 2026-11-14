"use client";

import { Check, Copy, TriangleAlert } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type CopyStatus = "idle" | "copied" | "error";

type CopyButtonProps = {
  value: string;
  label?: string;
  className?: string;
};

export function CopyButton({
  value,
  label = "Copy command",
  className,
}: CopyButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  async function handleCopy() {
    if (timer.current) window.clearTimeout(timer.current);

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    timer.current = window.setTimeout(() => setStatus("idle"), 2200);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-surface/90 px-2.5 text-[11px] font-semibold text-fog transition-colors hover:border-signal/50 hover:text-signal",
        className,
      )}
      aria-label={label}
    >
      {status === "copied" ? (
        <Check aria-hidden="true" className="size-3.5 text-success" />
      ) : status === "error" ? (
        <TriangleAlert aria-hidden="true" className="size-3.5 text-caution" />
      ) : (
        <Copy aria-hidden="true" className="size-3.5" />
      )}
      <span aria-live="polite">
        {status === "copied"
          ? "Copied"
          : status === "error"
            ? "Copy failed"
            : "Copy"}
      </span>
    </button>
  );
}
