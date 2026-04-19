import { motion } from "framer-motion";
import { ExternalLink, GraduationCap } from "lucide-react";
import { profile } from "../data/profile";
import { SectionTitle } from "./SectionTitle";

export function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle
        eyebrow="05 — Learn"
        title="Education & credentials"
        subtitle="Formal education, assessments, and awards from your CV."
      />
      <div className="edu-grid">
        <div>
          <h3 className="sub-block-title">
            <GraduationCap size={20} /> Education
          </h3>
          <ul className="edu-list">
            {profile.education.map((e, i) => (
              <motion.li
                key={e.school + e.period}
                className="glass edu-item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <span className="edu-period">{e.period}</span>
                <span className="edu-degree">{e.degree}</span>
                <span className="edu-school">{e.school}</span>
                <span className="edu-detail">{e.detail}</span>
              </motion.li>
            ))}
          </ul>
          <h3 className="sub-block-title spaced">Awards</h3>
          <ul className="bullet-list glass pad">
            {profile.awards.map((a) => (
              <li key={a.title}>
                {a.file ? (
                  <a
                    className="inline-file-link"
                    href={`${import.meta.env.BASE_URL}${a.file}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {a.title} <ExternalLink size={14} />
                  </a>
                ) : (
                  a.title
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="sub-block-title">Certifications</h3>
          <ul className="cert-list">
            {profile.certifications.map((c, i) => (
              <motion.li
                key={c.name}
                className="glass cert-item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <div className="cert-head">
                  <span className="cert-name">{c.name}</span>
                  <span className="cert-date">{c.date}</span>
                </div>
                <span className="cert-score">{c.score}</span>
                <p className="cert-note">{c.note}</p>
                {c.file ? (
                  <a
                    className="cert-file-link"
                    href={`${import.meta.env.BASE_URL}${c.file}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View certificate <ExternalLink size={14} />
                  </a>
                ) : null}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
