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
];
