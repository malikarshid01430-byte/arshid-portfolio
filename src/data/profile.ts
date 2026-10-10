// ============================================================
// CENTRAL PROFILE CONFIGURATION — Single source of truth for
// personal details, contact info, headline, and professional bio.
// ============================================================

export const profile = {
  // ─── Identity ──────────────────────────────────────────────
  name: "Arshid Ahmad Malik",
  firstName: "Arshid",
  lastName: "Malik",

  // ─── Professional Title & Headline ─────────────────────────
  professionalTitle:
    "Electronics and Communication Engineering Graduate | Embedded Systems | IoT | VLSI and DFT | Android Development | Generative AI | EV Technology",
  headline: "Engineering Ideas Into Practical Technology",
  subheadline:
    "Electronics and Communication Engineering Graduate specializing in Embedded Systems, IoT, Hardware Testing, VLSI & DFT, Android Development, Generative AI, and EV Charging Technology.",

  // ─── Contact details ───────────────────────────────────────
  email: "malikarshid01430@gmail.com",
  phone: "+91 9682397579",
  location: "Bengaluru, Karnataka, India",
  // ─── Social links ──────────────────────────────────────────
  portfolioUrl: "https://arshid-portfolio.vercel.app",
  linkedin: "https://www.linkedin.com/in/arshid-ahmad-malik",
  github: "https://github.com/malikarshid01430-byte",
  repositoryUrl: "https://github.com/malikarshid01430-byte/arshid-portfolio",

  // ─── Resume PDF ────────────────────────────────────────────
  // Configurable path. If file is not present, UI provides email request fallback.
  resumePdf: "/resume/Arshid_Ahmad_Malik_Resume.pdf",

  // ─── Career status ─────────────────────────────────────────
  status: "Open to Entry-Level Engineering Roles & Technology Opportunities",

  // ─── Typed-text roles shown in hero ────────────────────────
  roles: [
    "Electronics & Embedded Systems Engineer",
    "IoT & Hardware Integration Builder",
    "VLSI & DFT Fundamentals Trainee",
    "Android Developer (Kotlin & Compose)",
    "Generative AI Application Explorer",
    "EV Technology & Mobility Enthusiast",
  ],

  // ─── Professional Summary ──────────────────────────────────
  about: [
    "I am an Electronics and Communication Engineering graduate from MVJ College of Engineering, affiliated with Visvesvaraya Technological University, with a three-year diploma foundation from Government Polytechnic College Srinagar. My learning spans embedded systems, IoT, digital design and DFT fundamentals, Android development, generative AI, and EV charging infrastructure.",
    "Through internships and structured training, I have developed practical familiarity with hardware-software integration, sensor-based systems, Android UI development, and technical troubleshooting. I am seeking an early-career opportunity in embedded systems, electronics testing, IoT, EV technology, Android development, AI-assisted applications, or technical support.",
  ],

  // ─── Target Career Pathways ────────────────────────────────
  targetRoles: [
    "Embedded Systems and IoT",
    "Electronics and Hardware Testing",
    "VLSI and Design for Testability",
    "Android Application Development",
    "AI-assisted Application Development",
    "Technical Support and Engineering Support",
    "EV Technology and Charging Infrastructure",
  ],
} as const;
