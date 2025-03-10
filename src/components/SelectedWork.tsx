import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const SelectedWork = () => {
  const { theme } = useTheme();
  
  const scrollToProjects = () => {
    // Find the ProjectShowcase element and scroll to it
    const projectsSection = document.getElementById('project-showcase');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
    console.log('Button clicked');
  };

  // New enhanced animations
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1,
        ease: "easeOut" 
      }
    }
  };

  const accentVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
        type: "spring",
        stiffness: 200
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        type: "spring"
      }
    },
    hover: { 
      y: 5, 
      borderColor: "#9b87f5",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  // Split "WORKS" into individual letters for animation
  const worksText = "WORKS";
  const worksLetters = worksText.split("");

  // Hover color that works in both light and dark themes
  const hoverColor = "#ADFF00"; // Bright green that's visible in both themes

  return (
    <div id="works" className="relative w-full min-h-[80vh] bg-background flex flex-col items-center justify-center">
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.h2 
          variants={accentVariants}
          className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-[#9b87f5] dark:text-[#9b87f5] tracking-tight mb-4"
          style={{ fontFamily: "'Times New Roman', serif" }}
          whileHover={{ 
            scale: 1.05, 
            color: hoverColor,
            transition: { duration: 0.3 }
          }}
        >
          Our
        </motion.h2>
        
        <motion.div
          className="overflow-hidden"
          variants={letterContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            {worksLetters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ 
                  color: theme === 'dark' ? 'white' : 'black',
                  fontFamily: "'Arial', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.05em"
                }}
                className="text-6xl md:text-7xl font-sans uppercase tracking-tight lg:text-9xl inline-block"
                whileHover={{ 
                  scale: 1.1, 
                  color: hoverColor, 
                  rotate: [-5, 5, 0],
                  transition: { duration: 0.3 } 
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 md:mt-16"
      >
        <motion.div 
          className="rounded-full w-16 h-28 flex items-center justify-center border-2 border-foreground/30 bg-transparent relative cursor-pointer" 
          variants={buttonVariants}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          onClick={scrollToProjects}
        >
          <motion.div
            animate={{ 
              y: [0, 5, 0],
              transition: { 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }
            }}
          >
            <ChevronDown className="w-6 h-6 text-[#ADFF00]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SelectedWork;
