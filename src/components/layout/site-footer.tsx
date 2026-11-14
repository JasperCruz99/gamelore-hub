import Link from "next/link";
import {
  AtSign,
  Clapperboard,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

import { SiteLogo } from "@/components/layout/site-logo";
import { siteConfig } from "@/lib/site";

const socialIcons: Record<string, LucideIcon> = {
  YouTube: Clapperboard,
  "X / Twitter": AtSign,
  Discord: MessageCircle,
};

const exploreLinks = siteConfig.nav.filter((item) => item.href !== "/");

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-surface/45">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.55fr_0.75fr_0.75fr_1.1fr]">
          <div>
            <SiteLogo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fog">
              A curated editorial hub for PC games. Find beginner-friendly
              guides, story explainers, hidden details, verified commands, and
              useful video resources in one place.
            </p>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-dim">
              Demo content is written for this project. Mechanics and menus can
              change with game updates, so verify version-specific details with
              official sources.
            </p>
          </div>

          <nav aria-label="Explore the library">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
              Explore
            </h2>
            <ul className="mt-4 grid gap-2.5">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fog transition-colors hover:text-signal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site information">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
              Site
            </h2>
            <ul className="mt-4 grid gap-2.5">
              {siteConfig.footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fog transition-colors hover:text-signal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#newsletter"
                  className="text-sm text-fog transition-colors hover:text-signal"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
              Community
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-fog">
              Social channels are not live yet. These slots are reserved for
              future game-lore discussions and video roundups.
            </p>
            <ul className="mt-4 grid gap-2">
              {siteConfig.socials.map((social) => {
                const Icon = socialIcons[social.label] ?? MessageCircle;
                return (
                  <li key={social.label}>
                    <span
                      aria-disabled="true"
                      title={`${social.label}: ${social.status}`}
                      className="inline-flex w-full items-center gap-2.5 rounded-md border border-line/70 bg-page/40 px-3 py-2 text-xs text-dim"
                    >
                      <Icon
                        aria-hidden="true"
                        className="size-4 shrink-0"
                        strokeWidth={1.8}
                      />
                      <span className="text-fog">{social.label}</span>
                      <span className="ml-auto rounded-full border border-line px-2 py-0.5 text-[10px] uppercase tracking-wider text-dim">
                        Soon
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line/70 pt-6 text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="max-w-2xl leading-relaxed sm:text-right">
            Game names, trademarks, and related artwork belong to their
            respective owners.
          </p>
        </div>

        <p className="mt-5 max-w-4xl border-l-2 border-line pl-4 text-xs leading-relaxed text-dim">
          {siteConfig.disclaimer} Video cards link to YouTube search results and
          are clearly labelled as demo placeholders; they do not embed or
          impersonate any creator&apos;s work.
        </p>
      </div>
    </footer>
  );
}
