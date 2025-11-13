import Image from "next/image";
import SectionWrapper from "./components/SectionWrapper";

const ProfileSection = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-5 gap-36">
        <div className="col-span-2">
          <Image
            src="/images/TEAM.jpg"
            alt="Profile"
            width={600}
            height={400}
            className="max-w-lg h-auto"
          />
        </div>

        <div className="space-y-6 text-left col-span-3">
          <div>
            <h3>Zsuzsa Magyar (on left)</h3>
            <p className="font-secondary text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus erat non facilisis accumsan. Cras vestibulum bibendum
              gravida. Morbi gravida suscipit maximus. Aliquam bibendum nunc id
              mi blandit ullamcorper. Morbi semper cursus felis eget laoreet.
              Nam porta sed est quis interdum. Morbi quis mi iaculis leo lacinia
              consectetur.
            </p>
          </div>
          <div>
            <h3>Isobel McCrum (on right)</h3>
            <p className="font-secondary text-sm">
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
