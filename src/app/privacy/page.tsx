import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/ui/page-header";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "A plain-language privacy overview for the GameLore Hub demo: what is collected, what is not, and how external links are handled.",
  alternates: { canonical: "/privacy" },
};

const lastUpdated = "2026-11-14";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Plain language, no dark patterns."
        description="This demo is built to avoid collecting personal data. This page explains what actually happens when you browse, search, or use the newsletter form."
      >
        <p className="text-xs text-dim">
          Last updated {formatDate(lastUpdated)}
        </p>
      </PageHeader>

      <div className="shell py-12">
        <div className="prose-gaming mx-auto max-w-3xl">
          <h2>Overview</h2>
          <p>
            {`GameLore Hub is a content website. It does not require an account, and it does not ask for payment information. This demo does not include third-party analytics, advertising pixels, or a connected newsletter backend.`}
          </p>

          <h2>Information this demo does not collect</h2>
          <ul>
            <li>No account registration, profiles, or passwords.</li>
            <li>No payment or billing information.</li>
            <li>No newsletter subscriptions; the demo form does not send or store an email address.</li>
            <li>No analytics or advertising cookies added by the application.</li>
          </ul>

          <h2>Search terms and filter state</h2>
          <p>
            Search and directory filters update the page URL so a result can be
            shared or refreshed. Those terms may therefore appear in your
            browser history and in standard request logs if the page is
            reloaded.
          </p>

          <h2>Hosting logs</h2>
          <p>
            Depending on where this site is hosted, the hosting provider may
            keep standard technical logs such as request paths, timestamps, IP
            addresses, and browser information for security and reliability.
            That logging is controlled by the host, not by this demo&apos;s
            application code.
          </p>

          <h2>External links</h2>
          <p>
            Video cards and source links open external sites, including YouTube
            and community references. Those sites have their own privacy
            policies and may set cookies or collect data independently. This
            site does not embed YouTube players in the current demo.
          </p>

          <h2>Newsletter form</h2>
          <p>
            The newsletter form is a front-end demonstration. Submitting it
            displays a message explaining that no email was sent or stored. A
            real newsletter would require an email provider, a lawful basis for
            processing addresses, and a clear unsubscribe mechanism before it
            could be enabled.
          </p>

          <h2>Children</h2>
          <p>
            This site is an editorial resource about video games and is not
            designed as a child-directed service. It does not knowingly collect
            personal information from children.
          </p>

          <h2>Changes</h2>
          <p>
            If analytics, accounts, a contact form, or a newsletter backend are
            added later, this page should be updated before those features go
            live. The &ldquo;last updated&rdquo; date at the top is the
            reference point.
          </p>

          <h2>Questions</h2>
          <p>
            For privacy questions about this demo, use the{" "}
            <Link href="/contact">contact page</Link>. This is a plain-language
            project policy, not legal advice; review it with a qualified
            professional before a commercial launch.
          </p>
        </div>
      </div>
    </>
  );
}
