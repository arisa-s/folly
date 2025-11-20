"use client";

import SectionWrapper from "./components/SectionWrapper";
import Footer from "./Footer";

const ContactSection = () => {
  return (
    <SectionWrapper className="text-xl sm:text-4xl md:text-5xl lg:text-7xl h-full">
      <div className="grid grid-rows-3 h-full">
        <div />
        <div className="flex flex-col">
          <a
            href="mailto:hello@follyproductions.com"
            className="break-all md:break-normal"
          >
            hello@follyproductions.com
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
