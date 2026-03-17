"use client";

import Image from "next/image";
import SectionWrapper from "./components/SectionWrapper";
import FollyCarousel from "@/app/components/FollyCarousel";

const TICKETS_URL =
  "https://www.eventbrite.com/e/reading-meg-marge-tickets-1984490866603?aff=oddtdtcreator";

const InDevelopmentSection = () => {
  return (
    <SectionWrapper className="text-right">
      <div className="w-full flex flex-col items-end">
        {/* Top block: tagline */}
        <p className="text-left lg:text-right text-base lg:text-2xl font-primary">
          Coming soon
        </p>
        <div className="w-full ml-auto mb-4 md:mb-6">
          <p>
            A two-woman comedic exploration of female desire and
            religious&nbsp;ecstasy.
          </p>
        </div>

        <div className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-3xl xl:max-w-3xl mx-auto mb-5 shrink-0">
          <FollyCarousel
            images={[
              { src: "/images/meg&marge/imageRed1.png", alt: "Meg & Marge" },
              { src: "/images/meg&marge/imageRed2.png", alt: "Meg & Marge" },
            ]}
            startAtEnd
          />
          <div className="absolute bottom-3 right-1 md:bottom-4 md:right-4 z-10 pointer-events-none flex items-center justify-center p-1 md:p-3 w-96 h-20">
            <Image
              src="/images/meg&marge/logoFlat.png"
              alt="Meg & Marge"
              width={240}
              height={68}
              className="h-16 md:h-24 w-auto object-contain border"
            />
          </div>
        </div>
        {/* Compact copy block */}
        <div className=" ml-auto lg:ml-0 text-right space-y-1 flex-shrink-0">
          <p className="text-left lg:text-right text-base lg:text-2xl">
            Megan, a devout Christian trad wife influencer, is visited by
            Margery Kempe, an unruly medieval mystic who believed herself Jesus’
            lover. This play warps a standard American kitchen into a space of
            collective, ecstatic vision; a space as intimate as a confession
            booth, as provocative as Christ in a loincloth, as queer as a gay
            trad-wife.
          </p>
          <p className="text-xs md:text-sm font-primary opacity-75 tracking-wide pt-4">
            Cosima Gardey & Fiona Tarses · Folly Productions
          </p>
          <a
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-xl md:text-2xl inline-block mt-3"
          >
            Buy tickets
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default InDevelopmentSection;
