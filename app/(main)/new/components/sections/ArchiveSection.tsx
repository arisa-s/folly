"use client";
import SectionWrapper from "./components/SectionWrapper";
import FollyCarousel from "@/app/components/FollyCarousel";

const ArchiveSection = () => {
  return (
    <SectionWrapper>
      <h2 className="">DOOMERS</h2>
      <p className="font-secondary text-sm">a play written by Matthew Gasda</p>
      <a
        href="https://www.doomerslondon.com"
        target="_blank"
        className="inline-block font-secondary text-sm underline hover:no-underline transition-all cursor-pointer"
      >
        Learn more
      </a>
      <div>
        <FollyCarousel
          images={[
            { src: "/images/doomers/DOOMERS_1.avif", alt: "Doomers" },
            { src: "/images/doomers/DOOMERS_2.avif", alt: "Doomers" },
            { src: "/images/doomers/DOOMERS_3.avif", alt: "Doomers" },
            { src: "/images/doomers/DOOMERS_4.avif", alt: "Doomers" },
          ]}
        />
      </div>
    </SectionWrapper>
  );
};

export default ArchiveSection;
