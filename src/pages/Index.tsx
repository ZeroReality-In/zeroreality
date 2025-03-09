
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesShowcase from "@/components/ServicesShowcase";
import TextMarquee from "@/components/TextMarquee";
import WhyUs from "@/components/WhyUs";
import SelectedWork from "@/components/SelectedWork";
import ProjectShowcase from "@/components/ProjectShowcase";
import BookCall from "@/components/BookCall";
import Footer from "@/components/Footer";
import { useTheme } from "@/components/ThemeProvider";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();
  
  const translateY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const translateY3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateY4 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const translateY5 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const translateY6 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const translateY7 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const translateY8 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-30, 330]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [20, -160]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [-15, 45]);
  const rotate5 = useTransform(scrollYProgress, [0, 1], [10, -80]);
  const rotate6 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate7 = useTransform(scrollYProgress, [0, 1], [-20, 90]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative overflow-x-hidden">
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div 
            key="content" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }} 
            className="min-h-screen bg-background"
          >
            {/* Original green circle */}
            <motion.div 
              className="fixed left-[10%] top-[20%] w-16 h-16 md:w-24 md:h-24 z-0 pointer-events-none"
              style={{ y: translateY1, rotate: rotate1 }}
              animate={{
                scale: [1, 1.1, 0.9, 1],
                opacity: [0.6, 0.8, 0.6],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="50" 
                  fill={theme === 'dark' ? "#8BFF00" : "#7AC70C"} 
                  fillOpacity={theme === 'dark' ? "0.1" : "0.25"}
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="30" 
                  fill={theme === 'dark' ? "#8BFF00" : "#7AC70C"} 
                  fillOpacity={theme === 'dark' ? "0.2" : "0.4"}
                />
              </svg>
            </motion.div>
            
            {/* Purple square at bottom left */}
            <motion.div 
              className="fixed left-[5%] bottom-[15%] w-20 h-20 md:w-32 md:h-32 z-0 pointer-events-none"
              style={{ y: translateY2, rotate: rotate2 }}
              animate={{
                x: [0, 10, -10, 0],
                scale: [1, 0.95, 1.05, 1],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect 
                  width="100" 
                  height="100" 
                  fill={theme === 'dark' ? "#8F7AFF" : "#7B5AF5"} 
                  fillOpacity={theme === 'dark' ? "0.1" : "0.25"}
                  transform="rotate(45 50 50)"
                />
                <rect 
                  x="25" 
                  y="25" 
                  width="50" 
                  height="50" 
                  fill={theme === 'dark' ? "#8F7AFF" : "#7B5AF5"} 
                  fillOpacity={theme === 'dark' ? "0.2" : "0.4"}
                  transform="rotate(45 50 50)"
                />
              </svg>
            </motion.div>
            
            {/* Pink hexagon */}
            <motion.div 
              className="fixed right-[5%] top-[15%] w-12 h-12 md:w-16 md:h-16 z-0 pointer-events-none"
              style={{ y: translateY3 }}
              animate={{
                rotate: [0, 15, -15, 0],
                opacity: [0.7, 1, 0.7],
                transition: {
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" 
                  fill={theme === 'dark' ? "#FF00D6" : "#D946EF"} 
                  fillOpacity={theme === 'dark' ? "0.1" : "0.25"}
                />
                <path 
                  d="M50 20L79.3893 35V65L50 80L20.6107 65V35L50 20Z" 
                  fill={theme === 'dark' ? "#FF00D6" : "#D946EF"} 
                  fillOpacity={theme === 'dark' ? "0.2" : "0.4"}
                />
              </svg>
            </motion.div>
            
            {/* Orange triangle */}
            <motion.div 
              className="fixed right-[15%] bottom-[25%] w-14 h-14 md:w-20 md:h-20 z-0 pointer-events-none"
              style={{ y: translateY4, rotate: rotate3 }}
              animate={{
                scale: [1, 1.1, 1],
                x: [0, -15, 0, 15, 0],
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M50 0L100 86.6H0L50 0Z" 
                  fill={theme === 'dark' ? "#F97316" : "#FB923C"} 
                  fillOpacity={theme === 'dark' ? "0.1" : "0.25"}
                />
                <path 
                  d="M50 20L83.3 76.6H16.7L50 20Z" 
                  fill={theme === 'dark' ? "#F97316" : "#FB923C"} 
                  fillOpacity={theme === 'dark' ? "0.2" : "0.4"}
                />
              </svg>
            </motion.div>
            
            {/* Blue circle */}
            <motion.div 
              className="fixed left-[20%] top-[70%] w-10 h-10 md:w-16 md:h-16 z-0 pointer-events-none"
              style={{ y: translateY5, rotate: rotate4 }}
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.15, 0.95, 1],
                transition: {
                  duration: 9,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="50" 
                  fill={theme === 'dark' ? "#0EA5E9" : "#38BDF8"} 
                  fillOpacity={theme === 'dark' ? "0.1" : "0.25"}
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="30" 
                  fill={theme === 'dark' ? "#0EA5E9" : "#38BDF8"} 
                  fillOpacity={theme === 'dark' ? "0.2" : "0.4"}
                />
              </svg>
            </motion.div>
            
            {/* Yellow star */}
            <motion.div 
              className="fixed right-[30%] top-[30%] w-8 h-8 md:w-12 md:h-12 z-0 pointer-events-none"
              style={{ y: translateY6, rotate: rotate5 }}
              animate={{
                scale: [1, 1.2, 0.9, 1],
                filter: ["drop-shadow(0 0 0 rgba(245, 158, 11, 0))", "drop-shadow(0 0 5px rgba(245, 158, 11, 0.3))", "drop-shadow(0 0 0 rgba(245, 158, 11, 0))"],
                transition: {
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M50 0L61.8 38.2H100L69.1 61.8L80.9 100L50 76.4L19.1 100L30.9 61.8L0 38.2H38.2L50 0Z" 
                  fill={theme === 'dark' ? "#F59E0B" : "#FBBF24"} 
                  fillOpacity={theme === 'dark' ? "0.1" : "0.25"}
                />
                <path 
                  d="M50 20L57.3 44.7H82.7L62.7 60.6L70 85.3L50 69.4L30 85.3L37.3 60.6L17.3 44.7H42.7L50 20Z" 
                  fill={theme === 'dark' ? "#F59E0B" : "#FBBF24"} 
                  fillOpacity={theme === 'dark' ? "0.2" : "0.4"}
                />
              </svg>
            </motion.div>
            
            {/* New: Red Diamond */}
            <motion.div 
              className="fixed left-[40%] top-[10%] w-6 h-6 md:w-10 md:h-10 z-0 pointer-events-none"
              style={{ y: translateY7, rotate: rotate6 }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect 
                  width="70" 
                  height="70" 
                  fill={theme === 'dark' ? "#EF4444" : "#F87171"} 
                  fillOpacity={theme === 'dark' ? "0.1" : "0.25"}
                  x="15"
                  y="15"
                  transform="rotate(45 50 50)"
                />
                <rect 
                  width="40" 
                  height="40" 
                  fill={theme === 'dark' ? "#EF4444" : "#F87171"} 
                  fillOpacity={theme === 'dark' ? "0.2" : "0.4"}
                  x="30"
                  y="30"
                  transform="rotate(45 50 50)"
                />
              </svg>
            </motion.div>
            
            {/* New: Cyan Oval */}
            <motion.div 
              className="fixed right-[20%] bottom-[10%] w-12 h-8 md:w-16 md:h-10 z-0 pointer-events-none"
              style={{ y: translateY8, rotate: rotate7 }}
              animate={{
                opacity: [0.5, 0.9, 0.5],
                x: [0, 15, 0, -15, 0],
                transition: {
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }
              }}
            >
              <svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse 
                  cx="50" 
                  cy="35" 
                  rx="50" 
                  ry="35" 
                  fill={theme === 'dark' ? "#06B6D4" : "#22D3EE"} 
                  fillOpacity={theme === 'dark' ? "0.1" : "0.25"}
                />
                <ellipse 
                  cx="50" 
                  cy="35" 
                  rx="30" 
                  ry="20" 
                  fill={theme === 'dark' ? "#06B6D4" : "#22D3EE"} 
                  fillOpacity={theme === 'dark' ? "0.2" : "0.4"}
                />
              </svg>
            </motion.div>
            
            <Navbar />
            <div className="relative z-10">
              <Hero />
              <ServicesShowcase />
              <TextMarquee />
              <SelectedWork />
              <ProjectShowcase />
              <WhyUs />
              <BookCall />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-background flex items-center justify-center z-50" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ 
          scale: 1, 
          opacity: 1, 
          transition: { delay: 0.2, duration: 0.5 } 
        }} 
        exit={{ 
          scale: 1.2, 
          opacity: 0, 
          transition: { duration: 0.3 } 
        }} 
        className="flex flex-col items-center"
      >
        <motion.div 
          className="text-4xl font-bold text-foreground mb-4" 
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [0.98, 1.02, 0.98],
            rotate: [-1, 1, -1],
            filter: ["drop-shadow(0 0 0 rgba(255,255,255,0))", "drop-shadow(0 0 8px rgba(173,255,0,0.5))", "drop-shadow(0 0 0 rgba(255,255,255,0))"]
          }} 
          transition={{ 
            repeat: Infinity, 
            duration: 2, 
            ease: "easeInOut" 
          }}
        >
          ZERO REALITY
        </motion.div>
        <motion.div className="h-1 w-40 bg-muted rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-neon-green" 
            initial={{ width: 0 }} 
            animate={{ width: "100%" }} 
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Enhanced pulsating dots for loading animation */}
        <motion.div className="flex mt-4 space-x-3">
          {[0, 1, 2].map((index) => (
            <motion.div 
              key={index}
              className="w-2 h-2 bg-neon-green rounded-full"
              animate={{ 
                scale: [0.8, 1.5, 0.8], 
                opacity: [0.5, 1, 0.5],
                boxShadow: ["0 0 0 rgba(173,255,0,0)", "0 0 10px rgba(173,255,0,0.7)", "0 0 0 rgba(173,255,0,0)"]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity, 
                delay: index * 0.3 
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
