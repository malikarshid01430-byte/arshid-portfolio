// ============================================================
// PROJECTS DATA — Single source of truth for all projects.
// All 10 genuine projects have status "Completed".
// No unverified projects, no dead links.
// ============================================================

export type ProjectCategory =
  | "Embedded Systems"
  | "Electronics"
  | "EV Technology"
  | "Android Development"
  | "AI & Generative AI"
  | "Robotics & IoT"
  | "Software Development";

export type Project = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  problemPurpose: string;
  mainFeatures: string[];
  technologies: string[];
  implementationFocus: string;
  status: "Completed";
  githubUrl: string;   // "" if no public repo exists
  demoUrl: string;     // "" if no live demo exists
  featured: boolean;
  hasImage: boolean;
  category: ProjectCategory;
  categories: ProjectCategory[];
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "solar-solution-air-purifier",
    title: "Solar Solution – Indoor Air Purifier for Urban Areas",
    tagline: "IoT-connected indoor air-quality monitoring and purification system",
    overview:
      "An embedded environmental monitoring and air purification prototype combining real-time gas and dust telemetry, dual-stage filtration, and solar power management.",
    problemPurpose:
      "Urban indoor environments frequently accumulate hazardous particulate matter and volatile gases without occupants noticing. This system automates air quality tracking and triggers mechanical purification.",
    mainFeatures: [
      "Real-time air quality & particulate sensing using MQ135 and optical dust sensors",
      "Ambient temperature and humidity monitoring via DHT11 sensor",
      "Relay-controlled HEPA and activated-carbon fan actuation triggered by threshold logic",
      "16x2 LCD display via I2C for local telemetry readout and audible buzzer alert on high pollution",
      "Solar panel and battery power input integration for sustainable standalone operation",
    ],
    technologies: ["ESP32", "MQ135 Gas Sensor", "Optical Dust Sensor", "DHT11", "HEPA & Carbon Filter", "Relay Module", "LCD I2C", "Solar Panel"],
    implementationFocus:
      "Hardware breadboard circuit assembly, GPIO pin mapping, analog sensor calibration, threshold-based relay actuation logic, and buzzer alerting on ESP32.",
    status: "Completed",
    githubUrl: "",
    demoUrl: "",
    featured: true,
    hasImage: false,
    category: "Embedded Systems",
    categories: ["Embedded Systems", "Robotics & IoT"],
  },
  {
    id: "2",
    slug: "nutrisnap-ai-food-diary",
    title: "NutriSnap – AI Food Diary",
    tagline: "Multimodal AI food diary application using Gemini for nutrition insights",
    overview:
      "An Android application concept that utilizes Gemini multimodal AI to analyze photographed meals and generate structured nutritional summaries and logs.",
    problemPurpose:
      "Traditional dietary logging requires tedious manual food weighing and lookup. NutriSnap streamlines dietary journaling using mobile camera capture and generative AI visual understanding.",
    mainFeatures: [
      "Camera and photo picker interface for capturing meal photos directly in the app",
      "Multimodal vision prompt processing via Google Gemini API",
      "Structured presentation of identified food items and approximate macronutrient breakdown",
      "Chronological meal timeline and journal log interface for daily tracking",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "Gemini API", "Firebase"],
    implementationFocus:
      "Android UI architecture using Jetpack Compose, asynchronous Gemini API request integration, prompt construction for nutritional approximations, and local state management.",
    status: "Completed",
    githubUrl: "",
    demoUrl: "",
    featured: true,
    hasImage: false,
    category: "Android Development",
    categories: ["Android Development", "AI & Generative AI"],
  },
  {
    id: "3",
    slug: "obstacle-avoiding-robot",
    title: "Obstacle-Avoiding Robot with Lane Detector",
    tagline: "Autonomous mobile robot with ultrasonic sensing and lane-following logic",
    overview:
      "An autonomous mobile robotics prototype combining ultrasonic distance measurement for collision prevention with infrared optical sensors for lane tracking.",
    problemPurpose:
      "Explores foundational autonomous mobile robotics, sensor feedback loops, and real-time motor actuation in unstructured environments.",
    mainFeatures: [
      "Front-mounted ultrasonic sensor for real-time obstacle distance measurement",
      "Dual infrared optical sensors for track/lane boundary reflectance detection",
      "H-bridge motor driver control for independent differential steering",
      "Priority-based reactive decision tree (obstacle override over lane tracking)",
    ],
    technologies: ["Arduino / ESP32", "Ultrasonic Sensor (HC-SR04)", "IR Sensors", "L298N Motor Driver", "DC Motors", "C/C++"],
    implementationFocus:
      "Sensor threshold tuning, PWM motor speed regulation, collision avoidance state machine programming, and chassis wiring.",
    status: "Completed",
    githubUrl: "",
    demoUrl: "",
    featured: true,
    hasImage: false,
    category: "Robotics & IoT",
    categories: ["Robotics & IoT", "Embedded Systems"],
  },
  {
    id: "4",
    slug: "namma-santhe-ledger",
    title: "Namma Santhe Ledger",
    tagline: "Digital ledger and transaction tracking application for local market vendors",
    overview:
      "A lightweight Android bookkeeping application designed to help local vendors maintain digital records and monitor everyday transactions with a minimal, accessible UI.",
    problemPurpose:
      "Local market vendors frequently face bookkeeping errors and cash flow miscalculations when relying solely on paper notebooks. This app provides quick digital tracking.",
    mainFeatures: [
      "Fast single-tap income and expense entry logging",
      "Daily and weekly transaction summary views with running totals",
      "Category-based transaction grouping (produce, stall fees, customer credit)",
      "Clean, high-contrast user interface tailored for rapid vendor entry",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "Material 3"],
    implementationFocus:
      "Declarative UI layout with Jetpack Compose, responsive input forms, state preservation, and local data structuring for reliable offline ledger calculations.",
    status: "Completed",
    githubUrl: "",
    demoUrl: "",
    featured: false,
    hasImage: false,
    category: "Android Development",
    categories: ["Android Development", "Software Development"],
  },
  {
    id: "5",
    slug: "aircraft-monitoring-system",
    title: "Aircraft Monitoring System",
    tagline: "Digital electronics monitoring prototype developed during VLSIGuru training",
    overview:
      "An educational digital electronics coursework project exploring sensor telemetry, threshold monitoring, and digital safety logic for aircraft subsystems.",
    problemPurpose:
      "Demonstrates how core digital logic and sensor telemetry process critical parameters to detect subsystem anomalies in aerospace education.",
    mainFeatures: [
      "Multi-input parameter monitoring logic (temperature, pressure, and operational states)",
      "Digital comparison logic triggering warning states when limits are exceeded",
      "Status indicator bus designed with digital design and testability principles",
    ],
    technologies: ["Verilog HDL", "Digital Logic Design", "Simulation Testbenches", "Digital Design"],
    implementationFocus:
      "Writing synthesizable Verilog modules for telemetry processing, creating testbenches for edge-case simulations, and verifying logic operation.",
    status: "Completed",
    githubUrl: "",
    demoUrl: "",
    featured: false,
    hasImage: false,
    category: "Electronics",
    categories: ["Electronics", "Embedded Systems"],
  },
  {
    id: "6",
    slug: "blynk-home-automation",
    title: "Blynk Home Automation",
    tagline: "IoT-based remote appliance monitoring and control prototype",
    overview:
      "An Internet of Things smart-home prototype enabling remote switching and status monitoring of residential electrical appliances via mobile application over Wi-Fi.",
    problemPurpose:
      "Enables convenient, low-cost remote power control and energy management for standard household loads without costly proprietary ecosystems.",
    mainFeatures: [
      "Multi-channel relay module switching isolated AC/DC appliance circuits",
      "Wi-Fi connectivity and telemetry syncing with Blynk cloud servers",
      "Mobile dashboard interface with real-time toggle switches and status feedback",
      "Failsafe offline relay states to prevent unexpected switching during reconnection",
    ],
    technologies: ["ESP32 / NodeMCU", "Blynk IoT Platform", "4-Channel Relay Module", "Wi-Fi", "C/C++"],
    implementationFocus:
      "ESP32 firmware development, Wi-Fi reconnection handling, Blynk virtual pin mapping, relay optocoupler circuit wiring, and dashboard UI configuration.",
    status: "Completed",
    githubUrl: "",
    demoUrl: "",
    featured: false,
    hasImage: false,
    category: "Robotics & IoT",
    categories: ["Robotics & IoT", "Embedded Systems"],
  },
  {
    id: "7",
    slug: "automatic-door-lock",
    title: "Automatic Door Lock",
    tagline: "Embedded access-control prototype featuring automated latch actuation",
    overview:
      "A hardware security and access-control prototype that actuates a mechanical door lock based on valid digital credential input and safety logic.",
    problemPurpose:
      "Replaces physical key locks with a programmable electronic entry system that prevents unauthorized access and provides immediate electronic locking.",
    mainFeatures: [
      "Input credential reader (matrix keypad / digital interface) for passcode verification",
      "Actuator driving circuit (servo motor / solenoid lock) for physical latch engagement",
      "LCD visual confirmation for access granted / access denied notifications",
      "Security timeout and lockout logic following repeated invalid attempts",
    ],
    technologies: ["Arduino", "Keypad Interface", "Servo / Solenoid Driver", "LCD Display", "C/C++"],
    implementationFocus:
      "Microcontroller state machine for passcode authentication, debounce handling for keypad input, actuator pulse timing, and visual user prompts.",
    status: "Completed",
    githubUrl: "",
    demoUrl: "",
    featured: false,
    hasImage: false,
    category: "Electronics",
    categories: ["Electronics", "Embedded Systems"],
  },
  {
    id: "8",
    slug: "health-monitoring-system",
    title: "Health Monitoring System",
    tagline: "Embedded sensor instrumentation prototype for vital parameter telemetry",
    overview:
      "An embedded healthcare instrumentation prototype that acquires pulse rate and body temperature sensor readings and presents real-time telemetry on an LCD screen.",
    problemPurpose:
      "Demonstrates embedded biomedical sensor interfacing and digital signal acquisition for portable educational health monitoring.",
    mainFeatures: [
      "Optical pulse sensor input for real-time pulse rate detection",
      "Temperature sensor interfacing for ambient and skin temperature readings",
      "Local digital readout displaying synchronized vital telemetry",
      "Serial monitor telemetry logging for calibration and signal inspection",
    ],
    technologies: ["ESP32 / Arduino", "Pulse Sensor / MAX30102", "DHT11 / Temperature Sensor", "LCD Display", "C/C++"],
    implementationFocus:
      "Analog and I2C biomedical sensor interfacing, signal filtering to reduce motion noise, LCD refresh synchronization, and safe prototype breadboard wiring.",
    status: "Completed",
    githubUrl: "",
    demoUrl: "",
    featured: false,
    hasImage: false,
    category: "Embedded Systems",
    categories: ["Embedded Systems", "Electronics"],
  },
  {
    id: "9",
    slug: "smart-helmet",
    title: "Smart Helmet",
    tagline: "Embedded safety concept integrating sensor telemetry for two-wheeler riders",
    overview:
      "An embedded rider safety prototype integrating onboard sensor checks and microcontroller logic to verify safety parameters before operating a vehicle.",
    problemPurpose:
      "Two-wheeler riders frequently face severe injury due to non-wearing of helmets or riding under hazardous conditions. This prototype automates safety checks.",
    mainFeatures: [
      "Limit/tactile switch or optical sensing to verify helmet placement",
      "Alcohol vapor sensing to evaluate operator sobriety before ignition signaling",
      "Indicator LEDs and buzzer for immediate rider feedback",
      "Control signal output simulating vehicle ignition enablement",
    ],
    technologies: ["Arduino / ESP32", "MQ-3 Alcohol Sensor", "Touch/Limit Sensors", "Buzzer", "C/C++"],
    implementationFocus:
      "Multi-sensor threshold comparison, ignition interlock control logic, audio-visual alert states, and compact helmet-mountable prototype wiring.",
    status: "Completed",
    githubUrl: "",
    demoUrl: "",
    featured: false,
    hasImage: false,
    category: "Electronics",
    categories: ["Electronics", "Embedded Systems"],
  },
  {
    id: "10",
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    tagline: "Responsive engineering portfolio built with React 18, TypeScript & Tailwind CSS",
    overview:
      "The production personal portfolio website presenting my academic background, verified internships, engineering projects, categorized skills, certificates, and contact links.",
    problemPurpose:
      "Provides recruiters and technical hiring managers with a transparent, fast-loading, structured overview of my hardware, software, and engineering credentials.",
    mainFeatures: [
      "Modular project catalogue with interactive category filters and detailed technical cards",
      "Dedicated Certificates section with structured verification links and manual check transparency",
      "Reverse-chronological experience timeline distinguishing internships from training programs",
      "Dark and light theme toggle with persistent preferences",
      "Semantic HTML5 structure, JSON-LD schema, responsive layouts, and accessibility support",
    ],
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Lucide React", "Radix UI"],
    implementationFocus:
      "Full-stack frontend architecture, data-driven modular structure, responsive CSS design, type-safe data modeling, and performance optimization.",
    status: "Completed",
    githubUrl: "",
    demoUrl: "",
    featured: false,
    hasImage: false,
    category: "Software Development",
    categories: ["Software Development"],
  },
];

// Filter helpers
export const allCategories: ProjectCategory[] = [
  "Embedded Systems",
  "Electronics",
  "EV Technology",
  "Android Development",
  "AI & Generative AI",
  "Robotics & IoT",
  "Software Development",
];
