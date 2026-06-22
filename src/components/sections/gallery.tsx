"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const images = [
  { id: 1, label: "Goli Soda Bottle", color: "from-violet-500 to-fuchsia-500", emoji: "🧋" },
  { id: 2, label: "Chia Seed Drink", color: "from-blue-500 to-cyan-500", emoji: "🥛" },
  { id: 3, label: "Product Photography", color: "from-pink-500 to-rose-500", emoji: "📸" },
  { id: 4, label: "Distributor Event", color: "from-amber-500 to-orange-500", emoji: "🤝" },
  { id: 5, label: "Factory Floor", color: "from-emerald-500 to-teal-500", emoji: "🏭" },
  { id: 6, label: "Brand Story", color: "from-indigo-500 to-purple-500", emoji: "✨" },
];

export function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-indigo-50/20 to-background dark:via-indigo-950/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="brand" className="mb-4">Gallery</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
            Moments of <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Joy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Behind the scenes, product shots, and happy moments with JustChill.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => {
            const heights = ["row-span-2", "row-span-1", "row-span-1", "row-span-2", "row-span-1", "row-span-1"];
            return (
              <motion.button
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-xl ${heights[i]} bg-gradient-to-br ${img.color} p-6 flex flex-col justify-end text-left hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                <p className="relative text-white font-semibold text-lg drop-shadow-md group-hover:drop-shadow-lg transition-all">
                  {img.label}
                </p>
                <p className="relative text-white/80 text-xs mt-2 font-medium">Brand content</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
