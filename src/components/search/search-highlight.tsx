import { Fragment, type ReactNode } from "react";

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

type SearchHighlightProps = {
  text: string;
  query: string;
};

export function SearchHighlight({
  text,
  query,
}: SearchHighlightProps): ReactNode {
  const tokens = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(escapeRegExp);

  if (tokens.length === 0) return text;

  const pattern = new RegExp(`(${tokens.join("|")})`, "gi");
  const tokenSet = new Set(tokens.map((token) => token.toLowerCase()));

  return (
    <>
      {text.split(pattern).map((part, index) =>
        tokenSet.has(part.toLowerCase()) ? (
          <mark
            key={`${part}-${index}`}
            className="rounded-sm bg-signal/20 px-0.5 text-mist"
          >
            {part}
          </mark>
        ) : (
          <Fragment key={`${part}-${index}`}>{part}</Fragment>
        ),
      )}
    </>
  );
}
