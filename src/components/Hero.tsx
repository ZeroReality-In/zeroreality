
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const dynamicTexts = ["Websites", "Mobile Applications", "Designs", "AI Solutions"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Floating elements setup
  const floatingElements = [
    { delay: 0, duration: 4 },
    { delay: 1.5, duration: 5 },
    { delay: 0.8, duration: 6 },
  ];

  useEffect(() => {
    // Start the floating animation sequence
    controls.start("animate");
    
    // Typing effect
    const text = dynamicTexts[currentTextIndex];
    
    const typeWriter = () => {
      if (isDeleting) {
        // Deleting text
        setDisplayText(text.substring(0, displayText.length - 1));
        setTypingSpeed(50); // faster when deleting
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % dynamicTexts.length);
          setTypingSpeed(150);
        }
      } else {
        // Typing text
        setDisplayText(text.substring(0, displayText.length + 1));
        
        if (displayText === text) {
          // Pause at the end before deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, dynamicTexts, typingSpeed, controls]);
  
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

  const floatingVariants = {
    initial: { y: 0, opacity: 0.3 },
    animate: {
      y: [0, -15, 0, -5, 0],
      opacity: [0.3, 0.7, 0.5, 0.8, 0.3],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        delay: 0,
        duration: 4,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    }
  };
  
  const scrollToWork = () => {
    const element = document.getElementById('works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/30" />
      
      {/* Background floating elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute w-2 h-2 rounded-full bg-neon-green/20 ${
            index === 0 ? 'left-[30%] top-[20%]' : 
            index === 1 ? 'right-[25%] top-[30%]' : 
            'left-[40%] bottom-[30%]'
          }`}
          style={{ 
            width: `${(index + 1) * 8}px`, 
            height: `${(index + 1) * 8}px` 
          }}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          custom={{
            delay: element.delay,
            duration: element.duration
          }}
        />
      ))}
      
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        className="text-center z-10 max-w-5xl mx-auto pt-24"
      >
        <div className="flex flex-col gap-4 items-center">
          <motion.div 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-foreground tracking-tight"
            animate={{
              textShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 5px rgba(255,255,255,0.3)",
                "0 0 0px rgba(255,255,255,0)"
              ],
              transition: { duration: 3, repeat: Infinity }
            }}
          >
            We Build Awesome
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-neon-green tracking-tight h-20 md:h-24 lg:h-32 flex items-center"
            animate={{
              filter: [
                "drop-shadow(0 0 0px rgba(173,255,0,0))",
                "drop-shadow(0 0 8px rgba(173,255,0,0.5))",
                "drop-shadow(0 0 0px rgba(173,255,0,0))"
              ],
              transition: { duration: 4, repeat: Infinity }
            }}
          >
            {displayText}<span className="animate-pulse">|</span>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="mt-8 text-foreground/60 text-sm flex items-center justify-center"
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.05, 1],
              transition: { duration: 5, repeat: Infinity }
            }}
          >
            <motion.span animate={{ rotate: [0, 5, 0, -5, 0], transition: { duration: 5, repeat: Infinity } }}>✦</motion.span>
            <span className="mx-2">INNOVATE · CREATE · DELIVER</span>
            <motion.span animate={{ rotate: [0, -5, 0, 5, 0], transition: { duration: 5, repeat: Infinity, delay: 0.5 } }}>✦</motion.span>
          </motion.div>
          
          <motion.button 
            variants={buttonVariants} 
            whileHover="hover" 
            whileTap={{ scale: 0.95 }} 
            className="mt-16 relative flex items-center justify-center gap-4 bg-transparent border border-foreground/20 text-foreground py-4 px-10 rounded-full overflow-hidden group"
            onClick={scrollToWork}
            animate={{
              boxShadow: [
                "0 0 0 rgba(255,255,255,0)",
                "0 0 10px rgba(255,255,255,0.1)",
                "0 0 0 rgba(255,255,255,0)"
              ],
              transition: { duration: 3, repeat: Infinity }
            }}
          >
            <span className="z-10 font-medium text-xl">View Our Work</span>
            <motion.div 
              className="z-10 bg-neon-green rounded-full p-2" 
              whileHover={{ rotate: 45, backgroundColor: "#8BFF00" }}
              animate={{ 
                y: [0, -5, 0], 
                transition: { duration: 2, repeat: Infinity } 
              }}
            >
              <ArrowDown size={20} className="text-black" />
            </motion.div>
            <motion.div 
              className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-300"
              animate={{
                background: [
                  "rgba(255,255,255,0.03)",
                  "rgba(255,255,255,0.07)",
                  "rgba(255,255,255,0.03)"
                ],
                transition: { duration: 4, repeat: Infinity }
              }}
            />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
