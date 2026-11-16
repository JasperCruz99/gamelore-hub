import type { Game } from "@/types";

export const games: Game[] = [
  {
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    tagline: "Neon ambition, corporate power, and one very loud city.",
    genres: ["Open-world RPG", "Action RPG", "First-person"],
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "2020-12-10",
    releaseYear: 2020,
    platforms: ["PC", "PS5", "Xbox Series X|S", "PS4", "Xbox One"],
    modes: ["Single-player"],
    coverImage: "/images/games/cyberpunk-2077/cover.jpg",
    coverAlt: "Official cover art for Cyberpunk 2077",
    heroImage: "/images/games/cyberpunk-2077/hero.jpg",
    heroAlt:
      "Johnny Silverhand stands in front of Night City traffic and neon signs",
    screenshots: [
      {
        src: "/images/games/cyberpunk-2077/screenshot-01.jpg",
        alt: "Two characters sit in a car in Night City at night in Cyberpunk 2077",
      },
      {
        src: "/images/games/cyberpunk-2077/screenshot-02.jpg",
        alt: "V fires a pistol during a close-range firefight in a neon-lit corridor in Cyberpunk 2077",
      },
      {
        src: "/images/games/cyberpunk-2077/screenshot-03.jpg",
        alt: "A neon statue in Night City in Cyberpunk 2077",
      },
      {
        src: "/images/games/cyberpunk-2077/screenshot-04.jpg",
        alt: "A custom sports car parked in a Night City garage in Cyberpunk 2077",
      },
      {
        src: "/images/games/cyberpunk-2077/screenshot-05.jpg",
        alt: "Johnny Silverhand aims a pistol in Night City in Cyberpunk 2077",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © CD Projekt Red. Used for identification and commentary.",
    imageSourceUrl: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    accent: "#38D9F5",
    description:
      "A first-person open-world RPG set in Night City, where builds, dialogue choices, and district-level stories shape the kind of mercenary you become.",
    overview: [
      "Cyberpunk 2077 drops players into Night City as V, a mercenary trying to build a reputation in a city run by corporations, gangs, and fixers. The game mixes first-person combat, stealth, hacking, dialogue choices, and a dense open world packed with side jobs.",
      "Its 2.0-era updates reworked major systems such as perks, cyberware, and police response, so older guides can be misleading. This hub focuses on durable principles: how to plan a build, how to approach encounters, and how to explore without wasting time.",
    ],
    funFact:
      "Night City's districts have distinct identities, from the neon commercial core of City Center to the industrial edges of Santo Domingo. Walking instead of driving is one of the fastest ways to notice how the city changes block by block.",
    tags: [
      "night city",
      "neon",
      "corpo",
      "open world",
      "first person",
      "choice driven",
      "cyberware",
    ],
    featured: true,
    popularity: 96,
    relatedGames: ["the-witcher-3", "nier-automata", "starfield"],
  },
  {
    slug: "elden-ring",
    title: "Elden Ring",
    tagline: "A vast, ruined world that rewards curiosity and patience.",
    genres: ["Action RPG", "Dark fantasy", "Open world"],
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    releaseDate: "2022-02-25",
    releaseYear: 2022,
    platforms: ["PC", "PS5", "Xbox Series X|S", "PS4", "Xbox One"],
    modes: ["Single-player", "Online co-op and PvP"],
    coverImage: "/images/games/elden-ring/cover.jpg",
    coverAlt: "Official cover art for Elden Ring",
    heroImage: "/images/games/elden-ring/hero.jpg",
    heroAlt:
      "The Erdtree shines above the ruins of the Lands Between in Elden Ring",
    screenshots: [
      {
        src: "/images/games/elden-ring/screenshot-01.jpg",
        alt: "The Tree Sentinel rides across the golden fields of Limgrave in Elden Ring",
      },
      {
        src: "/images/games/elden-ring/screenshot-02.jpg",
        alt: "A Tarnished rides Torrent through the Lands Between in Elden Ring",
      },
      {
        src: "/images/games/elden-ring/screenshot-03.jpg",
        alt: "A heavily armored boss swings a massive weapon during an Elden Ring fight",
      },
      {
        src: "/images/games/elden-ring/screenshot-04.jpg",
        alt: "Stormveil Castle rises through mist in Elden Ring",
      },
      {
        src: "/images/games/elden-ring/screenshot-05.jpg",
        alt: "The Erdtree glows over the Lands Between in Elden Ring",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © FromSoftware / Bandai Namco Entertainment. Used for identification and commentary.",
    imageSourceUrl: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
    accent: "#F4B942",
    description:
      "FromSoftware's open-world action RPG combines deliberate combat, cryptic worldbuilding, and enormous freedom to explore the Lands Between in almost any direction.",
    overview: [
      "Elden Ring casts the player as a Tarnished, a wandering warrior drawn to the Lands Between in search of the Elden Ring. The game is built around challenging combat, build experimentation, and environmental storytelling rather than direct exposition.",
      "Its open field design means progress is rarely a straight line. If a boss feels impossible, the intended answer is often to explore elsewhere, find upgrades, and return with a better toolset. That flexibility is the heart of the game.",
    ],
    funFact:
      "FromSoftware worked with fantasy author George R. R. Martin on the game's mythos and world background. Much of that history is delivered indirectly through item descriptions, architecture, and ruins rather than a traditional narrative.",
    tags: [
      "soulslike",
      "dark fantasy",
      "open world",
      "bosses",
      "fromsoftware",
      "exploration",
      "builds",
    ],
    featured: true,
    popularity: 99,
    relatedGames: [
      "dark-souls-iii",
      "sekiro-shadows-die-twice",
      "hollow-knight",
    ],
  },
  {
    slug: "the-witcher-3",
    title: "The Witcher 3: Wild Hunt",
    tagline: "Monster hunting, difficult choices, and a world worth wandering.",
    genres: ["Open-world RPG", "Fantasy", "Action RPG"],
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "2015-05-19",
    releaseYear: 2015,
    platforms: [
      "PC",
      "PS5",
      "Xbox Series X|S",
      "PS4",
      "Xbox One",
      "Nintendo Switch",
    ],
    modes: ["Single-player"],
    coverImage: "/images/games/the-witcher-3/cover.jpg",
    coverAlt: "Official cover art for The Witcher 3: Wild Hunt",
    heroImage: "/images/games/the-witcher-3/hero.jpg",
    heroAlt:
      "Geralt looks out over a snowy valley with a griffin in flight in The Witcher 3",
    screenshots: [
      {
        src: "/images/games/the-witcher-3/screenshot-01.jpg",
        alt: "Geralt walks through a crowded city street in The Witcher 3",
      },
      {
        src: "/images/games/the-witcher-3/screenshot-02.jpg",
        alt: "Geralt of Rivia in his witcher armor in The Witcher 3",
      },
      {
        src: "/images/games/the-witcher-3/screenshot-03.jpg",
        alt: "Geralt fights a monster wreathed in red energy in The Witcher 3",
      },
      {
        src: "/images/games/the-witcher-3/screenshot-04.jpg",
        alt: "Ciri uses her Elder Blood powers in The Witcher 3",
      },
      {
        src: "/images/games/the-witcher-3/screenshot-05.jpg",
        alt: "Geralt sails a small boat toward a distant tower in The Witcher 3",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © CD Projekt Red. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
    accent: "#43D17D",
    description:
      "A story-rich fantasy RPG following Geralt of Rivia across war-torn kingdoms, monster-infested wilds, and morally complicated questlines.",
    overview: [
      "The Witcher 3: Wild Hunt follows Geralt of Rivia as he searches for Ciri, a young woman with extraordinary power and a connection to the titular Wild Hunt. The main story spans several regions, each with its own politics, folklore, and local problems.",
      "What keeps players returning is the side content: contracts that play like short detective stories, characters with histories that predate the player's arrival, and choices that rarely offer a clean moral victory. The two major expansions add substantial new regions and questlines.",
    ],
    funFact:
      "The Blood and Wine expansion takes Geralt to Toussaint, a region intentionally designed with warmer color palettes and a more fairy-tale atmosphere than the war-torn mainland of Velen.",
    tags: [
      "fantasy",
      "open world",
      "story rich",
      "monster hunting",
      "geralt",
      "cd projekt red",
      "choices",
    ],
    featured: true,
    popularity: 97,
    relatedGames: ["monster-hunter-world", "elden-ring", "cyberpunk-2077"],
  },
  {
    slug: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    tagline: "A party-based RPG where every argument has consequences.",
    genres: ["RPG", "Turn-based", "Party-based"],
    developer: "Larian Studios",
    publisher: "Larian Studios",
    releaseDate: "2023-08-03",
    releaseYear: 2023,
    platforms: ["PC", "macOS", "PS5", "Xbox Series X|S"],
    modes: ["Single-player", "Online co-op"],
    coverImage: "/images/games/baldurs-gate-3/cover.jpg",
    coverAlt: "Official cover art for Baldur's Gate 3",
    heroImage: "/images/games/baldurs-gate-3/hero.jpg",
    heroAlt:
      "The party looks out over a mountain valley in Baldur's Gate 3",
    screenshots: [
      {
        src: "/images/games/baldurs-gate-3/screenshot-01.jpg",
        alt: "The party enters the Lower City in Baldur's Gate 3",
      },
      {
        src: "/images/games/baldurs-gate-3/screenshot-02.jpg",
        alt: "The party fights a minotaur in the Underdark in Baldur's Gate 3",
      },
      {
        src: "/images/games/baldurs-gate-3/screenshot-03.jpg",
        alt: "A domed temple rises above the city in Baldur's Gate 3",
      },
      {
        src: "/images/games/baldurs-gate-3/screenshot-04.jpg",
        alt: "A wizard casts a spell in a dark chamber in Baldur's Gate 3",
      },
      {
        src: "/images/games/baldurs-gate-3/screenshot-05.jpg",
        alt: "Shadowheart holds a glowing artifact in Baldur's Gate 3",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © Larian Studios. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
    accent: "#9B7BFF",
    description:
      "A turn-based Dungeons & Dragons-inspired RPG with deep companion relationships, tactical combat, and unusual freedom in how quests can be solved.",
    overview: [
      "Baldur's Gate 3 is a party-based RPG built around a modified version of the Dungeons & Dragons 5th Edition ruleset. Players create a character, gather a group of companions, and navigate a conflict that can be approached through conversation, stealth, environment manipulation, or direct combat.",
      "The game's reputation comes from its density of choice: classes and subclasses, race and background interactions, and quest solutions that account for spells, items, and prior dialogue. It is also playable in online co-op, which changes how dialogue and exploration work.",
    ],
    funFact:
      "Larian built many quests with multiple failure states that still move the story forward. A failed persuasion check is often a new branch rather than a dead end, which is why saving and reloading every conversation can make the game feel smaller.",
    tags: [
      "dnd",
      "turn based",
      "party",
      "crpg",
      "choices",
      "companions",
      "larian",
    ],
    featured: true,
    popularity: 98,
    relatedGames: ["the-witcher-3", "disco-elysium", "the-elder-scrolls-v-skyrim"],
  },
  {
    slug: "minecraft",
    title: "Minecraft",
    tagline: "A sandbox made of blocks, systems, and endless first nights.",
    genres: ["Sandbox", "Survival", "Crafting"],
    developer: "Mojang Studios",
    publisher: "Xbox Game Studios",
    releaseDate: "2011-11-18",
    releaseYear: 2011,
    platforms: [
      "PC (Java & Bedrock)",
      "Xbox",
      "PlayStation",
      "Nintendo Switch",
      "Mobile",
    ],
    modes: ["Single-player", "Multiplayer"],
    coverImage: "/images/games/minecraft/cover.jpg",
    coverAlt:
      "Official Minecraft key art with Steve, Alex, and other characters",
    heroImage: "/images/games/minecraft/hero.jpg",
    heroAlt: "Players cross a lake in boats in Minecraft",
    screenshots: [
      {
        src: "/images/games/minecraft/screenshot-01.jpg",
        alt: "Players cross a lake in boats in Minecraft",
      },
      {
        src: "/images/games/minecraft/screenshot-02.jpg",
        alt: "A tuff and copper build in Minecraft",
      },
      {
        src: "/images/games/minecraft/screenshot-03.jpg",
        alt: "A player faces a bogged in a mangrove swamp in Minecraft",
      },
      {
        src: "/images/games/minecraft/screenshot-04.jpg",
        alt: "A crafter and copper blocks in a Minecraft trial chamber",
      },
      {
        src: "/images/games/minecraft/screenshot-05.jpg",
        alt: "A player uses a mace in a Minecraft trial chamber",
      },
    ],
    imageCredit:
      "Official Minecraft key art and screenshots © Mojang Studios / Microsoft. Used for identification and commentary.",
    imageSourceUrl: "https://www.minecraft.net/en-us/article/key-art-update",
    accent: "#6FD08C",
    description:
      "A block-building survival sandbox where the same world can be a quiet creative canvas, a hard survival run, or a shared server project.",
    overview: [
      "Minecraft is a sandbox game built around placing and breaking blocks in procedurally generated worlds. Survival mode adds hunger, hostile mobs, crafting, mining, and progression toward dimensions like the Nether and the End; Creative mode removes those pressures and turns the game into a building tool.",
      "The PC release exists in two main editions: Java Edition, known for mods and technical redstone, and Bedrock Edition, known for cross-platform play. Commands, world settings, and some mechanics differ between them, so platform-specific instructions matter.",
    ],
    funFact:
      "Minecraft's world generation is driven by seeds, so a single string can reproduce the same terrain features in a new world. Two worlds with the same seed can still look different depending on the edition and version.",
    tags: [
      "sandbox",
      "survival",
      "crafting",
      "blocks",
      "multiplayer",
      "redstone",
      "java",
      "bedrock",
    ],
    featured: false,
    popularity: 100,
    relatedGames: [
      "subnautica",
      "hollow-knight",
      "stardew-valley",
    ],
  },
  {
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    tagline: "A slow-burn western about loyalty, violence, and the end of an era.",
    genres: ["Action-adventure", "Open world", "Western"],
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    releaseDate: "2018-10-26",
    releaseYear: 2018,
    platforms: ["PC", "PS4", "Xbox One"],
    modes: ["Single-player", "Red Dead Online"],
    coverImage: "/images/games/red-dead-redemption-2/cover.jpg",
    coverAlt: "Official cover art for Red Dead Redemption 2",
    heroImage: "/images/games/red-dead-redemption-2/hero.jpg",
    heroAlt:
      "Arthur Morgan rides with the gang across a sunlit field in Red Dead Redemption 2",
    screenshots: [
      {
        src: "/images/games/red-dead-redemption-2/screenshot-01.jpg",
        alt: "Arthur Morgan rides with the gang at sunset in Red Dead Redemption 2",
      },
      {
        src: "/images/games/red-dead-redemption-2/screenshot-02.jpg",
        alt: "Arthur and another rider approach a snowy camp in Red Dead Redemption 2",
      },
      {
        src: "/images/games/red-dead-redemption-2/screenshot-03.jpg",
        alt: "The gang rows a boat through a misty swamp at night in Red Dead Redemption 2",
      },
      {
        src: "/images/games/red-dead-redemption-2/screenshot-04.jpg",
        alt: "Arthur Morgan draws a revolver during a close-range gunfight in Red Dead Redemption 2",
      },
      {
        src: "/images/games/red-dead-redemption-2/screenshot-05.jpg",
        alt: "A portrait of Arthur Morgan in Red Dead Redemption 2",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © Rockstar Games. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
    accent: "#E06C4F",
    description:
      "Rockstar's detailed open-world western follows Arthur Morgan and the Van der Linde gang as their outlaw life becomes impossible to sustain.",
    overview: [
      "Red Dead Redemption 2 is a third-person open-world western set in 1899. Players control Arthur Morgan, a senior member of the Van der Linde gang, as the group flees law enforcement and tries to hold onto a way of life that is disappearing.",
      "Its design is intentionally deliberate: animations have weight, travel takes time, and the camp is a social space as much as a mechanic. Hunting, horse care, honor, and small interactions with strangers all feed into the tone of the story.",
    ],
    funFact:
      "The game's honor system changes dialogue, prices, and some cutscenes, but it is not a simple good-versus-evil meter. Actions are judged in context, and the story keeps asking whether redemption is something a person can earn.",
    tags: [
      "western",
      "open world",
      "story rich",
      "rockstar",
      "hunting",
      "honor",
      "arthur morgan",
    ],
    featured: false,
    popularity: 94,
    relatedGames: ["grand-theft-auto-v", "resident-evil-4", "god-of-war"],
  },
  {
    slug: "starfield",
    title: "Starfield",
    tagline: "A galaxy of factions, frontiers, and very human problems.",
    genres: ["Open-world RPG", "Sci-fi", "Space"],
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    releaseDate: "2023-09-06",
    releaseYear: 2023,
    platforms: ["PC", "Xbox Series X|S"],
    modes: ["Single-player"],
    coverImage: "/images/games/starfield/cover.jpg",
    coverAlt: "Official cover art for Starfield",
    heroImage: "/images/games/starfield/hero.jpg",
    heroAlt:
      "A starship rests on a rocky world beneath a ringed planet in Starfield",
    screenshots: [
      {
        src: "/images/games/starfield/screenshot-01.jpg",
        alt: "A pilot sits inside a spacecraft cockpit above a planet in Starfield",
      },
      {
        src: "/images/games/starfield/screenshot-02.jpg",
        alt: "A starship accelerates into a bright gravity jump in Starfield",
      },
      {
        src: "/images/games/starfield/screenshot-03.jpg",
        alt: "An astronaut stands on a rocky moon beneath a ringed planet in Starfield",
      },
      {
        src: "/images/games/starfield/screenshot-04.jpg",
        alt: "A futuristic city skyline rises beyond a landscaped park in Starfield",
      },
      {
        src: "/images/games/starfield/screenshot-05.jpg",
        alt: "A starship exchanges fire near a planet in Starfield",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © Bethesda Game Studios / Bethesda Softworks. Used for identification and commentary.",
    imageSourceUrl: "https://store.steampowered.com/app/1716740/Starfield/",
    accent: "#5B9BD5",
    description:
      "Bethesda's space RPG follows Constellation across the Settled Systems, mixing faction politics, ship building, surveying, and planetary exploration.",
    overview: [
      "Starfield is set in the Settled Systems, a cluster of colonized star systems where old political tensions, corporate interests, and independent settlers all compete for a future. Players create a character, join Constellation, and travel between handcrafted cities and procedurally generated worlds.",
      "Compared with Bethesda's fantasy games, Starfield leans harder into systems: ships, cargo, surveying, outposts, and crew. The opening hours are easiest if you follow the main thread long enough to unlock those tools, then decide which parts of the sandbox you actually want to live in.",
    ],
    funFact:
      "Starfield's ship builder treats a ship as a set of functional modules rather than a single vehicle. Reactors, grav drives, fuel tanks, cargo holds, and weapons all affect what the ship can do, so two ships of the same shape can behave very differently.",
    tags: [
      "space",
      "sci-fi",
      "bethesda",
      "exploration",
      "factions",
      "ships",
      "outposts",
    ],
    featured: true,
    popularity: 87,
    relatedGames: [
      "mass-effect-legendary-edition",
      "the-elder-scrolls-v-skyrim",
      "fallout-new-vegas",
    ],
  },
  {
    slug: "hogwarts-legacy",
    title: "Hogwarts Legacy",
    tagline:
      "A wizarding open world built around curiosity, classrooms, and forbidden corridors.",
    genres: ["Open-world RPG", "Fantasy", "Action-adventure"],
    developer: "Avalanche Software",
    publisher: "Warner Bros. Games",
    releaseDate: "2023-02-10",
    releaseYear: 2023,
    platforms: [
      "PC",
      "PS5",
      "Xbox Series X|S",
      "PS4",
      "Xbox One",
      "Nintendo Switch",
    ],
    modes: ["Single-player"],
    coverImage: "/images/games/hogwarts-legacy/cover.jpg",
    coverAlt: "Official cover art for Hogwarts Legacy",
    heroImage: "/images/games/hogwarts-legacy/hero.jpg",
    heroAlt:
      "A student and a hippogriff look toward Hogwarts castle across the lake in Hogwarts Legacy",
    screenshots: [
      {
        src: "/images/games/hogwarts-legacy/screenshot-01.jpg",
        alt: "Students gather on the Grand Staircase inside Hogwarts in Hogwarts Legacy",
      },
      {
        src: "/images/games/hogwarts-legacy/screenshot-02.jpg",
        alt: "The player rides a hippogriff above the lake near Hogwarts in Hogwarts Legacy",
      },
      {
        src: "/images/games/hogwarts-legacy/screenshot-03.jpg",
        alt: "A professor and student practice magic in the Hogwarts library in Hogwarts Legacy",
      },
      {
        src: "/images/games/hogwarts-legacy/screenshot-04.jpg",
        alt: "A wizard faces a giant spider in the Forbidden Forest in Hogwarts Legacy",
      },
      {
        src: "/images/games/hogwarts-legacy/screenshot-05.jpg",
        alt: "A wizard casts a spell at a troll in ancient ruins in Hogwarts Legacy",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © Avalanche Software / Warner Bros. Games. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/990080/Hogwarts_Legacy/",
    accent: "#C9A24B",
    description:
      "An open-world action RPG set in the wizarding world of the late 1800s, with spell combat, school life, and a mystery beneath the Scottish Highlands.",
    overview: [
      "Hogwarts Legacy is an open-world action RPG set in the wizarding world of the late 1800s. Players begin as a new fifth-year student at Hogwarts, learn spells in classes, and gradually uncover a mystery that reaches beyond the castle grounds.",
      "Combat is built around combining spells rather than relying on a single favorite. Exploration rewards attention: optional classrooms, caves, and hamlets hide gear, puzzles, and small stories. The game's tone is generally lighter than the source films, but its world is designed for players who want to live inside the school as much as fight outside it.",
    ],
    funFact:
      "Hogwarts Legacy is set roughly a century before the Harry Potter books, which lets the game use familiar locations and families without putting the player in the middle of a story already told.",
    tags: [
      "hogwarts",
      "wizarding world",
      "magic",
      "open world",
      "spells",
      "school",
      "exploration",
    ],
    featured: true,
    popularity: 91,
    relatedGames: [
      "the-witcher-3",
      "baldurs-gate-3",
      "god-of-war",
    ],
  },
  {
    slug: "god-of-war",
    title: "God of War",
    tagline: "A father, a son, and a pantheon that will not let them pass.",
    genres: ["Action-adventure", "Hack and slash", "Mythology"],
    developer: "Santa Monica Studio",
    publisher: "PlayStation Publishing LLC",
    releaseDate: "2018-04-20",
    releaseYear: 2018,
    platforms: ["PC", "PS5", "PS4"],
    modes: ["Single-player"],
    coverImage: "/images/games/god-of-war/cover.jpg",
    coverAlt: "Official cover art for God of War",
    heroImage: "/images/games/god-of-war/hero.jpg",
    heroAlt:
      "Kratos and Atreus stand with the Leviathan Axe in a misty Norse landscape in God of War",
    screenshots: [
      {
        src: "/images/games/god-of-war/screenshot-01.jpg",
        alt: "Kratos stands in a misty forest with the Leviathan Axe in God of War",
      },
      {
        src: "/images/games/god-of-war/screenshot-02.jpg",
        alt: "Kratos faces the giant World Serpent in God of War",
      },
      {
        src: "/images/games/god-of-war/screenshot-03.jpg",
        alt: "Kratos battles a massive enemy in a ruined temple in God of War",
      },
      {
        src: "/images/games/god-of-war/screenshot-04.jpg",
        alt: "Kratos and Atreus track a deer through a forest in God of War",
      },
      {
        src: "/images/games/god-of-war/screenshot-05.jpg",
        alt: "Kratos and Atreus approach an ancient stone gate in God of War",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © Santa Monica Studio / PlayStation Publishing LLC. Used for identification and commentary.",
    imageSourceUrl: "https://store.steampowered.com/app/1593500/God_of_War/",
    accent: "#C95748",
    description:
      "A cinematic action-adventure that follows Kratos and Atreus through the Norse realms, mixing weighty combat, exploration, and a deeply personal story.",
    overview: [
      "God of War follows Kratos and his son Atreus through the Norse realms. The game pairs close, weighty combat with a quieter story about inheritance, grief, and the difficulty of being a parent.",
      "Exploration is structured around a central lake that opens into optional islands, realms, and combat challenges. The camera rarely cuts away, which keeps conversations and fights in the same continuous space. Upgrades are split between Kratos's weapons and armor and Atreus's abilities, so both characters remain part of the build.",
    ],
    funFact:
      "The game is famous for presenting most of its journey as one continuous camera shot. The effect is especially noticeable in transitions between exploration, conversation, and combat.",
    tags: [
      "norse",
      "kratos",
      "atreus",
      "action",
      "mythology",
      "father son",
      "playstation",
    ],
    featured: true,
    popularity: 93,
    relatedGames: [
      "elden-ring",
      "sekiro-shadows-die-twice",
      "nier-automata",
    ],
  },
  {
    slug: "sekiro-shadows-die-twice",
    title: "Sekiro: Shadows Die Twice",
    tagline:
      "Steel, posture, and a war-torn Japan that punishes hesitation.",
    genres: ["Action-adventure", "Soulslike", "Stealth"],
    developer: "FromSoftware",
    publisher: "Activision",
    releaseDate: "2019-03-22",
    releaseYear: 2019,
    platforms: ["PC", "PS4", "Xbox One"],
    modes: ["Single-player"],
    coverImage: "/images/games/sekiro-shadows-die-twice/cover.jpg",
    coverAlt: "Official cover art for Sekiro: Shadows Die Twice",
    heroImage: "/images/games/sekiro-shadows-die-twice/hero.jpg",
    heroAlt:
      "Sekiro stands with his sword before a burning temple in Sekiro: Shadows Die Twice",
    screenshots: [
      {
        src: "/images/games/sekiro-shadows-die-twice/screenshot-01.jpg",
        alt: "Sekiro grapples through the air above a burning temple in Sekiro: Shadows Die Twice",
      },
      {
        src: "/images/games/sekiro-shadows-die-twice/screenshot-02.jpg",
        alt: "Sekiro faces a spear-wielding samurai in the snow in Sekiro: Shadows Die Twice",
      },
      {
        src: "/images/games/sekiro-shadows-die-twice/screenshot-03.jpg",
        alt: "Sekiro clashes blades with an enemy in a storm of red leaves in Sekiro: Shadows Die Twice",
      },
      {
        src: "/images/games/sekiro-shadows-die-twice/screenshot-04.jpg",
        alt: "Sekiro stands on a temple rooftop above autumn trees in Sekiro: Shadows Die Twice",
      },
      {
        src: "/images/games/sekiro-shadows-die-twice/screenshot-05.jpg",
        alt: "Sekiro holds a glowing red item in a dark room in Sekiro: Shadows Die Twice",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © FromSoftware / Activision. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/",
    accent: "#A94436",
    description:
      "FromSoftware's focused action game about posture, deflection, and a shinobi caught between loyalty and revenge in Sengoku-era Japan.",
    overview: [
      "Sekiro: Shadows Die Twice is a focused action game set in a fictionalized Sengoku-era Japan. Players control a shinobi known as Wolf, fighting through fortified castles, mountain temples, and sunken valleys while protecting a young lord.",
      "Combat is built around posture and deflection rather than stamina bars and dodge rolls. Enemies recover posture when they are healthy, so the most reliable path is often to attack, deflect the response, and keep the pressure on. Stealth, prosthetics, and shinobi tools provide alternatives, but the sword remains the core of every encounter.",
    ],
    funFact:
      "Sekiro's posture system means a fight can end without draining the last sliver of health. A well-timed deflection can break an enemy's guard and open the way to a deathblow.",
    tags: [
      "fromsoftware",
      "shinobi",
      "sengoku",
      "posture",
      "deflection",
      "boss fights",
      "stealth",
    ],
    featured: false,
    popularity: 90,
    relatedGames: [
      "dark-souls-iii",
      "elden-ring",
      "god-of-war",
    ],
  },
  {
    slug: "the-elder-scrolls-v-skyrim",
    title: "The Elder Scrolls V: Skyrim",
    tagline: "A province of dragons, factions, and a thousand unfinished quests.",
    genres: ["Open-world RPG", "Fantasy", "First-person"],
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    releaseDate: "2011-11-11",
    releaseYear: 2011,
    platforms: [
      "PC",
      "PS5",
      "Xbox Series X|S",
      "PS4",
      "Xbox One",
      "Nintendo Switch",
    ],
    modes: ["Single-player"],
    coverImage: "/images/games/the-elder-scrolls-v-skyrim/cover.jpg",
    coverAlt: "Official cover art for The Elder Scrolls V: Skyrim",
    heroImage: "/images/games/the-elder-scrolls-v-skyrim/hero.jpg",
    heroAlt:
      "An armored warrior stands beside a dragon priest mask in The Elder Scrolls V: Skyrim",
    screenshots: [
      {
        src: "/images/games/the-elder-scrolls-v-skyrim/screenshot-01.jpg",
        alt: "Snow-covered ruins rise in the Skyrim wilderness",
      },
      {
        src: "/images/games/the-elder-scrolls-v-skyrim/screenshot-02.jpg",
        alt: "The tundra stretches toward distant ruins at sunset in Skyrim",
      },
      {
        src: "/images/games/the-elder-scrolls-v-skyrim/screenshot-03.jpg",
        alt: "A birch forest turns gold in The Elder Scrolls V: Skyrim",
      },
      {
        src: "/images/games/the-elder-scrolls-v-skyrim/screenshot-04.jpg",
        alt: "A warrior channels green magic during a dragon fight in Skyrim",
      },
      {
        src: "/images/games/the-elder-scrolls-v-skyrim/screenshot-05.jpg",
        alt: "A walled city rises above the tundra in Skyrim",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots for The Elder Scrolls V: Skyrim Special Edition © Bethesda Game Studios / Bethesda Softworks. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/",
    accent: "#6F8F83",
    description:
      "Bethesda's enduring fantasy RPG about dragons, civil war, and the freedom to ignore the main quest for a hundred hours.",
    overview: [
      "Skyrim is an open-world fantasy RPG set in a cold northern province on the brink of civil war. Players create a character, escape a dragon attack, and become the Dragonborn, a figure with the power to absorb dragon souls and learn shouts.",
      "The main quest is only one thread. Guilds, daedric shrines, faction politics, and random caves all compete for attention. The game's lasting appeal comes from how many systems can be ignored or combined: smithing, enchanting, alchemy, stealth, magic, and the mod scene that grew around the PC release.",
    ],
    funFact:
      "Skyrim's Radiant quest system can generate repeatable tasks from templates, which is why some side quests feel endlessly available and slightly different from one character to the next.",
    tags: [
      "skyrim",
      "elder scrolls",
      "dragonborn",
      "mods",
      "open world",
      "bethesda",
      "fantasy",
    ],
    featured: true,
    popularity: 95,
    relatedGames: [
      "fallout-new-vegas",
      "baldurs-gate-3",
      "starfield",
    ],
  },
  {
    slug: "stardew-valley",
    title: "Stardew Valley",
    tagline: "A farm, a town, and the quiet discipline of a better season.",
    genres: ["Farming sim", "Life sim", "RPG"],
    developer: "ConcernedApe",
    publisher: "ConcernedApe",
    releaseDate: "2016-02-26",
    releaseYear: 2016,
    platforms: [
      "PC",
      "macOS",
      "Linux",
      "PS4",
      "Xbox One",
      "Nintendo Switch",
      "Mobile",
    ],
    modes: ["Single-player", "Online co-op"],
    coverImage: "/images/games/stardew-valley/cover.jpg",
    coverAlt: "Official cover art for Stardew Valley",
    heroImage: "/images/games/stardew-valley/hero.jpg",
    heroAlt: "Pixel-art farm, forest, and beach scenes from Stardew Valley",
    screenshots: [
      {
        src: "/images/games/stardew-valley/screenshot-01.jpg",
        alt: "A farm with crops, animals, and a farmhouse in Stardew Valley",
      },
      {
        src: "/images/games/stardew-valley/screenshot-02.jpg",
        alt: "The player explores a dark mine with ladders in Stardew Valley",
      },
      {
        src: "/images/games/stardew-valley/screenshot-03.jpg",
        alt: "Villagers gather in the Calico Desert in Stardew Valley",
      },
      {
        src: "/images/games/stardew-valley/screenshot-04.jpg",
        alt: "A storm lights up a forest farm at night in Stardew Valley",
      },
      {
        src: "/images/games/stardew-valley/screenshot-05.jpg",
        alt: "The Governor speaks at a beachside gathering in Stardew Valley",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © ConcernedApe. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/413150/Stardew_Valley/",
    accent: "#D9A441",
    description:
      "A farming and life sim about rebuilding an inherited farm, befriending a town, and choosing how much of each day to give away.",
    overview: [
      "Stardew Valley is a farming and life sim about inheriting a neglected farm in a small town. Days are built around energy, weather, seasons, and the choice of what to do before the light runs out.",
      "The game is not just about crops. Fishing, mining, foraging, cooking, relationships, the Community Center, and optional combat all feed into a year that can be as relaxed or as optimized as the player wants. Multiplayer lets up to four players share a farm, though the pacing changes when several people divide the chores.",
    ],
    funFact:
      "ConcernedApe designed, programmed, wrote, and composed most of Stardew Valley himself before release. The game's single-creator history is part of why its small-town routines feel so consistent.",
    tags: [
      "farming",
      "cozy",
      "pixel art",
      "relationships",
      "fishing",
      "community center",
      "indie",
    ],
    featured: false,
    popularity: 92,
    relatedGames: ["hades", "minecraft", "hollow-knight"],
  },
  {
    slug: "hades",
    title: "Hades",
    tagline:
      "A family argument with swords, gods, and an extremely long staircase.",
    genres: ["Roguelike", "Action RPG", "Dungeon crawler"],
    developer: "Supergiant Games",
    publisher: "Supergiant Games",
    releaseDate: "2020-09-17",
    releaseYear: 2020,
    platforms: [
      "PC",
      "macOS",
      "Nintendo Switch",
      "PS5",
      "PS4",
      "Xbox Series X|S",
      "Xbox One",
    ],
    modes: ["Single-player"],
    coverImage: "/images/games/hades/cover.jpg",
    coverAlt: "Official cover art for Hades",
    heroImage: "/images/games/hades/hero.jpg",
    heroAlt:
      "Zagreus holds a glowing sword before the fiery landscape of the underworld in Hades",
    screenshots: [
      {
        src: "/images/games/hades/screenshot-01.jpg",
        alt: "Zagreus fights enemies in a green-lit chamber of the underworld in Hades",
      },
      {
        src: "/images/games/hades/screenshot-02.jpg",
        alt: "Zagreus speaks with Hades in the House of Hades in Hades",
      },
      {
        src: "/images/games/hades/screenshot-03.jpg",
        alt: "Zagreus battles through a fiery arena beneath a storm of embers in Hades",
      },
      {
        src: "/images/games/hades/screenshot-04.jpg",
        alt: "Zagreus crosses a green-lit chamber filled with glowing hazards in Hades",
      },
      {
        src: "/images/games/hades/screenshot-05.jpg",
        alt: "Zagreus approaches a red-lit doorway flanked by statues in Hades",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © Supergiant Games. Used for identification and commentary.",
    imageSourceUrl: "https://store.steampowered.com/app/1145360/Hades/",
    accent: "#E0623F",
    description:
      "A fast, narrative-driven roguelike about escaping the underworld, where every failed run makes Zagreus stronger and the House of Hades more complicated.",
    overview: [
      "Hades is a rogue-like dungeon crawler about Zagreus, the son of Hades, trying to fight his way out of the underworld. Each escape attempt is assembled from Olympian boons, a chosen weapon, and the upgrades Zagreus has earned across previous deaths.",
      "The story does not wait for a successful run. Characters in the House of Hades react to what happened, relationships develop between attempts, and new dialogue keeps the repeated structure from feeling static. The result is a game where failure is both a combat lesson and a narrative engine.",
    ],
    funFact:
      "Supergiant built the story around repetition: characters comment on how Zagreus died and what he accomplished, and the dialogue system is designed to stay coherent across dozens of runs.",
    tags: [
      "greek mythology",
      "roguelike",
      "zagreus",
      "supergiant games",
      "boons",
      "underworld",
      "replayable",
    ],
    featured: true,
    popularity: 93,
    relatedGames: ["hollow-knight", "elden-ring", "stardew-valley"],
  },
  {
    slug: "hollow-knight",
    title: "Hollow Knight",
    tagline:
      "A small knight, a fallen kingdom, and a map that keeps getting deeper.",
    genres: ["Metroidvania", "Action-adventure", "Indie"],
    developer: "Team Cherry",
    publisher: "Team Cherry",
    releaseDate: "2017-02-24",
    releaseYear: 2017,
    platforms: [
      "PC",
      "macOS",
      "Linux",
      "Nintendo Switch",
      "PS4",
      "Xbox One",
    ],
    modes: ["Single-player"],
    coverImage: "/images/games/hollow-knight/cover.jpg",
    coverAlt: "Official cover art for Hollow Knight",
    heroImage: "/images/games/hollow-knight/hero.jpg",
    heroAlt:
      "The Knight stands with a nail against a pale light in a dark cavern in Hollow Knight",
    screenshots: [
      {
        src: "/images/games/hollow-knight/screenshot-01.jpg",
        alt: "The Knight faces a large armored bug in a glowing cavern in Hollow Knight",
      },
      {
        src: "/images/games/hollow-knight/screenshot-02.jpg",
        alt: "The Knight stands on a stone bridge above a turquoise lake in Hollow Knight",
      },
      {
        src: "/images/games/hollow-knight/screenshot-03.jpg",
        alt: "The Knight approaches a tall red-lit shrine in a mist-filled cavern in Hollow Knight",
      },
      {
        src: "/images/games/hollow-knight/screenshot-04.jpg",
        alt: "The Knight stands before a brilliant crystal formation in Hollow Knight",
      },
      {
        src: "/images/games/hollow-knight/screenshot-05.jpg",
        alt: "The in-game map shows the Forgotten Crossroads and City of Tears in Hollow Knight",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © Team Cherry. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/367520/Hollow_Knight/",
    accent: "#8EC9D8",
    description:
      "A hand-drawn metroidvania about a small knight descending through the ruined kingdom of Hallownest, where exploration, precise combat, and silence do most of the storytelling.",
    overview: [
      "Hollow Knight casts the player as a silent knight entering Hallownest, a subterranean kingdom whose tunnels, cities, and shrines are now overrun by hostile creatures. Progress depends on learning the map, finding movement abilities, and deciding when a fight is worth the risk.",
      "Combat is deliberate and readable: a short-range nail, spells, and charms that change how the knight approaches encounters. The game rarely explains its history directly. Item descriptions, architecture, and the few characters who still speak are the main sources of lore.",
    ],
    funFact:
      "The Knight never speaks. Almost everything about Hallownest is communicated through environmental details, item descriptions, and NPC dialogue, which is why the game's story supports so many interpretations.",
    tags: [
      "metroidvania",
      "hallownest",
      "indie",
      "exploration",
      "charms",
      "team cherry",
      "hand drawn",
    ],
    featured: true,
    popularity: 95,
    relatedGames: ["portal-2", "hades", "stardew-valley"],
  },
  {
    slug: "disco-elysium",
    title: "Disco Elysium",
    tagline:
      "A murder investigation conducted by the worst possible person for the job.",
    genres: ["CRPG", "Detective", "Narrative"],
    developer: "ZA/UM",
    publisher: "ZA/UM",
    releaseDate: "2019-10-15",
    releaseYear: 2019,
    platforms: [
      "PC",
      "macOS",
      "PS5",
      "PS4",
      "Xbox Series X|S",
      "Xbox One",
      "Nintendo Switch",
    ],
    modes: ["Single-player"],
    coverImage: "/images/games/disco-elysium/cover.jpg",
    coverAlt: "Official cover art for Disco Elysium - The Final Cut",
    heroImage: "/images/games/disco-elysium/hero.jpg",
    heroAlt:
      "An expressionist painting of Revachol's harbor and distant skyline in Disco Elysium",
    screenshots: [
      {
        src: "/images/games/disco-elysium/screenshot-01.jpg",
        alt: "Harry and Kim investigate a snow-covered courtyard in Disco Elysium",
      },
      {
        src: "/images/games/disco-elysium/screenshot-02.jpg",
        alt: "The character sheet shows Intellect, Psyche, Physique, and Motorics skills in Disco Elysium",
      },
      {
        src: "/images/games/disco-elysium/screenshot-03.jpg",
        alt: "The inventory screen shows Harry's clothes and a Samaran conical hat in Disco Elysium",
      },
      {
        src: "/images/games/disco-elysium/screenshot-04.jpg",
        alt: "The Thought Cabinet screen shows the HoboCop thought in Disco Elysium",
      },
      {
        src: "/images/games/disco-elysium/screenshot-05.jpg",
        alt: "A skill check succeeds during a conversation in Disco Elysium",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © ZA/UM. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/632470/Disco_Elysium_The_Final_Cut/",
    accent: "#D98A5C",
    description:
      "A detective RPG with no combat and an argumentative narrator, where skills, politics, and failure shape an investigation in the ruined city of Revachol.",
    overview: [
      "Disco Elysium begins with a detective waking up with no memory of who he is or why he is in the district of Martinaise. The investigation is the spine of the game, but the real work is deciding what kind of person the detective is willing to become.",
      "Disco Elysium replaces a conventional combat system with skill checks, dialogue, and internal voices. Intellect, Psyche, Physique, and Motorics shape what the detective notices and how he responds. Failure is not a dead end; it often opens a stranger and more revealing path.",
    ],
    funFact:
      "Disco Elysium grew out of a tabletop campaign and a novel set in the same world. That history shows in the game's dense political vocabulary and its willingness to let conversations wander far from the case.",
    tags: [
      "revachol",
      "detective",
      "crpg",
      "skills",
      "politics",
      "za/um",
      "no combat",
    ],
    featured: true,
    popularity: 90,
    relatedGames: ["la-noire", "baldurs-gate-3", "fallout-new-vegas"],
  },
  {
    slug: "fallout-new-vegas",
    title: "Fallout: New Vegas",
    tagline:
      "A courier, a chip, and a desert full of people with plans for the future.",
    genres: ["Open-world RPG", "Post-apocalyptic", "First-person"],
    developer: "Obsidian Entertainment",
    publisher: "Bethesda Softworks",
    releaseDate: "2010-10-19",
    releaseYear: 2010,
    platforms: ["PC", "PS3", "Xbox 360"],
    modes: ["Single-player"],
    coverImage: "/images/games/fallout-new-vegas/cover.jpg",
    coverAlt: "Official cover art for Fallout: New Vegas",
    heroImage: "/images/games/fallout-new-vegas/hero.jpg",
    heroAlt:
      "A courier walks toward the lights of New Vegas across the Mojave Wasteland in Fallout: New Vegas",
    screenshots: [
      {
        src: "/images/games/fallout-new-vegas/screenshot-01.jpg",
        alt: "A heavily armored raider aims a weapon in the Mojave Wasteland in Fallout: New Vegas",
      },
      {
        src: "/images/games/fallout-new-vegas/screenshot-02.jpg",
        alt: "The player and a companion fight through a fiery ambush in Fallout: New Vegas",
      },
      {
        src: "/images/games/fallout-new-vegas/screenshot-03.jpg",
        alt: "A weathered desert town street stretches under a cloudy sky in Fallout: New Vegas",
      },
      {
        src: "/images/games/fallout-new-vegas/screenshot-04.jpg",
        alt: "An NCR trooper fires at floating robots in the Mojave Wasteland in Fallout: New Vegas",
      },
      {
        src: "/images/games/fallout-new-vegas/screenshot-05.jpg",
        alt: "The companion command wheel appears during exploration in Fallout: New Vegas",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © Obsidian Entertainment / Bethesda Softworks. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/22380/Fallout_New_Vegas/",
    accent: "#C98B3E",
    description:
      "Obsidian's post-apocalyptic RPG sets a courier loose in the Mojave, where faction loyalty, old-world technology, and personal grudges decide the future of New Vegas.",
    overview: [
      "Fallout: New Vegas begins with a courier being shot and left for dead. The search for answers leads into a power struggle over the Mojave: the New California Republic, Caesar's Legion, the mysterious Mr. House, and the people who want no ruler at all.",
      "Its reputation system and skill checks make the world feel political in a way few open-world games manage. Speech, medicine, repair, and even clothing can change how a conversation unfolds. The main story is substantial, but the side quests are where the game's arguments about power and survival become concrete.",
    ],
    funFact:
      "New Vegas was built on Fallout 3's engine under a short production schedule, yet its faction reputation system and ammo-crafting options gave the game a distinctly different identity from its predecessor.",
    tags: [
      "mojave",
      "ncr",
      "caesar's legion",
      "mr house",
      "obsidian",
      "post apocalyptic",
      "factions",
    ],
    featured: true,
    popularity: 96,
    relatedGames: [
      "mass-effect-legendary-edition",
      "starfield",
      "disco-elysium",
    ],
  },
  {
    slug: "nier-automata",
    title: "NieR:Automata",
    tagline:
      "Androids, machines, and the stories they tell themselves about being alive.",
    genres: ["Action RPG", "Sci-fi", "Hack and slash"],
    developer: "PlatinumGames",
    publisher: "Square Enix",
    releaseDate: "2017-03-17",
    releaseYear: 2017,
    platforms: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
    modes: ["Single-player"],
    coverImage: "/images/games/nier-automata/cover.jpg",
    coverAlt: "Official cover art for NieR:Automata",
    heroImage: "/images/games/nier-automata/hero.jpg",
    heroAlt:
      "2B, 9S, and A2 stand among machine lifeforms in an overgrown ruined city in NieR:Automata",
    screenshots: [
      {
        src: "/images/games/nier-automata/screenshot-01.jpg",
        alt: "2B and 9S fight a machine in an overgrown city in NieR:Automata",
      },
      {
        src: "/images/games/nier-automata/screenshot-02.jpg",
        alt: "2B stands with her sword in a ruined, overgrown city in NieR:Automata",
      },
      {
        src: "/images/games/nier-automata/screenshot-03.jpg",
        alt: "2B faces a towering multi-legged machine in NieR:Automata",
      },
      {
        src: "/images/games/nier-automata/screenshot-04.jpg",
        alt: "2B speaks with a small machine in a dark industrial area in NieR:Automata",
      },
      {
        src: "/images/games/nier-automata/screenshot-05.jpg",
        alt: "2B and 9S look out over an overgrown city from a cliff in NieR:Automata",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © PlatinumGames / Square Enix. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/524220/NieRAutomata/",
    accent: "#A9B8B3",
    description:
      "A stylish action RPG about androids, machines, and the stories people build to survive a ruined world.",
    overview: [
      "NieR:Automata follows 2B, 9S, and A2 through a war between androids and machine lifeforms. The combat is fast and expressive, built around weapon sets, dodging, and plug-in chips that let players tune everything from attack power to automatic assistance.",
      "The story is structured around multiple routes. Finishing one route does not mean the game is over, and the later perspectives change how earlier events read. The game uses its interface, camera, and even its credits to make those themes part of the experience rather than just the dialogue.",
    ],
    funFact:
      "The game's multiple routes are not bonus content tacked onto one ending. They are the main narrative structure, and later routes deliberately revisit familiar places with a different point of view.",
    tags: [
      "androids",
      "machines",
      "multiple endings",
      "platinumgames",
      "yoko taro",
      "sci-fi",
      "action rpg",
    ],
    featured: false,
    popularity: 92,
    relatedGames: ["persona-5-royal", "bioshock-remastered", "cyberpunk-2077"],
  },
  {
    slug: "resident-evil-4",
    title: "Resident Evil 4",
    tagline:
      "A rescue mission that turns into a fight for every bullet and every inch of ground.",
    genres: ["Survival horror", "Third-person shooter", "Action"],
    developer: "CAPCOM",
    publisher: "CAPCOM",
    releaseDate: "2023-03-24",
    releaseYear: 2023,
    platforms: [
      "PC",
      "macOS",
      "PS5",
      "Xbox Series X|S",
      "PS4",
      "iOS",
    ],
    modes: ["Single-player", "PS VR2"],
    coverImage: "/images/games/resident-evil-4/cover.jpg",
    coverAlt: "Official cover art for Resident Evil 4",
    heroImage: "/images/games/resident-evil-4/hero.jpg",
    heroAlt:
      "Leon Kennedy stands in a dark, misty forest in Resident Evil 4",
    screenshots: [
      {
        src: "/images/games/resident-evil-4/screenshot-01.jpg",
        alt: "Leon stands in a foggy forest beside a wooden grave marker in Resident Evil 4",
      },
      {
        src: "/images/games/resident-evil-4/screenshot-02.jpg",
        alt: "Leon approaches a weathered house in the rain in Resident Evil 4",
      },
      {
        src: "/images/games/resident-evil-4/screenshot-03.jpg",
        alt: "Leon confronts a bloodied villager in a dark room in Resident Evil 4",
      },
      {
        src: "/images/games/resident-evil-4/screenshot-04.jpg",
        alt: "A burning village tower rises beyond a gate in Resident Evil 4",
      },
      {
        src: "/images/games/resident-evil-4/screenshot-05.jpg",
        alt: "Leon looks through a rain-streaked window in Resident Evil 4",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © CAPCOM. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/2050650/Resident_Evil_4/",
    accent: "#B4473D",
    description:
      "A remake of the survival-horror landmark that tightens the original's mix of resource pressure, precise shooting, and panicked close-quarters escapes.",
    overview: [
      "Resident Evil 4 follows Leon S. Kennedy to a rural European village on a rescue mission. The village is hostile from the first minute, and the game's tension comes from managing space, ammo, healing items, and the knife while enemies keep closing in.",
      "The 2023 remake keeps the original's over-the-shoulder framing but reworks movement, crafting, knife durability, and side requests. Combat rewards staggering enemies with precise shots and following up with melee, while the attaché case turns inventory space into a small puzzle of its own.",
    ],
    funFact:
      "The original Resident Evil 4 helped popularize the over-the-shoulder third-person camera in action games. The remake keeps that tight framing while giving Leon more freedom to move and parry.",
    tags: [
      "survival horror",
      "leon kennedy",
      "plagas",
      "capcom",
      "remake",
      "third person",
      "resource management",
    ],
    featured: false,
    popularity: 94,
    relatedGames: [
      "red-dead-redemption-2",
      "god-of-war",
      "fallout-new-vegas",
    ],
  },
  {
    slug: "grand-theft-auto-iv",
    title: "Grand Theft Auto IV",
    tagline:
      "A cold welcome to Liberty City, where every favor has a price.",
    genres: ["Open-world action-adventure", "Crime", "Third-person"],
    developer: "Rockstar North / Rockstar Toronto",
    publisher: "Rockstar Games",
    releaseDate: "2008-04-29",
    releaseYear: 2008,
    platforms: ["PC", "PS3", "Xbox 360"],
    modes: ["Single-player"],
    coverImage: "/images/games/grand-theft-auto-iv/cover.jpg",
    coverAlt:
      "Official cover art for Grand Theft Auto IV and Episodes from Liberty City",
    heroImage: "/images/games/grand-theft-auto-iv/hero.jpg",
    heroAlt:
      "A classic car is parked by the river at sunset in Liberty City in Grand Theft Auto IV",
    screenshots: [
      {
        src: "/images/games/grand-theft-auto-iv/screenshot-01.jpg",
        alt: "A car crashes through a Liberty City street as glass shatters in Grand Theft Auto IV",
      },
      {
        src: "/images/games/grand-theft-auto-iv/screenshot-02.jpg",
        alt: "A classic car is parked by the river at sunset in Liberty City in Grand Theft Auto IV",
      },
      {
        src: "/images/games/grand-theft-auto-iv/screenshot-03.jpg",
        alt: "A man in a suit holds a shotgun in a dark room in Grand Theft Auto IV",
      },
      {
        src: "/images/games/grand-theft-auto-iv/screenshot-04.jpg",
        alt: "Niko Bellic stands in front of the 69th Street Diner in Liberty City in Grand Theft Auto IV",
      },
      {
        src: "/images/games/grand-theft-auto-iv/screenshot-05.jpg",
        alt: "A police car drives past the Live Central club in Liberty City in Grand Theft Auto IV",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots for Grand Theft Auto IV: The Complete Edition © Rockstar Games. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/12210/Grand_Theft_Auto_IV/",
    accent: "#8B9A7A",
    description:
      "Rockstar's Liberty City crime saga follows Niko Bellic, an immigrant chasing a better life and finding old debts, new enemies, and a city that rarely offers clean choices.",
    overview: [
      "Grand Theft Auto IV follows Niko Bellic, a veteran from Eastern Europe who arrives in Liberty City after his cousin Roman promises opportunity. What he finds is a dense, gray metropolis of immigrants, criminals, and people trying to survive the gap between the American dream and the rent.",
      "The driving and shooting are heavier than in later GTA games, and the story is more intimate than the series' usual crime epic. The Complete Edition includes The Lost and Damned and The Ballad of Gay Tony, two expansions that revisit Liberty City from very different criminal circles.",
    ],
    funFact:
      "Rockstar built Liberty City as a detailed parody of New York City, with its own radio stations, television, and internet. The expansions reuse the same map but change the protagonist, tone, and criminal perspective.",
    tags: [
      "liberty city",
      "niko bellic",
      "rockstar",
      "crime",
      "open world",
      "episodes from liberty city",
      "2008",
    ],
    featured: true,
    popularity: 94,
    relatedGames: [
      "grand-theft-auto-v",
      "la-noire",
      "red-dead-redemption-2",
    ],
  },
  {
    slug: "grand-theft-auto-v",
    title: "Grand Theft Auto V",
    tagline:
      "Three criminals, one city, and a plan that keeps getting more expensive.",
    genres: ["Open-world action-adventure", "Crime", "Third-person"],
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    releaseDate: "2013-09-17",
    releaseYear: 2013,
    platforms: [
      "PC",
      "PS5",
      "Xbox Series X|S",
      "PS4",
      "Xbox One",
      "PS3",
      "Xbox 360",
    ],
    modes: ["Single-player", "GTA Online"],
    coverImage: "/images/games/grand-theft-auto-v/cover.jpg",
    coverAlt: "Official cover art for Grand Theft Auto V",
    heroImage: "/images/games/grand-theft-auto-v/hero.jpg",
    heroAlt:
      "Two women stand outside a Vinewood motel at sunset in Grand Theft Auto V",
    screenshots: [
      {
        src: "/images/games/grand-theft-auto-v/screenshot-01.jpg",
        alt: "Trevor stands outside the Sunset Horses motel as a truck burns behind him in Grand Theft Auto V",
      },
      {
        src: "/images/games/grand-theft-auto-v/screenshot-02.jpg",
        alt: "Franklin holds a rifle while standing on an industrial catwalk in Grand Theft Auto V",
      },
      {
        src: "/images/games/grand-theft-auto-v/screenshot-03.jpg",
        alt: "Michael and Trevor stand behind a wooden fence in a dim room in Grand Theft Auto V",
      },
      {
        src: "/images/games/grand-theft-auto-v/screenshot-04.jpg",
        alt: "A black muscle car waits at a neon-lit Los Santos intersection in Grand Theft Auto V",
      },
      {
        src: "/images/games/grand-theft-auto-v/screenshot-05.jpg",
        alt: "Pedestrians walk along a Hollywood-style boulevard at night in Grand Theft Auto V",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © Rockstar Games. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
    accent: "#6AB04C",
    description:
      "Rockstar's Los Santos crime epic follows Michael, Franklin, and Trevor through heists, betrayal, and a city that sells its own mythology.",
    overview: [
      "Grand Theft Auto V follows three criminals in and around Los Santos: Michael, a retired robber with a family he cannot control; Franklin, an ambitious driver looking for a way out; and Trevor, a violent opportunist who refuses to pretend the city is civilized. Their stories collide through a series of heists.",
      "The game's switching system lets missions move between the three protagonists, and the open world stretches from the city's celebrity districts to the desert and small towns of Blaine County. GTA Online turns the same map into a shared criminal sandbox with its own economy and progression.",
    ],
    funFact:
      "The game's three-protagonist structure is built into mission design. Switching characters mid-mission can show what the other two are doing, and some heists require the player to manage all three roles.",
    tags: [
      "los santos",
      "michael",
      "franklin",
      "trevor",
      "rockstar",
      "heists",
      "gta online",
    ],
    featured: true,
    popularity: 99,
    relatedGames: [
      "grand-theft-auto-iv",
      "la-noire",
      "red-dead-redemption-2",
    ],
  },
  {
    slug: "la-noire",
    title: "L.A. Noire",
    tagline:
      "A city of postwar glamour, buried secrets, and a detective who notices too much.",
    genres: ["Detective", "Action-adventure", "Open world"],
    developer: "Team Bondi / Rockstar Leeds",
    publisher: "Rockstar Games",
    releaseDate: "2011-05-17",
    releaseYear: 2011,
    platforms: [
      "PC",
      "PS4",
      "Xbox One",
      "Nintendo Switch",
      "PS3",
      "Xbox 360",
    ],
    modes: ["Single-player"],
    coverImage: "/images/games/la-noire/cover.jpg",
    coverAlt: "Official cover art for L.A. Noire",
    heroImage: "/images/games/la-noire/hero.jpg",
    heroAlt:
      "A detective and a police officer stand beneath a crashed car at night in L.A. Noire",
    screenshots: [
      {
        src: "/images/games/la-noire/screenshot-01.jpg",
        alt: "Cole Phelps questions a man at a debris-filled crime scene in L.A. Noire",
      },
      {
        src: "/images/games/la-noire/screenshot-02.jpg",
        alt: "Cole Phelps sits at a desk during a police briefing in L.A. Noire",
      },
      {
        src: "/images/games/la-noire/screenshot-03.jpg",
        alt: "A man stands beside a bullet-scarred brick wall in L.A. Noire",
      },
      {
        src: "/images/games/la-noire/screenshot-04.jpg",
        alt: "Two detectives look toward an explosion in a Los Angeles neighborhood in L.A. Noire",
      },
      {
        src: "/images/games/la-noire/screenshot-05.jpg",
        alt: "Cole Phelps approaches a crashed vehicle at night in L.A. Noire",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © Team Bondi / Rockstar Games. Used for identification and commentary.",
    imageSourceUrl: "https://store.steampowered.com/app/110800/LA_Noire/",
    accent: "#C69B68",
    description:
      "A detective drama set in 1947 Los Angeles, built around crime scenes, interrogations, and the uneasy relationship between the police and the city they protect.",
    overview: [
      "L.A. Noire follows Cole Phelps, a war veteran and LAPD detective working his way through the department's divisions. Each case begins with a crime scene, moves through interviews and evidence, and ends with an accusation that depends on what the player noticed.",
      "The game's signature technology captures actors' facial performances, which makes interrogation a matter of reading expressions as well as comparing testimony to evidence. Between cases, the open city offers side investigations, collectibles, and a portrait of postwar Los Angeles that is more critical than nostalgic.",
    ],
    funFact:
      "L.A. Noire's facial animation was captured with actors filmed from multiple angles at once. The technology was expensive and distinctive, and it remains one of the game's defining features.",
    tags: [
      "los angeles",
      "1947",
      "cole phelps",
      "interrogation",
      "rockstar",
      "detective",
      "noir",
    ],
    featured: true,
    popularity: 88,
    relatedGames: [
      "grand-theft-auto-iv",
      "disco-elysium",
      "red-dead-redemption-2",
    ],
  },
  {
    slug: "yakuza-0",
    title: "Yakuza 0",
    tagline:
      "Two men, one city, and a fortune that turns every loyalty into a negotiation.",
    genres: ["Action-adventure", "Beat 'em up", "Crime drama"],
    developer: "Ryu Ga Gotoku Studio",
    publisher: "SEGA",
    releaseDate: "2015-03-12",
    releaseYear: 2015,
    platforms: ["PC", "PS4", "PS3", "Xbox One"],
    modes: ["Single-player"],
    coverImage: "/images/games/yakuza-0/cover.jpg",
    coverAlt: "Official cover art for Yakuza 0",
    heroImage: "/images/games/yakuza-0/hero.jpg",
    heroAlt:
      "Kazuma Kiryu and Goro Majima stand against a red dragon backdrop in Yakuza 0",
    screenshots: [
      {
        src: "/images/games/yakuza-0/screenshot-01.jpg",
        alt: "Two men with large back tattoos stand in a crowded Tokyo street in Yakuza 0",
      },
      {
        src: "/images/games/yakuza-0/screenshot-02.jpg",
        alt: "A man aims a pistol from a taxi in Yakuza 0",
      },
      {
        src: "/images/games/yakuza-0/screenshot-03.jpg",
        alt: "Two men fight with a staff in a dark room in Yakuza 0",
      },
      {
        src: "/images/games/yakuza-0/screenshot-04.jpg",
        alt: "A man in a white suit dances in a neon-lit club in Yakuza 0",
      },
      {
        src: "/images/games/yakuza-0/screenshot-05.jpg",
        alt: "A man throws money in a neon-lit street in Yakuza 0",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © SEGA / Ryu Ga Gotoku Studio. Used for identification and commentary.",
    imageSourceUrl: "https://store.steampowered.com/app/638970/Yakuza_0/",
    accent: "#D64045",
    description:
      "A 1980s crime prequel about Kazuma Kiryu and Goro Majima, mixing brutal street fights with cabaret clubs, real estate, and a city that runs on money.",
    overview: [
      "Yakuza 0 is set in late-1980s Japan, during the bubble economy. Kazuma Kiryu is a young yakuza in Tokyo trying to clear his name, while Goro Majima runs a cabaret club in Osaka and takes on a job that pulls him back toward the underworld.",
      "The game alternates between the two protagonists and two cities. Combat uses multiple fighting styles, while the side content ranges from real-estate management and cabaret-club hosting to arcades, karaoke, and absurd substories. The serious crime plot and the comic detours are part of the same design.",
    ],
    funFact:
      "Yakuza 0's 1988 setting predates the original Yakuza game by seventeen years. That lets the series show Kiryu and Majima before their reputations were settled, while the bubble economy explains why so much of the story revolves around money.",
    tags: [
      "kazuma kiryu",
      "goro majima",
      "sega",
      "tokyo",
      "osaka",
      "1988",
      "crime drama",
    ],
    featured: false,
    popularity: 91,
    relatedGames: [
      "persona-5-royal",
      "disco-elysium",
      "cyberpunk-2077",
    ],
  },
  {
    slug: "bioshock-remastered",
    title: "BioShock Remastered",
    tagline:
      "An underwater city built on a philosophy that could not survive its own success.",
    genres: ["First-person shooter", "Immersive sim", "Sci-fi"],
    developer: "Irrational Games / Blind Squirrel Games",
    publisher: "2K",
    releaseDate: "2016-09-15",
    releaseYear: 2016,
    platforms: ["PC", "macOS", "PS4", "Xbox One", "Nintendo Switch"],
    modes: ["Single-player"],
    coverImage: "/images/games/bioshock-remastered/cover.jpg",
    coverAlt: "Official cover art for BioShock Remastered",
    heroImage: "/images/games/bioshock-remastered/hero.jpg",
    heroAlt:
      "A Big Daddy and Little Sister stand in a flooded Art Deco corridor in BioShock Remastered",
    screenshots: [
      {
        src: "/images/games/bioshock-remastered/screenshot-01.jpg",
        alt: "A lighthouse stands in stormy seas at night in BioShock Remastered",
      },
      {
        src: "/images/games/bioshock-remastered/screenshot-02.jpg",
        alt: "A Little Sister stands beside a glowing vending machine in BioShock Remastered",
      },
      {
        src: "/images/games/bioshock-remastered/screenshot-03.jpg",
        alt: "A flooded Art Deco corridor glows green in BioShock Remastered",
      },
      {
        src: "/images/games/bioshock-remastered/screenshot-04.jpg",
        alt: "A grand Art Deco hall with murals and balconies in BioShock Remastered",
      },
      {
        src: "/images/games/bioshock-remastered/screenshot-05.jpg",
        alt: "A Big Daddy's glowing helmet appears in a dark, flooded room in BioShock Remastered",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © Irrational Games / 2K. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/409710/BioShock_Remastered/",
    accent: "#3FA6A0",
    description:
      "A remaster of the 2007 first-person shooter about Rapture, an underwater city built by an idealist whose experiment turns into a haunting.",
    overview: [
      "BioShock begins with a plane crash in the Atlantic and a lighthouse that leads down to Rapture, an underwater city built by Andrew Ryan. What was meant to be a refuge for artists, scientists, and entrepreneurs is now a flooded ruin populated by splicers and guarded by Big Daddies.",
      "The game combines first-person shooting with plasmids, tonics, hacking, and environmental traps. Audio diaries and environmental details tell the city's history, while the remaster updates the visuals and includes a developer commentary track for players who want to understand how the game was made.",
    ],
    funFact:
      "BioShock's story became famous for turning the player's relationship with instructions into part of its theme. The remaster preserves that structure while adding higher-resolution textures and a commentary mode.",
    tags: [
      "rapture",
      "andrew ryan",
      "big daddy",
      "little sister",
      "plasmids",
      "immersive sim",
      "2k",
    ],
    featured: true,
    popularity: 93,
    relatedGames: ["portal-2", "nier-automata", "cyberpunk-2077"],
  },
  {
    slug: "portal-2",
    title: "Portal 2",
    tagline:
      "Aperture Science has a new test subject, a new voice, and no interest in your survival.",
    genres: ["Puzzle-platform", "First-person", "Co-op"],
    developer: "Valve",
    publisher: "Valve",
    releaseDate: "2011-04-19",
    releaseYear: 2011,
    platforms: [
      "PC",
      "macOS",
      "Linux",
      "PS3",
      "Xbox 360",
      "Nintendo Switch",
    ],
    modes: ["Single-player", "Online co-op", "Local co-op"],
    coverImage: "/images/games/portal-2/cover.jpg",
    coverAlt: "Official cover art for Portal 2",
    heroImage: "/images/games/portal-2/hero.jpg",
    heroAlt:
      "A figure stands beneath a massive damaged robot in an industrial cavern in Portal 2",
    screenshots: [
      {
        src: "/images/games/portal-2/screenshot-01.jpg",
        alt: "A figure stands before a massive damaged robot in an overgrown Aperture Science chamber in Portal 2",
      },
      {
        src: "/images/games/portal-2/screenshot-02.jpg",
        alt: "Orange and blue portal effects light up a test chamber in Portal 2",
      },
      {
        src: "/images/games/portal-2/screenshot-03.jpg",
        alt: "A blue-eyed core stares from a mechanical housing in Portal 2",
      },
      {
        src: "/images/games/portal-2/screenshot-04.jpg",
        alt: "A tall test chamber shaft rises between white panels in Portal 2",
      },
      {
        src: "/images/games/portal-2/screenshot-05.jpg",
        alt: "Red laser beams cut across a debris-filled chamber in Portal 2",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © Valve. Used for identification and commentary.",
    imageSourceUrl: "https://store.steampowered.com/app/620/Portal_2/",
    accent: "#66B7E8",
    description:
      "Valve's first-person puzzle sequel expands the portal gun, adds new gels and co-op tests, and wraps the whole experiment in a very funny disaster.",
    overview: [
      "Portal 2 returns to Aperture Science after the events of the first game. Chell wakes up in a facility that has decayed, meets a new guide named Wheatley, and is pulled back into GLaDOS's testing routine. The campaign moves through collapsed offices, industrial ruins, and freshly assembled test chambers.",
      "The puzzle design builds on the original portal gun with light bridges, excursion funnels, and three types of gel that change surfaces and movement. A separate co-op campaign gives two players their own robots and a set of tests built around communication rather than solo problem-solving.",
    ],
    funFact:
      "Portal 2's co-op campaign is not the single-player levels with a second body. It has its own story, its own test chambers, and puzzles that require two players to coordinate portals and timing.",
    tags: [
      "aperture science",
      "chell",
      "glados",
      "wheatley",
      "valve",
      "puzzle",
      "co-op",
    ],
    featured: true,
    popularity: 96,
    relatedGames: ["half-life-2", "bioshock-remastered", "nier-automata"],
  },
  {
    slug: "dark-souls-iii",
    title: "Dark Souls III",
    tagline:
      "The fire is fading, and every road leads through something that wants you dead.",
    genres: ["Action RPG", "Dark fantasy", "Soulslike"],
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    releaseDate: "2016-04-11",
    releaseYear: 2016,
    platforms: ["PC", "PS4", "Xbox One"],
    modes: ["Single-player", "Online co-op and PvP"],
    coverImage: "/images/games/dark-souls-iii/cover.jpg",
    coverAlt: "Official cover art for Dark Souls III",
    heroImage: "/images/games/dark-souls-iii/hero.jpg",
    heroAlt:
      "The Ashen One stands in gold-lit armor before a ruined kingdom in Dark Souls III",
    screenshots: [
      {
        src: "/images/games/dark-souls-iii/screenshot-01.jpg",
        alt: "A dragon breathes fire at a knight in a ruined courtyard in Dark Souls III",
      },
      {
        src: "/images/games/dark-souls-iii/screenshot-02.jpg",
        alt: "A knight fights armored enemies with glowing weapons in a burning arena in Dark Souls III",
      },
      {
        src: "/images/games/dark-souls-iii/screenshot-03.jpg",
        alt: "A heavily armored knight faces a towering enemy inside a stone hall in Dark Souls III",
      },
      {
        src: "/images/games/dark-souls-iii/screenshot-04.jpg",
        alt: "A knight casts blue magic at a skeletal enemy in a crypt in Dark Souls III",
      },
      {
        src: "/images/games/dark-souls-iii/screenshot-05.jpg",
        alt: "A knight raises a shield against a red-caped enemy in a cathedral in Dark Souls III",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots from FromSoftware / Bandai Namco Entertainment. Used for identification and commentary.",
    imageSourceUrl: "https://store.steampowered.com/app/374320/DARK_SOULS_III/",
    accent: "#D7A94B",
    description:
      "FromSoftware's dark fantasy action RPG is built around stamina, timing, and learning the shape of each encounter. Every shortcut and bonfire matters.",
    overview: [
      "Dark Souls III returns to the series' core loop: explore a hostile region, learn enemy patterns, spend hard-won souls on levels or upgrades, and push toward the next bonfire. The kingdom of Lothric is full of routes that fold back on themselves, so a locked door or a distant bridge often becomes a shortcut later.",
      "Combat rewards patience more than speed. Stamina limits how long you can attack, block, or roll, and most enemies punish careless swings. Weapon arts, infusions, and spell builds add variety, but the fundamental lesson is the same: observe first, commit second, and treat every death as information.",
    ],
    funFact:
      "Dark Souls III's world is designed around visible landmarks. Castles, bridges, and towers you can see from a distance often become locations you can reach later, which makes the kingdom feel like one continuous structure rather than a series of disconnected levels.",
    tags: [
      "soulslike",
      "lothric",
      "ashen one",
      "bonfires",
      "dark fantasy",
      "fromsoftware",
      "boss fights",
    ],
    featured: true,
    popularity: 95,
    relatedGames: ["elden-ring", "sekiro-shadows-die-twice", "monster-hunter-world"],
  },
  {
    slug: "mass-effect-legendary-edition",
    title: "Mass Effect Legendary Edition",
    tagline:
      "A galaxy-sized choice machine, rebuilt with all three Commander Shepard stories in one package.",
    genres: ["Action RPG", "Sci-fi", "Third-person shooter", "Choices matter"],
    developer: "BioWare",
    publisher: "Electronic Arts",
    releaseDate: "2021-05-14",
    releaseYear: 2021,
    platforms: ["PC", "PS4", "Xbox One"],
    modes: ["Single-player"],
    coverImage: "/images/games/mass-effect-legendary-edition/cover.jpg",
    coverAlt: "Official cover art for Mass Effect Legendary Edition",
    heroImage: "/images/games/mass-effect-legendary-edition/hero.jpg",
    heroAlt:
      "A Reaper looms over a pink-lit city in Mass Effect Legendary Edition",
    screenshots: [
      {
        src: "/images/games/mass-effect-legendary-edition/screenshot-01.jpg",
        alt: "A turian squadmate in blue armor stands aboard a spacecraft in Mass Effect Legendary Edition",
      },
      {
        src: "/images/games/mass-effect-legendary-edition/screenshot-02.jpg",
        alt: "A squad overlooks a bright alien horizon from a ridge in Mass Effect Legendary Edition",
      },
      {
        src: "/images/games/mass-effect-legendary-edition/screenshot-03.jpg",
        alt: "A man in a suit stands before a holographic galaxy map in Mass Effect Legendary Edition",
      },
      {
        src: "/images/games/mass-effect-legendary-edition/screenshot-04.jpg",
        alt: "An armored vehicle crosses a dark industrial battlefield under fire in Mass Effect Legendary Edition",
      },
      {
        src: "/images/games/mass-effect-legendary-edition/screenshot-05.jpg",
        alt: "Commander Shepard in N7 armor stands inside a spacecraft in Mass Effect Legendary Edition",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots from BioWare / Electronic Arts. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/1328670/Mass_Effect_Legendary_Edition/",
    accent: "#D94B4B",
    description:
      "The remastered trilogy bundles Commander Shepard's three-game arc, carrying choices, companions, and consequences across a galaxy under threat.",
    overview: [
      "Mass Effect Legendary Edition collects Mass Effect, Mass Effect 2, and Mass Effect 3 with updated visuals, controls, and quality-of-life changes. The through-line is Commander Shepard's mission to stop the Reapers, but the more memorable story is built from crew relationships, faction politics, and decisions that return several games later.",
      "Combat shifts across the trilogy: the first game leans on RPG systems and cover shooting, while the sequels streamline action and expand squad powers. The Legendary Edition brings the three games closer together, but each still has its own rhythm. New players should expect a long campaign and treat the save file as a continuity document.",
    ],
    funFact:
      "Choices from the first game can carry through the entire trilogy, including who survives, who trusts Shepard, and which version of the story reaches the final battle. The Legendary Edition keeps that continuity intact across all three remastered games.",
    tags: [
      "commander shepard",
      "normandy",
      "reapers",
      "galaxy",
      "choices",
      "bioware",
      "sci-fi",
    ],
    featured: true,
    popularity: 94,
    relatedGames: ["starfield", "cyberpunk-2077", "fallout-new-vegas"],
  },
  {
    slug: "persona-5-royal",
    title: "Persona 5 Royal",
    tagline:
      "A year in Tokyo, a secret double life, and a velvet-lined rebellion against rotten adults.",
    genres: ["JRPG", "Turn-based RPG", "Social simulation"],
    developer: "ATLUS",
    publisher: "SEGA",
    releaseDate: "2022-10-20",
    releaseYear: 2022,
    platforms: [
      "PC",
      "PS5",
      "Xbox Series X|S",
      "Nintendo Switch",
      "PS4",
    ],
    modes: ["Single-player"],
    coverImage: "/images/games/persona-5-royal/cover.jpg",
    coverAlt: "Official cover art for Persona 5 Royal",
    heroImage: "/images/games/persona-5-royal/hero.jpg",
    heroAlt:
      "The Phantom Thieves gather beneath red and black spotlights in Persona 5 Royal",
    screenshots: [
      {
        src: "/images/games/persona-5-royal/screenshot-01.jpg",
        alt: "Students sit in a classroom during a lesson in Persona 5 Royal",
      },
      {
        src: "/images/games/persona-5-royal/screenshot-02.jpg",
        alt: "The protagonist talks with friends in a Tokyo cafe in Persona 5 Royal",
      },
      {
        src: "/images/games/persona-5-royal/screenshot-03.jpg",
        alt: "The Phantom Thieves confront a costumed Palace ruler on a stage in Persona 5 Royal",
      },
      {
        src: "/images/games/persona-5-royal/screenshot-04.jpg",
        alt: "A stylized all-out attack illustration fills the screen in Persona 5 Royal",
      },
      {
        src: "/images/games/persona-5-royal/screenshot-05.jpg",
        alt: "The protagonist and a companion walk through a neon-lit Tokyo street in Persona 5 Royal",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots from ATLUS / SEGA. Used for identification and commentary.",
    imageSourceUrl: "https://store.steampowered.com/app/1687950/Persona_5_Royal/",
    accent: "#E23A4E",
    description:
      "ATLUS's turn-based RPG splits the year between school life, Tokyo hangouts, and heists inside the distorted minds of corrupt adults.",
    overview: [
      "Persona 5 Royal follows a transferred student who discovers a hidden world inside human cognition. By day, the calendar is filled with classes, part-time jobs, and relationships. By night, the Phantom Thieves enter Palaces, fight Shadows, and steal the distorted desires of their targets.",
      "The game is as much about time management as combat. Confidants unlock abilities, story scenes, and fusion options, while dungeon progress competes for the same days. Royal adds a new semester, new characters, and extra combat tools, making an already long RPG even more expansive.",
    ],
    funFact:
      "Royal is not just a cosmetic re-release. It adds new confidants, a new story semester, Showtime attacks, and changes to boss encounters, so guides written for the original Persona 5 do not always map cleanly onto it.",
    tags: [
      "phantom thieves",
      "tokyo",
      "palaces",
      "confidants",
      "jrpg",
      "turn based",
      "social sim",
    ],
    featured: true,
    popularity: 93,
    relatedGames: ["nier-automata", "yakuza-0", "hades"],
  },
  {
    slug: "monster-hunter-world",
    title: "Monster Hunter: World",
    tagline:
      "Pick a weapon, track a monster, and turn a hunt into a plan.",
    genres: ["Action RPG", "Hunting", "Co-op"],
    developer: "Capcom",
    publisher: "Capcom",
    releaseDate: "2018-08-08",
    releaseYear: 2018,
    platforms: ["PC", "PS4", "Xbox One"],
    modes: ["Single-player", "Online co-op"],
    coverImage: "/images/games/monster-hunter-world/cover.jpg",
    coverAlt: "Official cover art for Monster Hunter: World",
    heroImage: "/images/games/monster-hunter-world/hero.jpg",
    heroAlt:
      "Hunters and a Palico stand before a towering monster on a coastal cliff in Monster Hunter: World",
    screenshots: [
      {
        src: "/images/games/monster-hunter-world/screenshot-01.jpg",
        alt: "A large monster approaches through a forest in Monster Hunter: World",
      },
      {
        src: "/images/games/monster-hunter-world/screenshot-02.jpg",
        alt: "A hunter rides a wingdrake above a jungle river in Monster Hunter: World",
      },
      {
        src: "/images/games/monster-hunter-world/screenshot-03.jpg",
        alt: "A hunter fights a monster in a shallow water arena in Monster Hunter: World",
      },
      {
        src: "/images/games/monster-hunter-world/screenshot-04.jpg",
        alt: "A hunter explores a glowing crystal cave in Monster Hunter: World",
      },
      {
        src: "/images/games/monster-hunter-world/screenshot-05.jpg",
        alt: "A hunter faces a massive monster in a desert canyon in Monster Hunter: World",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots from Capcom. Used for identification and commentary.",
    imageSourceUrl:
      "https://store.steampowered.com/app/582010/Monster_Hunter_World/",
    accent: "#C9A15C",
    description:
      "Capcom's hunting RPG turns preparation into gameplay: study a monster, choose the right weapon, and work with a team to bring it down.",
    overview: [
      "Monster Hunter: World sends players to the New World as part of the Fifth Fleet. The hub is Astera, but most of the game happens in large ecological zones where monsters move, feed, fight each other, and react to the environment. Hunts are not just boss fights; they are expeditions with tracking, resource gathering, and terrain to use.",
      "Each of the 14 weapon types has a distinct move set and resource loop, so finding a main weapon is a major decision. Crafting gear from monster parts closes the loop between hunting and progression. The Iceborne expansion adds Master Rank and more systems, but the base game already teaches the core habits: prepare, observe, commit, and learn the matchup.",
    ],
    funFact:
      "Monster Hunter: World's monsters are not scripted to wait in an arena. They roam the map, sleep, eat, and fight each other, which means a hunt can change direction because another creature wandered into the fight.",
    tags: [
      "monster hunter",
      "hunting",
      "co-op",
      "great sword",
      "palico",
      "crafting",
      "iceborne",
    ],
    featured: true,
    popularity: 92,
    relatedGames: ["dark-souls-iii", "elden-ring", "the-witcher-3"],
  },
  {
    slug: "half-life-2",
    title: "Half-Life 2",
    tagline:
      "A quiet physicist, a stolen city, and a crowbar that became a legend.",
    genres: ["First-person shooter", "Sci-fi", "Story-driven"],
    developer: "Valve",
    publisher: "Valve",
    releaseDate: "2004-11-16",
    releaseYear: 2004,
    platforms: ["PC", "macOS", "Linux"],
    modes: ["Single-player"],
    coverImage: "/images/games/half-life-2/cover.jpg",
    coverAlt: "Official cover art for Half-Life 2",
    heroImage: "/images/games/half-life-2/hero.jpg",
    heroAlt:
      "Gordon Freeman stands in a bright, foggy industrial space in Half-Life 2",
    screenshots: [
      {
        src: "/images/games/half-life-2/screenshot-01.jpg",
        alt: "The Citadel rises above the rooftops of City 17 in Half-Life 2",
      },
      {
        src: "/images/games/half-life-2/screenshot-02.jpg",
        alt: "Alyx, Eli, and a scientist speak in a resistance lab in Half-Life 2",
      },
      {
        src: "/images/games/half-life-2/screenshot-03.jpg",
        alt: "A first-person weapon aims across the water toward a coastal bridge at sunset in Half-Life 2",
      },
      {
        src: "/images/games/half-life-2/screenshot-04.jpg",
        alt: "Alyx stands beside a car under a glowing portal in Half-Life 2",
      },
      {
        src: "/images/games/half-life-2/screenshot-05.jpg",
        alt: "A Strider towers over Alyx in a ruined street in Half-Life 2",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots from Valve. Used for identification and commentary.",
    imageSourceUrl: "https://store.steampowered.com/app/220/HalfLife_2/",
    accent: "#F29B38",
    description:
      "Valve's landmark FPS turns a train-station arrival into a road movie through an occupied city, with physics, silence, and a crowbar doing the storytelling.",
    overview: [
      "Half-Life 2 begins with Gordon Freeman arriving in City 17 after the events of Black Mesa. The Combine have turned the city into a controlled zone, and the resistance is fragmented. The campaign moves from cramped streets and apartments to highways, coastal installations, and the towering Citadel.",
      "The game's design is famous for its continuity: the camera rarely cuts away, characters speak while you move, and physics props are part of both puzzles and combat. The gravity gun becomes the signature tool because it turns the environment into a weapon. Even now, the pacing feels unusually confident about letting silence and space do the work.",
    ],
    funFact:
      "Half-Life 2's gravity gun was built around the Source engine's physics system rather than added as a conventional weapon. Picking up and launching ordinary objects became one of the game's defining mechanics.",
    tags: [
      "gordon freeman",
      "city 17",
      "combine",
      "gravity gun",
      "valve",
      "fps",
      "source engine",
    ],
    featured: true,
    popularity: 97,
    relatedGames: ["portal-2", "bioshock-remastered", "cyberpunk-2077"],
  },
  {
    slug: "subnautica",
    title: "Subnautica",
    tagline:
      "A survival game where the ocean is beautiful, alien, and very interested in your submarine.",
    genres: ["Survival", "Open-world", "Underwater", "Crafting"],
    developer: "Unknown Worlds Entertainment",
    publisher: "Unknown Worlds Entertainment",
    releaseDate: "2018-01-23",
    releaseYear: 2018,
    platforms: [
      "PC",
      "macOS",
      "PS5",
      "Xbox Series X|S",
      "PS4",
      "Xbox One",
      "Nintendo Switch",
    ],
    modes: ["Single-player"],
    coverImage: "/images/games/subnautica/cover.jpg",
    coverAlt: "Official cover art for Subnautica",
    heroImage: "/images/games/subnautica/hero.jpg",
    heroAlt:
      "A diver swims beside a small submarine above a coral reef in Subnautica",
    screenshots: [
      {
        src: "/images/games/subnautica/screenshot-01.jpg",
        alt: "A diver approaches a lifepod above a colorful coral reef in Subnautica",
      },
      {
        src: "/images/games/subnautica/screenshot-02.jpg",
        alt: "A submersible passes a glowing lava vent in an underwater cave in Subnautica",
      },
      {
        src: "/images/games/subnautica/screenshot-03.jpg",
        alt: "An underwater habitat with glowing windows sits on the seafloor in Subnautica",
      },
      {
        src: "/images/games/subnautica/screenshot-04.jpg",
        alt: "A massive leviathan looms in dark water in Subnautica",
      },
      {
        src: "/images/games/subnautica/screenshot-05.jpg",
        alt: "A diver explores a kelp forest with a seaglide in Subnautica",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots from Unknown Worlds Entertainment. Used for identification and commentary.",
    imageSourceUrl: "https://store.steampowered.com/app/264710/Subnautica/",
    accent: "#2FB7C8",
    description:
      "Unknown Worlds' underwater survival game strands you on an alien ocean planet with scavenged tools, limited oxygen, and creatures that are much larger than you.",
    overview: [
      "Subnautica begins with a crash. The player escapes a damaged ship in a lifepod and surfaces on planet 4546B, an ocean world with coral reefs, kelp forests, caves, and much deeper biomes. Survival depends on oxygen, food, water, and the nerve to leave the safe shallows.",
      "Progress comes from scanning fragments, crafting tools, and building habitats and vehicles that extend your range. There is no conventional gun-based combat loop. Avoidance, distraction, and knowing when to retreat are the real defensive skills. The story emerges through radio messages, abandoned bases, and alien structures rather than a mission marker.",
    ],
    funFact:
      "Subnautica deliberately gives the player very few weapons. The scanner, habitat builder, Seaglide, and vehicles are the main tools, which pushes exploration and evasion ahead of combat.",
    tags: [
      "survival",
      "ocean",
      "4546b",
      "leviathan",
      "crafting",
      "exploration",
      "unknown worlds",
    ],
    featured: true,
    popularity: 91,
    relatedGames: ["starfield", "minecraft", "bioshock-remastered"],
  },
  {
    slug: "fallout-4",
    title: "Fallout 4",
    tagline:
      "A ruined Commonwealth, a customizable survivor, and a hundred reasons to check one more building.",
    genres: ["Open-world RPG", "Post-apocalyptic", "First-person"],
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    releaseDate: "2015-11-10",
    releaseYear: 2015,
    platforms: ["PC", "PS5", "Xbox Series X|S", "PS4", "Xbox One"],
    modes: ["Single-player"],
    coverImage: "/images/games/fallout-4/cover.jpg",
    coverAlt: "Official cover art for Fallout 4",
    heroImage: "/images/games/fallout-4/hero.jpg",
    heroAlt:
      "The Sole Survivor and Dogmeat look toward the ruined Boston skyline from a wasteland road in Fallout 4",
    screenshots: [
      {
        src: "/images/games/fallout-4/screenshot-01.jpg",
        alt: "The Sole Survivor and Dogmeat stand on a ruined road outside Boston in Fallout 4",
      },
      {
        src: "/images/games/fallout-4/screenshot-02.jpg",
        alt: "A lone figure walks through a neon-lit market street at night in Fallout 4",
      },
      {
        src: "/images/games/fallout-4/screenshot-03.jpg",
        alt: "The circular metal door of Vault 111 in Fallout 4",
      },
      {
        src: "/images/games/fallout-4/screenshot-04.jpg",
        alt: "Sunlight breaks through a collapsed highway overpass onto overgrown ruins in Fallout 4",
      },
      {
        src: "/images/games/fallout-4/screenshot-05.jpg",
        alt: "A power-armored figure stands in a dusty wasteland under a hazy sky in Fallout 4",
      },
    ],
    imageCredit:
      "Official Steam store artwork and screenshots © Bethesda Softworks. Used for identification and commentary.",
    imageSourceUrl: "https://store.steampowered.com/app/377160/Fallout_4/",
    accent: "#B7D34B",
    description:
      "Bethesda's post-apocalyptic RPG turns the ruins of Boston into a dense open world of settlements, factions, crafting, and running firefights.",
    overview: [
      "Fallout 4 begins before the bombs fall and then wakes the player in a ruined Commonwealth. The game pairs first-person exploration with a flexible SPECIAL and perk system, so a character can lean into rifles, stealth, melee, energy weapons, or settlement construction without being locked into a class.",
      "The Commonwealth is built around overlapping loops: clear a location, haul useful junk home, improve a weapon or settlement, and follow a signal toward the next story beat. The main quest gives direction, but the best early progress often comes from exploring locally and building a reliable set of tools before chasing the next objective.",
    ],
    funFact:
      "Fallout 4's Commonwealth is a compressed version of Boston and its surroundings. Landmarks such as the Old State House, the Zakim Bridge, and Fenway Park are recognizable even after the wasteland has moved in.",
    tags: [
      "post-apocalyptic",
      "commonwealth",
      "boston",
      "open world",
      "settlements",
      "vats",
      "bethesda",
    ],
    featured: true,
    popularity: 94,
    relatedGames: [
      "the-elder-scrolls-v-skyrim",
      "fallout-new-vegas",
      "starfield",
    ],
  },
];
