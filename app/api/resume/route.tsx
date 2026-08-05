import { NextResponse } from "next/server";
import { Document, Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";
import { portfolioData } from "@/app/data/portfolio";
import fs from "fs";
import path from "path";

// Register professional fonts
Font.register({
  family: "Helvetica",
  fonts: [
    { src: "https://fonts.gstatic.com/s/helveticaneue/v78/1PtsGG9SDusqNw8UA2gKjH.woff2", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/s/helveticaneue/v78/1PtsGG9SDusqNw8UA2gKjH.woff2", fontWeight: 700 },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    lineHeight: 1.45,
    color: "#111827",
    padding: 28,
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 12,
    borderBottom: "2 solid #2563eb",
    paddingBottom: 8,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    gap: 10,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    objectFit: "cover",
  },
  name: {
    fontSize: 17,
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: 2,
  },
  title: {
    fontSize: 10,
    color: "#475569",
    marginBottom: 2,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    fontSize: 8,
    color: "#475569",
    marginTop: 4,
  },
  contactItem: {
    marginRight: 8,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: "#2563eb",
    textTransform: "uppercase",
    letterSpacing: 0.7,
    marginBottom: 5,
    borderBottom: "1 solid #e5e7eb",
    paddingBottom: 2,
  },
  summary: {
    fontSize: 9,
    color: "#334155",
    lineHeight: 1.45,
  },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skillChip: {
    fontSize: 8,
    color: "#334155",
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    border: "1 solid #e2e8f0",
  },
  item: {
    marginBottom: 8,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 1,
  },
  itemTitle: {
    fontSize: 10,
    fontWeight: 600,
    color: "#0f172a",
  },
  itemSubtitle: {
    fontSize: 9,
    color: "#475569",
    marginBottom: 1,
  },
  itemPeriod: {
    fontSize: 8,
    color: "#64748b",
  },
  bullets: {
    fontSize: 8,
    color: "#334155",
    lineHeight: 1.35,
    marginLeft: 8,
    marginTop: 2,
  },
  link: {
    fontSize: 8,
    color: "#2563eb",
    textDecoration: "none",
  },
  footer: {
    marginTop: 10,
    borderTop: "1 solid #e5e7eb",
    paddingTop: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  qrCode: {
    width: 36,
    height: 36,
  },
});

function ResumeDocument() {
  const { personalInfo, skillCategories, projects, experience, education, certifications, achievements } = portfolioData;

  let profileImageSrc: string | undefined;
  try {
    const imagePath = path.join(process.cwd(), "public", personalInfo.profileImage || "/images/profile.jpg");
    if (fs.existsSync(imagePath)) {
      profileImageSrc = imagePath;
    }
  } catch {
    // ignore
  }

  const allSkills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => `${category.title}: ${skill.name}`)
  );

  return (
    <Document title={`${personalInfo.name} - Resume`} author={personalInfo.name}>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <View>
              {profileImageSrc && (
                // @ts-expect-error react-pdf Image prop typing
                <Image src={profileImageSrc} style={styles.profileImage} alt="" />
              )}
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{personalInfo.name}</Text>
              <Text style={styles.title}>{personalInfo.title}</Text>
              <View style={styles.contactRow}>
                <Text style={styles.contactItem}>{personalInfo.email}</Text>
                <Text style={styles.contactItem}>{personalInfo.phone}</Text>
                <Text style={styles.contactItem}>{personalInfo.location}</Text>
                <Text style={styles.contactItem}>{personalInfo.linkedin.replace("https://", "")}</Text>
                <Text style={styles.contactItem}>{personalInfo.github.replace("https://", "")}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summary}>{personalInfo.bioShort}</Text>
        </View>

        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsRow}>
            {allSkills.slice(0, 24).map((skill, idx) => (
              <Text key={idx} style={styles.skillChip}>{skill}</Text>
            ))}
          </View>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.slice(0, 3).map((exp, idx) => (
            <View key={idx} style={styles.item}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{exp.role}</Text>
                <Text style={styles.itemPeriod}>{exp.period}</Text>
              </View>
              <Text style={styles.itemSubtitle}>{exp.company} | {exp.location}</Text>
              {exp.description.slice(0, 3).map((desc, dIdx) => (
                <Text key={dIdx} style={styles.bullets}>{desc}</Text>
              ))}
              <Text style={{ fontSize: 8, color: "#475569", marginTop: 2 }}>
                Technologies: {exp.technologies.slice(0, 6).join(", ")}
              </Text>
            </View>
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projects.slice(0, 3).map((project, idx) => (
            <View key={idx} style={styles.item}>
              <Text style={styles.itemTitle}>{project.title}</Text>
              <Text style={styles.itemSubtitle}>{project.subtitle}</Text>
              <Text style={styles.bullets}>{project.longDescription?.slice(0, 180)}</Text>
              <Text style={{ fontSize: 8, color: "#475569", marginTop: 2 }}>
                Technologies: {project.technologies.slice(0, 6).join(", ")}
              </Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.slice(0, 2).map((edu, idx) => (
            <View key={idx} style={styles.item}>
              <Text style={styles.itemTitle}>{edu.degree}</Text>
              <Text style={styles.itemSubtitle}>{edu.institution}</Text>
              <Text style={styles.itemPeriod}>{edu.period} | {edu.location}</Text>
            </View>
          ))}
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          {certifications.slice(0, 5).map((cert, idx) => (
            <View key={idx} style={styles.item}>
              <Text style={styles.itemTitle}>{cert.name}</Text>
              <Text style={styles.itemSubtitle}>{cert.issuer} | {cert.date}</Text>
            </View>
          ))}
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          {achievements.slice(0, 3).map((achievement, idx) => (
            <View key={idx} style={styles.item}>
              <Text style={styles.itemTitle}>{achievement.title}</Text>
              <Text style={styles.bullets}>{achievement.description}</Text>
            </View>
          ))}
        </View>

        {/* Footer with links and QR */}
        <View style={styles.footer}>
          <View>
            <Text style={styles.link}>GitHub: {personalInfo.github.replace("https://", "")}</Text>
            <Text style={styles.link}>LinkedIn: {personalInfo.linkedin.replace("https://", "")}</Text>
            <Text style={styles.link}>Portfolio: {personalInfo.portfolioUrl.replace("https://", "")}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

const pdfDoc = <ResumeDocument />;

export async function GET(request: Request) {
  try {
    const { pdf } = await import("@react-pdf/renderer");

    const url = new URL(request.url);
    const format = url.searchParams.get("format");

    const blob = await pdf(pdfDoc).toBlob();

    const filename = format === "1page"
      ? "Arshid_Ahmad_Malik_Resume_1Page.pdf"
      : "Arshid_Ahmad_Malik_Resume.pdf";

    return new NextResponse(blob, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Resume generation error:", error);
    const message = process.env.NODE_ENV === "development"
      ? `Resume generation failed: ${error instanceof Error ? error.message : "Unknown error"}`
      : "Failed to generate resume";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}