import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faGoogle,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faFire,
  faCamera,
  faRobot,
  faBullhorn,
  faTasksAlt,
  faEnvelope,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import withPageTransitions from "./withPageTransitions";
import OpenAIBlack from "../assets/ai-icons/OpenAI-black/OpenAI_Symbol_0.svg";
import OpenAIWhite from "../assets/ai-icons/OpenAI-white/OpenAI_Symbol_0.svg";
import AnthropicBlack from "../assets/ai-icons/Anthropic-black/Anthropic_Logo_0.svg";
import AnthropicWhite from "../assets/ai-icons/Anthropic-white/Anthropic_Logo_0.svg";

const Home = () => {
  const text = "Max Burleigh";
  const textArray = text.split("");
  // Separate OpenAI and Anthropic from the rest of the tech stack
  const featuredTechs = [
    {
      label: "OpenAI",
      type: "img",
      lightSrc: OpenAIBlack,
      darkSrc: OpenAIWhite,
      large: true,
    },
    {
      label: "Anthropic",
      type: "img",
      lightSrc: AnthropicBlack,
      darkSrc: AnthropicWhite,
      large: true,
    },
  ];
  const techs = [
    { icon: faHtml5, label: "HTML", type: "fa" },
    { icon: faCss3Alt, label: "CSS", type: "fa" },
    { icon: faJsSquare, label: "JavaScript", type: "fa" },
    { icon: faReact, label: "React", type: "fa" },
    { icon: faNodeJs, label: "Node.js", type: "fa" },
    { icon: faDatabase, label: "MongoDB", type: "fa" },
    { icon: faFire, label: "Firebase", type: "fa" },
    { icon: faReact, label: "NextJS", type: "fa" },
  ];

  const additionalSkills = [
    { icon: faCamera, label: "Photoshop", type: "fa" },
    { icon: faRobot, label: "AI Tools", type: "fa" },
    { icon: faBullhorn, label: "Marketing & Advertising", type: "fa" },
    { icon: faGoogle, label: "Google (Ads)", type: "fa" },
    { icon: faMicrosoft, label: "Microsoft (Ads)", type: "fa" },
    { icon: faEnvelope, label: "Email Marketing", type: "fa" },
    { icon: faShoppingBag, label: "Shopify", type: "fa" },
    { icon: faTasksAlt, label: "Project Management", type: "fa" },
  ];

  // SkillIcon component for theme-based icon switching
  const SkillIcon = ({ lightSrc, darkSrc, alt, className }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
      const match = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDark(match.matches);
      const handler = (e) => setIsDark(e.matches);
      match.addEventListener("change", handler);
      return () => match.removeEventListener("change", handler);
    }, []);

    return (
      <img src={isDark ? darkSrc : lightSrc} alt={alt} className={className} />
    );
  };

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
        {/* Featured row for OpenAI and Anthropic */}
        <div className="flex justify-center items-end gap-16 my-4">
          {featuredTechs.map((tech, index) => (
            <div className="flex flex-col items-center space-y-2" key={index}>
              <SkillIcon
                lightSrc={tech.lightSrc}
                darkSrc={tech.darkSrc}
                alt={tech.label}
                className={
                  tech.label === "Anthropic"
                    ? "w-20 h-20 lg:w-28 lg:h-28"
                    : "w-16 h-16 lg:w-24 lg:h-24"
                }
              />
              <p className="text-base lg:text-xl font-bold text-center">
                {tech.label}
              </p>
            </div>
          ))}
        </div>
        {/* Grid for the rest of the tech stack */}
        <div className="grid grid-cols-4 gap-2 justify-items-center mt-4 px-2">
          {techs.map((tech, index) => (
            <div
              className="flex flex-col items-center space-y-2 mb-4"
              key={index}
            >
              <FontAwesomeIcon
                icon={tech.icon}
                className="w-8 h-8 lg:w-12 lg:h-12"
              />
              <p className="text-xs lg:text-base">{tech.label}</p>
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-evenly lg:items-center mt-4 px-2 lg:px-8 max-w-6xl w-full">
          {additionalSkills.map((skill, index) => (
            <div
              className="flex flex-col items-center space-y-2 mb-4 lg:mx-4"
              key={index}
            >
              <FontAwesomeIcon
                icon={skill.icon}
                className="w-8 h-8 lg:w-10 lg:h-10"
              />
              <p className="text-xs lg:text-base text-center">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withPageTransitions(Home);
