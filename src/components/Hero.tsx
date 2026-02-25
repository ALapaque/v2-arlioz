"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/[0.04] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text content — left 7 cols */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-text-secondary font-[family-name:var(--font-mono)]">
                Agence digitale — Belgique, depuis 2018
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,7vw,6rem)] font-800 leading-[0.92] tracking-tight mb-8"
            >
              <span className="block">Protection</span>
              <span className="block text-accent">des données</span>
              <span className="block text-text-secondary font-300 text-[clamp(1.8rem,4.5vw,3.5rem)] mt-1">
                &amp; développement digital
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
              className="text-text-secondary text-lg leading-relaxed max-w-lg mb-12 font-[family-name:var(--font-body)]"
            >
              Nous fusionnons expertise RGPD et ingénierie web pour
              construire des produits digitaux qui respectent vos
              utilisateurs et propulsent votre croissance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg font-medium rounded-sm text-sm font-[family-name:var(--font-mono)] tracking-wide hover:bg-accent-hover transition-all duration-300"
              >
                Démarrer un projet
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M1 8h14M10 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center px-8 py-4 border border-border text-text-secondary hover:text-text hover:border-border-hover rounded-sm text-sm font-[family-name:var(--font-mono)] tracking-wide transition-all duration-300"
              >
                Voir nos projets
              </a>
            </motion.div>
          </div>

          {/* Logo visual — right 5 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative">
              {/* Rotating ring accent */}
              <div className="absolute inset-[-30px] border border-accent/10 rounded-full animate-[spin-slow_30s_linear_infinite]" />
              <div className="absolute inset-[-60px] border border-border/30 rounded-full animate-[spin-slow_45s_linear_infinite_reverse]" />
              {/* Glow behind logo */}
              <div className="absolute inset-0 bg-accent/[0.06] rounded-full blur-[60px] animate-[glow-pulse_4s_ease-in-out_infinite]" />
              <Image
                src="/logo-arlioz.svg"
                alt="Arlioz"
                width={360}
                height={360}
                priority
                className="relative z-10 drop-shadow-[0_0_60px_rgba(245,166,35,0.12)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-10 left-6 lg:left-10 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-accent/60 to-transparent"
          />
          <span className="text-[10px] tracking-[0.3em] uppercase text-text-dim font-[family-name:var(--font-mono)]">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
