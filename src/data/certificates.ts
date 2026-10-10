// Single source of truth for the public certificates gallery.
// Entries without an original document stay visible, but are never presented as verified.

export type CertificateCategory =
  | "Electronics and Embedded Systems"
  | "IoT and Hardware"
  | "MATLAB and Machine Learning"
  | "Artificial Intelligence"
  | "Data Science and Analytics"
  | "Cloud Computing"
  | "Cybersecurity"
  | "Electric Vehicle Technology"
  | "Aptitude and Communication Skills"
  | "NCC and Participation"
  | "Academic and General Learning";

export type Certificate = {
  id: string;
  title: string;
  issuer?: string;
  issueDate?: string;
  description?: string;
  category: CertificateCategory;
  skills?: string[];
  fileUrl?: string;
  verificationUrl?: string;
  aliases?: string[];
};

const needsDocument = (
  id: string,
  title: string,
  category: CertificateCategory,
  issuer?: string,
  skills?: string[],
  description?: string,
): Certificate => ({
  id,
  title,
  issuer,
  category,
  skills,
  description,
});

export const certificates: Certificate[] = [
  needsDocument("nptel-microsensors-nanosensors", "Microsensors and Nanosensors", "Electronics and Embedded Systems", "NPTEL", ["Sensors"], "Study of microscale sensing devices, transduction principles, and the role of miniaturised sensors in electronic systems."),
  needsDocument("nptel-classics-neuroscience", "Classics of Neuroscience", "Academic and General Learning", "NPTEL", ["Neuroscience"], "An academic introduction to foundational ideas in neuroscience and how scientific models are built from observation and experimentation."),
  needsDocument("nptel-cloud-computing", "Cloud Computing", "Cloud Computing", "NPTEL", ["Cloud Computing"], "Covers cloud-service concepts, shared computing resources, and the fundamentals behind scalable digital infrastructure."),
  needsDocument("matlab-machine-learning-onramp", "MATLAB Machine Learning Onramp", "MATLAB and Machine Learning", "MathWorks", ["MATLAB", "Machine Learning"], "Introduces MATLAB workflows for preparing data, exploring patterns, and applying introductory machine-learning techniques."),
  needsDocument("matlab-machine-learning-classification", "MATLAB Machine Learning: Classification", "MATLAB and Machine Learning", "MathWorks", ["MATLAB", "Classification"], "Focuses on classification concepts and the use of MATLAB tools to evaluate data-driven prediction models."),
  needsDocument("arduino-training", "Arduino Training Certification", "Electronics and Embedded Systems", undefined, ["Arduino"], "Covers Arduino-based microcontroller programming, digital input/output, and rapid hardware prototyping concepts."),
  needsDocument("introduction-to-iot", "Introduction to IoT", "IoT and Hardware", undefined, ["IoT"], "Introduces connected-device architectures, sensor data flow, and the role of communication in IoT systems."),
  {
    id: "emertex-iot-internship",
    title: "Certificate of Internship — Internet of Things (IoT)",
    aliases: ["Emertex – IoT Internship Certificate"],
    issuer: "Emertxe",
    issueDate: "2 March 2026 – 20 April 2026",
    description: "Documented internship covering foundational programming in C, microcontrollers, and SDLC-based project building in IoT.",
    category: "IoT and Hardware",
    skills: ["IoT", "C", "Microcontrollers", "SDLC"],
    fileUrl: "/certificates/emertex_completion.jpeg",
  },
  needsDocument("oracle-foundations-associate", "Oracle Certified Foundations Associate", "Artificial Intelligence", "Oracle", undefined, "Foundational Oracle learning covering core technology concepts and structured enterprise-platform awareness."),
  needsDocument("hexart-ai-foundation", "AI Foundation", "Artificial Intelligence", "Hexart", ["AI"], "Introduces core artificial-intelligence concepts, responsible use, and practical AI-assisted problem-solving workflows."),
  needsDocument("hexart-ai-advanced", "AI Advanced", "Artificial Intelligence", "Hexart", ["AI"], "Builds on AI foundations through advanced concepts and applied approaches for evaluating AI-enabled solutions."),
  needsDocument("introduction-to-data-analytics", "Introduction to Data Analytics", "Data Science and Analytics", undefined, ["Data Analytics"], "Introduces data collection, organisation, interpretation, and communicating insights for informed decisions."),
  needsDocument("data-science-analytics", "Data Science and Analytics", "Data Science and Analytics", undefined, ["Data Science", "Analytics"], "Explores the data lifecycle, analytical thinking, and how structured data supports technical problem-solving."),
  needsDocument("ethical-hacking-beginners", "Ethical Hacking for Beginners", "Cybersecurity", undefined, ["Cybersecurity"], "Covers ethical security-testing concepts, common attack surfaces, and responsible security practice."),
  needsDocument("cybersecurity", "Cybersecurity", "Cybersecurity", undefined, ["Cybersecurity"], "Introduces digital-security principles, risk awareness, and foundational practices for protecting systems and information."),
  needsDocument("certificate-of-cybersecurity", "Certificate of Cybersecurity", "Cybersecurity", undefined, ["Cybersecurity"], "A separate cybersecurity record retained pending the original document, with focus area kept distinct from the similarly titled entry."),
  needsDocument("ev-provisional", "EV Provisional Certificate", "Electric Vehicle Technology", undefined, ["EV Technology"], "Records provisional EV-focused learning in charging infrastructure, sustainable mobility, and related technology fundamentals."),
  needsDocument("e-froza", "E-Froza Certificate from College", "NCC and Participation", undefined, undefined, "College participation record retained using its supplied title until the original document confirms the official event name."),
  needsDocument("ncc-camp-1", "NCC Camp Attendance Certificate 1", "NCC and Participation", undefined, undefined, "Attendance record for a distinct NCC camp, recognising participation in organised cadet activities."),
  needsDocument("ncc-camp-2", "NCC Camp Attendance Certificate 2", "NCC and Participation", undefined, undefined, "Separate attendance record for another NCC camp, maintained independently pending the original camp document."),
  needsDocument("national-day-yoga", "National Day of Yoga — Certificate of Participation", "NCC and Participation", undefined, undefined, "Participation record for National Day of Yoga activities, presented as an engagement record rather than a technical credential."),
  needsDocument("aptitude-seventh-sense", "Aptitude Training", "Aptitude and Communication Skills", "Seventh Sense Talent Solutions", undefined, "Training focused on structured reasoning, quantitative aptitude, and approaches useful for technical recruitment preparation."),
  needsDocument("communication-seventh-sense", "Communication Skills Training", "Aptitude and Communication Skills", "Seventh Sense Talent Solutions", undefined, "Training focused on clear professional communication, presenting ideas, and collaborative workplace interaction."),
];

export const certificateCategories: CertificateCategory[] = [
  "Electronics and Embedded Systems",
  "IoT and Hardware",
  "MATLAB and Machine Learning",
  "Artificial Intelligence",
  "Data Science and Analytics",
  "Cloud Computing",
  "Cybersecurity",
  "Electric Vehicle Technology",
  "Aptitude and Communication Skills",
  "NCC and Participation",
  "Academic and General Learning",
];
