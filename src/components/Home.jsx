import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faFire,
  faCamera,
  faRobot,
  faBullhorn,
  faTasksAlt,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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
    { icon: faFire, label: "Firebase" },
    { icon: faReact, label: "NextJS" },
  ];

  const additionalSkills = [
    { icon: faCamera, label: "Photoshop" },
    { icon: faRobot, label: "AI Tools" },
    { icon: faBullhorn, label: "Marketing & Advertising" },
    { icon: faTasksAlt, label: "Project Management" },
  ];

  return (
    <div className="bg-faedcd flex flex-col justify-start lg:mt-12 sm:mt-10 mt-6 items-center dark:text-white">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-4xl font-black mt-6 mb-6 text-e9edc9">
        <AnimatePresence>
          {textArray.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </h1>
      <p className="lg:w-1/3 md:w-2/3 sm:w-3/4 w-full text-center mb-6 text-fefae0 px-4 sm:px-2">
        Welcome to my official portfolio website! I am a full-stack web
        developer, project manager, and overall lover of 'getting things done'
        based in Oregon!{" "}
      </p>
      <div className="flex flex-col mb-8 text-center text-fefae0">
        <p className="mb-2">Here is my tech stack:</p>
        <div className="flex flex-wrap justify-center lg:space-x-4 md:space-x-2 sm:space-x-1 space-x-0 mt-4">
          {techs.map((tech, index) => (
            <div
              className="flex flex-col items-center space-y-2 mb-4 lg:w-auto md:w-1/4 sm:w-1/4 w-1/4 px-1 lg:px-2"
              key={index}
            >
              <FontAwesomeIcon icon={tech.icon} size="3x" />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <Link
          to="/portfolio"
          className="py-2 px-4 bg-nonPhotoBlue text-#213547 font-semibold rounded-lg shadow-md hover:bg-ceruleanCrayola hover:text-white dark:text-gray-500"
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          See my work
        </Link>
      </motion.div>

      <div className="flex flex-col mt-12 mb-8 text-center text-fefae0">
        <p className="mb-2">Additional Skills:</p>
        <div className="flex flex-wrap justify-center lg:space-x-4 md:space-x-2 sm:space-x-1 space-x-0 mt-4">
          {additionalSkills.map((skill, index) => (
            <div
              className="flex flex-col items-center space-y-2 mb-4 lg:w-auto md:w-1/4 sm:w-1/4 w-1/4 px-1 lg:px-2"
              key={index}
            >
              <FontAwesomeIcon icon={skill.icon} size="2x" />
              <p>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withPageTransitions(Home);
