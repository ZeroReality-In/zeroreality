
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

  const boxY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.9, 1, 1, 0.95]);
  
  // Enhanced transformations for the "WE OFFER" bubble - fixed angle with movement
  const bubbleRotate = -5; // Fixed rotation angle
  const bubbleY = useTransform(scrollYProgress, [0, 1], [0, -40]); // Enhanced vertical movement
  const bubbleX = useTransform(scrollYProgress, [0, 1], [0, 20]); // Added horizontal movement

  return (
    <motion.div 
      ref={containerRef}
      className="relative mt-16 md:mt-32 pb-32"
      style={{ opacity, scale }}
    >
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-xl"> 
          {/* Green rectangle background */}
          <motion.div 
            className="bg-neon-green rounded-[2.5rem] p-8 pt-12 pb-12 relative z-10 max-w-xl mx-auto" 
            style={{ y: boxY }}
          >
            <motion.div 
              className="flex flex-col items-end text-right space-y-4" /* Increased space-y from 3 to 4 */
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-black" /* Increased font sizes further */
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* "WE OFFER" bubble - now with fixed angle and enhanced movement */}
          <motion.div
            className="absolute -left-10 top-20 md:-left-32 md:top-32 z-20 bg-black rounded-full p-6 md:p-8 border-2 border-[#9b87f5]"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: bubbleRotate }} 
            transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
            style={{ 
              y: bubbleY,
              x: bubbleX,
              rotate: bubbleRotate // Keep the angle fixed
            }}
          >
            <span className="font-display text-2xl md:text-4xl font-bold text-white whitespace-nowrap">
              WE OFFER 🏄
            </span>
          </motion.div>

          {/* Floating plus elements - repositioned to not overlap with text */}
          <motion.div
            className="absolute right-[-20%] bottom-[-15%] z-20 w-32 h-32 md:w-48 md:h-48"
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [0, -100]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, 20]) 
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 0H20V20H0V40H20V60H40V40H60V20H40V0Z" fill="#8F7AFF"/>
              <path d="M100 40H80V60H60V80H80V100H100V80H120V60H100V40Z" fill="#8F7AFF"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesShowcase;
