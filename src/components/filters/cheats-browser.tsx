"use client";

import { Terminal } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useId, useMemo, useState } from "react";

import { CheatCard } from "@/components/cards/cheat-card";
import {
  FilterPanel,
  FilterReset,
  FilterSearch,
  FilterSelect,
  ResultCount,
} from "@/components/filters/filter-controls";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { cheats } from "@/data/cheats";
import { games } from "@/data/games";
import { getCheatNote, getGame } from "@/lib/content";
import { matchesQuery, uniqueSorted } from "@/lib/filters";

const gameOptions = [
  { value: "all", label: "All games" },
  ...games.map((game) => ({ value: game.slug, label: game.title })),
];

const typeOptions = [
  { value: "all", label: "All cheat types" },
  ...uniqueSorted(cheats.map((cheat) => cheat.type)).map((type) => ({
    value: type,
    label: type,
  })),
];

const platformOptions = [
  { value: "all", label: "All platforms" },
  ...uniqueSorted(cheats.map((cheat) => cheat.platform)).map((platform) => ({
    value: platform,
    label: platform,
  })),
];

export function CheatsBrowser() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = useId();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [game, setGame] = useState(searchParams.get("game") ?? "all");
  const [type, setType] = useState(searchParams.get("type") ?? "all");
  const [platform, setPlatform] = useState(
    searchParams.get("platform") ?? "all",
  );

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (game !== "all") params.set("game", game);
    if (type !== "all") params.set("type", type);
    if (platform !== "all") params.set("platform", platform);

    const next = params.toString();
    const current = window.location.search.replace(/^\?/, "");
    if (next !== current) {
      window.history.replaceState(
        null,
        "",
        next ? `${pathname}?${next}` : pathname,
      );
    }
  }, [query, game, type, platform, pathname]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const timer = window.setTimeout(() => {
      const target = document.getElementById(hash);
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      target?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }, 200);

    return () => window.clearTimeout(timer);
  }, []);

  const results = useMemo(() => {
    return cheats.filter((cheat) => {
      if (game !== "all" && cheat.gameSlug !== game) return false;
      if (type !== "all" && cheat.type !== type) return false;
      if (platform !== "all" && cheat.platform !== platform) return false;
      const gameTitle = getGame(cheat.gameSlug)?.title ?? "";
      return matchesQuery(query, [
        cheat.title,
        cheat.whatItDoes,
        cheat.instructions,
        cheat.requirements,
        cheat.platform,
        cheat.type,
        gameTitle,
        ...cheat.tags,
      ]);
    });
  }, [query, game, type, platform]);

  const hasFilters =
    query !== "" ||
    game !== "all" ||
    type !== "all" ||
    platform !== "all";

  function resetFilters() {
    setQuery("");
    setGame("all");
    setType("all");
    setPlatform("all");
  }

  const selectedGame = game !== "all" ? getGame(game) : undefined;
  const emptyNote = selectedGame ? getCheatNote(selectedGame.slug) : undefined;

  return (
    <div>
      <FilterPanel
        footer={
          <>
            <ResultCount
              count={results.length}
              singular="verified entry"
              plural="verified entries"
            />
            <FilterReset onClick={resetFilters} disabled={!hasFilters} />
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <FilterSearch
            id={`${id}-query`}
            label="Search cheats"
            value={query}
            onChange={setQuery}
            placeholder="Command, game, or effect…"
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
            label="Type"
            value={type}
            onChange={setType}
            options={typeOptions}
          />
          <FilterSelect
            id={`${id}-platform`}
            label="Platform"
            value={platform}
            onChange={setPlatform}
            options={platformOptions}
          />
        </div>
      </FilterPanel>

      {results.length > 0 ? (
        <div className="mt-8 grid items-start gap-5 lg:grid-cols-2">
          {results.map((cheat) => (
            <CheatCard key={cheat.slug} cheat={cheat} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Terminal}
          title={
            selectedGame
              ? `No verified cheats for ${selectedGame.title}`
              : "No cheat entries match those filters"
          }
          description={
            emptyNote ??
            "Try another game or type, or clear the filters. This hub only lists commands and codes we can represent accurately."
          }
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
