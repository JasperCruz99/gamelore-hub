import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="scrollbar-none flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-xs text-dim">
        <li className="shrink-0">
          <Link
            href="/"
            className="transition-colors hover:text-signal"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={`${item.label}-${index}`}
              className="flex shrink-0 items-center gap-1.5"
            >
              <ChevronRight
                aria-hidden="true"
                className="size-3 shrink-0 text-line"
                strokeWidth={2}
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-signal"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="text-fog"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
