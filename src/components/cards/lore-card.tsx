import Link from "next/link";
import { ArrowRight, Eye, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { getGame } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { LoreEntry } from "@/types";

function spoilerBadge(entry: LoreEntry) {
  if (entry.spoiler === "major") {
    return (
      <Badge variant="danger">
        <Eye aria-hidden="true" className="size-3" />
        Major spoilers
      </Badge>
    );
  }
  if (entry.spoiler === "mild") {
    return (
      <Badge variant="caution">
        <Eye aria-hidden="true" className="size-3" />
        Mild spoilers
      </Badge>
    );
  }
  return (
    <Badge variant="success">
      <Eye aria-hidden="true" className="size-3" />
      Spoiler-free
    </Badge>
  );
}

type LoreCardProps = {
  entry: LoreEntry;
  className?: string;
};

export function LoreCard({ entry, className }: LoreCardProps) {
  const game = getGame(entry.gameSlug);

  return (
    <Link
      href={`/lore/${entry.slug}`}
      aria-label={`${entry.title} — ${entry.type} lore entry for ${game?.title ?? "a game"}`}
      className={cn(
        "group block h-full rounded-xl border border-arcane/25 bg-gradient-to-br from-arcane/[0.065] via-card/80 to-card/80 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-arcane/50 hover:shadow-panel",
        className,
      )}
    >
      <article className="flex h-full flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-arcane">
            <Sparkles aria-hidden="true" className="size-3.5" />
            {entry.type}
          </span>
          <span className="text-line" aria-hidden="true">
            /
          </span>
          {spoilerBadge(entry)}
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-mist transition-colors group-hover:text-arcane">
          {entry.title}
        </h3>
        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-fog">
          {entry.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line/60 pt-4 text-[11px] text-dim">
          <span className="font-medium text-fog">{game?.title}</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-arcane">
            Read entry
            <ArrowRight
              aria-hidden="true"
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </article>
    </Link>
  );
}
