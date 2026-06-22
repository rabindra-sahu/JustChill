"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Droplets } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CHIA_SEED_FLAVORS, GOLI_SODA_FLAVORS } from "@/data/flavors";

export function ProductExperienceSection() {
  const [activeFlavor, setActiveFlavor] = useState(0);
  const [category, setCategory] = useState<"goli" | "chia">("chia");

  const flavors = category === "goli" ? GOLI_SODA_FLAVORS : CHIA_SEED_FLAVORS;
  const flavor = flavors[activeFlavor];

  const next = () => setActiveFlavor((prev) => (prev + 1) % flavors.length);
  const prev = () => setActiveFlavor((prev) => (prev - 1 + flavors.length) % flavors.length);

  return (
    <section
      id="product-experience"
      className="py-20 md:py-28 relative overflow-hidden transition-colors duration-700"
      style={{
        background: `linear-gradient(135deg, ${flavor.color}12, white 60%, ${flavor.color}08)`,
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[60vw] rounded-full blur-[100px] opacity-20 transition-colors duration-700 -z-0"
        style={{ background: flavor.color }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <Badge variant="outline" className="mb-5">
              Flavor Lab
            </Badge>
            <h2 className="font-heading text-headline text-foreground">
              Explore every{" "}
              <span
                className="transition-colors duration-500"
                style={{ color: flavor.color }}
              >
                flavor.
              </span>
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
            Tap a flavor and watch the whole experience transform. Each one has its own story, texture, and taste profile.
          </p>
        </motion.div>

        {/* Main interactive area */}
        <div className="grid gap-6 lg:grid-cols-[0.32fr_0.68fr] lg:gap-8">
          {/* Flavor selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="surface-panel rounded-[2rem] p-4 flex flex-col gap-3"
          >
            {/* Category tabs */}
            <div className="flex gap-2 mb-1">
              {(["goli", "chia"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setCategory(cat); setActiveFlavor(0); }}
                  className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all ${
                    category === cat
                      ? "bg-foreground text-background shadow-sm"
                      : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat === "goli" ? "Goli Soda" : "Chia Seed"}
                </button>
              ))}
            </div>

            {/* Flavor list */}
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {flavors.map((item, index) => {
                const active = activeFlavor === index;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveFlavor(index)}
                    whileTap={{ scale: 0.97 }}
                    className={`group rounded-[1.25rem] border px-4 py-4 text-left transition-all duration-300 ${
                      active
                        ? "border-primary/30 shadow-md"
                        : "border-transparent bg-white/60 hover:border-border/70 hover:bg-white/90"
                    }`}
                    style={active ? { background: `linear-gradient(135deg, ${item.color}18, white)` } : {}}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-heading text-lg text-foreground leading-tight">
                          {item.name}
                        </p>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                          {item.tagline}
                        </p>
                      </div>
                      <div
                        className={`h-4 w-4 rounded-full shadow-sm transition-transform ${active ? "scale-125" : ""}`}
                        style={{ backgroundColor: item.color, boxShadow: `0 2px 8px ${item.color}60` }}
                      />
                    </div>
                    {active && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 pt-3 border-t border-border/30"
                      >
                        <p className="text-xs text-muted-foreground leading-5">{item.description}</p>
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Detail panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="surface-panel rounded-[2rem] p-5 sm:p-6"
          >
            <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
              {/* Bottle display */}
              <div
                className="relative overflow-hidden rounded-[1.75rem] p-6 text-white min-h-[18rem] flex flex-col"
                style={{
                  background: `linear-gradient(160deg, ${flavor.color}ee, #0d2b20)`,
                }}
              >
                {/* Floating badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 backdrop-blur-sm w-fit">
                  {category === "goli" ? (
                    <Sparkles className="h-3.5 w-3.5" />
                  ) : (
                    <Droplets className="h-3.5 w-3.5" />
                  )}
                  {category === "goli" ? "Sparkling" : "Wellness"}
                </div>

                {/* Animated bottle */}
                <div className="flex-1 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${category}-${activeFlavor}`}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col items-center"
                    >
                      <div
                        className="bottle-shell h-56 w-24"
                        style={{
                          background: `linear-gradient(180deg, ${flavor.color}f0, ${flavor.color}88, rgba(255,255,255,0.3))`,
                          boxShadow: `0 20px 60px ${flavor.color}50, inset 0 1px 0 rgba(255,255,255,0.9)`,
                        }}
                      />
                      {/* Ground glow */}
                      <div
                        className="mt-2 h-3 w-20 rounded-full blur-md opacity-50"
                        style={{ background: flavor.color }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Nav controls */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prev}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4.5 w-4.5" />
                  </button>
                  <div className="flex gap-1.5">
                    {flavors.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveFlavor(i)}
                        className={`rounded-full transition-all ${
                          i === activeFlavor
                            ? "bg-white w-5 h-1.5"
                            : "bg-white/30 w-1.5 h-1.5"
                        }`}
                        aria-label={`Flavor ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>

              {/* Flavor details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${category}-${activeFlavor}-details`}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }}
                  transition={{ duration: 0.28 }}
                  className="flex flex-col justify-center"
                >
                  <Badge
                    variant="brand"
                    className="mb-4 w-fit"
                    style={{
                      background: `${flavor.color}20`,
                      borderColor: `${flavor.color}40`,
                      color: flavor.color,
                    }}
                  >
                    {category === "goli" ? "Goli Soda" : "Chia Seed Drink"}
                  </Badge>

                  <h3 className="font-heading text-4xl sm:text-5xl text-foreground">
                    {flavor.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    {flavor.description}
                  </p>

                  {/* Nutrition stats */}
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {[
                      { key: "calories", label: "kcal", value: flavor.nutrition.calories, unit: "" },
                      { key: "sugar", label: "Sugar", value: flavor.nutrition.sugar, unit: "" },
                      { key: "fiber", label: "Fiber", value: flavor.nutrition.fiber, unit: "" },
                    ].map((n) => (
                      <div
                        key={n.key}
                        className="rounded-2xl bg-white/70 border border-border/40 px-3 py-4 text-center"
                      >
                        <p className="font-heading text-xl text-foreground">{n.value}</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{n.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Flavor bar */}
                  <div className="mt-6 rounded-[1.4rem] bg-white/60 border border-border/40 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground mb-3">
                      Taste Profile
                    </p>
                    <div className="space-y-2.5">
                      {[
                        { label: "Sweetness", value: category === "goli" ? 75 : 55 },
                        { label: "Fizz", value: category === "goli" ? 90 : 10 },
                        { label: "Fruitiness", value: activeFlavor < 2 ? 70 : 85 },
                      ].map((bar) => (
                        <div key={bar.label}>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs font-medium text-foreground">{bar.label}</span>
                            <span className="text-xs text-muted-foreground">{bar.value}%</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-secondary/50">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${bar.value}%` }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                              className="h-full rounded-full"
                              style={{ background: `linear-gradient(90deg, ${flavor.color}, ${flavor.color}99)` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
