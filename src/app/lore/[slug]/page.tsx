import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Eye, Sparkles } from "lucide-react";

import { Callout } from "@/components/articles/callout";
import { SpoilerGate } from "@/components/articles/spoiler-gate";
import { LoreCard } from "@/components/cards/lore-card";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { loreEntries } from "@/data/lore";
import {
  getGame,
  getLoreByGame,
  getLoreEntry,
} from "@/lib/content";

type LorePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return loreEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: LorePageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getLoreEntry(slug);

  if (!entry) {
    return { title: "Lore entry not found" };
  }

  return {
    title: entry.title,
    description: entry.excerpt,
    alternates: { canonical: `/lore/${entry.slug}` },
    openGraph: {
      title: entry.title,
      description: entry.excerpt,
      url: `/lore/${entry.slug}`,
      type: "article",
    },
  };
}

function SpoilerBadge({ level }: { level: "none" | "mild" | "major" }) {
  if (level === "major") {
    return (
      <Badge variant="danger">
        <Eye aria-hidden="true" className="size-3" />
        Major spoilers
      </Badge>
    );
  }
  if (level === "mild") {
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

export default async function LoreEntryPage({ params }: LorePageProps) {
  const { slug } = await params;
  const entry = getLoreEntry(slug);

  if (!entry) {
    notFound();
  }

  const game = getGame(entry.gameSlug);
  const relatedEntries = getLoreByGame(entry.gameSlug)
    .filter((item) => item.slug !== entry.slug)
    .slice(0, 2);

  return (
    <article className="shell py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { label: "Lore & Secrets", href: "/lore" },
          ...(game
            ? [{ label: game.title, href: `/games/${game.slug}` }]
            : []),
          { label: entry.title },
        ]}
      />

      <header className="mt-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="arcane">
            <Sparkles aria-hidden="true" className="size-3" />
            {entry.type}
          </Badge>
          <SpoilerBadge level={entry.spoiler} />
          {game ? (
            <Link
              href={`/games/${game.slug}`}
              className="text-xs font-medium text-fog transition-colors hover:text-signal"
            >
              {game.title}
            </Link>
          ) : null}
        </div>

        <h1 className="mt-4 font-display text-[2.2rem] font-bold leading-[1.06] tracking-[-0.04em] text-mist text-balance sm:text-5xl">
          {entry.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-fog">
          {entry.excerpt}
        </p>
        <p className="mt-4 inline-flex items-center gap-2 text-[11px] text-dim">
          <Sparkles aria-hidden="true" className="size-3.5 text-arcane" />
          Editorial analysis · GameLore Hub Editors
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0">
          <div className="rounded-xl border border-arcane/25 bg-card/55 p-5 shadow-panel sm:p-8">
            {entry.spoiler === "mild" ? (
              <Callout
                type="spoiler"
                title="Mild spoiler warning"
                body="This entry references story context and world details. It avoids major reveals, but it may still change how you read certain scenes."
              />
            ) : null}

            {entry.spoiler === "major" ? (
              <SpoilerGate
                label={`This entry discusses major story events for ${game?.title ?? "this game"}.`}
              >
                <div className="prose-gaming">
                  {entry.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </SpoilerGate>
            ) : (
              <div className="prose-gaming">
                {entry.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            <div className="mt-8 border-t border-line/70 pt-5 text-xs leading-relaxed text-dim">
              <p>
                <span className="font-semibold text-fog">Source note:</span>{" "}
                {entry.sourceNote ??
                  "This entry is an editorial reading of in-game text and visible world details. It is not an official canonical statement."}
              </p>
              <p className="mt-2">
                Game names and trademarks belong to their respective owners.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/lore"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-fog transition-colors hover:text-signal"
            >
              <ArrowLeft aria-hidden="true" className="size-3.5" />
              All lore entries
            </Link>
            {game ? (
              <ButtonLink
                href={`/games/${game.slug}`}
                variant="outline"
                size="sm"
              >
                Back to {game.title}
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </ButtonLink>
            ) : null}
          </div>

          {relatedEntries.length > 0 ? (
            <section className="mt-10 border-t border-line/70 pt-8">
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-display text-2xl font-semibold text-mist">
                  More from {game?.title}
                </h2>
                <Link
                  href={`/lore?game=${entry.gameSlug}`}
                  className="text-xs font-semibold text-signal transition-colors hover:text-mist"
                >
                  More lore
                </Link>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {relatedEntries.map((related) => (
                  <LoreCard key={related.slug} entry={related} />
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            {game ? (
              <div className="rounded-xl border border-line bg-card/55 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
                  Game hub
                </p>
                <Link
                  href={`/games/${game.slug}`}
                  className="group mt-3 flex items-center gap-3"
                >
                  <span className="relative h-20 w-16 shrink-0 overflow-hidden rounded-md border border-line">
                    <Image
                      src={game.coverImage}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-mist group-hover:text-signal">
                      {game.title}
                    </span>
                    <span className="mt-0.5 block text-[11px] text-dim">
                      Guides, lore, cheats, videos
                    </span>
                  </span>
                </Link>
              </div>
            ) : null}

            <div className="rounded-xl border border-arcane/25 bg-arcane/[0.04] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-arcane">
                How spoiler labels work
              </p>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-fog">
                <li>
                  <span className="font-semibold text-success">Spoiler-free</span>{" "}
                  — no story reveals.
                </li>
                <li>
                  <span className="font-semibold text-caution">Mild</span> —
                  context or early-game details.
                </li>
                <li>
                  <span className="font-semibold text-red-300">Major</span> —
                  gated behind a reveal control.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-line/70 bg-page/40 p-4 text-[11px] leading-relaxed text-dim">
              Lore is interpretive. The games rarely provide a single objective
              account, and community readings can differ.
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
