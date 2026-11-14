"use client";

import { Sparkles } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useId, useMemo, useState } from "react";

import { LoreCard } from "@/components/cards/lore-card";
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
import { loreEntries } from "@/data/lore";
import { getGame } from "@/lib/content";
import { matchesQuery, uniqueSorted } from "@/lib/filters";

const gameOptions = [
  { value: "all", label: "All games" },
  ...games.map((game) => ({ value: game.slug, label: game.title })),
];

const typeOptions = [
  { value: "all", label: "All content types" },
  ...uniqueSorted(loreEntries.map((entry) => entry.type)).map((type) => ({
    value: type,
    label: type,
  })),
];

const spoilerOptions = [
  { value: "all", label: "All spoiler levels" },
  { value: "none", label: "Spoiler-free" },
  { value: "mild", label: "Mild spoilers" },
  { value: "major", label: "Major spoilers" },
];

export function LoreBrowser() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = useId();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [game, setGame] = useState(searchParams.get("game") ?? "all");
  const [type, setType] = useState(searchParams.get("type") ?? "all");
  const [spoiler, setSpoiler] = useState(
    searchParams.get("spoiler") ?? "all",
  );

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (game !== "all") params.set("game", game);
    if (type !== "all") params.set("type", type);
    if (spoiler !== "all") params.set("spoiler", spoiler);

    const next = params.toString();
    const current = window.location.search.replace(/^\?/, "");
    if (next !== current) {
      window.history.replaceState(
        null,
        "",
        next ? `${pathname}?${next}` : pathname,
      );
    }
  }, [query, game, type, spoiler, pathname]);

  const results = useMemo(() => {
    return loreEntries.filter((entry) => {
      if (game !== "all" && entry.gameSlug !== game) return false;
      if (type !== "all" && entry.type !== type) return false;
      if (spoiler !== "all" && entry.spoiler !== spoiler) return false;
      const gameTitle = getGame(entry.gameSlug)?.title ?? "";
      return matchesQuery(query, [
        entry.title,
        entry.excerpt,
        entry.type,
        gameTitle,
        ...entry.tags,
      ]);
    });
  }, [query, game, type, spoiler]);

  const hasFilters =
    query !== "" || game !== "all" || type !== "all" || spoiler !== "all";

  function resetFilters() {
    setQuery("");
    setGame("all");
    setType("all");
    setSpoiler("all");
  }

  return (
    <div>
      <FilterPanel
        footer={
          <>
            <ResultCount
              count={results.length}
              singular="lore entry"
              plural="lore entries"
            />
            <FilterReset onClick={resetFilters} disabled={!hasFilters} />
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <FilterSearch
            id={`${id}-query`}
            label="Search lore"
            value={query}
            onChange={setQuery}
            placeholder="Character, faction, or detail…"
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
            id={`${id}-type`}
            label="Content type"
            value={type}
            onChange={setType}
            options={typeOptions}
          />
          <FilterSelect
            id={`${id}-spoiler`}
            label="Spoiler level"
            value={spoiler}
            onChange={setSpoiler}
            options={spoilerOptions}
          />
        </div>
      </FilterPanel>

      {results.length > 0 ? (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {results.map((entry) => (
            <LoreCard key={entry.slug} entry={entry} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Sparkles}
          title="No lore entries match those filters"
          description="Try another game or content type, or clear the filters. Lore, trivia, and hidden details are organized by both game and category."
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
