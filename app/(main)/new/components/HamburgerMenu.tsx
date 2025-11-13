"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SectionMeta {
  id: string;
  title?: string;
}

interface HamburgerMenuProps {
  sections: SectionMeta[];
  active: number;
  onSelect: (index: number) => void;
  textColor: string;
}

export default function HamburgerMenu({
  sections,
  active,
  onSelect,
  textColor,
}: HamburgerMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed right-4 top-4 z-50">
      <button
        aria-label="Open menu"
        onClick={() => setMenuOpen((v) => !v)}
        className="group relative inline-flex h-24 w-24 items-center justify-center cursor-pointer"
      >
        <div className="space-y-2">
          <motion.span
            className="block h-0.5 w-12 rounded transition-transform"
            style={{ backgroundColor: textColor }}
          />
          <motion.span
            className="block h-0.5 w-12 rounded"
            style={{ backgroundColor: textColor }}
          />
          <motion.span
            className="block h-0.5 w-12 rounded transition-transform"
            style={{ backgroundColor: textColor }}
          />
        </div>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            aria-label="Section menu"
            className="fixed inset-0 z-[100] bg-white backdrop-blur-md backdrop-filter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-full items-center justify-center">
              <ul className="space-y-4 text-center">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <button
                      onClick={() => {
                        onSelect(i);
                        setMenuOpen(false);
                      }}
                      className={`block w-full px-8 py-4 text-2xl hover:opacity-70 transition-opacity ${
                        i === active ? "font-semibold" : "font-normal"
                      }`}
                      style={{ color: textColor }}
                    >
                      {s.title || s.id}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
