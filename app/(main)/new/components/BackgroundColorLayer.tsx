"use client";

import { motion } from "framer-motion";

interface BackgroundColorLayerProps {
  initialColor: string;
  color: string;
}

export default function BackgroundColorLayer({
  initialColor,
  color,
}: BackgroundColorLayerProps) {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      aria-hidden
      initial={{ backgroundColor: initialColor }}
      animate={{ backgroundColor: color }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  );
}
