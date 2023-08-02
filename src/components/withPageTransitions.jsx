import React, { useState, useEffect } from "react";

const withPageTransitions = (WrappedComponent) => {
  return (props) => {
    const [slideIn, setSlideIn] = useState(false);

    useEffect(() => {
      setSlideIn(true);
    }, []);

    const slideClass = slideIn
      ? "translate-y-0 opacity-100"
      : "-translate-y-full opacity-0";

    return (
      <div
        className={`transition-all duration-1000 ease-in-out transform ${slideClass}`}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withPageTransitions;
