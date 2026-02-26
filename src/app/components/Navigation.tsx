"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[var(--nx-surface)] backdrop-blur-xl border-b border-[var(--nx-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/logo-arlioz.svg"
              alt="Arlioz"
              className="h-9 w-auto"
            />
            <span
              className="text-2xl tracking-[0.08em] text-[var(--nx-ivory)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ARLIOZ
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] tracking-[0.15em] uppercase text-[var(--nx-ivory-dim)] hover:text-[var(--nx-gold)] transition-colors duration-300"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-[var(--nx-gold)] text-[var(--nx-gold)] text-[12px] tracking-[0.2em] uppercase hover:bg-[var(--nx-gold)] hover:text-[var(--nx-bg)] transition-all duration-300"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Démarrer un projet
              <span className="text-sm">&#8594;</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-px bg-[var(--nx-ivory)] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`w-6 h-px bg-[var(--nx-ivory)] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-[var(--nx-bg)] pt-24 px-8 flex flex-col gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-3xl tracking-[0.05em] text-[var(--nx-ivory)] hover:text-[var(--nx-gold)] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 border border-[var(--nx-gold)] text-[var(--nx-gold)] text-[12px] tracking-[0.2em] uppercase self-start"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Démarrer un projet &#8594;
            </a>
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
