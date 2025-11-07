"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TypeWriter from "./components/TypeWriter";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { PageloadOverlay } from "./components/LoadingPage";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Animation refs
  const [workRef, workVisible] = useScrollAnimation({ threshold: 0.3 });
  const [valuesRef] = useScrollAnimation({ threshold: 0.3 });
  const [contactRef] = useScrollAnimation({ threshold: 0.3 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-black">
      <PageloadOverlay />
      {/* Hero Section with Parallax */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="min-h-screen flex flex-col items-center justify-center px-8 fixed w-full pointer-events-none z-0"
      >
        <Image
          src="/images/logo/WORDMARK_FOLLY_BLACK_CMYK.png"
          alt="Folly"
          width={1000}
          height={1000}
          className="w-full h-auto max-w-[200px] mb-16"
        />

        <p className="font-secondary text-sm leading-relaxed text-center">
          Folly Productions - We make compeling theatre, television & film.
        </p>
      </motion.section>

      {/* Spacer for fixed hero */}
      <div className="h-screen" />

      {/* About Us Section */}
      <motion.section
        className="min-h-[80vh] flex items-center justify-center px-8 bg-white relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <motion.p
            className="font-secondary text-sm leading-loose"
            variants={fadeInUp}
          >
            Folly was created to make maningful work with talented people.
            <br /> Out approach is driven by craft, connection and narrative.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Work Section */}
      <motion.section
        ref={workRef as React.RefObject<HTMLElement>}
        className="min-h-[80vh] flex items-center justify-center px-8 bg-white relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="max-w-2xl mx-auto">
          <motion.h2
            className="font-accent text-xs uppercase tracking-wider mb-12"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Past Projects
          </motion.h2>

          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 className="font-primary text-3xl" variants={staggerItem}>
              DOOMERS, a play written by Matthew Gasda
            </motion.h3>

            <motion.p
              className="font-secondary text-sm leading-relaxed"
              variants={staggerItem}
            >
              <TypeWriter
                text="In humanity's last act, who plays god?"
                startTyping={workVisible}
                delay={35}
              />
            </motion.p>

            <motion.div
              className="font-secondary text-xs space-y-1 text-gray-600"
              variants={staggerItem}
            >
              <p>18 Sept - 3 Oct 2025</p>
              <p>Rose Lipman Building, 43 De Beauvoir Rd, London N1 5TH, UK</p>
            </motion.div>

            <motion.a
              href="https://www.doomerslondon.com"
              target="_blank"
              className="inline-block font-secondary text-sm underline hover:no-underline transition-all cursor-pointer"
              variants={staggerItem}
              whileHover={{ x: 10 }}
            >
              Get Tickets
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* How We Work Section */}
      <motion.section
        ref={valuesRef as React.RefObject<HTMLElement>}
        className="min-h-screen flex items-center justify-center px-8 py-20 bg-white relative z-10"
      >
        <motion.div className="max-w-xl mx-auto">
          <motion.h2
            className="font-accent uppercase tracking-wider mb-12 h-12"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            How We Work
          </motion.h2>
          <motion.ul
            className="font-secondary text-sm space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              "Room for surperise, build on preparation.",
              "We plan carefully so that discovery can happen.",
              "Our structure makes the spontaneity possible.",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={staggerItem}
                custom={index}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef as React.RefObject<HTMLElement>}
        className="min-h-[60vh] flex flex-col items-center justify-center px-8 space-y-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2
          className="font-accent text-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact us
        </motion.h2>

        <motion.div className="text-center space-y-2" variants={fadeInUp}>
          <motion.a
            className="font-secondary text-sm cursor-pointer"
            whileHover={{ scale: 1.05 }}
            href="mailto:team@follyproduction.com"
          >
            team@follyproduction.com
          </motion.a>

          <p className="font-secondary text-xs text-gray-600">
            Please attach materials - we&#39;re excited to read them
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}
