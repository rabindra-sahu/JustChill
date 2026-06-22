"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Products", href: "/products" },
  { label: "Our Story", href: "/about" },
  {
    label: "Explore",
    href: "#",
    children: [
      { label: "Product Ranges", href: "/#showcase" },
      { label: "Why JustChill", href: "/#why-justchill" },
      { label: "Ingredients", href: "/#ingredients" },
      { label: "Flavor Lab", href: "/#product-experience" },
      { label: "Reviews", href: "/#testimonials" },
    ],
  },
  { label: "Trade", href: "/#distributor" },
  { label: "Contact", href: "/#contact" },
];

const ANNOUNCEMENT = "🎉 Now available in 20+ cities across India — Find us near you!";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement bar */}
      <AnimatePresence>
        {announcementVisible && !scrolled && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed left-0 right-0 top-0 z-50 overflow-hidden"
          >
            <div className="bg-[#0d2b20] text-white/85 text-xs font-medium text-center py-2.5 px-4 flex items-center justify-center gap-2">
              <span>{ANNOUNCEMENT}</span>
              <button
                onClick={() => setAnnouncementVisible(false)}
                className="ml-3 text-white/50 hover:text-white/90 transition-colors"
                aria-label="Close announcement"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main nav */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-400 ${
          announcementVisible && !scrolled ? "top-9" : "top-0"
        } ${
          scrolled
            ? "sticky-nav-blur"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-18 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-opacity hover:opacity-85"
            >
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--brand-leaf))] text-white font-heading font-bold text-sm shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="relative z-10">JC</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold leading-tight text-foreground tracking-tight">JustChill</p>
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                  Premium Beverages
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-secondary/60">
                      {item.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full mt-1.5 w-52 rounded-2xl border border-border/60 bg-white/95 backdrop-blur-xl p-2 shadow-xl"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary/50 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-secondary/60"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop actions */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-3.5 w-3.5" />
                +91 98765 43210
              </a>
              <Button
                variant="brand"
                size="default"
                asChild
                className="shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <Link href="/#distributor">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/50 hover:bg-secondary transition-colors lg:hidden"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: mobileOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-white shadow-2xl lg:hidden flex flex-col"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between p-5 border-b border-border/40">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--brand-leaf))] text-white font-bold text-sm">
                    JC
                  </div>
                  <span className="font-bold text-sm text-foreground">JustChill</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/50 hover:bg-secondary"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Mobile nav links */}
              <div className="flex-1 overflow-y-auto p-5 space-y-1">
                {NAV_ITEMS.map((item, i) =>
                  item.children ? (
                    <div key={item.label}>
                      <p className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mt-4 mb-1">
                        {item.label}
                      </p>
                      {item.children.map((child, ci) => (
                        <motion.div
                          key={child.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (i + ci) * 0.04 + 0.1 }}
                        >
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-2xl px-4 py-3.5 text-base font-semibold text-foreground hover:bg-secondary/50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                )}
              </div>

              {/* Mobile CTA */}
              <div className="p-5 border-t border-border/40 space-y-3">
                <Button variant="brand" size="lg" className="w-full" asChild>
                  <Link href="/#distributor" onClick={() => setMobileOpen(false)}>
                    Become a Partner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +91 98765 43210
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
