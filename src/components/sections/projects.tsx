import { ArrowUpRight, Folder } from "lucide-react";

import { projects } from "@/lib/data";
import { GithubIcon } from "@/components/brand-icons";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionHeading
        index="03"
        title="Things I've built"
        description="A few projects that show how I think about product, data, and UX."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal as="article" key={project.title} delay={i * 0.05}>
            <div className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Folder className="size-5" />
                </span>
                <div className="flex items-center gap-1">
                  {project.links.github ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <GithubIcon className="size-5" />
                    </a>
                  ) : null}
                  {project.links.demo ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ArrowUpRight className="size-5" />
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                {project.featured ? (
                  <Badge className="text-[10px]">Featured</Badge>
                ) : null}
              </div>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {project.period}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="absolute left-0 top-2 size-1.5 rounded-full bg-primary/60" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.tags.map((t) => (
                  <Badge key={t} variant="muted">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
