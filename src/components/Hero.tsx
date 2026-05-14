"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { publicUrl } from "@/lib/publicUrl";
import { helixRungs, helixStrandPath } from "@/lib/dnaHelixPaths";
import { profile } from "../data/profile";
import { RotatingRoles } from "./RotatingRoles";

const DNA_BASE_R = 158;
const DNA_WAVES = 5.5;
const DNA_AMP = 11;
const dnaPathA = helixStrandPath(DNA_BASE_R, DNA_WAVES, DNA_AMP, 0);
const dnaPathB = helixStrandPath(DNA_BASE_R, DNA_WAVES, DNA_AMP, Math.PI);
const dnaRungs = helixRungs(DNA_BASE_R, DNA_WAVES, DNA_AMP, 0, Math.PI, 9);

const resumeHref = publicUrl(profile.resumeFileName);
const portraitSrc = publicUrl(profile.portraitFile);

export function Hero() {
  const reduceMotion = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const glowId = `hero-dna-glow-${uid}`;
  const gradA = `hero-dna-grad-a-${uid}`;
  const gradB = `hero-dna-grad-b-${uid}`;

  return (
    <section id="top" className="hero">
      <div className="hero-layout">
        <div className="hero-main">
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
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-photo-card">
            <div className="hero-dna-frame" aria-hidden>
              <svg className="hero-dna-svg" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id={gradA} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0.85" />
                  </linearGradient>
                  <linearGradient id={gradB} x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0.9" />
                    <stop offset="45%" stopColor="#22d3ee" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
                <motion.g
                  className="hero-dna-helix"
                  animate={reduceMotion ? { rotate: 0 } : { rotate: [0, 360] }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 48, repeat: Infinity, ease: "linear" }
                  }
                  style={{ transformOrigin: "200px 200px" }}
                >
                  <path
                    className="hero-dna-rung"
                    d={dnaRungs}
                    fill="none"
                    stroke="rgba(148, 163, 184, 0.35)"
                    strokeWidth={1.2}
                    strokeLinecap="round"
                  />
                  <path
                    className="hero-dna-strand hero-dna-strand-a"
                    d={dnaPathA}
                    fill="none"
                    stroke={`url(#${gradA})`}
                    strokeWidth={3.2}
                    strokeLinecap="round"
                    filter={`url(#${glowId})`}
                  />
                  <path
                    className="hero-dna-strand hero-dna-strand-b"
                    d={dnaPathB}
                    fill="none"
                    stroke={`url(#${gradB})`}
                    strokeWidth={3.2}
                    strokeLinecap="round"
                    filter={`url(#${glowId})`}
                  />
                </motion.g>
              </svg>
            </div>
            <div className="hero-photo-inner">
              <img
                className="hero-photo"
                src={portraitSrc}
                alt={profile.portraitAlt}
                width={320}
                height={320}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>
      </div>

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
