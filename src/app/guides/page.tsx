import type { Metadata } from "next";
import { Suspense } from "react";

import { GuidesBrowser } from "@/components/filters/guides-browser";
import { Badge } from "@/components/ui/badge";
import { DirectorySkeleton } from "@/components/ui/directory-skeleton";
import { PageHeader } from "@/components/ui/page-header";
import { guides } from "@/data/guides";
import { pluralize } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Guides & Articles",
  description:
    "Beginner guides, walkthroughs, boss strategies, build guides, and practical tips for PC games. Filter by game, category, or keyword.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Guides & articles"
        title="Guides that respect your time."
        description="Start with the question you actually have: what to do in the first hour, how to prepare for a hard fight, or which system is worth learning next. Every guide shows an update date and a reading-time estimate."
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="signal">{pluralize(guides.length, "guide")}</Badge>
          <Badge variant="outline">Spoiler-light by default</Badge>
          <Badge variant="outline">Update dates shown</Badge>
        </div>
      </PageHeader>

      <div className="shell py-10 sm:py-12">
        <p className="mb-5 max-w-3xl text-xs leading-relaxed text-dim">
          These are editorial guides written for this demo library, not
          publisher-approved walkthroughs. Version-specific mechanics can
          change, so verify exact numbers and menus in your own game.
        </p>
        <Suspense fallback={<DirectorySkeleton label="guides" />}>
          <GuidesBrowser />
        </Suspense>
      </div>
    </>
  );
}
