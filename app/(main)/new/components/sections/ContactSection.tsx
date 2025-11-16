"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "./components/SectionWrapper";

const ContactSection = () => {
  return (
    <SectionWrapper className="text-xl md:text-7xl">
      <a
        href="mailto:hello@follyproduction.com"
        className="break-all md:break-normal"
      >
        hello@follyproduction.com
      </a>
      <a href="https://www.instagram.com/follyproductions/" target="_blank">
        @follyproductions
      </a>
    </SectionWrapper>
  );
};

export default ContactSection;
