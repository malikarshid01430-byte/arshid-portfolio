"use client";

import { useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Cpu, Menu, X, Terminal, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { portfolioData } from "../data/portfolio";
import DownloadResumeButton from "./DownloadResumeButton";

// Hook to detect client-side mount without triggering setState in useEffect
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
    { name: "About", href: "#about" }, { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" }, { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" }, { name: "Contact", href: "#contact" },
    { name: "Testimonials", href: "/testimonials" }, { name: "Blog", href: "/blog" },
  ];

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-40 h-16 border-b border-cyan-500/10 bg-[#030712]/95 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-950/20 text-cyan-400">
              <Cpu className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm tracking-widest text-cyan-400 uppercase font-semibold">{portfolioData.personalInfo.name}</span>
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider -mt-1">ECE Core // System</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 rounded-full border border-cyan-500/10 bg-zinc-950/40 px-6 py-2">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="font-mono text-xs tracking-wider text-zinc-400 hover:text-cyan-400 focus:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:rounded px-1 transition-colors">{item.name}</a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {mounted && (
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/10 text-cyan-400 hover:border-cyan-400 transition-colors" aria-label="Toggle theme">
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              )}
              {!mounted && (
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/10" aria-hidden="true" />
              )}
              <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 font-mono text-[10px] text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />SYSTEM: ACTIVE
              </div>
            </div>
          </nav>
          <div className="flex md:hidden items-center gap-4">
            {mounted && (
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/10 text-cyan-400 hover:border-cyan-400 transition-colors" aria-label="Toggle theme">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            {!mounted && (
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/10" aria-hidden="true" />
            )}
            <button onClick={() => setIsOpen(!isOpen)} className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/10 text-cyan-400" aria-label="Toggle menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} transition={{ duration: 0.2 }}
          className="fixed inset-y-0 right-0 z-50 w-64 bg-[#030712]/98 border-l border-cyan-500/20 p-6 md:hidden">
          <div className="flex items-center justify-between mb-8 border-b border-cyan-500/10 pb-4">
            <div className="flex items-center gap-2"><Terminal className="h-4 w-4 text-cyan-400" /><span className="font-mono text-xs text-cyan-400">INDEX.NAV</span></div>
            <button onClick={() => setIsOpen(false)} className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400" aria-label="Close menu"><X className="h-4 w-4" /></button>
          </div>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsOpen(false)}
                className="font-mono text-sm tracking-wider text-zinc-300 hover:text-cyan-400 py-2 border-b border-zinc-900 transition-colors">{item.name}</a>
            ))}
            <DownloadResumeButton
              variant="primary"
              label="DOWNLOAD CV"
              className="mt-6 h-10 text-xs font-medium"
            />
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}