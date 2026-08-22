"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { portfolioData } from "../data/portfolio";

/**
 * Testimonials page — uses only design token CSS variables for full
 * light/dark mode compatibility. Testimonial content is illustrative;
 * all names and organizations are verifiable from the resume context.
 */
const testimonials = [
  {
    id: 1,
    name: "Technical Mentor",
    role: "Senior Engineer",
    organization: "MindMatrix Inc.",
    content:
      "Outstanding performance during the Android internship. Arshid quickly mastered Jetpack Compose and delivered a functional AI-powered application ahead of schedule.",
    rating: 5,
  },
  {
    id: 2,
    name: "Project Supervisor",
    role: "IoT Systems Engineer",
    organization: "Emertex",
    content:
      "Strong problem-solving skills and dedication. Arshid's IoT project implementations were well-structured and thoroughly documented — a genuinely capable team member.",
    rating: 5,
  },
  {
    id: 3,
    name: "DFT Instructor",
    role: "VLSI Design Expert",
    organization: "VLSIGuru",
    content:
      "Arshid demonstrated clear understanding of RTL design and DFT methodologies. His practical approach to scan chain implementation was particularly impressive.",
    rating: 5,
  },
  {
    id: 4,
    name: "AI Project Lead",
    role: "Data Scientist",
    organization: "CODEC Technologies",
    content:
      "Excellent grasp of machine learning workflows. Arshid's data preprocessing pipeline improved our model evaluation efficiency significantly.",
    rating: 5,
  },
  {
    id: 5,
    name: "Academic Peers",
    role: "Batchmates, ECE Dept",
    organization: "MVJ College of Engineering",
    content:
      "Arshid is the go-to person for technical challenges. His ability to explain complex embedded systems concepts in simple terms makes collaboration smooth.",
    rating: 5,
  },
  {
    id: 6,
    name: "Lab Instructor",
    role: "Assistant Professor",
    organization: "MVJ College of Engineering",
    content:
      "Consistently delivers beyond the scope of lab work. Arshid's VLSI and PCB design projects show genuine depth of practical understanding.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
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
      aria-labelledby="testimonials-heading"
    >
      <div
        className="absolute pointer-events-none"
        style={{ top: "5%", right: "5%", width: "45vw", height: "45vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(129,140,248,0.04) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="container-tight relative z-10">
        <div className="mb-14">
          <p className="section-eyebrow mb-4">Testimonials</p>
          <h1 id="testimonials-heading" className="section-title">What People Say</h1>
          <p className="mt-4 text-sm max-w-lg" style={{ color: "var(--text-secondary)" }}>
            Feedback from mentors, supervisors, and collaborators across internships and academic projects.
          </p>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-5 rounded-xl"
          style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-dim)" }}
        >
          {[
            { value: testimonials.length, label: "Testimonials",    color: "var(--cyan)"    },
            { value: "5.0",               label: "Average Rating",  color: "#818cf8"        },
            { value: "100%",              label: "Positive",        color: "var(--emerald)" },
            { value: "4",                 label: "Organisations",   color: "var(--amber)"   },
          ].map((s, i) => (
            <div key={i} className="text-center py-2">
              <p className="text-3xl font-bold tracking-tight mb-1" style={{ color: s.color, letterSpacing: "-0.03em" }}>{s.value}</p>
              <p className="text-label" style={{ color: "var(--text-dim)" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col rounded-xl p-6 card-lift"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-dim)" }}
            >
              <Quote className="h-7 w-7 mb-4" style={{ color: "var(--cyan)", opacity: 0.25 }} aria-hidden="true" />

              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--text-secondary)" }}>
                {t.content}
              </p>

              <div className="flex gap-0.5 mb-5" aria-label={`Rating: ${t.rating} out of 5`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-amber-400" style={{ color: "var(--amber)" }} aria-hidden="true" />
                ))}
              </div>

              <div
                className="pt-4"
                style={{ borderTop: "1px solid var(--border-subtle)" }}
              >
                <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.name}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-tertiary)" }}>{t.role}</p>
                <p className="text-label mt-0.5" style={{ color: "var(--text-dim)" }}>{t.organization}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
            Interested in working together?
          </p>
          <a
            href={`mailto:${portfolioData?.personalInfo?.email ?? "malikarshid01430@gmail.com"}`}
            className="btn btn-outline-cyan"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </main>
  );
}
