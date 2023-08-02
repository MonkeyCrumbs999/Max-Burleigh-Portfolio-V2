import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import withPageTransitions from "./withPageTransitions";

const Home = () => {
  const text = "Max Burleigh";
  const textArray = text.split("");
  const techs = [
    { icon: faHtml5, label: "HTML" },
    { icon: faCss3Alt, label: "CSS" },
    { icon: faJsSquare, label: "JavaScript" },
    { icon: faReact, label: "React" },
    { icon: faNodeJs, label: "Node.js" },
    { icon: faDatabase, label: "MongoDB" },
  ];

  return (
    <div className="bg-faedcd h-screen flex flex-col justify-start mt-24 items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-e9edc9">
        <AnimatePresence>
          {textArray.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ delay: 0.2 + index * 0.2 }}>
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </h1>
      <p className="lg:w-1/2 w-80 text-center mb-8 text-fefae0">
        This is my home page. This website is under construction. Be done soon.
      </p>
      <div className="flex flex-col mb-14 text-center text-fefae0">
        <p className="mb-2">Here are the technologies I'm good at:</p>
        <div className="flex justify-center space-x-4 mt-4">
          {techs.map((tech, index) => (
            <div className="flex flex-col items-center space-y-2" key={index}>
              <FontAwesomeIcon icon={tech.icon} size="3x" />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
      <motion.a
        href="/portfolio"
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
