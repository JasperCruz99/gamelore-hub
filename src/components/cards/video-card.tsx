import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { getGame, getVideoThumbnail } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { Video } from "@/types";

type VideoCardProps = {
  video: Video;
  className?: string;
  imageSizes?: string;
};

export function VideoCard({
  video,
  className,
  imageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: VideoCardProps) {
  const game = getGame(video.gameSlug);
  const thumbnail = getVideoThumbnail(video);

  return (
    <a
      id={video.slug}
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group card-lift block h-full scroll-mt-28 overflow-hidden rounded-xl border border-line bg-card/80",
        className,
      )}
    >
      <article className="flex h-full flex-col">
        <div className="relative aspect-video overflow-hidden border-b border-line/70 bg-surface">
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt}
            fill
            sizes={imageSizes}
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.045]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/25 to-page/10" />
          <div className="absolute inset-x-3 top-3 flex flex-wrap gap-1.5">
            <Badge variant="caution" className="bg-page/80 backdrop-blur">
              Demo placeholder
            </Badge>
            <Badge className="bg-page/75 backdrop-blur">{video.type}</Badge>
          </div>
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-signal/40 bg-page/70 text-signal shadow-[0_0_40px_-10px_rgba(56,217,245,0.7)] backdrop-blur transition-transform duration-200 group-hover:scale-110"
          >
            <Play className="ml-0.5 size-5" fill="currentColor" />
          </span>
          <p className="absolute inset-x-4 bottom-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-fog">
            {game?.title}
          </p>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3 className="line-clamp-2 font-display text-[1.05rem] font-semibold leading-snug text-mist transition-colors group-hover:text-signal">
            {video.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-fog">
            {video.description}
          </p>
          <p className="mt-3 text-[11px] text-dim">
            <span className="font-medium text-fog">{video.creator}</span>
            <span aria-hidden="true"> · </span>
            Opens a YouTube search
          </p>
          <div className="mt-auto flex items-center justify-between gap-3 border-t border-line/60 pt-4 text-[11px] text-dim">
            <span>{video.placeholder ? "Curated slot" : "Video resource"}</span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-signal">
              Open YouTube
              <ExternalLink aria-hidden="true" className="size-3.5" />
              <span className="sr-only"> search in a new tab</span>
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}
