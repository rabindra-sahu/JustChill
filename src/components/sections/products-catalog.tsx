"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  CHIA_SEED_FLAVORS,
  GOLI_SODA_FLAVORS,
  FLAVORS,
  type Flavor,
} from "@/data/flavors";

function ProductCard({ flavor, label }: { flavor: Flavor; label: string }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-[1.75rem] overflow-hidden bg-white border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
    >
      <div
        className="relative px-5 pt-6 pb-8"
        style={{
          background: `linear-gradient(150deg, ${flavor.color}22, ${flavor.color}10, rgba(255,255,255,0.9))`,
        }}
      >
        <div className="flex items-start justify-between mb-8">
          <Badge variant="secondary" className="text-[10px] font-bold uppercase tracking-wider">
            {label}
          </Badge>
          <button
            onClick={() => setLiked(!liked)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-border/40 hover:scale-110 transition-transform"
            aria-label={liked ? "Unlike" : "Like"}
          >
            <Heart
              className={`h-4 w-4 transition-colors ${liked ? "fill-rose-500 text-rose-500" : "text-muted-foreground"}`}
            />
          </button>
        </div>

        <div className="flex items-end justify-center py-2">
          <motion.div
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative"
          >
            <div
              className="bottle-shell h-44 w-16"
              style={{
                background: `linear-gradient(180deg, ${flavor.color}f0, ${flavor.color}88, rgba(255,255,255,0.3))`,
                boxShadow: `0 12px 32px ${flavor.color}45`,
              }}
            />
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-4 w-12 rounded-full blur-md opacity-50"
              style={{ background: flavor.color }}
            />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 py-5">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-2">
          {flavor.tagline}
        </p>
        <h3 className="font-heading text-2xl text-foreground mb-2">{flavor.name}</h3>
        <p className="text-sm leading-6 text-muted-foreground mb-5 flex-1">{flavor.description}</p>

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
        </div>
      </div>
    </motion.article>
  );
}

const filters = [
  { label: "All", value: "all" },
  { label: "Goli Soda", value: "goli" },
  { label: "Chia Seed", value: "chia" },
];

export function ProductsCatalog() {
  const [activeFilter, setActiveFilter] = useState("all");

  const displayGroups =
    activeFilter === "all"
      ? [
          { id: "goli", label: "Goli Soda", flavors: GOLI_SODA_FLAVORS },
          { id: "chia", label: "Chia Seed Drink", flavors: CHIA_SEED_FLAVORS },
        ]
      : activeFilter === "goli"
      ? [{ id: "goli", label: "Goli Soda", flavors: GOLI_SODA_FLAVORS }]
      : [{ id: "chia", label: "Chia Seed Drink", flavors: CHIA_SEED_FLAVORS }];

  return (
    <section className="py-16 md:py-20 bg-[#f0f7f9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <span className="text-xs font-black uppercase tracking-[0.22em] text-muted-foreground mr-2">
            Filter:
          </span>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                activeFilter === f.value
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {displayGroups.map((group) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-8">
                <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-2">
                  {group.label}
                </h2>
                <div className="brand-divider w-24" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {group.flavors.map((flavor) => (
                  <ProductCard
                    key={flavor.id}
                    flavor={flavor}
                    label={group.label}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
