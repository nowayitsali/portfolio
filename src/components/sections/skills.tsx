import { skillGroups } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          title="Skills & tooling"
          description="The languages, frameworks, and platforms I reach for."
        />

        <Reveal>
          <div className="divide-y divide-border rounded-xl border border-border bg-card">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="grid gap-3 p-5 sm:grid-cols-[200px_1fr] sm:items-center"
              >
                <h3 className="font-mono text-sm text-primary">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline" className="px-3 py-1">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
