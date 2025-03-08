
import { motion } from "framer-motion";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ServicesShowcase = () => {
  const isMobile = useIsMobile();
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

  return (
    <motion.div 
      className="relative mt-12 md:mt-32 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-3xl">
          {/* Green rectangle background */}
          <motion.div 
            className="bg-neon-green rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 pt-12 pb-12 md:pt-16 md:pb-16 relative z-10"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.div 
              className="flex flex-col items-end text-right space-y-1 sm:space-y-2"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="font-display text-lg sm:text-2xl md:text-4xl xl:text-6xl font-bold text-black"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* "WE OFFER" bubble */}
          <motion.div
            className="absolute -left-4 sm:-left-8 md:-left-24 lg:-left-32 top-8 sm:top-12 md:top-24 lg:top-32 z-20 bg-black rounded-full p-3 sm:p-5 md:p-8 lg:p-10"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
          >
            <span className="font-display text-sm sm:text-xl md:text-3xl lg:text-4xl font-bold text-white whitespace-nowrap">
              WE OFFER 🏄
            </span>
          </motion.div>

          {/* Pixel cursor */}
          <motion.div
            className="absolute -right-10 -bottom-10 sm:-right-20 sm:-bottom-20 z-20"
            initial={{ opacity: 0, x: -50, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <svg width={isMobile ? "60" : "120"} height={isMobile ? "60" : "120"} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
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
