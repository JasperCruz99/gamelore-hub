import type { ContentCategory } from "@/types";

export const contentCategories: ContentCategory[] = [
  {
    title: "Beginner Guides",
    description:
      "Spoiler-light starting points for the first few hours of a game.",
    href: "/guides?category=Beginner%27s%20Guide",
    icon: "book-open-check",
    tone: "signal",
  },
  {
    title: "Walkthroughs",
    description:
      "Structured routes through regions, acts, and major quest chains.",
    href: "/guides?category=Walkthrough",
    icon: "map",
    tone: "signal",
  },
  {
    title: "Tips & Strategies",
    description:
      "Practical habits that make combat, exploration, and progression smoother.",
    href: "/guides?category=Tips%20%26%20Tricks",
    icon: "compass",
    tone: "success",
  },
  {
    title: "Lore & Story",
    description:
      "Worldbuilding, factions, character histories, and story explainers.",
    href: "/lore",
    icon: "sparkles",
    tone: "arcane",
  },
  {
    title: "Easter Eggs",
    description:
      "Hidden details, environmental jokes, and tiny discoveries worth slowing down for.",
    href: "/lore?type=Easter%20Egg",
    icon: "egg",
    tone: "caution",
  },
  {
    title: "Cheats & Commands",
    description:
      "Verified console commands, cheat codes, and clearly labeled caveats.",
    href: "/cheats",
    icon: "terminal",
    tone: "caution",
  },
  {
    title: "Boss Guides",
    description:
      "Preparation, patterns, and recovery plans for difficult encounters.",
    href: "/guides?category=Boss%20Strategy",
    icon: "swords",
    tone: "signal",
  },
  {
    title: "YouTube Videos",
    description:
      "Curated video slots and search starting points, clearly marked as placeholders.",
    href: "/videos",
    icon: "play",
    tone: "arcane",
  },
];
