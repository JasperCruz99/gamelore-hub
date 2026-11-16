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

const GTA_IV_SOURCES = [
  {
    label: "GTA Wiki — Cheats in GTA IV",
    url: "https://gta.wiki/w/Cheats_in_GTA_IV",
  },
  {
    label: "Gaming Route — GTA 4 cheats",
    url: "https://gamingroute.com/gta-4-cheats/",
  },
];

const GTA_V_SOURCES = [
  {
    label: "GTA BOOM — Every GTA 5 cheat",
    url: "https://www.gtaboom.com/every-gta-5-cheat-console-code-and-phone-number-0740",
  },
  {
    label: "OpenWorldDaily — GTA 5 cheat codes",
    url: "https://openworlddaily.com/gta-v/cheat-codes/",
  },
];

const HALF_LIFE_2_SOURCES = [
  {
    label: "Steam Community — Half-Life 2 cheats and console commands",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3087273607",
  },
  {
    label: "CheatArcade — Half-Life 2 console commands",
    url: "https://cheatarcade.com/half-life-2-console-commands",
  },
];

const SUBNAUTICA_SOURCES = [
  {
    label: "Subnautica Wiki — Console Commands",
    url: "https://wiki.subnautica.com/sn/Console_Commands",
  },
  {
    label: "Gaming Route — Subnautica console commands",
    url: "https://gamingroute.com/subnautica-console-commands/",
  },
];

const FALLOUT_4_SOURCES = [
  {
    label: "Fallout Wiki — Fallout 4 console commands",
    url: "https://fallout.wiki/wiki/Console_Commands_(Fallout_4)",
  },
  {
    label: "Gaming Route — Fallout 4 console commands",
    url: "https://gamingroute.com/fallout-4-console-commands/",
  },
];

const PORTAL_SOURCES = [
  {
    label: "Portal Wiki — List of useful console commands",
    url: "https://theportalwiki.com/wiki/List_of_useful_console_commands",
  },
  {
    label: "SteamSolo — Portal console commands",
    url: "https://steamsolo.com/guide/portal-console-commands-portal/",
  },
];

const LEFT_4_DEAD_2_SOURCES = [
  {
    label: "Left 4 Dead Wiki — Console commands",
    url: "https://left4deadwiki.com/wiki/Console_commands",
  },
  {
    label: "Steam Community — Left 4 Dead 2 console commands",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=199316232",
  },
];

const OBLIVION_SOURCES = [
  {
    label: "UESP — Oblivion:Console",
    url: "https://en.uesp.net/wiki/Oblivion:Console",
  },
  {
    label: "UESP — Oblivion:Console Command Tutorial",
    url: "https://en.uesp.net/wiki/Oblivion:Console_Command_Tutorial",
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
  {
    slug: "gta-iv-health-armor",
    title: "Refill health and armor",
    gameSlug: "grand-theft-auto-iv",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation 3, Xbox 360",
    instructions:
      "Open Niko's phone, switch to the keypad, dial the number, and press call. Dial it again whenever you need another refill.",
    code: "362-555-0100",
    whatItDoes:
      "Fully restores health and armor and repairs the vehicle you are using.",
    requirements:
      "Story Mode only. The number is the same on PC, PlayStation 3, Xbox 360, and backward-compatible Xbox consoles. Some achievements or trophies are blocked for the current session; reload a clean save to restore them.",
    effects: [
      "Fully restores health and armor",
      "Repairs the current vehicle",
      "Does not add weapons or ammo",
      "Can block some achievements or trophies until you reload",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The number is listed consistently by GTA Wiki and current cheat references. Keep a manual save before using it if achievements matter.",
      sources: GTA_IV_SOURCES,
    },
    tags: ["health", "armor", "repair", "phone", "story mode"],
  },
  {
    slug: "gta-iv-advanced-weapons",
    title: "Get the advanced weapon set",
    gameSlug: "grand-theft-auto-iv",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation 3, Xbox 360",
    instructions:
      "Open Niko's phone, dial the number, and call. The cheat replaces your current weapons and refills their ammunition.",
    code: "486-555-0100",
    whatItDoes:
      "Gives the advanced weapon set with full ammunition.",
    requirements:
      "Story Mode only. The set includes a baseball bat, combat pistol, combat shotgun, SMG, carbine rifle, combat sniper, grenades, and RPG. It blocks the Cleaned the Mean Streets achievement until you reload a clean save.",
    effects: [
      "Adds the advanced weapon loadout",
      "Refills ammunition for the included weapons",
      "Replaces the weapons you were carrying",
      "Blocks an achievement until you reload a clean save",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "GTA Wiki and current cheat references agree on the number and loadout. Enter it in a spare save if you care about achievements.",
      sources: GTA_IV_SOURCES,
    },
    tags: ["weapons", "ammo", "loadout", "phone", "story mode"],
  },
  {
    slug: "gta-iv-clear-wanted",
    title: "Clear the wanted level",
    gameSlug: "grand-theft-auto-iv",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation 3, Xbox 360",
    instructions:
      "Open the phone and dial the number while you have a wanted level. The call removes every active star.",
    code: "267-555-0100",
    whatItDoes:
      "Clears the wanted level immediately, ending the current police pursuit.",
    requirements:
      "Story Mode only. Clearing the wanted level blocks the Walk Free and One Man Army achievements until you reload a save that has not used cheats.",
    effects: [
      "Removes all wanted stars",
      "Ends the current police pursuit",
      "Does not remove police vehicles already nearby",
      "Blocks two achievements until you reload a clean save",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The number and achievement caveat are documented by GTA Wiki and corroborated by current cheat references.",
      sources: GTA_IV_SOURCES,
    },
    tags: ["wanted level", "police", "phone", "story mode"],
  },
  {
    slug: "gta-iv-annihilator",
    title: "Spawn an Annihilator",
    gameSlug: "grand-theft-auto-iv",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation 3, Xbox 360",
    instructions:
      "Dial the number while on foot and in an open area so the helicopter has room to land.",
    code: "359-555-0100",
    whatItDoes:
      "Spawns an armed Annihilator police helicopter nearby.",
    requirements:
      "Story Mode only. Dial it while on foot with enough open space. Spawning the helicopter blocks the Walk Free and One Man Army achievements until a clean save is loaded.",
    effects: [
      "Spawns an armed Annihilator helicopter",
      "Appears near Niko in an open area",
      "Can be used for transport or combat",
      "Blocks two achievements until you reload a clean save",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "GTA Wiki and current cheat references list the same number. The achievement warning applies to the save session.",
      sources: GTA_IV_SOURCES,
    },
    tags: ["vehicle", "helicopter", "annihilator", "phone", "story mode"],
  },
  {
    slug: "gta-iv-weather",
    title: "Change the weather",
    gameSlug: "grand-theft-auto-iv",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation 3, Xbox 360",
    instructions:
      "Dial the number to advance to the next weather condition. Repeat until you reach the weather you want.",
    code: "468-555-0100",
    whatItDoes:
      "Cycles through the game's weather conditions.",
    requirements:
      "Story Mode only. The change applies to the current world state and can be repeated. Unlike the health, weapon, wanted-level, and Annihilator cheats, it does not block achievements.",
    effects: [
      "Cycles to the next weather type",
      "Repeat the call to reach clear, rainy, foggy, or other conditions",
      "Useful for screenshots and atmosphere",
      "No achievement block reported",
    ],
    achievementWarning: false,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The number is listed consistently by GTA Wiki and current cheat references. The weather cycles in a fixed order.",
      sources: GTA_IV_SOURCES,
    },
    tags: ["weather", "atmosphere", "phone", "story mode"],
  },
  {
    slug: "gta-iv-comet",
    title: "Spawn a Comet",
    gameSlug: "grand-theft-auto-iv",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation 3, Xbox 360",
    instructions:
      "Dial the number while on foot and near a road with space for a car.",
    code: "227-555-0175",
    whatItDoes:
      "Spawns a Comet sports car next to Niko.",
    requirements:
      "Story Mode only. Only one cheat-spawned vehicle can exist at a time, so the previous one may disappear. This spawn does not block achievements.",
    effects: [
      "Spawns a Comet sports car",
      "Appears near Niko on a road",
      "Can be replaced by spawning another cheat vehicle",
      "No achievement block reported",
    ],
    achievementWarning: false,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The number is listed consistently by GTA Wiki and current cheat references. Vehicle spawns are safe for achievements.",
      sources: GTA_IV_SOURCES,
    },
    tags: ["vehicle", "car", "comet", "phone", "story mode"],
  },
  {
    slug: "gta-v-invincibility",
    title: "Invincibility for five minutes",
    gameSlug: "grand-theft-auto-v",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation, Xbox",
    instructions:
      "Open the in-game phone, choose Contacts, open the dial pad, enter the number, and call. Re-enter it when the timer expires.",
    code: "1-999-724-654-5537",
    whatItDoes:
      "Makes the current character immune to damage for roughly five real-time minutes.",
    requirements:
      "Story Mode only; cheats do not work in GTA Online. The effect is temporary and expires after about five minutes. Achievements and trophies are temporarily disabled while cheats are active.",
    effects: [
      "Prevents damage for about five minutes",
      "Expires on a real-time timer",
      "Can be renewed by calling again",
      "Temporarily disables achievements and trophies",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The number is corroborated by GTA BOOM and OpenWorldDaily. GTA V has no official money or permanent god-mode cheat.",
      sources: GTA_V_SOURCES,
    },
    tags: ["invincibility", "god mode", "health", "phone", "story mode"],
  },
  {
    slug: "gta-v-health-armor",
    title: "Restore maximum health and armor",
    gameSlug: "grand-theft-auto-v",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation, Xbox",
    instructions:
      "Open the phone, choose Contacts, open the dial pad, enter the number, and call.",
    code: "1-999-887-853",
    whatItDoes:
      "Fully restores the current character's health and armor.",
    requirements:
      "Story Mode only. This does not make the character invincible; use the invincibility cheat for temporary damage protection. Achievements and trophies are temporarily disabled.",
    effects: [
      "Fills health to maximum",
      "Fills armor to maximum",
      "Works immediately after calling",
      "Temporarily disables achievements and trophies",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The number is corroborated by GTA BOOM and OpenWorldDaily. Keep a manual save before using cheats.",
      sources: GTA_V_SOURCES,
    },
    tags: ["health", "armor", "heal", "phone", "story mode"],
  },
  {
    slug: "gta-v-weapons",
    title: "Get weapons and ammo",
    gameSlug: "grand-theft-auto-v",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation, Xbox",
    instructions:
      "Open the phone, open the dial pad, enter the number, and call. Call it again to refill ammunition.",
    code: "1-999-866-587",
    whatItDoes:
      "Adds a broad weapon set with ammunition to the current character.",
    requirements:
      "Story Mode only. Re-entering the code refills ammo for the included weapons. Achievements and trophies are temporarily disabled.",
    effects: [
      "Adds a range of weapons",
      "Includes ammunition for the new weapons",
      "Calling again refills ammunition",
      "Temporarily disables achievements and trophies",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The number is corroborated by GTA BOOM and OpenWorldDaily. Exact weapon pickup behavior can vary with story progress.",
      sources: GTA_V_SOURCES,
    },
    tags: ["weapons", "ammo", "loadout", "phone", "story mode"],
  },
  {
    slug: "gta-v-lower-wanted",
    title: "Lower the wanted level",
    gameSlug: "grand-theft-auto-v",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation, Xbox",
    instructions:
      "Open the phone and call the number while you have a wanted level. Call it again to remove another star.",
    code: "1-999-5299-3787",
    whatItDoes:
      "Removes one wanted star per call.",
    requirements:
      "Story Mode only. Call repeatedly to remove additional stars; the cheat does not prevent police from responding again later. Achievements and trophies are temporarily disabled.",
    effects: [
      "Removes one wanted star per call",
      "Can be repeated to clear a higher wanted level",
      "Does not make the character permanently immune to police",
      "Temporarily disables achievements and trophies",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The number is corroborated by GTA BOOM and OpenWorldDaily. Each call removes one star.",
      sources: GTA_V_SOURCES,
    },
    tags: ["wanted level", "police", "phone", "story mode"],
  },
  {
    slug: "gta-v-buzzard",
    title: "Spawn a Buzzard",
    gameSlug: "grand-theft-auto-v",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation, Xbox",
    instructions:
      "Open the phone, dial the number, and call. Use an open area with room for the helicopter to appear.",
    code: "1-999-2899-633",
    whatItDoes:
      "Spawns an armed Buzzard attack helicopter nearby.",
    requirements:
      "Story Mode only. The cheat spawns a vehicle for the current session rather than permanently unlocking it. Achievements and trophies are temporarily disabled.",
    effects: [
      "Spawns an armed Buzzard attack helicopter",
      "Appears near the current character",
      "Useful for fast travel and combat",
      "Temporarily disables achievements and trophies",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The number is corroborated by GTA BOOM and OpenWorldDaily. Spawn it in open space to avoid collisions.",
      sources: GTA_V_SOURCES,
    },
    tags: ["vehicle", "helicopter", "buzzard", "phone", "story mode"],
  },
  {
    slug: "gta-v-parachute",
    title: "Get a parachute",
    gameSlug: "grand-theft-auto-v",
    type: "Cheat Code",
    platform: "Story Mode — PC, PlayStation, Xbox",
    instructions:
      "Open the phone, dial the number, and call. The parachute is added to the current character's inventory.",
    code: "1-999-759-3483",
    whatItDoes:
      "Adds a parachute to the current character's inventory.",
    requirements:
      "Story Mode only. The parachute still has to be deployed before impact; the cheat does not prevent fall damage on its own. Achievements and trophies are temporarily disabled.",
    effects: [
      "Adds a parachute to the inventory",
      "Useful before climbing or flying",
      "Does not protect against falls before deployment",
      "Temporarily disables achievements and trophies",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The number is corroborated by GTA BOOM and OpenWorldDaily. This is the standard parachute cheat, not a wingsuit unlock.",
      sources: GTA_V_SOURCES,
    },
    tags: ["parachute", "travel", "phone", "story mode"],
  },
  {
    slug: "half-life-2-all-weapons",
    title: "Get every campaign weapon",
    gameSlug: "half-life-2",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Enable the developer console in Options > Keyboard > Advanced, press the console key, enter sv_cheats 1, then enter impulse 101.",
    code: "sv_cheats 1\nimpulse 101",
    whatItDoes:
      "Gives Gordon the standard campaign weapons with ammunition.",
    requirements:
      "Single-player only. Cheat-protected commands require sv_cheats 1. Achievements are disabled for the session while cheats are on; set sv_cheats 0 and restart the game to restore them.",
    effects: [
      "Adds the campaign weapon set",
      "Refills ammunition for those weapons",
      "Requires sv_cheats 1 first",
      "Disables achievements for the current session",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The built-in Source console and impulse 101 are documented by the Steam Community guide and current command references. Achievements return after restarting without cheats.",
      sources: HALF_LIFE_2_SOURCES,
    },
    tags: ["weapons", "ammo", "console command", "source engine", "pc"],
  },
  {
    slug: "half-life-2-god-mode",
    title: "Toggle god mode",
    gameSlug: "half-life-2",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Open the developer console, enable cheats with sv_cheats 1, then enter god. Enter it again to toggle the effect off.",
    code: "sv_cheats 1\ngod",
    whatItDoes:
      "Prevents Gordon from taking damage until the command is toggled off.",
    requirements:
      "Single-player only. sv_cheats 1 disables achievements for the session. Toggle god off before loading a save you want to keep clean.",
    effects: [
      "Blocks all damage while active",
      "Can be toggled off by entering god again",
      "Requires sv_cheats 1",
      "Disables achievements for the current session",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "God mode is a built-in Source command. The current Steam Community guide and command references agree on the syntax.",
      sources: HALF_LIFE_2_SOURCES,
    },
    tags: ["god mode", "invincibility", "console command", "source engine", "pc"],
  },
  {
    slug: "half-life-2-noclip",
    title: "Toggle noclip",
    gameSlug: "half-life-2",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Enable cheats with sv_cheats 1, then enter noclip. Enter it again to return to normal movement.",
    code: "sv_cheats 1\nnoclip",
    whatItDoes:
      "Lets Gordon fly through walls and level geometry for exploration or troubleshooting.",
    requirements:
      "Single-player only. Save before using it; leaving the playable area can strand you or trigger unfinished map space. Achievements are disabled for the session while cheats are active.",
    effects: [
      "Enables free flight through geometry",
      "Toggles off when entered again",
      "Useful for exploring or recovering a stuck save",
      "Disables achievements for the current session",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "Noclip is a built-in Source command documented by the Steam Community guide and command references. Keep a save before flying outside the map.",
      sources: HALF_LIFE_2_SOURCES,
    },
    tags: ["noclip", "exploration", "console command", "source engine", "pc"],
  },
  {
    slug: "subnautica-no-damage",
    title: "Toggle no damage",
    gameSlug: "subnautica",
    type: "Console Command",
    platform: "PC and Mac",
    instructions:
      "Open the console with Shift + Enter or Shift + `, then enter nodamage. Enter it again to toggle the effect off.",
    code: "nodamage",
    whatItDoes:
      "Prevents the player from taking damage, the closest built-in equivalent to god mode.",
    requirements:
      "Single-player only. Using console commands disables achievements for that save file. Use a separate save if you want to earn achievements later.",
    effects: [
      "Blocks creature and environmental damage",
      "Can be toggled off by entering the command again",
      "Does not remove hunger, thirst, or oxygen limits",
      "Disables achievements for the save",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The command is documented by the Subnautica Wiki and current console-command references. Achievement behavior is save-specific; use a separate save.",
      sources: SUBNAUTICA_SOURCES,
    },
    tags: ["no damage", "god mode", "console command", "survival", "pc"],
  },
  {
    slug: "subnautica-free-crafting",
    title: "Toggle free crafting and building",
    gameSlug: "subnautica",
    type: "Console Command",
    platform: "PC and Mac",
    instructions:
      "Open the console and enter nocost. Enter it again to return to normal resource costs.",
    code: "nocost",
    whatItDoes:
      "Lets the Fabricator, Habitat Builder, Mobile Vehicle Bay, Vehicle Upgrade Console, and Modification Station work without required materials.",
    requirements:
      "Single-player only. Using the console disables achievements for that save. Existing materials may still be consumed if you have them, and deconstructing does not refund materials in this mode.",
    effects: [
      "Crafts and builds without required materials",
      "Affects fabricators, builders, and vehicle stations",
      "Toggles off when entered again",
      "Disables achievements for the save",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The command and its limits are documented by the Subnautica Wiki and current console-command references.",
      sources: SUBNAUTICA_SOURCES,
    },
    tags: ["free crafting", "building", "nocost", "console command", "pc"],
  },
  {
    slug: "subnautica-spawn-item",
    title: "Add an item to your inventory",
    gameSlug: "subnautica",
    type: "Console Command",
    platform: "PC and Mac",
    instructions:
      "Open the console and enter item, followed by the item ID and amount. Replace the example values with the resource you need.",
    code: "item titanium 10",
    whatItDoes:
      "Adds the specified quantity of an item directly to the player's inventory.",
    requirements:
      "Single-player only. Item IDs use one word for multiword names, such as copperwire. Using the console disables achievements for that save.",
    effects: [
      "Adds the requested item and quantity",
      "Uses item IDs rather than display names",
      "Defaults to one item if no amount is entered",
      "Disables achievements for the save",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The item syntax is documented by the Subnautica Wiki and current console-command references. Item IDs can vary with game version and mods.",
      sources: SUBNAUTICA_SOURCES,
    },
    tags: ["items", "resources", "console command", "survival", "pc"],
  },
  {
    slug: "fallout-4-god-mode",
    title: "Toggle god mode",
    gameSlug: "fallout-4",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Load a save, press the tilde key (~) to open the console, type tgm, and press Enter. Enter tgm again to turn it off.",
    code: "tgm",
    whatItDoes:
      "Toggles god mode, which prevents damage and radiation, grants unlimited ammo and action points, removes carry-weight limits, and supplies unlimited workshop resources.",
    requirements:
      "PC version only. The console is disabled in Survival mode. The key may differ on non-US keyboard layouts.",
    effects: [
      "No damage or radiation while active",
      "Unlimited ammo, action points, and carry weight",
      "Unlimited workshop resources",
      "Stimpaks and RadAway do not work while god mode is active",
      "Fusion cores still drain",
    ],
    achievementWarning: false,
    saveWarning: false,
    verification: {
      status: "documented",
      note: "The Fallout Wiki documents tgm as the console command for god mode and notes that console commands do not disable Fallout 4 achievements. Some community guides disagree, so keep a clean save if achievements matter.",
      sources: FALLOUT_4_SOURCES,
    },
    tags: ["god mode", "tgm", "console command", "pc", "survival"],
  },
  {
    slug: "fallout-4-add-caps",
    title: "Add bottle caps",
    gameSlug: "fallout-4",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Open the console with the tilde key, enter the command, and press Enter. Change the final number to add a different amount.",
    code: "player.additem f 1000",
    whatItDoes:
      "Adds 1,000 bottle caps directly to the player's inventory. The item ID f is the base-game caps form ID.",
    requirements:
      "PC version only, and the console is disabled in Survival mode. Save before using item commands so you can undo an accidental amount.",
    effects: [
      "Adds the requested number of caps",
      "Can be repeated with a different amount",
      "Changing f to another item ID adds a different item",
      "Does not complete quests or bypass vendor prices",
    ],
    achievementWarning: false,
    saveWarning: false,
    verification: {
      status: "documented",
      note: "The caps form ID and player.additem syntax are documented by the Fallout Wiki and current console-command references.",
      sources: FALLOUT_4_SOURCES,
    },
    tags: ["caps", "money", "items", "console command", "pc"],
  },
  {
    slug: "fallout-4-all-map-markers",
    title: "Reveal all map markers",
    gameSlug: "fallout-4",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Open the console with the tilde key, type tmm 1, and press Enter. Use tmm 0 if you want to remove the markers again.",
    code: "tmm 1",
    whatItDoes:
      "Adds every map marker to the Pip-Boy map and enables fast travel to those locations. tmm 0 removes the markers.",
    requirements:
      "PC version only. The console is disabled in Survival mode. This permanently changes the current save unless you reload an earlier one.",
    effects: [
      "Reveals all map markers",
      "Enables fast travel to revealed locations",
      "Can skip intended exploration and discovery",
      "tmm 0 removes the markers again",
    ],
    achievementWarning: false,
    saveWarning: true,
    verification: {
      status: "documented",
      note: "The Fallout Wiki lists tmm 1 as the map-marker command and warns that console changes can be difficult to undo.",
      sources: FALLOUT_4_SOURCES,
    },
    tags: ["map", "fast travel", "tmm", "console command", "pc"],
  },
  {
    slug: "portal-enable-cheats",
    title: "Enable cheat commands",
    gameSlug: "portal",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Open Options > Keyboard > Advanced, enable the developer console, then press the backtick key (`) and enter sv_cheats 1.",
    code: "sv_cheats 1",
    whatItDoes:
      "Unlocks the console commands that Portal marks as cheats. Enter sv_cheats 0 to turn them off again.",
    requirements:
      "PC version. The developer console must be enabled in the keyboard options. Enabling cheats disables achievements and challenge-mode records while active.",
    effects: [
      "Allows cheat-protected console commands",
      "Works in the classic PC release of Portal",
      "Disables achievements and challenge records",
      "Must be re-enabled after restarting the game",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "documented",
      note: "The Portal Wiki documents sv_cheats as the prerequisite for cheat commands and notes that it disables achievements and challenge-mode records.",
      sources: PORTAL_SOURCES,
    },
    tags: ["sv_cheats", "console command", "pc", "developer console"],
  },
  {
    slug: "portal-god-mode",
    title: "Toggle god mode",
    gameSlug: "portal",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Open the console, enter sv_cheats 1, then enter god. Enter god again to turn it off.",
    code: "god",
    whatItDoes:
      "Toggles invincibility for the player, preventing damage from turrets, falls, and other hazards while active.",
    requirements:
      "PC version. sv_cheats 1 must be enabled first, and achievements are disabled while cheats are active.",
    effects: [
      "Prevents damage while active",
      "Toggles off when entered again",
      "Requires sv_cheats 1",
      "Disables achievements for the session",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "documented",
      note: "god is a standard Source-engine console command documented for Portal by the Portal Wiki and community command lists.",
      sources: PORTAL_SOURCES,
    },
    tags: ["god mode", "invincibility", "console command", "pc", "source engine"],
  },
  {
    slug: "portal-noclip",
    title: "Toggle noclip",
    gameSlug: "portal",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Open the console, enter sv_cheats 1, then enter noclip. Enter noclip again to return to normal movement.",
    code: "noclip",
    whatItDoes:
      "Toggles collision-free flight, allowing the player to pass through walls and reach areas outside the intended route.",
    requirements:
      "PC version. sv_cheats 1 must be enabled first. Leaving the playable area can break scripted events or soft-lock a chamber.",
    effects: [
      "Fly through walls and objects",
      "Toggles off when entered again",
      "Can bypass puzzle triggers and scripted events",
      "Disables achievements for the session",
    ],
    achievementWarning: true,
    saveWarning: true,
    verification: {
      status: "documented",
      note: "noclip is a standard Source-engine console command documented for Portal by the Portal Wiki and community command lists.",
      sources: PORTAL_SOURCES,
    },
    tags: ["noclip", "flight", "console command", "pc", "source engine"],
  },
  {
    slug: "left-4-dead-2-enable-cheats",
    title: "Enable cheat commands",
    gameSlug: "left-4-dead-2",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Enable the developer console in Options > Keyboard/Mouse, then open it with the tilde key (~) and enter sv_cheats 1. Start a local map with the map command if cheats do not take effect.",
    code: "sv_cheats 1",
    whatItDoes:
      "Unlocks cheat-protected console commands on the current local server. Enter sv_cheats 0 to turn them off again.",
    requirements:
      "PC version. Cheats work in local games, not on official or unmodded multiplayer servers. Enabling them disables achievements until the game is restarted.",
    effects: [
      "Allows cheat commands on the current local server",
      "Works best in a map started through the console",
      "Disables achievements until the game restarts",
      "Does not work on secured online servers",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "documented",
      note: "The Left 4 Dead Wiki and Steam Community guide document sv_cheats as the cheat prerequisite and note that achievements are disabled.",
      sources: LEFT_4_DEAD_2_SOURCES,
    },
    tags: ["sv_cheats", "console command", "pc", "developer console"],
  },
  {
    slug: "left-4-dead-2-god-mode",
    title: "Toggle team god mode",
    gameSlug: "left-4-dead-2",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Open the console, enter sv_cheats 1, then enter god 1. Enter god 0 to turn it off.",
    code: "god 1",
    whatItDoes:
      "Makes the player's team invincible, preventing damage from common Infected, special Infected, and environmental hazards.",
    requirements:
      "PC version and a local game with sv_cheats 1 enabled. Achievements are disabled while cheats are active.",
    effects: [
      "The team takes no damage",
      "Survivors are not slowed by special Infected attacks",
      "Requires sv_cheats 1",
      "Enter god 0 to restore normal damage",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "documented",
      note: "The god command and its team-wide effect are documented by the Left 4 Dead Wiki and Steam Community command references.",
      sources: LEFT_4_DEAD_2_SOURCES,
    },
    tags: ["god mode", "invincibility", "co-op", "console command", "pc"],
  },
  {
    slug: "left-4-dead-2-give-ak47",
    title: "Spawn an AK-47",
    gameSlug: "left-4-dead-2",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Open the console, enter sv_cheats 1, then enter give rifle_ak47. The weapon is added to your inventory.",
    code: "give rifle_ak47",
    whatItDoes:
      "Spawns an AK-47 and places it in the player's inventory, replacing the current primary weapon if one is equipped.",
    requirements:
      "PC version and a local game with sv_cheats 1 enabled. The command may not work on secured online servers.",
    effects: [
      "Adds an AK-47 to the player's inventory",
      "Requires sv_cheats 1",
      "Can be repeated for other weapon entity names",
      "Disables achievements until the game restarts",
    ],
    achievementWarning: true,
    saveWarning: false,
    verification: {
      status: "community-verified",
      note: "The weapon entity name and give syntax are widely documented for Left 4 Dead 2 console use. Weapon availability can vary by campaign and server settings.",
      sources: LEFT_4_DEAD_2_SOURCES,
    },
    tags: ["ak-47", "weapons", "give", "console command", "pc"],
  },
  {
    slug: "oblivion-god-mode",
    title: "Toggle god mode",
    gameSlug: "the-elder-scrolls-iv-oblivion",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Load a save, press the tilde key (~) to open the console, type tgm, and press Enter. Enter tgm again to turn it off.",
    code: "tgm",
    whatItDoes:
      "Toggles god mode, making the player invincible and removing most resource limits, including spell cost, encumbrance, ammo, and equipment degradation.",
    requirements:
      "PC version. Create a separate save before experimenting. The console is a developer tool, not an official difficulty option.",
    effects: [
      "Immunity to almost all damage",
      "Health, Magicka, and Fatigue do not decrease",
      "Spells can be cast regardless of cost or skill",
      "Encumbrance is ignored and equipment does not degrade",
    ],
    achievementWarning: false,
    saveWarning: false,
    verification: {
      status: "documented",
      note: "UESP documents tgm as Oblivion's god-mode toggle and lists its effects. The classic PC release does not use Steam achievements, but console changes can still affect a save.",
      sources: OBLIVION_SOURCES,
    },
    tags: ["god mode", "tgm", "console command", "pc", "bethesda"],
  },
  {
    slug: "oblivion-add-gold",
    title: "Add gold",
    gameSlug: "the-elder-scrolls-iv-oblivion",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Open the console with the tilde key, enter the command, and press Enter. Change the final number to add a different amount.",
    code: "player.additem f 1000",
    whatItDoes:
      "Adds 1,000 gold directly to the player's inventory. The item ID f is the base-game gold form ID.",
    requirements:
      "PC version. Save before using item commands so you can undo an accidental amount.",
    effects: [
      "Adds the requested amount of gold",
      "Uses the same additem syntax as other items",
      "Changing f to another item ID adds a different item",
      "Does not complete quests or change merchant prices",
    ],
    achievementWarning: false,
    saveWarning: false,
    verification: {
      status: "documented",
      note: "UESP documents player.additem F as the console command for adding gold in Oblivion.",
      sources: OBLIVION_SOURCES,
    },
    tags: ["gold", "money", "items", "console command", "pc"],
  },
  {
    slug: "oblivion-all-map-markers",
    title: "Reveal all map markers",
    gameSlug: "the-elder-scrolls-iv-oblivion",
    type: "Console Command",
    platform: "PC",
    instructions:
      "Open the console with the tilde key, type tmm 1, and press Enter. Use tmm 0 to hide all markers again.",
    code: "tmm 1",
    whatItDoes:
      "Shows all map markers on the world map, including locations the player has not discovered. tmm 0 hides every marker again.",
    requirements:
      "PC version. This permanently changes the current save unless you reload an earlier one.",
    effects: [
      "Reveals all map markers",
      "Can skip intended exploration and discovery",
      "tmm 0 hides all markers, including city markers",
      "Changes persist in the current save",
    ],
    achievementWarning: false,
    saveWarning: true,
    verification: {
      status: "documented",
      note: "UESP documents tmm 1 as the command to show all map markers and warns that tmm 0 hides every marker.",
      sources: OBLIVION_SOURCES,
    },
    tags: ["map", "markers", "tmm", "console command", "pc"],
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
  {
    gameSlug: "starfield",
    note: "Starfield's PC version includes a developer console, but it is not a curated cheat system. This hub does not list commands because they can affect achievements and saves. Use difficulty settings and ship upgrades instead.",
  },
  {
    gameSlug: "hogwarts-legacy",
    note: "No official cheat codes or built-in console. Difficulty settings and accessibility options are the supported ways to adjust the experience; unofficial mods are outside this hub's scope.",
  },
  {
    gameSlug: "god-of-war",
    note: "No official cheat codes. Difficulty settings, accessibility options, and New Game+ are the supported ways to adjust the experience.",
  },
  {
    gameSlug: "sekiro-shadows-die-twice",
    note: "No official cheat codes or difficulty menu. Prosthetics, stealth, and practice are the intended ways to approach hard fights; external trainers and save editors are outside this hub's scope.",
  },
  {
    gameSlug: "the-elder-scrolls-v-skyrim",
    note: "Skyrim's PC console is built in and widely documented, but it is not an official cheat menu. This hub does not list commands because they can break quests and saves; use mods or difficulty settings deliberately.",
  },
  {
    gameSlug: "stardew-valley",
    note: "No official cheat codes. The game includes options and mods can change it, but this hub only lists in-game guidance and does not cover external tools.",
  },
  {
    gameSlug: "hades",
    note: "No cheat codes. God Mode is a supported accessibility option in the settings: it starts with a 20% damage reduction and increases after each failed run. It does not disable story progress.",
  },
  {
    gameSlug: "hollow-knight",
    note: "No built-in cheat menu or official console. Debug tools and mods require unofficial setup, can break saves, and are outside this hub's scope.",
  },
  {
    gameSlug: "disco-elysium",
    note: "No official cheat console in the retail game. Save before risky red checks if you care about the outcome, but remember that failure is part of the story. External save editors and mods are not covered here.",
  },
  {
    gameSlug: "fallout-new-vegas",
    note: "The PC version has a developer console, but it is not a curated cheat menu. Commands can alter quest states, factions, and saves, and may affect achievements. This hub does not list commands; keep a separate save and use in-game systems instead.",
  },
  {
    gameSlug: "nier-automata",
    note: "No official cheat console. Difficulty settings and auto chips are the supported ways to adjust combat. A late optional choice can delete save data, so back up your save before making it.",
  },
  {
    gameSlug: "resident-evil-4",
    note: "No official cheat codes. Assisted difficulty, aim assist, and accessibility options are supported. Paid weapon upgrade tickets are optional shortcuts sold as DLC, not cheat codes.",
  },
  {
    gameSlug: "la-noire",
    note: "No official cheat codes. Intuition points, evidence, and interrogation choices are the supported systems. External save editors and trainers are outside this hub's scope.",
  },
  {
    gameSlug: "yakuza-0",
    note: "No official cheat codes. Money, equipment, and combat upgrades are earned through the game's economy and side content. Trainers and save editors are not covered here.",
  },
  {
    gameSlug: "bioshock-remastered",
    note: "No official cheat menu. The PC version has console commands, but they are developer tools rather than a curated cheat system and can affect achievements or save behavior. This hub does not list them.",
  },
  {
    gameSlug: "portal-2",
    note: "No official cheat menu. The PC developer console is intended for testing and is not part of the normal puzzle experience. This hub does not list commands; use the in-game commentary and challenge modes instead.",
  },
  {
    gameSlug: "dark-souls-iii",
    note: "No official cheat codes. The intended ways to adjust difficulty are levels, weapon upgrades, Estus upgrades, and summoning. Third-party trainers and save editors can break saves or affect online play, so this hub does not cover them.",
  },
  {
    gameSlug: "mass-effect-legendary-edition",
    note: "No official cheat codes. Difficulty settings, New Game+, and imported saves are the supported ways to replay the trilogy. PC console tools require unofficial modifications and are outside this hub's scope.",
  },
  {
    gameSlug: "persona-5-royal",
    note: "No official cheat codes. Safety difficulty, New Game+, and the game's own fusion and equipment systems are the supported ways to adjust the experience. Trainers and save editors are not covered here.",
  },
  {
    gameSlug: "monster-hunter-world",
    note: "No official cheat menu. Equipment, decorations, and practice are the intended progression systems. Mods and trainers can affect saves or multiplayer sessions, so this hub does not cover them.",
  },
];
