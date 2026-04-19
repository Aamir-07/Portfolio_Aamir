import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="section">
      <SectionTitle
        eyebrow="01 — Profile"
        title="About me"
        subtitle="Professional summary from my resume — tightened for the web while keeping the facts intact."
      />
      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
      >
        <div className="glass about-card about-card-rich">
          {profile.summaryParagraphs.map((para, idx) => (
            <p key={idx} className="about-text">
              {para}
            </p>
          ))}
        </div>
        <div className="about-side">
          <div className="glass stat-card">
            <span className="stat-label">Program</span>
            <span className="stat-value">{profile.degreeLine}</span>
          </div>
          <div className="glass stat-card">
            <span className="stat-label">Focus</span>
            <span className="stat-value">SAP CPI &amp; ML</span>
          </div>
          <div className="glass stat-card">
            <span className="stat-label">Location</span>
            <span className="stat-value">Bhopal, IN</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
