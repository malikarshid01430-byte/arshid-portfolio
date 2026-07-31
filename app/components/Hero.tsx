"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Terminal, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";
import DownloadResumeButton from "./DownloadResumeButton";

const logs = [
  "> Initializing hardware diagnostic...",
  "> ARM Cortex-M4 CPU core frequency: 168 MHz -> OK",
  "> Loading RTOS kernel task scheduler...",
  "> FreeRTOS Kernel V10.4.3 initialized.",
  "> Scanning I2C bus: 0x3C (OLED) 0x68 (MPU6050) -> OK",
  "> Checking SPI flash memory integrity -> 100% OK",
  "> Loading RTL design modules...",
  "> Verilog design modules verified -> OK",
  "> Loading Edge AI model weights...",
  "> TensorFlow Lite Micro model loaded -> OK",
  "> Connecting to AWS IoT gateway... Connected.",
  "> SYSTEM STATUS: ALL SYSTEMS NOMINAL.",
  "> Welcome to Arshid's Portfolio!"
];

export default function Hero() {
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getDelay = useCallback((idx: number) => {
    if (idx === 0) return 600;
    return 300 + (idx - 1) * 60;
  }, []);

  useEffect(() => {
    if (isInView && currentLineIdx < logs.length) {
      const timeout = setTimeout(() => {
        setConsoleLines((prev) => [...prev, logs[currentLineIdx]]);
        setCurrentLineIdx((prev) => prev + 1);
      }, getDelay(currentLineIdx));
      return () => clearTimeout(timeout);
    }
  }, [isInView, currentLineIdx, getDelay]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-screen w-full flex items-center justify-center overflow-hidden scroll-mt-32"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-4 py-2 w-fit"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400 tracking-wide">
                Available for Full-Time Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              {portfolioData.personalInfo.name}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xl sm:text-2xl font-mono text-zinc-300"
            >
              {'>'} {portfolioData.personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl"
            >
              {portfolioData.personalInfo.bioShort}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <DownloadResumeButton variant="primary" label="Download Resume" />
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-950/5 px-6 font-mono text-sm tracking-wider font-medium text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/5 transition-colors"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-950/5 px-6 font-mono text-sm tracking-wider font-medium text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/5 transition-colors"
              >
                <FaLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="#contact"
                className="flex h-12 items-center justify-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-950/5 px-6 font-mono text-sm tracking-wider font-medium text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/5 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="flex gap-6 items-center"
            >
              <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors" aria-label="GitHub">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-zinc-500 hover:text-cyan-400 transition-colors" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image + Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative aspect-square w-full max-w-xs sm:max-w-md lg:max-w-lg">
              <Image
                src={portfolioData.personalInfo.profileImage || "/images/profile.jpg"}
                alt={portfolioData.personalInfo.name}
                fill
                priority
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 480px"
                className="rounded-full border-2 border-cyan-500/30 object-cover"
              />
              <div className="absolute bottom-4 right-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500/30 bg-emerald-500/10">
                <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
              </div>
            </div>

            <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg rounded-xl border border-cyan-500/20 bg-black/80 overflow-hidden font-mono">
              <div className="flex items-center justify-between border-b border-cyan-500/10 bg-cyan-950/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  <span className="text-xs text-cyan-400 font-bold tracking-wide">firmware_debug.elf</span>
                </div>
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="h-2 w-2 rounded-full bg-rose-500/50" />
                  <div className="h-2 w-2 rounded-full bg-amber-500/50" />
                  <div className="h-2 w-2 rounded-full bg-emerald-500/50" />
                </div>
              </div>
              <div className="h-64 sm:h-72 lg:h-80 overflow-y-auto p-4 text-[10px] sm:text-[11px] leading-6 text-cyan-500/90" aria-live="polite" aria-atomic="false">
                {consoleLines.map((line, idx) => (
                  <div key={idx} className="flex items-start gap-1">
                    <span className="text-cyan-600 select-none">{'>'}{'>'}</span>
                    <span>{line}</span>
                  </div>
                ))}
                {currentLineIdx < logs.length ? (
                  <div className="flex items-center gap-1">
                    <span className="text-cyan-600 select-none">{'>'}{'>'}</span>
                    <span className="h-4 w-1.5 bg-cyan-400" />
                  </div>
                ) : (
                  <div className="mt-4 flex items-center justify-between border-t border-cyan-500/10 pt-2 text-zinc-500 text-[9px]">
                    <span>LINK RATE: 100 Mbps</span>
                    <span className="text-emerald-400 font-semibold">ONLINE // SYNCED</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}