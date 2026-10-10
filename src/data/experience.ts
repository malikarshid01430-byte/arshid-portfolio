// ============================================================
// EXPERIENCE & TRAINING DATA — Single source of truth.
// All 5 verified entries in reverse chronological order.
// Distinguishes internships from structured training programs.
// ============================================================

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  type: "Internship" | "Training";
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  badgeColor: string;
  dotColor: string;
  credentialUrl?: string;
  companyUrl?: string;
};

export const experiences: ExperienceItem[] = [
  {
    id: "ai-intern",
    role: "AI Intern",
    company: "CODEC Technologies",
    type: "Internship",
    location: "Remote / India",
    period: "August 2025 – September 2025",
    description: [
      "Gained exposure to artificial intelligence and machine-learning concepts.",
      "Worked with AI-related tools and technical workflows as supported by internship learning.",
      "Developed an understanding of AI-assisted problem-solving and technical workflows.",
    ],
    technologies: ["AI Concepts", "AI Tools", "Technical Workflows"],
    badgeColor: "bg-purple-500/15 text-purple-400 border border-purple-500/30",
    dotColor: "border-purple-400 bg-purple-400/20",
  },
  {
    id: "visionastraa-ev",
    role: "EV Skilling Program Trainee",
    company: "VisionAstraa EV Academy (with TERI)",
    type: "Training",
    location: "Bengaluru, India",
    period: "July 2026 – August 2026",
    description: [
      "Completed structured learning in 'Future-In-Charge: Skilling Program for India's Charging Infrastructure'.",
      "Studied EV charging infrastructure, charging technologies, and industry practices across Indian and global contexts.",
      "Developed foundational understanding of AC/DC charging equipment, charging-system components, infrastructure requirements, and safety considerations.",
      "Participated in hands-on battery technology learning, including battery component assembly/disassembly and battery connections.",
      "Studied relevant EV charging standards and protocols to the extent covered in training modules.",
      "Gained exposure to sustainable-mobility practices through the program's industry learning activities.",
    ],
    technologies: [
      "EV Charging Infrastructure",
      "Battery Assembly",
      "Sustainable Mobility",
      "Charging Standards Fundamentals",
    ],
    badgeColor: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    dotColor: "border-emerald-400 bg-emerald-400/20",
  },
  {
    id: "emertex-iot",
    role: "IoT Intern",
    company: "Emertex",
    type: "Internship",
    location: "Bengaluru, India",
    period: "March 2026 – April 2026",
    description: [
      "Gained practical exposure to Internet of Things concepts and connected-device workflows.",
      "Worked with foundational programming in C and microcontrollers, as documented in the internship certificate.",
      "Learned how sensor data can be collected, processed, and utilized in connected applications.",
      "Practiced troubleshooting and understanding embedded hardware and communication workflows.",
      "Developed familiarity with IoT development approaches and practical connected-hardware applications.",
    ],
    technologies: ["IoT", "C", "Microcontrollers", "Connected-device Workflows"],
    badgeColor: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",
    dotColor: "border-cyan-400 bg-cyan-400/20",
  },
  {
    id: "mindmatrix-android",
    role: "Android App Development Intern – Generative AI",
    company: "MindMatrix",
    type: "Internship",
    location: "Bengaluru, India",
    period: "February 2026 – May 2026",
    description: [
      "Developed Android application features using Kotlin and Jetpack Compose.",
      "Worked on a Student Performance Report application concept, focusing on presenting student records in a structured, user-friendly interface.",
      "Explored the integration of generative AI capabilities into application workflows using Gemini-related tools.",
      "Used AI-assisted development tools to support coding, experimentation, debugging, and rapid prototyping.",
      "Explored an AI-powered YouTube summarization/LMS workflow as part of internship-related development.",
      "Practiced Android UI development, application structure, troubleshooting, and iterative feature development.",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "Gemini API", "Firebase", "AI-Assisted Development"],
    badgeColor: "bg-violet-500/15 text-violet-400 border border-violet-500/30",
    dotColor: "border-violet-400 bg-violet-400/20",
  },
  {
    id: "vlsiguru-dft",
    role: "DFT Training Intern",
    company: "VLSIGuru",
    type: "Internship",
    location: "Bengaluru / Remote, India",
    period: "February 2026 – May 2026",
    description: [
      "Completed structured training related to Design for Testability (DFT) in digital integrated circuit design.",
      "Studied fundamental DFT concepts and the vital importance of testability in semiconductor design and manufacturing.",
      "Explored digital design concepts, Verilog fundamentals, and test-oriented design workflows.",
      "Developed an introductory understanding of scan-based testing, scan chains, and test-pattern generation concepts.",
      "Strengthened foundational knowledge of digital hardware, logic design, and semiconductor testing methodologies.",
    ],
    technologies: ["Verilog HDL", "Digital Logic Design", "DFT Fundamentals", "Scan Chains", "Semiconductor Testing"],
    badgeColor: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
    dotColor: "border-blue-400 bg-blue-400/20",
  },
];
