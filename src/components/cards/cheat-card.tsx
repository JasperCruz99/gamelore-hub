import Link from "next/link";
import {
  BadgeCheck,
  ExternalLink,
  Gamepad2,
  Save,
  TriangleAlert,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { CopyButton } from "@/components/ui/copy-button";
import { getGame } from "@/lib/content";
import type { Cheat } from "@/types";

type CheatCardProps = {
  cheat: Cheat;
  showGame?: boolean;
  className?: string;
};

function verificationBadge(cheat: Cheat) {
  if (cheat.verification.status === "documented") {
    return (
      <Badge variant="success">
        <BadgeCheck aria-hidden="true" className="size-3" />
        Documented
      </Badge>
    );
  }
  if (cheat.verification.status === "community-verified") {
    return (
      <Badge variant="caution">
        <Users aria-hidden="true" className="size-3" />
        Community-verified
      </Badge>
    );
  }
  return (
    <Badge variant="danger">
      <TriangleAlert aria-hidden="true" className="size-3" />
      Unofficial
    </Badge>
  );
}

export function CheatCard({
  cheat,
  showGame = true,
  className,
}: CheatCardProps) {
  const game = getGame(cheat.gameSlug);
  const hasWarnings = cheat.achievementWarning || cheat.saveWarning;

  return (
    <article
      id={cheat.slug}
      aria-labelledby={`${cheat.slug}-title`}
      className={`scroll-mt-28 rounded-xl border border-line bg-card/75 p-5 shadow-panel sm:p-6 ${className ?? ""}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">{cheat.type}</Badge>
        {verificationBadge(cheat)}
        {showGame && game ? (
          <Link
            href={`/games/${game.slug}`}
            className="text-[11px] font-medium text-fog transition-colors hover:text-signal"
          >
            {game.title}
          </Link>
        ) : null}
      </div>

      <h3
        id={`${cheat.slug}-title`}
        className="mt-3 font-display text-xl font-semibold tracking-[-0.02em] text-mist"
      >
        {cheat.title}
      </h3>
      <p className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-dim">
        <Gamepad2 aria-hidden="true" className="size-3.5" />
        {cheat.platform}
      </p>

      {cheat.code ? (
        <div className="mt-4 overflow-hidden rounded-lg border border-line bg-page/80">
          <div className="flex items-center justify-between gap-3 border-b border-line/70 px-3 py-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-dim">
              Command or code
            </span>
            <CopyButton value={cheat.code} label={`Copy ${cheat.title}`} />
          </div>
          <pre className="overflow-x-auto whitespace-pre-wrap break-words p-4 font-mono text-sm leading-relaxed text-signal">
            <code>{cheat.code}</code>
          </pre>
        </div>
      ) : null}

      <div className="mt-4 grid gap-4 text-sm leading-relaxed text-fog">
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dim">
            How to use it
          </h4>
          <p className="mt-1.5">{cheat.instructions}</p>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dim">
            What it does
          </h4>
          <p className="mt-1.5">{cheat.whatItDoes}</p>
        </div>
        {cheat.requirements ? (
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dim">
              Requirements and limits
            </h4>
            <p className="mt-1.5">{cheat.requirements}</p>
          </div>
        ) : null}
      </div>

      <div className="mt-4">
        <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dim">
          Effects
        </h4>
        <ul className="mt-2 grid gap-1.5 text-sm text-fog sm:grid-cols-2">
          {cheat.effects.map((effect) => (
            <li key={effect} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal/70"
              />
              {effect}
            </li>
          ))}
        </ul>
      </div>

      {hasWarnings ? (
        <div className="mt-5 rounded-lg border border-caution/35 bg-caution/[0.06] px-4 py-3">
          <p className="flex items-center gap-2 text-xs font-semibold text-caution">
            <TriangleAlert aria-hidden="true" className="size-4 shrink-0" />
            Before you activate this
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {cheat.achievementWarning ? (
              <Badge variant="caution">Disables trophies or achievements</Badge>
            ) : null}
            {cheat.saveWarning ? (
              <Badge variant="caution">
                <Save aria-hidden="true" className="size-3" />
                Disables saving while active
              </Badge>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="mt-5 border-t border-line/70 pt-4">
        <p className="text-xs leading-relaxed text-dim">
          <span className="font-semibold text-fog">Verification: </span>
          {cheat.verification.note}
        </p>
        {cheat.verification.sources.length > 0 ? (
          <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
            {cheat.verification.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-signal transition-colors hover:text-mist"
                >
                  {source.label}
                  <ExternalLink aria-hidden="true" className="size-3" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
