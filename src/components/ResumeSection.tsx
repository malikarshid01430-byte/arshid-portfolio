
import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Download, FileText, AlertCircle, BookOpen, Briefcase, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";

const ResumeSection = () => {
  const [pdfError, setPdfError] = useState(false);

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!profile.resumePdf) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    try {
      const res = await fetch(profile.resumePdf);
      if (!res.ok) throw new Error("Not found");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Arshid_Ahmad_Malik_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch {
      setPdfError(true);
      setTimeout(() => setPdfError(false), 4000);
    }
  };

  return (
    <section id="resume" className="section bg-muted/10">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-1">Resume</h2>
              <p className="text-foreground/55 text-sm">Education &amp; Experience at a glance</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-2">
              {profile.resumePdf ? (
                <a
                  href={profile.resumePdf}
                  download="Arshid_Ahmad_Malik_Resume.pdf"
                  onClick={handleDownload}
                  id="resume-download-btn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 shadow-sm text-sm"
                  aria-label="Download Arshid Ahmad Malik's resume PDF"
                >
                  <Download size={16} />
                  Download Resume (PDF)
                </a>
              ) : (
                <a
                  href={`mailto:${profile.email}?subject=Resume Request`}
                  id="resume-request-btn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground/70 font-medium hover:bg-muted transition-all duration-300 text-sm"
                >
                  <FileText size={16} />
                  Request Resume via Email
                </a>
              )}
              <a
                href={profile.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-foreground/75 font-medium hover:text-primary transition-all text-sm"
                aria-label="Open Arshid Ahmad Malik's resume PDF in a new tab"
              >
                <ExternalLink size={16} />
                Open Resume
              </a>
              {pdfError && (
                <p className="flex items-center gap-1.5 text-xs text-amber-400">
                  <AlertCircle size={12} />
                  PDF not found yet — please email me to request a copy.
                </p>
              )}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="w-20 h-1 bg-primary mb-10 rounded-full"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education summary */}
          <div>
            <ScrollReveal delay={200}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {education.map((item, index) => (
                <ScrollReveal key={item.id} delay={300 + index * 80}>
                  <div className="timeline-item">
                    <div className="timeline-card">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="period-badge">{item.period}</span>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            item.status.includes("Completed")
                              ? "bg-emerald-500/15 text-emerald-400"
                              : "bg-amber-500/15 text-amber-400"
                          }`}
                        >
                          {item.status}
                        </span>
                        {item.percentage && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {item.percentage}
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-sm mb-0.5">
                        {item.degree}
                        {item.field && ` — ${item.field}`}
                      </h4>
                      <p className="text-foreground/60 text-xs">{item.institution}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Experience summary */}
          <div>
            <ScrollReveal delay={200}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-xl font-bold">Training &amp; Internships</h3>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {experiences.map((item, index) => (
                <ScrollReveal key={item.id} delay={300 + index * 80}>
                  <div className="timeline-item">
                    <div className="timeline-card">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="period-badge">{item.period}</span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          item.type === "Internship"
                            ? "bg-violet-500/15 text-violet-400"
                            : "bg-emerald-500/15 text-emerald-400"
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm mb-0.5">{item.role}</h4>
                      <p className="text-primary font-semibold text-xs mb-0.5">{item.company}</p>
                      <p className="text-foreground/50 text-xs">{item.location}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
