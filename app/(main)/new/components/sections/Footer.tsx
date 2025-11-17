import RunningHorse from "@/app/components/RunningHorse";

const Footer = () => {
  return (
    <footer>
      <RunningHorse />
      <div className="flex flex-col md:flex-row py-4 md:py-6 justify-between items-center w-full max-w-7xl mx-auto px-4 md:px-6 border-t border-folly-black  font-secondary">
        <div className="text-sm md:text-lg">
          Based between London and New York
        </div>
        <div>
          <div className="flex md:flex-row items-start md:items-center gap-4 md:gap-6 ml-auto md:ml-0 py-4 md:py-6">
            <div className="text-sm md:text-lg text-center md:text-right">
              <p>Folly productions limited</p>
              <p>9 st Quintin</p>
              <p>W10 6NX</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
