import type { Metadata } from "next";
import { Suspense } from "react";

import { LoreBrowser } from "@/components/filters/lore-browser";
import { Badge } from "@/components/ui/badge";
import { DirectorySkeleton } from "@/components/ui/directory-skeleton";
import { PageHeader } from "@/components/ui/page-header";
import { loreEntries } from "@/data/lore";
import { pluralize } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Lore & Secrets",
  description:
    "Story explanations, character histories, faction lore, worldbuilding, hidden details, easter eggs, and trivia for PC games. Spoilers are labelled.",
  alternates: { canonical: "/lore" },
};

export default function LorePage() {
  return (
    <>
      <PageHeader
        eyebrow="Lore & secrets"
        title="Read the world, not just the map."
        description="Some of the best parts of a game are never explained in a cutscene. This section collects story explainers, faction histories, character studies, hidden details, and trivia — with spoiler levels marked before you open anything."
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="arcane">
            {pluralize(loreEntries.length, "lore entry", "lore entries")}
          </Badge>
          <Badge variant="outline">Spoiler levels labelled</Badge>
          <Badge variant="outline">Editorial interpretation</Badge>
        </div>
      </PageHeader>

      <div className="shell py-10 sm:py-12">
        <p className="mb-5 max-w-3xl text-xs leading-relaxed text-dim">
          Lore entries are editorial readings based on in-game text, dialogue,
          and visible world details. They are not official canon statements.
          Major spoilers are gated behind a reveal control on the entry page.
        </p>
        <Suspense fallback={<DirectorySkeleton label="lore entries" cards={4} />}>
          <LoreBrowser />
        </Suspense>
      </div>
    </>
  );
}
