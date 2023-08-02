import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationItem from "./NavigationItem";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";
import useWindowDimensions from "./useWindowDimensions";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { width } = useWindowDimensions();
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const isMobile = width <= 768;

  const toggle = () => {
    if (isMobile) setIsOpen((prevState) => !prevState);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "More About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const variants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.5, type: "tween" },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.5, type: "tween" },
    },
  };

  return (
    <nav className="bg-nonPhotoBlue shadow-lg font-sans">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div
          className={`flex ${
            pathname === "/" && isMobile ? "justify-between" : "justify-evenly"
          } lg:justify-between`}>
          <div className="flex items-center space-x-4 lg:pt-0">
            <motion.a
              href="https://github.com/MonkeyCrumbs999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.9 }}>
              <GitHubIcon className="w-6 h-6 text-ceruleanCrayola" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/max-burleigh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.9 }}>
              <LinkedInIcon className="w-6 h-6 text-ceruleanCrayola" />
            </motion.a>
            {pathname !== "/" && (
              <span className="text-2xl text-ceruleanCrayola mr-[1.5rem] lg:mr-0">
                max burleigh
              </span>
            )}
          </div>
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <NavigationItem key={item.name} href={item.path}>
                {item.name}
              </NavigationItem>
            ))}
          </div>
          <div
            className="md:hidden flex items-center p-2 transition duration-300"
            onClick={toggle}
            tabIndex={0} // Add tabIndex attribute
            role="button" // Add role attribute
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggle();
              }
            }}>
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-4 h-4 text-ceruleanCrayola"
                x-show="!showMenu"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            className="md:hidden"
            variants={variants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            debugRender={true}>
            {navItems.map((item, index) => (
              <NavigationItem
                key={item.name}
                href={item.path}
                delay={isOpen && isMobile ? index * 0.1 : 0}
                isOpen={isOpen}
                isMobile={isMobile}
                toggle={toggle}
                className="block py-2 px-4 w-[250px] m-auto text-sm text-center hover:bg-ceruleanCrayola">
                {item.name}
              </NavigationItem>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;
