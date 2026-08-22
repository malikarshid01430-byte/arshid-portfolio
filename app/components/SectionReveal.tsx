"use client";

import { useEffect, useRef, memo } from "react";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

/**
 * Lightweight CSS-based scroll reveal that works without Framer Motion.
 * Uses IntersectionObserver + inline transition. Respects prefers-reduced-motion.
 */
const SectionReveal = memo(function SectionReveal({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    el.style.opacity    = "0";
    el.style.transform  = "translateY(24px)";
    el.style.transition = `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity   = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
});

export default SectionReveal;
