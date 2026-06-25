"use client";

import Image from "next/image";
import { useState } from "react";

import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Portrait({ className }: { className?: string }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={cn("relative w-full max-w-[320px]", className)}>
      <div
        aria-hidden
        className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-primary/30 bg-primary/5"
      />
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-card">
        {errored ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 to-card">
            <span className="font-mono text-5xl font-bold text-primary">
              {profile.initials}
            </span>
          </div>
        ) : (
          <Image
            src={profile.photoUrl}
            alt={`Portrait of ${profile.name}`}
            fill
            sizes="320px"
            priority
            onError={() => setErrored(true)}
            className="object-cover object-top"
          />
        )}
      </div>
    </div>
  );
}
