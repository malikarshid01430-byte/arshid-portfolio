"use client";

import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Venkatesh",
    role: "Professor & HOD",
    organization: "MVJ College of Engineering",
    content: "Arshid demonstrated exceptional skill in VLSI design during his internship. His work on DFT and ATPG showed deep understanding of semiconductor testing methodologies.",
    rating: 5,
    linkedin: "https://linkedin.com/in/arshidahmadmalik",
  },
  {
    id: 2,
    name: "Project Mentor",
    role: "Senior Engineer",
    organization: "TechMahir",
    content: "Outstanding performance during the Android Apprenticeship. Arshid quickly mastered Jetpack Compose and delivered a functional prototype ahead of schedule.",
    rating: 5,
    linkedin: "https://linkedin.com/in/arshidahmadmalik",
  },
  {
    id: 3,
    name: "Team Lead",
    role: "IoT Systems Engineer",
    organization: "UniConverge Technologies",
    content: "Excellent problem-solving skills and dedication. Arshid's IoT project implementations were innovative and well-documented. A valuable team member.",
    rating: 5,
    linkedin: "https://linkedin.com/in/arshidahmadmalik",
  },
  {
    id: 4,
    name: "Certification Reviewer",
    role: "Industry Expert",
    organization: "Various Platforms",
    content: "Arshid consistently scores in the top percentile across certifications. His commitment to continuous learning is evident from 20+ professional certifications.",
    rating: 5,
    linkedin: "https://linkedin.com/in/arshidahmadmalik",
  },
  {
    id: 5,
    name: "College Peers",
    role: "Batchmates",
    organization: "MVJ College of Engineering",
    content: "Arshid is always the go-to person for technical challenges. His ability to explain complex concepts in simple terms makes him an excellent collaborator and leader.",
    rating: 5,
    linkedin: "https://linkedin.com/in/arshidahmadmalik",
  },
  {
    id: 6,
    name: "Project Reviewer",
    role: "IEEE Reviewer",
    organization: "IEEE Xplore",
    content: "The RFID-based door locking system project showcased practical application of embedded systems. Well-structured code and thorough testing methodology.",
    rating: 5,
    linkedin: "https://linkedin.com/in/arshidahmadmalik",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="relative py-24 border-t border-zinc-900 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{'>'} TESTIMONIALS</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            What People Say
          </h1>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Feedback from mentors, colleagues, and collaborators
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">{testimonials.length}</div>
            <div className="text-xs font-mono text-zinc-500 mt-1">Testimonials</div>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400">5.0</div>
            <div className="text-xs font-mono text-zinc-500 mt-1">Avg Rating</div>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 text-center">
            <div className="text-2xl font-bold text-violet-400">100%</div>
            <div className="text-xs font-mono text-zinc-500 mt-1">Positive</div>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 text-center">
            <div className="text-2xl font-bold text-amber-400">6+</div>
            <div className="text-xs font-mono text-zinc-500 mt-1">Sources</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-xl border border-zinc-900 bg-zinc-950/40 p-6 hover:border-cyan-500/20 transition-all flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-cyan-500/20 mb-4" />

              {/* Content */}
              <p className="text-sm text-zinc-300 leading-relaxed flex-1 mb-4">
                {testimonial.content}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Author */}
              <div className="border-t border-zinc-900 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-zinc-500">
                      {testimonial.role}
                    </p>
                    <p className="text-[10px] font-mono text-zinc-600">
                      {testimonial.organization}
                    </p>
                  </div>
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/20 transition-colors"
                    aria-label="View LinkedIn profile"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-400 mb-4">
            Interested in working with me?
          </p>
          <a
            href="mailto:malikarshid9893@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-6 py-3 font-mono text-sm text-cyan-400 hover:bg-cyan-500/10 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}