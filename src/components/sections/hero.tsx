"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TickerStrip } from "@/components/ui/ticker-strip";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { STATS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const tickerItems = [
  "Real Chia Seeds",
  "Zero Artificial Preservatives",
  "20+ Cities",
  "500+ Distributors",
  "45 Lakh+ Bottles Sold",
  "Made in India 🇮🇳",
  "Natural Ingredients",
  "Bold Indian Flavors",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" as const } },
};

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={heroRef} id="home" className="relative overflow-hidden min-h-screen flex flex-col">
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fffbf0] via-[#fff8e8] to-[#eef8f3]" />
        <div className="absolute -left-32 top-0 h-[70vh] w-[55vw] rounded-full bg-[hsl(var(--primary)/0.1)] blur-[100px]" />
        <div className="absolute -right-32 top-20 h-[50vh] w-[45vw] rounded-full bg-[hsl(var(--brand-leaf)/0.08)] blur-[90px]" />
        <div className="absolute bottom-0 left-1/3 h-[40vh] w-[40vw] rounded-full bg-[hsl(var(--brand-sun)/0.07)] blur-[80px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pt-28 pb-8 lg:pt-36 lg:pb-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] xl:gap-12">

          {/* ── Left: Copy ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: textY, opacity }}
            className="flex flex-col"
          >
            <motion.div variants={itemVariants}>
              <div className="brand-chip mb-6 w-fit">
                <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
                Modern Indian Beverage Co.
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-display text-foreground text-balance leading-[1.0]"
            >
              The Iconic{" "}
              <span className="hero-gradient-text inline-block">Goli Soda,</span>{" "}
              Reimagined.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground sm:text-xl"
            >
              The glass marble bottle you loved as a kid — now cleaner, bolder, and 
              ready for modern retail. Plus a whole new chia seed wellness range.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                variant="brand"
                size="lg"
                asChild
                className="group shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 text-base px-8 transition-all"
              >
                <Link href="/products">
                  Explore All Flavors
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-base px-8 border-border/70 hover:bg-secondary/60 gap-2"
              >
                <Link href="#product-experience">
                  <Play className="h-4 w-4 fill-current" />
                  See Our Range
                </Link>
              </Button>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap gap-2"
            >
              {[
                { icon: "🌿", text: "Real chia seeds & extracts" },
                { icon: "🚫", text: "No artificial preservatives" },
                { icon: "🍾", text: "Classic marble-stopper bottle" },
              ].map((item) => (
                <span key={item.text} className="brand-chip text-xs gap-2">
                  <span>{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {["RK", "AP", "VS", "PS", "MN"].map((initials, i) => (
                  <div
                    key={initials}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white shadow-sm"
                    style={{ background: ["#ea7828", "#1a6b48", "#a855f7", "#3b82f6", "#f43f5e"][i] }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[hsl(var(--brand-sun))] text-[hsl(var(--brand-sun))]" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Loved by <span className="font-bold text-foreground">10,000+</span> happy customers
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Hero Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            style={{ y: imgY }}
            className="relative"
          >
            {/* Main image card */}
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/20">
              <Image
                src="/hero-product-shot.png"
                alt="JustChill Goli Soda — iconic glass marble bottle with citrus explosion"
                width={640}
                height={640}
                className="w-full object-cover"
                priority
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating label bottom-left */}
              <div className="absolute bottom-5 left-5">
                <div className="brand-chip-dark text-xs px-4 py-2">
                  <span className="text-base">🍋</span>
                  Lemon Goli Soda — #1 Bestseller
                </div>
              </div>
            </div>

            {/* Floating card top-right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 sm:-right-6 z-20"
            >
              <div className="surface-panel rounded-2xl px-4 py-3 shadow-xl min-w-[150px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-ping-slow" />
                  <p className="text-xs font-bold text-foreground">Live Demand</p>
                </div>
                <p className="font-heading text-2xl text-foreground">45L+</p>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Bottles Sold</p>
              </div>
            </motion.div>

            {/* Floating card bottom-right */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -bottom-4 -right-4 sm:-right-6 z-20"
            >
              <div className="surface-panel rounded-2xl px-4 py-3 shadow-xl">
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[hsl(var(--brand-sun))] text-[hsl(var(--brand-sun))]" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-foreground">4.9 / 5 rating</p>
                <p className="text-[10px] text-muted-foreground">from 10K+ reviews</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-20"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="surface-card rounded-2xl px-5 py-5 text-center hover:shadow-lg transition-shadow"
            >
              <p className="font-heading text-3xl sm:text-4xl text-foreground tabular-nums">
                <AnimatedCounter value={stat.value} />
                <span className="text-[hsl(var(--primary))]">{stat.suffix}</span>
              </p>
              <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Ticker */}
      <TickerStrip items={tickerItems} />
    </section>
  );
}
