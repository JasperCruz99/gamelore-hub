import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { getGame } from "@/lib/content";
import { cn, formatDate, getReadingTime } from "@/lib/utils";
import type { Guide } from "@/types";

type GuideCardProps = {
  guide: Guide;
  className?: string;
  imageSizes?: string;
};

export function GuideCard({
  guide,
  className,
  imageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: GuideCardProps) {
  const game = getGame(guide.gameSlug);
  const readingTime = getReadingTime(guide);

  return (
    <Link
      href={`/guides/${guide.slug}`}
      aria-label={`${guide.title} — ${guide.category}`}
      className={cn(
        "group card-lift block h-full overflow-hidden rounded-xl border border-line bg-card/80",
        className,
      )}
    >
      <article className="flex h-full flex-col">
        <div className="relative aspect-[16/9] overflow-hidden border-b border-line/70">
          <Image
            src={game?.coverImage ?? "/images/hero-atmosphere.svg"}
            alt={
              game
                ? `Original cover art for ${game.title}, used as the thumbnail for this guide`
                : "Original placeholder artwork for a guide"
            }
            fill
            sizes={imageSizes}
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.045]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/10 to-transparent" />
          <div className="absolute inset-x-3 top-3 flex flex-wrap gap-1.5">
            <Badge variant="signal" className="bg-page/75 backdrop-blur">
              {guide.category}
            </Badge>
            {guide.featured ? (
              <Badge className="bg-page/75 backdrop-blur">Featured guide</Badge>
            ) : null}
          </div>
          <p className="absolute inset-x-4 bottom-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-fog">
            {game?.title ?? "GameLore Hub"}
          </p>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3 className="line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.015em] text-mist transition-colors group-hover:text-signal sm:text-[1.2rem]">
            {guide.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-fog">
            {guide.excerpt}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-x-3.5 gap-y-1.5 pt-4 text-[11px] text-dim">
            <span className="inline-flex items-center gap-1.5">
              <Clock aria-hidden="true" className="size-3.5" />
              {readingTime} min read
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays aria-hidden="true" className="size-3.5" />
              {formatDate(guide.updatedAt)}
            </span>
            <span className="ml-auto inline-flex items-center gap-1 font-semibold text-signal opacity-0 transition-opacity group-hover:opacity-100">
              Read
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
