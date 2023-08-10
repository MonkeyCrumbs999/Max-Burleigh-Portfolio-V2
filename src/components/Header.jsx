import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";
import useWindowDimensions from "./useWindowDimensions";
import NavigationItem from "./NavigationItem";

const Header = () => {
  const { width } = useWindowDimensions();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = width <= 768;
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "More About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggle = () => {
    if (isMobile) setIsOpen((prevState) => !prevState);
  };

  const menuIcon = (
    <svg
      className="w-4 h-4 text-ceruleanCrayola"
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
  );

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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <GitHubIcon className="w-6 h-6 text-ceruleanCrayola" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/max-burleigh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <LinkedInIcon className="w-6 h-6 text-ceruleanCrayola" />
            </motion.a>
          </div>
          {pathname !== "/" && (
            <motion.div
              className="text-2xl text-ceruleanCrayola self-center grow-0 lg:grow lg:ml-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>
              max burleigh
            </motion.div>
          )}
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
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggle();
              }
            }}>
            <button className="outline-none mobile-menu-button">
              {menuIcon}
            </button>
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            className="md:hidden"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={{
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
            }}
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
