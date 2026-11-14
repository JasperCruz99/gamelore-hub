import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import {
  BookOpen,
  BadgeCheck,
  ShieldAlert,
  Terminal,
  TriangleAlert,
  Users,
} from "lucide-react";

import { Callout } from "@/components/articles/callout";
import { CheatsBrowser } from "@/components/filters/cheats-browser";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { DirectorySkeleton } from "@/components/ui/directory-skeleton";
import { PageHeader } from "@/components/ui/page-header";
import { cheats, cheatNotes } from "@/data/cheats";
import { getGame } from "@/lib/content";
import { pluralize } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cheats & Commands",
  description:
    "Verified console commands, cheat codes, and in-game secrets for PC games, with platform notes, requirements, and achievement or save warnings.",
  alternates: { canonical: "/cheats" },
};

const verificationKey = [
  {
    label: "Documented",
    icon: BadgeCheck,
    className: "text-success",
    description:
      "Built-in commands or codes documented by the game or a maintained reference.",
  },
  {
    label: "Community-verified",
    icon: Users,
    className: "text-caution",
    description:
      "Corroborated by multiple community sources, but not published in an official list.",
  },
  {
    label: "Unofficial",
    icon: TriangleAlert,
    className: "text-red-300",
    description:
      "Not part of the base game. Listed only when the caveat is the important part.",
  },
];

export default function CheatsPage() {
  const gamesWithoutCheats = cheatNotes.flatMap((note) => {
    const game = getGame(note.gameSlug);
    return game ? [{ note, game }] : [];
  });

  return (
    <>
      <PageHeader
        eyebrow="Cheats & secrets"
        title="Commands with the caveats attached."
        description="A small, carefully labelled collection of console commands, cheat codes, and in-game secrets. Every entry shows its platform, requirements, effects, and whether it can affect achievements or saves."
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="caution">
            <Terminal aria-hidden="true" className="size-3" />
            {pluralize(cheats.length, "verified entry", "verified entries")}
          </Badge>
          <Badge variant="outline">No trainers or cracks</Badge>
          <Badge variant="outline">Warnings shown up front</Badge>
        </div>
      </PageHeader>

      <div className="shell py-10 sm:py-12">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Callout
            type="warning"
            title="Save first, then experiment"
            body="Some cheats disable saving or achievements while active. Others only work in a specific mode or edition. If an entry can affect progression, it is labelled before the code."
            className="my-0"
          />
          <div className="rounded-xl border border-line bg-card/55 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
              What this page will never include
            </p>
            <ul className="mt-2.5 grid gap-1.5 text-xs leading-relaxed text-fog">
              <li>No pirated files, cracks, or unauthorized keys.</li>
              <li>No anti-cheat bypasses or malware-looking tools.</li>
              <li>No invented commands presented as verified.</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3 rounded-xl border border-line bg-surface/35 p-4">
          {verificationKey.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex min-w-[200px] flex-1 items-start gap-2.5"
              >
                <Icon
                  aria-hidden="true"
                  className={`mt-0.5 size-4 shrink-0 ${item.className}`}
                  strokeWidth={1.8}
                />
                <div>
                  <p className="text-xs font-semibold text-mist">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-dim">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <Suspense fallback={<DirectorySkeleton label="cheats" cards={4} />}>
            <CheatsBrowser />
          </Suspense>
        </div>

        <section className="mt-14 border-t border-line/70 pt-10">
          <div className="flex items-start gap-3">
            <ShieldAlert
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-signal"
              strokeWidth={1.7}
            />
            <div>
              <h2 className="font-display text-2xl font-semibold text-mist">
                Games with no verified cheat codes
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fog">
                Some games simply do not ship with official cheats. When that is
                the case, the honest answer is to say so and point to legitimate
                difficulty tools instead of inventing a code.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {gamesWithoutCheats.map(({ game, note }) => (
              <div
                key={game.slug}
                className="rounded-xl border border-line bg-card/50 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-mist">
                    {game.title}
                  </h3>
                  <Badge variant="outline">No verified codes</Badge>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-fog">
                  {note.note}
                </p>
                <div className="mt-3 flex flex-wrap gap-4">
                  <Link
                    href={`/games/${game.slug}`}
                    className="text-[11px] font-semibold text-signal transition-colors hover:text-mist"
                  >
                    Game hub
                  </Link>
                  <Link
                    href={`/guides?game=${game.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-fog transition-colors hover:text-signal"
                  >
                    <BookOpen aria-hidden="true" className="size-3" />
                    Legitimate guides
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <ButtonLink href="/guides" variant="secondary">
              Browse guides instead
              <BookOpen aria-hidden="true" className="size-4" />
            </ButtonLink>
          </div>
        </section>
      </div>
    </>
  );
}
