import type { GuideSection } from "@/types";

type TableOfContentsProps = {
  sections: GuideSection[];
  className?: string;
};

export function TableOfContents({
  sections,
  className,
}: TableOfContentsProps) {
  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="On this page"
      className={className}
    >
      <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-dim">
        On this page
      </h2>
      <ol className="mt-3 space-y-1">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="group flex gap-2.5 rounded-md px-2 py-1.5 text-xs leading-snug text-fog transition-colors hover:bg-raised/60 hover:text-mist"
            >
              <span className="mt-px font-mono text-[10px] text-dim group-hover:text-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{section.heading}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
