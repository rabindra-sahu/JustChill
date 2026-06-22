"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const ingredients = [
  { name: "Chia Seeds", benefit: "Omega-3 & fiber", emoji: "🌱", desc: "Real seeds that give our drinks a satisfying texture and genuine wellness value." },
  { name: "Lemon", benefit: "Vitamin C & zest", emoji: "🍋", desc: "Fresh-squeezed lemon character — crisp, bright, and instantly refreshing." },
  { name: "Kala Khatta", benefit: "Natural berry flavor", emoji: "🫐", desc: "The beloved Indian street berry that gives our Goli Soda its iconic deep purple color." },
  { name: "Jeera", benefit: "Digestive & earthy", emoji: "✨", desc: "India's favorite digestive spice — warm, complex, and unmistakably desi." },
  { name: "Orange", benefit: "Natural citrus", emoji: "🍊", desc: "Bright tangy orange, sourced from Indian orchards, no artificial flavoring." },
  { name: "Mint", benefit: "Cool & refreshing", emoji: "🌿", desc: "Fresh mint essence for a cooling finish that cuts through the Indian summer heat." },
];

export function IngredientsSection() {
  return (
    <section id="ingredients" className="py-20 md:py-28 bg-[#f0f7f9] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end"
        >
          <div>
            <Badge variant="brand" className="mb-5">Nature First</Badge>
            <h2 className="font-heading text-headline text-foreground">
              Every sip tells a{" "}
              <span className="brand-gradient-text">real ingredient story.</span>
            </h2>
          </div>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            We start with real ingredients, then ask how to make them work better, 
            taste better, and feel more honest. Zero artificial shortcuts.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          {/* Left: Ingredients image + overlay */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] aspect-square shadow-2xl shadow-black/15">
              <Image
                src="/natural-ingredients.png"
                alt="Natural Indian ingredients — lemon, mint, chia seeds, cumin, berries"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Text overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#07212b]/80">
                <p className="font-heading text-2xl text-white mb-2">100% Natural</p>
                <p className="text-sm text-white/75">Sourced from Indian farms — real ingredients, zero artificial additives.</p>
                {/* Ingredient count chips */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {["🌿 Herbs", "🍋 Citrus", "🫐 Berries", "🌱 Seeds"].map((label) => (
                    <span key={label} className="brand-chip-dark text-xs py-1">
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating certifications */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 z-10"
            >
              <div className="surface-panel rounded-2xl p-4 shadow-xl text-center min-w-[120px]">
                <p className="text-2xl mb-1">🇮🇳</p>
                <p className="font-bold text-xs text-foreground">Made in India</p>
                <p className="text-[10px] text-muted-foreground">FSSAI Certified</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Ingredient cards grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="grid grid-cols-2 gap-3"
          >
            {ingredients.map((ingredient, i) => (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group rounded-[1.5rem] border border-border/50 bg-white/80 backdrop-blur-sm p-4 hover:shadow-lg hover:border-border transition-all duration-300"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {ingredient.emoji}
                </div>
                <p className="font-heading text-lg text-foreground leading-tight">{ingredient.name}</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--primary))] mt-1 mb-2">
                  {ingredient.benefit}
                </p>
                <p className="text-xs leading-5 text-muted-foreground hidden sm:block">
                  {ingredient.desc}
                </p>
              </motion.div>
            ))}

            {/* Bottom trust bar */}
             <div className="col-span-2 rounded-[1.5rem] bg-[#07212b] p-5 border border-white/5">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🚫</div>
                <div>
                  <p className="font-semibold text-white text-sm">Zero artificial ingredients</p>
                  <p className="text-xs text-white/65 mt-0.5">
                    No artificial colors, flavors, or preservatives — ever. This is our core promise.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
