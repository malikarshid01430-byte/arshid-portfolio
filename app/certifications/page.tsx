import { Metadata } from "next";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Certifications | Arshid Ahmad Malik",
  description: "Professional certifications in Cloud Computing, IoT, AI, Machine Learning, Cybersecurity, and more.",
  openGraph: {
    title: "Certifications | Arshid Ahmad Malik",
    description: "Professional certifications and achievements.",
    type: "website",
  },
};

export default function CertificationsPage() {
  const certifications = portfolioData.certifications;

  const providers = Array.from(new Set(certifications.map(c => c.issuer)));
  const years = Array.from(new Set(certifications.map(c => c.date))).sort((a, b) => b.localeCompare(a));

  return (
    <div className="relative py-24 border-t border-zinc-900 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{'>'} CERTIFICATIONS</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Professional Certifications
          </h1>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Continuous learning and professional development across multiple domains
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">{certifications.length}</div>
            <div className="text-xs font-mono text-zinc-500 mt-1">Total Certifications</div>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400">{providers.length}</div>
            <div className="text-xs font-mono text-zinc-500 mt-1">Providers</div>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 text-center">
            <div className="text-2xl font-bold text-violet-400">{years.length}</div>
            <div className="text-xs font-mono text-zinc-500 mt-1">Years</div>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 text-center">
            <div className="text-2xl font-bold text-amber-400">100%</div>
            <div className="text-xs font-mono text-zinc-500 mt-1">Verified</div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-zinc-900 bg-zinc-950/40 p-6 hover:border-cyan-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/5 flex-shrink-0">
                  <Award className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                    <Calendar className="h-3 w-3" />
                    {cert.date}
                  </div>
                </div>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-[10px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Verify Certificate
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}