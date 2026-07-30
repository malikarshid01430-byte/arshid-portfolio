"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, CircuitBoard, Activity, Smartphone } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function About() {
  const cards = [
    { icon: Cpu, title: "Embedded Systems", desc: "Expertise in Arduino, ESP32, ESP8266, and embedded C programming. Building IoT solutions and firmware for real-world applications.", color: "text-cyan-400 border-cyan-500/20 bg-cyan-950/5" },
    { icon: CircuitBoard, title: "Electronics & VLSI", desc: "Strong foundation in digital electronics, communication systems, microcontrollers, Verilog, and VLSI fundamentals.", color: "text-teal-400 border-teal-500/20 bg-teal-950/5" },
    { icon: Smartphone, title: "Android Development", desc: "Experience in Android app development using Kotlin, Jetpack Compose, and integrating AI capabilities with Google Gemini.", color: "text-violet-400 border-violet-500/20 bg-violet-950/5" },
    { icon: Layers, title: "Full Stack Development", desc: "Proficient in React, Next.js, Node.js, Tailwind CSS, and modern web technologies for building responsive applications.", color: "text-pink-400 border-pink-500/20 bg-pink-950/5" },
  ];

  return (
    <section id="about" className="relative isolate py-24 lg:py-32 border-t border-zinc-900 scroll-mt-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{'>'} REGISTER::ABOUT_ME</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">About Me</h2>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-mono text-lg text-zinc-300 flex items-center gap-2"><Activity className="h-5 w-5 text-cyan-400" aria-hidden="true" /> SYSTEM OVERVIEW</h3>
            <p className="text-zinc-400 leading-relaxed">{portfolioData.personalInfo.bioLong}</p>
            <div className="rounded-lg border border-cyan-500/10 bg-cyan-950/5 p-5 font-mono text-xs leading-6 text-zinc-400">
              <span className="text-cyan-400 font-bold block mb-2">{"// ENGINEER SPECIFICATION SHEET:"}</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                <div><span className="text-cyan-400">[NAME]</span> {portfolioData.personalInfo.name}</div>
                <div><span className="text-cyan-400">[ROLE]</span> {portfolioData.personalInfo.title}</div>
                <div><span className="text-cyan-400">[LOCATION]</span> {portfolioData.personalInfo.location}</div>
                <div><span className="text-cyan-400">[EMAIL]</span> {portfolioData.personalInfo.email}</div>
                <div><span className="text-cyan-400">[PHONE]</span> {portfolioData.personalInfo.phone}</div>
                <div><span className="text-cyan-400">[STATUS]</span> Open to opportunities</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  className={`flex flex-col p-5 rounded-xl border ${card.color}`}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-black/40 text-cyan-400 mb-4"><Icon className="h-5 w-5" /></div>
                  <h4 className="font-mono text-sm font-semibold text-white tracking-wide uppercase mb-2">{card.title}</h4>
                  <p className="text-xs text-zinc-400 leading-5">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}