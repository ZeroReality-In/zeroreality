import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Circle,
  Triangle,
  PlusCircle,
  Square,
  Hexagon,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { useLenis } from "@/hooks/useLenis";

interface BookCallProps {
  showCalendar?: boolean;
  setShowCalendar?: (show: boolean) => void;
}

const BookCall: React.FC<BookCallProps> = (props = {}) => {
  const { showCalendar: propShowCalendar, setShowCalendar: propSetShowCalendar } = props;
  const [localShowCalendar, setLocalShowCalendar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const showCalendar = propShowCalendar ?? localShowCalendar;
  const setShowCalendar = propSetShowCalendar ?? setLocalShowCalendar;
  const lenis = useLenis({});

  useEffect(() => {
    if (window.location.hash === "#book-call") {
      const element = document.getElementById("book-call");
      if (element) {
        setTimeout(() => {
          lenis.current?.scrollTo(element, {
            offset: 0,
            immediate: false,
            lock: true,
          });
        }, 100);
      }
    }

    const handleHashChange = () => {
      if (window.location.hash === "#book-call") {
        const element = document.getElementById("book-call");
        if (element) {
          lenis.current?.scrollTo(element, {
            offset: 0,
            immediate: false,
            lock: true,
          });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const features = [
    "Get clarity on what you really want",
    "Custom-built solutions for your needs",
    "Scalable web & mobile applications",
    "Seamless AI & automation integration",
    "Transparent, async communication",
  ];

  const handleBookCallClick = () => {
    setIsLoading(true);
    setShowCalendar(true);
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Fallback timeout in case iframe doesn't load
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // 10 second timeout
  };

  const handleCloseCalendar = () => {
    setShowCalendar(false);
    setIsLoading(false);
    
    // Clear timeout when closing
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    
    // Clear timeout when iframe loads successfully
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  return (
    <>
      {showCalendar && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseCalendar();
            }
          }}
        >
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden relative">
            {/* Close button only */}
            <div className="relative bg-white rounded-t-2xl px-6 py-2">
              <div className="flex justify-end">
                <button
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                  onClick={handleCloseCalendar}
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* Loading state */}
            {isLoading && (
              <div className="absolute inset-0 bg-white flex items-center justify-center z-20">
                <div className="flex flex-col items-center gap-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-green"></div>
                  <p className="text-gray-600 text-sm">Loading calendar...</p>
                </div>
              </div>
            )}
            
            {/* Calendar iframe */}
            <div className="relative">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2tOTJX8z322jD25MZgENXtrXpVihgoU-SJAqRfcixUYz8C82NSgCdk8d5P5XMx-6IJbr2Hr3UA?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                onLoad={handleIframeLoad}
                className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"}
              />
            </div>
          </div>
        </div>
      )}

      <section
        id="book-call"
        className="px-6 relative overflow-hidden bg-background md:pt-10 md:pb-32 flex justify-center items-center"
      >
        <div className="max-w-7xl mx-auto relative w-full">
          {/* Left side decoration - rotated radial lines */}
          <motion.div
            className="absolute left-0 bottom-0 hidden lg:block"
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 0.8,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            style={{
              transform: "rotate(30deg)",
            }}
          >
            <div className="w-[250px] h-[300px] relative">
              <motion.div
                className="absolute top-20 left-10"
                initial={{
                  scale: 0,
                  rotate: 0,
                }}
                animate={{
                  scale: 1,
                  rotate: 45,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Triangle size={28} className="text-neon-green/40" />
              </motion.div>

              <motion.div
                className="absolute top-80 left-40"
                initial={{
                  scale: 0,
                  rotate: 0,
                }}
                animate={{
                  scale: 1,
                  rotate: -30,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Circle
                  size={20}
                  className="text-neon-green/30"
                  strokeWidth={1.5}
                />
              </motion.div>

              <motion.div
                className="absolute top-120 left-60"
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1.2,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              >
                <PlusCircle size={24} className="text-neon-green/50" />
              </motion.div>

              <motion.div
                className="absolute top-40 left-40"
                initial={{
                  y: 0,
                }}
                animate={{
                  y: 15,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Square
                  size={18}
                  className="text-neon-green/40"
                  strokeWidth={1.5}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Main content - centered */}
          <div className="flex justify-center">
            <motion.div
              className="w-full max-w-[400px] border-4 border-neon-green rounded-[2rem] p-6 md:p-8 relative"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
            >
              <motion.div
                className="flex flex-col"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
              >
                <motion.p
                  className="text-neon-green text-lg md:text-xl mb-3"
                  variants={itemVariants}
                >
                  Ready to talk?
                </motion.p>

                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-3"
                  variants={itemVariants}
                >
                  Lets Discuss
                </motion.h2>

                <motion.p
                  className="text-foreground/60 text-lg mb-6"
                  variants={itemVariants}
                >
                  Find what you want.
                </motion.p>

                <motion.div className="space-y-3 mb-8" variants={itemVariants}>
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.3 + index * 0.1,
                      }}
                    >
                      <div className="text-neon-green">
                        <Check size={20} />
                      </div>
                      <p className="text-foreground/80 text-sm">{feature}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex justify-center"
                >
                  <Button
                    className="rounded-full text-black bg-neon-green hover:bg-neon-green/90 text-base py-6 px-12 h-auto text-lg font-semibold"
                    size="lg"
                    onClick={handleBookCallClick}
                  >
                    <ArrowRight className="mr-2 h-4 w-4" /> Book an Intro Call
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side decoration - constellation pattern at top right */}
          <motion.div
            className="absolute right-10 top-10 hidden lg:block"
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 0.8,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            <div className="w-[200px] h-[200px] relative">
              <motion.div
                className="absolute top-10 right-20"
                initial={{
                  scale: 0,
                  rotate: 0,
                }}
                animate={{
                  scale: 1,
                  rotate: 45,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Hexagon
                  size={30}
                  className="text-neon-green/40"
                  strokeWidth={1.5}
                />
              </motion.div>

              <motion.div
                className="absolute top-60 right-30"
                initial={{
                  scale: 0,
                  opacity: 0.3,
                }}
                animate={{
                  scale: 1.2,
                  opacity: 0.7,
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              >
                <Circle
                  size={15}
                  className="text-neon-green/40"
                  fill="rgba(173, 255, 0, 0.2)"
                />
              </motion.div>

              <motion.div
                className="absolute top-30 right-50"
                initial={{
                  y: 0,
                }}
                animate={{
                  y: -10,
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              >
                <PlusCircle size={20} className="text-neon-green/50" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BookCall;
