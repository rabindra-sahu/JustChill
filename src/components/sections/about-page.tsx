"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Leaf, ShieldCheck, Sparkles, Store } from "lucide-react";
import { STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import Image from "next/image";

const teamValues = [
  {
    icon: Sparkles,
    title: "Innovation with Heritage",
    desc: "We take what India already loves and rebuild it with modern quality standards — no gimmicks, just honest craftsmanship.",
  },
  {
    icon: Leaf,
    title: "Natural First",
    desc: "Every ingredient decision starts with the question: is this real? Real extracts, real chia seeds, real fruit — always.",
  },
  {
    icon: Store,
    title: "Built for Scale",
    desc: "Our products are engineered for modern retail environments — shelf-ready presentation, clear ingredient stories, consistent quality.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency Always",
    desc: "FSSAI certified. Nutritional labels you can actually understand. No hidden ingredients, no misleading claims.",
  },
];

export function AboutPageContent() {
  return (
    <>
      {/* Mission section */}
      <section className="py-16 md:py-20 bg-[#f0f7f9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="surface-card rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <p className="font-heading text-4xl text-foreground tabular-nums">
                  <AnimatedCounter value={stat.value} />
                  <span className="text-[hsl(var(--primary))]">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mission split */}
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
                The idea was simple: preserve the memory, upgrade the experience.
              </h2>
              <div className="space-y-4 text-base leading-7 text-muted-foreground">
                <p>
                  JustChill began with familiar street-side refreshment rituals and rebuilt
                  them for modern beverage expectations — better packaging discipline, cleaner
                  ingredient language, and a more premium shelf impression.
                </p>
                <p>
                  The strongest part of our brand is its bridge between nostalgia and modernity.
                  People already understand the refreshment cues; the job is to present them
                  with more clarity, more trust, and better visual discipline.
                </p>
                <p>
                  That's why our portfolio works when it leans into warm, ingredient-led
                  storytelling. It needs to feel human, physical, and shelf-tested — not like
                  a tech startup with a drinks problem.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "100% natural ingredients",
                  "FSSAI certified",
                  "No artificial preservatives",
                  "Real fruit extracts",
                  "Real chia seeds",
                  "Pan-India distribution",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--brand-leaf))] shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] shadow-2xl">
                <Image
                  src="/about-lifestyle.png"
                  alt="JustChill lifestyle — friends enjoying beverages at golden hour"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b20]/50 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white shadow-xl p-4 border border-border/50 max-w-[200px]">
                <p className="font-heading text-2xl text-foreground">2018</p>
                <p className="text-xs text-muted-foreground mt-0.5">Founded in Mumbai</p>
                <div className="brand-divider mt-3" />
                <p className="font-heading text-2xl text-foreground mt-3">2024</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pan-India Presence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-16 md:py-20 forest-section relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-8" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-4xl sm:text-5xl text-white mb-4">
              What we stand for
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-lg">
              Four principles that guide every product decision at JustChill.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {teamValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.75rem] border border-white/12 bg-white/6 backdrop-blur-sm p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 mb-5">
                    <Icon className="h-6 w-6 text-white/85" />
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-3">{value.title}</h3>
                  <p className="text-sm leading-7 text-white/65">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottles hero */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] overflow-hidden relative">
            <div className="absolute inset-0">
              <Image
                src="/hero-bottles.png"
                alt="JustChill premium beverage bottles"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b20]/90 via-[#0d2b20]/60 to-transparent" />
            </div>
            <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-white/45 mb-4">
                Our Products
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl text-white mb-5">
                10 flavors crafted with care.
              </h2>
              <p className="text-white/70 leading-7 text-base sm:text-lg mb-8">
                From classic Lemon Goli Soda to Mango Chia Seed Drink — every flavor
                in our portfolio has been crafted to delight and refresh.
              </p>
              <a
                href="/products"
                className="inline-flex items-center gap-2 rounded-2xl bg-[hsl(var(--primary))] text-white font-semibold px-6 py-3 hover:bg-[hsl(22,96%,46%)] transition-colors shadow-lg hover:shadow-xl"
              >
                Explore All Products →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
