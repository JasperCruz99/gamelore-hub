import Link from "next/link";
import { ArrowUpRight, Tv } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { FeaturedChannel } from "@/types";

type ChannelCardProps = {
  channel: FeaturedChannel;
};

export function ChannelCard({ channel }: ChannelCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-dashed border-line bg-card/40 p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-10 place-items-center rounded-lg border border-line bg-surface text-dim">
          <Tv aria-hidden="true" className="size-5" strokeWidth={1.7} />
        </span>
        <Badge variant="outline">Slot open</Badge>
      </div>
      <h3 className="mt-4 font-display text-base font-semibold text-mist">
        {channel.name}
      </h3>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-dim">
        {channel.focus}
      </p>
      <p className="mt-2.5 text-sm leading-relaxed text-fog">
        {channel.description}
      </p>
      <Link
        href="/contact"
        className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-signal transition-colors hover:text-mist"
      >
        Suggest a channel
        <ArrowUpRight aria-hidden="true" className="size-3.5" />
      </Link>
    </div>
  );
}
