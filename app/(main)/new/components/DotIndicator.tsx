"use client";

import { motion } from "framer-motion";

interface DotIndicatorProps {
  count: number;
  active: number;
  onSelect: (index: number) => void;
  textColor: string;
}

export default function DotIndicator({
  count,
  active,
  onSelect,
  textColor,
}: DotIndicatorProps) {
  return (
    <nav
      aria-label="Section indicator"
      className="fixed inset-y-0 left-4 md:left-10 z-40 flex items-center"
    >
      <ul className="flex flex-col gap-3">
        {Array.from({ length: count }).map((_, i) => (
          <li key={i}>
            <button
              aria-label={`Go to section ${i + 1}`}
              onClick={() => onSelect(i)}
              className="relative h-3.5 w-3.5"
            >
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: textColor }}
                animate={{
                  opacity: i === active ? 1 : 0.3,
                  scale: i === active ? 1 : 0.6,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
