"use client";
import Image from "next/image";
import SectionWrapper from "./components/SectionWrapper";
import { useState } from "react";

const ZsuzsaProfile = () => {
  return (
    <div className="text-left md:text-left">
      <h3 className="font-accent text-2xl md:text-4xl pb-4">Zsuzsa Magyar</h3>
      <p className="text-sm md:text-base">
        Zsuzsa Magyar is a filmmaker, theatre director, and producer whose work
        moves between film, theatre, and documentary. She recently directed the
        UK premiere of Doomers by Matthew Gasda at the Rose Lipman Building. Her
        experience includes collaborations with high-profile directors and
        producers across major film, television, and theatre projects, and she
        has worked internationally in London, New York, and Los Angeles.
      </p>
      <p className="text-sm md:text-base">
        Zsuzsa studied Language and Culture at University College London and
        trained at MetFilm School, bringing a sharp visual sensibility and a
        deep love of performance to all her work.
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
        erat non facilisis accumsan. Cras vestibulum bibendum gravida. Morbi
        gravida suscipit maximus. Aliquam bibendum nunc id mi blandit
        ullamcorper. Morbi semper cursus felis eget laoreet. Nam porta sed est
        quis interdum. Morbi quis mi iaculis leo lacinia consectetur.
      </p>
      <p className="text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
        erat non facilisis accumsan. Cras vestibulum bibendum gravida.
      </p>
    </div>
  );
};

const MobileProfile = () => {
  const [activeProfile, setActiveProfile] = useState<"zsuzsa" | "isobel">(
    "zsuzsa"
  );
  return (
    <div className="flex flex-col space-y-6">
      <div className="w-full grid grid-cols-2">
        <button onClick={() => setActiveProfile("zsuzsa")} className="">
          <Image
            src={
              activeProfile === "zsuzsa"
                ? "/images/team/ZUS_ACTIVE.png"
                : "/images/team/ZUS_INACTIVE.png"
            }
            alt="Zsuzsa Profile"
            width={600}
            height={400}
            className="w-full"
          />
        </button>
        <button onClick={() => setActiveProfile("isobel")} className="">
          <Image
            src={
              activeProfile === "isobel"
                ? "/images/team/ISO_ACTIVE.png"
                : "/images/team/ISO_INACTIVE.png"
            }
            alt="Isobel Profile"
            width={600}
            height={400}
            className="w-full"
          />
        </button>
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
  return (
    <SectionWrapper>
      <div className="flex flex-col space-y-6 md:space-y-12">
        <h2 className="pb-6">
          Founded by two women with a lifelong focus on storytelling
          and&nbsp;collaboration.
        </h2>
        <div className="block md:hidden">
          <MobileProfile />
        </div>
        <div className="hidden md:block">
          <DesktopProfile />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProfileSection;
