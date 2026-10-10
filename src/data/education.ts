// ============================================================
// EDUCATION DATA — Update dates, percentages, or status here.
// ============================================================

export type EducationItem = {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  board?: string;
  period: string;
  percentage?: string;
  status: string;
  description?: string;
  level: "degree" | "diploma" | "secondary" | "school";
};

export const education: EducationItem[] = [
  {
    id: "be-ece",
    degree: "Bachelor of Engineering",
    field: "Electronics and Communication Engineering",
    institution: "MVJ College of Engineering, Bengaluru",
    board: "Visvesvaraya Technological University",
    period: "2023–2026",
    percentage: "CGPA: 6.5",
    status: "Completed in 2026",
    description:
      "Core subjects include Digital Electronics, Microcontrollers, VLSI Design, Communication Systems, Embedded Systems, and Signal Processing.",
    level: "degree",
  },
  {
    id: "diploma-ece",
    degree: "Diploma",
    field: "Electronics and Communication Engineering",
    institution: "Government Polytechnic College, Srinagar",
    period: "2020–2023",
    percentage: "71%",
    status: "Completed",
    description:
      "Three-year diploma covering electronics fundamentals, microcontroller programming, PCB design, and communication systems.",
    level: "diploma",
  },
  {
    id: "class-xii",
    degree: "Class XII (PCMB)",
    institution: "Government Model Higher Secondary School, Dooru",
    period: "2018–2020",
    percentage: "58%",
    status: "Completed",
    level: "secondary",
  },
  {
    id: "class-x",
    degree: "Class X",
    institution: "Army Goodwill School, Qazigund",
    period: "2017",
    percentage: "59%",
    status: "Completed",
    level: "school",
  },
];
