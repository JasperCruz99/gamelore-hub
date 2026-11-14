import type { MetadataRoute } from "next";

import { games } from "@/data/games";
import { guides } from "@/data/guides";
import { loreEntries } from "@/data/lore";
import { siteConfig } from "@/lib/site";

const baseUrl = siteConfig.url.replace(/\/$/, "");
const siteUpdated = new Date("2026-11-14T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/games", priority: 0.9, changeFrequency: "weekly" },
    { path: "/guides", priority: 0.9, changeFrequency: "weekly" },
    { path: "/lore", priority: 0.8, changeFrequency: "weekly" },
    { path: "/cheats", priority: 0.8, changeFrequency: "monthly" },
    { path: "/videos", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.3, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: siteUpdated,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...games.map((game) => ({
      url: `${baseUrl}/games/${game.slug}`,
      lastModified: siteUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...guides.map((guide) => ({
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified: new Date(`${guide.updatedAt}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...loreEntries.map((entry) => ({
      url: `${baseUrl}/lore/${entry.slug}`,
      lastModified: siteUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
