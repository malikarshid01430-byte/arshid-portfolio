export interface Skill {
  name: string;
  level: number; // 0 to 100 for visual bars
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type: 'sensor' | 'mcu' | 'edge-ai' | 'hardware' | 'cloud' | 'ui' | 'process';
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label: string;
}

export interface ArchitectureDiagram {
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'Embedded & IoT' | 'Electronics & VLSI' | 'AI & Edge Computer Vision' | 'Full Stack Web';
  technologies: string[];
  github?: string;
  demo?: string;
  architecture?: ArchitectureDiagram;
  highlights: string[];
  features: string[];
  technicalChallenges: string[];
  futureImprovements: string[];
  problem?: string;
  solution?: string;
  results?: string[];
  timeline?: string;
  images?: string[];
  research?: string;
  circuitDiagram?: string;
  flowchart?: string;
  codeSnippets?: { language: string; code: string }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  impact: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
  coursework?: string[];
  certifications?: string[];
  achievements?: string[];
  timeline?: string;
  laboratories?: string[];
  technicalSkillsLearned?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    bioShort: string;
    bioLong: string;
    profileImage?: string;
    portfolioUrl: string;
  };
  diploma?: {
    degree: string;
    institution: string;
    location: string;
    period: string;
    percentage: string;
  };
  skillCategories: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
  researchInterests: string[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Arshid Ahmad Malik",
    title: "Embedded Systems Engineer | IoT Developer | Electronics & Communication Engineer | VLSI Enthusiast | Full Stack Developer",
    subtitle: "Electronics and Communication Engineering Graduate",
    email: "malikarshid01430@gmail.com",
    phone: "+91 9682397579",
    location: "Bangalore, Karnataka, India",
    github: "https://github.com/malikarshid01430-byte",
    linkedin: "https://www.linkedin.com/in/arshid-ahmad-malik/",
    resumeUrl: "/api/resume",
    bioShort: "Electronics and Communication Engineer with practical experience in Embedded Systems, IoT, AI powered applications, Android Development, PCB Design and Full Stack Development. Seeking full time opportunities to contribute to innovative engineering teams while continuously learning advanced technologies.",
    bioLong: "Electronics and Communication Engineer with practical experience in Embedded Systems, IoT, AI powered applications, Android Development, PCB Design and Full Stack Development. Seeking full time opportunities to contribute to innovative engineering teams while continuously learning advanced technologies. Passionate about building intelligent systems that bridge hardware and software, from sensor networks to edge AI deployments.",
    profileImage: "/images/profile.jpg",
    portfolioUrl: "https://arshid-portfolio.vercel.app"
  },
  diploma: {
    degree: "Diploma in Electronics and Communication Engineering",
    institution: "Government Polytechnic College Srinagar",
    location: "Srinagar, Kashmir",
    period: "2020 - 2023",
    percentage: "71%"
  },
  skillCategories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "Kotlin", level: 75 },
        { name: "Verilog", level: 75 }
      ]
    },
    {
      title: "Embedded Systems",
      skills: [
        { name: "ESP32", level: 88 },
        { name: "ESP8266", level: 85 },
        { name: "Arduino", level: 90 },
        { name: "STM32", level: 78 },
        { name: "8051 Microcontroller", level: 85 },
        { name: "Embedded C", level: 88 },
        { name: "Sensors & Actuators", level: 85 },
        { name: "Microcontrollers", level: 88 }
      ]
    },
    {
      title: "IoT & Connectivity",
      skills: [
        { name: "MQTT", level: 82 },
        { name: "Blynk", level: 80 },
        { name: "WiFi Protocols", level: 85 },
        { name: "Bluetooth/BLE", level: 78 },
        { name: "Cloud Integration", level: 75 },
        { name: "IoT Architecture", level: 80 }
      ]
    },
    {
      title: "Android Development",
      skills: [
        { name: "Jetpack Compose", level: 80 },
        { name: "Android Studio", level: 82 },
        { name: "Material Design", level: 78 },
        { name: "Kotlin", level: 75 }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Google Gemini", level: 80 },
        { name: "Prompt Engineering", level: 82 },
        { name: "Computer Vision", level: 75 },
        { name: "Edge AI", level: 78 },
        { name: "Machine Learning", level: 75 }
      ]
    },
    {
      title: "VLSI & Digital Design",
      skills: [
        { name: "RTL Design", level: 75 },
        { name: "Verilog HDL", level: 75 },
        { name: "Digital Electronics", level: 90 },
        { name: "CMOS Design", level: 70 },
        { name: "FPGA", level: 72 },
        { name: "EDA Tools", level: 70 }
      ]
    },
    {
      title: "PCB Design",
      skills: [
        { name: "EasyEDA", level: 85 },
        { name: "KiCad", level: 78 },
        { name: "Proteus", level: 80 },
        { name: "Circuit Design", level: 85 }
      ]
    },
    {
      title: "Tools & Software",
      skills: [
        { name: "MATLAB", level: 80 },
        { name: "Simulink", level: 78 },
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 88 }
      ]
    },
    {
      title: "Full Stack Development",
      skills: [
        { name: "React", level: 75 },
        { name: "Next.js", level: 70 },
        { name: "Node.js", level: 72 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 68 },
        { name: "Firebase", level: 75 },
        { name: "REST APIs", level: 75 },
        { name: "Tailwind CSS", level: 80 }
      ]
    }
  ],
  projects: [
    {
      id: "solar-powered-air-purifier",
      title: "Solar Powered Indoor Air Purifier",
      subtitle: "Sustainable air purification system powered by renewable energy",
      description: "Designed and built a solar-powered air purifier using ESP32 for smart monitoring and control. The system uses MQ sensors for air quality detection, DHT11 for temperature/humidity monitoring, and an LCD display for real-time data visualization.",
      longDescription: "This project addresses the need for sustainable air purification in remote areas. The system is powered by a solar panel with battery backup, ensuring continuous operation. The ESP32 microcontroller monitors air quality using MQ sensors, temperature and humidity using DHT11, and displays real-time data on an LCD. The Arduino IDE was used for programming, implementing smart power management to optimize battery usage.",
      category: "Embedded & IoT",
      technologies: ["ESP32", "MQ Sensors", "DHT11", "LCD", "Solar Panel", "Battery", "Arduino IDE"],
      github: "https://github.com/malikarshid01430-byte",
      highlights: [
        "Implemented real-time air quality monitoring with MQ sensors",
        "Solar-powered with intelligent battery management system",
        "LCD display for live temperature, humidity, and air quality data",
        "Low-power design optimized for continuous outdoor operation"
      ],
      features: [
        "Real-time air quality monitoring",
        "Solar-powered with battery backup",
        "Temperature and humidity sensing",
        "LCD display interface",
        "Smart power management"
      ],
      technicalChallenges: [
        "Optimizing power consumption for 24/7 operation",
        "Calibrating MQ sensors for accurate air quality readings",
        "Designing efficient solar charging circuit"
      ],
      futureImprovements: [
        "Add IoT connectivity for remote monitoring",
        "Implement mobile app for data visualization",
        "Add air purifier fan control based on air quality"
      ],
      problem: "Air pollution in remote areas lacks access to continuous air quality monitoring and purification due to unreliable power sources.",
      solution: "Designed a solar-powered system with battery backup using ESP32 for intelligent monitoring and control, ensuring 24/7 operation without grid power.",
      results: [
        "Achieved 24/7 continuous operation with solar power and battery management",
        "Real-time air quality monitoring with MQ sensors",
        "Successful deployment of low-power embedded system"
      ],
      timeline: "4 weeks"
    },
    {
      id: "smart-helmet",
      title: "Smart Helmet using ESP32",
      subtitle: "Safety helmet with alcohol detection and accident prevention",
      description: "Developed a smart helmet system using ESP32 for alcohol detection and helmet compliance. The system uses MQ3 sensor for alcohol detection, relay for vehicle ignition control, and helmet detection mechanism to ensure rider safety.",
      longDescription: "The Smart Helmet project focuses on road safety by preventing drunk driving and ensuring helmet usage. The MQ3 alcohol sensor detects alcohol consumption and prevents vehicle ignition through a relay mechanism. The system includes helmet detection to ensure the rider is wearing the helmet before the vehicle can start. ESP32 microcontroller processes sensor data and controls the relay accordingly.",
      category: "Embedded & IoT",
      technologies: ["ESP32", "MQ3", "Relay", "Helmet Detection", "Safety Systems"],
      github: "https://github.com/malikarshid01430-byte",
      highlights: [
        "Alcohol detection using MQ3 sensor with high accuracy",
        "Helmet detection mechanism for compliance enforcement",
        "Relay-based vehicle ignition control system",
        "Real-time monitoring and alert system"
      ],
      features: [
        "Alcohol detection and prevention",
        "Helmet compliance verification",
        "Vehicle ignition control",
        "Safety alert system",
        "Easy installation in existing helmets"
      ],
      technicalChallenges: [
        "Calibrating MQ3 sensor for accurate alcohol detection",
        "Designing reliable helmet detection mechanism",
        "Ensuring fail-safe operation of relay control"
      ],
      futureImprovements: [
        "Add GPS for accident location tracking",
        "Implement GSM module for emergency alerts",
        "Add Bluetooth connectivity for mobile app integration"
      ],
      problem: "Road accidents caused by drunk driving and non-compliance with helmet usage remain major safety concerns.",
      solution: "Built an ESP32-based system with MQ3 alcohol sensor and helmet detection mechanism to prevent vehicle ignition when safety protocols are violated.",
      results: [
        "Successfully prevented drunk driving incidents",
        "Enforced 100% helmet compliance",
        "Real-time alert system for safety violations"
      ],
      timeline: "3 weeks"
    },
    {
      id: "student-performance-report",
      title: "Student Performance Android App using Gemini AI",
      subtitle: "Android app for tracking and analyzing student academic performance",
      description: "Developed an Android application using Android Studio, Kotlin, and Jetpack Compose for generating and managing student performance reports. The app provides comprehensive analytics and visualization of student academic data.",
      longDescription: "This Android application was developed during my internship at MindMatrix using Generative AI concepts. The app helps educators and students track academic performance through intuitive dashboards and reports. Built with modern Android development practices using Kotlin and Jetpack Compose, the app features clean architecture, smooth animations, and an intuitive user interface. Google Gemini AI was integrated for intelligent insights and recommendations.",
      category: "Full Stack Web",
      technologies: ["Android Studio", "Kotlin", "Jetpack Compose", "Google Gemini", "Generative AI"],
      github: "https://github.com/malikarshid01430-byte",
      highlights: [
        "Built with modern Android architecture using Jetpack Compose",
        "Integrated Google Gemini AI for intelligent insights",
        "Comprehensive performance analytics and visualization",
        "Clean and intuitive user interface design"
      ],
      features: [
        "Student performance tracking",
        "Automated report generation",
        "AI-powered insights using Google Gemini",
        "Data visualization and analytics",
        "Multi-student management"
      ],
      technicalChallenges: [
        "Implementing complex UI with Jetpack Compose",
        "Integrating Google Gemini API for AI features",
        "Optimizing app performance with large datasets"
      ],
      futureImprovements: [
        "Add cloud sync for data backup",
        "Implement machine learning for performance prediction",
        "Add parent portal for monitoring"
      ],
      problem: "Educators need efficient tools to track and analyze student performance without manual paperwork.",
      solution: "Developed an Android app with AI-powered analytics using Google Gemini to automate performance tracking and provide actionable insights.",
      results: [
        "Reduced report generation time by 70%",
        "Improved accuracy of performance tracking",
        "Positive feedback from educators and students"
      ],
      timeline: "3 months"
    },
    {
      id: "iot-home-automation",
      title: "IoT Home Automation",
      subtitle: "Smart home control system with remote monitoring",
      description: "Developed a comprehensive IoT-based home automation system using ESP8266 for wireless connectivity. The system controls home appliances via relays and provides remote monitoring and control through the Blynk app.",
      longDescription: "This IoT Home Automation project enables users to control home appliances remotely using their smartphones. The ESP8266 microcontroller provides Wi-Fi connectivity, allowing communication with the Blynk cloud platform. Users can monitor and control appliances from anywhere in the world through the Blynk mobile app. The system includes relay modules for switching appliances and sensors for environmental monitoring.",
      category: "Embedded & IoT",
      technologies: ["ESP8266", "Relay", "Blynk", "WiFi", "IoT", "Mobile App"],
      github: "https://github.com/malikarshid01430-byte",
      highlights: [
        "Remote control of home appliances via Blynk app",
        "Real-time monitoring of device status",
        "ESP8266-based Wi-Fi connectivity",
        "Scalable architecture for multiple devices"
      ],
      features: [
        "Remote appliance control",
        "Real-time status monitoring",
        "Scheduled automation",
        "Energy consumption tracking",
        "Mobile app interface"
      ],
      technicalChallenges: [
        "Ensuring reliable Wi-Fi connectivity",
        "Implementing secure communication protocols",
        "Designing intuitive mobile app interface"
      ],
      futureImprovements: [
        "Add voice control integration",
        "Implement AI-based automation suggestions",
        "Add energy analytics dashboard"
      ],
      problem: "Traditional home automation systems are expensive and difficult to install, limiting adoption in average households.",
      solution: "Built a cost-effective IoT system using ESP8266 with Blynk cloud platform for remote control and monitoring of home appliances via smartphone.",
      results: [
        "Successfully controlled 8+ home appliances remotely",
        "Achieved 99% reliability in command execution",
        "Reduced automation cost by 70% compared to commercial solutions"
      ],
      timeline: "5 weeks"
    },
    {
      id: "obstacle-avoiding-robot",
      title: "Obstacle Avoiding Robot",
      subtitle: "Autonomous robot with intelligent path navigation",
      description: "Built an autonomous robot using Arduino that can avoid obstacles and detect lanes for path following. The system uses ultrasonic sensors for obstacle detection and IR sensors for lane detection, controlled by a motor driver for precise movement.",
      longDescription: "This project demonstrates autonomous navigation capabilities using multiple sensors. The robot uses ultrasonic sensors to detect obstacles in its path and automatically changes direction to avoid collisions. Additionally, IR sensors enable lane detection functionality, allowing the robot to follow specific paths. The motor driver provides precise control over the robot's movement, enabling smooth navigation in complex environments.",
      category: "AI & Edge Computer Vision",
      technologies: ["Arduino", "Ultrasonic Sensor", "IR Sensors", "Motor Driver", "Autonomous Navigation"],
      github: "https://github.com/malikarshid01430-byte",
      highlights: [
        "Dual sensor system for obstacle avoidance and lane detection",
        "Real-time path planning and navigation",
        "Smooth motor control for precise movement",
        "Robust algorithm for complex environment navigation"
      ],
      features: [
        "Obstacle detection and avoidance",
        "Lane detection and following",
        "Autonomous navigation",
        "Real-time sensor processing",
        "Adjustable speed control"
      ],
      technicalChallenges: [
        "Synchronizing multiple sensor inputs for decision making",
        "Tuning PID controller for smooth motor movement",
        "Optimizing sensor placement for maximum coverage"
      ],
      futureImprovements: [
        "Add camera for computer vision-based navigation",
        "Implement machine learning for path optimization",
        "Add wireless control via mobile app"
      ],
      problem: "Autonomous robots need reliable obstacle detection and path following capabilities for navigation in dynamic environments.",
      solution: "Integrated ultrasonic sensors for obstacle detection and IR sensors for lane detection with Arduino-based decision making and motor control.",
      results: [
        "Successfully navigated around obstacles with 95% accuracy",
        "Maintained lane following with minimal deviation",
        "Real-time sensor processing and decision making"
      ],
      timeline: "3 weeks"
    },
    {
      id: "automatic-door-lock",
      title: "Automatic Door Lock",
      subtitle: "RFID-based secure access control system",
      description: "Designed an automatic door lock system using ESP32 with RFID authentication. The system uses RFID cards for secure access control and a servo motor for door lock mechanism, providing keyless entry solution.",
      longDescription: "This Automatic Door Lock system provides secure, keyless access control using RFID technology. The ESP32 microcontroller reads RFID card data and authenticates against stored credentials. Upon successful authentication, a servo motor operates the door lock mechanism. The system can store multiple RFID cards and maintains an access log for security monitoring.",
      category: "Embedded & IoT",
      technologies: ["ESP32", "RFID", "Servo", "Access Control", "Security System"],
      github: "https://github.com/malikarshid01430-byte",
      highlights: [
        "RFID-based secure authentication system",
        "Servo motor control for door lock mechanism",
        "Multiple card support with access logging",
        "ESP32-based wireless connectivity"
      ],
      features: [
        "RFID card authentication",
        "Automatic door lock/unlock",
        "Access log maintenance",
        "Multiple user support",
        "Audible and visual feedback"
      ],
      technicalChallenges: [
        "Ensuring reliable RFID card reading",
        "Implementing secure authentication protocol",
        "Designing robust servo control mechanism"
      ],
      futureImprovements: [
        "Add fingerprint sensor for biometric authentication",
        "Implement mobile app for remote access management",
        "Add camera for visitor identification"
      ],
      problem: "Traditional door locks are vulnerable to unauthorized access and key duplication, compromising security.",
      solution: "Implemented RFID-based access control system with ESP32 for secure authentication and servo-controlled locking mechanism.",
      results: [
        "Eliminated key-based security vulnerabilities",
        "Supported 50+ RFID cards with unique access rights",
        "Maintained access log for security auditing"
      ],
      timeline: "3 weeks"
    },
    {
      id: "health-monitoring-system",
      title: "Health Monitoring System",
      subtitle: "Real-time patient health tracking and alert system",
      description: "Designed a health monitoring system using Arduino and sensors for tracking vital signs. The system monitors heart rate, temperature, and other health parameters with real-time alerts for abnormal readings.",
      longDescription: "This Health Monitoring System provides continuous tracking of patient vital signs using various sensors. The Arduino microcontroller processes data from heart rate sensors, temperature sensors, and other health monitoring devices. The system provides real-time alerts when readings exceed normal thresholds and can send notifications to caregivers. The data can be logged for historical analysis and trend monitoring.",
      category: "Embedded & IoT",
      technologies: ["Arduino", "Heart Rate Sensor", "Temperature Sensor", "LCD Display", "Alert System"],
      github: "https://github.com/malikarshid01430-byte",
      highlights: [
        "Real-time vital sign monitoring",
        "Automatic alert system for abnormal readings",
        "Data logging for historical analysis",
        "User-friendly interface for patients and caregivers"
      ],
      features: [
        "Heart rate monitoring",
        "Body temperature tracking",
        "Real-time alerts and notifications",
        "Data logging and analysis",
        "Multiple patient support"
      ],
      technicalChallenges: [
        "Ensuring accurate sensor readings",
        "Designing reliable alert mechanism",
        "Optimizing power consumption for portable use"
      ],
      futureImprovements: [
        "Add IoT connectivity for remote monitoring",
        "Implement mobile app for caregivers",
        "Add more health parameters monitoring"
      ],
      problem: "Continuous health monitoring is essential for patients with chronic conditions but requires expensive hospital equipment.",
      solution: "Built a cost-effective health monitoring system using Arduino and sensors for continuous vital sign tracking with automatic alerts.",
      results: [
        "Achieved 95% accuracy in vital sign measurement",
        "Reduced monitoring cost by 80% compared to hospital equipment",
        "Successfully tested with multiple users"
      ],
      timeline: "4 weeks"
    }
  ],
  experience: [
    {
      role: "Android App Development Intern",
      company: "MindMatrix Inc.",
      location: "Remote",
      period: "February 2026 - May 2026",
      description: [
        "Developed Android applications using Kotlin and Jetpack Compose",
        "Integrated Google Gemini API for intelligent features and insights",
        "Built Student Performance Report Application with modern Android architecture",
        "Collaborated with team on app design and feature implementation"
      ],
      responsibilities: [
        "Developed Android applications using Kotlin and Jetpack Compose",
        "Integrated Google Gemini API for intelligent features and insights",
        "Built Student Performance Report Application with modern Android architecture",
        "Collaborated with team on app design and feature implementation"
      ],
      technologies: ["Android Studio", "Kotlin", "Jetpack Compose", "Google Gemini API", "Generative AI"],
      achievements: [
        "Successfully delivered a fully functional Android application",
        "Integrated AI-powered insights using Google Gemini",
        "Received positive feedback from team members"
      ],
      impact: "Contributed to the development of an AI-powered educational tool that helps students track their academic performance effectively."
    },
    {
      role: "IoT Systems Intern",
      company: "Emertex",
      location: "On-site",
      period: "March 2026 - April 2026",
      description: [
        "Worked with ESP32 and Arduino for IoT device development",
        "Implemented MQTT protocols for device communication",
        "Integrated various sensors for data acquisition",
        "Developed firmware and cloud dashboards for monitoring"
      ],
      responsibilities: [
        "Worked with ESP32 and Arduino for IoT device development",
        "Implemented MQTT protocols for device communication",
        "Integrated various sensors for data acquisition",
        "Developed firmware and cloud dashboards for monitoring"
      ],
      technologies: ["ESP32", "Arduino", "MQTT", "Sensors", "Firmware", "Cloud Dashboards"],
      achievements: [
        "Successfully deployed 3 IoT systems",
        "Achieved 99% reliability in sensor data transmission",
        "Optimized power consumption by 30%"
      ],
      impact: "Improved IoT system reliability and efficiency, enabling real-time monitoring and control of industrial equipment."
    },
    {
      role: "VLSI Design for Testability (DFT) Intern",
      company: "VLSIGuru",
      location: "Online",
      period: "February 2026 - May 2026",
      description: [
        "Learned Verilog and RTL Design fundamentals",
        "Studied DFT concepts including Scan Chain, ATPG, and Boundary Scan",
        "Gained hands-on experience with digital design and verification",
        "Implemented test structures for VLSI circuits"
      ],
      responsibilities: [
        "Learned Verilog and RTL Design fundamentals",
        "Studied DFT concepts including Scan Chain, ATPG, and Boundary Scan",
        "Gained hands-on experience with digital design and verification",
        "Implemented test structures for VLSI circuits"
      ],
      technologies: ["Verilog", "RTL", "Scan Chain", "ATPG", "Boundary Scan", "DFT", "Digital Design"],
      achievements: [
        "Completed 5 VLSI design projects",
        "Achieved 95% test coverage on implemented circuits",
        "Mastered DFT tools and methodologies"
      ],
      impact: "Enhanced semiconductor testing efficiency by implementing comprehensive DFT strategies, reducing test time by 25%."
    },
    {
      role: "Artificial Intelligence Intern",
      company: "CODEC Technologies",
      location: "Remote",
      period: "August 2025 - September 2025",
      description: [
        "Worked on machine learning projects using Python",
        "Performed data preprocessing and feature engineering",
        "Implemented classification models for prediction tasks",
        "Gained experience in model training and evaluation"
      ],
      responsibilities: [
        "Worked on machine learning projects using Python",
        "Performed data preprocessing and feature engineering",
        "Implemented classification models for prediction tasks",
        "Gained experience in model training and evaluation"
      ],
      technologies: ["Python", "Machine Learning", "Data Preprocessing", "Classification Models", "Feature Engineering"],
      achievements: [
        "Built 3 machine learning models with 85%+ accuracy",
        "Improved data processing pipeline efficiency by 40%",
        "Presented findings to senior data scientists"
      ],
      impact: "Contributed to predictive analytics solutions that improved decision-making processes and reduced operational costs."
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering",
      institution: "MVJ College of Engineering",
      location: "Bangalore, Karnataka, India",
      period: "2022 to 2026",
      details: [
        "Electronics and Communication Engineering",
        "Visvesvaraya Technological University (VTU)"
      ],
      coursework: [
        "Microcontrollers and Embedded Systems",
        "Digital Electronics and Logic Design",
        "VLSI Design and FPGA Implementation",
        "Communication Systems",
        "Signal Processing",
        "PCB Design and Fabrication",
        "IoT and Wireless Sensor Networks",
        "Computer Architecture"
      ],
      timeline: "2022 - 2026",
      laboratories: [
        "Embedded Systems Laboratory",
        "VLSI Design Laboratory",
        "Communication Systems Laboratory",
        "PCB Design and Fabrication Lab",
        "IoT and Sensor Networks Lab"
      ],
      technicalSkillsLearned: [
        "Embedded C Programming",
        "RTOS and Firmware Development",
        "Verilog HDL and RTL Design",
        "MATLAB and Simulink",
        "PCB Design using EasyEDA and KiCad",
        "IoT Protocol Implementation"
      ]
    },
    {
      degree: "Diploma",
      institution: "Government Polytechnic College Srinagar",
      location: "Srinagar, Kashmir",
      period: "2020 - 2023",
      details: [
        "Electronics and Communication Engineering",
        "Percentage: 71%"
      ]
    },
    {
      degree: "Higher Secondary (Class XII)",
      institution: "Government Model Higher Secondary School",
      location: "Dooru, Anantnag, Jammu and Kashmir",
      period: "2019 to 2020",
      details: [
        "Board: JKBOSE",
        "Percentage: 57%",
        "Stream: Science",
        "Subjects: Physics, Chemistry, Mathematics, English, Computer Science"
      ]
    },
    {
      degree: "Secondary School (Class X)",
      institution: "Army Goodwill School",
      location: "Wuzur, Qazigund, Anantnag, Jammu and Kashmir",
      period: "2017 to 2018",
      details: [
        "Board: JKBOSE",
        "Percentage: 58%"
      ]
    }
  ],
  certifications: [
    { name: "NPTEL Elite - Cloud Computing", issuer: "NPTEL", date: "2024", link: "https://nptel.ac.in" },
    { name: "NPTEL Elite - Classics of Neuroscience", issuer: "NPTEL", date: "2024", link: "https://nptel.ac.in" },
    { name: "NPTEL Elite - Microsensors and Nanosensors", issuer: "NPTEL", date: "2024", link: "https://nptel.ac.in" },
    { name: "Oracle Certified Foundations Associate", issuer: "Oracle", date: "2024", link: "https://oracle.com" },
    { name: "Classification Methods with Machine Learning", issuer: "MathWorks", date: "2024", link: "https://mathworks.com" },
    { name: "Machine Learning with MATLAB", issuer: "MathWorks", date: "2024", link: "https://mathworks.com" },
    { name: "MATLAB Onramp", issuer: "MathWorks", date: "2024", link: "https://mathworks.com" },
    { name: "Introduction to IoT", issuer: "Cisco", date: "2024", link: "https://cisco.com" },
    { name: "Introduction to Data Analytics", issuer: "Cisco", date: "2024", link: "https://cisco.com" },
    { name: "Ethical Hacking for Beginners", issuer: "SkillUp by Simplilearn", date: "2024", link: "https://simplilearn.com" },
    { name: "AI Foundation", issuer: "Hexagon", date: "2024", link: "https://hexagon.com" },
    { name: "AI Advanced", issuer: "Hexagon", date: "2024", link: "https://hexagon.com" },
    { name: "AI for Beginners", issuer: "HP LIFE", date: "2024", link: "https://hp.com/life" },
    { name: "AI for Business Professionals", issuer: "HP LIFE", date: "2024", link: "https://hp.com/life" },
    { name: "Data Science and Analytics", issuer: "HP LIFE", date: "2024", link: "https://hp.com/life" },
    { name: "Arduino Training", issuer: "EduPyramids", date: "2024", link: "https://edupyramids.com" },
    { name: "Agentic AI vs Generative AI", issuer: "YHills", date: "2024", link: "https://yhills.com" },
    { name: "AI Tools and ChatGPT Workshop", issuer: "BEX10", date: "2024", link: "https://bex10.com" },
    { name: "Cyber Security", issuer: "Skill India", date: "2024", link: "https://skillindia.gov.in" },
    { name: "Financial Skills", issuer: "Skill India", date: "2024", link: "https://skillindia.gov.in" },
    { name: "Deloitte Cyber Job Simulation", issuer: "Deloitte", date: "2024", link: "https://deloitte.com" }
  ],
  achievements: [
    { title: "NCC A Certificate", description: "National Cadet Corps 'A' Certificate", date: "2021" },
    { title: "Technical Workshops - Artificial Intelligence", description: "Participated in AI technical workshop", date: "2024" },
    { title: "Technical Workshops - IoT", description: "Participated in IoT technical workshop", date: "2024" },
    { title: "Technical Workshops - Salesforce", description: "Participated in Salesforce technical workshop", date: "2024" },
    { title: "Technical Workshops - ChatGPT", description: "Participated in ChatGPT and AI tools workshop", date: "2024" },
    { title: "International Day of Yoga Participation", description: "Participated in International Day of Yoga event", date: "2023" },
    { title: "Endeavour Competitive Examination Qualifier", description: "Qualified Endeavour Competitive Examination", date: "2022" }
  ],
  researchInterests: [
    "Embedded Systems and IoT Applications",
    "VLSI Design and FPGA Implementation",
    "Edge AI and TinyML for Embedded Devices",
    "Wireless Communication and Sensor Networks",
    "Digital System Design and Verification",
    "Android Development and Mobile Applications"
  ]
};