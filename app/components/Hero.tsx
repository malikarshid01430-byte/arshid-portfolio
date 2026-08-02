"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Terminal, Mail, ArrowDown, Briefcase, Code, Database } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";
import DownloadResumeButton from "./DownloadResumeButton";

const logs = [
  "> System initializing...",
  "> Loading embedded systems modules... OK",
  "> IoT connectivity established... OK",
  "> VLSI design tools ready... OK",
  "> Android SDK configured... OK",
  "> Status: ALL SYSTEMS NOMINAL",
];

export default function Hero() {
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const getDelay = useCallback((idx: number) => {
    if (idx === 0) return 600;
    return 300 + (idx - 1) * 100;
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
      className="relative isolate min-h-screen w-full flex items-center justify-center overflow-hidden scroll-mt-20"
      style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/10 via-black to-violet-950/10" />
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-violet-500/5 blur-[120px]" />

      <motion.div
        className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10"
        style={{ y, opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 w-fit"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-sm font-semibold text-emerald-400 tracking-wide font-mono">
                Available for Full-Time Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]"
            >
              {portfolioData.personalInfo.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl sm:text-2xl font-mono bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]"
              style={{
                backgroundImage: 'linear-gradient(to right, #22d3ee, #a78bfa, #22d3ee)',
                backgroundSize: '200% auto',
                animation: 'gradient 3s linear infinite'
              }}
            >
              Electronics & Communication Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl"
            >
              {portfolioData.personalInfo.bioShort}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <DownloadResumeButton variant="primary" label="Download Resume" />
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/50 px-6 font-mono text-sm tracking-wide text-zinc-300 hover:border-cyan-500/50 hover:text-white transition-all duration-300"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/50 px-6 font-mono text-sm tracking-wide text-zinc-300 hover:border-cyan-500/50 hover:text-white transition-all duration-300"
              >
                <FaLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-6 items-center"
            >
              <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-zinc-500 hover:text-cyan-400 transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800"
            >
              {[
                { icon: Briefcase, label: "Internships", value: "4+" },
                { icon: Code, label: "Projects", value: "7+" },
                { icon: Database, label: "Certifications", value: "20+" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <stat.icon className="h-5 w-5 text-cyan-400 mx-auto mb-1" />
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-8"
          >
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 blur-3xl opacity-60" />
                <div className="relative aspect-square w-full max-w-sm sm:max-w-md lg:max-w-lg">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 p-[2px]">
                    <div className="w-full h-full rounded-full bg-black p-1">
                      <Image
                        src={portfolioData.personalInfo.profileImage || "/images/profile.jpg"}
                        alt={portfolioData.personalInfo.name}
                        width={480}
                        height={480}
                        priority
                        className="relative rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/80 backdrop-blur-xl px-3 py-1.5"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400">Open to Work</span>
                </motion.div>
              </div>

            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  <span className="text-xs text-zinc-400 font-bold tracking-wide">terminal</span>
                </div>
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700 hover:bg-red-500 transition-colors cursor-pointer" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700 hover:bg-yellow-500 transition-colors cursor-pointer" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700 hover:bg-emerald-500 transition-colors cursor-pointer" />
                </div>
              </div>
              <div className="h-56 sm:h-64 overflow-y-auto p-4 text-[11px] leading-6 text-zinc-400 font-mono" aria-live="polite" aria-atomic="false">
                {consoleLines.map((line, idx) => (
                  <div key={idx} className="flex items-start gap-1 mb-1">
                    <span className="text-emerald-400 select-none mr-1">$</span>
                    <span>{line.replace("> ", "")}</span>
                  </div>
                ))}
                {currentLineIdx < logs.length ? (
                  <div className="flex items-center gap-1">
                    <span className="text-emerald-400 select-none mr-1">$</span>
                    <span className="h-4 w-1.5 bg-emerald-400 animate-pulse" />
                  </div>
                ) : (
                  <div className="mt-4 pt-3 border-t border-zinc-800 text-[10px] text-zinc-500">
                    Ready for new challenges.
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center mt-8"
          >
            <a href="#about" className="flex flex-col items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors" aria-label="Scroll down">
              <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
      `}</style>
    </section>
  );
}