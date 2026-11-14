import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  EyeOff,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { ChannelCard } from "@/components/cards/channel-card";
import { CategoryCard } from "@/components/cards/category-card";
import { GameCard } from "@/components/cards/game-card";
import { GuideCard } from "@/components/cards/guide-card";
import { LoreCard } from "@/components/cards/lore-card";
import { VideoCard } from "@/components/cards/video-card";
import { ButtonLink } from "@/components/ui/button";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { contentCategories } from "@/data/categories";
import { featuredChannels, videos } from "@/data/videos";
import { games } from "@/data/games";
import { guides } from "@/data/guides";
import { loreEntries } from "@/data/lore";
import {
  getLatestGuides,
  getLoreEntry,
  getVideo,
} from "@/lib/content";
import { pluralize } from "@/lib/utils";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description:
    "Discover guides, hidden lore, secrets, cheats, and curated video resources for the PC games you love. An independent editorial resource.",
};

const homeGameOrder = [
  "elden-ring",
  "baldurs-gate-3",
  "cyberpunk-2077",
  "the-witcher-3",
  "red-dead-redemption-2",
  "minecraft",
];

const spotlightLoreSlugs = [
  "cyberpunk-night-city-corporate-ladder",
  "elden-ring-landscape-as-story",
  "witcher-schools-of-the-witchers",
];

const spotlightVideoSlugs = [
  "cyberpunk-lore-deep-dive",
  "elden-ring-limgrave-route",
  "witcher-white-orchard-route",
];

export default function HomePage() {
  const gamesById = new Map(games.map((game) => [game.slug, game]));
  const homeGames = homeGameOrder
    .map((slug) => gamesById.get(slug))
    .filter((game): game is NonNullable<typeof game> => Boolean(game));

  const latestGuides = getLatestGuides(3);
  const loreSpotlight = spotlightLoreSlugs
    .map(getLoreEntry)
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const videoSpotlight = spotlightVideoSlugs
    .map(getVideo)
    .filter((video): video is NonNullable<typeof video> => Boolean(video));

  const counts = {
    games: games.length,
    guides: guides.length,
    lore: loreEntries.length,
    videos: videos.length,
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-line/70">
        <Image
          src="/images/hero-atmosphere.svg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-page via-page/90 to-page/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-page via-transparent to-page/40" />
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-50" />

        <div className="shell relative py-20 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
              Your next level starts here
            </p>
            <h1 className="mt-5 font-display text-[2.65rem] font-bold leading-[1.02] tracking-[-0.045em] text-mist text-balance sm:text-6xl lg:text-[4.25rem]">
              Explore every game{" "}
              <span className="text-signal">beyond the screen.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-fog sm:text-lg">
              Discover walkthroughs, hidden lore, secrets, cheats, and the best
              videos for the PC games you love — collected in one calm,
              spoiler-aware library.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/games" size="lg">
                Explore games
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
              <ButtonLink href="/guides" size="lg" variant="secondary">
                Browse guides
                <BookOpen aria-hidden="true" className="size-4" />
              </ButtonLink>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line/70 pt-5 text-xs text-dim">
              <span className="font-semibold uppercase tracking-[0.16em] text-fog">
                Demo library
              </span>
              <span>{pluralize(counts.games, "game")}</span>
              <span aria-hidden="true" className="size-1 rounded-full bg-line" />
              <span>{pluralize(counts.guides, "guide")}</span>
              <span aria-hidden="true" className="size-1 rounded-full bg-line" />
              <span>{pluralize(counts.lore, "lore entry", "lore entries")}</span>
              <span aria-hidden="true" className="size-1 rounded-full bg-line" />
              <span>{pluralize(counts.videos, "video slot")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Featured games"
          title="Start with a world worth exploring"
          description="Each game hub collects the guides, lore, verified commands, and video resources for that title in one place."
          action={
            <ButtonLink href="/games" variant="outline" size="sm">
              View all games
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>

      <section className="border-y border-line/70 bg-surface/25">
        <div className="shell py-16 sm:py-20">
          <SectionHeading
            eyebrow="Browse by category"
            title="Find the kind of help you need"
            description="Looking for a first-hour primer, a boss plan, a spoiler-light lore explainer, or a verified command? Start with a category."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contentCategories.map((category) => (
              <CategoryCard key={category.title} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Latest guides"
          title="Fresh editorial for your next session"
          description="Beginner-friendly primers and practical guides with clear reading times and update dates."
          action={
            <ButtonLink href="/guides" variant="outline" size="sm">
              All guides
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latestGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-arcane/20 bg-gradient-to-b from-arcane/[0.045] to-surface/20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/3 size-[420px] rounded-full bg-arcane/[0.06] blur-3xl"
        />
        <div className="shell relative py-16 sm:py-20">
          <SectionHeading
            eyebrow="Lore & secrets"
            title="The stories behind the systems"
            description="Worldbuilding, faction histories, character studies, and hidden details — labelled by spoiler level before you open them."
            action={
              <ButtonLink href="/lore" variant="outline" size="sm">
                Browse lore
                <Sparkles aria-hidden="true" className="size-3.5" />
              </ButtonLink>
            }
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {loreSpotlight.map((entry) => (
              <LoreCard key={entry.slug} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Video resources"
          title="Watch, then go play"
          description="A curated video section that starts as clearly labelled search placeholders — no invented video IDs, no fake creator attributions."
          action={
            <ButtonLink href="/videos" variant="outline" size="sm">
              All videos
              <Play aria-hidden="true" className="size-3.5" />
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videoSpotlight.map((video) => (
            <VideoCard key={video.slug} video={video} />
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-dim">
          Placeholder policy: each card opens a YouTube search for that topic.
          A real video ID and creator credit will replace it once verified.
        </p>
      </section>

      <section className="border-y border-line/70 bg-surface/25">
        <div className="shell py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">Featured channels</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.025em] text-mist">
                A home for creators who explain their work
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-fog">
                These are reserved slots, not endorsements. The goal is a
                directory that values clear explanations, spoiler awareness, and
                credit where it is due.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-line bg-card/60 p-4 text-xs leading-relaxed text-dim">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-signal"
                />
                <p>
                  No channel is presented as an official partner. Suggestions
                  are reviewed manually before any link is added.
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {featuredChannels.slice(0, 4).map((channel) => (
                <ChannelCard key={channel.name} channel={channel} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="newsletter" className="shell scroll-mt-24 py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-card/70 p-6 shadow-panel sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-signal/[0.09] blur-3xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow">Community</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-mist sm:text-4xl">
                A weekly trail through the library
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-fog">
                A future newsletter for new guides, lore drops, and verified
                command additions. For now this is a visual demo — the form does
                not subscribe you to anything.
              </p>
              <ul className="mt-5 grid gap-2 text-xs text-dim">
                <li className="flex items-center gap-2">
                  <EyeOff aria-hidden="true" className="size-3.5 text-arcane" />
                  Spoiler-aware recommendations
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck aria-hidden="true" className="size-3.5 text-success" />
                  No fabricated stats or review quotes
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles aria-hidden="true" className="size-3.5 text-signal" />
                  New games and content types as the library grows
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-line/80 bg-page/50 p-5 sm:p-6">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      <section className="shell pb-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Clearly labelled",
              body: "Guides, opinions, trivia, and verified commands are separated instead of blended into one voice.",
            },
            {
              icon: EyeOff,
              title: "Spoiler-aware",
              body: "Major lore reveals are labelled and gated. Mild spoilers are marked before you open an entry.",
            },
            {
              icon: BookOpen,
              title: "Built to extend",
              body: "Games, guides, lore, cheats, and videos live in typed data files, ready for more titles.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-line bg-card/50 p-5"
              >
                <Icon
                  aria-hidden="true"
                  className="size-5 text-signal"
                  strokeWidth={1.7}
                />
                <h2 className="mt-3 font-display text-base font-semibold text-mist">
                  {item.title}
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-fog">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
