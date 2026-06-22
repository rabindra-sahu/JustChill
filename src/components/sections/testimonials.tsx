"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TESTIMONIALS } from "@/lib/constants";

function Stars({ rating = 5 }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating
              ? "fill-[hsl(var(--brand-sun))] text-[hsl(var(--brand-sun))]"
              : "text-white/20"
          }`}
        />
      ))}
    </div>
  );
}

const avatarColors = [
  "from-[hsl(var(--primary))] to-[hsl(22,90%,40%)]",
  "from-[hsl(var(--brand-leaf))] to-[hsl(156,46%,20%)]",
  "from-[#a855f7] to-[#7c3aed]",
  "from-[hsl(var(--brand-sky))] to-[hsl(198,74%,35%)]",
  "from-[hsl(var(--brand-berry))] to-[hsl(346,72%,42%)]",
];

// Double testimonials for seamless marquee
const row1 = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
const row2 = [...TESTIMONIALS.slice(2), ...TESTIMONIALS, ...TESTIMONIALS.slice(0, 3)];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
  index: number;
}) {
  return (
    <div className="flex-shrink-0 w-80 rounded-[1.75rem] bg-white/10 border border-white/12 backdrop-blur-sm p-6 mx-2">
      <div className="flex items-start justify-between mb-4">
        <Stars rating={testimonial.rating} />
        <Quote className="h-5 w-5 text-white/25 rotate-180" />
      </div>
      <p className="text-sm leading-6 text-white/80 mb-5 line-clamp-3">
        "{testimonial.content}"
      </p>
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${
            avatarColors[index % avatarColors.length]
          } text-xs font-bold text-white shadow-sm`}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-white leading-tight">
            {testimonial.name}
          </p>
          <p className="text-[11px] text-white/55 mt-0.5">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 forest-section relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-[hsl(var(--brand-leaf)/0.08)] blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <Badge
                variant="outline"
                className="mb-5 border-white/20 bg-white/10 text-white/80"
              >
                Social Proof
              </Badge>
              <h2 className="font-heading text-headline text-white max-w-2xl">
                What India is{" "}
                <span className="gold-gradient-text">saying about us.</span>
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="font-heading text-4xl text-white">4.9</p>
                <div className="flex justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[hsl(var(--brand-sun))] text-[hsl(var(--brand-sun))]" />
                  ))}
                </div>
                <p className="text-xs text-white/55 mt-1 uppercase tracking-wide">Avg Rating</p>
              </div>
              <div className="h-12 w-px bg-white/15" />
              <div className="text-center">
                <p className="font-heading text-4xl text-white">10K+</p>
                <p className="text-xs text-white/55 mt-1 uppercase tracking-wide">Happy Customers</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Row 1 — left scroll */}
        <div className="marquee-container mb-4" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
          <div className="marquee-track animate-marquee" style={{ animationDuration: "45s" }}>
            {row1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} testimonial={t} index={i} />
            ))}
          </div>
        </div>

        {/* Row 2 — right scroll */}
        <div className="marquee-container" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
          <div className="marquee-track animate-marquee-reverse" style={{ animationDuration: "38s" }}>
            {row2.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} testimonial={t} index={i + 2} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 text-center"
        >
          <p className="text-white/55 text-sm">
            Join <span className="text-white font-semibold">10,000+ satisfied customers</span> across India
          </p>
          <div className="flex justify-center gap-2 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[hsl(var(--brand-sun))] text-[hsl(var(--brand-sun))]" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
