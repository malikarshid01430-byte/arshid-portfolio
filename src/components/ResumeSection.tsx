import React from "react";
import ScrollReveal from "./ScrollReveal";
import { BookOpen, Briefcase, Award, Download, Check, MapPin, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const ResumeSection = () => {
  // Helper to sort experiences from oldest to newest based on start month/year
  const monthToIndex: Record<string, number> = {
    january: 0, jan: 0,
    february: 1, feb: 1,
    march: 2, mar: 2,
    april: 3, apr: 3,
    may: 4,
    june: 5, jun: 5,
    july: 6, jul: 6,
    august: 7, aug: 7,
    september: 8, sep: 8, sept: 8,
    october: 9, oct: 9,
    november: 10, nov: 10,
    december: 11, dec: 11,
  };

  const parseStartOfPeriod = (period: string) => {
    const [start] = period.split(/\s*[-–—]\s*/);
    const parts = start.trim().split(" ");
    if (parts.length === 2) {
      const [monthStr, yearStr] = parts;
      const month = monthToIndex[monthStr.toLowerCase()] ?? 0;
      const year = parseInt(yearStr, 10) || 0;
      return new Date(year, month, 1).getTime();
    }
    // Fallback: just try year only
    const yr = parseInt(start, 10) || 0;
    return new Date(yr, 0, 1).getTime();
  };
  const education = [
    {
      period: "2023 - 2027",
      degree: "Bachelor of Engineering-BE, Computer Science & Engineering",
      institution: "MVJ College of Engineering, Bangalore, India",
      description:
        "Relevant Course work: Data Structures, Algorithms, Database Management Systems, Object-Oriented Programming",
    },
    {
      period: "2023",
      degree: "Higher Secondary Education",
      institution: "Hajad Public Hr Secondary School",
      description:
        "Completed higher secondary education with PCM, scoring 86.4%",
    },
  ];

  const experience = [
    {
      period: "June 2024 - July 2024",
      role: "Web Dev Intern",
      company: "Cognifyz Technologies",
      location: "Remote, India",
      badgeColor: "bg-rose-500/15 text-rose-400 border border-rose-500/30",
      dotColor: "border-rose-400 bg-rose-400/20",
      description: [
        "Projects based on web development",
        "Tools used: HTML, CSS, JS, React.js",
        "Created visualizations and dashboards to present key insights to stakeholders",
      ],
    },
    {
      period: "August 2024 - Present",
      role: "Tech Lead",
      company: "SDC, MVJCE",
      location: "Bangalore, Karnataka",
      badgeColor: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
      dotColor: "border-emerald-400 bg-emerald-400/20",
      description: [
        "Leading technical direction and mentoring peers in the club",
        "Driving web app initiatives and organizing workshops",
      ],
    },
    {
      period: "March 2025 - Present",
      role: "Software Team Member",
      company: "IPD, MVJCE",
      location: "Bangalore, Karnataka",
      badgeColor: "bg-violet-500/15 text-violet-400 border border-violet-500/30",
      dotColor: "border-violet-400 bg-violet-400/20",
      description: [
        "Managing projects under software team",
      ],
    },
    {
      period: "June 2025 - Present",
      role: "Web Developer Intern",
      company: "NIT Srinagar",
      location: "Srinagar, J&K, India",
      badgeColor: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
      dotColor: "border-blue-400 bg-blue-400/20",
      description: [
        "Contributing to web interfaces and internal tools",
        "Working with React and TailwindCSS for feature delivery",
      ],
    },
    {
      period: "Feb 2026 - Aug 2026",
      role: "Software Engineer (Part-Time)",
      company: "Koshur Scientist",
      location: "Hybrid",
      badgeColor: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",
      dotColor: "border-cyan-400 bg-cyan-400/20",
      description: [
        "Progressed from intern to part-time SDE within 3 months, owning features across the full software development lifecycle.",
        "Collaborated in an agile team environment, contributing to code reviews, sprint planning, and production deployments.",
      ],
    },
    {
      period: "May 2026 - Aug 2026",
      role: "AI / ML Intern",
      company: "QuantumTech AI",
      location: "Remote",
      badgeColor: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
      dotColor: "border-amber-400 bg-amber-400/20",
      description: [
        "Developed and fine-tuned machine learning models, performed EDA and feature engineering on large datasets, and built automated data pipelines and reporting dashboards for business insights.",
      ],
    },
  ];

  const achievements = [
    {
      title: "IIT Madras Innovation Challenge",
      description: "Runner-Up in the prestigious innovation competition hosted by IIT Madras.",
      year: "2023",
    },
    {
      title: "MVJCE Innovation Challenge",
      description: "Finalist in the college-level innovation challenge for a sustainable technology solution.",
      year: "2024",
    },
    {
      title: "Coding Competition",
      description: "Secured 1st place in the inter-college coding competition.",
      year: "2024",
    },
  ];

  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/uploads/prabjyotsingh resume.pdf';
    link.download = 'Prabjyotsingh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section bg-muted/30">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0 text-center md:text-left">
              My Resume
            </h2>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              onClick={handleDownloadResume}
            >
              <Download size={18} />
              Download Resume
            </Button>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="w-20 h-1 bg-primary mb-10 rounded-full md:mx-0"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-10 mb-16">
          {/* Education Section */}
          <div>
            <ScrollReveal delay={200}>
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center text-primary mr-4 shadow-sm">
                  <BookOpen size={22} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Education</h3>
              </div>
            </ScrollReveal>

            <div className="timeline space-y-8">
              {education.map((item, index) => (
                <ScrollReveal key={index} delay={300 + index * 100}>
                  <div className="timeline-item">
                    <div className="timeline-card">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="period-badge">{item.period}</span>
                        <span className="company-badge">{item.institution}</span>
                      </div>
                      <h4 className="text-lg font-bold mb-2">{item.degree}</h4>
                      <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-3">
              My <span className="text-primary">Experience</span>
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-foreground/50 text-center max-w-2xl mx-auto mb-12 text-sm">
              A journey through impactful roles in tech communities and innovative projects
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {([...experience]
              .sort((a, b) => parseStartOfPeriod(a.period) - parseStartOfPeriod(b.period))
              .map((item, index) => (
                <ScrollReveal key={index} delay={200 + index * 100} className="h-full">
                  <div className="bg-card/80 border border-border/50 rounded-xl p-5 md:p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      {/* Header row: Company badge + period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${item.badgeColor}`}>
                          {item.company}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-foreground/50">
                          <Calendar size={13} className="text-primary" />
                          {item.period}
                        </span>
                      </div>

                      {/* Role title */}
                      <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {item.role}
                      </h4>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 mb-4 text-xs text-foreground/50">
                        <MapPin size={13} className="text-primary" />
                        <span>{item.location}</span>
                      </div>

                      {/* Diamond bullet description */}
                      <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/60">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-primary rotate-45 flex-shrink-0" />
                            <span className="leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              )))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <ScrollReveal delay={200}>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center text-primary mr-4 shadow-sm">
                <Award size={22} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Achievements</h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <ScrollReveal key={index} delay={300 + index * 100}>
                <div className="card-effect dark:bg-card/90 rounded-lg p-6 h-full group hover:translate-y-[-5px] transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-xs font-medium text-primary bg-primary/10 py-1.5 px-3 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
