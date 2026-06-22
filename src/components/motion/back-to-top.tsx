"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-border/60 text-foreground shadow-xl shadow-black/10 backdrop-blur-sm hover:shadow-2xl transition-shadow md:bottom-8 md:right-8"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function WhatsAppFAB() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 overflow-hidden rounded-2xl bg-[#25d366] text-white shadow-xl shadow-[#25d366]/30 md:bottom-8 md:left-8"
      aria-label="Chat on WhatsApp"
    >
      {/* Icon */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
          <path d="M17.47 14.82c-.28-.14-1.66-.82-1.92-.92-.26-.1-.45-.14-.64.14-.19.28-.74.92-.91 1.1-.17.19-.34.21-.63.07-1.26-.59-2.13-1.6-2.54-2.42-.2-.4.2-.37.57-1.22.07-.15 0-.22-.11-.35-.11-.14-.5-.48-.65-.68-.14-.19-.29-.22-.54-.07-.78.41-1.74.71-2.61.91-.28.06-1.13.11-2.01-.16-1.59-.48-1.92-1.1-2.11-1.65-.14-.41-.17-.38-.32-.65-.16-.28-.61-.86-.74-1.05l-.39-.45c-.23-.25-.46-.29-.68-.14-.21.14-.82.89-1.22 1.97-.28.75.25 1.41.75 1.83.22.18.46.31.72.41.93.35 1.7.37 2.49.31.69-.05 1.66-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.25-.19-.52-.32zM12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.95.67 3.76 1.72 5.19l-.46 1.71 1.77-.47c1.34.73 2.85 1.14 4.42 1.18h.05a9.45 9.45 0 0 0 5.99-2.13c2.35-1.88 4.08-4.68 4.08-8.1 0-5.47-4.43-9.9-10.18-9.9z" />
        </svg>
      </div>

      {/* Label — slides in on hover */}
      <motion.span
        animate={{ width: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="text-sm font-semibold whitespace-nowrap overflow-hidden pr-4"
      >
        Chat with us
      </motion.span>
    </motion.a>
  );
}
