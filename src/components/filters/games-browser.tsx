"use client";

import { Gamepad2 } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useId, useMemo, useState } from "react";

import { GameCard } from "@/components/cards/game-card";
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
import {
  getDecadeLabel,
  matchesQuery,
  sortGames,
  uniqueSorted,
  type GameSort,
} from "@/lib/filters";

const genreOptions = [
  { value: "all", label: "All genres" },
  ...uniqueSorted(games.flatMap((game) => game.genres)).map((genre) => ({
    value: genre,
    label: genre,
  })),
];

const decadeOptions = [
  { value: "all", label: "All years" },
  ...uniqueSorted(games.map((game) => getDecadeLabel(game.releaseYear)))
    .sort((a, b) => b.localeCompare(a))
    .map((decade) => ({ value: decade, label: decade })),
];

const sortOptions: Array<{ value: GameSort; label: string }> = [
  { value: "popular", label: "Popularity (editorial)" },
  { value: "newest", label: "Newest release" },
  { value: "oldest", label: "Oldest release" },
  { value: "name", label: "Title A–Z" },
];

export function GamesBrowser() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = useId();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [genre, setGenre] = useState(searchParams.get("genre") ?? "all");
  const [decade, setDecade] = useState(searchParams.get("decade") ?? "all");
  const [sort, setSort] = useState<GameSort>(
    (searchParams.get("sort") as GameSort | null) ?? "popular",
  );

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (genre !== "all") params.set("genre", genre);
    if (decade !== "all") params.set("decade", decade);
    if (sort !== "popular") params.set("sort", sort);

    const next = params.toString();
    const current = window.location.search.replace(/^\?/, "");
    if (next !== current) {
      window.history.replaceState(
        null,
        "",
        next ? `${pathname}?${next}` : pathname,
      );
    }
  }, [query, genre, decade, sort, pathname]);

  const results = useMemo(() => {
    const filtered = games.filter((game) => {
      if (genre !== "all" && !game.genres.includes(genre)) return false;
      if (decade !== "all" && getDecadeLabel(game.releaseYear) !== decade) {
        return false;
      }
      return matchesQuery(query, [
        game.title,
        game.description,
        game.developer,
        game.publisher,
        String(game.releaseYear),
        ...game.genres,
        ...game.tags,
      ]);
    });

    return sortGames(filtered, sort);
  }, [query, genre, decade, sort]);

  const hasFilters =
    query !== "" || genre !== "all" || decade !== "all" || sort !== "popular";

  function resetFilters() {
    setQuery("");
    setGenre("all");
    setDecade("all");
    setSort("popular");
  }

  return (
    <div>
      <FilterPanel
        footer={
          <>
            <ResultCount
              count={results.length}
              singular="game"
              plural="games"
            />
            <FilterReset onClick={resetFilters} disabled={!hasFilters} />
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <FilterSearch
            id={`${id}-query`}
            label="Search games"
            value={query}
            onChange={setQuery}
            placeholder="Title, developer, or tag…"
            className="sm:col-span-2 lg:col-span-1"
          />
          <FilterSelect
            id={`${id}-genre`}
            label="Genre"
            value={genre}
            onChange={setGenre}
            options={genreOptions}
          />
          <FilterSelect
            id={`${id}-decade`}
            label="Release era"
            value={decade}
            onChange={setDecade}
            options={decadeOptions}
          />
          <FilterSelect
            id={`${id}-sort`}
            label="Sort by"
            value={sort}
            onChange={(value) => setSort(value as GameSort)}
            options={sortOptions}
          />
        </div>
      </FilterPanel>

      {results.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Gamepad2}
          title="No games match those filters"
          description="Try a shorter search, choose a different genre, or clear the filters to browse the full demo library."
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
