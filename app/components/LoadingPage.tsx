"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const PageloadOverlay = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = false;

    if (!hasVisited) {
      setLoading(true);
      sessionStorage.setItem("hasVisited", "true"); // Mark as visited for this session

      const timer = setTimeout(() => setLoading(false), 3000);
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
            <Image
              width={96}
              height={96}
              src="/images/logo/FOLLY_SYMBOL_COLOR_RGB.png"
              className="h-24 md:h-24 mb-8"
              alt="Folly Logo"
            />

            {/* Animated dots */}
            <div className="flex space-x-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-folly-red rounded-full"
                  animate={{
                    scale: [1, 1, 1],
                    opacity: [0.2, 1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageloadOverlay;
