export type Game = {
  slug: string;
  title: string;
  tagline: string;
  genres: string[];
  developer: string;
  publisher: string;
  releaseDate: string;
  releaseYear: number;
  platforms: string[];
  modes: string[];
  coverImage: string;
  coverAlt: string;
  accent: string;
  description: string;
  overview: string[];
  funFact: string;
  tags: string[];
  featured: boolean;
  popularity: number;
  relatedGames: string[];
};

export type GuideCategory =
  | "Beginner's Guide"
  | "Walkthrough"
  | "Quest Guide"
  | "Boss Strategy"
  | "Build Guide"
  | "Weapons & Equipment"
  | "Tips & Tricks"
  | "Performance & Settings";

export type GuideLevel = "Beginner" | "Intermediate" | "All levels";

export type CalloutType = "tip" | "warning" | "spoiler" | "note";

export type Callout = {
  type: CalloutType;
  title: string;
  body: string;
};

export type GuideSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: Callout;
};

export type Guide = {
  slug: string;
  title: string;
  gameSlug: string;
  category: GuideCategory;
  level: GuideLevel;
  excerpt: string;
  intro: string;
  updatedAt: string;
  author: string;
  sections: GuideSection[];
  tags: string[];
  featured: boolean;
};

export type LoreType =
  | "Story"
  | "Character"
  | "Faction"
  | "Worldbuilding"
  | "Timeline"
  | "Hidden Detail"
  | "Easter Egg"
  | "Fun Fact";

export type SpoilerLevel = "none" | "mild" | "major";

export type LoreEntry = {
  slug: string;
  title: string;
  gameSlug: string;
  type: LoreType;
  spoiler: SpoilerLevel;
  excerpt: string;
  paragraphs: string[];
  tags: string[];
  sourceNote?: string;
};

export type CheatType =
  | "Console Command"
  | "Cheat Code"
  | "Unlockable"
  | "In-Game Secret";

export type VerificationStatus =
  | "documented"
  | "community-verified"
  | "unofficial";

export type CheatSource = {
  label: string;
  url: string;
};

export type CheatVerification = {
  status: VerificationStatus;
  note: string;
  sources: CheatSource[];
};

export type Cheat = {
  slug: string;
  title: string;
  gameSlug: string;
  type: CheatType;
  platform: string;
  instructions: string;
  code?: string;
  whatItDoes: string;
  requirements?: string;
  effects: string[];
  achievementWarning: boolean;
  saveWarning: boolean;
  verification: CheatVerification;
  tags: string[];
};

export type VideoContentType =
  | "Walkthrough"
  | "Review"
  | "Lore"
  | "Tutorial"
  | "Gameplay"
  | "Tips"
  | "News";

export type Video = {
  slug: string;
  title: string;
  creator: string;
  gameSlug: string;
  type: VideoContentType;
  description: string;
  url: string;
  placeholder: boolean;
  tags: string[];
};

export type FeaturedChannel = {
  name: string;
  focus: string;
  description: string;
  status: "placeholder";
};

export type SearchResultType = "Game" | "Guide" | "Lore" | "Cheat" | "Video";

export type SearchResult = {
  id: string;
  type: SearchResultType;
  title: string;
  description: string;
  href: string;
  gameTitle: string;
  meta: string;
  keywords: string[];
};

export type ContentCategory = {
  title: string;
  description: string;
  href: string;
  icon:
    | "book-open-check"
    | "map"
    | "compass"
    | "sparkles"
    | "egg"
    | "terminal"
    | "swords"
    | "play";
  tone: "signal" | "arcane" | "caution" | "success";
};
