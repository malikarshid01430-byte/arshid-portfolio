"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /* Only show on pointer devices; skip on touch-only */
    if (!window.matchMedia("(pointer: fine)").matches) return;

    /* Respect reduced motion */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!glowRef.current) return;
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      });
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.body.addEventListener("mouseenter", onEnter);
    document.body.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseenter", onEnter);
      document.body.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9980] h-[400px] w-[400px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(34,211,238,0.055) 0%, transparent 70%)",
        filter: "blur(2px)",
        opacity: visible ? 1 : 0,
        transition: "opacity 500ms ease",
        top: 0,
        left: 0,
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
