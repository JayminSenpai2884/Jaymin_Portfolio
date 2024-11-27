import React from "react";
import { motion } from "framer-motion";

const createVariant = (opacity, x, duration) => ({
  opacity: [opacity, 1, opacity],
  x: x,
  transition: {
    duration: duration,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

const linearVariants = {
  animate1: createVariant(0.5, ['-200%', '100%', '-200%'], 10),
  animate2: createVariant(0.6, ['-180%', '120%', '-180%'], 11),
  animate3: createVariant(0.7, ['-160%', '140%', '-160%'], 12),
  animate4: createVariant(0.8, ['-140%', '160%', '-140%'], 13),
  animate5: createVariant(0.9, ['-120%', '180%', '-120%'], 14),
  animate6: createVariant(1, ['-100%', '200%', '-100%'], 15),
};

const shapes = [
  { color: "bg-yellow-300", size: [350, 250], animate: "animate1" },
  { color: "bg-orange-300", size: [360, 260], animate: "animate2" },
  { color: "bg-green-300", size: [370, 270], animate: "animate3" },
  { color: "bg-teal-300", size: [380, 280], animate: "animate4" },
  { color: "bg-blue-300", size: [390, 290], animate: "animate5" },
  { color: "bg-indigo-300", size: [400, 300], animate: "animate6" },
];

const Blurbackground = () => {
  return (
    <div className="fixed top-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[120px] opacity-60">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`${shape.color} w-[${shape.size[0]}px] h-[${shape.size[1]}px] rounded-full absolute`}
          variants={linearVariants}
          animate={shape.animate}
        ></motion.div>
      ))}
    </div>
  );
};

export default Blurbackground;
