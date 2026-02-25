"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const screenRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(screenRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.8,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });

    // Tagline fades in
    tl.fromTo(tagRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0);

    // Counter + progress bar
    tl.to(obj, {
      val: 100,
      duration: 2.6,
      ease: "power2.inOut",
      onUpdate: () => {
        const v = Math.round(obj.val);
        if (counterRef.current) counterRef.current.textContent = String(v).padStart(3, "0");
        if (barRef.current) barRef.current.style.width = `${v}%`;
      },
    }, 0);

    // Text fill from bottom
    tl.to(fillRef.current, {
      clipPath: "inset(0% 0 0 0)",
      duration: 2.2,
      ease: "power3.inOut",
    }, 0.2);

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div ref={screenRef} className="loader-screen" style={{ clipPath: "inset(0 0 0% 0)" }}>
      <span ref={tagRef} className="absolute top-8 left-8 text-[10px] text-dim tracking-[0.3em] uppercase font-[family-name:var(--font-mono)] opacity-0">
        Arlioz &mdash; Digital Agency
      </span>

      <div className="loader-word font-[family-name:var(--font-sans)]">
        ARLIOZ
        <span
          ref={fillRef}
          className="loader-word-fill font-[family-name:var(--font-sans)]"
          style={{ clipPath: "inset(100% 0 0 0)" }}
        >
          ARLIOZ
        </span>
      </div>

      <div className="loader-bar-track mt-12">
        <div ref={barRef} className="loader-bar-fill" />
      </div>

      <span
        ref={counterRef}
        className="mt-4 text-[11px] text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] tabular-nums"
      >
        000
      </span>
    </div>
  );
}
