"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: "7", suffix: "+", label: "Années d'expérience" },
  { value: "2", label: "Experts dédiés" },
  { value: "100", suffix: "%", label: "Clients satisfaits" },
  { value: "5", suffix: "★", label: "Note moyenne" },
];

function AnimatedCounter({ target, suffix = "", isInView }: { target: number; suffix?: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <>{count}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-[var(--ar-bg-alt)]">
      <div className="line-decorative absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease }}
              className={`text-center ${
                i < stats.length - 1 ? "md:border-r md:border-[var(--ar-border)]" : ""
              } py-4`}
            >
              <span
                className="text-[clamp(2.5rem,5vw,4rem)] leading-none text-[var(--ar-accent)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <AnimatedCounter
                  target={parseInt(stat.value)}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </span>
              <p
                className="mt-3 text-[12px] tracking-[0.15em] uppercase text-[var(--ar-fg-dim)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="line-decorative absolute bottom-0 left-0 right-0" />
    </section>
  );
}
