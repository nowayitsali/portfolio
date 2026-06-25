import { Briefcase } from "lucide-react";

import { experiences } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          title="Where I've worked"
          description="Hands-on experience across cloud infrastructure and operations."
        />

        <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-8">
          {experiences.map((exp, i) => (
            <Reveal as="li" key={exp.company} delay={i * 0.05}>
              <span className="absolute -left-[9px] grid size-[18px] place-items-center rounded-full border border-border bg-background">
                <span className="size-2 rounded-full bg-primary" />
              </span>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">
                  {exp.role}{" "}
                  <span className="text-primary">· {exp.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Briefcase className="size-3.5" />
                {exp.location}
              </p>

              <ul className="mt-4 space-y-2.5">
                {exp.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="absolute left-0 top-2 size-1.5 rounded-full bg-primary/60" />
                    {h}
                  </li>
                ))}
              </ul>

              {exp.stack ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.map((t) => (
                    <Badge key={t} variant="muted">
                      {t}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
