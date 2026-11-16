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
  {
    slug: "starfield-first-ten-hours",
    title: "Starfield for New Players: The First Ten Hours",
    gameSlug: "starfield",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A spoiler-light route through the opening hours: pick a background, follow the main thread, and build a ship-and-cargo routine before chasing every marker.",
    intro:
      "Starfield opens with a character creator, a ship, and a galaxy full of optional systems. The first ten hours are less about seeing everything and more about learning which parts of the sandbox you actually enjoy. This guide keeps story spoilers light and focuses on durable habits.",
    updatedAt: "2026-11-15",
    author: EDITOR,
    sections: [
      {
        id: "choose-a-background",
        heading: "Choose a background, not a destiny",
        paragraphs: [
          "Your background gives you three starting skills and some dialogue flavor, but it does not lock you into a class. You can learn almost any skill later, and your weapon choices matter more than the label on your character sheet.",
          "Pick a combat family you want to learn first and put early skill points into it. A focused start makes the opening fights less frustrating and gives you a clear reason to experiment later.",
        ],
        bullets: [
          "Combat skills such as Ballistics, Lasers, Pistol Certification, and Rifle Certification.",
          "Ship skills such as Piloting and Targeting Systems.",
          "Utility skills such as Security, Persuasion, and Surveying.",
        ],
        callout: {
          type: "tip",
          title: "Traits are optional",
          body: "Traits add role-play constraints and bonuses, but none are required. Choose ones you will enjoy living with rather than treating the list as a difficulty setting.",
        },
      },
      {
        id: "follow-the-main-thread",
        heading: "Follow the main thread until the galaxy opens",
        paragraphs: [
          "Starfield's main quest introduces Constellation, the ship interface, and several companions. It also unlocks tools that make the rest of the game easier to read. Rushing away from it too early can leave you with a ship and a map but very little context.",
          "This is not a demand to finish the story first. Follow the thread until the game stops explaining new systems, then start taking detours. The galaxy is more interesting when you know what your ship can actually do.",
        ],
      },
      {
        id: "build-a-light-routine",
        heading: "Build a light routine before an empire",
        paragraphs: [
          "Early Starfield is about keeping your ship and inventory usable. Sell surplus gear, keep a small stock of medical items, and avoid filling every cargo slot with resources you are not using. A lighter ship is easier to manage and cheaper to upgrade.",
          "Outposts and large-scale resource chains can wait. They are a meaningful part of the game, but they demand skill points and attention that are better spent learning combat, piloting, and exploration first.",
        ],
        bullets: [
          "Keep one home base for storage instead of scattering items across the map.",
          "Survey a planet when you are already there rather than making a special trip.",
          "Upgrade ship shields and weapons before cosmetic changes.",
        ],
        callout: {
          type: "warning",
          title: "Watch your cargo",
          body: "Cargo capacity is easy to fill and slow to manage. If you are constantly overencumbered, sell or store resources before starting a mission.",
        },
      },
      {
        id: "choose-a-session-goal",
        heading: "Decide what kind of session you are playing",
        paragraphs: [
          "Starfield can be a story game, a surveying game, a ship-building game, or a loot game. None of those is wrong, but trying to do all of them in one session often ends with a lot of flying and very little progress.",
          "Before you open the map, choose one goal: a mission, a planet survey, a ship upgrade, or a faction thread. Let the other icons wait. The Settled Systems are large enough that there will always be another detour.",
        ],
      },
    ],
    tags: ["beginner", "first hours", "backgrounds", "ships", "cargo", "exploration"],
    featured: false,
  },
  {
    slug: "hogwarts-legacy-first-term",
    title: "Hogwarts Legacy: A Spoiler-Light First Term",
    gameSlug: "hogwarts-legacy",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A practical start for new students: learn utility spells, keep gear manageable, and use the Room of Requirement without turning the game into a checklist.",
    intro:
      "Hogwarts Legacy gives players a castle, a Highlands, and a long list of optional distractions. The opening term is best spent learning how its systems connect: spells, gear traits, potions, and the Room of Requirement.",
    updatedAt: "2026-11-14",
    author: EDITOR,
    sections: [
      {
        id: "learn-spells-for-problems",
        heading: "Learn spells for problems, not only damage",
        paragraphs: [
          "Hogwarts Legacy's combat is built around combining control, damage, and utility. A damage spell alone is useful, but a levitation spell followed by a basic cast or a heavier attack often does more work.",
          "Utility spells also matter outside combat. They open doors, reveal hidden objects, and solve puzzles in the castle and the Highlands. Learn them when they appear instead of treating them as optional collectibles.",
        ],
        bullets: [
          "Control spells can hold enemies in place while you reposition.",
          "Damage spells are more effective when they follow a setup.",
          "Utility spells unlock exploration routes and hidden rooms.",
        ],
        callout: {
          type: "tip",
          title: "Practice in a safe space",
          body: "Use the training dummy in the Room of Requirement to test spell combinations without spending potions or healing items.",
        },
      },
      {
        id: "keep-gear-purposeful",
        heading: "Keep gear light and purposeful",
        paragraphs: [
          "Gear in Hogwarts Legacy is a stream of small upgrades rather than a single legendary set. Check the numbers, equip the best pieces you have, and sell or discard the rest. Carrying everything makes the menu harder to use without making you stronger.",
          "Traits and upgrades matter more as the game goes on. Visit the loom when you have a piece you expect to keep, and change your appearance freely; the transmog system lets you keep the look you want without sacrificing stats.",
        ],
      },
      {
        id: "room-of-requirement-base",
        heading: "Use the Room of Requirement as a base",
        paragraphs: [
          "The Room of Requirement becomes a useful base for potions, plants, and gear upgrades. It is easy to ignore while you are exploring, but a small stock of potions and combat plants can change a difficult fight.",
          "Invest in the stations you actually use. A fully built room is satisfying, but a modest setup that keeps you supplied is more useful in the first ten hours than a decorative space you never visit.",
        ],
      },
      {
        id: "explore-the-highlands",
        heading: "Explore the Highlands between story beats",
        paragraphs: [
          "The castle is the heart of the game, but the Highlands hold hamlets, caves, Merlin trials, and optional questlines. Treat them as palate cleansers between main assignments rather than a checklist to clear in one pass.",
          "Classes and assignments unlock spells and upgrades, so it is worth returning to school regularly. If you feel underpowered, check whether a class or assignment is waiting rather than grinding random camps.",
        ],
      },
    ],
    tags: ["beginner", "spells", "gear", "room of requirement", "exploration", "hogwarts"],
    featured: true,
  },
  {
    slug: "god-of-war-first-hours",
    title: "God of War: A Spoiler-Light Guide to the First Hours",
    gameSlug: "god-of-war",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "Learn the combat rhythm, keep Atreus involved, and explore the Lake of Nine without losing the thread of the story.",
    intro:
      "God of War asks players to balance a close, deliberate combat system with a wide exploration loop. The first hours are a tutorial in both, and the game is more enjoyable when you treat them as connected rather than separate.",
    updatedAt: "2026-11-13",
    author: EDITOR,
    sections: [
      {
        id: "learn-the-shield",
        heading: "Learn the shield before the axe",
        paragraphs: [
          "Kratos can block, parry, dodge, and throw the Leviathan Axe, and the game expects you to use all of those options. Holding block is safer than ignoring defense, but a well-timed parry creates space and opens enemies to follow-up attacks.",
          "Watch the attack indicators and learn which moves cannot be blocked. When an enemy flashes the warning color, dodge instead of committing to a shield stance. The goal is not to avoid every hit; it is to stay in the fight without panicking.",
        ],
        bullets: [
          "Block ordinary attacks and parry when the timing is clear.",
          "Dodge attacks that cannot be blocked.",
          "Recall the axe when an enemy is out of reach or you need a ranged option.",
        ],
        callout: {
          type: "tip",
          title: "Use the full moveset",
          body: "Light attacks, heavy attacks, and the axe throw all have different recovery times. Experiment in the first arena instead of saving new moves for a boss.",
        },
      },
      {
        id: "use-atreus",
        heading: "Use Atreus constantly",
        paragraphs: [
          "Atreus is not a passive companion. His arrows can stun enemies, interrupt attacks, and apply elemental effects as his skills develop. Keeping him active gives you breathing room and adds damage without forcing you to close distance.",
          "Upgrade Atreus alongside Kratos. It is tempting to spend every resource on weapons and armor, but a useful companion makes more difference than a small stat increase.",
        ],
      },
      {
        id: "spend-xp-deliberately",
        heading: "Spend XP on tools you use",
        paragraphs: [
          "Skills and runic attacks are expensive. Pick a few that match your habits, practice them, and upgrade them before adding more options. A small toolkit you understand is stronger than a menu full of moves you never remember.",
          "Armor is a trade-off between stats and appearance, but it also carries enchantment slots and set bonuses. Do not sell or ignore gear just because it looks plain; check what it does.",
        ],
      },
      {
        id: "explore-lake-of-nine",
        heading: "Explore the Lake of Nine in loops",
        paragraphs: [
          "The Lake of Nine opens into optional islands, shores, and realms. It is designed to be revisited as your abilities improve, so do not treat every locked path as a failure. Mark it, finish a nearby objective, and come back later.",
          "Side content in God of War is not filler. Optional areas often contain upgrades, lore, and combat challenges that make the main path more manageable. Explore until you feel the pace dip, then return to the story.",
        ],
      },
    ],
    tags: ["beginner", "combat", "parry", "atreus", "exploration", "norse"],
    featured: true,
  },
  {
    slug: "sekiro-posture-and-deflection",
    title: "Sekiro: Posture, Deflection, and the First Real Wall",
    gameSlug: "sekiro-shadows-die-twice",
    category: "Tips & Tricks",
    level: "Intermediate",
    excerpt:
      "A practical explanation of the posture system, why aggression works, and how to practice deflection without turning every fight into a panic roll.",
    intro:
      "Sekiro is not a game about draining health bars slowly. It is a game about breaking posture, and posture is built through confident, rhythmic pressure. The first wall is usually not a stat check; it is a habit check.",
    updatedAt: "2026-11-12",
    author: EDITOR,
    sections: [
      {
        id: "health-and-posture",
        heading: "Health makes posture recovery slower",
        paragraphs: [
          "Sekiro's posture meter is the real health bar in most fights. A healthy enemy recovers posture quickly; a damaged enemy recovers slowly. Chip away at health when you can, then press the advantage before the meter resets.",
          "Stealth is part of that plan. Removing a sentry or a minion before a duel lets you focus on the real threat instead of fighting with your back to the room.",
        ],
      },
      {
        id: "deflect-the-rhythm",
        heading: "Deflect the rhythm, don't chase the animation",
        paragraphs: [
          "A deflection happens when you tap guard as an attack lands. Holding guard reduces damage, but it does not build enemy posture the way a perfect deflect does. The visual spark and sound are your confirmation that the timing worked.",
          "Learn the rhythm of a combo rather than reacting to every limb. Many enemies use delayed attacks specifically to catch players who dodge or guard too early.",
        ],
        callout: {
          type: "tip",
          title: "Use the training partner",
          body: "The training partner at the Dilapidated Temple lets you practice deflection and counters without risking a real fight. Spend a few minutes there before pushing into a new area.",
        },
      },
      {
        id: "attack-until-deflected",
        heading: "Attack until you are deflected",
        paragraphs: [
          "The safest offense is a conversation. Attack until the enemy deflects you, then switch to defense. When you deflect them back, resume attacking. This loop keeps pressure on their posture while giving you a readable cue to stop mashing.",
          "If you keep attacking after an enemy deflects, you will usually eat a counter. The sound and spark of their deflect are more important than your damage numbers.",
        ],
      },
      {
        id: "stealth-and-tools",
        heading: "Use stealth and tools to set the terms",
        paragraphs: [
          "Sekiro's prosthetics are answers to specific problems, not a replacement for fundamentals. Firecrackers can interrupt animals, shuriken can punish distant enemies, and the axe can break certain shields. Switch tools when a fight asks a different question.",
          "Do not save every item for a boss. Consumables and spirit emblems are there to be used. A fight you win with a tool is still a fight you learned.",
        ],
      },
    ],
    tags: ["posture", "deflection", "combat", "stealth", "prosthetics", "tips"],
    featured: false,
  },
  {
    slug: "skyrim-clean-start-2026",
    title: "Skyrim in 2026: A Clean Start Without the Overwhelm",
    gameSlug: "the-elder-scrolls-v-skyrim",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A durable starting plan for a fifteen-year-old RPG: choose a build, follow the early main quest, and resist the urge to join every faction at once.",
    intro:
      "Skyrim can still overwhelm new players because almost every direction leads to a quest, a dungeon, or a faction. The solution is not to see everything. It is to decide what kind of character you are playing and let the rest of the province wait.",
    updatedAt: "2026-11-11",
    author: EDITOR,
    sections: [
      {
        id: "choose-a-build-direction",
        heading: "Choose a build direction early",
        paragraphs: [
          "Skyrim does not force a class, but it does limit how quickly you can do everything. A character who splits points across every skill will feel weaker than one who invests in a coherent set.",
          "Pick a primary offense and a primary defense, then add utility as you go. Race and standing stone can support that plan, but they are less important than the perks you choose.",
        ],
        bullets: [
          "Warrior: one-handed or two-handed, heavy armor, smithing.",
          "Mage: destruction or conjuration, restoration, alteration.",
          "Thief: archery, sneak, light armor, alchemy.",
        ],
        callout: {
          type: "note",
          title: "Do not fear commitment",
          body: "Skyrim is flexible, but perk points are limited. A focused start is easier to correct than a build with no plan.",
        },
      },
      {
        id: "let-the-main-quest-teach-you",
        heading: "Let the main quest teach you the map",
        paragraphs: [
          "The early main quest moves you between Whiterun, the surrounding holds, and the first dragon encounters. It is a useful orientation course, not a commitment to finish the story immediately.",
          "Once you have shouts, a home base, and a sense of the map, branch out. The province is more manageable when you know which roads connect which holds.",
        ],
      },
      {
        id: "join-one-faction",
        heading: "Join one faction, not all of them",
        paragraphs: [
          "Skyrim's major guilds each have their own questline and tone. Trying to join all of them at once can leave you with a quest log full of conflicting loyalties and no clear sense of your character.",
          "Pick the faction that fits your build and role-play, finish a meaningful chunk of it, then decide whether another belongs to this character. The others will still be there in another playthrough.",
        ],
      },
      {
        id: "mod-lightly",
        heading: "Mod lightly at first",
        paragraphs: [
          "Skyrim's mod scene is one of its greatest strengths, but a first playthrough does not need a hundred plugins. Start with stability fixes, a UI mod, and perhaps one visual change you actually notice.",
          "Read requirements, check load order, and keep a clean save before adding anything large. Some mod setups affect achievements, and a broken save is more frustrating than a plain-looking game.",
        ],
      },
    ],
    tags: ["beginner", "builds", "factions", "mods", "skyrim", "2026"],
    featured: false,
  },
  {
    slug: "stardew-valley-first-season",
    title: "Stardew Valley: A Calm and Practical First Season",
    gameSlug: "stardew-valley",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A first-spring plan that avoids min-maxing: plant a manageable mix, save for tools, and leave room for the town to surprise you.",
    intro:
      "Stardew Valley can be played as a spreadsheet or as a quiet routine. A first farm works best somewhere in between: enough planning to avoid wasted days, enough slack to follow whatever the town puts in front of you.",
    updatedAt: "2026-11-10",
    author: EDITOR,
    sections: [
      {
        id: "plant-a-varied-crop-mix",
        heading: "Plant a small, varied crop mix",
        paragraphs: [
          "Your first spring is a test of energy and cash flow. A small plot you can water every day is better than a huge field that leaves you exhausted before noon. Start with a few parsnips, then add faster-selling crops as you learn the rhythm.",
          "Keep some gold for tool upgrades, seeds for the next harvest, and a buffer for festivals. Selling every crop immediately can leave you unable to reinvest when a better opportunity appears.",
        ],
        bullets: [
          "Water crops first thing in the morning.",
          "Leave time and energy for foraging, fishing, or the mine.",
          "Save one of each crop for the Community Center.",
        ],
        callout: {
          type: "tip",
          title: "Check the calendar",
          body: "Festivals and birthdays are easy to miss. Check the calendar near your house or in town so you do not spend a day wondering why the shops are closed.",
        },
      },
      {
        id: "rainy-days",
        heading: "Use rainy days for the mine and fishing",
        paragraphs: [
          "Rain waters your crops for you, which frees up energy and time. Those are good days for the mine, fishing, or gathering materials for upgrades.",
          "The mine is dangerous but useful. Bring food, clear one elevator level at a time, and leave before your health gets low. Ore and gems feed tools, crafting, and later goals.",
        ],
      },
      {
        id: "save-one-of-everything",
        heading: "Save one of everything",
        paragraphs: [
          "The Community Center asks for items across seasons, qualities, and categories. A simple chest system makes it much easier to complete bundles without scrambling at the end of a season.",
          "Keep one of each crop, forage item, fish, and mineral you are not using. You do not need to hoard everything, but a small reserve prevents a common first-year mistake.",
        ],
      },
      {
        id: "build-relationships",
        heading: "Build relationships with intent",
        paragraphs: [
          "Talking to villagers and giving gifts raises friendship over time. You do not need to optimize every conversation, but a weekly routine helps you see heart events and learn what each character cares about.",
          "Birthdays make gifts more valuable, and loved gifts are worth more than a random item from your bag. Keep a few universal favorites on hand, and let the rest develop naturally.",
        ],
      },
    ],
    tags: ["beginner", "first spring", "crops", "community center", "fishing", "relationships"],
    featured: false,
  },
  {
    slug: "hades-first-clears",
    title: "Hades for New Players: Building Momentum Between Runs",
    gameSlug: "hades",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A spoiler-light plan for the first clears: spend meta-currency with purpose, treat boons as a build, and stop treating every death as a setback.",
    intro:
      "Hades is built around repeated escape attempts, but a run is never wasted. The game gives you permanent upgrades, new conversation, and a better understanding of each chamber even when Zagreus dies. The opening hours are easiest when you learn which progress carries forward and which choices only matter for the current run.",
    updatedAt: "2026-11-15",
    author: EDITOR,
    sections: [
      {
        id: "make-every-death-count",
        heading: "Make every death count",
        paragraphs: [
          "Darkness, Keys, Nectar, and other rare rewards persist after a run ends. Before you start another escape, visit the Mirror of Night and spend Darkness on upgrades that support the way you actually play. More health, extra dashes, and death defiance are rarely exciting, but they buy the time needed to learn a fight.",
          "Keys unlock new weapons and Mirror talents. Nectar builds relationships and eventually gives you keepsakes, which are one of the most reliable ways to steer a run toward the gods or bonuses you want. Talk to everyone in the House between attempts; the story only moves when you do.",
        ],
        bullets: [
          "Spend Darkness before starting a new run instead of hoarding it.",
          "Unlock every weapon before chasing expensive weapon aspects.",
          "Give Nectar deliberately to characters whose keepsakes fit your plan.",
          "Check the Fated List and the House contractor for long-term goals.",
        ],
        callout: {
          type: "tip",
          title: "Death is the tutorial",
          body: "Early deaths teach enemy patterns, boss timing, and boon combinations. You are not losing progress when you lose a run; you are collecting information for the next one.",
        },
      },
      {
        id: "build-around-slots",
        heading: "Build around slots, not a single favorite boon",
        paragraphs: [
          "Most gods offer boons for your attack, special, cast, dash, and call. A strong run usually has a clear primary damage source and a few supporting effects rather than one rare boon carrying everything. Read what each slot does before accepting a choice, especially when a boon changes your attack in a way you do not enjoy.",
          "Rarity and level matter, but fit matters more. A common boon that supports your weapon's rhythm can outperform a heroic boon that pulls you into a playstyle you are not equipped to use. Use keepsakes to target a god you need, then switch keepsakes once the core of the build is in place.",
        ],
        callout: {
          type: "warning",
          title: "Do not chase every god",
          body: "Splitting your build across too many effects can leave you with several weak options. Decide what your main attack and special are doing, then take boons that make those actions better.",
        },
      },
      {
        id: "choose-doors-like-a-route",
        heading: "Choose doors like a route",
        paragraphs: [
          "Each chamber reward is a choice about the next few minutes. Darkness and Gems help long-term progression, but a Daedalus Hammer can transform your weapon and a Pom of Power can make your most important boon stronger. Health, money, and Charon shop visits are all part of the same decision.",
          "If a run is going badly, prioritize survivability and information. If it is going well, take the risk that makes the build stronger. The best door is not always the rarest reward; it is the one that answers the problem in front of you.",
        ],
        bullets: [
          "Take a Daedalus Hammer when your weapon still has room to improve.",
          "Use Poms on your main damage boon, not a utility effect.",
          "Visit Charon when you need health, boons, or a run-saving item.",
          "Treat Chaos gates as optional risks, not mandatory detours.",
        ],
      },
      {
        id: "learn-the-fight-rhythm",
        heading: "Learn the rhythm, then use the settings",
        paragraphs: [
          "Hades rewards movement more than standing still. Dash through attacks instead of away from them, use your cast to control space, and deal with the enemy that is actually threatening you rather than the one closest to the cursor. Boss fights become readable when you stop trying to win the damage race.",
          "If the action is still overwhelming, God Mode is a built-in accessibility option. It reduces incoming damage and becomes more forgiving after each failed run. Using it does not invalidate the story or the achievement of learning the game.",
        ],
        callout: {
          type: "note",
          title: "God Mode is not a cheat",
          body: "It is a supported difficulty option in the settings. Turn it on if you want to experience the story and systems without fighting the same wall for hours.",
        },
      },
    ],
    tags: ["beginner", "roguelike", "boons", "mirror of night", "god mode", "runs"],
    featured: true,
  },
  {
    slug: "hollow-knight-first-descent",
    title: "Hollow Knight Beginner's Guide: The First Descent",
    gameSlug: "hollow-knight",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "How to start Hallownest without getting lost: buy the map, spend your geo, learn the nail, and treat backtracking as part of the journey.",
    intro:
      "Hollow Knight does not hold your hand. It drops you into a ruined kingdom with a short sword, a vague sense of direction, and enemies that hit harder than they first appear. The opening hours are manageable if you build a few habits: map first, upgrades second, and curiosity with a return plan.",
    updatedAt: "2026-11-15",
    author: EDITOR,
    sections: [
      {
        id: "map-before-adventure",
        heading: "Buy the map, then learn the map",
        paragraphs: [
          "Your first major purchase should make exploration legible. Find Iselda in Dirtmouth after meeting Cornifer, buy the map for the area you are exploring, and pick up the quill so you can update it yourself. Map pins are optional, but they make benches, stag stations, and unfinished routes easier to remember.",
          "A bench is more than a save point. Sitting restores health and respawns enemies, which means it is also a decision about when to reset a dangerous room. Use benches as anchors and explore outward from them rather than pushing deeper with no plan to return.",
        ],
        bullets: [
          "Buy area maps and the quill early.",
          "Sit on benches to save, heal, and reset a room.",
          "Use the Stag Stations to shorten long return trips.",
          "Mark a suspicious route and come back when you have the right ability.",
        ],
        callout: {
          type: "tip",
          title: "Backtracking is progress",
          body: "A dead end often means you are missing a movement ability, a key, or a different entrance. Leave a mental note and keep exploring; Hallownest is designed to loop back on itself.",
        },
      },
      {
        id: "spend-geo-before-you-lose-it",
        heading: "Spend geo before you lose it",
        paragraphs: [
          "Geo is easy to hoard and easy to lose. When you die, your shade carries your dropped geo, and you have to defeat it to recover the money. That is a fair system, but it punishes carrying a huge pile into an unknown area.",
          "Spend geo on nail upgrades, charm notches, maps, and useful charms before a risky expedition. A stronger nail shortens every fight, and extra charm notches make your build more flexible. Do not save for a distant luxury while your basic tools remain weak.",
        ],
        callout: {
          type: "warning",
          title: "Do not fight your shade while panicked",
          body: "The shade uses your own abilities and can catch you off guard. Clear nearby enemies first, approach with full health, and remember that the geo is not worth dying twice for.",
        },
      },
      {
        id: "combat-is-space-and-timing",
        heading: "Combat is space and timing",
        paragraphs: [
          "The nail has a short reach, so the safest attack is often a quick hit followed by a step back. Learn to pogo off enemies and hazards by striking downward, and use spells when a fight needs burst damage or range. Focusing soul to heal takes time; create space before you commit to it.",
          "Charms let you bend the rules, but they cannot replace fundamentals. A charm that increases nail range or spell damage is only useful if you are already comfortable with the underlying action. Swap charms for the problem in front of you instead of building one universal loadout.",
        ],
        bullets: [
          "Strike and reposition instead of trading hits.",
          "Use downward slashes to cross gaps and bounce off enemies.",
          "Spend soul on spells when healing would be too slow.",
          "Change charms for bosses, exploration, and platforming.",
        ],
      },
      {
        id: "choose-a-first-route",
        heading: "Choose a first route without rushing",
        paragraphs: [
          "The Forgotten Crossroads are a good place to learn the game's vocabulary before pushing into Greenpath. Follow the obvious paths, talk to the characters you meet, and pick up the movement ability the area is quietly teaching you to use.",
          "When a region starts feeling too dangerous, leave. Hollow Knight does not scale enemies to your level, so the correct answer to a wall is often a different route, a new upgrade, or a return trip with more health. The map is large enough that pride is a bad navigation strategy.",
        ],
        callout: {
          type: "note",
          title: "The story is in the silence",
          body: "Most of Hallownest's history is told through environments, item descriptions, and the few NPCs who speak. Slow down in new rooms; the details are the lore.",
        },
      },
    ],
    tags: ["beginner", "hallownest", "maps", "geo", "nail", "charms", "metroidvania"],
    featured: true,
  },
  {
    slug: "disco-elysium-first-case",
    title: "Disco Elysium: Starting the Case Without Breaking It",
    gameSlug: "disco-elysium",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A spoiler-light introduction to skills, checks, thoughts, and survival: build a detective with a point of view, and let failure do some of the writing.",
    intro:
      "Disco Elysium can look like a conventional detective RPG until the first skill starts arguing with you. There is no combat, no party management, and no obvious correct build. The opening hours are about learning how the detective's mind works and accepting that a failed check is often more interesting than a successful one.",
    updatedAt: "2026-11-15",
    author: EDITOR,
    sections: [
      {
        id: "pick-a-signature-skill",
        heading: "Pick a signature skill, not a perfect build",
        paragraphs: [
          "Intellect, Psyche, Physique, and Motorics each contain six skills. Your signature skill starts higher and shapes how often that voice speaks. A detective with high Inland Empire will experience Martinaise differently from one with high Logic or Authority, even when they investigate the same case.",
          "Do not spread points evenly just to pass every check. A focused build creates a character with blind spots, and those blind spots are part of the role-play. You can raise skills later, wear clothing that changes them, and use thoughts to reshape your strengths.",
        ],
        bullets: [
          "Choose a signature skill that matches the detective you want to play.",
          "Invest in two or three related skills rather than all 24.",
          "Use clothing as a temporary skill tool, not just fashion.",
          "Read what each skill voice says about the world and about you.",
        ],
        callout: {
          type: "tip",
          title: "A failed check is content",
          body: "Disco Elysium often gives you something more revealing when you fail. Do not reload every white check; let the detective be bad at something and see where it leads.",
        },
      },
      {
        id: "checks-are-branches",
        heading: "Treat checks as story branches",
        paragraphs: [
          "White checks can often be retried after you improve the relevant skill or learn something new. Red checks are one-time opportunities. Before a risky red check, make a manual save if you care about the outcome, but resist the urge to save-scum every conversation.",
          "The game's writing is built to absorb failure. A missed clue can close one route and open another, and a humiliating answer can reveal more about the detective than a clean success. Think of checks as branches in a conversation, not as locks on the real content.",
        ],
        callout: {
          type: "warning",
          title: "Health and morale are real",
          body: "The detective can be taken out by physical damage or morale loss during dialogue. Carry healing items, keep an eye on both meters, and do not start a dangerous conversation with an empty tank.",
        },
      },
      {
        id: "keep-the-case-moving",
        heading: "Keep the case moving without rushing it",
        paragraphs: [
          "Talk to everyone, read the tasks in your journal, and revisit people after major discoveries. Disco Elysium rewards attention to ordinary details: a pair of boots, a ledger, a song lyric, or the way someone avoids a question. The case advances through accumulation, not through a single action sequence.",
          "Time passes as you talk and explore. Some events are tied to the day, so it is worth checking in with key characters and locations rather than wandering without purpose. You do not need to see everything in one playthrough; the game is designed to support different detectives and different omissions.",
        ],
        bullets: [
          "Read the journal and keep track of active tasks.",
          "Revisit NPCs after discoveries or time changes.",
          "Internalize thoughts that fit your character, not just useful bonuses.",
          "Leave some side content for a second playthrough.",
        ],
      },
      {
        id: "let-the-detective-be-a-person",
        heading: "Let the detective be a person",
        paragraphs: [
          "The game's political and personal identities are not a menu of correct answers. Your detective can be a believer, a cynic, a disaster, or something harder to name. The story works best when you commit to a point of view and let the consequences accumulate.",
          "You will not pass every check or solve every problem. That is not a failure of the build; it is the premise. Disco Elysium is less interested in whether you are a good detective than in what kind of person you become while trying to be one.",
        ],
        callout: {
          type: "note",
          title: "No combat, still dangerous",
          body: "The absence of a battle system does not make the game safe. Words, memories, and bad decisions can hurt the detective just as effectively.",
        },
      },
    ],
    tags: ["beginner", "skills", "checks", "thought cabinet", "revachol", "role play"],
    featured: true,
  },
  {
    slug: "fallout-new-vegas-goodsprings-start",
    title: "Fallout: New Vegas: Leaving Goodsprings Without Missing the Point",
    gameSlug: "fallout-new-vegas",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A practical start for a fifteen-year-old RPG: build a courier with opinions, take the road seriously, and understand reputation before choosing a faction.",
    intro:
      "Fallout: New Vegas opens with a gunshot, a tutorial, and a desert full of directions. The game is old enough that some of its rough edges are part of the experience, but its core ideas still hold up: your skills decide what you can say and do, and every major faction has a version of the future it wants you to accept.",
    updatedAt: "2026-11-15",
    author: EDITOR,
    sections: [
      {
        id: "build-for-your-answers",
        heading: "Build for the way you solve problems",
        paragraphs: [
          "New Vegas uses SPECIAL attributes, tagged skills, and skill points to define a courier. Combat is only one path. Speech, Barter, Lockpick, Science, Repair, and Medicine all open dialogue options, alternate routes, and better rewards. A character who can talk their way out of a fight is not missing the game.",
          "Pick a primary combat skill and one or two utility skills that match your curiosity. Do not ignore Speech entirely unless you are deliberately playing a silent problem-solver. The game frequently asks who your courier is, and the answer is often a skill check.",
        ],
        bullets: [
          "Choose a primary weapon skill: Guns, Energy Weapons, Melee, or Unarmed.",
          "Add Speech or Barter if you want more diplomatic routes.",
          "Lockpick and Science open doors, terminals, and optional caches.",
          "Repair and Medicine reduce the cost of keeping yourself alive.",
        ],
        callout: {
          type: "tip",
          title: "Specialize, then branch",
          body: "A courier who is decent at everything will struggle with the game's harder checks. Build a clear strength first, then add utility as the Mojave demands it.",
        },
      },
      {
        id: "take-the-road-seriously",
        heading: "Take the road out of Goodsprings seriously",
        paragraphs: [
          "The route south through Primm, the Mojave Outpost, Nipton, and Novac is a guided introduction to the game's factions and dangers. You can try to head straight for the Strip, but the wasteland is not scaled to your level and the trip will test whether you understand its economies of ammo and health.",
          "Use the early towns to learn how weapon condition, ammo types, and companion commands work. Talk to people before accepting a job for a faction, and pay attention to reputation messages. New Vegas tracks how groups feel about you, not just whether you are generally good or evil.",
        ],
        callout: {
          type: "warning",
          title: "Reputation is not a morality meter",
          body: "Helping one group can make another group suspicious. That is not a bug. Decide which loyalties your courier can live with, and keep a save before a major faction decision.",
        },
      },
      {
        id: "maintain-your-gear",
        heading: "Maintain your gear like it matters",
        paragraphs: [
          "Weapons degrade with use, and a damaged weapon is less accurate and less effective. Repair kits, duplicate weapons, and merchants keep your main tools working. Ammo types add another layer: armor-piercing rounds, hollow points, and specialty ammunition all change how a fight plays out.",
          "Carry food, water, and healing items even if you are not playing Hardcore mode. The desert is long, and a courier who runs out of supplies between settlements has to make choices that a prepared courier avoids.",
        ],
        bullets: [
          "Repair your main weapon before a long expedition.",
          "Carry a backup that uses different ammo.",
          "Use specialty ammunition for armored or dangerous enemies.",
          "Sell excess gear instead of carrying everything you find.",
        ],
      },
      {
        id: "choose-a-future-deliberately",
        heading: "Choose a future deliberately",
        paragraphs: [
          "The NCR, Caesar's Legion, Mr. House, and an independent Vegas all offer different answers to the same question: who gets to decide what happens next? Each path has costs, and the game is strongest when you understand those costs before committing.",
          "You do not need to pick a side immediately. Do quests, listen to arguments, and notice how each faction treats the people who live in the Mojave. When the story forces a choice, make it as the courier you have been playing, not as a completionist trying to keep every door open.",
        ],
        callout: {
          type: "note",
          title: "Old game, new warnings",
          body: "New Vegas is a large, old RPG with known stability quirks. Save often, keep backup saves, and treat community patches as optional tools rather than required downloads.",
        },
      },
    ],
    tags: ["beginner", "goodsprings", "reputation", "factions", "speech", "mojave"],
    featured: true,
  },
  {
    slug: "nier-automata-route-a-start",
    title: "NieR:Automata: A Spoiler-Light Start Through Route A",
    gameSlug: "nier-automata",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "How to start the war without rushing the story: learn the combat loop, use chips with intent, and understand why the first credits are only a curtain.",
    intro:
      "NieR:Automata begins as a stylish action game about androids fighting machines, then keeps changing the shape of the story. The opening hours are easier if you learn the combat vocabulary, treat saves as precious, and accept that the first ending is not the whole game.",
    updatedAt: "2026-11-15",
    author: EDITOR,
    sections: [
      {
        id: "learn-the-combat-loop",
        heading: "Learn the combat loop before optimizing it",
        paragraphs: [
          "Combat uses light attacks, heavy attacks, a pod, and a dodge with a generous window. The most important habit is to keep moving and cancel attacks into a dodge when an enemy winds up. Weapon sets can be swapped on the fly, and different weapon types change reach, speed, and combo routes.",
          "You do not need a perfect combo to finish Route A. Learn a few reliable strings, use the pod for chip damage and crowd control, and practice dodging through attacks rather than running away from them.",
        ],
        bullets: [
          "Equip two weapons and switch sets when a fight changes shape.",
          "Use the pod's ranged attack while closing distance.",
          "Dodge through attacks and punish the recovery.",
          "Lock on when a fight becomes visually crowded.",
        ],
      },
      {
        id: "chips-are-the-build",
        heading: "Chips are the build",
        paragraphs: [
          "Plug-in chips determine much of your combat power and survivability. Damage, defense, movement, healing, and even automatic assistance all compete for limited capacity. Fuse duplicates to make stronger chips, and sell or ignore chips that do not fit your approach.",
          "Auto chips are a supported accessibility feature, not a lesser way to play. If you want to focus on exploration and story, they can handle parts of combat while you learn the rest. Higher difficulties remove some assistance, so check the difficulty description before committing.",
        ],
        callout: {
          type: "tip",
          title: "Keep a balanced chip set",
          body: "Offense is satisfying, but a little defense and healing often makes the difference between a clean fight and a long walk back from the last save.",
        },
      },
      {
        id: "the-first-credits-are-not-the-end",
        heading: "The first credits are not the end",
        paragraphs: [
          "NieR:Automata is structured around multiple routes and perspectives. Finishing the first route unlocks another, and the later route changes how you understand earlier events. Do not stop at the first set of credits or assume you have seen the whole story.",
          "The game will eventually offer chapter select and other tools for revisiting content. That makes it easier to complete side material later, but it does not make the first playthrough disposable. Pay attention the first time; the game is designed to be reread.",
        ],
        callout: {
          type: "note",
          title: "Spoiler-light on purpose",
          body: "This guide avoids naming major reveals or ending outcomes. The route structure itself is part of the game's design, not a secret to hide from new players.",
        },
      },
      {
        id: "protect-your-save",
        heading: "Protect your save and your time",
        paragraphs: [
          "Save manually when you can, keep more than one slot, and do not treat autosaves as a safety net. The game has a late, optional choice that can erase save data; if that possibility matters to you, back up your save before making it.",
          "Side quests are not filler. They are where the game's machines, androids, and ordinary people get to complicate the war. Take detours, read the requests, and let the world slow down between story missions.",
        ],
        bullets: [
          "Save manually before entering a new area or major encounter.",
          "Keep a backup save before the final stretch.",
          "Do side quests when they appear; some are time-sensitive.",
          "Use chapter select later to revisit missed content, not to erase your first experience.",
        ],
        callout: {
          type: "warning",
          title: "The save warning is real",
          body: "Do not make a permanent choice with your only save file. Back up your data before the game asks you to make an irreversible decision.",
        },
      },
    ],
    tags: ["beginner", "route a", "combat", "chips", "multiple endings", "save data"],
    featured: true,
  },
  {
    slug: "resident-evil-4-remake-first-hours",
    title: "Resident Evil 4 Remake: The First Hours, Combat, and Inventory",
    gameSlug: "resident-evil-4",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A practical opening for the village: aim to stagger, treat the attaché case as a budget, and stop treating the knife like a permanent tool.",
    intro:
      "Resident Evil 4 is a survival-horror game dressed as an action game. Leon can shoot, parry, and kick his way out of trouble, but every one of those actions spends a resource. The first hours are about learning which resource to spend and when to run.",
    updatedAt: "2026-11-15",
    author: EDITOR,
    sections: [
      {
        id: "aim-to-stagger",
        heading: "Aim to stagger, not just to kill",
        paragraphs: [
          "A headshot or a shot to the knee can make an enemy stumble, opening a prompt for a melee follow-up. That melee hit saves ammunition, creates space, and can knock down nearby enemies. Aim deliberately instead of emptying a magazine into the nearest body.",
          "The knife is part of the combat loop, not just a stealth tool. It can parry certain attacks, finish downed enemies, and break free from grabs, but it has limited durability. Use it to prevent damage and save bullets; do not spend it on every corpse.",
        ],
        bullets: [
          "Aim for heads and knees to create melee openings.",
          "Use the knife to parry, escape grabs, and finish stunned enemies.",
          "Back away from groups instead of backing into a corner.",
          "Save heavy ammunition for enemies that resist small arms.",
        ],
        callout: {
          type: "tip",
          title: "Running is a valid tactic",
          body: "You are not required to kill every villager. If a fight is draining your resources, break line of sight and move toward the objective.",
        },
      },
      {
        id: "treat-the-case-as-a-budget",
        heading: "Treat the attaché case as a budget",
        paragraphs: [
          "Inventory space is limited, and crafting materials compete with healing items, ammo, and treasure. Keep a small buffer of each resource rather than hoarding a single type. Gunpowder and resources can be crafted into the ammunition you actually use.",
          "The merchant is part of the inventory plan. Upgrading a weapon you use is usually better than buying another weapon you will not fire. The case's size and organization matter too; keep frequently used items in predictable slots so you are not shuffling during a fight.",
        ],
        bullets: [
          "Craft ammo for your main weapon rather than every weapon.",
          "Carry at least one healing item before a new area.",
          "Sell treasure when you need space or upgrade money.",
          "Upgrade the weapons you actually use.",
        ],
        callout: {
          type: "warning",
          title: "Do not over-craft",
          body: "Crafting converts one resource into another. If you turn every material into handgun ammo, you may have nothing left for the fight that needs something heavier.",
        },
      },
      {
        id: "knife-and-space-are-resources",
        heading: "Knife and space are resources",
        paragraphs: [
          "The knife's durability changes how you approach stealth, parries, and finishing blows. Repair it when the merchant allows, and do not assume you can parry every attack forever. When the knife is low, prioritize distance and bullets.",
          "Space is the resource players forget. A doorway can funnel enemies, a table can buy a second, and a stairwell can turn a crowd into a line. Look for exits before you look for cover, and keep a route behind you.",
        ],
      },
      {
        id: "explore-with-a-reason",
        heading: "Explore with a reason",
        paragraphs: [
          "The village hides treasures, requests, and upgrades, but wandering without a plan can bleed your supplies. Check the map for side paths, complete merchant requests when they are nearby, and return to locked routes later when you have the right item.",
          "If the game is too tense, Assisted difficulty is a legitimate choice. It offers more generous aim assistance and resource behavior without removing the game's structure. The best difficulty is the one that keeps you playing.",
        ],
        callout: {
          type: "note",
          title: "Save rooms are breathing room",
          body: "Use save rooms to reorganize the case, check your weapons, and decide what you are actually prepared to carry into the next area.",
        },
      },
    ],
    tags: ["beginner", "village", "combat", "inventory", "knife", "resource management"],
    featured: true,
  },
  {
    slug: "gta-iv-liberty-city-start",
    title: "GTA IV for New Players: Finding Your Feet in Liberty City",
    gameSlug: "grand-theft-auto-iv",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A practical start for Niko's story: learn the weight of the cars, fight from cover, and treat Liberty City's friendships as part of the job.",
    intro:
      "Grand Theft Auto IV is a slower, heavier game than the later entries in the series. Cars take time to stop, gunfights punish standing in the open, and the story is built around Niko's relationships rather than a single rise to power. The opening hours are easier when you stop playing it like a modern arcade sandbox.",
    updatedAt: "2026-11-15",
    author: EDITOR,
    sections: [
      {
        id: "drive-with-weight",
        heading: "Drive like the car has weight",
        paragraphs: [
          "Liberty City's vehicles have a strong sense of mass. Brake before a turn instead of during it, avoid slamming the handbrake at speed, and give yourself room to stop in traffic. The camera and handling take adjustment, especially if you are used to GTA V.",
          "For long trips, call a taxi. It is faster than learning every shortcut, and it keeps you from arriving at a mission with a damaged car. When you do drive, use the GPS line as a guide rather than a racing line; the city's grid is not always the quickest route.",
        ],
        bullets: [
          "Brake early and steer smoothly.",
          "Use taxis for long trips across the city.",
          "Keep a getaway car in reasonable condition before a mission.",
          "Check the minimap for police positions after a wanted level starts.",
        ],
        callout: {
          type: "tip",
          title: "The taxi is a fast-travel button",
          body: "Hail a taxi, choose a destination, and skip the ride if you have already seen the route. This is especially useful when a mission is on the other side of Liberty City.",
        },
      },
      {
        id: "fight-from-cover",
        heading: "Fight from cover, not in the open",
        paragraphs: [
          "Gunfights are built around cover, aim, and short bursts of movement. Use hard cover, lean out to take a shot, and move when an enemy flanks or reloads. Blind firing is a last resort; it wastes ammunition and rarely hits what you need.",
          "Keep your health and armor topped up before a mission. Body armor is not optional, and a visit to a hospital or a hot dog stand is cheaper than restarting a long shootout. The wanted system is persistent, so breaking line of sight and leaving the area is often smarter than fighting every officer.",
        ],
        callout: {
          type: "warning",
          title: "Do not treat every fight as a last stand",
          body: "If a mission goes sideways, retreat, heal, and re-engage from a better angle. The game gives you a city to use; it does not expect you to hold one piece of cover forever.",
        },
      },
      {
        id: "friends-and-favors",
        heading: "Keep your friends close, but not on a timer",
        paragraphs: [
          "Roman, Little Jacob, Brucie, and other contacts can offer useful perks through friendship. Those perks are real, but the phone calls and invitations can become a second job if you accept everything. Treat social plans as optional content, not a checklist that must be cleared before the next mission.",
          "Answer calls when you want the perk or the conversation, and let the rest wait. Relationships in GTA IV are part of the story's texture, but they are not a moral test. Your first priority is the mission rhythm that keeps the story moving.",
        ],
        bullets: [
          "Friendship can unlock useful services and discounts.",
          "Accept invitations when they fit your session, not every time the phone rings.",
          "Check your phone for mission messages after sleeping or saving.",
          "Do not spend all your money on clothes before buying armor.",
        ],
      },
      {
        id: "save-and-experiment",
        heading: "Save often and try the expansions later",
        paragraphs: [
          "GTA IV is an older PC release with some rough edges. Save after major missions, keep a manual save before expensive decisions, and do not assume the autosave has you covered. If a mission feels unstable because of a vehicle or a scripted chase, retry from a clean save rather than fighting a broken state.",
          "The Complete Edition includes The Lost and Damned and The Ballad of Gay Tony. Both are worth playing, but they are better as a change of perspective after the main story than as a detour in the middle of Niko's campaign. Finish one story, then let Liberty City show you another side.",
        ],
        callout: {
          type: "note",
          title: "Older game, older habits",
          body: "Manual saves, a full armor bar, and a reliable car solve more problems than heroics. Treat the city as a system and it becomes much less punishing.",
        },
      },
    ],
    tags: ["beginner", "liberty city", "niko bellic", "driving", "cover shooting", "rockstar"],
    featured: true,
  },
  {
    slug: "gta-v-story-mode-start",
    title: "GTA V Story Mode: A Practical Start for New Players",
    gameSlug: "grand-theft-auto-v",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A spoiler-light route through the opening hours: learn the three leads, plan heists instead of improvising them, and keep Story Mode separate from GTA Online.",
    intro:
      "Grand Theft Auto V can feel like several games at once: a character drama, a heist simulator, a driving sandbox, and a satirical tour of Los Santos. Story Mode is easiest to enjoy when you follow its structure instead of trying to complete every icon on the map before the first big job.",
    updatedAt: "2026-11-15",
    author: EDITOR,
    sections: [
      {
        id: "learn-the-three-leads",
        heading: "Learn the three leads before chasing 100 percent",
        paragraphs: [
          "Michael, Franklin, and Trevor have different skills, homes, and social circles. The story switches between them for a reason. Pay attention to their special abilities and to the way missions use all three roles; that rhythm is the heart of the campaign.",
          "Do not try to max every character's stats in the opening hours. Let the story introduce their corners of the map, then spend money and time on the activities that fit the character you are playing. The game gives you plenty of room to come back.",
        ],
        bullets: [
          "Switch characters between missions to hear different conversations and see different parts of the city.",
          "Use each character's special ability when a chase or shootout starts to go wrong.",
          "Keep a weapon loadout that suits your usual range.",
          "Do not spend all your money on cosmetic upgrades before a heist.",
        ],
        callout: {
          type: "tip",
          title: "The map is not a to-do list",
          body: "Los Santos is full of side activities, but the main story already moves you around the map. Follow the narrative first and let optional content fill the gaps later.",
        },
      },
      {
        id: "plan-the-heists",
        heading: "Treat heists as plans, not just shootouts",
        paragraphs: [
          "Heists ask you to choose an approach and a crew. Cheaper crew members may take a smaller cut, but their performance can change how the job unfolds. Read the setup text before committing; the game usually tells you what each choice buys you.",
          "During a heist, follow the prompts and use the character you are controlling rather than trying to do every job yourself. The game is designed around switching roles, and a plan that fits the crew is more reliable than one that assumes everyone is interchangeable.",
        ],
        callout: {
          type: "warning",
          title: "Do not judge every crew member by price",
          body: "A cheap specialist can be a false economy if their skill does not match the role. Balance cost against competence, especially on the jobs that matter.",
        },
      },
      {
        id: "spend-money-with-a-plan",
        heading: "Spend money with a plan",
        paragraphs: [
          "Story Mode's economy is generous compared with GTA Online. Buy armor, ammunition, and a reliable vehicle before a major mission, then consider property and businesses when the story slows down. Properties generate income and side missions, but they are not required to finish the campaign.",
          "Do not buy every weapon in the shop just because you can. Carry the tools you use, keep enough money for heist prep, and leave the exotic purchases for after the main story if you are curious. The stock market is a separate game; treat it as optional and risky.",
        ],
        bullets: [
          "Keep armor and health items stocked before a mission.",
          "Upgrade the vehicles you actually drive.",
          "Use property income for long-term purchases, not impulse buys.",
          "Save before a major investment or a heist commitment.",
        ],
      },
      {
        id: "story-and-online",
        heading: "Keep Story Mode and GTA Online separate",
        paragraphs: [
          "GTA Online is a different economy, progression track, and social space. Your Story Mode money and properties do not carry over, and the online version expects different habits: public sessions, co-op jobs, and a much longer grind.",
          "If you want the single-player story, start there and ignore the online prompts for now. If you want to try GTA Online later, treat it as its own game and check the current onboarding flow before spending real money. The two modes share a map, not a save file.",
        ],
        callout: {
          type: "note",
          title: "Cheats have a cost",
          body: "Story Mode cheat codes can change the experience and may block achievements while active. This hub does not list them; keep a clean save if achievements matter to you.",
        },
      },
    ],
    tags: ["beginner", "los santos", "story mode", "heists", "gta online", "rockstar"],
    featured: true,
  },
  {
    slug: "la-noire-crime-scene-basics",
    title: "L.A. Noire: Reading a Crime Scene Without Guessing",
    gameSlug: "la-noire",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "How to search for evidence, handle interrogations, and use intuition without turning every case into a save-scumming exercise.",
    intro:
      "L.A. Noire is less about shooting than about attention. A case can turn on a discarded receipt, a bruise, or a witness's hesitation. The game gives you tools to find those details, but it rarely points at the answer directly. The first few cases are a lesson in slowing down.",
    updatedAt: "2026-11-15",
    author: EDITOR,
    sections: [
      {
        id: "search-the-scene",
        heading: "Search the scene, not the minimap",
        paragraphs: [
          "At a crime scene, walk the perimeter before touching the obvious clues. Cole will inspect objects when you approach them, and the notebook records what matters. Look for inconsistencies: a body in the wrong position, a missing item, a witness who knows too much.",
          "The game's audio and controller cues can help, but they are not a substitute for reading the scene. If you are playing with headphones, listen for the low musical sting that often signals a clue, then confirm what it is before moving on.",
        ],
        bullets: [
          "Walk the whole scene before leaving.",
          "Inspect objects from several angles when the prompt allows it.",
          "Read the notebook after a search; it connects evidence to questions.",
          "Do not chase every collectible during a case.",
        ],
        callout: {
          type: "tip",
          title: "Let the scene breathe",
          body: "Rushing to the next objective can skip dialogue and context. L.A. Noire rewards the detective who stands still for a few extra seconds.",
        },
      },
      {
        id: "interrogations-are-tests",
        heading: "Interrogations are evidence tests",
        paragraphs: [
          "Each interrogation response should follow from what you have found. If a witness says something that contradicts a piece of evidence, challenge it. If the evidence is incomplete, press for more detail instead of accusing. The game is asking whether you can connect the two.",
          "The labels differ by version: the original uses Truth, Doubt, and Lie, while later releases use Good Cop, Bad Cop, and Accuse. The underlying logic is the same. Match the response to the evidence, not to the tone you feel like using.",
        ],
        callout: {
          type: "warning",
          title: "Do not guess at a lie",
          body: "Accusing a witness requires evidence that proves the lie. If you do not have it, press the statement or move on and come back with more information.",
        },
      },
      {
        id: "driving-and-action",
        heading: "Driving and action are secondary",
        paragraphs: [
          "Chases and shootouts are part of the job, but L.A. Noire is not a cover shooter at heart. Use your partner's driving when the game offers it, keep your distance in a tail, and avoid damaging the car you may need later.",
          "In combat, take cover and aim for controlled shots. The game's health system is forgiving compared with modern action games, but a failed chase can still cost you evidence or a clean conclusion. If an action sequence goes badly, the story usually continues; you do not need a perfect run.",
        ],
        bullets: [
          "Let your partner drive when you want to review the case.",
          "Keep a safe distance during tailing sequences.",
          "Use cover before returning fire.",
          "Check the case file before starting a new sequence.",
        ],
      },
      {
        id: "use-intuition-sparingly",
        heading: "Use intuition without erasing the detective",
        paragraphs: [
          "Intuition points can remove a wrong response or reveal a clue. They are a safety net, not the main event. Save them for a question where you have a strong theory but cannot find the supporting evidence, rather than spending them on every uncertainty.",
          "The game is more interesting when you get some calls wrong. A bad accusation can close a line of inquiry or change how a partner sees you. If you want a clean case, use saves and intuition deliberately; if you want the story, let the mistakes stand.",
        ],
        callout: {
          type: "note",
          title: "Version differences matter",
          body: "L.A. Noire has been re-released with different control and interrogation labels. Check the on-screen prompts for your version rather than following a guide written for another edition.",
        },
      },
    ],
    tags: ["beginner", "detective", "interrogation", "evidence", "los angeles", "noir"],
    featured: true,
  },
  {
    slug: "yakuza-0-first-chapters",
    title: "Yakuza 0: Starting Two Crime Sagas at Once",
    gameSlug: "yakuza-0",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A practical start for Kiryu and Majima: learn both combat styles, spend money on abilities, and leave room for the city's strangest side stories.",
    intro:
      "Yakuza 0 begins with two protagonists in two cities, each with his own fighting style, problems, and nightlife. The game is generous with distractions, but its story is structured in chapters. The easiest way to start is to follow those chapters and treat the side content as a reward rather than a second job.",
    updatedAt: "2026-11-15",
    author: EDITOR,
    sections: [
      {
        id: "follow-the-chapters",
        heading: "Follow the chapter structure",
        paragraphs: [
          "The game alternates between Kazuma Kiryu in Tokyo and Goro Majima in Osaka. Each chapter gives you a location, a problem, and a reason to explore. Finish the current thread before trying to max out both characters' side content; the story assumes you are paying attention to the city around you.",
          "The map is dense but not huge. Use the taxi to move between districts, check the objective marker, and talk to the people the chapter points you toward. If you wander into a high-level fight, leave and come back after upgrading.",
        ],
        bullets: [
          "Follow the main objective until a chapter opens up side content.",
          "Check both protagonists' upgrade menus when control switches.",
          "Use taxis to cross the city without wasting time.",
          "Save at phone booths before entering a long story sequence.",
        ],
        callout: {
          type: "tip",
          title: "The city is the tutorial",
          body: "Walking through the streets introduces restaurants, arcades, and substories. You do not have to sample everything, but the detours explain why the characters care about these places.",
        },
      },
      {
        id: "learn-both-fighting-styles",
        heading: "Learn both fighting styles",
        paragraphs: [
          "Kiryu and Majima each have multiple combat styles. Kiryu's Brawler, Rush, and Beast styles trade speed, mobility, and power differently; Majima's Thug, Slugger, and Breaker styles do the same with different rhythms. Switching styles mid-fight is part of the combat, not a menu formality.",
          "Do not ignore heat actions. They are flashy, but they also control groups and finish fights quickly. Learn the prompts for environmental heat actions and use them when a crowd starts surrounding you.",
        ],
        callout: {
          type: "warning",
          title: "Do not fight every group",
          body: "Street fights can be useful for money and practice, but they are not mandatory. If you are trying to reach a story objective, keep moving unless the encounter gives you something you need.",
        },
      },
      {
        id: "money-is-the-upgrade-system",
        heading: "Money is the upgrade system",
        paragraphs: [
          "Yakuza 0's economy is deliberately exaggerated. Cash is everywhere, and the game wants you to spend it on abilities, equipment, and the real-estate or cabaret-club minigames. Hoarding money does not make the story easier; investing in your character does.",
          "Learn which upgrades matter for your preferred style, then branch out. Health and heat generation are always useful. Damage upgrades help against bosses, but the ability to control a crowd is often more valuable in ordinary street fights.",
        ],
        bullets: [
          "Upgrade health and heat capacity early.",
          "Spend on the styles you actually use.",
          "Try the business minigames when a chapter slows down.",
          "Keep enough money for healing items and equipment.",
        ],
      },
      {
        id: "leave-room-for-the-weird",
        heading: "Leave room for the weird",
        paragraphs: [
          "Yakuza 0's substories range from sentimental to absurd, and they are one of the reasons the game's world feels alive. Some reward useful items or abilities; others are simply funny. Doing a few in each chapter keeps the pace from becoming a straight crime drama.",
          "Minigames such as karaoke, arcade games, and Pocket Circuit are optional, but they also teach you what the characters are like when they are not fighting for their lives. The story is serious; the city is not. Both matter.",
        ],
        callout: {
          type: "note",
          title: "Save before a long detour",
          body: "Yakuza 0 uses phone booths for manual saves. Save before a substory chain or a minigame tournament so you can leave without losing progress.",
        },
      },
    ],
    tags: ["beginner", "kiryu", "majima", "combat styles", "money", "substories", "sega"],
    featured: false,
  },
  {
    slug: "bioshock-rapture-first-visit",
    title: "BioShock Remastered: A First Visit to Rapture",
    gameSlug: "bioshock-remastered",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "How to explore Rapture with purpose: listen for diaries, conserve EVE, and choose plasmids that answer the room rather than the tier list.",
    intro:
      "BioShock is a first-person shooter, but its best moments are quiet: a corridor lit by a failing sign, a voice on an audio diary, a vending machine that sounds almost cheerful. The combat is real, but the game is also asking you to pay attention to the city. A patient first visit is more rewarding than a sprint.",
    updatedAt: "2026-11-15",
    author: EDITOR,
    sections: [
      {
        id: "explore-for-diaries",
        heading: "Explore for audio diaries and supplies",
        paragraphs: [
          "Rapture is built from rooms that reward curiosity. Search desks, lockers, and corpses for audio diaries, ammunition, and healing items. Diaries are not just collectibles; they carry the arguments and personal histories that the main plot only hints at.",
          "Do not ignore food, cigarettes, and alcohol just because they have drawbacks. Some restore health or EVE, and the penalties can be managed. Read the description before consuming something you do not need.",
        ],
        bullets: [
          "Pick up and play every audio diary you find.",
          "Search containers before leaving a room.",
          "Keep a small reserve of healing items and EVE.",
          "Read the effects of consumables before using them.",
        ],
        callout: {
          type: "tip",
          title: "The city is the story",
          body: "A poster, a shop sign, or a recorded argument can tell you more about Rapture than a cutscene. Slow down in new areas.",
        },
      },
      {
        id: "switch-plasmids-and-weapons",
        heading: "Switch plasmids and weapons for the room",
        paragraphs: [
          "Plasmids give you tools beyond a gun: electricity can stun, fire can damage over time, telekinesis can throw objects, and other powers control space. The right plasmid can turn a dangerous room into an manageable one, especially when you use the environment.",
          "EVE is a resource. Do not spam expensive powers on a single enemy, and look for EVE hypos before a big fight. Weapons have their own ammo pools and upgrade paths, so carry a reliable fallback rather than relying on one exotic gun.",
        ],
        callout: {
          type: "warning",
          title: "Do not ignore hacking",
          body: "Hacking security cameras, turrets, and vending machines can save resources and turn a room's defenses against its occupants. It is worth the time when you are not in immediate danger.",
        },
      },
      {
        id: "spend-adam-deliberately",
        heading: "Spend ADAM deliberately",
        paragraphs: [
          "ADAM is the currency for plasmids and tonics. You will find Little Sisters and Big Daddies throughout Rapture, and the choices around them affect your resources and the story's tone. Do not rush a Big Daddy fight without a plan; they are designed to be dangerous.",
          "Tonics are passive upgrades, and some of the best ones are quiet: more health, more EVE, better hacking, or reduced damage. Read the full description before buying. A build that supports your favorite plasmid is usually stronger than a scattered collection of powers.",
        ],
        bullets: [
          "Fight Big Daddies only when you are prepared.",
          "Buy tonics that support your preferred playstyle.",
          "Keep enough ADAM for a meaningful upgrade rather than small impulse buys.",
          "Save before a major choice if you want to see another outcome.",
        ],
      },
      {
        id: "use-the-remaster-options",
        heading: "Use the remaster's options",
        paragraphs: [
          "The remaster includes updated visuals, a developer commentary track, and the usual difficulty options. If you are here for the story, do not feel obligated to play on hard. If you want the commentary, treat it as a second playthrough feature so it does not interrupt your first visit.",
          "Save often, especially before a new district or a Big Daddy encounter. Older PC releases can have technical quirks, and a clean manual save is a better remedy than replaying a long section.",
        ],
        callout: {
          type: "note",
          title: "The twist is part of the conversation",
          body: "BioShock's reputation rests partly on a major story turn. This guide avoids naming it; the game is more interesting when you let the narrative unfold on its own.",
        },
      },
    ],
    tags: ["beginner", "rapture", "plasmids", "eve", "adam", "audio diaries", "bioshock"],
    featured: true,
  },
  {
    slug: "portal-2-puzzle-basics",
    title: "Portal 2: Thinking With Portals Without Getting Stuck",
    gameSlug: "portal-2",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A spoiler-light primer on surfaces, momentum, gels, and co-op communication, plus a few habits that make Aperture's tests less frustrating.",
    intro:
      "Portal 2 rarely punishes you for experimenting. It punishes you for assuming a room works the way it looks. The solution is usually a change of perspective, a different surface, or a second portal placed somewhere you dismissed. The game is funniest when you stop treating it like a test and start treating it like a conversation with a malicious building.",
    updatedAt: "2026-11-15",
    author: EDITOR,
    sections: [
      {
        id: "read-the-room",
        heading: "Read the room before placing a portal",
        paragraphs: [
          "Look for the surfaces that accept portals, then trace where a second portal would take you. Height matters. A portal on the floor can change a fall into a launch, and a portal on a wall can turn a dead end into a shortcut.",
          "If a chamber feels impossible, walk the whole room before trying the obvious solution. The exit may be visible from a different angle, or a button may be reachable through a portal you have not placed yet. Portal 2 hides solutions in plain sight.",
        ],
        bullets: [
          "Identify portal surfaces before experimenting.",
          "Look up; ceiling portals are often part of the answer.",
          "Check whether a button, cube, or exit is reachable from another height.",
          "Step back and look at the room from the entrance again.",
        ],
        callout: {
          type: "tip",
          title: "When stuck, invert the problem",
          body: "Ask where you need to come out rather than where you need to go in. Place the exit portal first, then work backward to the entrance.",
        },
      },
      {
        id: "momentum-is-a-tool",
        heading: "Momentum is a tool",
        paragraphs: [
          "Portals preserve speed. Falling through one portal and emerging from another can launch you across a gap, and later test chambers add gels, light bridges, and excursion funnels that change the route entirely. You do not need to understand the physics to use the result.",
          "Experiment with height and timing. A long fall into a floor portal often gives you more distance than a short one. If a jump looks impossible, check whether a nearby ledge or funnel can give you the speed you need.",
        ],
        callout: {
          type: "warning",
          title: "Do not fight the animation",
          body: "If a fling or gel sequence keeps failing, reset the chamber and try a different setup. Portal 2's physics are consistent; repeated failure usually means the route is wrong, not the timing.",
        },
      },
      {
        id: "co-op-is-its-own-campaign",
        heading: "Co-op is its own campaign",
        paragraphs: [
          "The co-op campaign is not a second-player add-on to the solo tests. It has separate rooms, a separate story, and puzzles that require two portal guns. Both players can place portals, which means a solution can be split between two viewpoints.",
          "Talk to your partner, use the ping tool, and agree on who is placing which portal. If you are stuck, describe what you can see from your side of the room. Portal 2's co-op is a communication game disguised as a physics game.",
        ],
        bullets: [
          "Use the ping tool to point at surfaces and objects.",
          "Agree on portal ownership before a timed sequence.",
          "Split up to inspect different sides of a chamber.",
          "Do not assume your partner can see what you can see.",
        ],
      },
      {
        id: "commentary-and-challenge",
        heading: "Commentary is for the second pass",
        paragraphs: [
          "Portal 2 includes developer commentary nodes in the campaign. They are fascinating, but they interrupt the pacing and sometimes discuss design solutions. Save them for a second playthrough or for rooms you have already solved.",
          "Challenge mode and community test chambers extend the game after the credits. They are optional, but they are a good way to see how the portal mechanics can be pushed. There is no need to complete them before the story; Portal 2 is generous with credits and endings.",
        ],
        callout: {
          type: "note",
          title: "No combat, still precise",
          body: "Portal 2 has no conventional gunfights, but its movement and timing are still exact. A calm approach and a clean save are usually better than rushing a chamber.",
        },
      },
    ],
    tags: ["beginner", "portals", "puzzles", "co-op", "aperture science", "valve"],
    featured: true,
  },
  {
    slug: "dark-souls-iii-first-hours",
    title: "Dark Souls III for New Players: The First Hours in Lothric",
    gameSlug: "dark-souls-iii",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A spoiler-light start for new Ashen Ones: choose a comfortable weapon, spend souls with purpose, and learn when a fight is telling you to explore elsewhere.",
    intro:
      "Dark Souls III can feel hostile before it feels fair. The opening hours are not about mastering every enemy; they are about building a character you understand and learning how the game communicates danger. This guide stays close to the early game and avoids story spoilers.",
    updatedAt: "2026-11-16",
    author: EDITOR,
    sections: [
      {
        id: "start-with-a-comfortable-kit",
        heading: "Start with a kit that fits your instincts",
        paragraphs: [
          "Your starting class is a set of beginning stats and gear, not a permanent job. Pick the one whose weapon and armor feel natural. A shield with decent stability makes early encounters easier to read, while a faster weapon gives you more chances to recover from a mistimed swing.",
          "Do not worry about the perfect build yet. The important early decision is whether you prefer blocking, rolling, or keeping distance. Once you know that, you can spend levels in the stats that support the weapon you actually enjoy using.",
        ],
        bullets: [
          "Test the weapon speed before committing to a long upgrade path.",
          "Keep your equipment load below the point where your roll becomes heavy.",
          "Buy a few basic consumables instead of hoarding every soul.",
          "Read item descriptions; they often explain a weapon's scaling or a nearby danger.",
        ],
        callout: {
          type: "tip",
          title: "Stamina is a defensive stat",
          body: "A larger stamina bar gives you another roll or swing in reserve. Early on, that extra margin is often more valuable than a small damage increase.",
        },
      },
      {
        id: "upgrade-the-boring-things",
        heading: "Upgrade the boring things first",
        paragraphs: [
          "Vigor and endurance make every encounter more forgiving. A larger health pool lets you survive a mistake, and more stamina lets you disengage. Weapon upgrades matter too, but a +2 weapon with a comfortable health bar is usually better than a fragile character with a slightly stronger blade.",
          "Look for Estus Shards and Undead Bone Shards as you explore. More healing charges and stronger flasks improve every route. If you feel stuck, check whether you missed a shard before assuming you need to grind levels.",
        ],
        bullets: [
          "Raise Vigor when ordinary enemies can kill you in two hits.",
          "Raise Endurance if you frequently run out of stamina while blocking or rolling.",
          "Upgrade one main weapon rather than spreading materials across several.",
          "Save rare upgrade materials for a weapon you have tested in real fights.",
        ],
      },
      {
        id: "death-is-a-route",
        heading: "Treat death as a route, not a verdict",
        paragraphs: [
          "Lothric is built from shortcuts. A door you open or a lift you activate can turn a long dangerous walk into a short safe one. When a route keeps killing you, look for a side path before throwing yourself at the same fight again.",
          "Bosses are pattern tests. Spend a few attempts learning the timing of one attack instead of trying to win immediately. If the damage feels impossible, leave, explore another area, and return with more health, a better weapon, or a summon sign.",
        ],
        callout: {
          type: "warning",
          title: "Do not ignore the ember",
          body: "Embering increases your maximum health but also opens you to online invasions. If you want a quieter first run, play unembered while you learn an area and ember before a boss you want help with.",
        },
      },
      {
        id: "know-when-to-leave",
        heading: "Know when to leave a fight",
        paragraphs: [
          "Dark Souls III rarely requires you to beat one specific enemy before you can progress. If a detour keeps appearing, take it. Optional areas often provide upgrade materials, Estus Shards, and useful rings that make the main path more manageable.",
          "This is not a difficulty skip; it is how the world is designed. The game expects you to assemble a route, a build, and a set of tools. Patience with exploration is part of the combat loop.",
        ],
        bullets: [
          "Leave a boss after a few attempts if you are not learning anything new.",
          "Explore side paths for shards and upgrade materials.",
          "Check your weapon's condition and upgrade level before a long attempt.",
          "Use summons if you want help; they are part of the intended online system.",
        ],
      },
    ],
    tags: ["beginner", "first hours", "lothric", "builds", "bosses", "soulslike"],
    featured: true,
  },
  {
    slug: "mass-effect-legendary-edition-new-player",
    title: "Mass Effect Legendary Edition: A New Player's Roadmap",
    gameSlug: "mass-effect-legendary-edition",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "How to approach a three-game continuity, build a Shepard you can sustain, and keep the Normandy's crew and choices from slipping past you.",
    intro:
      "The Legendary Edition is a trilogy, not a single campaign. That is exciting, but it also means a new player needs a plan for continuity. This guide focuses on durable habits: how to build Shepard, how to use the Normandy, and how to live with choices that carry forward.",
    updatedAt: "2026-11-15",
    author: EDITOR,
    sections: [
      {
        id: "play-in-order",
        heading: "Play in order and keep one continuity",
        paragraphs: [
          "Start with the first Mass Effect and import your save into each sequel. The trilogy is designed around continuity: characters remember earlier conversations, and decisions can return much later. Jumping between games or starting a sequel without an import changes the context.",
          "Each game has a different combat rhythm and interface, so expect an adjustment period when moving between them. The first entry is the most RPG-heavy; the sequels are more direct. That shift is part of the trilogy's history, not a sign that you are playing them wrong.",
        ],
        callout: {
          type: "tip",
          title: "Name your saves clearly",
          body: "Use a consistent save naming habit and keep a manual save before major missions. The trilogy rewards continuity, and a clear save history makes it easier to revisit a choice without replaying an entire game.",
        },
      },
      {
        id: "build-a-sustainable-shepard",
        heading: "Build a Shepard you can sustain",
        paragraphs: [
          "Choose a class based on the combat loop you enjoy. Soldiers lean on weapons and durability, while classes with biotics or tech powers add crowd control and utility. You do not need to optimize for the hardest difficulty on a first run; you need a character whose tools you will actually use.",
          "Squad composition matters as much as Shepard's class. Bring one companion who can strip shields and another who can handle armor, or build around crowd control if you prefer to control the pace of a fight. Read power descriptions and test them in low-stakes encounters.",
        ],
        bullets: [
          "Pick a class whose signature power you will use every fight.",
          "Keep one squadmate for defense and one for a damage type you lack.",
          "Upgrade a small set of powers rather than spreading points thin.",
          "Use cover deliberately; standing in the open is still a bad plan.",
        ],
      },
      {
        id: "use-the-normandy",
        heading: "Treat the Normandy as a checklist",
        paragraphs: [
          "After major missions, walk the ship and talk to your crew. Conversations unlock context, side missions, and relationships that the main plot does not always surface. The Normandy is also where upgrades and loadout changes happen, so make a pass before leaving for a new cluster.",
          "Read the codex when a term is unclear, but do not feel obligated to memorize it. The game is good at surfacing the information you need in dialogue. The codex is there for the parts you want to understand more deeply.",
        ],
        callout: {
          type: "note",
          title: "Choices are not a checklist",
          body: "You do not need to make the same decisions as a guide. The trilogy is built to absorb different Shepards. Make choices you can explain, and let the consequences become part of your version of the story.",
        },
      },
      {
        id: "expect-a-long-arc",
        heading: "Expect a long arc, not a single story",
        paragraphs: [
          "The trilogy's emotional weight comes from accumulation. Crew relationships, faction outcomes, and small conversations matter because they return across three games. Rushing toward the finale can make the payoffs feel abrupt.",
          "Take breaks between games if you need them. Each entry has its own beginning, middle, and ending, and the Legendary Edition is generous enough to let you treat them as separate chapters of one long mission.",
        ],
        bullets: [
          "Finish side conversations before advancing the main plot.",
          "Keep a save before missions that clearly signal a major decision.",
          "Rotate squadmates to hear different perspectives.",
          "Do not treat the first game as a tutorial for the second; it is its own story.",
        ],
      },
    ],
    tags: ["beginner", "trilogy", "commander shepard", "choices", "squad", "normandy"],
    featured: false,
  },
  {
    slug: "persona-5-royal-first-palace",
    title: "Persona 5 Royal: A Spoiler-Light Guide to Your First Palace",
    gameSlug: "persona-5-royal",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "A practical start for your first Palace: protect your calendar, learn the weakness loop, and build confidants without trying to optimize every day.",
    intro:
      "Persona 5 Royal gives you a calendar, a dungeon, and a social life, then asks you to balance all three. The first Palace is a tutorial in disguise, but it is also where new players form habits that last the whole year. This guide avoids story spoilers and focuses on the systems.",
    updatedAt: "2026-11-14",
    author: EDITOR,
    sections: [
      {
        id: "protect-the-calendar",
        heading: "Protect the calendar",
        paragraphs: [
          "Palace deadlines are real. Do not wait until the last day to finish a dungeon, because the game will not always give you a clean reset. Enter early, map the route, and leave yourself time for equipment, healing, and story scenes.",
          "Days are a resource, but they are not a score. You do not need to maximize every afternoon. A steady routine is better than burning out on a perfect schedule. If a deadline is approaching, prioritize the Palace over optional hangouts.",
        ],
        callout: {
          type: "warning",
          title: "Do not save only inside the Palace",
          body: "Keep a save from before a Palace deadline and another from a safe room. If you find yourself underprepared, a clean save gives you room to retreat and return with better items.",
        },
      },
      {
        id: "learn-the-weakness-loop",
        heading: "Learn the weakness loop",
        paragraphs: [
          "Combat is built around hitting weaknesses, knocking enemies down, and passing turns to allies. The first Palace teaches you to experiment with elemental attacks rather than repeating the same action. If an enemy resists one element, try another or use status effects.",
          "Do not hoard every consumable. SP-restoring items and elemental attack items are tools for finishing a Palace route, not trophies. Use them when they save a trip or prevent a wipe. You can always earn more later.",
        ],
        bullets: [
          "Target weaknesses before using raw damage.",
          "Use baton passes to chain turns when an enemy is down.",
          "Keep a few SP recovery items for long Palace runs.",
          "Switch Personas when a fight calls for a different element.",
        ],
      },
      {
        id: "build-confidants-deliberately",
        heading: "Build confidants deliberately",
        paragraphs: [
          "Confidants unlock abilities that make both combat and daily life smoother. Prioritize the people whose abilities match how you want to play, and carry a matching Persona when you spend time with them. You do not need to max everyone in one run.",
          "Royal adds new confidants and a new semester, so leaving room in your schedule matters more than chasing every available scene. Treat relationships as long-term investments rather than a checklist to clear before the next deadline.",
        ],
        callout: {
          type: "tip",
          title: "Carry the right Persona",
          body: "When you hang out with a confidant, carrying a Persona of the matching arcana can increase the relationship progress. This is one of the easiest efficiency gains in the game.",
        },
      },
      {
        id: "fuse-and-experiment",
        heading: "Fuse, do not hoard",
        paragraphs: [
          "Personas are meant to be fused. A full roster of low-level favorites is less useful than a smaller set that covers different elements and support roles. Use the Velvet Room regularly, and do not be afraid to sacrifice a Persona you are not using.",
          "Royal adds extra tools that make fusion and combat more flexible. Read the descriptions as they unlock, but do not let the systems overwhelm the first Palace. The core loop is still simple: find a weakness, exploit it, and keep your SP above zero.",
        ],
        bullets: [
          "Fuse duplicates and unused Personas instead of hoarding them.",
          "Keep at least one Persona with healing or support skills.",
          "Check fusion results before committing to an expensive combination.",
          "Do not spend all your money on cosmetic gear early; save for useful equipment.",
        ],
      },
    ],
    tags: ["beginner", "first palace", "combat", "confidants", "calendar", "jrpg"],
    featured: true,
  },
  {
    slug: "monster-hunter-world-first-hunts",
    title: "Monster Hunter: World — How to Prepare for Your First Hunts",
    gameSlug: "monster-hunter-world",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "Choose a weapon by feel, pack a real item loadout, and learn the monster's tells before worrying about the perfect build.",
    intro:
      "Monster Hunter: World is less about rushing a monster and more about turning a hunt into a plan. The first few hours are a tutorial in preparation, weapon feel, and reading the environment. This guide covers the habits that make every later hunt easier.",
    updatedAt: "2026-11-13",
    author: EDITOR,
    sections: [
      {
        id: "pick-a-weapon-by-feel",
        heading: "Pick a weapon by feel, not by tier list",
        paragraphs: [
          "All 14 weapon types are viable, but they ask for different rhythms. A great sword is about commitment and timing; a dual blades user wants openings and stamina management; a bow user is managing distance and coatings. Spend time in the training area and take a few low-risk hunts before deciding.",
          "It is normal to switch weapons early. The goal is to find a move set that makes sense to you, not to pick the strongest option before you understand the game. Once you choose, upgrade one or two weapons rather than spreading materials across everything.",
        ],
        callout: {
          type: "tip",
          title: "Learn one combo and one recovery",
          body: "You do not need to memorize every move. Start with a reliable damage combo and a safe way to disengage. Those two habits carry you through most early hunts.",
        },
      },
      {
        id: "pack-for-the-hunt",
        heading: "Pack for the hunt",
        paragraphs: [
          "Before leaving Astera, check your item pouch. Bring healing, stamina recovery, traps, and the consumables that support your weapon. A hunt that fails because you ran out of items is usually a preparation problem, not a skill problem.",
          "Eat a meal before a quest for useful buffs, and check your armor skills. Early armor is less about raw defense than the skills attached to it. Health Boost, divine protection, and stamina-related skills can make learning a new monster much less punishing.",
        ],
        bullets: [
          "Bring more healing than you think you need.",
          "Carry traps and tranq bombs if you want to capture monsters.",
          "Check your armor skills before a new hunt.",
          "Use the item box to restock between quests.",
        ],
      },
      {
        id: "read-the-monster",
        heading: "Read the monster before you attack it",
        paragraphs: [
          "Every monster has tells: a wind-up, a turn, a roar, a tail sweep. Spend the first minute watching rather than trading hits. Learn which side is safe, when the monster is exhausted, and where your weapon can reach a weak point.",
          "The environment is part of the fight. Ledges, slopes, environmental traps, and other monsters can change the pace. A turf war is not a cutscene; it is an opportunity. Use the terrain and let the ecosystem do some of the work.",
        ],
        callout: {
          type: "warning",
          title: "Do not chase the monster blindly",
          body: "If a monster runs, sharpen, heal, and check your item pouch before following. Arriving at the next area with low health or a dull blade is how a good hunt turns into a cart.",
        },
      },
      {
        id: "learn-multiplayer-etiquette",
        heading: "Learn multiplayer etiquette",
        paragraphs: [
          "Online hunts are cooperative, but they still require timing. Do not wake a sleeping monster with a weak hit if someone is setting up a big attack. Share buffs, avoid crowding the same weak point, and use the chat or stickers to coordinate.",
          "SOS flares are a normal part of the game. Joining a hunt means accepting someone else's pace. If you are learning a monster, say so or start with solo hunts until you know the tells. A calm team is usually faster than a chaotic one.",
        ],
        bullets: [
          "Let the team set up before waking a sleeping monster.",
          "Bring items that help the group, not just yourself.",
          "Do not carve while a teammate is still fighting.",
          "Use the training area to learn a new weapon before joining a hunt.",
        ],
      },
    ],
    tags: ["beginner", "hunting", "weapons", "preparation", "co-op", "monster hunter"],
    featured: false,
  },
  {
    slug: "half-life-2-new-player",
    title: "Half-Life 2: A New Player's Guide to City 17",
    gameSlug: "half-life-2",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "How to read the environment, use physics as a weapon, and appreciate a campaign that rarely takes the camera away from you.",
    intro:
      "Half-Life 2 is old enough that its conventions have been copied many times, but it still has a specific rhythm. The game wants you to look around, listen, and use the space. This guide is spoiler-light and focuses on habits that make the campaign smoother.",
    updatedAt: "2026-11-12",
    author: EDITOR,
    sections: [
      {
        id: "use-the-environment",
        heading: "Use the environment",
        paragraphs: [
          "Half-Life 2's physics are not decoration. Crates, barrels, radiators, and debris can be picked up and thrown. Explosive barrels are weapons. A stack of objects can become cover or a step. When a room looks like a straightforward firefight, check whether the props offer a better answer.",
          "The gravity gun is the signature tool for a reason. It lets you solve puzzles and fight without spending ammunition. Practice picking up and launching objects early, when the stakes are low, so the tool feels natural later.",
        ],
        callout: {
          type: "tip",
          title: "Look for the alternate route",
          body: "If a fight feels too direct, scan the edges of the room. Vents, ledges, and movable props often provide a way around the obvious path.",
        },
      },
      {
        id: "manage-the-vehicle-sections",
        heading: "Manage the vehicle sections",
        paragraphs: [
          "The airboat and buggy chapters are longer than they first appear. Stop when you see a supply crate or a safe building, and do not treat the vehicle as invulnerable. A few seconds spent topping up health and ammunition can save a long replay.",
          "Vehicle sections are also exploration sections. Pull over when a side path looks interesting; the game often hides supplies, resistance hideouts, or environmental storytelling just off the main route.",
        ],
        bullets: [
          "Save before long vehicle stretches if you are playing on a harder difficulty.",
          "Check buildings and side paths for supplies.",
          "Use the vehicle's weapons deliberately; ammunition is finite.",
          "Do not ignore on-foot sections between driving segments.",
        ],
      },
      {
        id: "listen-to-the-silence",
        heading: "Listen to the silence",
        paragraphs: [
          "Half-Life 2 tells much of its story through NPC dialogue, radio chatter, and the environment. Characters talk while you move, and the game rarely stops to deliver a traditional cutscene. If you rush through a room, you can miss context that makes the next area click.",
          "The sound design is also a gameplay tool. Combine radios, distant gunfire, and creature noises tell you what is ahead. Headphones help, especially in the quieter resistance sections and the darker chapters.",
        ],
        callout: {
          type: "note",
          title: "No need to cheat the first run",
          body: "The campaign is generous with saves and checkpoints. If you want to use the developer console later, treat it as a second-playthrough tool rather than a requirement for finishing the game.",
        },
      },
      {
        id: "take-the-pacing-seriously",
        heading: "Let the pacing breathe",
        paragraphs: [
          "Half-Life 2 alternates between claustrophobic corridors, wide outdoor spaces, and puzzle-driven detours. That variety is the point. If a chapter feels slow, it is often setting up the next change in rhythm.",
          "Play in longer sessions if you can. The campaign's sense of continuity comes from moving through spaces without constant interruptions. A rushed hour-by-hour approach can make the transitions feel more abrupt than they are.",
        ],
        bullets: [
          "Explore rooms before triggering the obvious fight.",
          "Use quick saves before platforming or physics puzzles.",
          "Keep an eye on your health and suit charge between encounters.",
          "Play with sound on; audio cues are part of the navigation.",
        ],
      },
    ],
    tags: ["beginner", "city 17", "physics", "gravity gun", "fps", "valve"],
    featured: true,
  },
  {
    slug: "subnautica-first-days",
    title: "Subnautica: Surviving Your First Days on 4546B",
    gameSlug: "subnautica",
    category: "Beginner's Guide",
    level: "Beginner",
    excerpt:
      "Stabilize oxygen and supplies, scan before you build, and resist the urge to swim straight into the dark.",
    intro:
      "Subnautica opens with a crash and a very large ocean. The first days are about turning panic into a routine: secure water, food, and oxygen, then expand your range one safe step at a time. This guide is spoiler-light and focuses on early survival habits.",
    updatedAt: "2026-11-11",
    author: EDITOR,
    sections: [
      {
        id: "stabilize-the-basics",
        heading: "Stabilize oxygen, food, and water",
        paragraphs: [
          "Your first priority is a repeatable supply of breathable air, food, and water. The safe shallows around the lifepod contain materials for basic tools, and the fabricator turns those materials into equipment. Do not swim into deeper biomes until you can reliably return with oxygen to spare.",
          "Catch fish, collect salt, and learn which local plants and materials are useful. A small routine is better than a risky expedition. If you hear your oxygen warning, turn back immediately; the surface is always the fallback.",
        ],
        callout: {
          type: "tip",
          title: "Build the Seaglide early",
          body: "The Seaglide improves travel speed and gives you a light source. It changes how far you can safely explore and makes returning to the lifepod much less stressful.",
        },
      },
      {
        id: "scan-before-you-build",
        heading: "Scan fragments before you build",
        paragraphs: [
          "Blueprints come from scanning fragments and damaged technology. When you find a wreck or a debris field, scan what you can before leaving. A single fragment can unlock a tool or habitat piece that makes the next trip safer.",
          "Your first base does not need to be impressive. A small habitat with power, storage, and a fabricator is enough. Build near a reliable resource area, and expand only when you have a clear reason. Mobility matters more than a perfect layout in the early game.",
        ],
        bullets: [
          "Scan every new fragment you can reach safely.",
          "Build storage before your inventory becomes a mess.",
          "Use solar power in shallow water and check power output before expanding.",
          "Mark useful resource spots with beacons.",
        ],
      },
      {
        id: "respect-the-deep",
        heading: "Respect the deep",
        paragraphs: [
          "Subnautica's danger is often audible before it is visible. If a new biome feels wrong, leave. You do not need to fight every creature, and most early threats are better avoided than confronted. The game gives you tools for distraction and escape; use them.",
          "Depth is a progression gate. Your oxygen supply, vehicle depth rating, and equipment all need to match the environment. If you are constantly turning back, you are not failing; you are learning where the current boundary is.",
        ],
        callout: {
          type: "warning",
          title: "Do not chase a leviathan",
          body: "If something enormous appears, move away calmly and put terrain between you and it. Trying to get a closer look is how a routine supply run becomes a rescue mission.",
        },
      },
      {
        id: "follow-the-signals",
        heading: "Follow the signals at your pace",
        paragraphs: [
          "Radio messages and distress signals provide direction, but Subnautica rarely imposes a timer. Explore, build, and upgrade until you feel ready. The story is designed to be discovered between survival trips, not rushed through in one sitting.",
          "Keep notes or use beacons for anything you want to revisit. The ocean is dense, and a landmark that feels obvious now can be hard to find again after a long expedition. A little navigation discipline makes the whole game calmer.",
        ],
        bullets: [
          "Listen to radio messages when they arrive.",
          "Use beacons for wrecks, bases, and resource clusters.",
          "Return to base before your inventory is completely full.",
          "Upgrade oxygen and depth capacity before pushing into a new biome.",
        ],
      },
    ],
    tags: ["beginner", "survival", "oxygen", "base building", "exploration", "ocean"],
    featured: false,
  },
];
