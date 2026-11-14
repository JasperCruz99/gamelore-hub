import { cheats } from "@/data/cheats";
import { guides } from "@/data/guides";
import { games } from "@/data/games";
import { loreEntries } from "@/data/lore";
import { videos } from "@/data/videos";
import type { SearchResult, SearchResultType } from "@/types";
import { normalizeText } from "@/lib/filters";
import { getReadingTime } from "@/lib/utils";

const typeOrder: Record<SearchResultType, number> = {
  Game: 0,
  Guide: 1,
  Lore: 2,
  Cheat: 3,
  Video: 4,
};

function gameTitle(slug: string): string {
  return games.find((game) => game.slug === slug)?.title ?? "Unknown game";
}

function spoilerLabel(level: "none" | "mild" | "major"): string {
  if (level === "major") return "major spoilers";
  if (level === "mild") return "mild spoilers";
  return "spoiler-free";
}

export const searchIndex: SearchResult[] = [
  ...games.map<SearchResult>((game) => ({
    id: `game-${game.slug}`,
    type: "Game",
    title: game.title,
    description: game.description,
    href: `/games/${game.slug}`,
    gameTitle: game.title,
    meta: `${game.genres[0]} · ${game.releaseYear}`,
    keywords: [
      ...game.tags,
      ...game.genres,
      game.developer,
      game.publisher,
      game.title,
    ],
  })),
  ...guides.map<SearchResult>((guide) => ({
    id: `guide-${guide.slug}`,
    type: "Guide",
    title: guide.title,
    description: guide.excerpt,
    href: `/guides/${guide.slug}`,
    gameTitle: gameTitle(guide.gameSlug),
    meta: `${guide.category} · ${getReadingTime(guide)} min read`,
    keywords: [
      ...guide.tags,
      guide.category,
      guide.level,
      gameTitle(guide.gameSlug),
      "guide",
    ],
  })),
  ...loreEntries.map<SearchResult>((entry) => ({
    id: `lore-${entry.slug}`,
    type: "Lore",
    title: entry.title,
    description: entry.excerpt,
    href: `/lore/${entry.slug}`,
    gameTitle: gameTitle(entry.gameSlug),
    meta: `${entry.type} · ${spoilerLabel(entry.spoiler)}`,
    keywords: [
      ...entry.tags,
      entry.type,
      gameTitle(entry.gameSlug),
      "lore",
      "story",
    ],
  })),
  ...cheats.map<SearchResult>((cheat) => ({
    id: `cheat-${cheat.slug}`,
    type: "Cheat",
    title: cheat.title,
    description: cheat.whatItDoes,
    href: `/cheats?game=${cheat.gameSlug}#${cheat.slug}`,
    gameTitle: gameTitle(cheat.gameSlug),
    meta: `${cheat.type} · ${cheat.platform}`,
    keywords: [
      ...cheat.tags,
      cheat.type,
      cheat.platform,
      gameTitle(cheat.gameSlug),
      "cheat",
      "command",
    ],
  })),
  ...videos.map<SearchResult>((video) => ({
    id: `video-${video.slug}`,
    type: "Video",
    title: video.title,
    description: video.description,
    href: `/videos?game=${video.gameSlug}#${video.slug}`,
    gameTitle: gameTitle(video.gameSlug),
    meta: `${video.type} · demo placeholder`,
    keywords: [
      ...video.tags,
      video.type,
      gameTitle(video.gameSlug),
      "video",
      "youtube",
    ],
  })),
];

export function searchAll(query: string): SearchResult[] {
  const normalizedQuery = normalizeText(query);
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const scored = searchIndex
    .map((result) => {
      const title = normalizeText(result.title);
      const game = normalizeText(result.gameTitle);
      const description = normalizeText(result.description);
      const meta = normalizeText(result.meta);
      const keywords = normalizeText(result.keywords.join(" "));

      let score = 0;

      if (title.includes(normalizedQuery)) score += 12;
      if (game.includes(normalizedQuery)) score += 6;

      for (const token of tokens) {
        let tokenScore = 0;
        if (title.includes(token)) tokenScore += 8;
        if (game.includes(token)) tokenScore += 4;
        if (description.includes(token)) tokenScore += 2;
        if (meta.includes(token)) tokenScore += 1;
        if (keywords.includes(token)) tokenScore += 2;

        if (tokenScore === 0) {
          return null;
        }
        score += tokenScore;
      }

      return { result, score };
    })
    .filter(
      (entry): entry is { result: SearchResult; score: number } =>
        entry !== null,
    );

  return scored
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const typeDiff =
        typeOrder[a.result.type] - typeOrder[b.result.type];
      if (typeDiff !== 0) return typeDiff;
      return a.result.title.localeCompare(b.result.title);
    })
    .map((entry) => entry.result);
}

export function groupResults(
  results: SearchResult[],
): Array<{ type: SearchResultType; results: SearchResult[] }> {
  const order: SearchResultType[] = [
    "Game",
    "Guide",
    "Lore",
    "Cheat",
    "Video",
  ];

  return order
    .map((type) => ({
      type,
      results: results.filter((result) => result.type === type),
    }))
    .filter((group) => group.results.length > 0);
}
