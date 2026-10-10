import React, { useMemo, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Award, Download, ExternalLink, FileText, Search } from "lucide-react";
import { certificates, certificateCategories, type Certificate } from "@/data/certificates";

const CertificateCard = ({ cert }: { cert: Certificate }) => {
  return (
    <article className="bg-card border border-border rounded-xl p-6 h-full flex flex-col hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"><Award size={20} /></div>
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-wide text-primary mb-2">{cert.category}</p>
      <h3 className="font-bold text-foreground text-base leading-snug mb-1">{cert.title}</h3>
      {cert.issuer && <p className="text-primary font-semibold text-xs mb-1">{cert.issuer}</p>}
      {cert.issueDate && <p className="text-foreground/50 text-xs mb-3">{cert.issueDate}</p>}
      <p className="text-foreground/65 text-xs leading-relaxed mb-4 flex-1">{cert.description}</p>
      {!!cert.skills?.length && <div className="flex flex-wrap gap-1.5 mb-4">{cert.skills.map((skill) => <span key={skill} className="text-[10px] font-medium px-2 py-0.5 bg-muted/60 rounded-full text-foreground/60">{skill}</span>)}</div>}
      {cert.fileUrl || cert.verificationUrl ? <div className="pt-3 border-t border-border/50 flex flex-wrap gap-3 text-xs font-medium">
        {cert.fileUrl && <><a href={cert.fileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline"><FileText size={13} />View Certificate</a><a href={cert.fileUrl} download className="inline-flex items-center gap-1.5 text-foreground/65 hover:text-primary"><Download size={13} />Download</a></>}
        {cert.verificationUrl && <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-foreground/65 hover:text-primary"><ExternalLink size={13} />Verify Credential</a>}
      </div> : null}
    </article>
  );
};

const CertificatesSection = () => {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => certificates.filter((cert) => (category === "All" || cert.category === category) && `${cert.title} ${cert.issuer ?? ""} ${cert.category}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return <section id="certificates" className="section bg-background"><div className="container-custom">
    <ScrollReveal><h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Certifications &amp; Credentials</h2></ScrollReveal>
    <div className="w-20 h-1 bg-primary mx-auto my-4 rounded-full" />
    <p className="text-foreground/60 text-center text-sm max-w-2xl mx-auto mb-6">{certificates.length} learning, internship, training, attendance, and participation records organised for a clear view of technical and professional development.</p>
    <label className="relative block max-w-xl mx-auto mb-6"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/45" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search certificates" className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Search certificates" /></label>
    <div className="flex flex-wrap justify-center gap-2 mb-10"><button onClick={() => setCategory("All")} className={`px-3 py-1.5 rounded-full text-xs font-medium ${category === "All" ? "bg-primary text-white" : "bg-muted text-foreground/70"}`}>All ({certificates.length})</button>{certificateCategories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`px-3 py-1.5 rounded-full text-xs font-medium ${category === item ? "bg-primary text-white" : "bg-muted text-foreground/70"}`}>{item}</button>)}</div>
    {visible.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{visible.map((cert, index) => <ScrollReveal key={cert.id} delay={Math.min(300, index * 30)}><CertificateCard cert={cert} /></ScrollReveal>)}</div> : <p className="text-center text-sm text-foreground/60 py-10">No certificates match this search.</p>}
  </div></section>;
};

export default CertificatesSection;
