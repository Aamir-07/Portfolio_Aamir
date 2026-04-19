import { motion } from "framer-motion";
import { Mic2, Trophy, Users, Wrench } from "lucide-react";
import { profile } from "../data/profile";
import { SectionTitle } from "./SectionTitle";

export function BeyondCode() {
  return (
    <section id="life" className="section">
      <SectionTitle
        eyebrow="07 — Beyond code"
        title="Life, leadership & workshops"
        subtitle="Everything else from your CV — hobbies, sports, coordination, and trainings."
      />
      <div className="life-grid">
        <motion.div
          className="glass life-card life-wide"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45 }}
        >
          <div className="life-card-head">
            <Mic2 className="life-icon" />
            <h3 className="life-title">Interests</h3>
          </div>
          <ul className="life-list">
            {profile.hobbies.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="hobby-gallery">
            {profile.hobbyGallery.map((item, idx) => (
              <motion.a
                key={item.file}
                className="hobby-card"
                href={`${import.meta.env.BASE_URL}${item.file}`}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.38, delay: idx * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <img src={`${import.meta.env.BASE_URL}${item.file}`} alt={item.title} loading="lazy" />
                <span>{item.title}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="glass life-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, delay: 0.06 }}
        >
          <div className="life-card-head">
            <Trophy className="life-icon" />
            <h3 className="life-title">Sports</h3>
          </div>
          <ul className="life-list">
            {profile.sports.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="glass life-card life-wide"
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <div className="life-card-head">
            <Users className="life-icon" />
            <h3 className="life-title">Positions &amp; coordination</h3>
          </div>
          <ul className="life-list two-col">
            {profile.leadership.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="glass life-card life-wide"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, delay: 0.14 }}
        >
          <div className="life-card-head">
            <Wrench className="life-icon" />
            <h3 className="life-title">Seminars / trainings</h3>
          </div>
          {profile.workshops.map((w) => (
            <div key={w.title} className="workshop-block">
              <p className="workshop-title">{w.title}</p>
              <p className="workshop-meta">
                {w.org} · {w.date}
              </p>
              <p className="workshop-skills">{w.skills.join(" · ")}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
