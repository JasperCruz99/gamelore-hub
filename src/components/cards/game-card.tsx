import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Play, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  getGuidesByGame,
  getLoreByGame,
  getVideosByGame,
} from "@/lib/content";
import { cn, pluralize } from "@/lib/utils";
import type { Game } from "@/types";

type GameCardProps = {
  game: Game;
  className?: string;
  imageSizes?: string;
};

export function GameCard({
  game,
  className,
  imageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: GameCardProps) {
  const guideCount = getGuidesByGame(game.slug).length;
  const loreCount = getLoreByGame(game.slug).length;
  const videoCount = getVideosByGame(game.slug).length;

  return (
    <Link
      href={`/games/${game.slug}`}
      aria-label={`${game.title} game hub`}
      className={cn(
        "group card-lift block h-full overflow-hidden rounded-xl border border-line bg-card/80",
        className,
      )}
    >
      <article className="flex h-full flex-col">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={game.coverImage}
            alt={game.coverAlt}
            fill
            sizes={imageSizes}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.045]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/5 to-transparent" />
          <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {game.featured ? (
                <Badge variant="signal" className="bg-page/75 backdrop-blur">
                  Featured
                </Badge>
              ) : null}
              <Badge className="bg-page/75 backdrop-blur">
                {game.releaseYear}
              </Badge>
            </div>
            <span
              aria-hidden="true"
              className="grid size-8 place-items-center rounded-md border border-white/10 bg-page/55 text-fog opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"
            >
              <ArrowUpRight className="size-4" />
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-signal/90">
              {game.genres[0]}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-mist transition-colors group-hover:text-signal">
            {game.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-fog">
            {game.description}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-x-3.5 gap-y-1.5 pt-4 text-[11px] text-dim">
            <span className="inline-flex items-center gap-1.5">
              <BookOpen aria-hidden="true" className="size-3.5" />
              {pluralize(guideCount, "guide")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles aria-hidden="true" className="size-3.5" />
              {pluralize(loreCount, "lore entry", "lore entries")}
            </span>
            {videoCount > 0 ? (
              <span className="inline-flex items-center gap-1.5">
                <Play aria-hidden="true" className="size-3.5" />
                {pluralize(videoCount, "video")}
              </span>
            ) : null}
          </div>
        </div>
      </article>
    </Link>
  );
}
