"use client";

import { useEffect, useRef } from "react";

/**
 * Drop-in glow border overlay — renders inside any card with `position: relative`.
 * Tracks mouse on the parent element and renders a cursor-following
 * radial gradient masked to the border area.
 *
 * Usage: <GlowBorder /> as a child of any relatively-positioned card container.
 * The parent must have `position: relative` and ideally `overflow: hidden`.
 */
export default function GlowBorder() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      el.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
      el.style.opacity = "1";
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    parent.addEventListener("mousemove", onMove, { passive: true });
    parent.addEventListener("mouseleave", onLeave);

    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={ref} className="glow-border-overlay" aria-hidden="true" />;
}
