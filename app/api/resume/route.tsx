import { NextResponse } from "next/server";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { portfolioData } from "@/app/data/portfolio";

// ─── Styles ──────────────────────────────────────────────────────────────────
const S = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 8.5,
    lineHeight: 1.42,
    color: "#111827",
    paddingTop: 30,
    paddingBottom: 28,
    paddingHorizontal: 36,
    backgroundColor: "#ffffff",
  },
  // Header
  header: { marginBottom: 10, paddingBottom: 8, borderBottom: "1.5 solid #1d4ed8" },
  name: { fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 2 },
  headline: { fontSize: 9.5, color: "#334155", marginBottom: 5 },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 7.5,
    color: "#475569",
    gap: 0,
  },
  contactSep: { color: "#94a3b8", marginHorizontal: 5 },
  // Sections
  section: { marginBottom: 9 },
  sectionTitle: {
    fontSize: 8,
    fontWeight: 700,
    color: "#1d4ed8",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 4,
    paddingBottom: 2,
    borderBottom: "0.5 solid #dbeafe",
  },
  // Text blocks
  bodyText: { fontSize: 8.5, color: "#334155", lineHeight: 1.45 },
  // Skills
  skillsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 4 },
  skillChip: {
    fontSize: 7.5,
    color: "#1e40af",
    backgroundColor: "#eff6ff",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    border: "0.5 solid #bfdbfe",
    marginBottom: 2,
  },
  skillCategoryLabel: {
    fontSize: 7,
    fontWeight: 700,
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 2,
    marginTop: 3,
  },
  // Items (experience / projects / education)
  item: { marginBottom: 7 },
  itemHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 1,
  },
  itemTitle: { fontSize: 9, fontWeight: 700, color: "#0f172a" },
  itemSubtitle: { fontSize: 8, color: "#475569", marginBottom: 1 },
  itemPeriod: { fontSize: 7.5, color: "#64748b" },
  bullet: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 2,
  },
  bulletDot: { fontSize: 8.5, color: "#1d4ed8", marginRight: 4, marginTop: 0.5 },
  bulletText: { fontSize: 8, color: "#334155", lineHeight: 1.38, flex: 1 },
  techLine: { fontSize: 7.5, color: "#475569", marginTop: 2 },
  // Impact callout
  impactBox: {
    backgroundColor: "#f0fdf4",
    border: "0.5 solid #bbf7d0",
    borderRadius: 3,
    padding: 4,
    marginTop: 3,
  },
  impactText: { fontSize: 7.5, color: "#166534" },
  // Education status badge
  statusBadge: {
    fontSize: 7,
    color: "#0369a1",
    backgroundColor: "#e0f2fe",
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
    border: "0.5 solid #bae6fd",
  },
  // Footer
  footer: {
    marginTop: 8,
    paddingTop: 5,
    borderTop: "0.5 solid #e5e7eb",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: { fontSize: 7, color: "#94a3b8" },
  footerLink: { fontSize: 7, color: "#1d4ed8" },
  // Two-column skills layout
  twoCol: { flexDirection: "row", gap: 12 },
  col: { flex: 1 },
});

// ─── Bullet helper ────────────────────────────────────────────────────────────
function Bullet({ text }: { text: string }) {
  return (
    <View style={S.bullet}>
      <Text style={S.bulletDot}>•</Text>
      <Text style={S.bulletText}>{text}</Text>
    </View>
  );
}

// ─── Section title helper ─────────────────────────────────────────────────────
function SectionHead({ children }: { children: string }) {
  return <Text style={S.sectionTitle}>{children}</Text>;
}

// ─── Core skill groups (ATS-optimised, readable) ──────────────────────────────
const coreSkillGroups = [
  {
    label: "Programming",
    skills: "C, C++, Python, Java, JavaScript, TypeScript, Kotlin, Verilog",
  },
  {
    label: "Embedded & IoT",
    skills: "ESP32, ESP8266, Arduino, STM32, 8051, Embedded C, MQTT, Blynk, WiFi, BLE",
  },
  {
    label: "VLSI & Digital Design",
    skills: "RTL Design, Verilog HDL, FPGA, CMOS, EDA Tools, DFT, ATPG, Scan Chain",
  },
  {
    label: "AI / ML",
    skills: "Machine Learning, Edge AI, Computer Vision, Google Gemini, Prompt Engineering",
  },
  {
    label: "PCB & Hardware",
    skills: "EasyEDA, KiCad, Proteus, PCB Layout, Circuit Design, MATLAB, Simulink",
  },
  {
    label: "Mobile & Web",
    skills: "Android (Jetpack Compose), React, Next.js, Node.js, Firebase, REST APIs, Tailwind CSS",
  },
  {
    label: "Tools & Platforms",
    skills: "Git, GitHub, VS Code, Android Studio, Arduino IDE, Linux",
  },
];

// ─── Professional summary ─────────────────────────────────────────────────────
const summary =
  "Electronics and Communication Engineer pursuing B.E. at MVJ College of Engineering (VTU), " +
  "expected graduation May 2026. Hands-on experience in Embedded Systems, IoT, VLSI/DFT, " +
  "Android Development, and AI-powered applications through four industry internships. " +
  "Proficient in C, C++, Python, Verilog, Kotlin, and full-stack web technologies. " +
  "Seeking a full-time engineering role in Embedded Systems, IoT, or related disciplines.";

// ─── Document component ───────────────────────────────────────────────────────
function ResumeDocument() {
  const { personalInfo, projects, experience, education, certifications, achievements } =
    portfolioData;

  return (
    <Document
      title={`${personalInfo.name} — Resume`}
      author={personalInfo.name}
      subject="Electronics and Communication Engineering Resume"
      keywords="Embedded Systems, IoT, VLSI, ESP32, Arduino, Android, React, Edge AI, FPGA"
      creator={personalInfo.name}
    >
      <Page size="A4" style={S.page}>
        {/* ── HEADER ── */}
        <View style={S.header}>
          <Text style={S.name}>{personalInfo.name}</Text>
          <Text style={S.headline}>
            Electronics &amp; Communication Engineer | Embedded Systems | IoT | VLSI | Android | Full Stack
          </Text>
          <View style={S.contactRow}>
            <Text>{personalInfo.email}</Text>
            <Text style={S.contactSep}>|</Text>
            <Text>{personalInfo.phone}</Text>
            <Text style={S.contactSep}>|</Text>
            <Text>{personalInfo.location}</Text>
            <Text style={S.contactSep}>|</Text>
            <Text>{personalInfo.linkedin.replace("https://", "")}</Text>
            <Text style={S.contactSep}>|</Text>
            <Text>{personalInfo.github.replace("https://", "")}</Text>
            <Text style={S.contactSep}>|</Text>
            <Text>{personalInfo.portfolioUrl.replace("https://", "")}</Text>
          </View>
        </View>

        {/* ── PROFESSIONAL SUMMARY ── */}
        <View style={S.section}>
          <SectionHead>Professional Summary</SectionHead>
          <Text style={S.bodyText}>{summary}</Text>
        </View>

        {/* ── TECHNICAL SKILLS ── */}
        <View style={S.section}>
          <SectionHead>Technical Skills</SectionHead>
          {coreSkillGroups.map((grp) => (
            <View key={grp.label} style={{ marginBottom: 3 }}>
              <Text style={S.skillCategoryLabel}>{grp.label}</Text>
              <Text style={S.bodyText}>{grp.skills}</Text>
            </View>
          ))}
        </View>

        {/* ── PROFESSIONAL EXPERIENCE ── */}
        <View style={S.section}>
          <SectionHead>Professional Experience</SectionHead>
          {experience.map((exp, i) => (
            <View key={i} style={S.item}>
              <View style={S.itemHeaderRow}>
                <Text style={S.itemTitle}>{exp.role}</Text>
                <Text style={S.itemPeriod}>{exp.period}</Text>
              </View>
              <Text style={S.itemSubtitle}>
                {exp.company} — {exp.location}
              </Text>
              {exp.responsibilities.slice(0, 3).map((r, j) => (
                <Bullet key={j} text={r} />
              ))}
              {exp.impact ? (
                <View style={S.impactBox}>
                  <Text style={S.impactText}>Impact: {exp.impact}</Text>
                </View>
              ) : null}
              <Text style={S.techLine}>
                Technologies: {exp.technologies.slice(0, 7).join(", ")}
              </Text>
            </View>
          ))}
        </View>

        {/* ── PROJECTS ── */}
        <View style={S.section}>
          <SectionHead>Projects</SectionHead>
          {projects.slice(0, 4).map((p, i) => (
            <View key={i} style={S.item}>
              <View style={S.itemHeaderRow}>
                <Text style={S.itemTitle}>{p.title}</Text>
                {p.timeline ? <Text style={S.itemPeriod}>{p.timeline}</Text> : null}
              </View>
              <Text style={S.itemSubtitle}>{p.subtitle}</Text>
              <Text style={[S.bodyText, { marginTop: 2 }]}>
                {p.longDescription?.slice(0, 200)}
              </Text>
              {p.results?.slice(0, 2).map((r, j) => (
                <Bullet key={j} text={r} />
              ))}
              <Text style={S.techLine}>
                Stack: {p.technologies.slice(0, 6).join(", ")}
              </Text>
            </View>
          ))}
        </View>

        {/* ── EDUCATION ── */}
        <View style={S.section}>
          <SectionHead>Education</SectionHead>

          {/* B.E. — currently pursuing */}
          <View style={S.item}>
            <View style={S.itemHeaderRow}>
              <Text style={S.itemTitle}>
                Bachelor of Engineering — Electronics and Communication Engineering
              </Text>
              <Text style={S.itemPeriod}>2022 — Expected May 2026</Text>
            </View>
            <Text style={S.itemSubtitle}>
              MVJ College of Engineering, Bangalore | Visvesvaraya Technological University (VTU)
            </Text>
            <View style={[S.bullet, { marginTop: 3 }]}>
              <Text style={[S.statusBadge]}>Pursuing — Expected Graduation: May 2026</Text>
            </View>
            <Text style={[S.bodyText, { marginTop: 3 }]}>
              Relevant Coursework: Microcontrollers &amp; Embedded Systems, VLSI Design &amp; FPGA
              Implementation, Digital Electronics, Communication Systems, IoT &amp; Wireless Sensor
              Networks, PCB Design &amp; Fabrication, Signal Processing.
            </Text>
          </View>

          {/* Diploma */}
          <View style={S.item}>
            <View style={S.itemHeaderRow}>
              <Text style={S.itemTitle}>
                Diploma — Electronics and Communication Engineering (71%)
              </Text>
              <Text style={S.itemPeriod}>2020 — 2023</Text>
            </View>
            <Text style={S.itemSubtitle}>
              Government Polytechnic College Srinagar, Srinagar, Kashmir
            </Text>
          </View>

          {/* Class XII */}
          <View style={S.item}>
            <View style={S.itemHeaderRow}>
              <Text style={S.itemTitle}>Higher Secondary Certificate — Class XII (57%)</Text>
              <Text style={S.itemPeriod}>2019 — 2020</Text>
            </View>
            <Text style={S.itemSubtitle}>
              Government Model Higher Secondary School, Dooru, Anantnag, J&amp;K | JKBOSE
            </Text>
          </View>

          {/* Class X */}
          <View style={S.item}>
            <View style={S.itemHeaderRow}>
              <Text style={S.itemTitle}>Secondary School Certificate — Class X (58%)</Text>
              <Text style={S.itemPeriod}>2017 — 2018</Text>
            </View>
            <Text style={S.itemSubtitle}>
              Army Goodwill School, Wuzur, Qazigund, Anantnag, J&amp;K | JKBOSE
            </Text>
          </View>
        </View>

        {/* ── CERTIFICATIONS ── */}
        <View style={S.section}>
          <SectionHead>Certifications (Selected)</SectionHead>
          {certifications.slice(0, 8).map((cert, i) => (
            <View key={i} style={[S.bullet, { marginBottom: 1.5 }]}>
              <Text style={S.bulletDot}>•</Text>
              <Text style={S.bulletText}>
                <Text style={{ fontWeight: 700 }}>{cert.name}</Text>
                {" — "}
                {cert.issuer}, {cert.date}
              </Text>
            </View>
          ))}
          <Text style={[S.bodyText, { color: "#64748b", marginTop: 3 }]}>
            + {certifications.length - 8} additional certifications (Cisco, Hexagon, HP LIFE,
            Deloitte, Skill India, YHills, BEX10). Full list available on portfolio.
          </Text>
        </View>

        {/* ── ACHIEVEMENTS ── */}
        <View style={S.section}>
          <SectionHead>Achievements</SectionHead>
          {achievements.map((ach, i) => (
            <View key={i} style={[S.bullet, { marginBottom: 1.5 }]}>
              <Text style={S.bulletDot}>•</Text>
              <Text style={S.bulletText}>
                <Text style={{ fontWeight: 700 }}>{ach.title}</Text>
                {ach.description !== ach.title ? ` — ${ach.description}` : ""}
                {" "}
                <Text style={{ color: "#64748b" }}>({ach.date})</Text>
              </Text>
            </View>
          ))}
        </View>

        {/* ── FOOTER ── */}
        <View style={S.footer}>
          <Text style={S.footerText}>
            References available on request | Portfolio:{" "}
            {personalInfo.portfolioUrl.replace("https://", "")}
          </Text>
          <Text style={S.footerText}>
            Generated {new Date().toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function GET(request: Request) {
  try {
    const { pdf } = await import("@react-pdf/renderer");
    const url = new URL(request.url);
    const format = url.searchParams.get("format");

    const filename =
      format === "1page"
        ? "Arshid_Ahmad_Malik_Resume_1Page.pdf"
        : "Arshid_Ahmad_Malik_Resume.pdf";

    const doc = <ResumeDocument />;
    const blob = await pdf(doc).toBlob();

    const arrayBuffer = await blob.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
        "Cache-Control": "no-store, no-cache",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("[Resume API] Generation error:", error);
    const isDev = process.env.NODE_ENV === "development";
    return NextResponse.json(
      {
        error: isDev
          ? `Resume generation failed: ${error instanceof Error ? error.message : String(error)}`
          : "Failed to generate resume. Please try again.",
      },
      { status: 500 },
    );
  }
}
