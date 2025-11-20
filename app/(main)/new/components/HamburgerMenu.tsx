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
  bgColor: string;
}

export default function HamburgerMenu({
  sections,
  active,
  onSelect,
  textColor,
  bgColor,
}: HamburgerMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed right-3 top-3 md:right-4 md:top-4 z-50">
      <button
        aria-label="Open menu"
        onClick={() => setMenuOpen((v) => !v)}
        className="group relative inline-flex h-12 w-12 md:h-24 md:w-24 items-center justify-center cursor-pointer"
      >
        <div className="space-y-1.5 md:space-y-2">
          <motion.span
            className="block h-0.5 w-8 md:w-12 rounded transition-transform"
            style={{ backgroundColor: textColor }}
          />
          <motion.span
            className="block h-0.5 w-8 md:w-12 rounded"
            style={{ backgroundColor: textColor }}
          />
          <motion.span
            className="block h-0.5 w-8 md:w-12 rounded transition-transform"
            style={{ backgroundColor: textColor }}
          />
        </div>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            aria-label="Section menu"
            className="fixed inset-0 z-[100 backdrop-blur-md backdrop-filter"
            style={{ backgroundColor: bgColor, backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-full items-center justify-center">
              <button
                style={{ color: textColor }}
                onClick={() => setMenuOpen(false)}
                className="absolute top-10 md:top-8 right-4 md:right-8 text-3xl md:text-5xl cursor-pointer"
              >
                ✕
              </button>
              <ul className="space-y-4 text-center">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <button
                      onClick={() => {
                        onSelect(i);
                        setMenuOpen(false);
                      }}
                      className={`block w-full px-8 py-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:opacity-70 transition-opacity cursor-pointer ${
                        i === active
                          ? "font-bold font-accent"
                          : "font-normal font-secondary"
                      } ${s.id === "profile" ? "hidden" : ""}`}
                      style={{
                        color: textColor,
                        opacity: i === active ? 1 : 0.5,
                      }}
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
