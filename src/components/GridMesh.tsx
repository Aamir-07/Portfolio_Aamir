import { motion } from "framer-motion";

export function GridMesh() {
  return (
    <div className="grid-mesh" aria-hidden>
      <motion.div
        className="grid-mesh-lines"
        animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <div className="grid-mesh-vignette" />
    </div>
  );
}
