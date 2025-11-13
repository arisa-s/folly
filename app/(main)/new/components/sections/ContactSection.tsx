import Image from "next/image";
import SectionWrapper from "./components/SectionWrapper";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};
const ContactSection = () => {
  return (
    <SectionWrapper className="text-8xl">
      <a href="mailto:hello@follyproduction.com">hello@follyproduction.com</a>
      <a href="https://www.instagram.com/follyproductions/" target="_blank">
        @follyproductions
      </a>

      {/* <p>Please attach materials — we’ll read them.</p> */}
    </SectionWrapper>
  );
};

export default ContactSection;
