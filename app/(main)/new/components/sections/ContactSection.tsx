"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "./components/SectionWrapper";
import Footer from "./Footer";

const ContactSection = () => {
  return (
    <SectionWrapper className="text-xl md:text-7xl h-full pt-12 md:pt-24">
      <div className="flex flex-col justify-between content-between place-content-between h-full">
        <div className="flex flex-col">
          <a
            href="mailto:hello@follyproduction.com"
            className="break-all md:break-normal"
          >
            hello@follyproduction.com
          </a>
          <a href="https://www.instagram.com/follyproductions/" target="_blank">
            @follyproductions
          </a>
        </div>

        <div className="absolute bottom-0 w-full right-0 left-0">
          <Footer />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
