import { GraduationCap } from "lucide-react";

import { education, profile } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading index="01" title="About me" />

      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-4 text-base leading-relaxed text-muted-foreground">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <GraduationCap className="size-5 text-primary" />
                Education
              </div>
              <ul className="mt-5 space-y-5">
                {education.map((e) => (
                  <li
                    key={e.school}
                    className="relative border-l border-border pl-4"
                  >
                    <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-primary" />
                    <p className="font-medium text-foreground">{e.school}</p>
                    <p className="text-sm text-muted-foreground">
                      {e.credential}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {e.period} · {e.location}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
