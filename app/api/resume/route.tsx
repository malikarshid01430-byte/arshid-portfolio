import { NextResponse } from "next/server";
import { Document, Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";
import { portfolioData } from "@/app/data/portfolio";

// Register fonts for better typography
Font.register({
  family: "Inter",
  fonts: [
    { src: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff", fontWeight: 600 },
    { src: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff", fontWeight: 700 },
  ],
});

const QR_PLACEHOLDER = "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://arshid-portfolio.vercel.app";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 10,
    lineHeight: 1.5,
    color: "#1a1a1a",
    padding: 40,
    backgroundColor: "#ffffff",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    objectFit: "cover",
    marginRight: 16,
    border: "2 solid #00d2ff",
  },
  qrCode: {
    width: 70,
    height: 70,
    marginTop: 8,
  },
  header: {
    marginBottom: 20,
    borderBottom: "2 solid #00d2ff",
    paddingBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    color: "#0a0a0a",
    marginBottom: 4,
  },
  title: {
    fontSize: 11,
    color: "#666666",
    marginBottom: 8,
  },
  contact: {
    fontSize: 9,
    color: "#444444",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  contactItem: {
    marginRight: 12,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: "#00d2ff",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
    borderBottom: "1 solid #e5e5e5",
    paddingBottom: 4,
  },
  summary: {
    fontSize: 10,
    color: "#333333",
    lineHeight: 1.6,
  },
  skillCategory: {
    marginBottom: 8,
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 600,
    color: "#0a0a0a",
    marginBottom: 4,
  },
  skillItem: {
    fontSize: 9,
    color: "#444444",
    marginLeft: 8,
    marginBottom: 2,
  },
  project: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: "#0a0a0a",
    marginBottom: 2,
  },
  projectSubtitle: {
    fontSize: 9,
    color: "#666666",
    fontStyle: "italic",
    marginBottom: 4,
  },
  projectDescription: {
    fontSize: 9,
    color: "#444444",
    lineHeight: 1.5,
    marginBottom: 4,
  },
  techStack: {
    fontSize: 8,
    color: "#00d2ff",
    marginTop: 4,
  },
  experience: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  experienceRole: {
    fontSize: 11,
    fontWeight: 600,
    color: "#0a0a0a",
  },
  experiencePeriod: {
    fontSize: 9,
    color: "#666666",
  },
  experienceCompany: {
    fontSize: 10,
    color: "#444444",
    marginBottom: 4,
  },
  experienceDescription: {
    fontSize: 9,
    color: "#444444",
    lineHeight: 1.5,
    marginLeft: 8,
  },
  education: {
    marginBottom: 10,
  },
  educationDegree: {
    fontSize: 11,
    fontWeight: 600,
    color: "#0a0a0a",
    marginBottom: 2,
  },
  educationInstitution: {
    fontSize: 10,
    color: "#444444",
    marginBottom: 2,
  },
  educationPeriod: {
    fontSize: 9,
    color: "#666666",
    marginBottom: 4,
  },
  certification: {
    fontSize: 9,
    color: "#444444",
    marginBottom: 3,
    marginLeft: 8,
  },
  achievement: {
    fontSize: 9,
    color: "#444444",
    marginBottom: 3,
    marginLeft: 8,
  },
  links: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 4,
  },
  link: {
    fontSize: 9,
    color: "#00d2ff",
  },
});

function ResumeDocument() {
  const { personalInfo, skillCategories, projects, experience, education, certifications, achievements } = portfolioData;

  return (
    <Document title={`${personalInfo.name} - Resume`} author={personalInfo.name}>
      <Page size="A4" style={styles.page}>
        {/* Header with Profile Image and QR Code */}
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12, justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image
                src={personalInfo.profileImage || "/images/profile.png"}
                style={styles.profileImage}
              />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.name}>{personalInfo.name}</Text>
                <Text style={styles.title}>{personalInfo.title}</Text>
                <Text style={styles.contactItem}>Generated: {new Date().toLocaleDateString()}</Text>
              </View>
            </View>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image 
              src={QR_PLACEHOLDER} 
              style={styles.qrCode} 
            />
          </View>
          <View style={styles.contact}>
            <Text style={styles.contactItem}>📧 {personalInfo.email}</Text>
            <Text style={styles.contactItem}>📱 {personalInfo.phone}</Text>
            <Text style={styles.contactItem}>📍 {personalInfo.location}</Text>
            <Text style={styles.contactItem}>🔗 linkedin.com/in/arshid-ahmad-malik</Text>
            <Text style={styles.contactItem}>💻 github.com/malikarshid01430-byte</Text>
            <Text style={styles.contactItem}>🌐 {personalInfo.portfolioUrl}</Text>
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summary}>{personalInfo.bioShort}</Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          {skillCategories.map((category, idx) => (
            <View key={idx} style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>{category.title}</Text>
              {category.skills.map((skill, sIdx) => (
                <Text key={sIdx} style={styles.skillItem}>
                  • {skill.name} ({skill.level}%)
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* Projects */}
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

        {/* Experience */}
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
                  • {desc}
                </Text>
              ))}
              <Text style={styles.techStack}>Technologies: {exp.technologies.join(", ")}</Text>
            </View>
          ))}
        </View>

        {/* Education */}
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
                  • {detail}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          {certifications.map((cert, idx) => (
            <View key={idx} style={styles.certification}>
              <Text>
                • {cert.name} - {cert.issuer} ({cert.date})
              </Text>
            </View>
          ))}
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          {achievements.map((achievement, idx) => (
            <View key={idx} style={styles.achievement}>
              <Text>
                • {achievement.title} - {achievement.description} ({achievement.date})
              </Text>
            </View>
          ))}
        </View>

        {/* Links */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connect</Text>
          <View style={styles.links}>
            <Text style={styles.link}>GitHub: github.com/malikarshid01430-byte</Text>
            <Text style={styles.link}>LinkedIn: linkedin.com/in/arshid-ahmad-malik</Text>
            <Text style={styles.link}>Portfolio: {personalInfo.portfolioUrl}</Text>
            <Text style={styles.link}>Email: {personalInfo.email}</Text>
            <Text style={styles.link}>Phone: {personalInfo.phone}</Text>
            <Text style={styles.link}>Location: {personalInfo.location}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

// Build PDF outside try/catch to satisfy lint rule about JSX in try/catch
const pdfDoc = <ResumeDocument />;

export async function GET() {
  try {
    const ReactPDF = await import("@react-pdf/renderer");
    const { pdf } = ReactPDF;
    
    // Generate PDF
    const blob = await pdf(pdfDoc).toBlob();
    
    // Return PDF as downloadable file
    return new NextResponse(blob as unknown as string, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="Arshid_Ahmad_Malik_Resume.pdf"`,
        "Cache-Control": "no-cache",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to generate resume" },
      { status: 500 }
    );
  }
}
