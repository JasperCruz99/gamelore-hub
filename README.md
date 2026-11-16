# GameLore Hub

An independent editorial gaming resource for PC players. GameLore Hub collects
game information, beginner guides, walkthroughs, lore explainers, hidden
details, verified cheats, and curated video resources in one browsing-first
library.

This is a demo build with a small, complete sample library. It is not a game
launcher, download site, marketplace, or official publisher resource.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Google Fonts via `next/font` (Space Grotesk + Inter)

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Useful scripts

```bash
npm run lint        # ESLint
npm run typecheck   # TypeScript, no emit
npm run check       # lint + typecheck
npm run build       # production build
npm run start       # serve the production build
```

## Configuration

The site name, tagline, description, navigation, footer links, social
placeholders, and copyright year live in:

```text
src/lib/site.ts
```

Set a public URL for canonical links, Open Graph URLs, `sitemap.xml`, and
`robots.txt`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

A local fallback of `http://localhost:3000` is used when the variable is not
set. See `.env.example`.

## Content structure

Content is data-driven and typed:

```text
src/
  app/                 # routes, metadata, sitemap, robots
  components/          # layout, cards, filters, search, article UI
  data/
    games.ts           # game hubs
    guides.ts          # guide articles and sections
    lore.ts            # lore, trivia, hidden details
    cheats.ts          # verified commands and caveat notes
    videos.ts          # placeholder video slots + channel slots
    categories.ts      # homepage category cards
  lib/
    site.ts            # site-wide configuration
    content.ts         # selectors for related content
    filters.ts         # reusable matching / sorting helpers
    search.ts          # local search index and scoring
    utils.ts           # formatting helpers
  types/index.ts       # shared TypeScript types
```

Slugs are the stable identifiers. Games, guides, lore entries, cheats, and
videos all connect through `gameSlug`.

### Adding a game

1. Add the game to `src/data/games.ts`.
2. Add a portrait cover, a landscape hero, and screenshots to
   `public/images/games/<slug>/`. Record the image credit and source URL in the
   game entry.
3. Add guides in `src/data/guides.ts` (use the game slug).
4. Add lore in `src/data/lore.ts`.
5. Add verified cheats in `src/data/cheats.ts` only when the command can be
   represented accurately; otherwise add an entry to `cheatNotes`.
6. Add video slots in `src/data/videos.ts` and keep the placeholder label until
   a real video and creator are verified.
7. Link the new game from `relatedGames` on other games if it fits.

The dynamic routes (`/games/[slug]`, `/guides/[slug]`, `/lore/[slug]`) are
generated from these files.

## Editorial rules used in this build

- Guides are original editorial summaries, not copied articles.
- Lore entries are labelled as editorial interpretation, not official canon.
- Major lore spoilers are gated behind a reveal control.
- Cheat entries show verification status, sources, platform, requirements, and
  achievement/save caveats.
- No pirated games, cracks, unauthorized keys, trainers, anti-cheat bypasses,
  or suspicious executables are included.
- No player counts, sales, review scores, or review quotes are fabricated.
- Video cards are clearly labelled demo placeholders linking to YouTube search,
  not invented video IDs or misattributed creator links.
- The newsletter form is a front-end demo. It does not send or store an email
  address.
- Cover artwork and screenshots are official publisher media, credited in each
  game entry and used for identification and commentary. They are not
  relicensed by this project.

## Placeholder policies

### Video directory

The initial video cards intentionally do not use invented YouTube URLs. Each
card opens a YouTube search for its topic and displays a `Demo placeholder`
badge. Card art is an official in-game screenshot used to identify the game, not
a frame or thumbnail from a specific video. To replace one, verify the video and
creator, then update `src/data/videos.ts` with the direct URL, real title,
creator name, and set `placeholder: false`. The card UI supports that change
without a redesign.

### Newsletter

`src/components/ui/newsletter-form.tsx` is intentionally not connected. It
shows an honest demo message on submit. Connect an email service (and add a
privacy/unsubscribe flow) before enabling real subscriptions.

### Artwork

Game covers, hero images, and card thumbnails are official promotional media
stored locally in `public/images/games/<slug>/`. Each game entry records a
credit and source URL, shown on the game hub. Copyright remains with the
publishers. The site uses these images for identification and editorial
commentary and is not affiliated with or endorsed by any publisher.

Sources:

- Unless noted below, game covers, hero images, and screenshots are official
  Steam store artwork and screenshots. This includes Cyberpunk 2077, Elden
  Ring, The Witcher 3, Baldur's Gate 3, Red Dead Redemption 2, Starfield,
  Hogwarts Legacy, God of War, Sekiro, Skyrim, Stardew Valley, Hades, Hollow
  Knight, Disco Elysium, Fallout: New Vegas, NieR:Automata, Resident Evil 4,
  Grand Theft Auto IV, Grand Theft Auto V, L.A. Noire, Yakuza 0, BioShock
  Remastered, Portal 2, Dark Souls III, Mass Effect Legendary Edition,
  Persona 5 Royal, Monster Hunter: World, Half-Life 2, Subnautica, Fallout 4,
  Portal, Left 4 Dead 2, The Elder Scrolls IV: Oblivion, The Sims 4, and
  Age of Empires II: Definitive Edition.
- Minecraft: official Minecraft key art and 1.21 screenshots from
  `minecraft.net`.

If this site moves from a demo to a commercial publication, review each
publisher's media usage terms or replace the images with licensed assets.

## Routes

- `/` — homepage
- `/games` — games directory with search, genre, era, and sort
- `/games/[slug]` — game hub with overview, guides, lore, cheats, videos, related games
- `/guides` — guide directory with search, game, category, and sort
- `/guides/[slug]` — article page with table of contents, callouts, related guides, prev/next
- `/lore` — lore directory with search, game, type, and spoiler filters
- `/lore/[slug]` — lore entry with spoiler gating
- `/cheats` — verified commands and caveat notes
- `/videos` — video directory, featured channel slots, curation policy
- `/search` — grouped site-wide search
- `/about`, `/contact`, `/privacy`, `/disclaimer` — informational pages
- `sitemap.xml`, `robots.txt` — generated from data and site config

## Deployment

The app builds as a standard Next.js project. Set `NEXT_PUBLIC_SITE_URL` in the
deployment environment, run `npm run build`, then `npm run start` (or deploy to
your hosting provider). No backend, database, API key, or account system is
required for the current demo.

Repository: https://github.com/JasperCruz99/gamelore-hub
