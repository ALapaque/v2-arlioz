"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
    };

    const onMouseDown = () => {
      cursor.style.transform += " scale(0.7)";
    };

    const onMouseUp = () => {
      cursor.style.transform = cursor.style.transform.replace(" scale(0.7)", "");
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return <div ref={cursorRef} className="nx-cursor" />;
}
