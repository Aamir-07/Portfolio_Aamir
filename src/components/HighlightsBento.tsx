import { motion } from "framer-motion";
import { Award, Brain, Cpu, Sparkles } from "lucide-react";
import { profile } from "../data/profile";
import { SectionTitle } from "./SectionTitle";

const cardMotion = {
  initial: { opacity: 0, y: 22, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export function HighlightsBento() {
  return (
    <section id="highlights" className="section section-tight">
      <SectionTitle
        eyebrow="00 — Snapshot"
        title="Highlights"
        subtitle="Numbers, awards, and readiness signals — at a glance."
      />
      <div className="bento">
        <motion.article className="glass bento-card bento-span-2 shine" {...cardMotion} transition={{ ...cardMotion.transition, delay: 0.02 }}>
          <div className="bento-icon">
            <Cpu size={22} />
          </div>
          <p className="bento-label">Core focus</p>
          <p className="bento-value">SAP CPI + ML</p>
          <p className="bento-hint">Integration engineering on BTP with applied ML coursework & projects.</p>
        </motion.article>

        <motion.article className="glass bento-card" {...cardMotion} transition={{ ...cardMotion.transition, delay: 0.08 }}>
          <div className="bento-icon soft-violet">
            <Brain size={22} />
          </div>
          <p className="bento-label">CGPA</p>
          <p className="bento-value">7.04 / 10</p>
          <p className="bento-hint">B.Tech AI &amp; DS — SISTec GN</p>
        </motion.article>

        <motion.article className="glass bento-card" {...cardMotion} transition={{ ...cardMotion.transition, delay: 0.12 }}>
          <div className="bento-icon soft-emerald">
            <Sparkles size={22} />
          </div>
          <p className="bento-label">AMCAT</p>
          <p className="bento-value">68 &amp; 60</p>
          <p className="bento-hint">Aptitude aggregate · Spoken English aggregate</p>
        </motion.article>

        <motion.article className="glass bento-card bento-span-2" {...cardMotion} transition={{ ...cardMotion.transition, delay: 0.16 }}>
          <div className="bento-icon soft-amber">
            <Award size={22} />
          </div>
          <p className="bento-label">Awards &amp; sports</p>
          <p className="bento-value">{profile.awards[0]?.title}</p>
          <p className="bento-hint">Leadership roles across IEEE, SAC, and Sagar Fiesta — see Education.</p>
        </motion.article>
      </div>
    </section>
  );
}
