"use client";
import Image from "next/image";
import SectionWrapper from "./components/SectionWrapper";
import { useState, useMemo } from "react";

const ZsuzsaProfile = () => {
  return (
    <div className="text-left md:text-left">
      <h3 className="font-accent text-2xl md:text-4xl md:pb-4">
        Zsuzsa Magyar
      </h3>
      <p className="text-sm md:text-base">
        Zsuzsa Magyar is is a filmmaker, theatre director, and producer whose
        work moves between narrative film, documentary, and performance. She has
        collaborated with leading directors and producers across major
        international film, television, and theatre projects, working between
        London, New York, and Los Angeles. She studied Language and Culture at
        University College London and trained at MetFilm School, bringing a
        sharp visual sensibility and a deep love of performance to all her work.
      </p>
    </div>
  );
};

const IsobelProfile = () => {
  return (
    <div className="text-right md:text-left">
      <h3 className="font-accent text-2xl md:text-4xl md:pb-4">
        Isobel McCrum
      </h3>
      <p className="text-sm md:text-base">
        Isobel McCrum is a producer and technologist whose practice spans
        creative development and systems design. She has produced theatre and
        film projects and spent several years on the Ivy Film Festival
        committee. Her work in AI systems architecture informs her approach to
        storytelling, with a focus on the intersection of applied science,
        governance, and design. A graduate of Brown University, she has
        published and spoken widely on AI and creativity.
      </p>
    </div>
  );
};

type ProfileKey = "zsuzsa" | "isobel";

const MobileProfile = ({
  activeProfile,
  onSelectProfile,
}: {
  activeProfile: ProfileKey;
  onSelectProfile: (profile: ProfileKey) => void;
}) => {
  const profileButtons: {
    id: ProfileKey;
    activeSrc: string;
    inactiveSrc: string;
    alt: string;
    label: string;
  }[] = useMemo(
    () => [
      {
        id: "zsuzsa",
        activeSrc: "/images/team/ZUS_ACTIVE.png",
        inactiveSrc: "/images/team/ZUS_INACTIVE.png",
        alt: "Zsuzsa Profile",
        label: "Show Zsuzsa's profile",
      },
      {
        id: "isobel",
        activeSrc: "/images/team/ISO_ACTIVE.png",
        inactiveSrc: "/images/team/ISO_INACTIVE.png",
        alt: "Isobel Profile",
        label: "Show Isobel's profile",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col space-y-6">
      <div className="w-full grid grid-cols-2 gap-3">
        {profileButtons.map(({ id, activeSrc, inactiveSrc, alt, label }) => {
          const isActive = activeProfile === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={isActive}
              aria-label={label}
              onClick={() => onSelectProfile(id)}
              className={`transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black ${
                isActive ? "opacity-100" : "opacity-60"
              }`}
            >
              <Image
                src={activeSrc}
                alt={alt}
                width={600}
                height={400}
                className="w-full"
                priority={id === "zsuzsa"}
              />
            </button>
          );
        })}
      </div>

      <div>
        {activeProfile === "zsuzsa" && <ZsuzsaProfile />}
        {activeProfile === "isobel" && <IsobelProfile />}
      </div>
    </div>
  );
};

const DesktopProfile = () => {
  return (
    <div className="text-left grid md:grid-cols-3 gap-8 md:items-center md:mt-24">
      <ZsuzsaProfile />
      <Image
        src="/images/team/TEAM.png"
        alt="Profile"
        width={600}
        height={400}
        className="max-w-lg h-auto w-full hidden md:block"
      />
      <IsobelProfile />
    </div>
  );
};

const ProfileSection = () => {
  const [activeProfile, setActiveProfile] = useState<ProfileKey>("zsuzsa");

  return (
    <SectionWrapper>
      <div className="flex flex-col space-y-6 md:space-y-12">
        <h2 className="pb-6">
          Founded by two women with a lifelong focus on storytelling
          and&nbsp;collaboration.
        </h2>
        <div className="block md:hidden">
          <MobileProfile
            activeProfile={activeProfile}
            onSelectProfile={setActiveProfile}
          />
        </div>
        <div className="hidden md:block">
          <DesktopProfile />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProfileSection;
