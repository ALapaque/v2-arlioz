"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "A propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#portfolio" },
  { label: "Equipe", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/logo-arlioz.svg"
              alt="Arlioz"
              width={38}
              height={38}
              className="transition-transform duration-500 group-hover:rotate-12"
            />
            <span className="text-[15px] font-bold tracking-[0.2em] uppercase font-[family-name:var(--font-display)]">
              Arlioz
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="accent-line px-4 py-2 text-[13px] text-text-secondary hover:text-text transition-colors duration-300 font-[family-name:var(--font-mono)] tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-6 px-6 py-2.5 text-[13px] font-medium bg-accent text-bg rounded-sm hover:bg-accent-hover transition-all duration-300 font-[family-name:var(--font-mono)] tracking-wide"
            >
              Parlons-en
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              className="absolute w-5 h-[1.5px] bg-text"
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="absolute w-5 h-[1.5px] bg-text"
            />
            <motion.span
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              className="absolute w-5 h-[1.5px] bg-text"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-2"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="text-4xl font-light font-[family-name:var(--font-display)] text-text hover:text-accent transition-colors duration-300 py-3"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-8 px-10 py-4 bg-accent text-bg font-medium rounded-sm font-[family-name:var(--font-mono)] text-sm tracking-wide"
            >
              Parlons-en
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
