import type { Metadata } from "next";
import { ProductsCatalog } from "@/components/sections/products-catalog";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore JustChill's full product range — Goli Soda classics and Chia Seed wellness drinks in 10 bold Indian flavors.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 -z-10 forest-section" />
        <div className="absolute inset-0 -z-10 dot-pattern opacity-10" />
        <div className="absolute -top-20 left-1/3 h-64 w-64 rounded-full bg-primary/15 blur-3xl -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="brand-chip-dark mb-6 mx-auto w-fit">
            🍾 Our Full Range
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            Bold Flavors,{" "}
            <span className="gold-gradient-text">Real Ingredients.</span>
          </h1>
          <p className="text-xl text-white/65 max-w-2xl mx-auto leading-8">
            10 flavors across two distinct ranges — traditional Goli Soda and
            wellness-forward Chia Seed drinks. Every bottle crafted with natural
            ingredients and zero artificial preservatives.
          </p>

          {/* Quick stats */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {[
              { value: "10", label: "Flavors" },
              { value: "2", label: "Product Lines" },
              { value: "0", label: "Artificial Preservatives" },
              { value: "100%", label: "Natural" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-3xl text-white">{s.value}</p>
                <p className="text-xs text-white/50 uppercase tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductsCatalog />
      <CTABanner />
    </>
  );
}
