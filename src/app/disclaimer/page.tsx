import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/ui/page-header";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "GameLore Hub is an independent fan resource and is not affiliated with game publishers. Read the full content, trademark, cheats, and external-link disclaimer.",
  alternates: { canonical: "/disclaimer" },
};

const lastUpdated = "2026-11-14";

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Disclaimer"
        title="Independent, unofficial, and explicit about it."
        description="The short version: this is a fan-made editorial resource. Game names and trademarks belong to their owners, and no publisher has reviewed or endorsed this site."
      >
        <p className="text-xs text-dim">
          Last updated {formatDate(lastUpdated)}
        </p>
      </PageHeader>

      <div className="shell py-12">
        <div className="prose-gaming mx-auto max-w-3xl">
          <h2>No affiliation</h2>
          <p>
            GameLore Hub is an independent project. It is not affiliated with,
            endorsed by, sponsored by, or approved by any game developer,
            publisher, platform holder, or creator network. References to a game
            or company are for identification and commentary only.
          </p>

          <h2>Trademarks and artwork</h2>
          <p>
            Game titles, logos, character names, and related trademarks belong to
            their respective owners. The cover images in this demo are original,
            abstract placeholder artwork created for this project. They are not
            official key art and do not reproduce publisher assets.
          </p>

          <h2>Content accuracy</h2>
          <p>
            Guides, lore entries, and reference pages are editorial demo
            content. They are not official manuals or publisher-approved
            walkthroughs. Games change through patches, expansions, and
            platform updates, so specific menus, values, and mechanics can
            become outdated. Verify version-specific details with official
            sources.
          </p>
          <p>
            Lore is interpretive by nature. Where a game leaves events
            ambiguous, this site treats its reading as editorial analysis rather
            than established canon.
          </p>

          <h2>Cheats and commands</h2>
          <p>
            Cheat entries are provided for informational purposes and are
            labelled with their verification status and known caveats. Using a
            cheat may disable achievements, saving, or progression; keep a
            separate save. You use any command or code at your own risk.
          </p>
          <p>
            This site does not provide pirated games, cracks, unauthorized keys,
            malware, trainers, anti-cheat bypasses, or instructions for
            bypassing paid access. Third-party modifications are out of scope.
          </p>

          <h2>Video placeholders</h2>
          <p>
            The initial video directory uses clearly labelled placeholder cards
            that open YouTube search results. It does not invent video IDs,
            embed unverified videos, or imply that a real creator endorsed this
            site. Any future video entry should be verified and credited before
            publication.
          </p>

          <h2>External links</h2>
          <p>
            External links are provided for reference. This site does not control
            third-party content and is not responsible for its accuracy,
            availability, or policies. Following an external link is your
            choice.
          </p>

          <h2>Contact</h2>
          <p>
            If you believe content is inaccurate, miscredited, or should be
            removed, use the <Link href="/contact">contact page</Link> and
            include the relevant URL, details, and supporting source. Valid
            concerns will be reviewed.
          </p>
        </div>
      </div>
    </>
  );
}
