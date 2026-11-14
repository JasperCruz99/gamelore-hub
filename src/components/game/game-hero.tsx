import Image from "next/image";
import {
  BookOpen,
  CalendarDays,
  Gamepad2,
  Play,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import type { Game } from "@/types";
import { formatDate } from "@/lib/utils";

type GameHeroProps = {
  game: Game;
};

export function GameHero({ game }: GameHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line/70">
      <Image
        src={game.coverImage}
        alt=""
        fill
        sizes="100vw"
        className="scale-105 object-cover object-center opacity-25 blur-[1px]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-page via-page/92 to-page/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-page via-page/35 to-page/60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/4 size-[460px] rounded-full opacity-[0.07] blur-3xl"
        style={{ backgroundColor: game.accent }}
      />

      <div className="shell relative py-8 sm:py-12 lg:py-14">
        <Breadcrumbs
          items={[
            { label: "Games", href: "/games" },
            { label: game.title },
          ]}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-end">
          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-xl border border-line bg-surface shadow-panel lg:block">
            <Image
              src={game.coverImage}
              alt={game.coverAlt}
              fill
              sizes="260px"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="signal">{game.genres[0]}</Badge>
              <Badge variant="outline">{game.releaseYear}</Badge>
              {game.featured ? <Badge variant="arcane">Editor&apos;s pick</Badge> : null}
            </div>

            <h1 className="mt-4 font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.045em] text-mist text-balance sm:text-5xl lg:text-[4rem]">
              {game.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-fog sm:text-lg">
              {game.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
              {game.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <a
                href="#guides"
                className={buttonStyles({ variant: "primary", size: "md" })}
              >
                <BookOpen aria-hidden="true" className="size-4" />
                Explore guides
              </a>
              <a
                href="#lore"
                className={buttonStyles({ variant: "secondary", size: "md" })}
              >
                <Sparkles aria-hidden="true" className="size-4" />
                Read lore
              </a>
              <a
                href="#videos"
                className={buttonStyles({ variant: "ghost", size: "md" })}
              >
                <Play aria-hidden="true" className="size-4" />
                Watch videos
              </a>
            </div>

            <dl className="mt-8 grid max-w-3xl gap-x-8 gap-y-4 border-t border-line/70 pt-6 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
                  Developer
                </dt>
                <dd className="mt-1 text-fog">{game.developer}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
                  Publisher
                </dt>
                <dd className="mt-1 text-fog">{game.publisher}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
                  <CalendarDays aria-hidden="true" className="size-3" />
                  Release
                </dt>
                <dd className="mt-1 text-fog">{formatDate(game.releaseDate)}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
                  <Gamepad2 aria-hidden="true" className="size-3" />
                  Modes
                </dt>
                <dd className="mt-1 text-fog">{game.modes.join(" · ")}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
                  Platforms
                </dt>
                <dd className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-fog">
                  {game.platforms.map((platform) => (
                    <span key={platform}>{platform}</span>
                  ))}
                </dd>
              </div>
            </dl>

            <p className="mt-4 text-[11px] text-dim">
              Cover art is original fan-made placeholder artwork. Game metadata
              is provided for orientation; verify current platform and edition
              details with the publisher.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
