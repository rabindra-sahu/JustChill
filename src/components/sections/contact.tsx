"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight,
  Send,
} from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@justchill.in",
    description: "Best for trade enquiries, retail discussions, and general questions.",
    href: "mailto:hello@justchill.in",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-600 bg-blue-500/10",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 98765 43210",
    description: "Connect directly for urgent distributor or stocking conversations.",
    href: "tel:+919876543210",
    color: "from-[hsl(var(--primary))/20] to-[hsl(var(--primary))/5]",
    iconColor: "text-[hsl(var(--primary))] bg-[hsl(var(--primary))/10]",
  },
  {
    icon: MapPin,
    title: "Find Us",
    detail: "Mumbai, India",
    description: "Headquartered in Mumbai with pan-India distribution support.",
    href: "#",
    color: "from-[hsl(var(--brand-leaf))/20] to-[hsl(var(--brand-leaf))/5]",
    iconColor: "text-[hsl(var(--brand-leaf))] bg-[hsl(var(--brand-leaf))/10]",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f0f7f9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <Badge variant="brand" className="mb-5">Contact</Badge>
          <h2 className="font-heading text-headline text-foreground max-w-2xl mx-auto">
            Let's start a{" "}
            <span className="brand-gradient-text">conversation.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground max-w-xl mx-auto">
            Whether you're a retailer, distributor, or just a fan — we'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-3 mb-12"
        >
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.title}
                href={card.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group rounded-[1.75rem] bg-gradient-to-br ${card.color} border border-border/50 p-6 hover:shadow-lg transition-all`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${card.iconColor} mb-4`}>
                  <Icon className="h-5.5 w-5.5" />
                </div>
                <p className="font-bold text-foreground mb-1">{card.title}</p>
                <p className="text-sm font-semibold text-foreground mb-2">{card.detail}</p>
                <p className="text-xs leading-5 text-muted-foreground">{card.description}</p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          {/* Left: extra info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* WhatsApp card */}
            <div className="overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-[#0d2b20] to-[#224f3c] p-6 text-white shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12">
                  <MessageCircle className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white mb-1">Prefer WhatsApp?</p>
                  <p className="text-sm leading-6 text-white/70 mb-4">
                    Quick conversations about stock, sampling, and introductions — we respond fast.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                    asChild
                  >
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-green-400">
                        <path d="M17.47 14.82c-.28-.14-1.66-.82-1.92-.92-.26-.1-.45-.14-.64.14-.19.28-.74.92-.91 1.1-.17.19-.34.21-.63.07-1.26-.59-2.13-1.6-2.54-2.42-.2-.4.2-.37.57-1.22.07-.15 0-.22-.11-.35-.11-.14-.5-.48-.65-.68-.14-.19-.29-.22-.54-.07-.78.41-1.74.71-2.61.91-.28.06-1.13.11-2.01-.16-1.59-.48-1.92-1.1-2.11-1.65-.14-.41-.17-.38-.32-.65-.16-.28-.61-.86-.74-1.05l-.39-.45c-.23-.25-.46-.29-.68-.14-.21.14-.82.89-1.22 1.97-.28.75.25 1.41.75 1.83.22.18.46.31.72.41.93.35 1.7.37 2.49.31.69-.05 1.66-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.25-.19-.52-.32zM12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.95.67 3.76 1.72 5.19l-.46 1.71 1.77-.47c1.34.73 2.85 1.14 4.42 1.18h.05a9.45 9.45 0 0 0 5.99-2.13c2.35-1.88 4.08-4.68 4.08-8.1 0-5.47-4.43-9.9-10.18-9.9z" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick info */}
            <div className="surface-card rounded-[1.6rem] p-5">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-muted-foreground mb-4">
                Office Details
              </p>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Sales", value: "Trade, stocking, partnerships" },
                  { label: "Response", value: "Within 1 business day" },
                  { label: "Coverage", value: "Pan-India, 20+ cities" },
                  { label: "Hours", value: "Mon–Sat, 10am–7pm IST" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <span className="text-muted-foreground w-20 shrink-0">{item.label}</span>
                    <span className="font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="surface-panel rounded-[2rem] p-6 sm:p-8"
          >
            <div className="flex items-start gap-4 mb-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-3xl text-foreground">Send a message</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  We usually reply within one business day. Faster for distributor conversations.
                </p>
              </div>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                toast({
                  title: "Message received ✓",
                  description: "We'll get back to you within 24 hours.",
                  variant: "success",
                });
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Your name" required />
                <Input placeholder="Email address" type="email" required />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Tell us how we can help..." rows={5} required />
              <Button
                type="submit"
                variant="brand"
                size="lg"
                className="w-full shadow-md hover:shadow-lg group"
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
