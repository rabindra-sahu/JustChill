"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useToast } from "@/components/ui/toast";

export function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { addToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("newsletter-dismissed");
      if (!dismissed) {
        setOpen(true);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      if (email) {
        addToast({
          title: "Welcome to JustChill!",
          description: "You're now subscribed for exclusive updates.",
        });
      setOpen(false);
      sessionStorage.setItem("newsletter-dismissed", "true");
    }
  };

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-md bg-card rounded-3xl p-8 shadow-2xl border border-border">
        <button
          onClick={() => {
            setOpen(false);
            sessionStorage.setItem("newsletter-dismissed", "true");
          }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-violet-500/25">
            🥤
          </div>
          <h3 className="text-xl font-heading font-bold mb-2">
            Get <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">15% Off</span> Your First Order
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Subscribe to our newsletter for exclusive deals, new flavor drops, and insider news.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background/50"
            />
            <Button type="submit" variant="brand" size="lg" className="w-full">
              Claim My 15% Off
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            No spam, just fizz. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
