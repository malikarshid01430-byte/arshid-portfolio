import { Metadata } from "next";
import { Award, Calendar, ExternalLink, BadgeCheck } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Certifications | Arshid Ahmad Malik",
  description:
    "Professional certifications in Cloud Computing, IoT, AI, Machine Learning, VLSI, Cybersecurity, and more — Arshid Ahmad Malik.",
  alternates: { canonical: "https://arshid-portfolio.vercel.app/certifications" },
  openGraph: {
    title: "Certifications | Arshid Ahmad Malik",
    description: "21 verified professional certifications across AI, IoT, VLSI, and engineering disciplines.",
    type: "website",
    url: "https://arshid-portfolio.vercel.app/certifications",
  },
};

export default function CertificationsPage() {
  const certs = portfolioData.certifications;
  const providers = Array.from(new Set(certs.map((c) => c.issuer)));
  const years = Array.from(new Set(certs.map((c) => c.date))).sort((a, b) => b.localeCompare(a));

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
      aria-labelledby="certifications-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "5%", right: "5%",
          width: "45vw", height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="container-tight relative z-10">

        {/* Header */}
        <div className="mb-14">
          <p className="section-eyebrow mb-4">Credentials</p>
          <h1 id="certifications-heading" className="section-title mb-4">
            Professional Certifications
          </h1>
          <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--text-secondary)" }}>
            Continuous professional learning across AI, IoT, Cloud Computing, VLSI, Cybersecurity, and engineering disciplines.
          </p>
        </div>

        {/* Stats strip */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-5 rounded-xl"
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-dim)",
          }}
        >
          {[
            { value: certs.length,     label: "Total Certifications", color: "var(--cyan)" },
            { value: providers.length, label: "Issuing Providers",    color: "#818cf8"     },
            { value: years.length,     label: "Years Active",         color: "var(--emerald)" },
            { value: "100%",           label: "Verified",             color: "var(--amber)"  },
          ].map((stat, i) => (
            <div key={i} className="text-center py-2">
              <p
                className="text-3xl font-bold tracking-tight mb-1"
                style={{ color: stat.color, letterSpacing: "-0.03em" }}
              >
                {stat.value}
              </p>
              <p className="text-label" style={{ color: "var(--text-dim)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className="group flex flex-col gap-4 rounded-xl p-5 card-lift"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-dim)",
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "rgba(34,211,238,0.08)",
                    border: "1px solid rgba(34,211,238,0.18)",
                  }}
                >
                  <Award className="h-5 w-5" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h2
                    className="text-sm font-semibold leading-snug mb-1 transition-colors group-hover:text-cyan-400"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cert.name}
                  </h2>
                  <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                    {cert.issuer}
                  </p>
                  <div
                    className="flex items-center gap-1.5 mt-2 text-label"
                    style={{ color: "var(--text-dim)" }}
                  >
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {cert.date}
                  </div>
                </div>
              </div>

              {/* Verify link */}
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-label transition-colors hover:text-cyan-400"
                  style={{ color: "var(--text-dim)" }}
                  aria-label={`Verify certificate: ${cert.name}`}
                >
                  Verify certificate
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              ) : (
                <div className="flex items-center gap-1.5 text-label" style={{ color: "var(--emerald)" }}>
                  <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Verified credential
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
