"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CHIA_SEED_FLAVORS,
  GOLI_SODA_FLAVORS,
  type Flavor,
} from "@/data/flavors";
import Link from "next/link";

type ProductCardProps = {
  flavor: Flavor;
  label: string;
  index: number;
};

function ProductCard({ flavor, label, index }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className="group relative rounded-[1.75rem] overflow-hidden bg-white border border-border/50 shadow-sm hover:shadow-xl hover:shadow-black/8 transition-all duration-500 flex flex-col"
    >
      {/* Color header */}
      <div
        className="relative px-5 pt-6 pb-8 flex flex-col"
        style={{
          background: `linear-gradient(150deg, ${flavor.color}22, ${flavor.color}10, rgba(255,255,255,0.8))`,
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-8">
          <Badge
            variant="secondary"
            className="text-[10px] font-bold uppercase tracking-wider"
          >
            {label}
          </Badge>
          <button
            onClick={() => setLiked(!liked)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-border/40 hover:scale-110 transition-transform"
            aria-label={liked ? "Unlike" : "Like"}
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                liked
                  ? "fill-rose-500 text-rose-500"
                  : "text-muted-foreground"
              }`}
            />
          </button>
        </div>

        {/* Bottle visual */}
        <div className="flex items-end justify-center py-2">
          <motion.div
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative"
          >
            <div
              className="bottle-shell h-44 w-16"
              style={{
                background: `linear-gradient(180deg, ${flavor.color}f0, ${flavor.color}99, rgba(255,255,255,0.3))`,
                boxShadow: `0 12px 32px ${flavor.color}45`,
              }}
            />
            {/* Glow under bottle */}
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-4 w-12 rounded-full blur-md opacity-50"
              style={{ background: flavor.color }}
            />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 py-5">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-2">
          {flavor.tagline}
        </p>
        <h3 className="font-heading text-2xl text-foreground leading-tight mb-2">
          {flavor.name}
        </h3>
        <p className="text-sm leading-6 text-muted-foreground mb-5 flex-1">
          {flavor.description}
        </p>

        {/* Nutrition */}
        <div className="pt-4 border-t border-border/40">
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "kcal", value: flavor.nutrition.calories },
              { label: "sugar", value: flavor.nutrition.sugar },
              { label: "fiber", value: flavor.nutrition.fiber },
            ].map((n) => (
              <div
                key={n.label}
                className="rounded-xl bg-secondary/40 px-2 py-2.5 text-center hover:bg-secondary/70 transition-colors"
              >
                <p className="text-sm font-bold text-foreground">{n.value}</p>
                <p className="text-[9px] uppercase tracking-wide text-muted-foreground mt-0.5">{n.label}</p>
              </div>
            ))}
          </div>

          {/* Color accent dot */}
          <div className="mt-4 flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{ background: flavor.color }}
            />
            <div
              className="h-1.5 flex-1 rounded-full opacity-25"
              style={{ background: flavor.color }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

const productGroups = [
  {
    id: "goli",
    label: "Goli Soda",
    tagline: "Sparkling Range",
    title: "Classic Indian sparkle, refined for modern shelves.",
    summary:
      "Street-side nostalgia with cleaner packaging, sharper flavor storytelling, and easy retail recall. Five bold flavors to win every shelf occasion.",
    flavors: GOLI_SODA_FLAVORS,
    accentColor: "#ea7828",
  },
  {
    id: "chia",
    label: "Chia Seed Drink",
    tagline: "Wellness Range",
    title: "Fruit-led hydration with a premium wellness cue.",
    summary:
      "Designed for customers who want refreshment with texture, functional value, and a softer visual tone. Real omega-3 chia seeds in every bottle.",
    flavors: CHIA_SEED_FLAVORS,
    accentColor: "#1a6b48",
  },
];

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const group = productGroups[activeTab];

  return (
    <section id="products" className="py-20 md:py-28 bg-[#f0f7f9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge variant="brand" className="mb-5">
                Product Range
              </Badge>
              <h2 className="font-heading text-headline text-foreground">
                Two portfolios,{" "}
                <span className="brand-gradient-text">one bold brand.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                Sparkling nostalgia on one side, fruit-forward wellness on the
                other — structured to feel deliberate and retail-ready.
              </p>
              <Button variant="outline" size="sm" asChild className="mt-4">
                <Link href="/products">
                  View Full Catalog
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Tab switcher */}
          <div className="mt-10 inline-flex rounded-2xl bg-secondary/50 p-1.5 gap-1">
            {productGroups.map((g, i) => (
              <button
                key={g.id}
                onClick={() => setActiveTab(i)}
                className={`relative rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeTab === i
                    ? "bg-white shadow-sm text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {g.label}
                {activeTab === i && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-xl bg-white shadow-sm -z-10"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product group content */}
        <motion.div
          key={group.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Group header */}
          <div className="mb-8 rounded-[2rem] overflow-hidden relative">
            <div
              className="p-6 sm:p-8"
              style={{
                background: `linear-gradient(135deg, ${group.accentColor}18, ${group.accentColor}08, transparent)`,
                border: `1px solid ${group.accentColor}20`,
                borderRadius: "inherit",
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-muted-foreground mb-2">
                    {group.tagline}
                  </p>
                  <h3 className="font-heading text-title text-foreground">
                    {group.title}
                  </h3>
                </div>
                <p className="max-w-sm text-sm leading-6 text-muted-foreground lg:text-base lg:leading-7">
                  {group.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {group.flavors.map((flavor, index) => (
              <ProductCard
                key={flavor.id}
                flavor={flavor}
                label={group.label}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
