import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Clock,
} from "lucide-react";

import { Callout } from "@/components/articles/callout";
import { TableOfContents } from "@/components/articles/table-of-contents";
import { GuideCard } from "@/components/cards/guide-card";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { guides } from "@/data/guides";
import {
  getGame,
  getGuide,
  getGuideNeighbours,
  getGuidesByGame,
  getLatestGuides,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { formatDate, getReadingTime } from "@/lib/utils";

export const instant = false;

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return { title: "Guide not found" };
  }

  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      url: `/guides/${guide.slug}`,
      type: "article",
      modifiedTime: guide.updatedAt,
      images: [
        {
          url: "/images/og-card.png",
          width: 1200,
          height: 630,
          alt: `${guide.title} — ${siteConfig.name}`,
        },
      ],
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const game = getGame(guide.gameSlug);
  const readingTime = getReadingTime(guide);
  const neighbours = getGuideNeighbours(guide.slug);

  const sameGameGuides = getGuidesByGame(guide.gameSlug).filter(
    (item) => item.slug !== guide.slug,
  );
  const fallbackGuides = getLatestGuides()
    .filter(
      (item) =>
        item.slug !== guide.slug &&
        !sameGameGuides.some((same) => same.slug === item.slug),
    )
    .slice(0, 1);
  const relatedGuides = [...sameGameGuides, ...fallbackGuides].slice(0, 3);

  return (
    <article className="shell py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/guides" },
          ...(game
            ? [{ label: game.title, href: `/games/${game.slug}` }]
            : []),
          { label: guide.title },
        ]}
      />

      <header className="mt-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="signal">{guide.category}</Badge>
          <Badge variant="outline">{guide.level}</Badge>
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
          {guide.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-fog">
          {guide.intro}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line/70 pt-4 text-xs text-dim">
          <span className="font-medium text-fog">{guide.author}</span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays aria-hidden="true" className="size-3.5" />
            Updated {formatDate(guide.updatedAt)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock aria-hidden="true" className="size-3.5" />
            {readingTime} min read
          </span>
          {game ? (
            <span className="inline-flex items-center gap-1.5">
              <BookOpen aria-hidden="true" className="size-3.5" />
              {game.title}
            </span>
          ) : null}
        </div>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0">
          <details className="spoiler-details group mb-4 rounded-xl border border-line bg-card/55 lg:hidden">
            <summary className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-mist">
              On this page
              <ChevronDown
                aria-hidden="true"
                className="size-4 text-dim transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="border-t border-line/70 px-4 py-3">
              <TableOfContents sections={guide.sections} />
            </div>
          </details>

          <div className="rounded-xl border border-line bg-card/55 p-5 shadow-panel sm:p-8">
            <div className="prose-gaming max-w-none">
              {guide.sections.map((section, index) => (
                <section
                  key={section.id}
                  className={index > 0 ? "mt-12" : undefined}
                >
                  <h2 id={section.id}>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && section.bullets.length > 0 ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.callout ? (
                    <Callout
                      type={section.callout.type}
                      title={section.callout.title}
                      body={section.callout.body}
                    />
                  ) : null}
                </section>
              ))}
            </div>

            <div className="mt-10 border-t border-line/70 pt-5 text-xs leading-relaxed text-dim">
              <p>
                <span className="font-semibold text-fog">Editorial note:</span>{" "}
                This guide is sample editorial content written for{" "}
                {siteConfig.name}. It is not an official publisher guide. Game
                systems, menus, and balance can change with updates.
              </p>
              <p className="mt-2">
                Author: {guide.author}. Last updated{" "}
                {formatDate(guide.updatedAt)}.
              </p>
            </div>
          </div>

          {relatedGuides.length > 0 ? (
            <section className="mt-10 border-t border-line/70 pt-8">
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-display text-2xl font-semibold text-mist">
                  Related guides
                </h2>
                <Link
                  href={
                    game ? `/guides?game=${game.slug}` : "/guides"
                  }
                  className="text-xs font-semibold text-signal transition-colors hover:text-mist"
                >
                  More guides
                </Link>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {relatedGuides.slice(0, 2).map((related) => (
                  <GuideCard key={related.slug} guide={related} />
                ))}
              </div>
            </section>
          ) : null}

          <nav
            aria-label="Guide pagination"
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {neighbours.previous ? (
              <Link
                href={`/guides/${neighbours.previous.slug}`}
                className="group rounded-lg border border-line bg-card/45 p-4 transition-colors hover:border-signal/40"
              >
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-dim">
                  <ArrowLeft aria-hidden="true" className="size-3" />
                  Previous guide
                </span>
                <span className="mt-1.5 block text-sm font-semibold text-fog group-hover:text-signal">
                  {neighbours.previous.title}
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
            {neighbours.next ? (
              <Link
                href={`/guides/${neighbours.next.slug}`}
                className="group rounded-lg border border-line bg-card/45 p-4 text-right transition-colors hover:border-signal/40"
              >
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-dim sm:justify-end">
                  Next guide
                  <ArrowRight aria-hidden="true" className="size-3" />
                </span>
                <span className="mt-1.5 block text-sm font-semibold text-fog group-hover:text-signal">
                  {neighbours.next.title}
                </span>
              </Link>
            ) : null}
          </nav>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <div className="rounded-xl border border-line bg-card/55 p-4">
              <TableOfContents sections={guide.sections} />
            </div>

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

            <div className="rounded-xl border border-line bg-card/45 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
                Spotted an issue?
              </p>
              <p className="mt-2 text-xs leading-relaxed text-fog">
                Guides can go stale after patches. If a detail is outdated,
                report it and include your game version.
              </p>
              <ButtonLink
                href="/contact"
                variant="outline"
                size="sm"
                className="mt-3 w-full"
              >
                Contact the editors
              </ButtonLink>
            </div>

            <div className="rounded-xl border border-line/70 bg-page/40 p-4 text-[11px] leading-relaxed text-dim">
              Reading time is estimated from the article text. Last updated
              dates reflect this demo library, not an official patch history.
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
