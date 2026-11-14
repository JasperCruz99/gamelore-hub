import { Search } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-50" />
      <div className="shell relative flex min-h-[68vh] flex-col items-center justify-center py-20 text-center">
        <p className="eyebrow">404 / route not found</p>
        <h1 className="mt-4 max-w-3xl font-display text-[2.6rem] font-bold leading-[1.03] tracking-[-0.04em] text-mist text-balance sm:text-6xl">
          This path leads off the map.
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-fog sm:text-base">
          The page may have moved, the slug may be wrong, or the content may not
          be part of the demo library yet. Try the games directory or search for
          what you need.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/games">Browse games</ButtonLink>
          <ButtonLink href="/search" variant="secondary">
            <Search aria-hidden="true" className="size-4" />
            Search the library
          </ButtonLink>
        </div>

        <div className="mt-12 grid w-full max-w-2xl gap-2 sm:grid-cols-3">
          {siteConfig.nav.slice(1).map((item) => (
            <ButtonLink
              key={item.href}
              href={item.href}
              variant="ghost"
              size="sm"
              className="border border-line/70"
            >
              {item.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
