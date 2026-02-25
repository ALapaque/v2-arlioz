"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 lg:py-40" ref={ref}>
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-[1px] bg-accent" />
          <span className="text-[11px] tracking-[0.35em] uppercase text-accent font-[family-name:var(--font-mono)]">
            Contact
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] font-700 leading-[1.05] tracking-tight mb-8"
            >
              Faisons briller
              <br />
              <span className="text-accent">votre marque.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="text-text-secondary text-[17px] leading-[1.8] mb-14 font-[family-name:var(--font-body)]"
            >
              Vous avez un projet en tête ? Discutons de la meilleure façon
              de le concrétiser. Chaque grande idée mérite une exécution
              exceptionnelle.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="space-y-6"
            >
              <a
                href="mailto:contact@arlioz.be"
                className="group flex items-center gap-4"
              >
                <div className="w-11 h-11 border border-border rounded-sm flex items-center justify-center group-hover:border-accent/30 transition-colors duration-300">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase mb-1">
                    Email
                  </div>
                  <span className="text-text group-hover:text-accent transition-colors duration-300 text-[15px]">
                    contact@arlioz.be
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 border border-border rounded-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase mb-1">
                    Localisation
                  </div>
                  <span className="text-text text-[15px]">Belgique</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form — right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="lg:col-span-7"
          >
            <form className="border border-border rounded-sm p-8 lg:p-10 space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] text-text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase mb-3 block">
                    Nom
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full bg-transparent border-b border-border py-3 text-text text-[15px] placeholder:text-text-dim/50 focus:border-accent focus:outline-none transition-colors duration-400 font-[family-name:var(--font-body)]"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase mb-3 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full bg-transparent border-b border-border py-3 text-text text-[15px] placeholder:text-text-dim/50 focus:border-accent focus:outline-none transition-colors duration-400 font-[family-name:var(--font-body)]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase mb-3 block">
                  Sujet
                </label>
                <input
                  type="text"
                  placeholder="De quoi s'agit-il ?"
                  className="w-full bg-transparent border-b border-border py-3 text-text text-[15px] placeholder:text-text-dim/50 focus:border-accent focus:outline-none transition-colors duration-400 font-[family-name:var(--font-body)]"
                />
              </div>

              <div>
                <label className="text-[10px] text-text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase mb-3 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Décrivez votre projet..."
                  className="w-full bg-transparent border-b border-border py-3 text-text text-[15px] placeholder:text-text-dim/50 focus:border-accent focus:outline-none transition-colors duration-400 resize-none font-[family-name:var(--font-body)]"
                />
              </div>

              <button
                type="submit"
                className="group w-full sm:w-auto px-10 py-4 bg-accent text-bg font-medium rounded-sm text-sm font-[family-name:var(--font-mono)] tracking-wide hover:bg-accent-hover transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                Envoyer le message
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M1 8h14M10 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
