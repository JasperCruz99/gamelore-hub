const siteName = "GameLore Hub";
const authorName = `${siteName} Editorial`;

export const siteConfig = {
  name: siteName,
  shortName: "GameLore",
  tagline: "Guides, lore, and secrets for the games you love.",
  description:
    "An independent editorial hub for PC games: beginner guides, walkthroughs, lore explainers, easter eggs, verified cheats, and curated video resources.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  author: authorName,
  copyrightYear: 2026,
  nav: [
    { href: "/", label: "Home" },
    { href: "/games", label: "Games" },
    { href: "/guides", label: "Guides" },
    { href: "/lore", label: "Lore & Secrets" },
    { href: "/cheats", label: "Cheats" },
    { href: "/videos", label: "Videos" },
  ],
  footerLinks: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
  socials: [
    { label: "YouTube", status: "Channel coming soon" },
    { label: "X / Twitter", status: "Account coming soon" },
    { label: "Discord", status: "Server coming soon" },
  ],
  disclaimer: `${siteName} is an independent fan resource. It is not affiliated with, endorsed by, or sponsored by any game developer or publisher. Game names, trademarks, and related assets belong to their respective owners.`,
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
