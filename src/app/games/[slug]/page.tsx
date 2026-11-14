import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Play,
  Sparkles,
  Terminal,
} from "lucide-react";

import { Callout } from "@/components/articles/callout";
import { CheatCard } from "@/components/cards/cheat-card";
import { GameCard } from "@/components/cards/game-card";
import { GuideCard } from "@/components/cards/guide-card";
import { LoreCard } from "@/components/cards/lore-card";
import { VideoCard } from "@/components/cards/video-card";
import { GameHero } from "@/components/game/game-hero";
import { QuickNav } from "@/components/navigation/quick-nav";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeading } from "@/components/ui/section-heading";
import { games } from "@/data/games";
import {
  getCheatNote,
  getCheatsByGame,
  getGame,
  getGuidesByGame,
  getLoreByGame,
  getRelatedGames,
  getVideosByGame,
} from "@/lib/content";
import { formatDate, pluralize } from "@/lib/utils";

type GamePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);

  if (!game) {
    return { title: "Game not found" };
  }

  return {
    title: game.title,
    description: game.description,
    alternates: { canonical: `/games/${game.slug}` },
    openGraph: {
      title: game.title,
      description: game.description,
      url: `/games/${game.slug}`,
      type: "website",
    },
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGame(slug);

  if (!game) {
    notFound();
  }

  const gameGuides = getGuidesByGame(game.slug);
  const gameLore = getLoreByGame(game.slug);
  const gameCheats = getCheatsByGame(game.slug);
  const gameVideos = getVideosByGame(game.slug);
  const relatedGames = getRelatedGames(game);
  const cheatNote = getCheatNote(game.slug);

  const quickNavItems = [
    { id: "overview", label: "Overview" },
    { id: "guides", label: "Guides", count: gameGuides.length },
    { id: "lore", label: "Lore & secrets", count: gameLore.length },
    { id: "cheats", label: "Cheats", count: gameCheats.length },
    { id: "videos", label: "Videos", count: gameVideos.length },
    { id: "related", label: "Related" },
  ];

  return (
    <>
      <GameHero game={game} />
      <QuickNav
        items={quickNavItems}
        ariaLabel={`${game.title} page sections`}
      />

      <section id="overview" className="scroll-mt-32">
        <div className="shell py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <SectionHeading
                eyebrow="Overview"
                title={`${game.title}, at a glance`}
              />
              <div className="prose-gaming mt-6">
                {game.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <Callout
                type="tip"
                title="Fun fact"
                body={game.funFact}
              />

              <p className="mt-5 text-xs leading-relaxed text-dim">
                Editorial note: this overview mixes public release information
                with editorial framing. It is not an official publisher
                description, and mechanics can change with updates or
                expansions.
              </p>
            </div>

            <aside className="h-fit rounded-xl border border-line bg-card/65 p-5 shadow-panel lg:sticky lg:top-36">
              <h2 className="font-display text-lg font-semibold text-mist">
                Fact sheet
              </h2>
              <dl className="mt-4 grid gap-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-line/60 pb-3">
                  <dt className="text-dim">Developer</dt>
                  <dd className="text-right text-fog">{game.developer}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line/60 pb-3">
                  <dt className="text-dim">Publisher</dt>
                  <dd className="text-right text-fog">{game.publisher}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line/60 pb-3">
                  <dt className="text-dim">Release</dt>
                  <dd className="text-right text-fog">
                    {formatDate(game.releaseDate)}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line/60 pb-3">
                  <dt className="text-dim">Modes</dt>
                  <dd className="text-right text-fog">
                    {game.modes.join(", ")}
                  </dd>
                </div>
              </dl>

              <div className="mt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
                  Genres
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {game.genres.map((genre) => (
                    <Badge key={genre} variant="outline">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
                  Platforms
                </p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {game.platforms.map((platform) => (
                    <li
                      key={platform}
                      className="rounded border border-line bg-surface/60 px-2 py-1 text-[11px] text-fog"
                    >
                      {platform}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-lg border border-line/70 bg-page/45 p-3 text-[11px] leading-relaxed text-dim">
                Demo profile. Platform availability and edition contents can
                differ by region and storefront.
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="guides"
        className="scroll-mt-32 border-y border-line/70 bg-surface/25"
      >
        <div className="shell py-12 sm:py-16">
          <SectionHeading
            eyebrow="Guides"
            title={`${game.title} guides`}
            description={`${pluralize(gameGuides.length, "guide")} for this game, from first-hour primers to focused strategies.`}
            action={
              <ButtonLink
                href={`/guides?game=${game.slug}`}
                variant="outline"
                size="sm"
              >
                All game guides
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </ButtonLink>
            }
          />
          {gameGuides.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gameGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={BookOpen}
              title="No guides for this game yet"
              description="The library is still growing. Browse the full guides directory for other games and systems."
              className="mt-8"
              action={
                <ButtonLink href="/guides" variant="secondary">
                  Browse all guides
                </ButtonLink>
              }
            />
          )}
        </div>
      </section>

      <section id="lore" className="scroll-mt-32">
        <div className="shell py-12 sm:py-16">
          <SectionHeading
            eyebrow="Lore & secrets"
            title="The stories beneath the surface"
            description="Worldbuilding, characters, factions, hidden details, and trivia. Spoiler levels are labelled on every entry."
            action={
              <ButtonLink
                href={`/lore?game=${game.slug}`}
                variant="outline"
                size="sm"
              >
                All lore entries
                <Sparkles aria-hidden="true" className="size-3.5" />
              </ButtonLink>
            }
          />
          {gameLore.length > 0 ? (
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {gameLore.map((entry) => (
                <LoreCard key={entry.slug} entry={entry} />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={Sparkles}
              title="No lore entries for this game yet"
              description="Lore coverage is added selectively. Browse the lore directory for other worlds."
              className="mt-8"
              action={
                <ButtonLink href="/lore" variant="secondary">
                  Browse lore
                </ButtonLink>
              }
            />
          )}
        </div>
      </section>

      <section
        id="cheats"
        className="scroll-mt-32 border-y border-line/70 bg-surface/25"
      >
        <div className="shell py-12 sm:py-16">
          <SectionHeading
            eyebrow="Cheats & commands"
            title="Verified commands and in-game secrets"
            description="Only entries we can represent accurately are listed. Third-party trainers, cracks, and anti-cheat bypasses are out of scope."
            action={
              <ButtonLink
                href="/cheats"
                variant="outline"
                size="sm"
              >
                Cheats library
                <Terminal aria-hidden="true" className="size-3.5" />
              </ButtonLink>
            }
          />

          {gameCheats.length > 0 ? (
            <>
              <Callout
                type="warning"
                title="Read the caveats before activating"
                body="Cheats can disable saving, achievements, or progression depending on the game. Check each entry's warnings and keep a separate save."
              />
              <div className="grid items-start gap-5 lg:grid-cols-2">
                {gameCheats.map((cheat) => (
                  <CheatCard key={cheat.slug} cheat={cheat} showGame={false} />
                ))}
              </div>
            </>
          ) : (
            <EmptyState
              icon={Terminal}
              title={`No verified cheats for ${game.title}`}
              description={
                cheatNote ??
                "This hub only lists commands and codes it can verify. Browse the cheats library for other games or use the guides for legitimate tips."
              }
              className="mt-8"
              action={
                <ButtonLink href="/cheats" variant="secondary">
                  Browse cheats library
                </ButtonLink>
              }
            />
          )}
        </div>
      </section>

      <section id="videos" className="scroll-mt-32">
        <div className="shell py-12 sm:py-16">
          <SectionHeading
            eyebrow="Video resources"
            title={`${game.title} videos`}
            description="Curated slots for walkthroughs, lore explainers, and practical tutorials. Every card is a clearly labelled demo placeholder until a real video is verified."
            action={
              <ButtonLink
                href={`/videos?game=${game.slug}`}
                variant="outline"
                size="sm"
              >
                Video directory
                <Play aria-hidden="true" className="size-3.5" />
              </ButtonLink>
            }
          />
          {gameVideos.length > 0 ? (
            <>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {gameVideos.map((video) => (
                  <VideoCard key={video.slug} video={video} />
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-dim">
                Placeholder links open a YouTube search for the topic. No
                specific video or creator is being represented as verified.
              </p>
            </>
          ) : (
            <EmptyState
              icon={Play}
              title="No video slots for this game yet"
              description="The video directory is curated separately. Browse the full video library for other games."
              className="mt-8"
              action={
                <ButtonLink href="/videos" variant="secondary">
                  Browse videos
                </ButtonLink>
              }
            />
          )}
        </div>
      </section>

      <section
        id="related"
        className="scroll-mt-32 border-t border-line/70 bg-surface/20"
      >
        <div className="shell py-12 sm:py-16">
          <SectionHeading
            eyebrow="Related games"
            title="If this world clicks, try these next"
            description="Recommendations based on genre, developer history, gameplay style, or theme."
            action={
              <Link
                href="/games"
                className="text-xs font-semibold text-signal transition-colors hover:text-mist"
              >
                All games
              </Link>
            }
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedGames.map((related) => (
              <GameCard key={related.slug} game={related} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
