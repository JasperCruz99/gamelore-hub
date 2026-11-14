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
2. Add original cover artwork to `public/images/games/`.
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
- Cover artwork is original abstract placeholder art created for this project,
  not official key art.

## Placeholder policies

### Video directory

The initial video cards intentionally do not use invented YouTube URLs. Each
card opens a YouTube search for its topic and displays a `Demo placeholder`
badge. To replace one, verify the video and creator, then update
`src/data/videos.ts` with the direct URL, real title, creator name, and set
`placeholder: false`. The card UI supports that change without a redesign.

### Newsletter

`src/components/ui/newsletter-form.tsx` is intentionally not connected. It
shows an honest demo message on submit. Connect an email service (and add a
privacy/unsubscribe flow) before enabling real subscriptions.

### Artwork

All game covers in `public/images/games/` are original abstract SVG placeholders
created for this demo. They do not reproduce publisher key art. Replace them
with properly licensed artwork if the site is published.

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
