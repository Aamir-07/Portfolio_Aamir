import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { profile } from "../data/profile";
import { SectionTitle } from "./SectionTitle";

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle
        eyebrow="03 — Work"
        title="Experience"
        subtitle="Internship narrative aligned with your Global Trust IT Services section."
      />
      <div className="timeline">
        {profile.experience.map((job, i) => (
          <motion.article
            key={job.company}
            className="glass timeline-card timeline-card-anim"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
          >
            <div className="timeline-icon">
              <Briefcase size={20} />
            </div>
            <div className="timeline-body">
              <p className="timeline-period">{job.period}</p>
              <h3 className="timeline-role">{job.role}</h3>
              <p className="timeline-company">{job.company}</p>
              <ul className="timeline-list">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="tag-row">
                {job.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
