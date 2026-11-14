import Link from "next/link";
import {
  ArrowUpRight,
  BookOpenCheck,
  Compass,
  Egg,
  Map,
  Play,
  Sparkles,
  Swords,
  Terminal,
  type LucideIcon,
} from "lucide-react";

import type { ContentCategory } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<ContentCategory["icon"], LucideIcon> = {
  "book-open-check": BookOpenCheck,
  map: Map,
  compass: Compass,
  sparkles: Sparkles,
  egg: Egg,
  terminal: Terminal,
  swords: Swords,
  play: Play,
};

const toneMap: Record<
  ContentCategory["tone"],
  { icon: string; hover: string; glow: string }
> = {
  signal: {
    icon: "border-signal/30 bg-signal/10 text-signal",
    hover: "hover:border-signal/45",
    glow: "group-hover:text-signal",
  },
  arcane: {
    icon: "border-arcane/30 bg-arcane/10 text-arcane",
    hover: "hover:border-arcane/45",
    glow: "group-hover:text-arcane",
  },
  caution: {
    icon: "border-caution/30 bg-caution/10 text-caution",
    hover: "hover:border-caution/45",
    glow: "group-hover:text-caution",
  },
  success: {
    icon: "border-success/30 bg-success/10 text-success",
    hover: "hover:border-success/45",
    glow: "group-hover:text-success",
  },
};

type CategoryCardProps = {
  category: ContentCategory;
};

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon];
  const tone = toneMap[category.tone];

  return (
    <Link
      href={category.href}
      className={cn(
        "group flex h-full flex-col rounded-xl border border-line bg-card/60 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-card hover:shadow-panel",
        tone.hover,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "grid size-10 place-items-center rounded-lg border",
            tone.icon,
          )}
        >
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className={cn(
            "size-4 text-dim transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            tone.glow,
          )}
        />
      </div>
      <h3 className="mt-4 font-display text-[1.05rem] font-semibold text-mist">
        {category.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-fog">
        {category.description}
      </p>
    </Link>
  );
}
