import type { Game } from "@/types";

export type GameSort = "popular" | "name" | "newest" | "oldest";

export function normalizeText(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function matchesQuery(
  query: string,
  values: Array<string | undefined>,
): boolean {
  const tokens = normalizeText(query).split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return true;

  const haystack = normalizeText(values.filter(Boolean).join(" "));
  return tokens.every((token) => haystack.includes(token));
}

export function sortGames(list: Game[], sort: GameSort): Game[] {
  const sorted = [...list];
  switch (sort) {
    case "name":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "newest":
      return sorted.sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
    case "oldest":
      return sorted.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
    case "popular":
    default:
      return sorted.sort((a, b) => b.popularity - a.popularity);
  }
}

export function getDecadeLabel(year: number): string {
  if (year < 2000) return "Before 2000";
  const decade = Math.floor(year / 10) * 10;
  return `${decade}s`;
}

export function uniqueSorted(values: string[]): string[] {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}
