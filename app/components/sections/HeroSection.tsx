"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoBackground from "../VideoBackground";
import Image from "next/image";

const HeroSection = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center right-0 left-0">
      <VideoBackground src="/videos/gmm.mp4" />
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={scrollToAbout}
            className="absolute bottom-8 md:bottom-12 px-6 py-3 md:px-8 md:py-4  text-white text-3xl animate-bounce transition-all duration-300 cursor-pointer z-20"
            aria-label="Scroll to about section"
          >
            <Image
              src="/images/logo/FOLLY_SYMBOL_WHITE_CMYK.png"
              alt="Folly Horse"
              className="w-10 h-10"
              width={100}
              height={100}
            />
            ↓
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
