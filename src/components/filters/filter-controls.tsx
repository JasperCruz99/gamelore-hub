"use client";

import { ChevronDown, RotateCcw, Search, X } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type FilterOption = {
  value: string;
  label: string;
};

type FilterSelectProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: FilterOption[];
  className?: string;
};

export function FilterSelect({
  id,
  label,
  value,
  onChange,
  options,
  className,
}: FilterSelectProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-dim"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-10 w-full appearance-none rounded-md border border-line bg-page/60 pl-3 pr-9 text-sm text-fog transition-colors hover:border-line/80 focus:border-signal/50 focus:outline-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-dim"
          strokeWidth={1.8}
        />
      </div>
    </div>
  );
}

type FilterSearchProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
};

export function FilterSearch({
  id,
  label,
  value,
  onChange,
  placeholder,
  className,
}: FilterSearchProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-dim"
      >
        {label}
      </label>
      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-dim"
          strokeWidth={1.8}
        />
        <input
          id={id}
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") onChange("");
          }}
          placeholder={placeholder}
          autoComplete="off"
          className="h-10 w-full rounded-md border border-line bg-page/60 pl-9 pr-9 text-sm text-mist placeholder:text-dim transition-colors focus:border-signal/50 focus:outline-none"
        />
        {value ? (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label={`Clear ${label.toLowerCase()}`}
            className="absolute right-2 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded text-dim transition-colors hover:bg-raised hover:text-mist"
          >
            <X aria-hidden="true" className="size-3.5" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

type FilterPanelProps = {
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export function FilterPanel({
  children,
  footer,
  className,
}: FilterPanelProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-card/65 p-4 shadow-panel sm:p-5",
        className,
      )}
    >
      {children}
      {footer ? (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line/70 pt-4">
          {footer}
        </div>
      ) : null}
    </div>
  );
}

type FilterResetProps = {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
};

export function FilterReset({
  onClick,
  disabled,
  label = "Clear filters",
}: FilterResetProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center gap-1.5 text-xs font-medium text-dim transition-colors hover:text-signal disabled:cursor-not-allowed disabled:opacity-40"
    >
      <RotateCcw aria-hidden="true" className="size-3.5" strokeWidth={1.8} />
      {label}
    </button>
  );
}

type ResultCountProps = {
  count: number;
  singular: string;
  plural: string;
};

export function ResultCount({ count, singular, plural }: ResultCountProps) {
  return (
    <p aria-live="polite" className="text-xs text-dim">
      <span className="font-semibold text-fog">{count}</span>{" "}
      {count === 1 ? singular : plural}
    </p>
  );
}
