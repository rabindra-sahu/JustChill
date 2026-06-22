"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { STATS } from "@/lib/constants";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Sparkles,
  Store,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const milestones = [
  { year: "2018", title: "Founded in Mumbai", desc: "Started with a simple mission: make Indian street flavors premium." },
  { year: "2020", title: "Chia Seed Range", desc: "Launched wellness-led Chia Seed Drink line, pioneering the functional beverage space." },
  { year: "2022", title: "100+ Distributors", desc: "Crossed 100 distribution partners across Maharashtra and Delhi NCR." },
  { year: "2024", title: "Pan-India Expansion", desc: "Now reaching 20+ cities with 500+ distribution partners nationwide." },
];

const values = [
  { icon: Sparkles, title: "Heritage-led taste", desc: "Classic Indian flavors translated into a tighter, more premium brand world." },
  { icon: Leaf, title: "Cleaner ingredients", desc: "Natural cues and functional ingredients that make the range easier to trust." },
  { icon: Store, title: "Retail-ready presentation", desc: "Designed to feel organized, ownable, and easy to scale across all channels." },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-[#fffbf4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <Badge variant="brand" className="mb-5">Brand Story</Badge>
          <h2 className="font-heading text-headline text-foreground">
            Where nostalgia meets{" "}
            <span className="brand-gradient-text">modern refreshment.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            JustChill began with the flavors India already loves — Goli Soda, Jeera, Kala Khatta — and rebuilt them for a new generation of discerning drinkers.
          </p>
        </motion.div>

        {/* ── Image collage row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 grid gap-3 sm:grid-cols-3 h-[300px] sm:h-[380px]"
        >
          {/* Left big image */}
          <div className="relative overflow-hidden rounded-[2rem] sm:col-span-2 group">
            <Image
              src="/street-vendor.png"
              alt="JustChill Goli Soda street vendor in Mumbai"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b20]/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="brand-chip-dark text-xs">
                <span>📍</span> Mumbai Street Market
              </div>
            </div>
          </div>
          {/* Right image */}
          <div className="relative overflow-hidden rounded-[2rem] group">
            <Image
              src="/brand-lifestyle-2.png"
              alt="Friends enjoying JustChill drinks on Mumbai rooftop"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 34vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b20]/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="brand-chip-dark text-xs">
                <span>🌆</span> Mumbai Rooftop
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-stretch">
          {/* Left: Dark editorial panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] forest-section p-8 sm:p-10 flex flex-col"
          >
            <div className="absolute inset-0 dot-pattern opacity-10" />

            <div className="relative z-10 flex-1 flex flex-col justify-end">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-white/50 mb-3">
                Our Mission
              </p>
              <h3 className="font-heading text-3xl sm:text-4xl text-white leading-tight mb-4">
                "Preserve the memory,<br />upgrade the experience."
              </h3>
              <p className="text-white/70 leading-7 text-sm sm:text-base mb-8">
                The strongest part of our brand is its bridge between nostalgia and modernity. People already understand the refreshment cues — our job is to present them with more clarity, more trust, and better visual discipline.
              </p>

              {/* Values list */}
              <div className="space-y-3">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <motion.div
                      key={v.title}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-4 rounded-2xl border border-white/12 bg-white/6 hover:bg-white/10 p-4 transition-colors duration-200"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/12">
                        <Icon className="h-4.5 w-4.5 text-white/85" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{v.title}</p>
                        <p className="text-xs leading-5 text-white/65 mt-0.5">{v.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Story content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="surface-card rounded-2xl p-5 text-center hover:shadow-md transition-shadow"
                >
                  <p className="font-heading text-3xl sm:text-4xl text-foreground tabular-nums">
                    <AnimatedCounter value={stat.value} />
                    <span className="text-[hsl(var(--primary))]">{stat.suffix}</span>
                  </p>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Commitment */}
            <div className="rounded-[1.75rem] border border-border/60 bg-white/80 backdrop-blur-sm p-6 sm:p-8 mb-5 flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Our Commitment</p>
                  <p className="text-sm font-semibold text-foreground mt-0.5">Built In India, Made For India</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  "100% natural ingredients",
                  "FSSAI certified & ISO compliant",
                  "No artificial preservatives",
                  "Real fruit extracts & chia seeds",
                  "Classic Goli Soda marble-stopper bottle",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--brand-leaf))] shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="rounded-[1.75rem] border border-border/60 bg-white/60 p-5 sm:p-6 mb-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-muted-foreground mb-5">
                Brand Journey
              </p>
              <div className="space-y-4">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="h-7 w-7 rounded-full bg-[hsl(var(--primary))/15] border-2 border-[hsl(var(--primary))/40] flex items-center justify-center shrink-0">
                        <div className="h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="mt-1 w-0.5 flex-1 bg-border/60 min-h-[2rem]" />
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="text-xs font-bold text-[hsl(var(--primary))] uppercase tracking-wider">{m.year}</p>
                      <p className="font-semibold text-foreground text-sm mt-0.5">{m.title}</p>
                      <p className="text-xs leading-5 text-muted-foreground mt-0.5">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Button variant="brand" size="lg" asChild className="w-full sm:w-auto shadow-md hover:shadow-lg">
              <Link href="/about">
                Read Our Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
