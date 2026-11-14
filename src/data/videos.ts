import type { FeaturedChannel, Video } from "@/types";
import { youtubeSearchUrl } from "@/lib/utils";

const PLACEHOLDER_CREATOR = "Channel curation pending";

export const videos: Video[] = [
  {
    slug: "cyberpunk-lore-deep-dive",
    title: "Cyberpunk 2077: Night City lore deep dives",
    creator: PLACEHOLDER_CREATOR,
    gameSlug: "cyberpunk-2077",
    type: "Lore",
    description:
      "A demo entry for lore-focused videos about Night City, its districts, and its corporate history. Opens a YouTube search rather than a specific creator's video.",
    url: youtubeSearchUrl("Cyberpunk 2077 Night City lore deep dive"),
    placeholder: true,
    tags: ["night city", "lore", "districts", "corporations"],
  },
  {
    slug: "cyberpunk-build-planning-video",
    title: "Cyberpunk 2077: Planning a build without copying a meta",
    creator: PLACEHOLDER_CREATOR,
    gameSlug: "cyberpunk-2077",
    type: "Tutorial",
    description:
      "A demo entry for build-planning tutorials that explain attributes, perks, and cyberware choices. The link opens YouTube search results.",
    url: youtubeSearchUrl("Cyberpunk 2077 build planning guide attributes cyberware"),
    placeholder: true,
    tags: ["build", "attributes", "cyberware", "tutorial"],
  },
  {
    slug: "elden-ring-limgrave-route",
    title: "Elden Ring: A beginner's route through Limgrave",
    creator: PLACEHOLDER_CREATOR,
    gameSlug: "elden-ring",
    type: "Walkthrough",
    description:
      "A demo slot for a spoiler-light Limgrave walkthrough covering early upgrades, useful sites, and the Weeping Peninsula detour.",
    url: youtubeSearchUrl("Elden Ring Limgrave beginner walkthrough"),
    placeholder: true,
    tags: ["limgrave", "beginner", "walkthrough", "weeping peninsula"],
  },
  {
    slug: "elden-ring-margit-breakdown",
    title: "Elden Ring: Margit fight breakdown",
    creator: PLACEHOLDER_CREATOR,
    gameSlug: "elden-ring",
    type: "Tips",
    description:
      "A demo slot for a boss breakdown focused on delayed attacks, spacing, and summon options. Replace with a verified video before publishing.",
    url: youtubeSearchUrl("Elden Ring Margit boss fight guide"),
    placeholder: true,
    tags: ["margit", "boss", "combat", "tips"],
  },
  {
    slug: "witcher-white-orchard-route",
    title: "The Witcher 3: A completionist route through White Orchard",
    creator: PLACEHOLDER_CREATOR,
    gameSlug: "the-witcher-3",
    type: "Walkthrough",
    description:
      "A demo entry for a route that covers the opening region's quests, places of power, and useful early equipment.",
    url: youtubeSearchUrl("Witcher 3 White Orchard completionist guide"),
    placeholder: true,
    tags: ["white orchard", "walkthrough", "early game", "completionist"],
  },
  {
    slug: "witcher-world-factions-explained",
    title: "The Witcher 3: World and factions explained",
    creator: PLACEHOLDER_CREATOR,
    gameSlug: "the-witcher-3",
    type: "Lore",
    description:
      "A demo slot for a lore video about Nilfgaard, the Northern Realms, and the political backdrop of the game.",
    url: youtubeSearchUrl("Witcher 3 world factions lore explained"),
    placeholder: true,
    tags: ["lore", "factions", "nilfgaard", "northern realms"],
  },
  {
    slug: "baldurs-gate-combat-basics",
    title: "Baldur's Gate 3: Combat basics for new players",
    creator: PLACEHOLDER_CREATOR,
    gameSlug: "baldurs-gate-3",
    type: "Tutorial",
    description:
      "A demo entry for tutorials covering action economy, concentration, rests, and positioning in the first act.",
    url: youtubeSearchUrl("Baldur's Gate 3 combat basics beginners"),
    placeholder: true,
    tags: ["combat", "tutorial", "action economy", "beginners"],
  },
  {
    slug: "baldurs-gate-act-one-route",
    title: "Baldur's Gate 3: A spoiler-light Act 1 route",
    creator: PLACEHOLDER_CREATOR,
    gameSlug: "baldurs-gate-3",
    type: "Walkthrough",
    description:
      "A demo slot for a route through the first act that respects quest timers and avoids major story spoilers.",
    url: youtubeSearchUrl("Baldur's Gate 3 Act 1 spoiler free walkthrough"),
    placeholder: true,
    tags: ["act 1", "walkthrough", "spoiler light", "quest order"],
  },
  {
    slug: "minecraft-first-night-video",
    title: "Minecraft: Surviving the first night",
    creator: PLACEHOLDER_CREATOR,
    gameSlug: "minecraft",
    type: "Tutorial",
    description:
      "A demo entry for a first-night tutorial covering tools, shelter, food, and the first bed. Works as a search starting point, not a specific recommendation.",
    url: youtubeSearchUrl("Minecraft first night survival tutorial"),
    placeholder: true,
    tags: ["first night", "survival", "tutorial", "beginner"],
  },
  {
    slug: "minecraft-performance-video",
    title: "Minecraft: Performance settings explained",
    creator: PLACEHOLDER_CREATOR,
    gameSlug: "minecraft",
    type: "Tips",
    description:
      "A demo slot for a performance video about render distance, simulation distance, Java memory, and trusted performance mods.",
    url: youtubeSearchUrl("Minecraft performance settings render distance FPS"),
    placeholder: true,
    tags: ["performance", "settings", "fps", "java", "bedrock"],
  },
  {
    slug: "rdr2-horses-hunting-video",
    title: "Red Dead Redemption 2: Horses, hunting, and camp",
    creator: PLACEHOLDER_CREATOR,
    gameSlug: "red-dead-redemption-2",
    type: "Tips",
    description:
      "A demo entry for a practical guide to horse bonding, clean hunting, and keeping the camp supplied.",
    url: youtubeSearchUrl("Red Dead Redemption 2 horses hunting camp guide"),
    placeholder: true,
    tags: ["horses", "hunting", "camp", "tips"],
  },
  {
    slug: "rdr2-story-analysis-video",
    title: "Red Dead Redemption 2: Story and theme analysis",
    creator: PLACEHOLDER_CREATOR,
    gameSlug: "red-dead-redemption-2",
    type: "Lore",
    description:
      "A demo slot for a spoiler-heavy analysis of the gang, the Western myth, and the game's ending. Replace with a verified video before publishing.",
    url: youtubeSearchUrl("Red Dead Redemption 2 story analysis video essay"),
    placeholder: true,
    tags: ["story", "analysis", "western", "lore"],
  },
];

export const featuredChannels: FeaturedChannel[] = [
  {
    name: "Lore specialists",
    focus: "Worldbuilding and story analysis",
    description:
      "A reserved slot for creators who explain fictional histories, factions, and character arcs with care. No channel is endorsed yet.",
    status: "placeholder",
  },
  {
    name: "Mechanics teachers",
    focus: "Combat, builds, and systems",
    description:
      "A reserved slot for creators who teach systems clearly and show their reasoning instead of only posting highlight reels.",
    status: "placeholder",
  },
  {
    name: "Completionist routes",
    focus: "Walkthroughs and 100% planning",
    description:
      "A reserved slot for spoiler-conscious walkthroughs, route planning, and checklist-friendly completion guides.",
    status: "placeholder",
  },
  {
    name: "Performance labs",
    focus: "Settings, benchmarks, and fixes",
    description:
      "A reserved slot for creators who test settings on real hardware and explain the trade-offs instead of promising magic fixes.",
    status: "placeholder",
  },
];
