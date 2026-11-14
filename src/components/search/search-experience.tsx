"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Gamepad2,
  Play,
  Search,
  SearchX,
  Sparkles,
  Terminal,
  X,
  type LucideIcon,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useDeferredValue, useMemo, useState } from "react";

import { SearchHighlight } from "@/components/search/search-highlight";
import { Button, ButtonLink } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { getLatestGuides, getPopularGames } from "@/lib/content";
import { groupResults, searchAll } from "@/lib/search";
import type { SearchResultType } from "@/types";

const typeConfig: Record<
  SearchResultType,
  { label: string; icon: LucideIcon }
> = {
  Game: { label: "Games", icon: Gamepad2 },
  Guide: { label: "Guides", icon: BookOpen },
  Lore: { label: "Lore & Secrets", icon: Sparkles },
  Cheat: { label: "Cheats & Commands", icon: Terminal },
  Video: { label: "Videos", icon: Play },
};

const suggestedSearches = [
  "Elden Ring",
  "Margit",
  "Night City",
  "Whispering Hillock",
  "keep inventory",
  "White Orchard",
];

const popularGames = getPopularGames(4);
const recentGuides = getLatestGuides(3);

export function SearchExperience() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => searchAll(deferredQuery), [deferredQuery]);
  const groups = useMemo(() => groupResults(results), [results]);

  function updateQuery(next: string) {
    setQuery(next);
    const params = new URLSearchParams(window.location.search);
    if (next.trim()) {
      params.set("q", next);
    } else {
      params.delete("q");
    }
    const nextParams = params.toString();
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${nextParams ? `?${nextParams}` : ""}`,
    );
  }

  const hasQuery = deferredQuery.trim().length > 0;

  return (
    <div>
      <form
        role="search"
        onSubmit={(event) => event.preventDefault()}
        className="relative"
      >
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-dim sm:left-5"
          strokeWidth={1.8}
        />
        <label htmlFor="library-search" className="sr-only">
          Search games, guides, lore, cheats, and videos
        </label>
        <input
          id="library-search"
          type="search"
          value={query}
          onChange={(event) => updateQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") updateQuery("");
          }}
          placeholder="Search games, guides, lore, cheats, and videos…"
          autoComplete="off"
          className="h-14 w-full rounded-xl border border-line bg-card/80 pl-12 pr-12 text-base text-mist placeholder:text-dim transition-colors focus:border-signal/60 focus:outline-none sm:text-lg"
        />
        {query ? (
          <button
            type="button"
            onClick={() => updateQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-md text-dim transition-colors hover:bg-raised hover:text-mist"
          >
            <X aria-hidden="true" className="size-4" />
          </button>
        ) : null}
      </form>

      <p className="mt-2.5 text-xs text-dim">
        Search titles, descriptions, tags, developers, and content types. Press
        Esc to clear.
      </p>

      {!hasQuery ? (
        <div className="mt-10">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
              Try a search
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {suggestedSearches.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => updateQuery(suggestion)}
                  className="rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs font-medium text-fog transition-colors hover:border-signal/50 hover:text-signal"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <section aria-labelledby="popular-games-heading">
              <div className="flex items-end justify-between gap-4">
                <h2
                  id="popular-games-heading"
                  className="font-display text-xl font-semibold text-mist"
                >
                  Game hubs
                </h2>
                <Link
                  href="/games"
                  className="text-xs font-medium text-signal hover:text-mist"
                >
                  View all
                </Link>
              </div>
              <ul className="mt-4 divide-y divide-line/70 border-y border-line/70">
                {popularGames.map((game, index) => (
                  <li key={game.slug}>
                    <Link
                      href={`/games/${game.slug}`}
                      className="group flex items-center gap-4 py-3.5"
                    >
                      <span className="w-5 shrink-0 font-mono text-[11px] text-dim">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-mist group-hover:text-signal">
                          {game.title}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-dim">
                          {game.genres[0]} · {game.releaseYear}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-dim transition-colors group-hover:text-signal"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="recent-guides-heading">
              <div className="flex items-end justify-between gap-4">
                <h2
                  id="recent-guides-heading"
                  className="font-display text-xl font-semibold text-mist"
                >
                  Recently updated guides
                </h2>
                <Link
                  href="/guides"
                  className="text-xs font-medium text-signal hover:text-mist"
                >
                  View all
                </Link>
              </div>
              <ul className="mt-4 divide-y divide-line/70 border-y border-line/70">
                {recentGuides.map((guide) => (
                  <li key={guide.slug}>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="group flex items-center gap-4 py-3.5"
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-mist group-hover:text-signal">
                          {guide.title}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-dim">
                          {guide.category}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-dim transition-colors group-hover:text-signal"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      ) : results.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            icon={SearchX}
            title={`No results for “${deferredQuery.trim()}”`}
            description="Try a broader term, check the spelling, or browse the game library directly. Search covers games, guides, lore entries, cheats, and video slots."
            action={
              <div className="flex flex-wrap justify-center gap-2">
                <Button onClick={() => updateQuery("")} variant="secondary">
                  Clear search
                </Button>
                <ButtonLink href="/games" variant="outline">
                  Browse games
                </ButtonLink>
              </div>
            }
          />
        </div>
      ) : (
        <div className="mt-8">
          <p aria-live="polite" className="text-xs text-dim">
            <span className="font-semibold text-fog">{results.length}</span>{" "}
            {results.length === 1 ? "result" : "results"} for{" "}
            <span className="text-fog">“{deferredQuery.trim()}”</span>
          </p>

          <div className="mt-6 space-y-10">
            {groups.map((group) => {
              const config = typeConfig[group.type];
              const Icon = config.icon;
              return (
                <section
                  key={group.type}
                  aria-labelledby={`search-group-${group.type}`}
                >
                  <div className="flex items-center gap-2.5 border-b border-line/70 pb-3">
                    <Icon
                      aria-hidden="true"
                      className="size-4 text-signal"
                      strokeWidth={1.8}
                    />
                    <h2
                      id={`search-group-${group.type}`}
                      className="font-display text-lg font-semibold text-mist"
                    >
                      {config.label}
                    </h2>
                    <span className="rounded-full border border-line px-2 py-0.5 text-[10px] text-dim">
                      {group.results.length}
                    </span>
                  </div>

                  <ul className="mt-3 grid gap-2.5 md:grid-cols-2">
                    {group.results.map((result) => (
                      <li key={result.id}>
                        <Link
                          href={result.href}
                          className="group flex h-full items-start gap-3 rounded-lg border border-line bg-card/55 p-4 transition-colors hover:border-signal/40 hover:bg-card"
                        >
                          <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-md border border-line bg-surface text-dim transition-colors group-hover:text-signal">
                            <Icon
                              aria-hidden="true"
                              className="size-4"
                              strokeWidth={1.7}
                            />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold leading-snug text-mist group-hover:text-signal">
                              <SearchHighlight
                                text={result.title}
                                query={deferredQuery}
                              />
                            </span>
                            <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-fog">
                              <SearchHighlight
                                text={result.description}
                                query={deferredQuery}
                              />
                            </span>
                            <span className="mt-1.5 block text-[10px] uppercase tracking-[0.12em] text-dim">
                              {result.gameTitle} · {result.meta}
                            </span>
                          </span>
                          <ArrowUpRight
                            aria-hidden="true"
                            className="mt-1 size-3.5 shrink-0 text-dim transition-colors group-hover:text-signal"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
