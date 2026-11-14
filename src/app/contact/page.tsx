import type { Metadata } from "next";
import {
  ExternalLink,
  FileWarning,
  Lightbulb,
  MessageCircle,
  Play,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/ui/page-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Send corrections, coverage suggestions, and video recommendations for ${siteConfig.name} through the project repository.`,
  alternates: { canonical: "/contact" },
};

const issueUrl = "https://github.com/JasperCruz99/gamelore-hub/issues";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Help make the library less wrong."
        description="Corrections and specific suggestions are welcome. The current demo does not have a live contact form or email address configured, so the project repository is the honest contact path."
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="caution">Contact form not connected</Badge>
          <Badge variant="outline">Corrections welcome</Badge>
          <Badge variant="outline">Video suggestions reviewed manually</Badge>
        </div>
      </PageHeader>

      <div className="shell py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-5">
            {[
              {
                icon: FileWarning,
                title: "Report an outdated or incorrect guide",
                body: "Include the page URL, your game version and platform, and the exact detail that is wrong. If you have a reliable source, include it. Screenshots help when menus have changed.",
              },
              {
                icon: Lightbulb,
                title: "Suggest a game or a guide topic",
                body: "Tell us which game and which question you want answered. A narrow request such as “a spoiler-light route through Act 1” is easier to act on than a general request for more content.",
              },
              {
                icon: Play,
                title: "Recommend a video or creator",
                body: "Send a direct link to the specific video, the creator's channel, and a short note on why it is useful. Videos that explain their reasoning and label spoilers are prioritised.",
              },
              {
                icon: MessageCircle,
                title: "Report an accessibility issue",
                body: "Describe the page, the device or assistive technology, and what blocked you. Accessibility fixes are treated as real bugs, not polish.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <section
                  key={item.title}
                  className="rounded-xl border border-line bg-card/55 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-md border border-line bg-surface text-signal">
                      <Icon
                        aria-hidden="true"
                        className="size-4"
                        strokeWidth={1.8}
                      />
                    </span>
                    <div>
                      <h2 className="font-display text-lg font-semibold text-mist">
                        {item.title}
                      </h2>
                      <p className="mt-1.5 text-sm leading-relaxed text-fog">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <aside className="h-fit space-y-4">
            <div className="rounded-xl border border-signal/30 bg-signal/[0.055] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-signal">
                Current contact path
              </p>
              <h2 className="mt-2 font-display text-lg font-semibold text-mist">
                Open an issue on GitHub
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-fog">
                This project does not pretend to have a contact inbox. Use the
                public issue tracker for corrections, suggestions, and bug
                reports.
              </p>
              <a
                href={issueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-signal transition-colors hover:text-mist"
              >
                Open the issue tracker
                <ExternalLink aria-hidden="true" className="size-4" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <div className="rounded-xl border border-line bg-card/45 p-5 text-xs leading-relaxed text-dim">
              <p className="font-semibold text-fog">Contact form status</p>
              <p className="mt-2">
                No form backend is connected. A production contact form needs an
                email service, spam protection, and a privacy notice before it
                can honestly say a message was sent.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-card/45 p-5 text-xs leading-relaxed text-dim">
              <p className="font-semibold text-fog">Response expectations</p>
              <p className="mt-2">
                This is a demo project, not a staffed publication. There is no
                guaranteed response time. Clear, specific reports are the most
                likely to be useful.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
