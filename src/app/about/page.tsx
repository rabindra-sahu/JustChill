import type { Metadata } from "next";
import { AboutPageContent } from "@/components/sections/about-page";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover the story behind JustChill — how traditional Indian flavors were transformed into a premium modern beverage brand built for India's next generation.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fffbf4] via-white to-[#f0faf5]" />
        <div className="absolute inset-0 -z-10 dot-pattern opacity-30" />
        <div className="absolute -top-20 right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="brand-chip mb-6 w-fit">
              📖 Our Story
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6">
              Built in India,{" "}
              <span className="brand-gradient-text">made for India.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-8">
              JustChill started with a simple observation: India's street-side refreshment
              culture is one of the most vibrant in the world — yet it had never truly been
              translated into a modern premium beverage experience.
            </p>
          </div>
        </div>
      </section>

      <AboutPageContent />
      <CTABanner />
    </>
  );
}
