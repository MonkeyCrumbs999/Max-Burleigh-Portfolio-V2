import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Pic from "../assets/pic.jpg";
import withPageTransitions from "./withPageTransitions";

const About = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const ref = useRef();

  const handleGesture = (event) => {
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
  };

  const handleGestureEnd = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex flex-col mt-12 justify-center items-center gap-8">
      <h1>More About Me</h1>
      <p className="lg:w-1/3 w-5/6">
        Hello! My name is Max Burleigh, I'm 29 years old. Since I was a child
        I've been OBSESSED with technology. I love being at the forefront of the
        latest and greatest. I have been spent all of my working career within
        the IT sector, but I've always found love and enjoyment in web
        development, matching form with functionality. I am a perfectionist by
        nature and if there is a better way to do things: I do them. Besides web
        development, I love hip hop music and raising my two children!
      </p>
      <div className="lg:w-3/12 w-10/12">
        <motion.img
          ref={ref}
          onMouseMove={handleGesture}
          onTouchMove={handleGesture}
          onMouseLeave={handleGestureEnd}
          onTouchEnd={handleGestureEnd}
          src={Pic}
          alt="About me"
          className="object-contain rounded-full drop-shadow-lg shadow-md border-8 border-double border-pink-200"
          style={{ translateX: springX, translateY: springY }}
        />
      </div>
    </div>
  );
};

export default withPageTransitions(About);
