import React from "react";
import ScrollReveal from "./ScrollReveal";
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Cpu,
  Smartphone,
  Zap,
  Brain,
  Wrench,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { profile } from "@/data/profile";

const AboutSection = () => {
  const contactDetails = [
    { icon: <MapPin size={18} />, label: "Location", value: profile.location },
    { icon: <Mail size={18} />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    ...(profile.phone
      ? [{ icon: <Phone size={18} />, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` }]
      : []),
  ];

  const focusAreas = [
    { icon: <Cpu size={20} />, label: "Embedded Systems, Sensors & Microcontrollers" },
    { icon: <Zap size={20} />, label: "EV Technology, Battery Skilling & Charging Standards" },
    { icon: <Smartphone size={20} />, label: "Android Application Development (Kotlin & Jetpack Compose)" },
    { icon: <Brain size={20} />, label: "Generative AI Integration & AI-Assisted Workflows" },
    { icon: <Wrench size={20} />, label: "VLSI Digital Logic & Design for Testability (DFT)" },
    { icon: <Code2 size={20} />, label: "Firmware Debugging, Testing & Technical Documentation" },
  ];

  return (
    <section id="about" className="section bg-background">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">About Me</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column — Professional Bio & Background */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={200}>
              <h3 className="text-2xl font-bold mb-4 relative inline-block">
                Professional Profile
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
              </h3>
            </ScrollReveal>

            {profile.about.map((para, i) => (
              <ScrollReveal key={i} delay={300 + i * 100}>
                <p className="text-foreground/75 mb-5 leading-relaxed text-sm md:text-base">{para}</p>
              </ScrollReveal>
            ))}

            {/* Core Competencies Checklist */}
            <ScrollReveal delay={450}>
              <div className="mt-6 p-4 rounded-xl bg-card border border-border">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-3">
                  Core Engineering Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                    <span>Hardware Debugging & Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                    <span>Disciplined Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                    <span>Rapid Learning Agility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                    <span>Technical Documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                    <span>Cross-functional Teamwork</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                    <span>Hardware-to-Software Bridge</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Details */}
            <ScrollReveal delay={500}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {contactDetails.map((detail, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-muted/60 p-3 rounded-lg hover-lift"
                  >
                    <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-md flex items-center justify-center text-primary">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 mb-0.5">{detail.label}</p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Social links */}
            <ScrollReveal delay={600}>
              <div className="flex gap-3 mt-6">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-github"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-muted/60 text-foreground/70 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all"
                  aria-label="GitHub profile"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-linkedin"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-muted/60 text-foreground/70 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — Focus Areas & Target Roles */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={300}>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 text-foreground">
                  Technical Focus Areas
                </h3>
                <div className="space-y-3">
                  {focusAreas.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-foreground/75 text-xs font-medium group-hover:text-foreground transition-colors">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Target Entry-Level Career Pathways */}
            <ScrollReveal delay={450}>
              <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h4 className="text-base font-bold text-primary mb-2">
                  Target Entry-Level Opportunities
                </h4>
                <p className="text-foreground/60 text-xs mb-3">
                  Actively seeking roles, graduate engineering trainee programs, and technical positions in:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {profile.targetRoles.map((role) => (
                    <span
                      key={role}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-background border border-primary/25 text-foreground/80"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
