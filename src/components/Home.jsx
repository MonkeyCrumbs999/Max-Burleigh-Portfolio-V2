import { motion, AnimatePresence } from "framer-motion";
import withPageTransitions from "./withPageTransitions";

const Home = () => {
  const text = "Max Burleigh";
  const textArray = text.split("");

  return (
    <div className="bg-faedcd h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-e9edc9">
        <AnimatePresence>
          {textArray.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ delay: index * 0.1 }} // Increase delay for each letter
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </h1>
      <p className="lg:w-1/2 w-80 text-center mb-16 text-fefae0">
        This is my home page. This website is under construction. Be done soon.
      </p>

      <motion.a
        href="#"
        className="py-2 px-4 bg-nonPhotoBlue text-#213547 font-semibold rounded-lg shadow-md hover:bg-ceruleanCrayola hover:text-white"
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        whileTap={{
          scale: 0.9,
        }}>
        See my work
      </motion.a>
    </div>
  );
};

export default withPageTransitions(Home);
