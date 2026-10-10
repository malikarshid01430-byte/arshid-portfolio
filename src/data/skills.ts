// ============================================================
// SKILLS DATA — Organized into meaningful engineering categories.
// Distinguishes Foundational Knowledge from Practical Experience.
// ============================================================

export type SkillLevel = "Foundational Knowledge" | "Practical Experience";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillCategory = {
  id: string;
  label: string;
  emoji: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "embedded",
    label: "Embedded Systems & Hardware",
    emoji: "🔌",
    skills: [
      { name: "ESP32", level: "Practical Experience" },
      { name: "Arduino", level: "Practical Experience" },
      { name: "NodeMCU", level: "Practical Experience" },
      { name: "Microcontrollers", level: "Practical Experience" },
      { name: "Sensors & Actuators", level: "Practical Experience" },
      { name: "Relay Interfacing", level: "Practical Experience" },
      { name: "Hardware Debugging & Testing", level: "Practical Experience" },
      { name: "Raspberry Pi", level: "Foundational Knowledge" },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    emoji: "💻",
    skills: [
      { name: "C", level: "Practical Experience" },
      { name: "C++", level: "Practical Experience" },
      { name: "Kotlin", level: "Practical Experience" },
      { name: "HTML, CSS & JavaScript", level: "Practical Experience" },
      { name: "Python Fundamentals", level: "Foundational Knowledge" },
      { name: "Verilog HDL Fundamentals", level: "Foundational Knowledge" },
      { name: "Java Fundamentals", level: "Foundational Knowledge" },
      { name: "TypeScript", level: "Foundational Knowledge" },
    ],
  },
  {
    id: "android-ai",
    label: "Android & AI",
    emoji: "📱",
    skills: [
      { name: "Android Studio", level: "Practical Experience" },
      { name: "Jetpack Compose", level: "Practical Experience" },
      { name: "Gemini & GenAI Integration", level: "Practical Experience" },
      { name: "AI-Assisted Development", level: "Practical Experience" },
      { name: "Firebase", level: "Foundational Knowledge" },
      { name: "Prompt Engineering Fundamentals", level: "Foundational Knowledge" },
    ],
  },
  {
    id: "iot",
    label: "IoT",
    emoji: "🌐",
    skills: [
      { name: "Sensor Data Collection", level: "Practical Experience" },
      { name: "Embedded Connectivity", level: "Practical Experience" },
      { name: "IoT Application Development", level: "Practical Experience" },
      { name: "MQTT & IoT Protocols", level: "Foundational Knowledge" },
    ],
  },
  {
    id: "vlsi",
    label: "VLSI & Digital Design",
    emoji: "🔲",
    skills: [
      { name: "Digital Logic Fundamentals", level: "Foundational Knowledge" },
      { name: "Verilog", level: "Foundational Knowledge" },
      { name: "DFT Fundamentals", level: "Foundational Knowledge" },
      { name: "Scan-Chain Concepts", level: "Foundational Knowledge" },
      { name: "Semiconductor Testing Fundamentals", level: "Foundational Knowledge" },
    ],
  },
  {
    id: "ev",
    label: "EV Technology",
    emoji: "⚡",
    skills: [
      { name: "EV Charging Infrastructure", level: "Foundational Knowledge" },
      { name: "Battery Technology Exposure", level: "Foundational Knowledge" },
      { name: "Sustainable Mobility", level: "Foundational Knowledge" },
      { name: "IEC 61851, ISO 15118, OCPP & CHAdeMO", level: "Foundational Knowledge" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    emoji: "🛠️",
    skills: [
      { name: "Git & GitHub", level: "Practical Experience" },
      { name: "VS Code", level: "Practical Experience" },
      { name: "Blynk IoT Platform", level: "Practical Experience" },
      { name: "Multimeter & Lab Instruments", level: "Practical Experience" },
      { name: "Google AI Studio", level: "Practical Experience" },
    ],
  },
];

// Level badge styles
export const levelColors: Record<SkillLevel, string> = {
  "Practical Experience": "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  "Foundational Knowledge": "bg-blue-500/15 text-blue-400 border border-blue-500/30",
};
