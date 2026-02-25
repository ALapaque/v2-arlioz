"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const screenRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(screenRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete,
        });
      },
    });

    // Counter + bar
    tl.to(obj, {
      val: 100,
      duration: 2.4,
      ease: "power2.inOut",
      onUpdate: () => {
        const v = Math.round(obj.val);
        if (pctRef.current) pctRef.current.textContent = `${v}%`;
        if (barRef.current) barRef.current.style.width = `${v}%`;
      },
    }, 0);

    // Text fill
    tl.to(fillRef.current, {
      clipPath: "inset(0% 0 0 0)",
      duration: 2,
      ease: "power3.inOut",
    }, 0.3);

    // Flash before exit
    tl.to(screenRef.current, {
      backgroundColor: "rgba(59,130,246,0.04)",
      duration: 0.08,
      yoyo: true,
      repeat: 1,
    }, "-=0.3");

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div ref={screenRef} className="loader-screen">
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
      <div className="loader-bar-track">
        <div ref={barRef} className="loader-bar-fill" />
      </div>
      <span ref={pctRef} className="loader-pct font-[family-name:var(--font-mono)]">0%</span>
    </div>
  );
}
