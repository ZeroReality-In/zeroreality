
import { motion } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "./ThemeProvider";

const TextMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const items = ["IDEATE", "DESIGN", "EVOLVE"];
  
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 15,
          ease: "linear"
        }
      }
    }
  };

  // Dynamic background animation
  const bgAnimation = {
    animate: {
      background: theme === 'dark' 
        ? ['rgba(0,0,0,1)', 'rgba(0,0,0,0.98)', 'rgba(0,0,0,1)']
        : ['rgba(245,245,245,1)', 'rgba(240,240,240,0.98)', 'rgba(245,245,245,1)'],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <motion.div 
      ref={containerRef}
      className={`relative overflow-hidden w-full py-12 md:py-[141px] ${theme === 'dark' ? 'bg-black' : 'bg-secondary'}`}
      variants={bgAnimation}
      animate="animate"
    >
      <div 
        className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-black via-transparent to-black' 
            : 'bg-gradient-to-r from-secondary via-transparent to-secondary'
        }`} 
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} 
        className="relative flex whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            variants={marqueeVariants}
            animate="animate"
            className="flex items-center whitespace-nowrap"
            style={{
              x: i * 1000
            }}
          >
            {items.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center"
                whileHover={{ 
                  scale: 1.1, 
                  color: theme === 'dark' ? '#ADFF00' : '#7AC70C',
                  transition: { duration: 0.2 }
                }}
              >
                <motion.span 
                  className={`text-5xl md:text-7xl lg:text-8xl font-display font-bold mx-4 md:mx-6 ${
                    theme === 'dark' ? 'text-white' : 'text-foreground'
                  }`}
                  animate={{ 
                    y: [0, -5, 0, -3, 0],
                    rotate: [-1, 1, -1, 0.5, -1],
                    filter: [
                      "drop-shadow(0 0 0px rgba(255,255,255,0))",
                      "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                      "drop-shadow(0 0 0px rgba(255,255,255,0))"
                    ]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    delay: index * 0.3,
                    ease: "easeInOut"
                  }}
                >
                  {item}
                </motion.span>
                <motion.span 
                  className={`text-5xl md:text-7xl lg:text-8xl font-display font-bold mx-4 md:mx-6 ${
                    theme === 'dark' ? 'text-white' : 'text-foreground'
                  }`}
                  animate={{ 
                    scale: [1, 1.2, 1, 1.1, 1],
                    rotate: [0, 10, 0, 5, 0],
                    opacity: [0.7, 1, 0.7, 0.9, 0.7],
                    filter: theme === 'dark' ? [
                      "drop-shadow(0 0 0px rgba(173,255,0,0))",
                      "drop-shadow(0 0 8px rgba(173,255,0,0.3))",
                      "drop-shadow(0 0 0px rgba(173,255,0,0))"
                    ] : undefined
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  ✦
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TextMarquee;
