import { ArrowUpRight, Trophy } from "lucide-react";

import { hackathons } from "@/lib/data";
import { GithubIcon } from "@/components/brand-icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Hackathons() {
  return (
    <section id="hackathons">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          title="Hackathons"
          description="Weekend sprints where I shipped something real with a team, fast."
        />

        <Reveal>
          <ul className="divide-y divide-border rounded-xl border border-border bg-card">
            {hackathons.map((h) => (
              <li
                key={h.event}
                className="grid gap-x-6 gap-y-2 p-5 sm:grid-cols-[88px_1fr_auto] sm:items-start"
              >
                <span className="font-mono text-xs text-muted-foreground sm:pt-1">
                  {h.date}
                </span>

                <div className="min-w-0">
                  <h3 className="flex items-start gap-2 font-semibold leading-snug">
                    <Trophy className="mt-0.5 size-4 shrink-0 text-primary" />
                    {h.event}
                  </h3>
                  {h.partners ? (
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {h.partners}
                    </p>
                  ) : null}
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-primary">{h.project}</span>
                    {": "}
                    {h.summary}
                  </p>
                </div>

                <div className="-ml-2 flex items-center gap-1 sm:-mt-1 sm:ml-0">
                  {h.links.github ? (
                    <a
                      href={h.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${h.project} on GitHub`}
                      className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <GithubIcon className="size-5" />
                    </a>
                  ) : null}
                  {h.links.demo ? (
                    <a
                      href={h.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${h.project} live demo`}
                      className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ArrowUpRight className="size-5" />
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
