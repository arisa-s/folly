"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const PageloadOverlay = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setLoading(true);
      sessionStorage.setItem("hasVisited", "true"); // Mark as visited for this session

      const timer = setTimeout(() => setLoading(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

          <div className="relative z-10 flex flex-col items-center">
            <motion.img
              src="/images/logo/FOLLY_SYMBOL_COLOR_RGB.png"
              key="loader"
              className="h-24 md:h-32 mb-8"
              style={{ transformOrigin: "top right" }}
              initial={{ opacity: 1, x: 0, y: 0 }}
              animate={{
                opacity: 1,
                x: [
                  0,
                  "40vw",
                  0,
                  "-40vw",
                  0,
                  "30vw",
                  "-30vw",
                  "25vw",
                  "-25vw",
                  0,
                ],
                y: [
                  0,
                  "25vh",
                  "40vh",
                  "25vh",
                  0,
                  "-25vh",
                  "25vh",
                  "-15vh",
                  "15vh",
                  0,
                ],
                transition: {
                  duration: 8,
                  ease: "linear",
                },
              }}
              exit={{ opacity: 1, x: 0, y: 0 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageloadOverlay;
