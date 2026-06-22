"use client";

import { motion } from "framer-motion";
import {
  Apple,
  Droplets,
  Flag,
  Leaf,
  Sparkles,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Droplets,
  UtensilsCrossed,
  Apple,
  Sparkles,
  Flag,
};

const cardVariants = [
  { bg: "from-[hsl(var(--primary)/0.15)] to-[hsl(var(--primary)/0.05)]", iconBg: "bg-[hsl(var(--primary)/0.15)]", iconColor: "text-[hsl(var(--primary))]" },
  { bg: "from-[hsl(var(--brand-leaf)/0.15)] to-[hsl(var(--brand-leaf)/0.05)]", iconBg: "bg-[hsl(var(--brand-leaf)/0.15)]", iconColor: "text-[hsl(var(--brand-leaf))]" },
  { bg: "from-[hsl(var(--brand-sun)/0.2)] to-[hsl(var(--brand-sun)/0.06)]", iconBg: "bg-[hsl(var(--brand-sun)/0.18)]", iconColor: "text-[hsl(39,90%,40%)]" },
  { bg: "from-[hsl(var(--brand-sky)/0.15)] to-[hsl(var(--brand-sky)/0.05)]", iconBg: "bg-[hsl(var(--brand-sky)/0.15)]", iconColor: "text-[hsl(var(--brand-sky))]" },
  { bg: "from-[hsl(var(--brand-berry)/0.15)] to-[hsl(var(--brand-berry)/0.05)]", iconBg: "bg-[hsl(var(--brand-berry)/0.15)]", iconColor: "text-[hsl(var(--brand-berry))]" },
  { bg: "from-[hsl(155,50%,60%)/0.15] to-[hsl(155,50%,60%)/0.05]", iconBg: "bg-secondary", iconColor: "text-[hsl(var(--brand-leaf))]" },
];

export function WhyJustChillSection() {
  return (
    <section id="why-justchill" className="py-20 md:py-28 forest-section relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-[hsl(var(--primary)/0.08)] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[hsl(var(--brand-leaf)/0.1)] blur-3xl" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <Badge
            variant="outline"
            className="mb-5 border-white/20 bg-white/10 text-white/80"
          >
            Why JustChill
          </Badge>
          <h2 className="font-heading text-headline text-white">
            The product story{" "}
            <span className="gold-gradient-text">already easy to believe.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Instead of inventing a futuristic narrative, we win by refining what
            already feels familiar: natural ingredients, Indian taste memory, and
            a beverage system that feels more current.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            const variant = cardVariants[index % cardVariants.length];
            const isFeatured = index === 0;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/6 backdrop-blur-sm p-6 transition-all duration-400 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/20 ${
                  isFeatured ? "sm:col-span-2 xl:col-span-1" : ""
                }`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${variant.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${variant.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-7 w-7 ${variant.iconColor}`} />
                  </div>

                  {/* Text */}
                  <h3 className="font-heading text-2xl text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/65 group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover reveal detail */}
                  <div className="mt-5 overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                    <div className="brand-divider-light mb-4" />
                    <div className="flex items-center gap-2">
                      <div className={`h-1.5 w-1.5 rounded-full ${variant.iconColor}`} />
                      <p className="text-xs font-semibold text-white/55 uppercase tracking-wider">
                        JustChill Promise
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute -top-8 -right-8 h-24 w-24 rounded-full ${variant.iconBg} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`}
                />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 rounded-[2rem] border border-white/12 bg-white/6 backdrop-blur-sm p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {["🌿", "💧", "🍊", "⚡"].map((emoji, i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 border-2 border-white/20 text-lg"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-white">100% Natural Ingredients</p>
                <p className="text-sm text-white/60">Sourced from Indian farms. Zero artificial additives.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center px-4 border-r border-white/15">
                <p className="font-heading text-2xl text-white">FSSAI</p>
                <p className="text-xs text-white/55 uppercase tracking-wide">Certified</p>
              </div>
              <div className="text-center px-4 border-r border-white/15">
                <p className="font-heading text-2xl text-white">ISO</p>
                <p className="text-xs text-white/55 uppercase tracking-wide">Compliant</p>
              </div>
              <div className="text-center px-4">
                <p className="font-heading text-2xl text-white">🇮🇳</p>
                <p className="text-xs text-white/55 uppercase tracking-wide">Made In India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
