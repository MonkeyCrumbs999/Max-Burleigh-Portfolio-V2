import React from "react";
import withPageTransitions from "./withPageTransitions";
import genesisImage from "../assets/genesis-port-1.png";
import webwaveImage from "../assets/webwave-port-2.png";
import maxBImage from "../assets/max-burleigh-port-3.png";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      mainTitle: "Genesis",
      subTitle: "Full-Stack Tech Support App",
      description: [
        "React",
        "Express",
        "MongoDB",
        "Node.js",
        "HTML",
        "CSS",
        "JavaScript",
        "RESTful APIs",
        "Git",
        "GitHub",
        "Netlify",
      ],
      image: genesisImage,
      link: "https://thriving-palmier-d79b26.netlify.app/",
    },
    {
      mainTitle: "Webwave Building",
      subTitle: "Front-End Website",
      description: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
      image: webwaveImage,
      link: "https://courageous-dusk-02a58b.netlify.app/",
    },
    {
      mainTitle: "Max Burleigh Portfolio V1",
      subTitle: "Front-End Website",
      description: ["HTML", "CSS", "Javascript", "Vanilla Languages"],
      image: maxBImage,
      link: "https://dancing-eclair-388e8c.netlify.app/",
    },
  ];

  return (
    <div className="flex flex-col items-center m-8 gap-4 text-center">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden m-4 w-full">
          <img
            className="w-full"
            src={project.image}
            alt={`${project.mainTitle} - ${project.subTitle}`}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-1">{project.mainTitle}</div>
            <div className="font-bold text-lg mb-2">{project.subTitle}</div>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 px-1 md:py-2 md:px-2 mx-4 md:mx-24 mt-4 md:mt-6 font-medium text-gray-600 bg-nonPhotoBlue rounded hover:bg-ceruleanCrayola hover:text-white mb-2 block text-center"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.9 }}>
              Netlify Link
            </motion.a>

            <ul className="list-square list-outside pl-5 text-gray-700 mt-6 text-base">
              {project.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withPageTransitions(Portfolio);
