"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Code,
  Award,
  Cpu,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  FileText,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";
import DownloadResumeButton from "./DownloadResumeButton";
import LocalizedLink from "./LocalizedLink";

export default function RecruiterDashboard() {
  const prefersReducedMotion = useReducedMotion();

  // Subtle entry animation
  const fadeInUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { delay, duration: 0.3, ease: "easeOut" as const },
        };

  // Grouping skills based on requirements
  const skillsCategories = [
    {
      title: "Programming",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "Kotlin", "Verilog"],
    },
    {
      title: "Embedded Systems",
      skills: ["ESP32", "ESP8266", "Arduino", "STM32", "8051 Microcontroller", "Embedded C", "Microcontrollers"],
    },
    {
      title: "Web Development",
      skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "REST APIs"],
    },
    {
      title: "Tools",
      skills: ["MATLAB", "Simulink", "Git/GitHub", "VS Code", "Android Studio"],
    },
    {
      title: "Hardware",
      skills: ["EasyEDA", "KiCad", "Proteus", "RTL Design", "Verilog HDL", "PCB Design", "Circuit Design"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "Firebase"],
    },
  ];

  return (
    <section
      id="recruiter-dashboard"
      className="relative border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-black py-20 sm:py-24 scroll-mt-20 overflow-hidden"
      aria-labelledby="recruiter-dashboard-heading"
    >
      {/* Visual Accents in Limits */}
      <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500/5 dark:bg-cyan-500/3 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-violet-500/5 dark:bg-violet-500/3 blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span
            className="font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold"
            aria-hidden="true"
          >
            Engineering Portfolio Summary
          </span>
          <h2
            id="recruiter-dashboard-heading"
            className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
          >
            Recruiter Dashboard
          </h2>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            A fast-track, candidate evaluation hub summarizing qualifications, engineering profile, and quick recruiter actions.
          </p>
        </div>

        {/* Master Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ==================== LEFT COLUMN (Snapshot, Quick Actions, Availability, Contact) ==================== */}
          <div className="lg:col-span-4 space-y-6">
            {/* SECTION 1: Professional Snapshot */}
            <motion.div
              {...fadeInUp(0)}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-50 dark:bg-cyan-500/5 text-cyan-600 dark:text-cyan-400">
                  <Briefcase className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wide font-mono">
                    Snapshot
                  </h3>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                    Candidate Info
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-500">
                    Name
                  </span>
                  <h4 className="text-lg font-black text-zinc-900 dark:text-white leading-tight">
                    {portfolioData.personalInfo.name}
                  </h4>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-500">
                    Role
                  </span>
                  <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 block mt-0.5">
                    Embedded Systems Engineer / IoT Developer
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-500">
                    Location
                  </span>
                  <span className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                    {portfolioData.personalInfo.location}
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-500">
                    Availability
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Actively seeking full-time roles
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-500">
                    Career Focus
                  </span>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
                    Embedded Systems, IoT & Full Stack Development
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-900">
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
                    Summary
                  </span>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {portfolioData.personalInfo.bioShort}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SECTION 9: Availability */}
            <motion.div
              {...fadeInUp(0.05)}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3.5 w-3.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wide font-mono">
                    Availability
                  </h3>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-mono">
                    Open for Offers
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Available for immediate employment. Willing to relocate to Bangalore, Karnataka, India or work remotely. Ready for technical evaluations and screening.
              </p>
            </motion.div>

            {/* SECTION 8: Recruiter Quick Actions */}
            <motion.div
              {...fadeInUp(0.1)}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 shadow-sm space-y-4"
            >
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wide font-mono flex items-center gap-2 pb-2 border-b border-zinc-100 dark:border-zinc-900">
                <FileText className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                Quick Actions
              </h3>

              <div className="flex flex-col gap-2">
                <DownloadResumeButton
                  variant="primary"
                  label="Download Resume"
                  format="2page"
                  className="w-full text-xs font-mono tracking-wider"
                />
                <a
                  href="#projects"
                  className="flex h-11 items-center justify-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-mono text-xs text-zinc-700 dark:text-zinc-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  aria-label="View portfolio projects"
                >
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 rotate-90" />
                  <span>View Projects</span>
                </a>
                <a
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 items-center justify-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-mono text-xs text-zinc-700 dark:text-zinc-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  aria-label="View Github profile (opens in a new tab)"
                >
                  <FaGithub className="h-3.5 w-3.5 shrink-0" />
                  <span>View GitHub</span>
                </a>
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 items-center justify-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-mono text-xs text-zinc-700 dark:text-zinc-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  aria-label="View LinkedIn profile (opens in a new tab)"
                >
                  <FaLinkedin className="h-3.5 w-3.5 shrink-0" />
                  <span>View LinkedIn</span>
                </a>
                <a
                  href="#contact"
                  className="flex h-11 items-center justify-center gap-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 font-mono text-xs text-white font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  aria-label="Scroll to contact form"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  <span>Contact Me</span>
                </a>
              </div>
            </motion.div>

            {/* SECTION 10: Contact Information */}
            <motion.div
              {...fadeInUp(0.15)}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 shadow-sm"
            >
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wide font-mono pb-2 border-b border-zinc-100 dark:border-zinc-900">
                Contact Details
              </h3>
              <ul className="mt-4 space-y-3.5 text-xs font-mono" aria-label="Verified contact list">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${portfolioData.personalInfo.email}`}
                    className="text-zinc-700 dark:text-zinc-300 hover:underline break-all"
                  >
                    {portfolioData.personalInfo.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${portfolioData.personalInfo.phone}`}
                    className="text-zinc-700 dark:text-zinc-300 hover:underline"
                  >
                    {portfolioData.personalInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0" aria-hidden="true" />
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {portfolioData.personalInfo.location}
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* ==================== RIGHT COLUMN (Engineering Profile, Technical Skills, Experience, Education, Projects, Certs) ==================== */}
          <div className="lg:col-span-8 space-y-6">
            {/* SECTION 2: Engineering Profile */}
            <motion.div
              {...fadeInUp(0)}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-50 dark:bg-cyan-500/5 text-cyan-600 dark:text-cyan-400">
                  <Cpu className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-zinc-900 dark:text-white">
                    Engineering Profile
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wider">
                    Core Strengths & Discipline
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {[
                  "Electronics and Communication Engineering",
                  "Embedded Systems",
                  "IoT",
                  "ESP32",
                  "Hardware and software integration",
                  "Problem solving",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-cyan-500/10 dark:border-cyan-500/20 bg-cyan-50/50 dark:bg-cyan-500/5 text-xs font-mono text-cyan-700 dark:text-cyan-300"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-cyan-500 shrink-0" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* SECTION 3: Technical Skills */}
            <motion.div
              {...fadeInUp(0.05)}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 sm:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-50 dark:bg-violet-500/5 text-violet-600 dark:text-violet-400">
                  <Code className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-zinc-900 dark:text-white">
                    Technical Skills Matrix
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wider">
                    Detailed Categorization
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillsCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/10 p-5 space-y-3.5"
                  >
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center justify-between">
                      <span>{cat.title}</span>
                      <span className="text-[10px] text-zinc-400 font-normal">
                        ({cat.skills.length} skills)
                      </span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 rounded bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono text-zinc-600 dark:text-zinc-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* SECTION 4: Featured Projects */}
            <motion.div
              {...fadeInUp(0.1)}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 sm:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-50 dark:bg-cyan-500/5 text-cyan-600 dark:text-cyan-400">
                  <Briefcase className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-zinc-900 dark:text-white">
                    Featured Engineering Projects
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wider">
                    Core Solutions
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {portfolioData.projects.slice(0, 3).map((project) => (
                  <div
                    key={project.id}
                    className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-900 bg-zinc-50/30 dark:bg-zinc-900/10 space-y-4"
                  >
                    <div className="flex justify-between items-baseline gap-4 flex-wrap">
                      <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                        {project.title}
                      </h4>
                      <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Results */}
                    {project.results && project.results.length > 0 && (
                      <div className="p-3.5 rounded-lg bg-cyan-50/50 dark:bg-cyan-950/5 border border-cyan-500/10 text-xs">
                        <span className="block font-mono text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase mb-1">
                          Key Result / Impact
                        </span>
                        <p className="text-zinc-700 dark:text-zinc-300 font-medium">
                          {project.results[0]}
                        </p>
                      </div>
                    )}

                    {/* Tech & Links */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 text-[9px] font-mono text-zinc-600 dark:text-zinc-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 text-xs font-mono shrink-0 w-full sm:w-auto">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400"
                            aria-label={`View code for ${project.title} on GitHub (opens in a new tab)`}
                          >
                            <FaGithub className="h-3.5 w-3.5" />
                            <span>Code</span>
                          </a>
                        )}
                        <LocalizedLink
                          href={`/projects/${project.id}`}
                          className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:underline"
                        >
                          <span>Case Study</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </LocalizedLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* SECTION 5: Experience */}
            <motion.div
              {...fadeInUp(0.1)}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 sm:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-50 dark:bg-cyan-500/5 text-cyan-600 dark:text-cyan-400">
                  <Briefcase className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-zinc-900 dark:text-white">
                    Internship & Technical Experience
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wider">
                    Work History
                  </p>
                </div>
              </div>

              <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-200 dark:before:bg-zinc-800">
                {portfolioData.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-7 space-y-3">
                    <span className="absolute left-[9px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-500 border border-white dark:border-zinc-950" />
                    
                    <div className="flex justify-between items-baseline gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                      {exp.company} | <span className="text-zinc-500">{exp.location}</span>
                    </div>

                    {/* Responsibilities list */}
                    <div className="space-y-1.5">
                      <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                        Responsibilities
                      </span>
                      <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1 list-disc list-inside">
                        {exp.responsibilities.slice(0, 3).map((resp, rIdx) => (
                          <li key={rIdx} className="indent-[-12px] pl-[12px]">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                          Achievements
                        </span>
                        <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1 list-disc list-inside">
                          {exp.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="indent-[-12px] pl-[12px] font-medium text-zinc-700 dark:text-zinc-300">
                              {ach}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* SECTION 6: Education */}
            <motion.div
              {...fadeInUp(0.15)}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 sm:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-50 dark:bg-violet-500/5 text-violet-600 dark:text-violet-400">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-zinc-900 dark:text-white">
                    Education
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wider">
                    Academic Background
                  </p>
                </div>
              </div>

              <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-200 dark:before:bg-zinc-800">
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-7 space-y-3">
                    <span className="absolute left-[9px] top-1.5 h-2.5 w-2.5 rounded-full bg-violet-500 border border-white dark:border-zinc-950" />

                    <div className="flex justify-between items-baseline gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white font-sans">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                        {edu.period || edu.timeline}
                      </span>
                    </div>

                    <div className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                      {edu.institution} | <span className="font-mono text-[11px] text-zinc-500">{edu.location}</span>
                    </div>

                    <ul className="text-xs text-zinc-500 dark:text-zinc-400 space-y-1 list-disc list-inside">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>

                    {edu.coursework && edu.coursework.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                          Relevant Coursework
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {edu.coursework.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className="px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono text-zinc-600 dark:text-zinc-500"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* SECTION 7: Certifications */}
            <motion.div
              {...fadeInUp(0.15)}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 sm:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-50 dark:bg-cyan-500/5 text-cyan-600 dark:text-cyan-400">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-zinc-900 dark:text-white">
                    Industry Certifications & Credentials
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wider">
                    Continuous Professional Learning
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1.5 no-scrollbar border-t border-zinc-100 dark:border-zinc-900 pt-4">
                {portfolioData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center gap-3 p-3.5 rounded-xl border border-zinc-100 dark:border-zinc-900/50 bg-zinc-50/50 dark:bg-zinc-900/10"
                  >
                    <div className="min-w-0">
                      <span className="block text-xs font-bold text-zinc-800 dark:text-white truncate">
                        {cert.name}
                      </span>
                      <span className="block text-[10px] text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                        {cert.issuer} ({cert.date})
                      </span>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg hover:bg-white dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all shrink-0"
                        aria-label={`Verify ${cert.name} certificate (opens in new tab)`}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
