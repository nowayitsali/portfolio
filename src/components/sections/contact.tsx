import { ArrowUpRight } from "lucide-react";

import { profile, socials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-sm text-primary">05 · What&apos;s next</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl text-balance">
          Let&apos;s build something together
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          I&apos;m actively looking for a Summer 2026 co-op or internship. My
          inbox is always open. Whether you have a role in mind or just want to
          connect, I&apos;ll do my best to reply.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={`mailto:${profile.email}`}>Say hello</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View résumé
            </a>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <s.icon className="size-4" />
              {s.handle}
              <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
