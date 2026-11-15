import { cheats, cheatNotes } from "@/data/cheats";
import { guides } from "@/data/guides";
import { games } from "@/data/games";
import { loreEntries } from "@/data/lore";
import { videos } from "@/data/videos";
import type { Game, GameImage, Guide, LoreEntry, Cheat, Video } from "@/types";

export function getGame(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}

export function getGames(): Game[] {
  return games;
}

export function getGameScreenshot(game: Game, index = 0): GameImage {
  if (game.screenshots.length === 0) {
    return { src: game.heroImage, alt: game.heroAlt };
  }

  const safeIndex =
    ((index % game.screenshots.length) + game.screenshots.length) %
    game.screenshots.length;

  return game.screenshots[safeIndex];
}

export function getGuideThumbnail(guide: Guide): GameImage {
  const game = getGame(guide.gameSlug);

  if (!game) {
    return {
      src: "/images/hero-atmosphere.svg",
      alt: "Abstract GameLore Hub artwork for a guide",
    };
  }

  const gameGuides = getGuidesByGame(game.slug);
  const index = gameGuides.findIndex((entry) => entry.slug === guide.slug);

  return getGameScreenshot(game, Math.max(index, 0));
}

export function getVideoThumbnail(video: Video): GameImage {
  const game = getGame(video.gameSlug);

  if (!game) {
    return {
      src: "/images/hero-atmosphere.svg",
      alt: "Abstract GameLore Hub artwork for a video topic",
    };
  }

  if (video.thumbnailImage) {
    const screenshot = game.screenshots.find(
      (image) => image.src === video.thumbnailImage,
    );

    if (screenshot) {
      return screenshot;
    }
  }

  const gameVideos = getVideosByGame(game.slug);
  const index = gameVideos.findIndex((entry) => entry.slug === video.slug);

  return getGameScreenshot(game, Math.max(index, 0) + 3);
}

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesByGame(gameSlug: string): Guide[] {
  return guides.filter((guide) => guide.gameSlug === gameSlug);
}

export function getLatestGuides(limit?: number): Guide[] {
  const sorted = [...guides].sort((a, b) =>
    b.updatedAt.localeCompare(a.updatedAt),
  );
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

export function getLoreEntry(slug: string): LoreEntry | undefined {
  return loreEntries.find((entry) => entry.slug === slug);
}

export function getLoreByGame(gameSlug: string): LoreEntry[] {
  return loreEntries.filter((entry) => entry.gameSlug === gameSlug);
}

export function getCheat(slug: string): Cheat | undefined {
  return cheats.find((cheat) => cheat.slug === slug);
}

export function getCheatsByGame(gameSlug: string): Cheat[] {
  return cheats.filter((cheat) => cheat.gameSlug === gameSlug);
}

export function getCheatNote(gameSlug: string): string | undefined {
  return cheatNotes.find((note) => note.gameSlug === gameSlug)?.note;
}

export function getVideo(slug: string): Video | undefined {
  return videos.find((video) => video.slug === slug);
}

export function getVideosByGame(gameSlug: string): Video[] {
  return videos.filter((video) => video.gameSlug === gameSlug);
}

export function getRelatedGames(game: Game, limit = 3): Game[] {
  return game.relatedGames
    .map((slug) => getGame(slug))
    .filter((related): related is Game => Boolean(related))
    .slice(0, limit);
}

export function getGuideNeighbours(slug: string): {
  previous: Guide | undefined;
  next: Guide | undefined;
} {
  const index = guides.findIndex((guide) => guide.slug === slug);
  if (index === -1) {
    return { previous: undefined, next: undefined };
  }
  return {
    previous: index > 0 ? guides[index - 1] : undefined,
    next: index < guides.length - 1 ? guides[index + 1] : undefined,
  };
}

export function getPopularGames(limit?: number): Game[] {
  const sorted = [...games].sort((a, b) => b.popularity - a.popularity);
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}
