import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        bounce: 0.35,
        opacity: { duration: 0.4 },
      }}
      className="w-full bg-yellow-200 text-berkeleyBlue dark:bg-yellow-300 dark:text-berkeleyBlue shadow-lg rounded-xl flex flex-col sm:flex-row items-center justify-center gap-2 py-2 px-4 text-center text-sm sm:text-base font-semibold z-40 border border-yellow-300/60"
      style={{ marginTop: "0.5rem" }}
    >
      <span className="font-bold mr-2">5-9-2025</span>
      <span>
        This portfolio website is going to be replaced with a newer, better
        version soon! Keep your eyes peeled{" "}
        <span role="img" aria-label="eyes">
          👀
        </span>
      </span>
    </motion.div>
  );
};

export default Banner;
