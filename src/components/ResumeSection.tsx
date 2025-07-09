import React from "react";
import ScrollReveal from "./ScrollReveal";
import { BookOpen, Briefcase, Award, Download, Check } from "lucide-react";
import { Button } from "./ui/button";

const ResumeSection = () => {
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
      period: "August 2024 - Present",
      role: "Software Development Club Member",
      company: "MVJCE",
      description: [
        "Collaborate with team members to develop web applications and software solutions",
        "Participate in coding competitions and workshops to enhance technical skills",
      ],
    },
    {
      period: "August 2023 - Present",
      role: "Video Editor",
      company: "Raag Abhinaya and Dhwani Music Club, MVJCE",
      description: [
        "Create and edit video content for college cultural club events and performances",
        "Design motion graphics and visual effects to enhance video presentations",
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
    link.href = '/resume.pdf'; // Make sure to place your resume.pdf in the public folder
    link.download = 'Prabjyot_Singh_Resume.pdf';
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
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

            <div className="space-y-8">
              {education.map((item, index) => (
                <ScrollReveal key={index} delay={300 + index * 100}>
                  <div className="timeline-item">
                    <span className="text-xs font-medium text-primary py-1.5 px-3 rounded-full bg-primary/10 inline-block mb-2">
                      {item.period}
                    </span>
                    <h4 className="text-lg font-bold mb-2">{item.degree}</h4>
                    <h5 className="text-foreground/70 text-sm font-medium mb-3">
                      {item.institution}
                    </h5>
                    <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <ScrollReveal delay={200}>
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center text-primary mr-4 shadow-sm">
                  <Briefcase size={22} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Professional Experience</h3>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <ScrollReveal key={index} delay={300 + index * 100}>
                  <div className="timeline-item">
                    <span className="text-xs font-medium text-primary py-1.5 px-3 rounded-full bg-primary/10 inline-block mb-2">
                      {item.period}
                    </span>
                    <h4 className="text-lg font-bold mb-2">{item.role}</h4>
                    <h5 className="text-foreground/70 text-sm font-medium mb-3">
                      {item.company}
                    </h5>
                    <ul className="text-foreground/60 text-sm list-none space-y-2">
                      {Array.isArray(item.description) ? 
                        item.description.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            <Check size={16} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                            <span className="leading-relaxed">{desc}</span>
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="leading-relaxed">{item.description}</span>
                        </li>
                      }
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
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
