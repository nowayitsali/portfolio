"use client";

import { ArrowDown, ArrowRight, FileDown, MapPin } from "lucide-react";
import { motion } from "motion/react";

import { profile, socials, stats } from "@/lib/data";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute left-1/2 top-0 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {profile.availability}
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 font-mono text-sm text-primary"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            {profile.name}.
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-3 text-2xl font-semibold tracking-tight text-muted-foreground text-balance sm:text-4xl"
          >
            I build <span className="text-foreground">full-stack</span> &{" "}
            <span className="text-foreground">cloud</span> software.
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="size-4 text-primary" />
            {profile.location}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <a href="#projects">
                View my work
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown className="size-4" />
                Download résumé
              </a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-1">
            {socials.map((s) => (
              <Button
                key={s.label}
                asChild
                variant="ghost"
                size="icon"
                aria-label={s.label}
              >
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  <s.icon className="size-5" />
                </a>
              </Button>
            ))}
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground md:block"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
