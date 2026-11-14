import type { Guide } from "@/types";
import { siteConfig } from "@/lib/site";

const EDITOR = siteConfig.author;

export const guides: Guide[] = [
  {
    slug: "cyberpunk-2077-first-ten-hours",
    title: "Cyberpunk 2077 for New Players: The First Ten Hours",
    gameSlug: "cyberpunk-2077",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A spoiler-light route through the opening hours: choose a combat identity, avoid side-job overload, and build an early routine that keeps your character useful.",
    intro:
      "Cyberpunk 2077 front-loads a lot of systems: attributes, perks, cyberware, crafting, hacking, and a map full of icons. The opening hours are easier if you treat them as a series of small decisions instead of trying to learn everything at once. This guide stays away from major story events and focuses on the first ten hours of play.",
    updatedAt: "2026-10-24",
    author: EDITOR,
    sections: [
      {
        id: "pick-a-combat-identity",
        heading: "Pick a combat identity, then commit",
        paragraphs: [
          "Your lifepath changes the opening sequence and adds dialogue options, but it does not lock you into a class. The real identity comes from the weapons and cyberware you use. Before leaving the early story behind, decide whether you want to solve problems at range, in melee, or through stealth and quickhacks.",
          "A focused build is easier to read in combat. You do not need a perfect plan, but you should know which attribute family you are investing in and why.",
        ],
        bullets: [
          "Body supports durability, melee, and heavier weapon options.",
          "Reflexes supports mobility, blades, and many gun-focused perks.",
          "Technical Ability opens up crafting, tech weapons, and cyberware capacity options.",
          "Intelligence supports quickhacks and netrunning.",
          "Cool supports stealth, throwing weapons, and precision options.",
        ],
        callout: {
          type: "tip",
          title: "Use one weapon family as your default",
          body: "Carry a backup for emergencies, but spend your early upgrades on the tool you use most. A build that does one thing well usually feels better than a build that carries five half-supported ideas.",
        },
      },
      {
        id: "follow-the-main-thread",
        heading: "Follow the main thread until the city opens up",
        paragraphs: [
          "The early main story acts as the game's tutorial. It introduces the major characters, teaches you how combat encounters are paced, and opens the wider job board. If you immediately chase every icon on the map, you can end up under-leveled for the encounters the story expects you to handle.",
          "Once the world opens, side jobs become the best way to level and find gear. Pick one district, do a handful of local gigs, and then move on. Treat the map as a menu, not a checklist you owe completion.",
        ],
        callout: {
          type: "note",
          title: "Spoiler-light by design",
          body: "This guide intentionally avoids naming story beats, endings, or major character outcomes. The goal is to help you start playing, not to pre-chew the narrative.",
        },
      },
      {
        id: "build-an-early-routine",
        heading: "Build a reliable early routine",
        paragraphs: [
          "A small routine keeps your character from falling behind. After a few jobs, check your cyberware, spend perk points, and make sure your main weapon is upgraded or replaced. Sell or disassemble gear you are not using instead of carrying it forever.",
          "Visit ripperdocs when you can afford a meaningful upgrade. Cyberware is not a cosmetic extra; it is part of how your build functions. Read the requirements carefully, because some options demand a specific attribute score.",
        ],
        bullets: [
          "Check your main weapon and armor after every two or three jobs.",
          "Spend perk points in the tree that matches your main weapon or ability.",
          "Keep a small stock of healing items before starting a story mission.",
          "Read shards and messages when they are nearby; they add context without interrupting play.",
        ],
        callout: {
          type: "warning",
          title: "Older builds may not apply",
          body: "Cyberpunk 2077 changed significantly in the 2.0 era. Guides that predate those changes can describe removed systems or outdated perk trees. Check the date on any build guide before copying it.",
        },
      },
    ],
    tags: ["beginner", "first hours", "attributes", "cyberware", "night city"],
    featured: true,
  },
  {
    slug: "cyberpunk-2077-build-planning",
    title: "Cyberpunk 2077 Build Planning: Attributes, Perks, and Cyberware",
    gameSlug: "cyberpunk-2077",
    category: "Build Guide",
    level: "Intermediate",
    excerpt:
      "How to plan a build around a combat loop, when to invest attribute points, and why cyberware should be part of the plan from the start.",
    intro:
      "A Cyberpunk 2077 build is not just a list of perks. It is a combat loop supported by attributes, cyberware, weapons, and the encounter design you enjoy. This guide explains how the pieces fit together without prescribing a single meta build.",
    updatedAt: "2026-10-02",
    author: EDITOR,
    sections: [
      {
        id: "start-with-a-fantasy",
        heading: "Start with a fantasy, not a spreadsheet",
        paragraphs: [
          "Decide how you want fights to feel. Do you want to enter a room unseen, disable cameras, and finish one target before anyone notices? Do you want to walk in with a shotgun and a sandevistan? Do you want to control the battlefield with quickhacks while your companions do the shooting?",
          "Once you have that fantasy, choose the two or three systems that make it work. A stealth netrunner needs different attributes than a close-range brawler, and the gear that supports one may be useless to the other.",
        ],
        callout: {
          type: "tip",
          title: "Build for the 80 percent case",
          body: "Most encounters involve moving through a space, dealing with several enemies, and recovering afterward. Optimize for that loop rather than a perfect single-target burst.",
        },
      },
      {
        id: "attributes-are-the-foundation",
        heading: "Attributes are the foundation; perks are the adjustments",
        paragraphs: [
          "Attributes gate perks, cyberware, and some dialogue options. They are the least flexible part of a build, so treat each point as a commitment. Check the requirements of the perks and cyberware you actually want before spreading points across every category.",
          "Perks refine a build once the foundation is in place. If you are unsure, spend points in the tree that supports the weapon or ability you are already using. You can adjust perks more easily than you can rebuild your attribute spread.",
        ],
        bullets: [
          "Choose a primary combat attribute and a secondary support attribute.",
          "Do not invest in a category only for one situational dialogue option.",
          "Check cyberware requirements before committing to a new attribute threshold.",
          "Leave room for a utility attribute if you rely on crafting or stealth.",
        ],
      },
      {
        id: "cyberware-is-part-of-the-build",
        heading: "Cyberware is part of the build",
        paragraphs: [
          "Cyberware affects armor, mobility, hacking, and survivability. It is not a late-game bonus you add after the build is finished. Plan visits to ripperdocs alongside weapon upgrades, and treat cyberware capacity as a resource to manage.",
          "The best setup depends on your difficulty and play style. A defensive build may value mitigation and healing, while a stealth build may prefer movement and detection tools. Read the descriptions carefully and test changes in a low-stakes encounter before taking them into a story mission.",
        ],
        callout: {
          type: "warning",
          title: "Avoid copying a build blindly",
          body: "A build video recorded before a major update may not reflect the current game. Use guides for principles and verify the specific numbers in your own version.",
        },
      },
      {
        id: "test-and-iterate",
        heading: "Test, then iterate",
        paragraphs: [
          "A build is not finished when the last perk point is spent. Take it into a district with ordinary enemies and see how it handles groups, cover, and unexpected angles. If one part of the loop feels unreliable, fix that part before adding another system.",
          "Keep a save before expensive respecs or gear purchases. The goal is a character you understand, not a screenshot of someone else's optimized setup.",
        ],
      },
    ],
    tags: ["build", "attributes", "perks", "cyberware", "theorycraft"],
    featured: false,
  },
  {
    slug: "elden-ring-limgrave-beginner",
    title: "Elden Ring Beginner's Guide: Surviving Limgrave",
    gameSlug: "elden-ring",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A practical start for new Tarnished: find your bearings, upgrade the right things, and learn when exploration is the answer to a difficult fight.",
    intro:
      "Elden Ring does not explain much, and that is part of the design. The opening region, Limgrave, is generous with options but easy to wander through unprepared. This guide focuses on the habits that make the first ten hours smoother, not on a fixed route.",
    updatedAt: "2026-11-02",
    author: EDITOR,
    sections: [
      {
        id: "follow-grace-and-talk",
        heading: "Follow the grace and talk to people",
        paragraphs: [
          "Sites of Grace are not just checkpoints. They give you a direction to investigate, and the first few lead you toward essential setup: your map, your horse, and the Roundtable Hold. Light them as you find them, rest when you need to, and read the prompts.",
          "NPCs in the opening area are worth talking to more than once. Some give you tools, some explain mechanics, and some simply point toward a cave or ruin that suits your level. You do not need to memorize their dialogue; just exhaust the conversation until they repeat themselves.",
        ],
        callout: {
          type: "tip",
          title: "Use the map fragments",
          body: "Map fragments reveal the shape of a region and its roads. They do not mark every secret, but they make it much easier to choose a direction and return to a landmark later.",
        },
      },
      {
        id: "upgrade-the-weapon-first",
        heading: "Upgrade your weapon before your character",
        paragraphs: [
          "Weapon upgrades are often a bigger power spike than a few levels. Smithing stones are found in tunnels, mines, and from certain enemies, and a smithing table lets you spend them. Once you reach the Roundtable Hold, you have a reliable place to upgrade.",
          "Pick a weapon whose moveset you enjoy and upgrade it as far as your stones allow. A familiar weapon at a higher level is usually better than a new weapon you have not practiced with.",
        ],
        bullets: [
          "Prioritize upgrades for your main weapon over spreading stones across several sidearms.",
          "Smithing stones have tiers; check what your next upgrade actually requires.",
          "Keep an eye out for tunnels and mines while exploring.",
          "Do not ignore shields or guard counters if you prefer a defensive style.",
        ],
      },
      {
        id: "explore-the-peninsula",
        heading: "Explore Limgrave and the Weeping Peninsula",
        paragraphs: [
          "The Weeping Peninsula to the south is a common early detour for good reason. It offers additional sites, churches, tunnels, and upgrade materials without demanding that you clear the first major legacy dungeon. Treat it as a place to build confidence and resources.",
          "Churches often contain Sacred Tears, and Golden Seeds appear near specific trees. These items improve your flask, which quietly makes every fight more forgiving. If a boss feels like a wall, improving your healing and your weapon is often more useful than grinding levels.",
        ],
        callout: {
          type: "note",
          title: "There is no wrong direction",
          body: "If an area feels too dangerous, leave. Elden Ring's open field is designed to let you find a different route, a new tool, or a few more upgrades before returning.",
        },
      },
      {
        id: "fight-with-patience",
        heading: "Fight with patience",
        paragraphs: [
          "Combat is about observing the enemy's pattern before trying to win the damage race. Roll through attacks rather than away from them when possible, and punish after the enemy's combo ends. Jump attacks are useful for breaking posture, and guard counters reward a shield-heavy approach.",
          "When you unlock Spirit Ashes, use them. They are not a difficulty cheat; the game expects you to use the tools it gives you. Summoning help or using a spirit does not make your victory less valid.",
        ],
        callout: {
          type: "tip",
          title: "Spend your runes",
          body: "Runes are only useful when spent. Level up or upgrade gear before entering a dangerous area, and accept that losing a rune pile is part of the learning process.",
        },
      },
    ],
    tags: ["beginner", "limgrave", "weeping peninsula", "upgrades", "combat"],
    featured: true,
  },
  {
    slug: "elden-ring-margit-boss-strategy",
    title: "Margit the Fell Omen: A Boss Strategy for New Players",
    gameSlug: "elden-ring",
    category: "Boss Strategy",
    level: "Intermediate",
    excerpt:
      "How to prepare for Margit, read his delayed attacks, and recognize when exploration is a better answer than another attempt.",
    intro:
      "Margit is the first major skill check for many players. He punishes panic rolling, rewards patience, and has enough delayed attacks to make the fight feel unfair until his rhythm clicks. This guide covers preparation and the habits that make the fight manageable.",
    updatedAt: "2026-10-18",
    author: EDITOR,
    sections: [
      {
        id: "prepare-before-the-gate",
        heading: "Prepare before the gate",
        paragraphs: [
          "Before walking into the fog, make sure your main weapon is upgraded, your flask is as strong as you can reasonably make it, and you have enough Vigor to survive a mistake. A few extra points in health can turn a two-hit death into a fight you can learn from.",
          "Spirit Ashes are a legitimate part of the fight. If you have the Spirit Calling Bell, bring a summon that fits your build. Summon signs outside the gate can also bring in another player, and NPC summons may be available depending on your progress and quests.",
        ],
        bullets: [
          "Upgrade your main weapon at a smithing table.",
          "Improve your flask with Golden Seeds and Sacred Tears when possible.",
          "Bring a Spirit Ash that draws aggro or adds consistent damage.",
          "Consider Margit's Shackle if you find the merchant who sells it; it can interrupt some of his attacks.",
        ],
      },
      {
        id: "read-the-rhythm",
        heading: "Read the rhythm, not the swing",
        paragraphs: [
          "Margit's attacks are deliberately delayed. The wind-up is not the moment to roll; the swing is. Watch his weapon and body rather than trying to react to the first frame of movement. When he pauses, he is usually baiting an early dodge.",
          "Stay close enough to punish the end of his combos, but not so close that you cannot see the next swing. After a long combo, you usually have time for one or two hits, not a full damage rotation. Greed is the most common way to lose this fight.",
        ],
        callout: {
          type: "tip",
          title: "Count the combo out loud",
          body: "If you are struggling, say the hits out loud as they land. It sounds strange, but it helps you stop reacting to the wind-up and start reacting to the actual attack.",
        },
      },
      {
        id: "use-the-arena",
        heading: "Use the arena",
        paragraphs: [
          "The bridge is narrow and the edges matter. Backing up without a plan can pin you against the wall or push you off. Try to circle into open space instead of retreating in a straight line.",
          "If Margit raises his hammer for a large overhead attack, moving to the side is often more reliable than rolling backward. Learn one or two safe responses rather than trying to memorize every animation at once.",
        ],
      },
      {
        id: "change-the-plan",
        heading: "If you are stuck, change the plan",
        paragraphs: [
          "Margit is not a mandatory wall at the exact moment you first find him. Explore Limgrave and the Weeping Peninsula, upgrade your weapon, improve your flask, and come back with more resources. The game expects detours.",
          "You can also try a different damage type, use consumables, or summon help. The fight is a tutorial in resource management as much as it is a test of reflexes. If one approach is not working, do not repeat it out of pride.",
        ],
        callout: {
          type: "note",
          title: "No story spoilers",
          body: "This entry focuses on combat mechanics. It does not discuss Margit's role in the wider story or the outcomes of related quests.",
        },
      },
    ],
    tags: ["boss", "margit", "limgrave", "combat", "spirit ashes"],
    featured: false,
  },
  {
    slug: "witcher-3-white-orchard-start",
    title: "The Witcher 3: A Spoiler-Light Start in White Orchard",
    gameSlug: "the-witcher-3",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "Learn the systems, collect what matters, and leave the opening region prepared for the much larger map ahead.",
    intro:
      "White Orchard is a compact tutorial region that teaches almost everything The Witcher 3 expects you to know. It is tempting to rush toward the main quest, but a little patience here makes the rest of the game smoother. This guide avoids major story details.",
    updatedAt: "2026-09-30",
    author: EDITOR,
    sections: [
      {
        id: "loot-with-a-purpose",
        heading: "Loot with a purpose",
        paragraphs: [
          "The Witcher 3 throws a lot of loot at you, and carrying all of it is a quick way to become overburdened. Pick up crafting materials, alchemy ingredients, and equipment you can sell, but do not feel obliged to collect every broken rake in the region.",
          "Merchants pay different prices, and some items are worth keeping for crafting. Use your stash when you reach a major hub, and sell what you are not using. A lighter inventory makes exploration more enjoyable.",
        ],
        callout: {
          type: "tip",
          title: "Witcher senses are a reading tool",
          body: "Use them to find tracks, clues, and hidden objects, but also pay attention to the environment. The game often tells you where to look before the glowing trail appears.",
        },
      },
      {
        id: "do-the-local-quests",
        heading: "Do the local side quests",
        paragraphs: [
          "White Orchard's side content introduces meditation, Gwent, places of power, and the consequences of small choices. The contracts and conversations here are short, and they give you a feel for how the game writes its world.",
          "Places of power grant a skill point, so they are worth visiting when you are nearby. Gwent is optional, but learning the basics early makes it easier to enjoy the card game later if you choose to pursue it.",
        ],
        bullets: [
          "Visit places of power for skill points.",
          "Try the local Gwent tutorial if you want to learn the card game.",
          "Check notice boards for contracts and local leads.",
          "Meditate to pass time and refill alchemy charges when you have alcohol in your inventory.",
        ],
      },
      {
        id: "learn-preparation",
        heading: "Learn preparation",
        paragraphs: [
          "Potions, oils, and signs matter more on higher difficulties, but the habit is worth building early. Read the bestiary entry for a monster, apply the right oil, and use signs that match the situation rather than spamming one ability.",
          "You do not need to craft every potion before leaving the opening region. Learn what a few core items do, keep your equipment repaired, and experiment with the combat signs.",
        ],
        callout: {
          type: "note",
          title: "Difficulty changes the math",
          body: "On easier difficulties you can brute-force many encounters. On harder settings, preparation is essential. The guide stays useful either way because it focuses on habits rather than exact numbers.",
        },
      },
      {
        id: "dont-rush-velen",
        heading: "Don't rush toward the next region",
        paragraphs: [
          "It is fine to move on when White Orchard starts to feel repetitive. Just make sure you have a basic understanding of crafting, alchemy, and combat before the map expands. The next region is much larger and less forgiving.",
          "If you are unsure whether you missed something, check the quest log and the notice board. The game does a reasonable job of keeping optional content visible without forcing it on you.",
        ],
      },
    ],
    tags: ["beginner", "white orchard", "gwent", "alchemy", "early game"],
    featured: true,
  },
  {
    slug: "witcher-3-witcher-gear",
    title: "Witcher Gear, Crafting, and Preparation",
    gameSlug: "the-witcher-3",
    category: "Weapons & Equipment",
    level: "All levels",
    excerpt:
      "Why witcher school sets are worth the scavenger hunt, how crafting tiers work, and how to support a set with oils and skills.",
    intro:
      "The Witcher 3 has plenty of loot, but the crafted witcher sets remain some of the most reliable equipment in the game. They reward exploration, support distinct playstyles, and can be upgraded as you level. This guide explains the system without turning it into a shopping list.",
    updatedAt: "2026-09-12",
    author: EDITOR,
    sections: [
      {
        id: "why-witcher-gear",
        heading: "Why witcher gear matters",
        paragraphs: [
          "Witcher gear comes in sets with set bonuses and can be upgraded through multiple tiers. Unlike random swords and armor, the sets are designed around specific approaches: light attacks, signs, heavy armor, or a hybrid style. That makes them a useful framework for a build.",
          "Each set begins with diagrams found through scavenger hunts. Merchants sell maps that start these quests, and the diagrams themselves are hidden in marked locations. Once you have the diagrams and the required crafting materials, a blacksmith or armorer can craft the gear.",
        ],
        callout: {
          type: "tip",
          title: "Find the maps early",
          body: "Buying the scavenger hunt maps from merchants gives you named quests and markers. It is much easier than wandering the map hoping to stumble onto a diagram.",
        },
      },
      {
        id: "schools-and-styles",
        heading: "Know the schools and their styles",
        paragraphs: [
          "The Cat school favors light armor and fast attacks. Griffin emphasizes signs, Bear favors heavy armor and strong attacks, and Wolf is a flexible middle ground. The Blood and Wine expansion adds another set with its own identity.",
          "You do not need to collect every set. Choose the one that matches your build, then decide whether a second set is worth the inventory space. Mixing pieces can work, but you lose the full set bonus.",
        ],
        bullets: [
          "Cat: light armor, mobility, and fast swordplay.",
          "Griffin: sign intensity and a more technical playstyle.",
          "Bear: heavy armor, durability, and strong attacks.",
          "Wolf: a balanced set for hybrid builds.",
        ],
      },
      {
        id: "crafting-tiers",
        heading: "Crafting tiers and upgrading",
        paragraphs: [
          "Witcher gear is upgraded by crafting the next tier, which usually requires the previous piece plus additional components. This means a set you craft early can remain relevant later if you keep upgrading it.",
          "Do not panic if you cannot craft the highest tier immediately. Gather diagrams, collect materials as you explore, and upgrade when you meet the level requirement. A lower-tier set with good oils and skills is still effective.",
        ],
        callout: {
          type: "warning",
          title: "Check the required level",
          body: "Crafting a set above your level is possible, but you will not be able to equip it yet. Check the level requirement before spending rare materials.",
        },
      },
      {
        id: "support-your-set",
        heading: "Support the set with oils, signs, and skills",
        paragraphs: [
          "Gear is only one part of preparation. Apply the correct sword oil before a fight, keep repair kits on hand, and choose skills that reinforce the set's strengths. A Griffin build that never uses signs is leaving value on the table.",
          "Experiment with a few abilities before committing to a full respec. The game is generous enough that a coherent build matters more than a mathematically perfect one.",
        ],
      },
    ],
    tags: ["witcher gear", "crafting", "equipment", "oils", "scavenger hunt"],
    featured: false,
  },
  {
    slug: "witcher-3-bloody-baron-quest",
    title: "The Bloody Baron Quest: Choices, Consequences, and Content Notes",
    gameSlug: "the-witcher-3",
    category: "Quest Guide",
    level: "Intermediate",
    excerpt:
      "A careful guide to one of the game's most discussed questlines, including the Whispering Hillock decision and its consequences. Contains major spoilers.",
    intro:
      "The Bloody Baron questline is one of The Witcher 3's most memorable stories, and one of its heaviest. It deals with domestic abuse, grief, and a family falling apart, and it asks the player to make decisions without a clean moral answer. This guide contains major spoilers for the quest.",
    updatedAt: "2026-08-28",
    author: EDITOR,
    sections: [
      {
        id: "content-note",
        heading: "Content note before you start",
        paragraphs: [
          "This questline includes domestic violence, alcoholism, and the loss of a child. The game does not treat these themes lightly, but they are present throughout the Baron's story. If you are not in the mood for that subject matter, it is reasonable to postpone the quest or play a different part of the game.",
          "The guide below is written for players who have already met the Baron or do not mind being spoiled on the structure of the quest.",
        ],
        callout: {
          type: "warning",
          title: "Major spoilers ahead",
          body: "This section discusses the story's central decision and its outcomes. If you want to experience the quest blind, stop reading after this note.",
        },
      },
      {
        id: "investigation",
        heading: "The investigation",
        paragraphs: [
          "The quest begins as an investigation into the Baron's missing family. Use your witcher senses, talk to the people around the keep, and follow the leads rather than rushing toward the next marker. The quest is more rewarding when you let the conversations breathe.",
          "You will eventually learn about the Baron's wife and daughter, the family's history, and the supernatural force tied to the nearby marsh. The game is careful about revealing information in stages, so pay attention to names and locations.",
        ],
        callout: {
          type: "tip",
          title: "Explore the keep",
          body: "There are optional conversations and details inside the Baron's keep that add context to the main story. Take a moment to look around before leaving for the marsh.",
        },
      },
      {
        id: "whispering-hillock",
        heading: "The Whispering Hillock decision",
        paragraphs: [
          "The central choice involves the spirit in the Whispering Hillock. One path releases the spirit, while the other destroys it. Both paths change what happens to the Baron's family and the people connected to the marsh, and neither produces a perfect outcome.",
          "Releasing the spirit can save some lives but leads to other losses. Destroying the spirit leads to a different kind of tragedy. The game frames these as competing obligations rather than a puzzle with a correct solution.",
        ],
        bullets: [
          "Choose based on what your Geralt values, not on the promise of a flawless ending.",
          "Talk to the characters involved before committing if you want the fullest context.",
          "Consider making a manual save before the final decision so you can see the other branch later.",
        ],
        callout: {
          type: "spoiler",
          title: "No perfect answer",
          body: "The quest is designed to leave a mark. If you are aiming for a specific character outcome, look up the detailed prerequisites for that branch before deciding.",
        },
      },
      {
        id: "aftermath",
        heading: "After the decision",
        paragraphs: [
          "The aftermath changes depending on what you chose. The Baron's story continues in later conversations, and the state of his family affects how the quest concludes. Some outcomes are harder to witness than others.",
          "There is no way to undo the choice without reloading an earlier save. If you are playing for the first time, let the consequences stand. The Witcher 3 is at its best when the world remembers what you did.",
        ],
      },
    ],
    tags: ["quest guide", "bloody baron", "whispering hillock", "choices", "spoilers"],
    featured: false,
  },
  {
    slug: "baldurs-gate-3-act-one-primer",
    title: "Baldur's Gate 3: An Act 1 Systems Primer",
    gameSlug: "baldurs-gate-3",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A spoiler-light explanation of action economy, rests, concentration, and the habits that make the first act less overwhelming.",
    intro:
      "Baldur's Gate 3 is dense, but its combat follows a readable set of rules. Once you understand the action economy and how rests work, the first act becomes much less intimidating. This primer avoids story outcomes and focuses on systems.",
    updatedAt: "2026-10-30",
    author: EDITOR,
    sections: [
      {
        id: "action-economy",
        heading: "The action economy is the whole game",
        paragraphs: [
          "Each turn gives a character movement, an action, and often a bonus action. The goal is to use all three without wasting them. A character who moves into position, attacks, and then uses a bonus action to shove or drink a potion is contributing more than one who only attacks.",
          "Actions are not just attacks. Dash, disengage, hide, help, and cast a spell all compete for the same resource. Think about what the party needs this turn rather than what each character can do in isolation.",
        ],
        bullets: [
          "Use bonus actions for potions, shoves, and quick spells.",
          "Dash when movement is the bottleneck; do not walk through enemy reach for free.",
          "Help a downed ally before chasing a kill.",
          "Position ranged characters on high ground when the map allows it.",
        ],
      },
      {
        id: "rests",
        heading: "Rest is a resource",
        paragraphs: [
          "Short rests restore some resources without consuming camp supplies. Long rests restore more and advance some quests. You can typically take two short rests between long rests, so use them before burning spell slots on trivial fights.",
          "Long resting is not a failure state. The game expects you to rest, and companion conversations often happen at camp. If you are constantly out of spell slots, you are probably fighting too many encounters without resting.",
        ],
        callout: {
          type: "tip",
          title: "Loot the camp supplies",
          body: "Food and drink are rest resources. Pick them up when you see them, and check your camp storage before a long rest.",
        },
      },
      {
        id: "concentration",
        heading: "Concentration is a limited resource",
        paragraphs: [
          "Many powerful spells require concentration, and a character can only concentrate on one at a time. Casting another concentration spell ends the first. This is why a party with several casters needs a plan, not just a pile of strong spells.",
          "If a concentrating character takes damage, they may lose the spell. Position them away from the front line, use cover, and consider whether a concentration spell is worth the risk in a particular fight.",
        ],
      },
      {
        id: "fail-forward",
        heading: "Let failures become story",
        paragraphs: [
          "Baldur's Gate 3 is built to handle failed checks and unexpected outcomes. A failed persuasion attempt usually opens a different path rather than ending the quest. Reloading every failed roll can make the game feel smaller and more brittle than it is.",
          "Save before major decisions if you want to explore alternatives, but try playing through at least some failures. The companions react, the world adjusts, and the story becomes more yours.",
        ],
        callout: {
          type: "note",
          title: "No spoilers in this primer",
          body: "This guide explains mechanics only. It does not describe companion story arcs, act transitions, or quest outcomes.",
        },
      },
    ],
    tags: ["beginner", "turn based", "action economy", "rests", "concentration"],
    featured: true,
  },
  {
    slug: "baldurs-gate-3-party-composition",
    title: "Baldur's Gate 3 Party Composition and Tactical Basics",
    gameSlug: "baldurs-gate-3",
    category: "Tips & Tricks",
    level: "Intermediate",
    excerpt:
      "How to build a party that covers roles, manages concentration, and handles combat when the dice turn against you.",
    intro:
      "A Baldur's Gate 3 party does not need to be optimized, but it should be able to handle more than one kind of problem. This guide covers the roles worth covering and the tactical habits that make encounters easier without relying on a specific companion.",
    updatedAt: "2026-10-09",
    author: EDITOR,
    sections: [
      {
        id: "cover-roles",
        heading: "Cover roles, not just damage",
        paragraphs: [
          "Damage is useful, but a party that only deals damage struggles when enemies control the battlefield. Try to cover a front-line character who can take hits, a ranged damage dealer, a controller who can limit enemy actions, and a support character who can heal or enable the others.",
          "The roles can overlap. A paladin can be both front line and support, and a bard can control the battlefield while also handling conversation. The point is to know which problems your party can solve.",
        ],
        bullets: [
          "Front line: high armor class, crowd control, or durability.",
          "Ranged damage: consistent output from safety.",
          "Control: spells or abilities that limit enemy turns.",
          "Support: healing, buffs, and resource recovery.",
        ],
      },
      {
        id: "concentration-plan",
        heading: "Have a concentration plan",
        paragraphs: [
          "Before a fight, decide which concentration spell is worth maintaining. A control spell that shuts down several enemies is often more valuable than a damage-over-time spell that breaks after one hit.",
          "Keep concentrating characters out of enemy reach. Use terrain, cover, and positioning to make it expensive for enemies to break concentration. If a spell is no longer useful, drop it and cast something else.",
        ],
        callout: {
          type: "tip",
          title: "High ground is not just for damage",
          body: "Ranged characters on high ground are harder to reach and have better lines of sight. Use ladders, ledges, and platforms before the fight starts.",
        },
      },
      {
        id: "gear-and-respec",
        heading: "Build around gear and companions",
        paragraphs: [
          "A class is a starting point, not a life sentence. If a companion is not fitting your party, consider changing their subclass or build. The goal is a group that works together, not a collection of individually optimized characters.",
          "Multiclassing can be powerful, but it delays access to higher-level features. If you are new, stick with a single class until you understand how its action economy works. You can always experiment on a later run.",
        ],
        callout: {
          type: "warning",
          title: "Respect the action economy",
          body: "A multiclass build that looks strong on paper can feel clunky if it delays the abilities that make the class work. Test it in a few fights before committing to a full playthrough.",
        },
      },
      {
        id: "coop-etiquette",
        heading: "Co-op etiquette",
        paragraphs: [
          "In multiplayer, not every player can be the main character in every conversation. Decide who will handle dialogue in a given area, or let the person who initiated the scene take the lead. Combat works best when players agree on roles before the first turn.",
          "If one player wants to explore and another wants to push the story, communicate. The game is flexible, but it is not always good at waiting for everyone to finish reading.",
        ],
      },
    ],
    tags: ["party", "tactics", "concentration", "co-op", "builds"],
    featured: false,
  },
  {
    slug: "baldurs-gate-3-act-one-quest-order",
    title: "Baldur's Gate 3: A Spoiler-Light Act 1 Route",
    gameSlug: "baldurs-gate-3",
    category: "Walkthrough",
    level: "Intermediate",
    excerpt:
      "A broad route through the first act that helps you see the major areas without getting locked out of content or rushing the story.",
    intro:
      "Act 1 is wide, and some choices resolve when you move between major areas. This route is not a checklist of every encounter; it is a structure for seeing the major hubs before committing to a direction. It avoids major story outcomes.",
    updatedAt: "2026-09-21",
    author: EDITOR,
    sections: [
      {
        id: "explore-before-commit",
        heading: "Explore before you commit",
        paragraphs: [
          "When you reach a new hub, talk to the people, check the shops, and look for side quests before following the main objective. Several quests change state when you enter a new region or resolve a major conflict, and some companions have content that is easier to see early.",
          "Long rest regularly. Companion scenes often trigger at camp, and you can miss relationship content if you push forward without resting. You do not need to rest after every fight, but do not hoard camp supplies forever.",
        ],
        callout: {
          type: "note",
          title: "Spoiler-light route",
          body: "This guide names regions and broad objectives but avoids specific story outcomes, companion reveals, and ending details.",
        },
      },
      {
        id: "the-grove-and-the-camp",
        heading: "The grove and the goblin camp",
        paragraphs: [
          "The first major conflict involves a druid grove, a group of tiefling refugees, and a goblin camp. There are several ways to investigate and resolve the situation, including conversation, stealth, and open combat. Explore both sides before choosing a path.",
          "You do not need to resolve this conflict immediately. Doing nearby side content first gives you levels, gear, and context. Just be aware that some quests advance when the conflict is resolved.",
        ],
        bullets: [
          "Talk to the leaders on both sides before committing to violence.",
          "Look for non-combat solutions; the game supports them.",
          "Check the surrounding area for side quests before the main assault.",
          "Save before a major confrontation if you want to explore alternatives.",
        ],
      },
      {
        id: "underdark-and-mountain-pass",
        heading: "The Underdark and the mountain pass",
        paragraphs: [
          "Act 1 offers more than one route toward the next major region. The Underdark is a large underground area with its own factions, while the mountain pass leads through a different set of encounters. You can explore both before moving on, but entering the Shadow-Cursed Lands advances the story.",
          "If you are a completionist, clear the surface quests you care about before entering the next act. Some quests resolve or become unavailable once you cross that threshold.",
        ],
        callout: {
          type: "warning",
          title: "Watch for act transitions",
          body: "The game usually warns you before a major transition, but not every quest is equally flexible. Keep a save before entering a new region if you want to return for missed content.",
        },
      },
      {
        id: "checklist-not-script",
        heading: "Use a checklist, not a script",
        paragraphs: [
          "The best route is the one that respects your party's level and your interest in the content. If an area feels too difficult, explore somewhere else. If a quest is dragging, move on and come back later.",
          "A broad checklist of regions is more useful than a step-by-step script because the game reacts to so many variables. The goal is to see the content you care about, not to complete every possible branch in one run.",
        ],
      },
    ],
    tags: ["walkthrough", "act 1", "quest order", "underdark", "mountain pass"],
    featured: false,
  },
  {
    slug: "minecraft-first-week",
    title: "Minecraft: A Reliable First Week",
    gameSlug: "minecraft",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A practical plan for the first in-game week: shelter, tools, food, a bed, and the iron milestone that makes everything easier.",
    intro:
      "Minecraft does not tell you what to do after the first night, and that is the point. But a reliable opening routine makes the rest of the game more enjoyable. This guide covers the first in-game week in broad steps, with notes for Java and Bedrock differences.",
    updatedAt: "2026-11-08",
    author: EDITOR,
    sections: [
      {
        id: "day-one",
        heading: "Day one: wood, stone, shelter",
        paragraphs: [
          "Start by collecting wood, then craft a crafting table and a wooden pickaxe. Use the pickaxe to gather stone and upgrade to stone tools. Coal or charcoal gives you torches, and a small shelter keeps hostile mobs from interrupting your first night.",
          "You do not need a mansion on day one. A simple dug-out room in a hillside or a small wooden box is enough. Place torches inside and around the entrance, and keep your crafting table, furnace, and chest nearby.",
        ],
        bullets: [
          "Gather wood and craft a crafting table.",
          "Make wooden tools, then stone tools.",
          "Collect coal or burn wood for charcoal.",
          "Build a small shelter and light it before nightfall.",
        ],
      },
      {
        id: "food-and-bed",
        heading: "Food and a bed",
        paragraphs: [
          "Food restores hunger and, in Java, lets you regenerate health when your hunger bar is high enough. Cook meat when you can; cooked food restores more hunger than raw food. Plant seeds if you want a renewable food source later.",
          "A bed requires three wool and three planks. Wool comes from sheep, and beds set your respawn point. In Java and Bedrock, sleeping in a bed skips the night, but the bed must be placed in a safe, enclosed area to avoid interruptions.",
        ],
        callout: {
          type: "tip",
          title: "Start a farm early",
          body: "Even a small wheat farm gives you a renewable source of bread. It also gives you a reason to build a permanent base rather than wandering indefinitely.",
        },
      },
      {
        id: "iron-milestone",
        heading: "Iron is the next milestone",
        paragraphs: [
          "Iron unlocks durable tools, armor, buckets, and shields. Iron ore is common underground but requires a stone pickaxe. Bring torches, food, and a water bucket if you are exploring deep caves, and do not dig straight down without checking below you.",
          "Once you have iron, prioritize a shield, a bucket, and an iron pickaxe. These three items make exploration and building significantly safer. Save some iron for armor rather than spending all of it on tools.",
        ],
        callout: {
          type: "warning",
          title: "Mine with a way out",
          body: "Mark your route, place torches consistently, and keep a stack of blocks to bridge or climb. Getting lost is more common than dying to a mob.",
        },
      },
      {
        id: "base-routine",
        heading: "Set up a base routine",
        paragraphs: [
          "A good base is organized around a few repeated tasks: crafting, smelting, sleeping, storage, and farming. Put chests near the door, label them if you are playing with friends, and keep a dedicated furnace area away from your bed.",
          "Once the basics are stable, choose a project. A mine entrance, a farm, a small villager trading setup, or a Nether portal are all reasonable next steps. The game has no required order after the opening week.",
        ],
      },
      {
        id: "edition-notes",
        heading: "Java and Bedrock differences",
        paragraphs: [
          "Java Edition and Bedrock Edition share the core loop, but they differ in commands, redstone behavior, world generation, and some multiplayer details. Cheats work differently as well: Bedrock disables achievements in a world when cheats are enabled, while Java's advancement system is not tied to cheats in the same way.",
          "If you are following a tutorial, check which edition it was made for. A design that works in Java may need changes in Bedrock, and vice versa.",
        ],
        callout: {
          type: "note",
          title: "Version-specific details",
          body: "Minecraft changes over time. If a recipe or command does not work, check the current wiki for your edition and version rather than assuming the guide is wrong.",
        },
      },
    ],
    tags: ["beginner", "survival", "first night", "iron", "bed"],
    featured: true,
  },
  {
    slug: "minecraft-performance-settings",
    title: "Minecraft Performance and Settings Guide",
    gameSlug: "minecraft",
    category: "Performance & Settings",
    level: "All levels",
    excerpt:
      "A sensible order for troubleshooting low frame rates, from render distance and simulation distance to memory and mods.",
    intro:
      "Minecraft performance depends on the edition, the version, the hardware, and the world you are playing. There is no universal settings preset that guarantees smooth frame rates, but there is a sensible order for testing changes. This guide focuses on the settings that usually matter most.",
    updatedAt: "2026-10-15",
    author: EDITOR,
    sections: [
      {
        id: "decide-the-goal",
        heading: "Decide what you are optimizing",
        paragraphs: [
          "Before changing settings, decide whether you care about frame rate, visual quality, loading times, or stability. A large modded world has different bottlenecks than a small vanilla survival world, and a laptop with integrated graphics needs different compromises than a desktop with a dedicated GPU.",
          "Run the game with a baseline first. Note your average frame rate and where it drops. That gives you a way to judge whether a change actually helped.",
        ],
        callout: {
          type: "note",
          title: "No guaranteed results",
          body: "Hardware, drivers, and world complexity all affect performance. Treat this guide as a testing order, not a promise of a specific frame rate.",
        },
      },
      {
        id: "render-distance",
        heading: "Start with render distance and simulation distance",
        paragraphs: [
          "Render distance controls how far terrain is drawn. Simulation distance controls how far game mechanics continue to run. Lowering these settings usually has a larger effect than small graphics tweaks, especially in crowded worlds.",
          "Try reducing render distance by a few chunks and testing again. If the frame rate improves significantly, you have found a major bottleneck. If it does not, the issue may be memory, mods, or something running outside the game.",
        ],
        bullets: [
          "Lower render distance first if frame rate is the problem.",
          "Reduce simulation distance if farms or mob-heavy areas are slowing things down.",
          "Turn off fancy graphics options if you need more headroom.",
          "Test one change at a time so you know what helped.",
        ],
      },
      {
        id: "memory-and-mods",
        heading: "Java memory is not a magic fix",
        paragraphs: [
          "Allocating more memory can help a modded Java instance, but giving the game all of your system memory can make things worse. A reasonable starting point for a lightly modded instance is a few gigabytes, not the entire machine. Check your launcher's documentation for how to change it safely.",
          "Performance mods are popular in the Java community, but download them only from official or trusted project pages. A mod that promises huge gains from an unknown source is not worth the risk. Keep backups of your worlds before changing mods.",
        ],
        callout: {
          type: "warning",
          title: "Download from trusted sources",
          body: "Minecraft mods run code on your computer. Use well-known project pages and avoid random download mirrors or executables.",
        },
      },
      {
        id: "bedrock-and-general",
        heading: "Bedrock and general troubleshooting",
        paragraphs: [
          "On Bedrock, render distance and fancy graphics are the first settings to test. On Windows, update your graphics driver and close background applications that may be using the GPU. On consoles, check whether the world size or a large build is the limiting factor.",
          "If the game stutters rather than running at a consistently low frame rate, look at memory usage, storage speed, and background processes. A stable lower frame rate is often more comfortable than a high average with frequent hitches.",
        ],
        bullets: [
          "Update graphics drivers from the manufacturer.",
          "Close unnecessary background applications before benchmarking.",
          "Back up worlds before changing versions or adding mods.",
          "Test in a new world to see whether a specific build is the problem.",
        ],
      },
    ],
    tags: ["performance", "settings", "fps", "java", "bedrock", "mods"],
    featured: false,
  },
  {
    slug: "red-dead-redemption-2-chapter-two",
    title: "Red Dead Redemption 2: Slowing Down in Chapter 2",
    gameSlug: "red-dead-redemption-2",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "Why the early camp chapter is the best time to learn the systems, upgrade the camp, and build a routine before the story accelerates.",
    intro:
      "Red Dead Redemption 2 is a game about pace. Chapter 2 gives you a camp, a horse, and enough freedom to learn the systems before the story starts pulling you in different directions. This guide is spoiler-light and focuses on making that chapter work for you.",
    updatedAt: "2026-10-06",
    author: EDITOR,
    sections: [
      {
        id: "learn-the-camp",
        heading: "The camp is a tutorial disguised as a home",
        paragraphs: [
          "The camp is more than a place to sleep. It is where you donate supplies, upgrade amenities, craft satchels, and talk to the people who make up the gang. Spend a little time there before rushing into the next mission.",
          "Talk to the characters around the campfire and in the wagons. Some of the best writing in the game happens in these quiet conversations, and they give context to the main story without forcing it on you.",
        ],
        callout: {
          type: "tip",
          title: "Donate before you sell",
          body: "The camp needs supplies, and donating pelts and food contributes to the group's wellbeing. Selling everything to a butcher is sometimes the right call, but keep the camp in mind.",
        },
      },
      {
        id: "upgrade-the-camp",
        heading: "Upgrade the camp early",
        paragraphs: [
          "The camp ledger lets you improve provisions, medicine, ammunition, and living quarters. These upgrades make everyday life easier, and some unlock useful conveniences. Check the ledger after a few missions and spend what you can.",
          "Do not feel obligated to buy every upgrade immediately. Prioritize the ones that match how you play. If you are constantly low on supplies, invest in the relevant camp upgrade before buying another cosmetic item.",
        ],
        bullets: [
          "Check the ledger regularly rather than hoarding camp funds.",
          "Improve supplies if you are often low on food or ammo.",
          "Upgrade living quarters for comfort and camp morale.",
          "Save money for horse care and weapon maintenance as well.",
        ],
      },
      {
        id: "hunt-and-craft",
        heading: "Hunt and craft for the satchel",
        paragraphs: [
          "Hunting is a core system, not a side activity. Perfect pelts can be donated to Pearson for camp upgrades and used to craft improved satchels. A larger satchel means you can carry more of everything, which makes exploration less frustrating.",
          "Use the right weapon for the animal, aim for a clean kill, and skin the carcass promptly. Study animals when you can to learn their quality and preferred habitat. The compendium is a useful reference, not just a checklist.",
        ],
        callout: {
          type: "note",
          title: "Horse care matters",
          body: "Feed, brush, and calm your horse regularly. A well-bonded horse responds better and is less likely to panic in dangerous situations.",
        },
      },
      {
        id: "dont-fast-travel-everywhere",
        heading: "Don't fast-travel everywhere",
        paragraphs: [
          "Fast travel is convenient, but the world is where the game's best moments happen. Random encounters, stranger missions, and small environmental details rarely appear on the map. Riding between destinations is part of the experience.",
          "That said, if you have limited time, use the tools the game gives you. There is no wrong way to play, and a shorter session is better than skipping the game entirely because the travel feels too slow.",
        ],
      },
    ],
    tags: ["beginner", "chapter 2", "camp", "hunting", "satchel"],
    featured: true,
  },
  {
    slug: "red-dead-redemption-2-horses-hunting-camp",
    title: "Red Dead Redemption 2: Horses, Hunting, and Camp Essentials",
    gameSlug: "red-dead-redemption-2",
    category: "Tips & Tricks",
    level: "All levels",
    excerpt:
      "Practical habits for horse bonding, clean hunting, and keeping the camp supplied without turning the game into a chore.",
    intro:
      "Red Dead Redemption 2 rewards routines. A well-cared-for horse, a clean hunting shot, and a camp that has what it needs make the whole game feel smoother. This guide collects the habits that matter most and explains why they work.",
    updatedAt: "2026-09-25",
    author: EDITOR,
    sections: [
      {
        id: "horse-bonding",
        heading: "Horse bonding is a relationship",
        paragraphs: [
          "Your horse is not a vehicle. Feeding, brushing, calming, and hitching it all build a bond that affects how it behaves. A bonded horse is easier to control and less likely to panic when predators or gunfire appear.",
          "Visit the stable when you can, keep your horse clean, and carry horse care items. If your horse runs off during a fight, whistling from a safe distance is usually better than chasing it into more danger.",
        ],
        bullets: [
          "Feed and brush your horse regularly.",
          "Calm it when it becomes agitated.",
          "Hitch it at camp instead of leaving it in the open.",
          "Use the stable to manage multiple horses and saddles.",
        ],
      },
      {
        id: "choose-the-right-horse",
        heading: "Pick the horse that suits the job",
        paragraphs: [
          "Horses have different stats and temperaments. Race horses are fast, war horses are steadier in combat, and work horses are reliable all-rounders. A perfect horse matters less than a horse you are comfortable riding.",
          "Do not sell a horse just because a guide ranks another one higher. Bonding takes time, and a familiar horse with good care is often more useful than an unfamiliar upgrade.",
        ],
        callout: {
          type: "tip",
          title: "Keep a spare",
          body: "If you can afford it, stable a second horse. Losing your main horse in a bad situation hurts more when you have no backup.",
        },
      },
      {
        id: "hunt-clean",
        heading: "Hunt clean",
        paragraphs: [
          "A perfect pelt starts with the right weapon and a clean shot. Study the animal, aim for a vital area, and avoid firing more shots than necessary. Damaged pelts are worth less and cannot be used for every crafting recipe.",
          "Use bait and cover when appropriate, and pay attention to the wind. Some animals are more skittish than others. If a hunt goes wrong, move on; the world has plenty of wildlife.",
        ],
        bullets: [
          "Use a weapon suited to the animal's size.",
          "Aim for a clean, vital shot.",
          "Skin the animal promptly and store pelts properly.",
          "Donate useful pelts to camp instead of selling every one.",
        ],
      },
      {
        id: "camp-chores",
        heading: "Camp chores are worth doing",
        paragraphs: [
          "Chopping wood, carrying supplies, and donating food all contribute to camp morale and honor. They are small tasks, but they make the camp feel like a place people live rather than a menu.",
          "If you are role-playing a specific kind of Arthur, camp behavior is one of the ways the game lets you express it. Being useful around camp does not lock you out of a rougher playstyle; it just gives the character more texture.",
        ],
        callout: {
          type: "note",
          title: "Honor is not a simple meter",
          body: "The game judges actions in context. Camp chores and daily interactions matter, but they are only one part of how honor and reputation develop.",
        },
      },
    ],
    tags: ["horses", "hunting", "camp", "honor", "tips"],
    featured: false,
  },
];
