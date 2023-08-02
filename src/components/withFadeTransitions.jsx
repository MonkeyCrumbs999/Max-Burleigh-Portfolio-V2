import React, { useState, useEffect } from "react";

const withFadeTransitions = (WrappedComponent) => {
  return (props) => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
      setFadeIn(true);
    }, []);

    const fadeClass = fadeIn ? "opacity-100" : "opacity-0";

    return (
      <div
        className={`transition-opacity duration-300 ease-in-out ${fadeClass}`}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withFadeTransitions;
