"use client";

import { useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-40 h-16 lg:h-20 border-b border-zinc-800/50 bg-black/70 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-zinc-950/50 text-cyan-400 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
              <Cpu className="h-5 w-5" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm tracking-widest text-white uppercase font-semibold">
                {portfolioData.personalInfo.name.split(' ').slice(0, 2).join(' ')}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                ECE Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1 rounded-full border border-zinc-800/50 bg-zinc-950/30 px-6 py-2.5 backdrop-blur-sm">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-mono text-xs tracking-wide text-zinc-400 hover:text-cyan-400 focus:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:rounded px-3 py-1.5 transition-all duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-cyan-400 transition-all duration-200 group-hover:w-3/4" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800/50 bg-zinc-950/30 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              )}
              {!mounted && (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800/50 bg-zinc-950/30" aria-hidden="true" />
              )}
              <a
                href={portfolioData.personalInfo.resumeUrl}
                className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/5 px-5 py-2.5 font-mono text-xs tracking-wide text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <DownloadResumeButton variant="primary" label="Resume" className="!h-auto !py-0 !px-0 !bg-transparent !border-0" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800/50 bg-zinc-950/30 text-zinc-400 hover:text-cyan-400 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800/50 bg-zinc-950/30 text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-y-0 right-0 z-50 w-72 bg-black/98 backdrop-blur-xl border-l border-zinc-800 p-6 lg:hidden"
          >
            <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-cyan-400" />
                <span className="font-mono text-sm text-cyan-400 tracking-wide">MENU</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.2 }}
                  className="font-mono text-sm tracking-wide text-zinc-300 hover:text-cyan-400 py-3 border-b border-zinc-900 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="mt-6 pt-6 border-t border-zinc-800">
                <DownloadResumeButton
                  variant="primary"
                  label="DOWNLOAD RESUME"
                  className="w-full"
                />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}