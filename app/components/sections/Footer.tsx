import RunningHorse from "@/app/components/RunningHorse";
import { DONATE_URL } from "@/app/links";

const Footer = () => {
  return (
    <footer>
      <RunningHorse />
      <div className="flex flex-col md:flex-row py-4 md:py-6 justify-between items-center w-full max-w-7xl mx-auto px-4 md:px-6 border-t border-folly-black  font-secondary">
        <div className="text-sm md:text-lg">Based in London & New York</div>
        <a
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 md:mt-0 inline-block border border-current px-8 py-3 text-base md:text-lg font-secondary hover:bg-[#1a1a1a] hover:text-folly-white transition-colors"
        >
          Donate
        </a>
      </div>
    </footer>
  );
};

export default Footer;
