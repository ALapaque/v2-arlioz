"use client";

import { useEffect, useRef } from "react";

// Selectors for elements that trigger the "expand" state
const EXPAND_SELECTORS = "a, button, [role='button'], .group, [data-cursor='expand']";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Ring position lerp target
    let ringX = 0;
    let ringY = 0;
    let targetX = 0;
    let targetY = 0;
    let expanded = false;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      // Dot — instant, no transition
      dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onMouseDown = () => {
      ring.classList.add("nx-ring--press");
    };
    const onMouseUp = () => {
      ring.classList.remove("nx-ring--press");
    };

    // Detect hoverable elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(EXPAND_SELECTORS)) {
        if (!expanded) {
          expanded = true;
          ring.classList.add("nx-ring--expand");
          dot.classList.add("nx-dot--expand");
        }
      } else {
        if (expanded) {
          expanded = false;
          ring.classList.remove("nx-ring--expand");
          dot.classList.remove("nx-dot--expand");
        }
      }
    };

    // Ring lerp animation
    const lerpRing = () => {
      ringX += (targetX - ringX) * 0.15;
      ringY += (targetY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(lerpRing);
    };

    // Initialize ring position
    ringX = targetX;
    ringY = targetY;

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    raf = requestAnimationFrame(lerpRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="nx-dot" />
      <div ref={ringRef} className="nx-ring" />
    </>
  );
}
