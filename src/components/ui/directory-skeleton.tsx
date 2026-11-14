import { cn } from "@/lib/utils";

type DirectorySkeletonProps = {
  label: string;
  cards?: number;
  className?: string;
};

export function DirectorySkeleton({
  label,
  cards = 6,
  className,
}: DirectorySkeletonProps) {
  return (
    <div aria-busy="true" className={cn("animate-pulse", className)}>
      <span className="sr-only">Loading {label}…</span>
      <div className="rounded-xl border border-line bg-card/50 p-4 sm:p-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="h-2.5 w-16 rounded bg-raised" />
              <div className="h-10 rounded-md bg-surface" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: cards }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-line bg-card/40"
          >
            <div className="aspect-[4/5] bg-surface" />
            <div className="space-y-3 p-4">
              <div className="h-4 w-2/3 rounded bg-raised" />
              <div className="h-3 w-full rounded bg-surface" />
              <div className="h-3 w-5/6 rounded bg-surface" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
