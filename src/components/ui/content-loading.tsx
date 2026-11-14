import { cn } from "@/lib/utils";

type ContentLoadingProps = {
  label: string;
  className?: string;
};

export function ContentLoading({ label, className }: ContentLoadingProps) {
  return (
    <div
      aria-busy="true"
      className={cn("shell animate-pulse py-10 sm:py-14", className)}
    >
      <span className="sr-only">Loading {label}…</span>
      <div className="space-y-3">
        <div className="h-2.5 w-36 rounded bg-raised" />
        <div className="h-10 w-3/4 max-w-2xl rounded bg-surface" />
        <div className="h-3 w-full max-w-xl rounded bg-surface" />
        <div className="h-3 w-5/6 max-w-lg rounded bg-surface" />
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="h-[520px] rounded-xl border border-line bg-card/40" />
        <div className="hidden h-72 rounded-xl border border-line bg-card/30 lg:block" />
      </div>
    </div>
  );
}
