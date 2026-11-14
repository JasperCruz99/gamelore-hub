import type { Metadata } from "next";
import { Suspense } from "react";

import { SearchExperience } from "@/components/search/search-experience";
import { DirectorySkeleton } from "@/components/ui/directory-skeleton";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search the GameLore Hub library for games, guides, lore entries, cheats, and video resources.",
  alternates: { canonical: "/search" },
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Search the library"
        title="Find the thread."
        description="Search across game hubs, guides, lore entries, cheat references, and video slots. Results are grouped by content type so you can jump straight to the right kind of answer."
      />
      <div className="shell py-10 sm:py-12">
        <Suspense fallback={<DirectorySkeleton label="search results" cards={4} />}>
          <SearchExperience />
        </Suspense>
      </div>
    </>
  );
}
