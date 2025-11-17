"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ArchiveSection from "./components/sections/ArchiveSection";
import ProfileSection from "./components/sections/ProfileSection";
import ContactSection from "./components/sections/ContactSection";
import { FOLLY_COLORS } from "@/public/colors";
import BackgroundColorLayer from "./components/BackgroundColorLayer";
import HamburgerMenu from "./components/HamburgerMenu";
import DotIndicator from "./components/DotIndicator";

export default function Page() {
  const sections = useMemo(
    () =>
      [
        {
          id: "hero",
          component: <HeroSection />,
          title: "Hero",
          bg: "#000000",
          fg: FOLLY_COLORS.white,
        },
        {
          id: "about",
          component: <AboutSection />,
          title: "About us",
          bg: FOLLY_COLORS.red,
          fg: FOLLY_COLORS.blue,
        },
        {
          id: "archive",
          component: <ArchiveSection />,
          title: "Recent Work",
          bg: FOLLY_COLORS.blue, // teal-700
          fg: FOLLY_COLORS.black,
        },
        {
          id: "profile",
          component: <ProfileSection />,
          title: "Meet us",
          bg: FOLLY_COLORS.yellow, // gray-800
          fg: FOLLY_COLORS.black,
        },
        {
          id: "contact",
          component: <ContactSection />,
          title: "Contact",
          bg: FOLLY_COLORS.white,
          fg: FOLLY_COLORS.black,
        },
      ] as Array<{
        id: string;
        title: string;
        bg: string;
        fg: string;
        component?: React.ReactNode;
      }>,
    []
  );

  const [active, setActive] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const activeRef = useRef(0);

  // Update ref when active changes
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Observe sections (viewport root) - improved for mobile
  useEffect(() => {
    const refs = sectionRefs.current.filter(Boolean) as HTMLElement[];
    if (!refs.length) return;

    const updateActiveSection = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      // Find which section is most visible (centered or has most area visible)
      let maxVisibility = 0;
      let newActive = activeRef.current;

      refs.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        // Calculate how much of the section is visible in viewport
        const visibleTop = Math.max(0, -rect.top);
        const visibleBottom = Math.min(rect.height, viewportHeight - rect.top);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibility = visibleHeight / viewportHeight;

        // Bonus for sections near viewport center
        const sectionCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
        const centerBonus = Math.max(
          0,
          1 - distanceFromCenter / viewportHeight
        );
        const combinedVisibility = visibility * 0.7 + centerBonus * 0.3;

        if (combinedVisibility > maxVisibility) {
          maxVisibility = combinedVisibility;
          newActive = index;
        }
      });

      if (newActive !== activeRef.current) {
        activeRef.current = newActive;
        setActive(newActive);
      }
    };

    // IntersectionObserver for desktop
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let idx = activeRef.current;

        for (const entry of entries) {
          const i = refs.indexOf(entry.target as HTMLElement);
          if (i !== -1 && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            idx = i;
          }
        }

        if (idx !== activeRef.current) {
          activeRef.current = idx;
          setActive(idx);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -20% 0px", // Better detection on mobile
        threshold: [0, 0.25, 0.5, 0.75, 1], // Simplified thresholds for better performance
      }
    );

    refs.forEach((node) => observer.observe(node));

    // Scroll listener as fallback for mobile (especially with CSS snap)
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    updateActiveSection();

    // Add scroll listener as fallback for mobile (especially with CSS snap)
    // This ensures color changes work even when IntersectionObserver is delayed
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Also listen to scrollend for better snap detection
    if ("onscrollend" in window) {
      window.addEventListener("scrollend", updateActiveSection, {
        passive: true,
      });
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if ("onscrollend" in window) {
        window.removeEventListener("scrollend", updateActiveSection);
      }
    };
  }, []); // Empty dependency array - only run once

  const scrollTo = (index: number) => {
    const node = sectionRefs.current[index];
    if (!node) return;
    node.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const current = sections[active];

  // Get filter for logo color based on current section text color
  // For white and black, use filters. For colors, we'll use mask-image approach
  const shouldUseMask = (color: string) => {
    return color !== FOLLY_COLORS.white && color !== FOLLY_COLORS.black;
  };

  const getLogoFilter = (color: string) => {
    if (color === FOLLY_COLORS.white) {
      return "brightness(0) invert(1)";
    } else if (color === FOLLY_COLORS.black) {
      return "brightness(0) invert(0)";
    }
    return "none";
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Animated background (no remount, no opacity fade to avoid white flash) */}
      <BackgroundColorLayer initialColor={sections[0].bg} color={current.bg} />

      {/* Top-right hamburger */}
      <HamburgerMenu
        sections={sections.map(({ id, title }) => ({ id, title }))}
        active={active}
        onSelect={scrollTo}
        textColor={current.fg}
        bgColor={current.bg}
      />

      {/* Dot indicator (interactive) */}
      <DotIndicator
        count={sections.length}
        active={active}
        onSelect={scrollTo}
        textColor={current.fg}
      />

      {/* Logo and Section Title - Top left, hidden on Hero section */}
      {active !== 0 && (
        <motion.div
          className="fixed left-3 top-3 md:left-6 md:top-6 z-[60] flex items-center gap-3 md:gap-12"
          initial={{ opacity: 0, x: -20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="relative w-12 md:w-20">
            {shouldUseMask(current.fg) ? (
              <motion.div
                className="w-full"
                style={{
                  maskImage: `url(/images/logo/LOCKUP_FOLLY_WHITE_CMYK.svg)`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskImage: `url(/images/logo/LOCKUP_FOLLY_WHITE_CMYK.svg)`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  backgroundColor: current.fg,
                  aspectRatio: "150/350",
                }}
                animate={{ backgroundColor: current.fg }}
                transition={{ duration: 0.4 }}
              />
            ) : (
              <Image
                src="/images/logo/LOCKUP_FOLLY_WHITE_CMYK.svg"
                alt="Folly"
                width={150}
                height={350}
                className="h-auto w-auto"
                style={{
                  filter: getLogoFilter(current.fg),
                  WebkitFilter: getLogoFilter(current.fg),
                }}
                priority
              />
            )}
          </div>
          <AnimatePresence mode="wait">
            <motion.h2
              key={current.id}
              className="text-sm md:text-xl font-accent"
              style={{ color: current.fg }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              / {current.title}
            </motion.h2>
          </AnimatePresence>
        </motion.div>
      )}

      {/* Foreground text color wrapper for synchronized color transition */}
      <div
        className="relative"
        style={{ color: current.fg, transition: "color 0.4s ease" }}
      >
        {/* Scroll container with CSS snap - uses window scroll on mobile */}
        <div className="snap-y snap-mandatory">
          {sections.map((s, i) => (
            <section
              id={s.id}
              key={s.id}
              ref={(el) => {
                sectionRefs.current[i] = el;
              }}
              className="snap-start h-screen w-full grid "
            >
              <div
                className={`relative z-10 w-full min-h-full grid ${
                  s.id === "archive" ? "" : "place-items-center"
                }`}
              >
                {s.component}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
