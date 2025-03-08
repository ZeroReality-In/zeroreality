
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ServicesShowcase = () => {
  const services = [
    "UX & Strategy",
    "Concepting",
    "UI Design",
    "Design Systems",
    "Brand Identity",
    "Style Guides",
    "Websites",
    "Prototyping"
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Main container animations
  const boxY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.9, 1, 1, 0.95]);
  
  // Enhanced transformations for the "WE OFFER" bubble - more dynamic movement
  const bubbleRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8]); // Dynamic rotation based on scroll
  const bubbleY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -20, -40]); // Enhanced vertical movement
  const bubbleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 10, 20]); // Enhanced horizontal movement
  const bubbleScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1.1, 1.2, 1]); // Scale animation

  return (
    <motion.div 
      ref={containerRef}
      className="relative mt-16 md:mt-32 pb-32"
      style={{ opacity, scale }}
    >
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-4xl mx-auto"> 
          {/* Green rectangle background */}
          <motion.div 
            className="bg-neon-green rounded-[2.5rem] p-8 pt-12 pb-12 relative z-10 mx-auto flex justify-end" 
            style={{ y: boxY }}
          >
            <motion.div className="flex flex-col items-end text-right space-y-4 w-3/4 md:w-2/3 lg:w-1/2">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="font-display text-2xl md:text-3xl xl:text-4xl font-bold text-black"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ 
                    delay: 0.1 * index, 
                    duration: 0.5 
                  }}
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* "WE OFFER" bubble - now with enhanced dynamic movement */}
          <motion.div
            className="absolute -left-8 top-20 md:-left-16 md:top-32 z-20 bg-black rounded-full p-4 md:p-6 border-2 border-[#9b87f5]"
            style={{ 
              y: bubbleY,
              x: bubbleX,
              rotate: bubbleRotate,
              scale: bubbleScale
            }}
          >
            <span className="font-display text-xl md:text-2xl font-bold text-white whitespace-nowrap">
              WE OFFER 🏄
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesShowcase;
