"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { SiteLogo } from "@/components/layout/site-logo";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

function isActivePath(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-page/85 backdrop-blur-xl">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <SiteLogo />

        <nav
          aria-label="Primary navigation"
          className="hidden h-16 items-stretch lg:flex"
        >
          {siteConfig.nav.map((item) => {
            const active = isActivePath(item.href, pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center border-b-2 px-3.5 text-sm font-medium transition-colors xl:px-4",
                  active
                    ? "border-signal text-mist"
                    : "border-transparent text-fog hover:border-line hover:text-mist",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <form
            action="/search"
            method="get"
            role="search"
            className="hidden items-center gap-2 rounded-md border border-line bg-surface/70 px-3 transition-colors focus-within:border-signal/60 xl:flex"
          >
            <Search
              aria-hidden="true"
              className="size-4 shrink-0 text-dim"
              strokeWidth={1.8}
            />
            <label htmlFor="header-search" className="sr-only">
              Search games, guides, lore, cheats, and videos
            </label>
            <input
              id="header-search"
              name="q"
              type="search"
              placeholder="Search the library…"
              autoComplete="off"
              className="h-9 w-44 bg-transparent text-sm text-mist placeholder:text-dim focus:outline-none"
            />
          </form>

          <Link
            href="/search"
            aria-label="Search the library"
            className="grid size-10 place-items-center rounded-md border border-line bg-surface/70 text-fog transition-colors hover:border-signal/50 hover:text-mist xl:hidden"
          >
            <Search aria-hidden="true" className="size-[18px]" strokeWidth={1.8} />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="grid size-10 place-items-center rounded-md border border-line bg-surface/70 text-fog transition-colors hover:border-signal/50 hover:text-mist lg:hidden"
          >
            {isOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-line/80 bg-surface/95 backdrop-blur-xl lg:hidden"
        >
          <div className="shell py-4">
            <form
              action="/search"
              method="get"
              role="search"
              className="flex items-center gap-2 rounded-md border border-line bg-page/60 px-3"
            >
              <Search
                aria-hidden="true"
                className="size-4 shrink-0 text-dim"
                strokeWidth={1.8}
              />
              <label htmlFor="mobile-search" className="sr-only">
                Search games, guides, lore, cheats, and videos
              </label>
              <input
                id="mobile-search"
                name="q"
                type="search"
                placeholder="Search the library…"
                autoComplete="off"
                className="h-11 w-full bg-transparent text-sm text-mist placeholder:text-dim focus:outline-none"
              />
            </form>

            <nav aria-label="Mobile navigation" className="mt-4 grid gap-1">
              {siteConfig.nav.map((item) => {
                const active = isActivePath(item.href, pathname);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-md px-3 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-signal/10 text-signal"
                        : "text-fog hover:bg-raised/70 hover:text-mist",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-1.5 rounded-full",
                        active ? "bg-signal" : "bg-line",
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            <p className="mt-4 border-t border-line/70 pt-4 text-xs leading-relaxed text-dim">
              Independent editorial resource. Demo library with original sample
              content and placeholder video links.
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
