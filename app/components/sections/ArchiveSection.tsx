"use client";
import SectionWrapper from "./components/SectionWrapper";
import FollyCarousel from "@/app/components/FollyCarousel";

const ArchiveSection = () => {
  return (
    <SectionWrapper className="pt-30 md:pt-0">
      <div className="w-full flex flex-col items-start gap-4 ">
        <div className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl ml-auto -mr-2 md:-mr-9">
          <FollyCarousel
            images={[
              { src: "/images/doomers/DOOMERS_4.avif", alt: "Doomers" },
              { src: "/images/doomers/DOOMERS_1.png", alt: "Doomers" },
              { src: "/images/doomers/DOOMERS_2.avif", alt: "Doomers" },
              { src: "/images/doomers/DOOMERS_3.avif", alt: "Doomers" },
            ]}
          />
        </div>
        <div className="ml-auto">
          <h2 className="text-xl md:text-4xl font-secondary">DOOMERS</h2>
          <p className="text-xl md:text-2xl">A play written by Matthew Gasda</p>
          <a
            className="underline text-xl md:text-2xl inline-block"
            href="https://www.doomerslondon.com"
            target="_blank"
          >
            Learn more
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ArchiveSection;
