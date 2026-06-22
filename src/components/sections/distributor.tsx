"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { IndianStates } from "@/lib/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/components/ui/toast";
import { ArrowRight, Headphones, ShieldCheck, TrendingUp, Users, Package, Clock } from "lucide-react";

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().email("Enter a valid email address"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(1, "State is required"),
});

type LeadForm = z.infer<typeof leadSchema>;

const distributorBenefits = [
  {
    icon: TrendingUp,
    title: "Healthy Trade Margins",
    description: "A portfolio broad enough to support both quick volume and premium upsell moments.",
    stat: "25-35%",
    statLabel: "Gross Margin",
  },
  {
    icon: Headphones,
    title: "Full Brand Support",
    description: "Sales decks, product storytelling, and a polished presentation toolkit for retailers.",
    stat: "24hrs",
    statLabel: "Onboarding",
  },
  {
    icon: ShieldCheck,
    title: "Clear Market Position",
    description: "A brand positioned between nostalgic refreshment and modern wellness.",
    stat: "500+",
    statLabel: "Partners",
  },
];

const quickStats = [
  { icon: Users, value: "500+", label: "Distributors" },
  { icon: Package, value: "20+", label: "Cities" },
  { icon: Clock, value: "24h", label: "Response" },
];

export function DistributorSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadForm>({
    resolver: zodResolver(leadSchema),
  });

  const stateOptions = IndianStates.map((state) => ({ label: state, value: state }));

  const onSubmit = async (data: LeadForm) => {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error || "Submission failed");
      toast({
        title: "Application received! 🎉",
        description: "The JustChill team will reach out within 24 hours.",
        variant: "success",
      });
      reset();
    } catch (error: unknown) {
      toast({
        title: "Could not submit application",
        description:
          error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="distributor" className="py-20 md:py-28 bg-[#fffbf4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <Badge variant="brand" className="mb-5">
            Distributor Program
          </Badge>
          <h2 className="font-heading text-headline text-foreground max-w-3xl mx-auto">
            Partner with India's most{" "}
            <span className="brand-gradient-text">exciting beverage brand.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            The product line already has the right consumer cues. The opportunity is making it
            easier for retailers and distributors to present, explain, and reorder with confidence.
          </p>
        </motion.div>

        {/* Benefits cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-3 mb-12"
        >
          {distributorBenefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="surface-card rounded-[1.75rem] p-6 hover:shadow-lg transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-3">
                  <p className="font-heading text-2xl text-foreground">{benefit.stat}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{benefit.statLabel}</p>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main grid: form + info */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0d2b20] via-[#173d2c] to-[#0d2b20] p-8 sm:p-10 text-white relative"
          >
            <div className="absolute inset-0 dot-pattern opacity-8" />
            <div className="relative z-10">
              <div className="brand-chip-dark mb-6 w-fit">
                <span>🤝</span> Join Our Network
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl text-white mb-4 leading-tight">
                Built for partners who want a faster-moving beverage story.
              </h3>
              <p className="text-white/70 leading-7 mb-8">
                With a portfolio that spans nostalgic sparkling drinks and modern wellness
                beverages, you get products that sell themselves — and our full support to
                help you scale.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {quickStats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="rounded-2xl bg-white/8 border border-white/12 px-3 py-4 text-center">
                      <Icon className="h-4 w-4 text-white/50 mx-auto mb-2" />
                      <p className="font-heading text-2xl text-white">{s.value}</p>
                      <p className="text-[10px] uppercase tracking-wide text-white/50 mt-0.5">{s.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Process steps */}
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">How It Works</p>
                {[
                  { step: "01", title: "Apply Online", desc: "Fill out the form — takes 2 minutes." },
                  { step: "02", title: "Team Connects", desc: "Our team reaches out within 24 hours." },
                  { step: "03", title: "Start Selling", desc: "Get onboarded and start moving product." },
                ].map((p) => (
                  <div key={p.step} className="flex items-start gap-4">
                    <span className="font-heading text-sm text-primary w-8 shrink-0">{p.step}</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{p.title}</p>
                      <p className="text-xs text-white/55">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="surface-panel rounded-[2rem] p-6 sm:p-8"
          >
            <div className="mb-6">
              <h3 className="font-heading text-3xl text-foreground">Apply for distribution</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                Share your market details. We'll follow up with product mix, territory fit, and onboarding steps.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <Input {...register("name")} placeholder="Full Name *" />
              {errors.name && <p className="text-sm text-destructive -mt-2">{errors.name.message}</p>}

              <Input {...register("company")} placeholder="Company / Business Name *" />
              {errors.company && <p className="text-sm text-destructive -mt-2">{errors.company.message}</p>}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Input {...register("mobile")} placeholder="Mobile Number *" type="tel" maxLength={10} />
                  {errors.mobile && <p className="mt-1 text-sm text-destructive">{errors.mobile.message}</p>}
                </div>
                <div>
                  <Input {...register("email")} placeholder="Email Address *" type="email" />
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Input {...register("city")} placeholder="City *" />
                  {errors.city && <p className="mt-1 text-sm text-destructive">{errors.city.message}</p>}
                </div>
                <div>
                  <Select options={stateOptions} placeholder="State *" defaultValue="" {...register("state")} />
                  {errors.state && <p className="mt-1 text-sm text-destructive">{errors.state.message}</p>}
                </div>
              </div>

              <div className="rounded-2xl bg-secondary/50 px-4 py-3.5 flex items-start gap-3">
                <Clock className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  We typically respond within one business day with territory fit assessment and next steps.
                </p>
              </div>

              <Button
                type="submit"
                variant="brand"
                size="lg"
                className="w-full shadow-md hover:shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Distribution Interest
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
