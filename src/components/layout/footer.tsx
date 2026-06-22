"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/components/ui/toast";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.727-8.842L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const footerNav = [
  {
    heading: "Products",
    links: [
      { label: "Goli Soda Range", href: "/products" },
      { label: "Chia Seed Drinks", href: "/products" },
      { label: "Flavor Lab", href: "/#product-experience" },
      { label: "New Arrivals", href: "/products" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About JustChill", href: "/about" },
      { label: "Our Story", href: "/about" },
      { label: "Brand Values", href: "/about" },
      { label: "Press & Media", href: "#" },
    ],
  },
  {
    heading: "Partners",
    links: [
      { label: "Become a Distributor", href: "/#distributor" },
      { label: "Trade Program", href: "/#distributor" },
      { label: "Bulk Orders", href: "/#contact" },
      { label: "Corporate Gifting", href: "/#contact" },
    ],
  },
];

const socials = [
  { name: "Instagram", Icon: InstagramIcon, href: "#", color: "hover:text-pink-400" },
  { name: "X (Twitter)", Icon: XIcon, href: "#", color: "hover:text-sky-400" },
  { name: "LinkedIn", Icon: LinkedInIcon, href: "#", color: "hover:text-blue-400" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative overflow-hidden bg-[#0a1f17] text-white">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute top-1/2 right-0 h-48 w-48 rounded-full bg-[hsl(var(--brand-leaf)/0.08)] blur-3xl" />
        <div className="absolute inset-0 dot-pattern opacity-5" />
      </div>

      {/* Newsletter strip */}
      <div className="relative border-b border-white/8 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-heading text-xl text-white">Stay refreshed.</p>
              <p className="text-sm text-white/55 mt-0.5">
                Get the latest flavors, news, and offers from JustChill.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast({
                  title: "You're in! 🎉",
                  description: "Welcome to the JustChill family.",
                  variant: "success",
                });
                setEmail("");
              }}
              className="flex gap-2 w-full sm:w-auto"
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/8 border-white/15 text-white placeholder:text-white/40 focus:border-primary focus:bg-white/12 min-w-[220px]"
                required
              />
              <Button type="submit" variant="brand" size="default" className="shrink-0 shadow-md">
                Subscribe
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--primary))] text-white font-bold text-sm shadow-md group-hover:shadow-lg transition-shadow">
                JC
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">JustChill</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Premium Beverages
                </p>
              </div>
            </Link>

            <p className="text-sm leading-7 text-white/60 mb-6 max-w-xs">
              Traditional Goli Soda meets modern wellness. Real chia seeds, bold Indian
              flavors, zero artificial preservatives — crafted for the way India drinks today.
            </p>

            {/* Social links */}
            <div className="flex gap-2 mb-8">
              {socials.map((social) => {
                const Icon = social.Icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className={`flex h-9 w-9 items-center justify-center rounded-xl bg-white/8 border border-white/10 text-white/60 transition-all hover:bg-white/15 hover:border-white/20 ${social.color}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
              <a
                href="mailto:hello@justchill.in"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/8 border border-white/10 text-white/60 transition-all hover:bg-white/15 hover:border-white/20 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            {/* Contact quick links */}
            <div className="space-y-2.5">
              {[
                { icon: Mail, label: "hello@justchill.in", href: "mailto:hello@justchill.in" },
                { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: MapPin, label: "Sambalpur, Odisha, India", href: "#" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-white/30" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((section) => (
            <div key={section.heading}>
              <h4 className="text-xs font-black uppercase tracking-[0.22em] text-white/40 mb-5">
                {section.heading}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-7 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} JustChill Beverages Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-white/35 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/15">·</span>
            <Link href="#" className="text-xs text-white/35 hover:text-white/60 transition-colors">
              Terms of Use
            </Link>
            <span className="text-white/15">·</span>
            <p className="text-xs uppercase tracking-[0.2em] text-white/25">
              🇮🇳 Crafted in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
