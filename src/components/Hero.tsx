
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const isMobile = useIsMobile();

  const serviceTexts = ["websites", "mobile applications", "ai solutions", "DESIGN"];
  const questionText = "Ready to scale your brand?";
  const staticText = "We create Awesome";

  useEffect(() => {
    // Blink the cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      // Typing effect for the current service
      if (displayedText.length < serviceTexts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + serviceTexts[currentTextIndex][prev.length]);
        }, 100);
      } else {
        // Pause at the end of typing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
        }, 50);
      } else {
        // Move to the next service text
        timeout = setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % serviceTexts.length);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentTextIndex, isTyping, serviceTexts]);

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
    <div className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/30" />
      
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        className="text-center z-10 max-w-5xl mx-auto pt-20 md:pt-24 w-full"
      >
        <div className="flex flex-col gap-2 sm:gap-4 items-center">
          <motion.h1 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-display font-bold text-foreground tracking-tight mb-1 sm:mb-2 px-2"
          >
            {questionText}
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-display font-bold text-foreground tracking-tight mb-2 sm:mb-4 px-2"
          >
            {staticText}
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-display font-bold text-neon-green tracking-tight flex items-center"
          >
            <span>{displayedText}</span>
            <span className={`ml-1 w-1 h-8 sm:h-12 md:h-16 bg-neon-green inline-block ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
          </motion.div>
          
          <motion.button 
            variants={buttonVariants} 
            whileHover="hover" 
            whileTap={{ scale: 0.95 }} 
            className="mt-8 sm:mt-12 md:mt-16 relative flex items-center justify-center gap-2 sm:gap-4 bg-transparent border border-foreground/20 text-foreground py-3 sm:py-4 px-6 sm:px-10 rounded-full overflow-hidden group"
          >
            <span className="z-10 font-medium text-base sm:text-xl">View pricing</span>
            <motion.div 
              className="z-10 bg-neon-green rounded-full p-1.5 sm:p-2" 
              whileHover={{ rotate: 45, backgroundColor: "#8BFF00" }}
            >
              <ArrowDown size={isMobile ? 16 : 20} className="text-black" />
            </motion.div>
            <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-300" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
