import { notFound } from "next/navigation";
import { portfolioData } from "../../data/portfolio";
import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Cpu, Code2, CheckCircle } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioData.projects.find(p => p.id === id);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  const projectUrl = `https://arshid-portfolio.vercel.app/projects/${id}`;

  return {
    title: `${project.title} | Arshid Ahmad Malik`,
    description: project.longDescription,
    openGraph: {
      title: project.title,
      description: project.longDescription,
      url: projectUrl,
      siteName: "Arshid Ahmad Malik Portfolio",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.longDescription,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: projectUrl,
    },
    other: {
      "article:published_time": project.timeline || "",
      "article:modified_time": new Date().toISOString(),
      "article:tag": project.technologies.join(", "),
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = portfolioData.projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative py-24 border-t border-zinc-900 bg-black/40">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": project.title,
            "description": project.description,
            "author": {
              "@type": "Person",
              "name": portfolioData.personalInfo.name,
              "url": "https://arshid-portfolio.vercel.app"
            },
            "codeRepository": project.github,
            "programmingLanguage": project.technologies,
            "about": {
              "@type": "Thing",
              "name": project.category
            },
            "dateCreated": project.timeline || new Date().toISOString().split('T')[0],
            "url": `https://arshid-portfolio.vercel.app/projects/${id}`
          })
        }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/#projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-zinc-400">{project.title}</span>
        </nav>

        {/* Project Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
            {project.category}
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-zinc-300 font-mono">
            {project.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 font-mono text-xs text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12 flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-950/40 font-mono text-xs text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/20 transition-colors"
            >
              View Source Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/20 bg-cyan-950/5 font-mono text-xs text-cyan-400 hover:border-cyan-400 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-zinc-400 leading-relaxed">{project.description}</p>
        </section>

        {/* Problem Statement */}
        {project.problem && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Problem Statement</h2>
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6">
              <p className="text-zinc-400 leading-relaxed">{project.problem}</p>
            </div>
          </section>
        )}

        {/* Solution */}
        {project.solution && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Solution</h2>
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6">
              <p className="text-zinc-400 leading-relaxed">{project.solution}</p>
            </div>
          </section>
        )}

        {/* Research */}
        {project.longDescription && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Research & Background</h2>
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6">
              <p className="text-zinc-400 leading-relaxed">{project.longDescription}</p>
            </div>
          </section>
        )}

        {/* Architecture */}
        {project.architecture && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Architecture & System Design</h2>
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-mono text-sm text-cyan-400 mb-2">Block Diagram</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.architecture.nodes.map((node) => (
                      <span
                        key={node.id}
                        className="px-3 py-1 rounded-lg border border-cyan-500/20 bg-cyan-500/5 font-mono text-xs text-cyan-400"
                      >
                        {node.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-mono text-sm text-cyan-400 mb-2">Workflow</h3>
                  <div className="space-y-2">
                    {project.architecture.edges.map((edge, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <span className="font-mono text-zinc-400">{edge.from}</span>
                        <span className="text-cyan-400">→</span>
                        <span className="font-mono text-zinc-400">{edge.to}</span>
                        <span className="text-zinc-500">({edge.label})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Hardware & Software */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Hardware & Software Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6">
              <h3 className="font-mono text-sm text-emerald-400 mb-3 flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                Hardware Components
              </h3>
              <ul className="space-y-2">
                {project.technologies.filter(t => 
                  ['ESP32', 'Arduino', 'Sensors', 'MQTT', 'RFID', 'Servo', 'Relay', 'MQ3', 'DHT11'].some(hw => t.includes(hw))
                ).map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6">
              <h3 className="font-mono text-sm text-blue-400 mb-3 flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                Software & Technologies
              </h3>
              <ul className="space-y-2">
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Implementation</h2>
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6">
            <p className="text-zinc-400 leading-relaxed mb-4">
              This project was implemented using modern embedded systems practices and agile development methodology.
              The development cycle spanned {project.timeline || 'several weeks'} with iterative testing and optimization.
            </p>
            <div className="space-y-3">
              <h3 className="font-mono text-sm text-cyan-400">Key Implementation Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-xs text-zinc-400">
                <li>Requirement analysis and system design</li>
                <li>Hardware component selection and circuit design</li>
                <li>Firmware development and sensor integration</li>
                <li>Testing and calibration</li>
                <li>Optimization and deployment</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-zinc-900 bg-zinc-950/40 p-4"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/5 flex-shrink-0">
                  <span className="text-xs text-cyan-400">✓</span>
                </div>
                <p className="text-sm text-zinc-300">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        {project.results && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Results</h2>
            <div className="space-y-3">
              {project.results.map((result, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 flex-shrink-0">
                    <span className="text-xs text-emerald-400">✓</span>
                  </div>
                  <p className="text-sm text-zinc-300">{result}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Timeline */}
        {project.timeline && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Project Timeline</h2>
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-cyan-400" />
                <p className="text-zinc-300 font-mono">{project.timeline}</p>
              </div>
            </div>
          </section>
        )}

        {/* Recruiter Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Recruiter Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4"
              >
                <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-300">{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        {project.technicalChallenges && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Challenges & Solutions</h2>
            <div className="space-y-4">
              {project.technicalChallenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/5 flex-shrink-0">
                      <span className="text-xs text-amber-400">!</span>
                    </div>
                    <p className="text-sm text-zinc-300">{challenge}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Future Improvements */}
        {project.futureImprovements && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Lessons Learned & Future Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6">
                <h3 className="font-mono text-sm text-amber-400 mb-3">Lessons Learned</h3>
                <ul className="space-y-2">
                  {project.technicalChallenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <span className="text-amber-400 mt-0.5">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6">
                <h3 className="font-mono text-sm text-violet-400 mb-3">Future Scope</h3>
                <ul className="space-y-2">
                  {project.futureImprovements.map((improvement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <span className="text-violet-400 mt-0.5">→</span>
                      {improvement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Complete Tech Stack</h2>
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5 font-mono text-xs text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        {project.images && project.images.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 aspect-video flex items-center justify-center"
                >
                  <p className="text-xs text-zinc-500">Image: {image}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}