import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ServicesShowcase = () => {
  const services = [
    "Software Solutions",
    "AI solutions",
    "Automation",
    "ERP systems",
    "AI powered CRM",
    "Community Management",
    "",
  ];
  const containerRef = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Main container animations
  const boxY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [0, 1, 1, 0.3]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [0.9, 1, 1, 0.95]
  );

  // Enhanced transformations for the "WE OFFER" bubble - more dynamic movement
  const bubbleRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-12, -6, 0]); // Dynamic rotation based on scroll
  const bubbleY = useTransform(scrollYProgress, [0, 0.5, 1], [-70, -50, -30]); // Enhanced vertical movement
  const bubbleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 10, 20]); // Enhanced horizontal movement
  const bubbleScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.9, 1.1, 1.2, 1]
  ); // Scale animation

  // Service item animations
  const serviceVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  // Mobile version
  if (isMobile) {
    return (
      <motion.div
        id="services-showcase"
        ref={containerRef}
        style={{
          opacity,
          scale,
        }}
        className="relative mt-8 py-12 px-4"
      >
        {/* Empty div for scroll target positioning */}
        <div
          id="services-scroll-target"
          className="absolute top-[-100px]"
        ></div>

        <div className="relative">
          {/* "WE OFFER" pill at the top */}
          <motion.div
            className="mx-auto mb-4 bg-black rounded-full py-3 px-6 inline-flex items-center justify-center border-2 border-[#9b87f5]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              rotate: bubbleRotate,
              y: -70,
              x: 0,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="text-xl font-bold text-white whitespace-nowrap"
              animate={{
                scale: [1, 1.05, 1],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              WE OFFER 🏄‍♂️
            </motion.span>
          </motion.div>

          {/* Green rectangle with services */}
          <motion.div
            className="bg-[#8BFF00] rounded-3xl px-6 py-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              boxShadow: "0 10px 25px rgba(173, 255, 0, 0.3)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.div className="flex flex-col items-center text-center space-y-5">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="text-2xl font-bold text-black"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{
                    delay: 0.1 * index,
                    duration: 0.4,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  // Desktop version (enhanced)
  return (
    <motion.div
      id="services-showcase"
      ref={containerRef}
      style={{
        opacity,
        scale,
      }}
      className="relative py-[25px] my-[140px]"
    >
      {/* Empty div for scroll target positioning - helps ensure proper scroll positioning */}
      <div id="services-scroll-target" className="absolute top-[-100px]"></div>

      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-xl">
          {/* Green rectangle background with enhanced animations */}
          <motion.div
            className="bg-[#8BFF00] rounded-[2.5rem] p-8 pt-12 pb-12 relative z-10 max-w-xl mx-auto"
            style={{ y: boxY }}
            whileHover={{
              boxShadow: "0 20px 40px rgba(173, 255, 0, 0.3)",
              transition: { duration: 0.4 },
            }}
          >
            <motion.div className="flex flex-col items-right text-right space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="text-2xl md:text-3xl xl:text-4xl font-medium text-black"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={serviceVariants}
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* "WE OFFER" bubble - now with enhanced dynamic movement */}
          <motion.div
            className="absolute -left-10 top-20 md:-left-32 md:top-32 z-20 bg-black rounded-full p-6 md:p-8 border-2 border-[#9b87f5]"
            style={{
              y: bubbleY,
              rotate: bubbleRotate,
              scale: bubbleScale,
            }}
            whileHover={{
              scale: 1.1,
              borderColor: "#8BFF00",
              boxShadow: "0 5px 15px rgba(155, 135, 245, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="text-2xl md:text-4xl font-medium text-white whitespace-nowrap"
              animate={{
                scale: [1, 1.05, 1],
                transition: { duration: 3, repeat: Infinity },
              }}
            >
              We Offer
              <motion.span
                animate={{
                  rotate: [0, 15, 0, -15, 0],
                  x: [0, 2, 0, -2, 0],
                  transition: { duration: 2, repeat: Infinity },
                }}
                className="inline-block ml-2"
              >
                🏄‍♂️
              </motion.span>
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesShowcase;
