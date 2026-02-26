"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ============================================
   SplitText — Word-by-word clip reveal
   For headings. Each word slides up from behind
   a mask, creating a cinematic text reveal.
   ============================================ */
interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  animate?: boolean;
}

export function SplitText({
  children,
  className = "",
  delay = 0,
  stagger = 0.035,
  animate,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldAnimate = animate !== undefined ? animate : isInView;

  const words = children.split(" ");

  return (
    <span ref={ref} className={`${className} inline`} aria-label={children}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top"
          aria-hidden="true"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={
              shouldAnimate
                ? { y: "0%", opacity: 1 }
                : { y: "110%", opacity: 0 }
            }
            transition={{
              delay: delay + i * stagger,
              duration: 0.6,
              ease,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ============================================
   SlideIn — Horizontal slide for labels/tags
   Small lateral entrance before titles.
   ============================================ */
interface SlideInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right";
  animate?: boolean;
}

export function SlideIn({
  children,
  className,
  delay = 0,
  direction = "left",
  animate,
}: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldAnimate = animate !== undefined ? animate : isInView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: direction === "left" ? -24 : 24 }}
      animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.6, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   FadeUp — Subtle fade + translateY
   For paragraphs and general content blocks.
   ============================================ */
interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  offset?: number;
  animate?: boolean;
}

export function FadeUp({
  children,
  className,
  delay = 0,
  offset = 24,
  animate,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldAnimate = animate !== undefined ? animate : isInView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: offset }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   ScaleReveal — Scale + opacity for CTAs
   Buttons and interactive elements appear last.
   ============================================ */
interface ScaleRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animate?: boolean;
}

export function ScaleReveal({
  children,
  className,
  delay = 0,
  animate,
}: ScaleRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldAnimate = animate !== undefined ? animate : isInView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.6, ease }}
    >
      {children}
    </motion.div>
  );
}
