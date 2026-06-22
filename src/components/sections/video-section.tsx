"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

export function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-fuchsia-50/20 to-background dark:via-fuchsia-950/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="brand" className="mb-4">Watch</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
            See The <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">JustChill</span> Magic
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border/50 group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900 to-fuchsia-900 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎬</div>
              <p className="text-white/80 font-medium">Brand Story Video</p>
            </div>
          </div>

          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl"
            >
              <Play className="h-8 w-8 text-violet-600 ml-1" fill="currentColor" />
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <p className="font-heading font-bold text-lg">From Farm to Bottle</p>
            <p className="text-sm text-white/80">Witness the journey of a JustChill drink</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
