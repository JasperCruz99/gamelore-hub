import type { Cheat } from "@/types";

export type CheatNote = {
  gameSlug: string;
  note: string;
};

const MINECRAFT_SOURCE = {
  label: "Minecraft Wiki — Commands",
  url: "https://minecraft.wiki/w/Commands",
};

const RDR2_SOURCES = [
  {
    label: "RDR2.org — Cheats list",
    url: "https://www.rdr2.org/cheats/rdr2/",
  },
  {
    label: "GamesRadar+ — Red Dead Redemption 2 cheats",
    url: "https://www.gamesradar.com/red-dead-redemption-2-cheats/",
  },
];

export const cheats: Cheat[] = [
  {
    slug: "minecraft-creative-mode",
    title: "Switch to Creative mode",
    gameSlug: "minecraft",
    type: "Console Command",
    platform: "Java Edition",
    instructions:
      "Enable cheats for the world, open chat with T, and enter the command. On a server, you need operator permissions.",
    code: "/gamemode creative",
    whatItDoes:
      "Changes your own game mode to Creative, granting flight, unlimited blocks, and no survival damage.",
    requirements:
      "Commands must be enabled for the world. In Java Edition, cheats can be allowed at world creation or temporarily enabled through the world's LAN options on older versions.",
    effects: [
      "Flight and no fall damage",
      "Unlimited blocks in the Creative inventory",
      "No hunger or survival damage",
      "Can be reversed with /gamemode survival",
    ],
    achievementWarning: false,
    saveWarning: false,
    verification: {
      status: "documented",
      note: "This is a built-in Java Edition command. It does not disable Java advancements, but it does change how the world plays. Bedrock Edition handles achievements differently.",
      sources: [
        {
          label: "Minecraft Wiki — Commands/gamemode",
          url: "https://minecraft.wiki/w/Commands/gamemode",
        },
        MINECRAFT_SOURCE,
      ],
    },
    tags: ["creative", "gamemode", "java", "commands"],
  },
  {
    slug: "minecraft-give-items",
    title: "Give yourself items",
    gameSlug: "minecraft",
    type: "Console Command",
    platform: "Java Edition",
    instructions:
      "Enable cheats for the world, open chat with T, and use the give command with a target and item ID.",
    code: "/give @s diamond 64",
    whatItDoes:
      "Adds 64 diamonds directly to your inventory. Replace the item ID and count to give something else.",
    requirements:
      "Commands must be enabled. The item ID must match your game version; some items use namespaced IDs.",
    effects: [
      "Adds the requested item to the target player's inventory",
      "Works with most item IDs, including modded items on modded servers",
      "Can be used on another player by changing the target selector",
    ],
    achievementWarning: false,
    saveWarning: false,
    verification: {
      status: "documented",
      note: "Built-in Java Edition command. Item IDs can change between versions, so check the current wiki for the exact ID.",
      sources: [
        {
          label: "Minecraft Wiki — Commands/give",
          url: "https://minecraft.wiki/w/Commands/give",
        },
        MINECRAFT_SOURCE,
      ],
    },
    tags: ["give", "items", "diamonds", "java", "commands"],
  },
  {
    slug: "minecraft-time-and-weather",
    title: "Change the time and weather",
    gameSlug: "minecraft",
    type: "Console Command",
    platform: "Java Edition",
    instructions:
      "Enable cheats, open chat, and enter the command. Use /time set day to jump to daytime, or /weather clear to stop rain.",
    code: "/time set day\n/weather clear",
    whatItDoes:
      "Sets the world time to day and clears active rain or thunderstorms.",
    requirements:
      "Commands must be enabled. Weather commands affect the whole world; /time changes the world clock.",
    effects: [
      "Sets the time to the start of daytime",
      "Clears rain or thunder",
      "Useful for screenshots, building, and testing redstone",
      "Does not permanently prevent weather from changing later",
    ],
    achievementWarning: false,
    saveWarning: false,
    verification: {
      status: "documented",
      note: "Built-in commands. Syntax can differ slightly in Bedrock Edition, where targets and arguments are formatted differently.",
      sources: [
        {
          label: "Minecraft Wiki — Commands/time",
          url: "https://minecraft.wiki/w/Commands/time",
        },
        {
          label: "Minecraft Wiki — Commands/weather",
          url: "https://minecraft.wiki/w/Commands/weather",
        },
      ],
    },
    tags: ["time", "weather", "day", "java", "commands"],
  },
  {
    slug: "minecraft-keep-inventory",
    title: "Keep your inventory after death",
    gameSlug: "minecraft",
    type: "Console Command",
    platform: "Java Edition and Bedrock Edition",
    instructions:
      "Enable cheats and enter the gamerule command for your edition and version. The change applies to the world and persists across sessions.",
    code: "/gamerule keep_inventory true",
    whatItDoes:
      "Stops players from dropping their inventory and experience when they die.",
    requirements:
      "Cheats must be enabled. On a server, you need operator permissions. Java 1.21.11 and newer use keep_inventory; older Java versions use keepInventory; Bedrock uses keepinventory. Check the autocomplete in your version if unsure.",
    effects: [
      "Items and experience stay with the player after death",
      "Applies to every player in the world",
      "Can be reversed by setting the rule to false",
      "Potion effects and position are still reset on death",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "documented",
      note: "Built-in game rule. The rule name changed in newer Java versions, so use autocomplete or the current wiki. Bedrock Edition permanently disables achievements in a world once cheats are enabled, even if they are turned off later. Java Edition advancements are handled differently.",
      sources: [
        {
          label: "Minecraft Wiki — Commands/gamerule",
          url: "https://minecraft.wiki/w/Commands/gamerule",
        },
        {
          label: "Minecraft Wiki — Game rule",
          url: "https://minecraft.wiki/w/Game_rule",
        },
      ],
    },
    tags: ["keep inventory", "death", "gamerule", "java", "bedrock"],
  },
  {
    slug: "rdr2-money-cheat",
    title: "Get $500",
    gameSlug: "red-dead-redemption-2",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation, Xbox",
    instructions:
      "Pause the game, open Settings, select Cheats, then enter the phrase exactly as written. Punctuation matters; capitalization does not.",
    code: "Greed is now a virtue",
    whatItDoes:
      "Adds $500 in-game money each time the cheat is activated.",
    requirements:
      "Story Mode only. Cheats are not available in Red Dead Online. Make a manual save before using cheats, because saving and achievements are disabled while they are active.",
    effects: [
      "Adds $500 per activation",
      "Can be toggled from the Cheats menu after entry",
      "Disables saving while active",
      "Disables trophies or achievements while active",
    ],
    achievementWarning: true,
    saveWarning: true,
    verification: {
      status: "community-verified",
      note: "Rockstar does not publish a single official list of every RDR2 cheat. This phrase is corroborated by multiple community references. Test it in a spare save first.",
      sources: RDR2_SOURCES,
    },
    tags: ["money", "cash", "cheat code", "story mode"],
  },
  {
    slug: "rdr2-infinite-ammo",
    title: "Infinite ammunition",
    gameSlug: "red-dead-redemption-2",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation, Xbox",
    instructions:
      "Open the Cheats screen from Settings and enter the phrase. Some sources say the relevant in-game newspaper must be purchased before the cheat unlocks.",
    code: "Abundance is the dullest desire",
    whatItDoes:
      "Prevents ammunition from running out while the cheat is active.",
    requirements:
      "Story Mode only. The phrase is widely reported to require the New Hanover Gazette No. 27 newspaper in Chapter 1; check the in-game Cheats list if it is rejected.",
    effects: [
      "Ammunition does not deplete",
      "Works with firearms",
      "Disables saving while active",
      "Disables trophies or achievements while active",
    ],
    achievementWarning: true,
    saveWarning: true,
    verification: {
      status: "community-verified",
      note: "This phrase and its newspaper requirement are documented by community references. Rockstar does not maintain a public cheat list.",
      sources: RDR2_SOURCES,
    },
    tags: ["ammo", "infinite ammo", "cheat code", "story mode"],
  },
  {
    slug: "rdr2-all-outfits",
    title: "Unlock all outfits",
    gameSlug: "red-dead-redemption-2",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation, Xbox",
    instructions:
      "Open Settings > Cheats and enter the phrase. It can be toggled on or off from the same menu after it is added.",
    code: "Vanity. All is vanity",
    whatItDoes:
      "Grants access to all outfits in Arthur Morgan's wardrobe.",
    requirements:
      "Story Mode only. Some outfits may still be tied to other systems or story progress. Save before activating.",
    effects: [
      "Adds all outfits to the wardrobe",
      "Cosmetic change; does not alter stats",
      "Disables saving while active",
      "Disables trophies or achievements while active",
    ],
    achievementWarning: true,
    saveWarning: true,
    verification: {
      status: "community-verified",
      note: "Documented by multiple community cheat lists. Punctuation in the phrase matters.",
      sources: RDR2_SOURCES,
    },
    tags: ["outfits", "wardrobe", "cosmetic", "cheat code"],
  },
  {
    slug: "rdr2-horse-whistle",
    title: "Call your horse from farther away",
    gameSlug: "red-dead-redemption-2",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation, Xbox",
    instructions:
      "Open Settings > Cheats and enter the phrase. The effect is toggled like the other cheats.",
    code: "Better than my dog",
    whatItDoes:
      "Extends your horse whistle range, making it easier to call your horse from a distance.",
    requirements:
      "Story Mode only. You still need a horse that is alive and not stabled elsewhere. Save before activating.",
    effects: [
      "Increases whistle range",
      "Useful after hunting or exploring on foot",
      "Disables saving while active",
      "Disables trophies or achievements while active",
    ],
    achievementWarning: true,
    saveWarning: true,
    verification: {
      status: "community-verified",
      note: "Widely reported cheat phrase. Effects and availability can vary by platform and story progress.",
      sources: RDR2_SOURCES,
    },
    tags: ["horse", "whistle", "quality of life", "cheat code"],
  },
];

export const cheatNotes: CheatNote[] = [
  {
    gameSlug: "cyberpunk-2077",
    note: "No official cheat codes. Third-party console tools and trainers exist, but they can break saves and are outside the scope of this hub. Use build planning and difficulty settings instead.",
  },
  {
    gameSlug: "elden-ring",
    note: "No official cheat codes. Spirit Ashes, summon signs, and exploration are the intended ways to adjust difficulty. This hub does not cover external trainers or save editors.",
  },
  {
    gameSlug: "the-witcher-3",
    note: "No official cheat codes. A debug console can be enabled through unofficial modifications, but this hub does not cover it because it is not part of the base game.",
  },
  {
    gameSlug: "baldurs-gate-3",
    note: "No official cheat codes. Difficulty settings, party respecs, and save management are the legitimate ways to adjust the experience.",
  },
];
