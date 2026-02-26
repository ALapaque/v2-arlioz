"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const exitEase: [number, number, number, number] = [0.76, 0, 0.24, 1];
const revealEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function BrandLoader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  const finish = useCallback(() => {
    setVisible(false);
    document.body.style.overflow = "";
    if (typeof window !== "undefined") {
      sessionStorage.setItem("arlioz-loaded", "true");
    }
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("arlioz-loaded")) {
      setVisible(false);
      onComplete();
      return;
    }

    document.body.style.overflow = "hidden";

    setPhase(1);
    const t1 = setTimeout(() => setPhase(2), 700);
    const t2 = setTimeout(() => setPhase(3), 2100);
    const t3 = setTimeout(() => setPhase(4), 2600);
    const t4 = setTimeout(finish, 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = "";
    };
  }, [onComplete, finish]);

  if (!visible) return null;

  const letters = "ARLIOZ".split("");

  return (
    <motion.div
      className="fixed inset-0 z-[10001] flex items-center justify-center"
      style={{ background: "#080808" }}
      animate={
        phase >= 4
          ? { y: "-100%", transition: { duration: 0.8, ease: exitEase } }
          : { y: 0 }
      }
    >
      {/* Subtle grain inside loader */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Gold glow behind text */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          phase >= 2 && phase < 4
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Golden spark line */}
      <motion.div
        className="absolute h-px"
        style={{ background: "var(--nx-gold)" }}
        initial={{ width: 0, opacity: 1 }}
        animate={
          phase === 1
            ? { width: 120, opacity: 1 }
            : phase >= 2
              ? { width: 0, opacity: 0 }
              : {}
        }
        transition={
          phase === 1
            ? { duration: 0.6, ease: revealEase }
            : { duration: 0.3, ease: "easeOut" }
        }
      />

      {/* Letters */}
      <div
        className="relative flex items-baseline"
        style={{ fontFamily: "var(--font-display)" }}
        aria-label="Arlioz"
      >
        {letters.map((letter, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden"
            aria-hidden="true"
          >
            <motion.span
              className="inline-block text-[clamp(4rem,14vw,11rem)] leading-none tracking-[0.04em] text-[#F5F0E8]"
              initial={{ y: "115%", opacity: 0 }}
              animate={
                phase >= 2
                  ? { y: "0%", opacity: 1 }
                  : { y: "115%", opacity: 0 }
              }
              transition={{
                delay: phase >= 2 ? i * 0.065 : 0,
                duration: 0.7,
                ease: revealEase,
              }}
            >
              {letter}
            </motion.span>
          </span>
        ))}
      </div>

      {/* Subtle bottom line indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={phase >= 1 && phase < 4 ? { opacity: 0.4 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span
          className="text-[9px] tracking-[0.4em] uppercase text-[var(--nx-ivory-ghost)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          LOADING
        </span>
      </motion.div>
    </motion.div>
  );
}
