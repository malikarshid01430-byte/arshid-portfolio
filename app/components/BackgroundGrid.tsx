"use client";

import React, { useEffect, useState, memo } from "react";

const BackgroundGridComponent = () => {
  const [dots, setDots] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    const generatedDots = Array.from({ length: 25 }).map((_, i) => ({
      x: ((i * 37) % 100),
      y: ((i * 53) % 100),
      size: 1 + (i % 2),
    }));
    const frameId = requestAnimationFrame(() => {
      setDots(generatedDots);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00d2ff 1px, transparent 1px), linear-gradient(to bottom, #00d2ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.06] stroke-cyan-500/40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00d2ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#7000ff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d="M 80% 0 L 80% 10% L 90% 20% L 100% 20%" fill="none" strokeWidth="1.5" />
        <circle cx="80%" cy="10%" r="3" className="fill-cyan-400" />
        <circle cx="90%" cy="20%" r="3" className="fill-cyan-400" />

        <path d="M 0 45% L 10% 45% L 15% 55% L 15% 70% L 25% 80% L 25% 100%" fill="none" strokeWidth="1.5" />
        <circle cx="10%" cy="45%" r="3" className="fill-violet-500" />
        <circle cx="25%" cy="80%" r="3" className="fill-cyan-400" />

        <path d="M 100% 75% L 90% 75% L 85% 85% L 75% 85% L 70% 100%" fill="none" strokeWidth="1.5" />
        <circle cx="90%" cy="75%" r="3" className="fill-cyan-400" />
        <circle cx="75%" cy="85%" r="3" className="fill-violet-500" />
      </svg>

      <div className="absolute inset-0">
        {dots.map((dot, idx) => (
          <div
            key={idx}
            className="absolute rounded-full bg-cyan-400/30"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-cyan-900/10 blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-violet-900/10 blur-[100px]" />
    </div>
  );
};

export default memo(BackgroundGridComponent);