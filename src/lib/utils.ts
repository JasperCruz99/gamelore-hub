import type { Guide } from "@/types";

export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

export function getReadingTime(guide: Guide): number {
  const parts: string[] = [guide.intro];
  for (const section of guide.sections) {
    parts.push(section.heading, ...section.paragraphs);
    if (section.bullets) parts.push(...section.bullets);
    if (section.callout) parts.push(section.callout.title, section.callout.body);
  }

  const words = parts.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function pluralize(
  count: number,
  singular: string,
  plural = `${singular}s`,
): string {
  return `${count} ${count === 1 ? singular : plural}`;
}

export function youtubeSearchUrl(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

export function absoluteUrl(path: string, base: string): string {
  return new URL(path, base).toString();
}
