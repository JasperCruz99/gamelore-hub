import type { Metadata } from "next";
import { Suspense } from "react";

import { DirectorySkeleton } from "@/components/ui/directory-skeleton";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { GamesBrowser } from "@/components/filters/games-browser";
import { games } from "@/data/games";
import { pluralize } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Games Directory",
  description:
    "Browse PC game hubs for guides, lore, secrets, cheats, and curated videos. Filter by genre, release era, and title.",
  alternates: { canonical: "/games" },
};

export default function GamesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Games directory"
        title="Find a world to fall into."
        description="Every game hub gathers the useful parts of the library in one place: beginner-friendly guides, lore explainers, verified commands, and video resources. Start with a title, then follow the threads."
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="signal">{pluralize(games.length, "game hub")}</Badge>
          <Badge variant="outline">Official publisher artwork</Badge>
          <Badge variant="outline">Local demo data</Badge>
        </div>
      </PageHeader>

      <div className="shell py-10 sm:py-12">
        <p className="mb-5 text-xs leading-relaxed text-dim">
          Search and filters run locally. The popularity order is an editorial
          demo ranking, not a player count or sales metric.
        </p>
        <Suspense fallback={<DirectorySkeleton label="games" />}>
          <GamesBrowser />
        </Suspense>
      </div>
    </>
  );
}
