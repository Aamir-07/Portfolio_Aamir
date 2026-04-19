import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Users } from "lucide-react";
import { profile } from "../data/profile";
import { SectionTitle } from "./SectionTitle";
import { TiltCard } from "./TiltCard";

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle
        eyebrow="04 — Build"
        title="Projects"
        subtitle="Case-study style write-ups mirroring your resume project section."
      />
      <div className="project-grid">
        {profile.projects.map((p, i) => (
          <TiltCard key={p.title}>
            <motion.article
              className="glass project-card project-card-tilt"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.22 } }}
            >
              <div className="project-glow" aria-hidden />
              <div className="project-top">
                <span className="project-period">{p.period}</span>
                <span className="project-team">
                  <Users size={14} /> Team {p.team}
                </span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-meta">
                Mentor: {p.mentor}
              </p>
              <p className="project-desc">{p.description}</p>
              <div className="tag-row">
                {p.stack.map((t) => (
                  <span key={t} className="tag tag-accent">
                    {t}
                  </span>
                ))}
              </div>
              <a className="project-link project-link-cta" href={p.link} target="_blank" rel="noreferrer">
                <Sparkles size={16} />
                View repository
                <ExternalLink size={16} />
              </a>
            </motion.article>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
