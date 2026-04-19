import { motion } from "framer-motion";

type Props = { eyebrow: string; title: string; subtitle?: string };

export function SectionTitle({ eyebrow, title, subtitle }: Props) {
  return (
    <motion.div
      className="section-head"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-sub">{subtitle}</p> : null}
    </motion.div>
  );
}
