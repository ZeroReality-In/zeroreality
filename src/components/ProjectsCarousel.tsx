
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ProjectsCarousel = () => {
  const containerRef = useRef(null);
  
  const items = [
    { text: "IDEATE" },
    { text: "DESIGN" },
    { text: "DEVELOP" },
    { text: "EXECUTE" },
    { text: "DELIVER" }
  ];

  return (
    <div className="py-24 md:py-32 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-black z-0" />
      
      {/* Horizontal line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white opacity-20" />
      
      {/* Main carousel container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
            OUR PROCESS
          </h2>
        </motion.div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {items.map((item, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-center h-full"
                >
                  <div className="p-8 border border-white/10 rounded-xl bg-black/50 flex items-center h-36">
                    <span className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-white">
                      {item.text}
                    </span>
                    <span className="text-white text-3xl mx-4">✦</span>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Process visualization - continuous process line with dots */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div className="h-px w-full bg-white/30 relative">
            {/* Arrow animation for continuous flow */}
            <motion.div 
              className="absolute inset-0 h-full bg-neon-green"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ 
                duration: 3,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            />
          </div>
          <div className="absolute top-0 left-0 flex justify-between w-full">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-neon-green -translate-y-1/2 relative z-10">
                  {/* Pulse effect for each step */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-neon-green/50"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0.2, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      delay: index * 0.5,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-xs text-white/70 mt-2"
                >
                  {item.text}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Horizontal line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white opacity-20" />
    </div>
  );
};

export default ProjectsCarousel;
