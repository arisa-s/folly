import Image from "next/image";
import SectionWrapper from "./components/SectionWrapper";

const ProfileSection = () => {
  return (
    <SectionWrapper>
      <div className="md:grid md:grid-cols-5 gap-8 md:gap-12 items-center">
        <div className="md:col-span-2">
          <Image
            src="/images/TEAM.jpg"
            alt="Profile"
            width={600}
            height={400}
            className="max-w-md h-auto w-full"
          />
        </div>

        <div className="space-y-6 text-left md:col-span-3">
          <div>
            <h3 className="font-accent text-3xl md:text-5xl pb-4">
              Zsuzsa Magyar (on left)
            </h3>
            <p className="text-sm md:text-base">
              Zsuzsa Magyar is a filmmaker, theatre director, and producer whose
              work moves between film, theatre, and documentary. She recently
              directed the UK premiere of Doomers by Matthew Gasda at the Rose
              Lipman Building. Her experience includes collaborations with
              high-profile directors and producers across major film,
              television, and theatre projects, and she has worked
              internationally in London, New York, and Los Angeles.
            </p>
            <p className="text-sm md:text-base">
              Zsuzsa studied Language and Culture at University College London
              and trained at MetFilm School, bringing a sharp visual sensibility
              and a deep love of performance to all her work.
            </p>
          </div>
          <div>
            <h3 className="font-accent text-3xl md:text-5xl pb-4">
              Isobel McCrum (on right)
            </h3>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus erat non facilisis accumsan. Cras vestibulum bibendum
              gravida. Morbi gravida suscipit maximus. Aliquam bibendum nunc id
              mi blandit ullamcorper. Morbi semper cursus felis eget laoreet.
              Nam porta sed est quis interdum. Morbi quis mi iaculis leo lacinia
              consectetur.
            </p>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus erat non facilisis accumsan. Cras vestibulum bibendum
              gravida. Morbi gravida suscipit maximus. Aliquam bibendum nunc id
              mi blandit ullamcorper. Morbi semper cursus felis eget laoreet.
              Nam porta sed est quis interdum. Morbi quis mi iaculis leo lacinia
              consectetur.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProfileSection;
