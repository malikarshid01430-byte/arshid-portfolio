import { NextResponse } from "next/server";
import { Document, Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";
import { portfolioData } from "@/app/data/portfolio";
import fs from "fs";
import path from "path";

Font.register({ family: "Helvetica", fonts: [{ src: "", fontWeight: 400 }] });

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    lineHeight: 1.5,
    color: "#1a1a1a",
    padding: 32,
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 14,
    borderBottom: "1.5 solid #2563eb",
    paddingBottom: 10,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
    objectFit: "cover",
  },
  headerText: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: 2,
  },
  title: {
    fontSize: 10,
    color: "#475569",
    marginBottom: 4,
  },
  contact: {
    fontSize: 8,
    color: "#475569",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  contactItem: {
    marginRight: 8,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: "#2563eb",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 6,
    borderBottom: "0.5 solid #e5e7eb",
    paddingBottom: 3,
  },
  summary: {
    fontSize: 9,
    color: "#334155",
    lineHeight: 1.55,
  },
  skillCategory: {
    marginBottom: 6,
  },
  skillCategoryTitle: {
    fontSize: 9,
    fontWeight: 600,
    color: "#0f172a",
    marginBottom: 2,
  },
  skillItem: {
    fontSize: 8,
    color: "#475569",
    marginLeft: 6,
    marginBottom: 1,
  },
  project: {
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 600,
    color: "#0f172a",
    marginBottom: 1,
  },
  projectSubtitle: {
    fontSize: 8,
    color: "#475569",
    marginBottom: 2,
  },
  projectDescription: {
    fontSize: 8,
    color: "#334155",
    lineHeight: 1.4,
    marginBottom: 2,
  },
  techStack: {
    fontSize: 8,
    color: "#2563eb",
    marginTop: 2,
  },
  experience: {
    marginBottom: 10,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  experienceRole: {
    fontSize: 10,
    fontWeight: 600,
    color: "#0f172a",
  },
  experiencePeriod: {
    fontSize: 8,
    color: "#475569",
  },
  experienceCompany: {
    fontSize: 9,
    color: "#334155",
    marginBottom: 2,
  },
  experienceDescription: {
    fontSize: 8,
    color: "#334155",
    lineHeight: 1.4,
    marginLeft: 6,
  },
  education: {
    marginBottom: 8,
  },
  educationDegree: {
    fontSize: 10,
    fontWeight: 600,
    color: "#0f172a",
    marginBottom: 1,
  },
  educationInstitution: {
    fontSize: 9,
    color: "#334155",
    marginBottom: 1,
  },
  educationPeriod: {
    fontSize: 8,
    color: "#475569",
    marginBottom: 2,
  },
  certification: {
    fontSize: 8,
    color: "#334155",
    marginBottom: 2,
    marginLeft: 6,
  },
  achievement: {
    fontSize: 8,
    color: "#334155",
    marginBottom: 2,
    marginLeft: 6,
  },
  link: {
    fontSize: 8,
    color: "#2563eb",
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
  } catch (e) {
    console.error("Failed to load profile image:", e);
  }

  return (
    <Document title={`${personalInfo.name} - Resume`} author={personalInfo.name}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.headerLeft}>
              {profileImageSrc && (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image src={profileImageSrc} style={styles.profileImage} />
              )}
              <View style={styles.headerText}>
                <Text style={styles.name}>{personalInfo.name}</Text>
                <Text style={styles.title}>{personalInfo.title}</Text>
                <Text style={{ fontSize: 8, color: "#64748b" }}>Generated: {new Date().toLocaleDateString()}</Text>
              </View>
            </View>
          </View>
          <View style={styles.contact}>
            <Text style={styles.contactItem}>Email: {personalInfo.email}</Text>
            <Text style={styles.contactItem}>Phone: {personalInfo.phone}</Text>
            <Text style={styles.contactItem}>Location: {personalInfo.location}</Text>
            <Text style={styles.contactItem}>LinkedIn: {personalInfo.linkedin.replace("https://", "")}</Text>
            <Text style={styles.contactItem}>GitHub: {personalInfo.github.replace("https://", "")}</Text>
            <Text style={styles.contactItem}>Portfolio: {personalInfo.portfolioUrl.replace("https://", "")}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summary}>{personalInfo.bioShort}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          {skillCategories.map((category, idx) => (
            <View key={idx} style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>{category.title}</Text>
              {category.skills.map((skill, sIdx) => (
                <Text key={sIdx} style={styles.skillItem}>
                  {skill.name} ({skill.level}%)
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projects.map((project, idx) => (
            <View key={idx} style={styles.project}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectSubtitle}>{project.subtitle}</Text>
              <Text style={styles.projectDescription}>{project.longDescription}</Text>
              <Text style={styles.techStack}>Technologies: {project.technologies.join(", ")}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((exp, idx) => (
            <View key={idx} style={styles.experience}>
              <View style={styles.experienceHeader}>
                <Text style={styles.experienceRole}>{exp.role}</Text>
                <Text style={styles.experiencePeriod}>{exp.period}</Text>
              </View>
              <Text style={styles.experienceCompany}>
                {exp.company} | {exp.location}
              </Text>
              {exp.description.map((desc, dIdx) => (
                <Text key={dIdx} style={styles.experienceDescription}>
                  {desc}
                </Text>
              ))}
              <Text style={styles.techStack}>Technologies: {exp.technologies.join(", ")}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu, idx) => (
            <View key={idx} style={styles.education}>
              <Text style={styles.educationDegree}>{edu.degree}</Text>
              <Text style={styles.educationInstitution}>{edu.institution}</Text>
              <Text style={styles.educationPeriod}>
                {edu.period} | {edu.location}
              </Text>
              {edu.details.map((detail, dIdx) => (
                <Text key={dIdx} style={styles.certification}>
                  {detail}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          {certifications.map((cert, idx) => (
            <View key={idx} style={styles.certification}>
              <Text>
                {cert.name} - {cert.issuer} ({cert.date})
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          {achievements.map((achievement, idx) => (
            <View key={idx} style={styles.achievement}>
              <Text>
                {achievement.title} - {achievement.description} ({achievement.date})
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connect</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
            <Text style={styles.link}>GitHub: {personalInfo.github.replace("https://", "")}</Text>
            <Text style={styles.link}>LinkedIn: {personalInfo.linkedin.replace("https://", "")}</Text>
            <Text style={styles.link}>Portfolio: {personalInfo.portfolioUrl.replace("https://", "")}</Text>
            <Text style={styles.link}>Email: {personalInfo.email}</Text>
            <Text style={styles.link}>Phone: {personalInfo.phone}</Text>
            <Text style={styles.link}>Location: {personalInfo.location}</Text>
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