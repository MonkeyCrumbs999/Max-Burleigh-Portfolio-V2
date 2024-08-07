import React, { useRef, useCallback, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Pic from "../assets/pic-small.webp";
import withPageTransitions from "./withPageTransitions";

const About = () => {
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

  const [src, setSrc] = useState(Pic);

  return (
    <div className="flex flex-col m-8 justify-center items-center gap-8 lg:px-4 px-2">
      <h1 className="text-4xl lg:text-4xl">More About Me</h1>
      <p className="lg:w-1/3 md:w-1/2 w-full lg:text-xl">
        Hello! My name is Max Burleigh, I'm 30 years old. Since I was a child
        I've been OBSESSED with technology. I love being at the forefront of the
        latest and greatest. I have been spent all of my working career within
        the IT sector, but I've always found love and enjoyment in web
        development, matching form with functionality. I am a perfectionist by
        nature and if there is a better way to do things: I do them. Besides web
        development, I love hip hop music and raising my two children!
      </p>
      <div className="lg:w-3/12 md:3/12 sm:w-1/2 w-full px-2">
        <motion.img
          ref={ref}
          onMouseMove={handleGesture}
          onTouchMove={handleGesture}
          onMouseLeave={handleGestureEnd}
          onTouchEnd={handleGestureEnd}
          src={src}
          alt="About me"
          className="object-contain rounded-full w-full opacity-100 transition-opacity duration-700 ease-in-out border-4 border-double border-pink-300"
          style={{ translateX: springX, translateY: springY }}
        />
      </div>
    </div>
  );
};

export default withPageTransitions(About);
