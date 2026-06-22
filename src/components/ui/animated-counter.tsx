"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 1.5,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString("en-IN");
      }
    });
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  dark?: boolean;
}

export function StatCard({ value, suffix, label, dark = false }: StatCardProps) {
  return (
    <div
      className={`rounded-2xl px-5 py-5 ${
        dark
          ? "bg-white/8 border border-white/12"
          : "surface-card"
      }`}
    >
      <p className={`font-heading text-3xl sm:text-4xl ${dark ? "text-white" : "text-foreground"}`}>
        <AnimatedCounter value={value} className="tabular-nums" />
        <span className={dark ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--primary))]"}>
          {suffix}
        </span>
      </p>
      <p className={`mt-2 text-sm ${dark ? "text-white/60" : "text-muted-foreground"}`}>
        {label}
      </p>
    </div>
  );
}
