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
  const navigate = useNavigate();

  const variants = isMobile
    ? {
        open: {
          opacity: 1,
          y: 0,
          transition: { delay: delay, duration: 0.5 },
        },
        closed: {
          opacity: 0,
          y: -10,
          transition: { duration: 0.2 },
        },
        exit: { opacity: 0, transition: { duration: 0.2 } },
      }
    : {};

  const transition = isMobile ? { delay: delay, duration: 0.5 } : {};

  const handleNavigation = (e) => {
    if (isMobile) {
      toggle();
    }
    navigate(href);
  };

  return (
    <motion.div
      className={`py-2 px-2 font-medium text-gray-500 rounded hover:bg-ceruleanCrayola hover:text-white cursor-pointer ${className}`} // Added cursor-pointer class
      variants={variants}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      exit="exit"
      transition={transition}
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      whileTap={{
        scale: 0.9,
      }}
      onClick={handleNavigation}>
      {children}
    </motion.div>
  );
};

export default NavigationItem;
