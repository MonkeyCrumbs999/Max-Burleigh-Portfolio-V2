import React, { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Pic from "../assets/pic.webp";
import withPageTransitions from "./withPageTransitions";

const About = () => {
  const [loading, setLoading] = useState(true); // Loading state for the image
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const ref = useRef();

  const handleGesture = useCallback(
    (event) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const clientX =
          event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
        const clientY =
          event.type === "touchmove" ? event.touches[0].clientY : event.clientY;
        const xPos = (clientX - (rect.left + rect.width / 2)) / rect.width;
        const yPos = (clientY - (rect.top + rect.height / 2)) / rect.height;

        x.set(xPos * 50);
        y.set(yPos * 50);
      }
    },
    [x, y]
  );

  const handleGestureEnd = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  // Function to handle the image load event
  const handleImageLoad = () => {
    setLoading(false); // Set loading state to false when the image is loaded
  };

  return (
    <div className="flex flex-col mt-12 justify-center items-center gap-8 lg:px-4 px-2">
      <h1 className="text-2xl lg:text-4xl">More About Me</h1>
      <p className="lg:w-1/3 w-full text-lg lg:text-xl px-2">
        Hello! My name is Max Burleigh, I'm 29 years old. Since I was a child
        I've been OBSESSED with technology. I love being at the forefront of the
        latest and greatest. I have been spent all of my working career within
        the IT sector, but I've always found love and enjoyment in web
        development, matching form with functionality. I am a perfectionist by
        nature and if there is a better way to do things: I do them. Besides web
        development, I love hip hop music and raising my two children!
      </p>
      <div className="lg:w-3/12 w-full px-2 relative">
        {loading && (
          <div className="animate-pulse bg-pink-200 object-contain rounded-full w-full h-full absolute top-0 left-0"></div>
        )}
        <motion.img
          ref={ref}
          onMouseMove={handleGesture}
          onTouchMove={handleGesture}
          onMouseLeave={handleGestureEnd}
          onTouchEnd={handleGestureEnd}
          src={Pic}
          alt="About me"
          className="object-contain rounded-full drop-shadow-lg shadow-md border-8 border-double border-pink-200 w-full"
          style={{ translateX: springX, translateY: springY }}
          onLoad={handleImageLoad} // Handle image load
        />
      </div>
    </div>
  );
};

export default withPageTransitions(About);
