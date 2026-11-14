import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn(
        "group inline-flex shrink-0 items-center gap-2.5 rounded-sm",
        className,
      )}
    >
      <span className="grid size-9 place-items-center rounded-md border border-signal/35 bg-signal/10 text-signal shadow-[inset_0_0_22px_rgba(56,217,245,0.12)] transition-colors group-hover:border-signal/70">
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="size-6"
          fill="none"
        >
          <path
            d="M16 2.8 27.4 9.4v13.2L16 29.2 4.6 22.6V9.4L16 2.8Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path d="m13 11.5 8 4.5-8 4.5v-9Z" fill="currentColor" />
          <circle cx="24.2" cy="7.6" r="1.7" fill="#9B7BFF" />
        </svg>
      </span>
      <span className="font-display text-[1.06rem] font-bold tracking-[-0.02em] text-mist">
        {siteConfig.name}
      </span>
    </Link>
  );
}
