"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Terminal, Send, CheckCircle, Phone, MapPin, Copy, Check, Download, Globe } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";

const logs = [
  "Establishing peer connection to host...",
  "Encrypting payload with TLS 1.3... Done.",
  "Formulating packet header: [SENDER_EMAIL: %EMAIL%]",
  "Assembling body payload: (%LEN% bytes)",
  "Transmitting TCP frames...",
  "Sending signal via virtual MQTT gateway... Done.",
  "HTTP 200 OK. Response received.",
  "Transmission successfully completed!"
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sentLines, setSentLines] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const showToastMessage = useCallback((message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }, []);

  const copyToClipboard = useCallback(async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
      showToastMessage(`${type === "email" ? "Email" : "Phone"} copied to clipboard!`);
    } catch {
      showToastMessage("Failed to copy to clipboard");
    }
  }, [showToastMessage]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToastMessage("Please fill in all fields");
      return;
    }

    setIsSending(true);
    setSentLines([]);
    setIsCompleted(false);

      for (let i = 0; i < logs.length; i++) {
      const line = logs[i].replace("%EMAIL%", formData.email).replace("%LEN%", formData.message.length.toString());
      await new Promise((r) => setTimeout(r, 150 + i * 40));
      setSentLines((prev) => [...prev, line]);
    }

    await new Promise((r) => setTimeout(r, 300));
    setIsSending(false);
    setIsCompleted(true);
    setFormData({ name: "", email: "", message: "" });
    showToastMessage("Message sent successfully!");
  }, [formData, showToastMessage]);

  const whatsappLink = `https://wa.me/${portfolioData.personalInfo.phone.replace(/\D/g, "")}`;

  return (
    <section id="contact" className="relative isolate py-24 lg:py-32 border-t border-zinc-900 scroll-mt-16 bg-black/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest" aria-hidden="true">{'>'} REGISTER::TRANSCEIVER</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Get In Touch</h2>
              <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
            </div>

        {/* Availability Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-emerald-400">Open for Opportunities • Response within 24 hours</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-sm font-bold text-cyan-400 tracking-widest uppercase flex items-center gap-2 mb-4"><Mail className="h-5 w-5 text-cyan-400" aria-hidden="true" />{"// CONNECTION_PORTS"}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">I am currently looking for full-time opportunities in Embedded Systems, IoT, VLSI, and Full Stack Development. Feel free to reach out!</p>

            {/* Contact Info Card */}
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6 font-mono text-xs text-zinc-400 space-y-4">
              <span className="text-cyan-400 font-bold block border-b border-zinc-900 pb-2 mb-2">{"// CONTACT_INFO:"}</span>

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <a href={`mailto:${portfolioData.personalInfo.email}`} className="hover:text-cyan-400 text-xs">{portfolioData.personalInfo.email}</a>
                </div>
                <button onClick={() => copyToClipboard(portfolioData.personalInfo.email, "email")} className="flex items-center gap-1 px-2 py-1 rounded border border-zinc-800 text-zinc-400 hover:text-cyan-400 transition-colors" aria-label="Copy email">
                  {copiedEmail ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </button>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  <a href={`tel:${portfolioData.personalInfo.phone}`} className="hover:text-cyan-400 text-xs">{portfolioData.personalInfo.phone}</a>
                </div>
                <button onClick={() => copyToClipboard(portfolioData.personalInfo.phone, "phone")} className="flex items-center gap-1 px-2 py-1 rounded border border-zinc-800 text-zinc-400 hover:text-cyan-400 transition-colors" aria-label="Copy phone">
                  {copiedPhone ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-xs">{portfolioData.personalInfo.location}</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a href={portfolioData.personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-cyan-500/20 bg-cyan-950/5 font-mono text-xs text-cyan-400 hover:border-cyan-400 transition-colors">
                <Download className="h-4 w-4" /> Resume
              </a>
              <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-blue-500/20 bg-blue-950/5 font-mono text-xs text-blue-400 hover:border-blue-400 transition-colors">
                <FaLinkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-zinc-700 bg-zinc-900/50 font-mono text-xs text-zinc-300 hover:text-cyan-400 transition-colors">
                <FaGithub className="h-4 w-4" /> GitHub
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-emerald-500/20 bg-emerald-950/5 font-mono text-xs text-emerald-400 hover:border-emerald-400 transition-colors">
                <FaWhatsapp className="h-4 w-4" /> WhatsApp
              </a>
              <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-violet-500/20 bg-violet-950/5 font-mono text-xs text-violet-400 hover:border-violet-400 transition-colors">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href={`tel:${portfolioData.personalInfo.phone}`} className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-green-500/20 bg-green-950/5 font-mono text-xs text-green-400 hover:border-green-400 transition-colors">
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>

            {/* Portfolio Link */}
            <a href={portfolioData.personalInfo.portfolioUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-900 bg-zinc-950/20 font-mono text-xs text-zinc-400 hover:text-cyan-400 transition-colors">
              <Globe className="h-4 w-4" /> {portfolioData.personalInfo.portfolioUrl}
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-cyan-500/10 bg-black/60 p-6">
              {!isSending && !isCompleted && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block font-mono text-[10px] text-zinc-500 uppercase">Your Name</label>
                      <input id="name" type="text" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full rounded-lg border border-zinc-900 bg-zinc-950/80 px-4 py-2.5 font-mono text-xs text-white focus:border-cyan-500/50 focus:outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block font-mono text-[10px] text-zinc-500 uppercase">Your Email</label>
                      <input id="email" type="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full rounded-lg border border-zinc-900 bg-zinc-950/80 px-4 py-2.5 font-mono text-xs text-white focus:border-cyan-500/50 focus:outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block font-mono text-[10px] text-zinc-500 uppercase">Message</label>
                    <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange}
                      className="w-full rounded-lg border border-zinc-900 bg-zinc-950/80 px-4 py-2.5 font-mono text-xs text-white focus:border-cyan-500/50 focus:outline-none transition-colors resize-none" placeholder="Your message here..." />
                  </div>
                  <button type="submit" className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 font-mono text-xs tracking-wider font-semibold text-white hover:brightness-110 transition-all"><Send className="h-4 w-4" /> Send Message</button>
                </form>
              )}
              {isSending && (
                <div className="font-mono text-xs text-cyan-400 min-h-[220px] flex flex-col justify-between">
                  <div className="flex items-center gap-2 border-b border-cyan-500/10 pb-2 mb-4"><Terminal className="h-4 w-4" /><span className="font-bold uppercase tracking-wide">packet_sender.sh</span></div>
                  <div className="flex-1 space-y-2 max-h-[180px] overflow-y-auto">
                    {sentLines.map((line, idx) => (
                      <div key={idx} className="flex gap-1.5"><span className="text-cyan-600 select-none">{'>'}{'>'}</span><span>{line}</span></div>
                    ))}
                    <div className="flex items-center gap-1"><span className="text-cyan-600 select-none">{'>'}{'>'}</span><span className="h-4 w-1.5 bg-cyan-400" /></div>
                  </div>
                </div>
              )}
              {isCompleted && (
                <div className="flex flex-col items-center justify-center text-center py-8 min-h-[220px]">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.5 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4"><CheckCircle className="h-7 w-7" /></motion.div>
                  <h4 className="text-base font-bold text-white font-mono uppercase tracking-wide">Message Sent Successfully</h4>
                  <p className="mt-2 text-xs text-zinc-400 font-mono">Thank you for reaching out! I will get back to you as soon as possible.</p>
                  <button onClick={() => setIsCompleted(false)} className="mt-6 px-4 py-2 rounded-lg border border-zinc-800 text-zinc-400 font-mono text-[10px] hover:text-white transition-colors">SEND NEW MESSAGE</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 font-mono text-xs text-emerald-400 shadow-lg"
          >
            <CheckCircle className="h-4 w-4" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
