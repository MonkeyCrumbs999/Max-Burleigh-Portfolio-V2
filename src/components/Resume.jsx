import React from "react";
import { motion } from "framer-motion";
import withPageTransitions from "./withPageTransitions";

const Resume = () => {
  const resumeItems = [
    {
      id: "web-dev-full-leaf",
      date: "October 2023 - Present",
      mainTitle: "Web Developer/Project Manager",
      subTitle: "Full Leaf Tea Company",
      description: ["HTML", "CSS", "JavaScript", "Shopify Liquid"],
      link: "https://www.fullleafteacompany.com",
    },
    {
      id: "tekmanagement-inc",
      date: "September 2023 - October 2023",
      mainTitle: "Systems Support Technician",
      subTitle: "Tekmanagement Inc.",
      description: ["IT support", "Systems maintenance"],
      link: "https://www.tekmanagement.com",
    },
    {
      id: "rogue-valley-manor",
      date: "June 2022 - September 2023",
      mainTitle: "Telecommunications Technician",
      subTitle: "Rogue Valley Manor",
      description: ["Networking", "Telecommunications"],
      link: "https://www.retirement.org/rvm/",
    },
    {
      id: "olive-garden",
      date: "June 2022 - February 2023",
      mainTitle: "Server",
      subTitle: "Olive Garden",
      description: ["Customer service", "Food service"],
      link: "https://www.olivegarden.com",
    },
    {
      id: "best-buy",
      date: "November 2012 - June 2022",
      mainTitle: "Lead Field Agent (Repair/Install)",
      subTitle: "Best Buy",
      description: [
        "Technology installation",
        "Troubleshooting",
        "Technical support",
      ],
      link: "https://www.bestbuy.com",
    },
    {
      id: "dominos",
      date: "August 2019 - February 2020",
      mainTitle: "Delivery Driver",
      subTitle: "Domino's",
      description: ["Customer service", "Delivery"],
      link: "https://www.dominos.com",
    },
    {
      id: "dutch-bros-coffee",
      date: "October 2018 - February 2019",
      mainTitle: "Broista",
      subTitle: "Dutch Bros Coffee",
      description: ["Customer service", "Beverage preparation"],
      link: "https://www.dutchbros.com",
    },
    {
      id: "abbys-legendary-pizza",
      date: "April 2017 - July 2017",
      mainTitle: "Delivery Driver",
      subTitle: "Abby's Legendary Pizza",
      description: ["Customer service", "Delivery"],
      link: "https://www.abbys.com",
    },
    {
      id: "prestige-care-inc",
      date: "September 2015 - April 2016",
      mainTitle: "Medication Aide",
      subTitle: "Prestige Care Inc.",
      description: ["Medication administration", "Resident care"],
      link: "https://www.prestigecare.com",
    },
    {
      id: "lithia-driveway",
      date: "February 2014 - April 2014",
      mainTitle: "Sales Professional",
      subTitle: "Lithia & Driveway",
      description: ["Sales", "Customer service"],
      link: "https://www.lithia.com",
    },
    {
      id: "fred-meyer",
      date: "September 2011 - November 2012",
      mainTitle: "Cashier/Parcel Clerk",
      subTitle: "Fred Meyer",
      description: ["Customer service", "Cash handling"],
      link: "https://www.fredmeyer.com",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center m-8 gap-4 text-center">
      <h1 className="text-4xl text-berkeleyBlue mb-6 dark:text-white">
        Resume
      </h1>
      <div className="flex flex-col items-start w-full sm:w-1/2">
        {resumeItems.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row w-full mb-4 dark:text-white">
            {/* Date container */}
            <div className="w-full sm:w-32 text-black font-bold mb-2 sm:mb-0 dark:text-white">
              {item.date}
            </div>

            {/* Resume card container */}
            <motion.div
              id="resume-card"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              className="flex-grow rounded-lg shadow-xl bg-pink-100 hover:shadow-2xl transition-shadow duration-300 p-6 relative sm:ml-10">
              {/* Bullet positioned absolutely in resume-card */}
              <div className="bg-pink-600 rounded-full w-6 h-6 shadow-lg absolute -left-6 top-0 transform -translate-y-3 z-10"></div>

              {/* Card content */}
              <div className="font-bold text-xl mb-2 text-gray-800">
                {item.mainTitle}
              </div>
              <div className="font-semibold text-lg mb-2 text-gray-500">
                {item.subTitle}
              </div>
              <div className="flex justify-center mb-2">
                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors cursor-pointer text-white bg-pink-500 hover:bg-pink-600 rounded shadow px-3 py-2 m-1 inline-block font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  Visit Website
                </motion.a>
              </div>
              <div className="flex flex-wrap justify-center">
                {item.description.map((skill, skillIdx) => (
                  <motion.div
                    key={skill + skillIdx}
                    className="transition-colors cursor-default text-white bg-pink-500 hover:bg-pink-600 rounded shadow p-2 m-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withPageTransitions(Resume);
