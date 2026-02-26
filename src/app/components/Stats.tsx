"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
    <section ref={ref} className="relative py-12 md:py-16">
      <div className="divider" />
      <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-10 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`text-center ${
                i < stats.length - 1 ? "md:border-r md:border-[var(--ar-border)]" : ""
              } py-4`}
            >
              <span className="text-[clamp(36px,5vw,52px)] font-medium tracking-tight text-[var(--ar-purple)]">
                <AnimatedCounter target={parseInt(stat.value)} suffix={stat.suffix} isInView={isInView} />
              </span>
              <p className="mt-2 text-[13px] font-medium text-[var(--ar-fg-dim)]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="divider" />
    </section>
  );
}
