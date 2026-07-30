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
    if (idx === 0) return 800;
    return 400 + (idx - 1) * 80;
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

  const socialLinks = [
    { href: portfolioData.personalInfo.github, icon: FaGithub, label: "GitHub Link" },
    { href: portfolioData.personalInfo.linkedin, icon: FaLinkedin, label: "LinkedIn Link" },
    { href: `mailto:${portfolioData.personalInfo.email}`, icon: Mail, label: "Email Address" }
  ];

  return (
    <section ref={ref} className="relative isolate flex min-h-screen w-full flex-col items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3 py-1 font-mono text-xs text-emerald-400 mb-6 w-fit"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AVAILABLE FOR FULL-TIME OPPORTUNITIES</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight"
            >
              {portfolioData.personalInfo.name}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="mt-4 text-xl font-medium tracking-tight text-zinc-300 sm:text-2xl font-mono"
            >
              {'>'} {portfolioData.personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg"
            >
              {portfolioData.personalInfo.bioShort}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="mt-8 flex flex-wrap gap-3 sm:gap-4 items-center"
            >
              <DownloadResumeButton variant="primary" label="Download Resume" />
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-950/5 px-4 sm:px-6 font-mono text-sm tracking-wider font-medium text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/5 transition-colors"
              >
                GitHub
              </a>
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-950/5 px-4 sm:px-6 font-mono text-sm tracking-wider font-medium text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/5 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#contact"
                className="flex h-12 items-center justify-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-950/5 px-4 sm:px-6 font-mono text-sm tracking-wider font-medium text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/5 transition-colors"
              >
                Contact
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="mt-10 flex gap-6 items-center"
            >
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-cyan-400 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image with Terminal */}
          <motion.div
            className="lg:col-span-5 flex justify-center w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md flex flex-col items-center">
              {/* Profile Image */}
              <div className="relative mb-6 flex justify-center w-full">
                <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                  <Image
                    src={portfolioData.personalInfo.profileImage || "/images/profile.jpg"}
                    alt={portfolioData.personalInfo.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                    className="rounded-full border-2 border-cyan-500/30 object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500/30 bg-emerald-500/10">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Terminal Emulator */}
              <div className="w-full rounded-xl border border-cyan-500/20 bg-black/80 overflow-hidden font-mono" role="region" aria-label="Terminal output">
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
                <div className="h-64 sm:h-72 lg:h-80 overflow-y-auto p-4 text-[10px] sm:text-[11px] leading-6 text-cyan-500/90 flex flex-col justify-start" aria-live="polite" aria-atomic="false">
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
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}