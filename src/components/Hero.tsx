import { motion } from "framer-motion";
import { ArrowDownRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/profile";
import { RotatingRoles } from "./RotatingRoles";

const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFileName}`;

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-frame" aria-hidden>
        <motion.span
          className="hero-frame-ring"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <div className="hero-frame-inner" />
      </div>

      <motion.p
        className="hero-kicker"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.5 }}
      >
        Portfolio · {new Date().getFullYear()}
      </motion.p>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.55 }}
      >
        <span className="hero-name">{profile.name}</span>
        <span className="hero-degree">{profile.degreeLine}</span>
        <span className="hero-role-line">
          I craft <RotatingRoles phrases={profile.heroRoles} />
        </span>
      </motion.h1>

      <motion.p
        className="hero-tagline"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.5 }}
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        className="hero-meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.34, duration: 0.5 }}
      >
        <a className="hero-chip hero-chip-magnetic" href={`mailto:${profile.email}`}>
          <Mail size={16} />
          {profile.email}
        </a>
        <span className="hero-chip muted">
          <Phone size={16} />
          {profile.phone}
        </span>
        <span className="hero-chip muted">
          <MapPin size={16} />
          {profile.location}
        </span>
      </motion.div>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.44, duration: 0.45 }}
      >
        <motion.a
          className="btn btn-primary"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          LinkedIn
          <ArrowDownRight size={18} className="btn-icon" />
        </motion.a>
        <motion.a
          className="btn btn-secondary"
          href={resumeHref}
          download={profile.resumeFileName}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Download size={18} />
          Resume PDF
        </motion.a>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          View work
        </button>
      </motion.div>

      <motion.p className="hero-resume-hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        Add your file to <code>public/{profile.resumeFileName}</code> so the download works everywhere.
      </motion.p>

      <motion.div
        className="hero-scroll-hint"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <span className="hero-scroll-line" />
      </motion.div>
    </section>
  );
}
