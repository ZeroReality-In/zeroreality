import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const dynamicTexts = ["WEBSITES", "APPS", "DESIGN", "AI"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
    }, 1750); // Change word every 1.75 seconds
    
    return () => clearInterval(interval);
  }, [dynamicTexts.length]);
  
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };
  
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };
  
  const textVariants = {
    initial: { 
      opacity: 0,
      y: 20 
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };
  
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.6,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400
      }
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/30" />
      
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        className="text-center z-10 max-w-5xl mx-auto pt-24"
      >
        <div className="flex flex-col gap-4 items-center">
          <motion.div 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-8xl tracking-tight"
            style={{ 
              fontFamily: " 'Inter Tight', 'Inter Tight Placeholder', sans-serif",
              fontWeight: 400,
              letterSpacing: "-0.02em"
            }}
          >
            We Build Awesome
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 h-20 md:h-24 lg:h-32"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTextIndex}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-4xl md:text-6xl lg:text-8xl font-bold text-neon-green tracking-tight"
                style={{ 
                  fontWeight: 700,
                  letterSpacing: "-0.01em"
                }}
              >
                {dynamicTexts[currentTextIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="mt-8 text-foreground/60 text-sm flex items-center justify-center"
            style={{ fontFamily: "'Arial', sans-serif", letterSpacing: "0.1em" }}
          >
            ✦ INNOVATE · CREATE · DELIVER ✦
          </motion.div>
          
          <motion.button 
            variants={buttonVariants} 
            whileHover="hover" 
            whileTap={{ scale: 0.95 }} 
            className="mt-16 relative flex items-center justify-center gap-4 bg-transparent border border-foreground/20 text-foreground py-4 px-10 rounded-full overflow-hidden group"
          >
            <span className="z-10 font-medium text-xl" style={{ fontFamily: "'Arial', sans-serif" }}>View Our Work</span>
            <motion.div 
              className="z-10 bg-neon-green rounded-full p-2" 
              whileHover={{ rotate: 45, backgroundColor: "#8BFF00" }}
            >
              <ArrowDown size={20} className="text-black" />
            </motion.div>
            <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-300" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
