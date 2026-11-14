"use client";

import { ArrowRight, Mail } from "lucide-react";
import { useId, useState } from "react";

import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const inputId = useId();
  const noteId = useId();
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Demo form: no email was sent or stored. Connect a newsletter service before enabling real sign-ups.",
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-2.5 sm:flex-row"
        aria-describedby={noteId}
      >
        <label htmlFor={inputId} className="sr-only">
          Email address for newsletter updates
        </label>
        <div className="relative flex-1">
          <Mail
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-dim"
            strokeWidth={1.8}
          />
          <input
            id={inputId}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="h-12 w-full rounded-md border border-line bg-page/70 pl-10 pr-4 text-sm text-mist placeholder:text-dim transition-colors focus:border-signal/60 focus:outline-none"
          />
        </div>
        <Button type="submit" size="lg" className="shrink-0">
          Join the list
          <ArrowRight aria-hidden="true" className="size-4" />
        </Button>
      </form>
      <p id={noteId} className="mt-3 text-xs leading-relaxed text-dim">
        This newsletter is a front-end demo. No subscription is created and no
        address is stored until an email provider is connected.
      </p>
      <p role="status" aria-live="polite" className="mt-2 text-xs text-caution">
        {message}
      </p>
    </div>
  );
}
