import { ArrowUpRight, Trophy } from "lucide-react";

import { hackathons } from "@/lib/data";
import { GithubIcon } from "@/components/brand-icons";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Hackathons() {
  return (
    <section id="hackathons" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          title="Hackathons"
          description="Weekend sprints where I shipped something real with a team, fast."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hackathons.map((h, i) => (
            <Reveal as="article" key={h.event} delay={i * 0.05}>
              <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Trophy className="size-5" />
                  </span>
                  <div className="flex items-center gap-1">
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
                </div>

                <p className="mt-5 font-mono text-xs text-muted-foreground">
                  {h.date}
                </p>
                <h3 className="mt-1 text-lg font-semibold leading-snug tracking-tight text-balance">
                  {h.event}
                </h3>
                {h.partners ? (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {h.partners}
                  </p>
                ) : null}
                <p className="mt-3 text-sm font-medium text-primary">
                  Built: {h.project}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {h.highlights.map((item, j) => (
                    <li
                      key={j}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="absolute left-0 top-2 size-1.5 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {h.tags.map((t) => (
                    <Badge key={t} variant="muted">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
