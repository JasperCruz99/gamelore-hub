"use client";

import { Play } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useId, useMemo, useState } from "react";

import { VideoCard } from "@/components/cards/video-card";
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
import { videos } from "@/data/videos";
import { getGame } from "@/lib/content";
import { matchesQuery, uniqueSorted } from "@/lib/filters";

const gameOptions = [
  { value: "all", label: "All games" },
  ...games.map((game) => ({ value: game.slug, label: game.title })),
];

const typeOptions = [
  { value: "all", label: "All video types" },
  ...uniqueSorted(videos.map((video) => video.type)).map((type) => ({
    value: type,
    label: type,
  })),
];

export function VideosBrowser() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = useId();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [game, setGame] = useState(searchParams.get("game") ?? "all");
  const [type, setType] = useState(searchParams.get("type") ?? "all");

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (game !== "all") params.set("game", game);
    if (type !== "all") params.set("type", type);

    const next = params.toString();
    const current = window.location.search.replace(/^\?/, "");
    if (next !== current) {
      window.history.replaceState(
        null,
        "",
        next ? `${pathname}?${next}` : pathname,
      );
    }
  }, [query, game, type, pathname]);

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
    return videos.filter((video) => {
      if (game !== "all" && video.gameSlug !== game) return false;
      if (type !== "all" && video.type !== type) return false;
      const gameTitle = getGame(video.gameSlug)?.title ?? "";
      return matchesQuery(query, [
        video.title,
        video.description,
        video.creator,
        video.type,
        gameTitle,
        ...video.tags,
      ]);
    });
  }, [query, game, type]);

  const hasFilters = query !== "" || game !== "all" || type !== "all";

  function resetFilters() {
    setQuery("");
    setGame("all");
    setType("all");
  }

  return (
    <div>
      <FilterPanel
        footer={
          <>
            <ResultCount
              count={results.length}
              singular="video slot"
              plural="video slots"
            />
            <FilterReset onClick={resetFilters} disabled={!hasFilters} />
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <FilterSearch
            id={`${id}-query`}
            label="Search videos"
            value={query}
            onChange={setQuery}
            placeholder="Title, creator, or game…"
            className="sm:col-span-2"
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
        </div>
      </FilterPanel>

      {results.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((video) => (
            <VideoCard key={video.slug} video={video} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Play}
          title="No video slots match those filters"
          description="Try a different game or content type, or clear the filters. Every entry is a curated search placeholder until verified videos are added."
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
