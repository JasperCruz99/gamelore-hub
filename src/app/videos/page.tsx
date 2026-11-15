import type { Metadata } from "next";
import { Suspense } from "react";
import { ExternalLink, Play, ShieldCheck, Tv } from "lucide-react";

import { Callout } from "@/components/articles/callout";
import { ChannelCard } from "@/components/cards/channel-card";
import { VideosBrowser } from "@/components/filters/videos-browser";
import { Badge } from "@/components/ui/badge";
import { DirectorySkeleton } from "@/components/ui/directory-skeleton";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredChannels, videos } from "@/data/videos";
import { pluralize } from "@/lib/utils";

export const metadata: Metadata = {
  title: "YouTube Video Directory",
  description:
    "Curated video slots for PC game walkthroughs, lore explainers, tutorials, reviews, and tips. Demo placeholders are clearly labelled and link to YouTube search.",
  alternates: { canonical: "/videos" },
};

export default function VideosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Video directory"
        title="Watch, then go play."
        description="A curated starting point for video walkthroughs, lore explainers, reviews, and practical tutorials. The library starts with clearly labelled placeholders rather than invented video IDs or misattributed creator links."
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="arcane">
            <Play aria-hidden="true" className="size-3" />
            {pluralize(videos.length, "video slot")}
          </Badge>
          <Badge variant="outline">Placeholders labelled</Badge>
          <Badge variant="outline">External links open a new tab</Badge>
        </div>
      </PageHeader>

      <div className="shell py-10 sm:py-12">
        <Callout
          type="note"
          title="What these video cards are"
          body="Each card is a curated topic slot that opens YouTube search results. It is not a specific video recommendation, and the creator field is a placeholder until a real channel and video are verified. Thumbnail art uses official in-game screenshots to identify the game, not a frame or thumbnail from a specific video. This avoids fake video IDs and misattribution."
          className="my-0"
        />

        <div className="mt-8">
          <Suspense fallback={<DirectorySkeleton label="videos" />}>
            <VideosBrowser />
          </Suspense>
        </div>

        <section className="mt-14 border-t border-line/70 pt-10">
          <SectionHeading
            eyebrow="Featured channels"
            title="Reserved for creators who explain their work"
            description="These are open editorial slots, not endorsements. A channel is added only after its videos are checked for accuracy, spoiler awareness, and clear credit."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featuredChannels.map((channel) => (
              <ChannelCard key={channel.name} channel={channel} />
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Play,
              title: "Suggest a topic",
              body: "Tell us which game and question a video should answer. Specific requests are easier to verify than broad channel suggestions.",
            },
            {
              icon: ShieldCheck,
              title: "Verify the source",
              body: "We check the channel, the video, and whether the advice matches the current game version before adding a real link.",
            },
            {
              icon: ExternalLink,
              title: "Credit clearly",
              body: "Real entries will name the creator, link directly to the video, and explain why the resource is useful.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-line bg-card/45 p-5"
              >
                <Icon
                  aria-hidden="true"
                  className="size-5 text-signal"
                  strokeWidth={1.7}
                />
                <h2 className="mt-3 font-display text-base font-semibold text-mist">
                  {item.title}
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-fog">
                  {item.body}
                </p>
              </div>
            );
          })}
        </section>

        <div className="mt-8 flex items-start gap-3 rounded-lg border border-line bg-surface/35 p-4 text-xs leading-relaxed text-dim">
          <Tv
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-arcane"
          />
          <p>
            External YouTube links use <code className="text-fog">target=&quot;_blank&quot;</code>{" "}
            with <code className="text-fog">rel=&quot;noopener noreferrer&quot;</code>.
            No video is embedded on this site, and no channel is presented as an
            official partner.
          </p>
        </div>
      </div>
    </>
  );
}
