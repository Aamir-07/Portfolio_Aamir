import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { SectionTitle } from "./SectionTitle";
import { SkillMarquee } from "./SkillMarquee";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle
        eyebrow="02 — Stack"
        title="Skills & tools"
        subtitle="Key expertise from your CV — SAP stack, APIs, data formats, and ML tooling."
      />
      <motion.ul
        className="skill-cloud"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {profile.skills.map((s) => (
          <motion.li
            key={s}
            className="skill-pill"
            variants={item}
            whileHover={{ scale: 1.06, y: -3, rotate: [-1, 1, 0] }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            {s}
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        className="marquee-wrap"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        <p className="marquee-label">Endless strip · expertise + stack</p>
        <SkillMarquee />
      </motion.div>
    </section>
  );
}
