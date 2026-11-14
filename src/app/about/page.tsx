import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, EyeOff, ShieldCheck, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/ui/page-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${siteConfig.name} is an independent editorial resource for PC game guides, lore, secrets, cheats, and video curation.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the project"
        title="An editorial library, not a launcher."
        description={`${siteConfig.name} exists to answer a simple question: where do I go when I want to understand a game better, without wading through a dozen tabs, autoplay videos, and contradictory patch notes?`}
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="signal">Independent fan resource</Badge>
          <Badge variant="outline">Editorial demo library</Badge>
          <Badge variant="outline">No official affiliation</Badge>
        </div>
      </PageHeader>

      <div className="shell py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="prose-gaming max-w-none">
            <h2>What this site is</h2>
            <p>
              {siteConfig.name} is a browsing-first resource for PC games. Each
              game hub collects beginner guides, deeper walkthroughs, lore and
              story explainers, hidden details, clearly labelled cheats, and
              video resources. The goal is to make the useful path obvious
              before you have to scroll.
            </p>
            <p>
              The content is organized around games and content types, not
              around a feed. You can start from a game, a question, or a
              category such as boss strategies or spoiler-free lore. Search
              covers the whole library.
            </p>

            <h2>What this site is not</h2>
            <p>
              This is not a game launcher, storefront, download site, or
              marketplace. It does not provide pirated game files, cracks,
              unauthorized keys, or links to suspicious executables. It does not
              bypass anti-cheat systems or paid access.
            </p>
            <p>
              It is also not an official publisher resource. Game names,
              trademarks, and related assets belong to their respective owners.
              Nothing here should be read as an official statement from a game
              developer or publisher.
            </p>

            <h2>How the editorial approach works</h2>
            <p>
              Guides are written as original summaries and practical
              explanations. They avoid fabricated review scores, player counts,
              and statistics. When a claim is version-specific, the guide says
              so and recommends checking official sources. Update dates are
              shown to make staleness visible.
            </p>
            <p>
              Lore entries are labelled as editorial interpretation, not canon.
              Major spoilers are gated behind a reveal control. Cheat entries
              show their verification status, source links, and any known
              achievement or save caveats.
            </p>

            <h2>Why the video section is honest about placeholders</h2>
            <p>
              Video cards do not invent YouTube IDs or attribute made-up videos
              to real creators. The initial demo uses clearly labelled search
              links. A real video entry will only be added once the channel,
              video, and advice can be checked and credited.
            </p>

            <h2>How the library grows</h2>
            <p>
              The site is built with typed data files for games, guides, lore,
              cheats, and videos. Adding a game means adding its data and
              artwork, not redesigning the site. The current demo library
              includes six games and a deliberately small set of complete
              entries.
            </p>
          </div>

          <aside className="h-fit space-y-4 lg:sticky lg:top-24">
            {[
              {
                icon: BookOpen,
                title: "Readable first",
                body: "Comfortable line lengths, clear headings, and reading-time estimates for long-form guides.",
              },
              {
                icon: EyeOff,
                title: "Spoiler-aware",
                body: "Lore labels and gates are treated as a core part of the interface, not an afterthought.",
              },
              {
                icon: ShieldCheck,
                title: "No fake integrations",
                body: "The newsletter form says it is a demo. Video placeholders say they are placeholders.",
              },
              {
                icon: Sparkles,
                title: "Built to extend",
                body: "Typed content makes it practical to add games, guides, lore, cheats, and videos over time.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-line bg-card/55 p-4"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-4 text-signal"
                    strokeWidth={1.7}
                  />
                  <h2 className="mt-2.5 font-display text-sm font-semibold text-mist">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-fog">
                    {item.body}
                  </p>
                </div>
              );
            })}

            <div className="rounded-xl border border-line bg-card/45 p-4 text-xs leading-relaxed text-dim">
              Suggestions and corrections are handled through the project
              repository.{" "}
              <Link
                href="/contact"
                className="font-semibold text-signal hover:text-mist"
              >
                Contact page
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
