"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Projets", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "Equipe", href: "/#equipe" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > lastY.current && y > 100) setVisible(false);
      else setVisible(true);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: visible || mobileOpen ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.6, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
          scrolled
            ? "bg-[var(--ar-surface)] backdrop-blur-xl border-b border-[var(--ar-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo-arlioz.svg" alt="Arlioz" className="h-7 w-auto" />
            <span className="text-[15px] font-medium tracking-[0.02em] text-[var(--ar-fg)]">
              Arlioz
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-[var(--ar-fg-dim)] hover:text-[var(--ar-fg)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a href="/#contact" className="btn-primary text-[14px]">
              Démarrer un projet
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-[1.5px] bg-[var(--ar-fg)] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-[var(--ar-fg)] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-[var(--ar-bg)] backdrop-blur-sm pt-24 px-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="text-[28px] font-medium tracking-tight text-[var(--ar-fg)] hover:text-[var(--ar-purple)] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <div className="mt-6 flex items-center gap-4">
              <a href="/#contact" onClick={() => setMobileOpen(false)} className="btn-primary">
                Démarrer un projet
              </a>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
