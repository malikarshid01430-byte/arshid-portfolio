"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Send, CheckCircle,
  Copy, ExternalLink, MessageSquare, Check,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";

const terminalSteps = [
  "> Establishing peer connection to host...",
  "> Encrypting payload with TLS 1.3... Done.",
  "> Formulating packet header: [SENDER: %EMAIL%]",
  "> Assembling body payload: (%LEN% bytes)",
  "> Transmitting TCP frames...",
  "> Sending via virtual MQTT gateway... Done.",
  "> HTTP 200 OK — Response received.",
  "> Transmission successfully completed!",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending,   setSending]   = useState(false);
  const [done,      setDone]      = useState(false);
  const [logs,      setLogs]      = useState<string[]>([]);
  const [copied,    setCopied]    = useState<"email" | "phone" | null>(null);

  const { personalInfo } = portfolioData;

  const handleCopy = useCallback(async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2200);
    } catch { /* ignore */ }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setLogs([]);
    for (let i = 0; i < terminalSteps.length; i++) {
      await new Promise((r) => setTimeout(r, 160 + 40 * i));
      setLogs((p) => [
        ...p,
        terminalSteps[i].replace("%EMAIL%", form.email).replace("%LEN%", String(form.message.length)),
      ]);
    }
    setSending(false);
    setDone(true);
    setForm({ name: "", email: "", message: "" });
  };

  const whatsappUrl = `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`;

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative overflow-hidden section-pad"
      style={{
        backgroundColor: "var(--bg-base)",
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "clamp(6rem, 12vw, 9rem)",
        minHeight: "100vh",
      }}
      aria-labelledby="contact-page-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "5%", left: "5%",
          width: "45vw", height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="container-tight relative z-10">
        {/* Header */}
        <div className="mb-14">
          <p className="section-eyebrow mb-4">Contact</p>
          <h1 id="contact-page-heading" className="section-title mb-4">
            Let&apos;s build something useful.
          </h1>
          <div className="flex items-center gap-2 mt-5">
            <span className="status-dot status-dot-pulse" />
            <span className="text-label" style={{ color: "var(--emerald)" }}>
              AVAILABLE · Response within 24 hours
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Left: info ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Contact info panel */}
            <div className="tech-panel overflow-hidden" aria-label="Contact information">
              <div
                className="px-4 py-2.5 border-b"
                style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-raised)" }}
              >
                <span className="text-label" style={{ color: "var(--cyan)" }}>{"// CONNECTION_PORTS"}</span>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <div className="flex items-center gap-2 min-w-0">
                  <Mail className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                  <a href={`mailto:${personalInfo.email}`} className="text-mono-xs truncate transition-colors hover:underline" style={{ color: "var(--text-secondary)" }}>
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  className="shrink-0 flex h-7 w-7 items-center justify-center rounded transition-colors focus-visible:outline-none"
                  style={{ border: "1px solid var(--border-subtle)", color: copied === "email" ? "var(--emerald)" : "var(--text-dim)" }}
                  aria-label="Copy email address"
                >
                  {copied === "email" ? <Check className="h-3 w-3" aria-hidden="true" /> : <Copy className="h-3 w-3" aria-hidden="true" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <div className="flex items-center gap-2 min-w-0">
                  <Phone className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                  <a href={`tel:${personalInfo.phone}`} className="text-mono-xs truncate transition-colors hover:underline" style={{ color: "var(--text-secondary)" }}>
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, "phone")}
                  className="shrink-0 flex h-7 w-7 items-center justify-center rounded transition-colors focus-visible:outline-none"
                  style={{ border: "1px solid var(--border-subtle)", color: copied === "phone" ? "var(--emerald)" : "var(--text-dim)" }}
                  aria-label="Copy phone number"
                >
                  {copied === "phone" ? <Check className="h-3 w-3" aria-hidden="true" /> : <Copy className="h-3 w-3" aria-hidden="true" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 px-4 py-3">
                <MapPin className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                <span className="text-mono-xs" style={{ color: "var(--text-secondary)" }}>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { href: personalInfo.resumeUrl,  icon: ExternalLink, label: "Resume",   target: "_blank" as const },
                { href: personalInfo.linkedin,   icon: FaLinkedin,   label: "LinkedIn", target: "_blank" as const },
                { href: personalInfo.github,     icon: FaGithub,     label: "GitHub",   target: "_blank" as const },
                { href: whatsappUrl,             icon: FaWhatsapp,   label: "WhatsApp", target: "_blank" as const },
              ].map(({ href, icon: Icon, label, target }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel="noopener noreferrer"
                  className="btn btn-ghost justify-center !text-xs"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="lg:col-span-7">
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-dim)" }}
            >
              {!sending && !done && (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="mb-4">
                    <p className="text-label" style={{ color: "var(--cyan)" }}>SEND A MESSAGE</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-label block" style={{ color: "var(--text-dim)" }}>YOUR NAME</label>
                      <input id="contact-name" type="text" name="name" required autoComplete="name"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="input-field" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-label block" style={{ color: "var(--text-dim)" }}>YOUR EMAIL</label>
                      <input id="contact-email" type="email" name="email" required autoComplete="email"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="input-field" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-label block" style={{ color: "var(--text-dim)" }}>MESSAGE</label>
                    <textarea id="contact-message" name="message" rows={5} required
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="input-field resize-none" placeholder="Your message here..." />
                  </div>
                  <button type="submit" className="btn btn-primary w-full justify-center" style={{ height: "3rem" }}>
                    <Send className="h-4 w-4" aria-hidden="true" /> Send Message
                  </button>
                </form>
              )}

              {/* Terminal sending */}
              {sending && (
                <div
                  className="rounded-xl overflow-hidden font-mono text-xs min-h-[220px] flex flex-col"
                  style={{ backgroundColor: "var(--bg-inset)", border: "1px solid var(--border-dim)" }}
                >
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-raised)" }}>
                    <MessageSquare className="h-3.5 w-3.5" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                    <span className="text-label" style={{ color: "var(--cyan)" }}>packet_sender.sh</span>
                  </div>
                  <div className="flex-1 p-4 space-y-2 overflow-y-auto no-scrollbar" aria-live="polite">
                    {logs.map((log, i) => (
                      <p key={i} className="text-label" style={{ color: "var(--text-secondary)" }}>{log}</p>
                    ))}
                    <span className="inline-block h-4 w-1 animate-pulse" style={{ backgroundColor: "var(--cyan)" }} aria-hidden="true" />
                  </div>
                </div>
              )}

              {/* Success */}
              {done && (
                <motion.div className="flex flex-col items-center justify-center py-14 gap-5 text-center" aria-live="polite">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)" }}
                  >
                    <CheckCircle className="h-8 w-8" style={{ color: "var(--emerald)" }} aria-hidden="true" />
                  </motion.div>
                  <div>
                    <h2 className="font-mono text-base font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Message Sent</h2>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Thank you — I&apos;ll be in touch soon.</p>
                  </div>
                  <button onClick={() => setDone(false)} className="btn btn-ghost !text-xs">Send another</button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
