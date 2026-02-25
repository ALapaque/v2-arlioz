"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-surface/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-[family-name:var(--font-geist-mono)] mb-4 block">
              Contact
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Faisons briller
              <br />
              <span className="gradient-text">votre marque.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-12 max-w-md">
              Vous avez un projet en tête ? Discutons de la meilleure façon de le
              concrétiser ensemble. Chaque grande idée mérite une exécution
              exceptionnelle.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-muted font-[family-name:var(--font-geist-mono)] uppercase tracking-wider mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:contact@arlioz.be"
                    className="text-foreground hover:text-accent transition-colors duration-300"
                  >
                    contact@arlioz.be
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-muted font-[family-name:var(--font-geist-mono)] uppercase tracking-wider mb-1">
                    Localisation
                  </div>
                  <span className="text-foreground">Belgique</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <form className="glass rounded-2xl p-8 sm:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-muted font-[family-name:var(--font-geist-mono)] uppercase tracking-wider mb-2 block">
                    Nom
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted/40 focus:border-accent focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted font-[family-name:var(--font-geist-mono)] uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted/40 focus:border-accent focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-muted font-[family-name:var(--font-geist-mono)] uppercase tracking-wider mb-2 block">
                  Sujet
                </label>
                <input
                  type="text"
                  placeholder="De quoi s'agit-il ?"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted/40 focus:border-accent focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label className="text-xs text-muted font-[family-name:var(--font-geist-mono)] uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Décrivez votre projet..."
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted/40 focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/80 transition-all duration-300 text-sm font-[family-name:var(--font-geist-mono)] flex items-center justify-center gap-2 group"
              >
                Envoyer le message
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
