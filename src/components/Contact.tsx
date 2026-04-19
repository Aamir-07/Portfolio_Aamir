import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/profile";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  return (
    <section id="contact" className="section section-last">
      <SectionTitle
        eyebrow="08 — Connect"
        title="Let's talk"
        subtitle="Open to roles in integration, data, and ML engineering."
      />
      <motion.div
        className="contact-grid"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.a
          className="glass contact-tile"
          href={`mailto:${profile.email}`}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
        >
          <Mail className="contact-icon" />
          <span className="contact-label">Email</span>
          <span className="contact-value">{profile.email}</span>
        </motion.a>
        <motion.a
          className="glass contact-tile"
          href={`tel:${profile.phone.replace(/\s/g, "")}`}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
        >
          <Phone className="contact-icon" />
          <span className="contact-label">Phone</span>
          <span className="contact-value">{profile.phone}</span>
        </motion.a>
        <motion.a
          className="glass contact-tile"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
        >
          <Linkedin className="contact-icon" />
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">/in/aamirhusain07</span>
        </motion.a>
        <motion.div
          className="glass contact-tile static"
          initial={{ opacity: 0.85 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <MapPin className="contact-icon" />
          <span className="contact-label">Based in</span>
          <span className="contact-value">{profile.location}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
