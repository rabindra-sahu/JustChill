"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FAQS } from "@/lib/constants";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06 }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-primary/30 shadow-md shadow-primary/8"
          : "border-border/60 bg-white/70 hover:border-border hover:bg-white/90"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        {/* Number */}
        <span
          className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-xl text-xs font-black transition-colors ${
            open
              ? "bg-primary text-white"
              : "bg-secondary/80 text-muted-foreground"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="font-semibold text-foreground text-base leading-snug flex-1 pt-0.5">
          {question}
        </span>

        <span
          className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-300 ${
            open
              ? "bg-primary/12 text-primary rotate-0"
              : "bg-secondary/50 text-muted-foreground"
          }`}
        >
          {open ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </span>
      </button>

      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pl-[4.5rem]">
          <div className="brand-divider mb-4 opacity-40" />
          <p className="text-sm sm:text-base leading-7 text-muted-foreground">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-start">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <Badge variant="brand" className="mb-5">
              FAQ
            </Badge>
            <h2 className="font-heading text-headline text-foreground">
              Questions,{" "}
              <span className="brand-gradient-text">answered.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              Everything you need to know about JustChill — from our ingredients to
              becoming a distribution partner.
            </p>

            {/* Quick links */}
            <div className="mt-8 space-y-2">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-muted-foreground mb-3">
                Quick Jump
              </p>
              {["About Our Products", "Health & Ingredients", "Distribution Program", "Ordering & Bulk"].map((cat) => (
                <div
                  key={cat}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 cursor-pointer transition-colors"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                  {cat}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-8 rounded-2xl bg-secondary/50 p-5">
              <p className="font-semibold text-foreground text-sm mb-1">Still have questions?</p>
              <p className="text-xs text-muted-foreground mb-3">
                Our team is happy to help. Reach out via email or WhatsApp.
              </p>
              <a
                href="mailto:hello@justchill.in"
                className="text-sm font-semibold text-primary hover:underline"
              >
                hello@justchill.in →
              </a>
            </div>
          </motion.div>

          {/* Right: FAQs */}
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
