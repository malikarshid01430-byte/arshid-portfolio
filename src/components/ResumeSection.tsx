import React from "react";
import ScrollReveal from "./ScrollReveal";
import { BookOpen, Briefcase, Award, Download, Check, MapPin, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const ResumeSection = () => {
  // Helper to sort experiences from oldest to newest based on start month/year
  const monthToIndex: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  const parseStartOfPeriod = (period: string) => {
    const [start] = period.split(" - ");
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

          <div className="relative">
            {/* Center spine — desktop only */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border/50" />

            <div className="space-y-8 md:space-y-12">
              {([...experience]
                .sort((a, b) => parseStartOfPeriod(a.period) - parseStartOfPeriod(b.period))
                .map((item, index) => {
                  const isLeft = index % 2 === 0;
                  const card = (
                    <div className="bg-card/80 border border-border/50 rounded-xl p-5 md:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                      {/* Company badge */}
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${item.badgeColor}`}>
                        {item.company}
                      </span>

                      {/* Role title */}
                      <h4 className="text-lg font-bold mb-3">{item.role}</h4>

                      {/* Date & location row */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-foreground/50">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-primary" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-primary" />
                          {item.location}
                        </span>
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
                  );

                  return (
                    <ScrollReveal key={index} delay={200 + index * 100}>
                      {/* Mobile: left-aligned timeline */}
                      <div className="md:hidden relative pl-8 border-l border-border/50">
                        <div className={`absolute -left-[7px] top-5 w-3.5 h-3.5 rounded-full ${item.dotColor}`} />
                        {card}
                      </div>

                      {/* Desktop: alternating layout */}
                      <div className="hidden md:flex items-start relative">
                        <div className="w-1/2 pr-10">
                          {isLeft ? card : null}
                        </div>

                        {/* Center connector dot */}
                        <div className={`absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full ${item.dotColor} z-10`} />

                        <div className="w-1/2 pl-10">
                          {!isLeft ? card : null}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                }))}
            </div>
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
