import React from "react";
import { motion } from "framer-motion";

const withPageTransitions = (WrappedComponent) => {
  return (props) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, damping: 8 }}>
        {" "}
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
};

export default withPageTransitions;
