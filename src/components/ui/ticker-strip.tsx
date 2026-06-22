"use client";

import { cn } from "@/lib/utils";

interface TickerStripProps {
  items: string[];
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  dark?: boolean;
  className?: string;
  separator?: string;
}

export function TickerStrip({
  items,
  speed = "normal",
  reverse = false,
  dark = false,
  className,
  separator = "·",
}: TickerStripProps) {
  const duration = speed === "slow" ? "50s" : speed === "fast" ? "20s" : "35s";
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn(
        "marquee-container py-3 overflow-hidden",
        dark
          ? "border-y border-white/10 bg-white/4"
          : "border-y border-border/40 bg-white/60",
        className
      )}
    >
      <div
        className={cn(
          "marquee-track flex items-center gap-0",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ animationDuration: duration }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={cn(
              "text-sm font-semibold uppercase tracking-[0.2em] px-6 flex items-center gap-6 whitespace-nowrap",
              dark ? "text-white/60" : "text-muted-foreground"
            )}
          >
            {item}
            <span
              className={cn(
                "text-xs",
                dark ? "text-white/30" : "text-primary/60"
              )}
            >
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
