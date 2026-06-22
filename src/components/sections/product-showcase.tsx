"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProductShowcaseSection() {
  return (
    <section id="showcase" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background deco */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[50vh] w-[40vw] rounded-full bg-[hsl(var(--primary)/0.05)] blur-[80px]" />
        <div className="absolute bottom-0 left-0 h-[40vh] w-[35vw] rounded-full bg-[hsl(var(--brand-leaf)/0.05)] blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge variant="brand" className="mb-5">Two Iconic Ranges</Badge>
          <h2 className="font-heading text-headline text-foreground">
            India's nostalgia in a bottle.{" "}
            <span className="brand-gradient-text">Reinvented.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-8">
            Two distinct product ranges, one bold brand philosophy — crafted to win every modern retail shelf.
          </p>
        </motion.div>

        {/* ── Goli Soda Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-6 overflow-hidden rounded-[2.5rem] relative group"
        >
          <div className="grid lg:grid-cols-[1fr_1fr] min-h-[480px]">
            {/* Left: Image */}
            <div className="relative overflow-hidden min-h-[300px]">
              <Image
                src="/goli-soda-bottles.png"
                alt="JustChill Goli Soda — classic Indian marble-stopper bottles in 5 flavors"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d2b20]/80 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b20]/70 to-transparent lg:hidden" />
            </div>

            {/* Right: Content */}
            <div className="forest-section p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 dot-pattern opacity-8" />
              <div className="absolute top-8 right-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/15">
                  <Sparkles className="h-7 w-7 text-[hsl(var(--brand-sun))]" />
                </div>
              </div>
              <div className="relative z-10">
                <div className="brand-chip-dark mb-6 w-fit">
                  ⚡ Sparkling Range
                </div>
                <h3 className="font-heading text-4xl sm:text-5xl text-white mb-4 leading-tight">
                  Goli Soda
                </h3>
                <p className="text-white/70 text-lg leading-7 mb-8 max-w-sm">
                  The classic Indian street soda with a glass marble stopper — now in 5 bold flavors with cleaner ingredients and premium packaging.
                </p>

                {/* Flavors list */}
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {[
                    { name: "Lemon", color: "#fbbf24" },
                    { name: "Kala Khatta", color: "#7c3aed" },
                    { name: "Orange", color: "#f97316" },
                    { name: "Masala", color: "#ef4444" },
                    { name: "Jeera", color: "#92400e" },
                  ].map((f) => (
                    <div key={f.name} className="flex items-center gap-2.5 rounded-xl bg-white/8 border border-white/10 px-3 py-2.5">
                      <div className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: f.color }} />
                      <span className="text-sm font-medium text-white/85">{f.name}</span>
                    </div>
                  ))}
                </div>

                <Button variant="brand" size="lg" asChild className="shadow-xl">
                  <Link href="/products">
                    Explore Goli Soda
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Chia Seed Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="overflow-hidden rounded-[2.5rem] relative group"
        >
          <div className="grid lg:grid-cols-[1fr_1fr] min-h-[480px]">
            {/* Left: Content */}
            <div className="bg-gradient-to-br from-[#fffbf4] to-white p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden order-2 lg:order-1">
              <div className="absolute -top-12 -left-12 h-48 w-48 rounded-full bg-[hsl(var(--brand-leaf)/0.08)] blur-2xl" />
              <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[hsl(var(--primary)/0.06)] blur-2xl" />
              <div className="absolute top-8 left-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--brand-leaf)/0.12)] border border-[hsl(var(--brand-leaf)/0.2)]">
                  <Droplets className="h-7 w-7 text-[hsl(var(--brand-leaf))]" />
                </div>
              </div>
              <div className="relative z-10">
                <div className="brand-chip mb-6 w-fit">
                  🌱 Wellness Range
                </div>
                <h3 className="font-heading text-4xl sm:text-5xl text-foreground mb-4 leading-tight">
                  Chia Seed<br />Drinks
                </h3>
                <p className="text-muted-foreground text-lg leading-7 mb-8 max-w-sm">
                  Fruit-forward wellness drinks with real omega-3 chia seeds. Hydration that's functional, beautiful, and refreshing all at once.
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {[
                    { icon: "🌱", label: "Real chia seeds" },
                    { icon: "🫐", label: "4 fruit flavors" },
                    { icon: "💧", label: "Deeply hydrating" },
                    { icon: "🚫", label: "No preservatives" },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center gap-2.5 rounded-xl bg-secondary/40 border border-border/40 px-3 py-2.5">
                      <span className="text-sm">{b.icon}</span>
                      <span className="text-sm font-medium text-foreground">{b.label}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" size="lg" asChild className="border-[hsl(var(--brand-leaf)/0.5)] hover:bg-[hsl(var(--brand-leaf)/0.05)] text-foreground">
                  <Link href="/products">
                    Explore Chia Drinks
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative overflow-hidden min-h-[300px] order-1 lg:order-2">
              <Image
                src="/chia-seed-drinks.png"
                alt="JustChill Chia Seed Drinks — mango, berry, watermelon, lemon mint"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
