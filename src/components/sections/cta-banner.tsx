"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function CTABanner() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl min-h-[500px]">
          {/* Background image */}
          <Image
            src="/street-vendor.png"
            alt="JustChill at Indian street market"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d2b20]/92 via-[#0d2b20]/80 to-[#0d2b20]/70" />

          {/* Shimmer overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 4s linear infinite",
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <div className="brand-chip-dark mb-6 w-fit">
                  <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
                  India's Favourite Refreshment
                </div>

                <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-tight">
                  Taste the{" "}
                  <span className="gold-gradient-text">difference.</span>
                  <br />
                  Chill the{" "}
                  <span className="gold-gradient-text">moment.</span>
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-7 text-white/70">
                  From nostalgic street-side Goli Soda to wellness-forward chia drinks — JustChill
                  brings bold Indian flavors to modern retail shelves, one refreshing sip at a time.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="brand"
                    size="xl"
                    asChild
                    className="group shadow-2xl shadow-primary/30 hover:shadow-3xl"
                  >
                    <Link href="/#distributor">
                      Become a Distributor
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                    asChild
                  >
                    <Link href="/products">View All Products</Link>
                  </Button>
                </div>

                {/* Social proof */}
                <div className="mt-10 flex flex-wrap gap-4">
                  {[
                    { value: "45L+", label: "Bottles Sold" },
                    { value: "500+", label: "Distributors" },
                    { value: "20+", label: "Cities" },
                    { value: "4.9★", label: "Avg Rating" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-center min-w-[80px]">
                      <p className="font-heading text-xl text-white">{s.value}</p>
                      <p className="text-[10px] uppercase tracking-wide text-white/55">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: image collage */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Main image */}
                  <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4] shadow-2xl">
                    <Image
                      src="/brand-lifestyle-2.png"
                      alt="Friends enjoying JustChill on Mumbai rooftop"
                      fill
                      className="object-cover"
                      sizes="35vw"
                    />
                  </div>

                  {/* Floating mini card */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 z-10"
                  >
                    <div className="surface-panel rounded-2xl p-4 shadow-xl">
                      <p className="text-2xl mb-1">🍾</p>
                      <p className="font-heading text-lg text-foreground">10 Flavors</p>
                      <p className="text-xs text-muted-foreground">Goli Soda + Chia</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
