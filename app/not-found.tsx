"use client";

import Link from "next/link";
import { Terminal, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-foreground px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* Terminal Window */}
        <div className="rounded-xl border border-cyan-500/20 bg-black/80 p-8 backdrop-blur-sm shadow-[0_0_40px_rgba(6,182,212,0.05)]">
          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b border-cyan-500/10 bg-cyan-950/10 px-4 py-3 mb-6">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-cyan-400" />
              <span className="text-xs text-cyan-400 font-bold tracking-wide">error_handler.elf</span>
            </div>
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-rose-500/50" />
              <div className="h-2 w-2 rounded-full bg-amber-500/50" />
              <div className="h-2 w-2 rounded-full bg-emerald-500/50" />
            </div>
          </div>

          {/* Error Content */}
          <div className="font-mono text-sm space-y-4">
            <div className="text-cyan-400">
              <span className="text-cyan-600">{'>'}{'>'}</span> ERROR_CODE: 0x404_NOT_FOUND
            </div>
            <div className="text-zinc-400">
              <span className="text-cyan-600">{'>'}{'>'}</span> The requested system module could not be located.
            </div>
            <div className="text-zinc-500 text-xs">
              <span className="text-cyan-600">{'>'}{'>'}</span> Possible causes:
            </div>
            <ul className="text-xs text-zinc-500 space-y-1 ml-4">
              <li>- Invalid memory address (URL)</li>
              <li>- Module has been deprecated or relocated</li>
              <li>- Insufficient access permissions</li>
            </ul>

            {/* 404 Display */}
            <div className="py-8">
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text mb-2">
                404
              </div>
              <div className="text-sm text-zinc-400">
                PAGE_NOT_FOUND_IN_SYSTEM
              </div>
            </div>

            {/* Action Button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-mono text-xs tracking-wider font-semibold transition-all hover:brightness-110 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              <Home className="h-4 w-4" />
              Return to Home Base
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-[10px] text-zinc-600 font-mono">
          <span className="text-cyan-600">{'>'}{'>'}</span> SYSTEM_HINT: Check the navigation menu for available modules
        </div>
      </motion.div>
    </div>
  );
}