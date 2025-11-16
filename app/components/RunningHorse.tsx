import { motion } from "framer-motion";
import Image from "next/image";

export default function RunningHorse() {
  return (
    <div className="relative w-full overflow-hidden h-20 md:h-32">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{
          x: "100vw",
          rotate: [0, -5, 5, -5, 5, 0],
          y: [0, -3, 3, -3, 3, 0],
        }}
        transition={{
          x: {
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          },
          rotate: {
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute top-0 left-0"
      >
        <Image
          src="/images/logo/FOLLY_HORSE.png"
          alt="Folly Symbol"
          width={500}
          height={500}
          className="p-2 w-24 h-24 md:w-32 md:h-32"
        />
      </motion.div>
    </div>
  );
}
