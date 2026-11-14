"use client";

import { BookOpen } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useId, useMemo, useState } from "react";

import { GuideCard } from "@/components/cards/guide-card";
import {
  FilterPanel,
  FilterReset,
  FilterSearch,
  FilterSelect,
  ResultCount,
} from "@/components/filters/filter-controls";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { games } from "@/data/games";
import { guides } from "@/data/guides";
import { getReadingTime } from "@/lib/utils";
import { getGame } from "@/lib/content";
import { matchesQuery, uniqueSorted } from "@/lib/filters";

type GuideSort = "newest" | "oldest" | "title";

const categoryOptions = [
  { value: "all", label: "All categories" },
  ...uniqueSorted(guides.map((guide) => guide.category)).map((category) => ({
    value: category,
    label: category,
  })),
];

const gameOptions = [
  { value: "all", label: "All games" },
  ...games.map((game) => ({ value: game.slug, label: game.title })),
];

const sortOptions: Array<{ value: GuideSort; label: string }> = [
  { value: "newest", label: "Recently updated" },
  { value: "oldest", label: "Oldest update" },
  { value: "title", label: "Title A–Z" },
];

export function GuidesBrowser() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = useId();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [category, setCategory] = useState(
    searchParams.get("category") ?? "all",
  );
  const [game, setGame] = useState(searchParams.get("game") ?? "all");
  const requestedSort = searchParams.get("sort");
  const [sort, setSort] = useState<GuideSort>(
    requestedSort === "oldest" || requestedSort === "title"
      ? requestedSort
      : "newest",
  );

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category !== "all") params.set("category", category);
    if (game !== "all") params.set("game", game);
    if (sort !== "newest") params.set("sort", sort);

    const next = params.toString();
    const current = window.location.search.replace(/^\?/, "");
    if (next !== current) {
      window.history.replaceState(
        null,
        "",
        next ? `${pathname}?${next}` : pathname,
      );
    }
  }, [query, category, game, sort, pathname]);

  const results = useMemo(() => {
    const filtered = guides.filter((guide) => {
      if (category !== "all" && guide.category !== category) return false;
      if (game !== "all" && guide.gameSlug !== game) return false;
      const gameTitle = getGame(guide.gameSlug)?.title ?? "";
      return matchesQuery(query, [
        guide.title,
        guide.excerpt,
        guide.category,
        guide.level,
        guide.intro,
        gameTitle,
        ...guide.tags,
      ]);
    });

    return [...filtered].sort((a, b) => {
      if (sort === "oldest") return a.updatedAt.localeCompare(b.updatedAt);
      if (sort === "title") return a.title.localeCompare(b.title);
      return b.updatedAt.localeCompare(a.updatedAt);
    });
  }, [query, category, game, sort]);

  const hasFilters =
    query !== "" || category !== "all" || game !== "all" || sort !== "newest";

  function resetFilters() {
    setQuery("");
    setCategory("all");
    setGame("all");
    setSort("newest");
  }

  const totalMinutes = results.reduce(
    (total, guide) => total + getReadingTime(guide),
    0,
  );

  return (
    <div>
      <FilterPanel
        footer={
          <>
            <div className="flex flex-wrap items-center gap-3">
              <ResultCount
                count={results.length}
                singular="guide"
                plural="guides"
              />
              {results.length > 0 ? (
                <span className="text-xs text-dim">
                  {totalMinutes} minutes of reading
                </span>
              ) : null}
            </div>
            <FilterReset onClick={resetFilters} disabled={!hasFilters} />
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <FilterSearch
            id={`${id}-query`}
            label="Search guides"
            value={query}
            onChange={setQuery}
            placeholder="Topic, game, or keyword…"
            className="sm:col-span-2 lg:col-span-2"
          />
          <FilterSelect
            id={`${id}-game`}
            label="Game"
            value={game}
            onChange={setGame}
            options={gameOptions}
          />
          <FilterSelect
            id={`${id}-category`}
            label="Category"
            value={category}
            onChange={setCategory}
            options={categoryOptions}
          />
          <FilterSelect
            id={`${id}-sort`}
            label="Sort by"
            value={sort}
            onChange={(value) => setSort(value as GuideSort)}
            options={sortOptions}
          />
        </div>
      </FilterPanel>

      {results.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={BookOpen}
          title="No guides match those filters"
          description="Try a different game or category, or clear the filters to see every guide in the demo library."
          className="mt-8"
          action={
            <Button onClick={resetFilters} variant="secondary">
              Clear filters
            </Button>
          }
        />
      )}
    </div>
  );
}
