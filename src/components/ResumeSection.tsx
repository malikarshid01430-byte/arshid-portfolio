import React from "react";
import ScrollReveal from "./ScrollReveal";
import { BookOpen, Briefcase, Award, Download, Check } from "lucide-react";
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
      description: [
        "Contributing to web interfaces and internal tools",
        "Working with React and TailwindCSS for feature delivery",
      ],
    },
    {
      period: "August 2024 - Present",
      role: "Tech Lead",
      company: "SDC, MVJCE",
      description: [
        "Leading technical direction and mentoring peers in the club",
        "Driving web app initiatives and organizing workshops",
      ],
    },
    {
      period: "March 2025 - Present",
      role: "Software Team Member",
      company: "IPD, MVJCE",
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

        {/* Professional Experience - centered line, alternating left/right, oldest → newest */}
        <div className="mb-16">
          <ScrollReveal delay={200}>
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center text-primary mr-4 shadow-sm">
                <Briefcase size={22} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Professional Experience</h3>
            </div>
          </ScrollReveal>

          <div className="timeline-center">
            <div className="md:grid md:grid-cols-2 md:gap-y-12 md:gap-x-8">
              {([...experience]
                .sort((a, b) => parseStartOfPeriod(a.period) - parseStartOfPeriod(b.period))
                .map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <ScrollReveal key={index} delay={300 + index * 100}>
                      <div
                        className={
                          (isLeft
                            ? "timeline-entry timeline-entry-left md:pr-12 md:text-right"
                            : "timeline-entry timeline-entry-right md:pl-12 md:text-left") +
                          " mb-10 md:mb-0"
                        }
                      >
                        <div className="timeline-card">
                          <div className={(isLeft ? "md:justify-end" : "md:justify-start") + " flex items-center gap-2 mb-2"}>
                            <span className="period-badge">{item.period}</span>
                            <span className="company-badge">{item.company}</span>
                          </div>
                          <h4 className="text-lg font-bold mb-2">{item.role}</h4>
                          <ul className={"text-foreground/60 text-sm list-none space-y-2 " + (isLeft ? "md:text-right" : "md:text-left") }>
                          {Array.isArray(item.description) ? (
                            item.description.map((desc, i) => (
                              <li key={i} className="flex items-start">
                                <Check size={16} className={"text-primary mt-0.5 " + (isLeft ? "ml-2 order-2" : "mr-2") + " flex-shrink-0"} />
                                <span className="leading-relaxed">{desc}</span>
                              </li>
                            ))
                          ) : (
                            <li className="flex items-start">
                              <Check size={16} className={"text-primary mt-0.5 " + (isLeft ? "ml-2 order-2" : "mr-2") + " flex-shrink-0"} />
                              <span className="leading-relaxed">{item.description}</span>
                            </li>
                          )}
                          </ul>
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
