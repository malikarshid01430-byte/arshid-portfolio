"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Mail, Send, CheckCircle, Phone, MapPin, Copy, Check, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay, duration: 0.55, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [formData, setFormData]   = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [isDone,    setIsDone]    = useState(false);
  const [copied,    setCopied]    = useState<"email" | "phone" | null>(null);
  const [toast,     setToast]     = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  }, []);

  const copyToClipboard = useCallback(async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      showToast(`${type === "email" ? "Email" : "Phone"} copied!`);
      setTimeout(() => setCopied(null), 2200);
    } catch {
      showToast("Failed to copy");
    }
  }, [showToast]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in all fields");
      return;
    }
    setIsSending(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsSending(false);
    setIsDone(true);
    setFormData({ name: "", email: "", message: "" });
    showToast("Message sent successfully!");
  }, [formData, showToast]);

  const whatsappLink = `https://wa.me/${portfolioData.personalInfo.phone.replace(/\D/g, "")}`;

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden scroll-mt-20 section-pad"
      style={{
        backgroundColor: "var(--bg-base)",
        borderTop: "1px solid var(--border-subtle)",
      }}
      aria-labelledby="contact-heading"
    >
      {/* Ambient glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "0%", left: "10%",
          width: "45vw", height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%", right: "5%",
          width: "35vw", height: "35vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="container-tight relative z-10">

        {/* ── Section header ── */}
        <Reveal className="mb-16">
          <p className="section-eyebrow mb-4">Contact</p>
          <h2 id="contact-heading" className="section-title max-w-xl">
            Let&apos;s build something <span style={{ color: "var(--cyan)" }}>useful.</span>
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed max-w-md"
            style={{ color: "var(--text-secondary)" }}
          >
            Currently seeking full-time opportunities in Embedded Systems, IoT, and related engineering roles.
          </p>
        </Reveal>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Left: contact info ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Info panel */}
            <Reveal>
              <div className="tech-panel overflow-hidden" aria-label="Contact information">
                <div
                  className="flex items-center gap-2 px-4 py-2.5"
                  style={{
                    borderBottom: "1px solid var(--border-subtle)",
                    backgroundColor: "var(--bg-raised)",
                  }}
                >
                  <span className="text-label" style={{ color: "var(--cyan)" }}>{"// CONTACT_INFO"}</span>
                </div>

                {/* Email */}
                <div
                  className="flex items-center justify-between gap-3 px-4 py-3"
                  style={{ borderBottom: "1px solid var(--border-subtle)" }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                    <a
                      href={`mailto:${portfolioData.personalInfo.email}`}
                      className="text-mono-xs truncate transition-colors hover:underline"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {portfolioData.personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(portfolioData.personalInfo.email, "email")}
                    className="shrink-0 flex items-center gap-1 px-2 py-1 rounded transition-colors focus-visible:outline-none"
                    style={{
                      border: "1px solid var(--border-subtle)",
                      color: copied === "email" ? "var(--emerald)" : "var(--text-dim)",
                    }}
                    aria-label="Copy email address"
                  >
                    {copied === "email"
                      ? <Check className="h-3 w-3" aria-hidden="true" />
                      : <Copy className="h-3 w-3" aria-hidden="true" />
                    }
                  </button>
                </div>

                {/* Phone */}
                <div
                  className="flex items-center justify-between gap-3 px-4 py-3"
                  style={{ borderBottom: "1px solid var(--border-subtle)" }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Phone className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                    <a
                      href={`tel:${portfolioData.personalInfo.phone}`}
                      className="text-mono-xs truncate transition-colors hover:underline"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {portfolioData.personalInfo.phone}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(portfolioData.personalInfo.phone, "phone")}
                    className="shrink-0 flex items-center gap-1 px-2 py-1 rounded transition-colors focus-visible:outline-none"
                    style={{
                      border: "1px solid var(--border-subtle)",
                      color: copied === "phone" ? "var(--emerald)" : "var(--text-dim)",
                    }}
                    aria-label="Copy phone number"
                  >
                    {copied === "phone"
                      ? <Check className="h-3 w-3" aria-hidden="true" />
                      : <Copy className="h-3 w-3" aria-hidden="true" />
                    }
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 px-4 py-3">
                  <MapPin className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                  <span className="text-mono-xs" style={{ color: "var(--text-secondary)" }}>
                    {portfolioData.personalInfo.location}
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Social grid */}
            <Reveal delay={0.08}>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={portfolioData.personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-cyan justify-center"
                >
                  Resume
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost justify-center"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
                </a>
                <a
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost justify-center"
                  aria-label="GitHub profile"
                >
                  <FaGithub className="h-4 w-4" aria-hidden="true" /> GitHub
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost justify-center"
                  aria-label="WhatsApp contact"
                >
                  <FaWhatsapp className="h-4 w-4" aria-hidden="true" /> WhatsApp
                </a>
              </div>
            </Reveal>

            {/* Availability note */}
            <Reveal delay={0.12}>
              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{
                  backgroundColor: "rgba(52,211,153,0.06)",
                  border: "1px solid rgba(52,211,153,0.18)",
                }}
                role="status"
                aria-label="Availability status"
              >
                <span className="status-dot status-dot-pulse mt-1 shrink-0" />
                <div>
                  <p className="text-label mb-1" style={{ color: "var(--emerald)" }}>
                    AVAILABLE FOR OPPORTUNITIES
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    Open to full-time roles in Embedded Systems, IoT, VLSI, and related engineering disciplines.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right: contact form ── */}
          <div className="lg:col-span-7">
            <Reveal delay={0.06}>
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-dim)",
                }}
              >
                <AnimatePresence mode="wait">

                  {/* Form state */}
                  {!isSending && !isDone && (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      noValidate
                    >
                      <div className="mb-5">
                        <p className="text-label mb-1" style={{ color: "var(--cyan)" }}>SEND A MESSAGE</p>
                        <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                          I&apos;ll respond within 24 hours.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label
                            htmlFor="contact-name"
                            className="text-label block"
                            style={{ color: "var(--text-dim)" }}
                          >
                            YOUR NAME
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="John Doe"
                            autoComplete="name"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label
                            htmlFor="contact-email"
                            className="text-label block"
                            style={{ color: "var(--text-dim)" }}
                          >
                            YOUR EMAIL
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="john@example.com"
                            autoComplete="email"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-message"
                          className="text-label block"
                          style={{ color: "var(--text-dim)" }}
                        >
                          MESSAGE
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="input-field resize-none"
                          placeholder="Your message here..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary w-full justify-center"
                        style={{ height: "3rem" }}
                      >
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Send Message
                      </button>
                    </motion.form>
                  )}

                  {/* Sending state */}
                  {isSending && (
                    <motion.div
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-16 gap-4"
                      aria-live="polite"
                      aria-label="Sending message"
                    >
                      <div
                        className="h-9 w-9 rounded-full border-2 border-t-transparent animate-spin"
                        style={{ borderColor: "var(--cyan)", borderTopColor: "transparent" }}
                        aria-hidden="true"
                      />
                      <p className="font-mono text-sm" style={{ color: "var(--text-secondary)" }}>
                        Sending message...
                      </p>
                    </motion.div>
                  )}

                  {/* Success state */}
                  {isDone && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center py-14 gap-5 text-center"
                      aria-live="polite"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 18 }}
                        className="flex h-16 w-16 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: "rgba(52,211,153,0.10)",
                          border: "1px solid rgba(52,211,153,0.25)",
                        }}
                      >
                        <CheckCircle className="h-8 w-8" style={{ color: "var(--emerald)" }} aria-hidden="true" />
                      </motion.div>
                      <div>
                        <h4 className="font-mono text-base font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                          Message Sent
                        </h4>
                        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                          Thank you for reaching out. I&apos;ll get back to you soon.
                        </p>
                      </div>
                      <button
                        onClick={() => setIsDone(false)}
                        className="btn btn-ghost !text-xs"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl px-4 py-3"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-dim)",
              boxShadow: "0 8px 24px -8px rgba(0,0,0,0.4)",
              color: "var(--text-secondary)",
              fontFamily: "monospace",
              fontSize: "0.75rem",
            }}
          >
            <CheckCircle className="h-4 w-4 shrink-0" style={{ color: "var(--emerald)" }} aria-hidden="true" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
