import React from "react";
import withPageTransitions from "./withPageTransitions";
import genesisImage from "../assets/genesis-port-1.png";
import webwaveImage from "../assets/webwave-port-2.png";
import maxBImage from "../assets/max-burleigh-port-3.png";
import reboundImage from "../assets/rebound-port-4.png";
import vinscribeImage from "../assets/vinscribe-port-5.png"; // Add the new image import
import carlyImage from "../assets/carly-port-6.png"; // Add the new image import
import shopDowntownLogo from "../assets/shop-downtown-logo-transparent.png";
import fullLeafLogo from "../assets/Logo_Website.png";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      mainTitle: "Full Leaf Tea Company",
      subTitle: "Organic Loose Leaf Tea & Wellness Shopify Store",
      description: [
        "HTML",
        "CSS",
        "JavaScript",
        "Liquid",
        "OpenAI",
        "Anthropic",
        "APIs",
        "Klaviyo",
        "Google Ads",
        "Microsoft Ads",
        "Facebook Ads",
        "Amazon Seller Central",
      ],
      image: fullLeafLogo,
      link: "https://fullleafteacompany.com",
      longDescription: `Full Leaf Tea Company is a leading online retailer of organic loose leaf teas, matcha, and wellness blends. Built on Shopify, the site features a robust e-commerce experience, wellness resources, and a customer-focused approach. Integrations with OpenAI, Anthropic, and custom APIs enhance the shopping and support experience. The brand is dedicated to quality, wellness, and exceptional customer service, offering a wide range of teas and accessories to promote a healthy lifestyle.`,
    },
    {
      mainTitle: "VINSCRIBE",
      subTitle: "Full-Stack SaaS Website",
      description: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "NextJS14",
        "Firebase",
        "Full-Stack Development",
        "APIs",
        "OpenAI API",
      ],
      image: vinscribeImage,
      link: "https://www.vinscribe.com", // Replace with the actual link
    },
    {
      mainTitle: "Shop Downtown",
      subTitle: "Virtual City & Local Business Platform",
      description: [
        "HTML",
        "TailwindCSS",
        "JavaScript",
        "PHP",
        "Full-Stack Development",
        "E-commerce Platform",
      ],
      image: shopDowntownLogo,
      link: "https://shopdowntown.org",
      longDescription: `Shop Downtown is a platform that revitalizes local economies by connecting communities with their downtown businesses. It features a virtual city experience, allowing users to explore and shop from local merchants online, access exclusive deals, and support community health initiatives. The platform empowers small businesses with an enhanced digital presence, drives both online and foot traffic, and donates a portion of proceeds to local health organizations.`,
    },
    {
      mainTitle: "Carly Pearl-Sacks Photography",
      subTitle: "Photography Website",
      description: ["HTML", "CSS", "JavaScript", "React"],
      image: carlyImage,
      link: "https://www.carlypsphoto.com", // Replace with the actual link
    },
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
    {
      mainTitle: "Rebound",
      subTitle: "Front-End Website",
      description: ["HTML", "CSS", "JavaScript", "Shopify", "APIs"],
      image: reboundImage,
      link: null, // No link for Rebound
    },
  ];

  return (
    <div className="flex flex-col items-center m-8 gap-4 text-center">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden m-4 w-full"
        >
          <img
            className={
              project.mainTitle === "Shop Downtown" ||
              project.mainTitle === "Full Leaf Tea Company"
                ? "w-1/2 mx-auto my-4"
                : "w-full"
            }
            style={
              project.mainTitle === "Shop Downtown" ||
              project.mainTitle === "Full Leaf Tea Company"
                ? { maxWidth: "180px", height: "auto" }
                : {}
            }
            src={project.image}
            alt={`${project.mainTitle} - ${project.subTitle}`}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-1">{project.mainTitle}</div>
            <div className="font-bold text-lg mb-2">{project.subTitle}</div>
            {project.link ? (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 px-1 md:py-2 md:px-2 mx-4 md:mx-24 mt-4 md:mt-6 font-medium text-gray-600 bg-nonPhotoBlue rounded hover:bg-ceruleanCrayola hover:text-white mb-2 block text-center"
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                Website Link
              </motion.a>
            ) : (
              <motion.button
                className="py-1 px-1 md:py-2 md:px-2 mx-auto mt-4 md:mt-6 font-medium text-gray-600 bg-nonPhotoBlue rounded hover:bg-ceruleanCrayola hover:text-white mb-2 block text-center"
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                Redesign Coming Soon
              </motion.button>
            )}
            <ul className="list-square list-outside pl-5 mt-6 text-base">
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
