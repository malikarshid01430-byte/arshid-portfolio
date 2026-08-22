"use client";

import Link from "next/link";
import { Terminal, Home, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{ backgroundColor: "var(--bg-base)" }}
      aria-labelledby="not-found-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-lg w-full"
      >
        {/* Terminal panel */}
        <div
          className="rounded-2xl overflow-hidden mb-8"
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-dim)",
            boxShadow: "0 24px 60px -16px rgba(0,0,0,0.5)",
          }}
        >
          {/* Terminal header bar */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{
              backgroundColor: "var(--bg-raised)",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <div className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5" style={{ color: "var(--cyan)" }} aria-hidden="true" />
              <span className="text-label" style={{ color: "var(--cyan)" }}>error_handler.elf</span>
            </div>
            <div className="flex gap-1.5" aria-hidden="true">
              <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "rgba(251,113,133,0.5)" }} />
              <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "rgba(251,191,36,0.5)" }} />
              <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "rgba(52,211,153,0.5)" }} />
            </div>
          </div>

          {/* Terminal body */}
          <div className="px-6 py-8 font-mono text-sm space-y-3">
            <p style={{ color: "var(--cyan)" }}>
              <span style={{ color: "var(--text-dim)" }}>&gt;&gt;</span>{" "}
              ERROR_CODE: 0x404_NOT_FOUND
            </p>
            <p style={{ color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--text-dim)" }}>&gt;&gt;</span>{" "}
              The requested module could not be located.
            </p>
            <div style={{ color: "var(--text-tertiary)", fontSize: "0.75rem" }}>
              <p className="mb-1">
                <span style={{ color: "var(--text-dim)" }}>&gt;&gt;</span>{" "}
                Possible causes:
              </p>
              <ul className="space-y-1 ml-6 text-xs">
                <li>— Invalid address (URL may be incorrect)</li>
                <li>— Module relocated or deprecated</li>
                <li>— Insufficient access permissions</li>
              </ul>
            </div>
          </div>

          {/* 404 display */}
          <div
            className="py-8 px-6 text-center"
            style={{ borderTop: "1px solid var(--border-subtle)" }}
          >
            <h1
              id="not-found-heading"
              className="text-7xl font-extrabold tracking-tight mb-2"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.04em" }}
            >
              404
            </h1>
            <p className="text-label" style={{ color: "var(--text-dim)" }}>
              PAGE_NOT_FOUND
            </p>
          </div>
        </div>

        {/* Action */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 btn btn-primary"
          style={{ height: "3rem", paddingInline: "1.5rem" }}
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Return to Home
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>

        <p className="mt-6 text-label" style={{ color: "var(--text-dim)" }}>
          <span style={{ color: "var(--text-dim)" }}>&gt;&gt;</span>{" "}
          Use the navigation to find what you are looking for.
        </p>
      </motion.div>
    </main>
  );
}
