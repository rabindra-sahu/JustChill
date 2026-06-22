import { HeroSection } from "@/components/sections/hero";
import { ProductShowcaseSection } from "@/components/sections/product-showcase";
import { ProductsSection } from "@/components/sections/products";
import { IngredientsSection } from "@/components/sections/ingredients";
import { AboutSection } from "@/components/sections/about";
import { WhyJustChillSection } from "@/components/sections/why-justchill";
import { ProductExperienceSection } from "@/components/sections/product-experience";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { DistributorSection } from "@/components/sections/distributor";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { CTABanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductShowcaseSection />
      <ProductsSection />
      <IngredientsSection />
      <AboutSection />
      <WhyJustChillSection />
      <ProductExperienceSection />
      <TestimonialsSection />
      <DistributorSection />
      <FAQSection />
      <ContactSection />
      <CTABanner />
    </>
  );
}
