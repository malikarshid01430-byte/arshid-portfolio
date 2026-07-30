"use client";

import { useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Cpu, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { portfolioData } from "../data/portfolio";
import DownloadResumeButton from "./DownloadResumeButton";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-40 h-20 border-b border-zinc-800/80 bg-black/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 h-full">
        <div className="flex h-full items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 group-hover:border-cyan-400 transition-colors">
              <Cpu className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm tracking-widest text-cyan-400 uppercase font-semibold">{portfolioData.personalInfo.name}</span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">ECE Core // System</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6 rounded-full border border-zinc-800 bg-zinc-950/40 px-8 py-2.5">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="font-mono text-xs tracking-wider text-zinc-400 hover:text-cyan-400 focus:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:rounded px-2 py-1 transition-colors">{item.name}</a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {mounted && (
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/40 text-cyan-400 hover:border-cyan-400 transition-colors" aria-label="Toggle theme">
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              )}
              {!mounted && (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/40" aria-hidden="true" />
              )}
              <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 font-mono text-[10px] text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />SYSTEM: ACTIVE
              </div>
            </div>
          </nav>

          <div className="flex lg:hidden items-center gap-3">
            {mounted && (
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/40 text-cyan-400 hover:border-cyan-400 transition-colors" aria-label="Toggle theme">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <button onClick={() => setIsOpen(!isOpen)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/40 text-cyan-400" aria-label="Toggle menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-y-0 right-0 z-50 w-72 bg-black/98 backdrop-blur-xl border-l border-zinc-800 p-6 lg:hidden">
          <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-cyan-400" />
              <span className="font-mono text-sm text-cyan-400 tracking-wide">NAV.SYS</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-colors" aria-label="Close menu">
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsOpen(false)}
                className="font-mono text-sm tracking-wider text-zinc-300 hover:text-cyan-400 py-3 border-b border-zinc-900 transition-colors">{item.name}</a>
            ))}
            <DownloadResumeButton
              variant="primary"
              label="DOWNLOAD CV"
              className="mt-6 h-12 text-sm font-medium"
            />
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}