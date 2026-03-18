"use client";

import SectionWrapper from "./components/SectionWrapper";
import Footer from "./Footer";

const ContactSection = () => {
  return (
    <SectionWrapper className="text-xl sm:text-4xl md:text-5xl lg:text-7xl flex-1 !py-0">
      <div className="flex flex-col flex-1 min-h-[calc(100vh-0px)]">
        <div className="flex-1 flex items-end">
          <div className="flex flex-col py-52 md:py-40">
            <a
              href="mailto:hello@follyproductions.com"
              className="break-all md:break-normal"
            >
              hello@follyproductions.com
            </a>
            <a
              href="https://www.instagram.com/follyproductions/"
              target="_blank"
            >
              @follyproductions
            </a>
          </div>
        </div>
        <div className="w-full mt-auto">
          <Footer />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
