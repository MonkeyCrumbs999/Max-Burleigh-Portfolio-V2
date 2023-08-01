import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavigationItem = ({
  href,
  children,
  className,
  delay,
  isMobile,
  isOpen,
  toggle,
}) => {
  // add isOpen as a prop
  const navigate = useNavigate();

  const variants = isMobile
    ? {
        open: {
          opacity: 1,
          y: 0,
          pointerEvents: "auto",
          transition: { delay: delay, duration: 0.5 },
        },
        closed: {
          opacity: 0,
          y: -10,
          pointerEvents: "none",
          transition: { duration: 0.2 },
        },
        exit: { opacity: 0, transition: { duration: 0.2 } },
      }
    : {};

  const transition = isMobile ? { delay: delay, duration: 0.5 } : {};

  const handleNavigation = (e) => {
    e.preventDefault();
    console.log("Navigating to", href);
    navigate(href);
    if (isMobile) {
      console.log("Closing menu because navigation was triggered on mobile");
      toggle(); // Call the toggle function if it's a mobile device
    }
  };

  return (
    <motion.a
      onClick={handleNavigation}
      href={href}
      className={`py-2 px-2 font-medium text-gray-500 rounded hover:bg-ceruleanCrayola hover:text-white ${className}`}
      variants={variants}
      initial={false} // Changed initial to false
      animate={isOpen ? "open" : "closed"}
      exit="exit"
      transition={transition}
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      whileTap={{
        scale: 0.9,
      }}>
      {children}
    </motion.a>
  );
};

export default NavigationItem;
