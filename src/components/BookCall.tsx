import { motion } from "framer-motion";
import { ArrowRight, Check, Circle, Triangle, PlusCircle, Square, Hexagon, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const BookCall = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  
  useEffect(() => {
    if (window.location.hash === '#book-call') {
      const element = document.getElementById('book-call');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
    
    const handleHashChange = () => {
      if (window.location.hash === '#book-call') {
        const element = document.getElementById('book-call');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
  
  const features = [
    "Get clarity on what you really want", 
    "Custom-built solutions for your needs", 
    "Scalable web & mobile applications", 
    "Seamless AI & automation integration", 
    "Transparent, async communication"
  ];
  
  const handleBookCallClick = () => {
    setShowCalendar(true);
  };
  
  return (
    <>
      {showCalendar && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowCalendar(false);
            }
          }}
        >
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden relative">
            <button 
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-10 rounded-full p-1"
              onClick={() => setShowCalendar(false)}
            >
              <X size={24} />
            </button>
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2tOTJX8z322jD25MZgENXtrXpVihgoU-SJAqRfcixUYz8C82NSgCdk8d5P5XMx-6IJbr2Hr3UA?gv=true" 
              style={{ border: 0 }} 
              width="100%" 
              height="600" 
              frameBorder="0"
            />
          </div>
        </div>
      )}
      
      <section id="book-call" className="px-6 relative overflow-hidden bg-background md:pt-10 md:pb-32 flex justify-center items-center">
        <div className="max-w-7xl mx-auto relative w-full">
          {/* Left side decoration - rotated radial lines */}
          <motion.div className="absolute left-0 bottom-0 hidden lg:block" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 0.8,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7,
            delay: 0.3
          }} style={{
            transform: "rotate(30deg)"
          }}>
            <div className="w-[250px] h-[300px] relative">
              <motion.div className="absolute top-20 left-10" initial={{
              scale: 0,
              rotate: 0
            }} animate={{
              scale: 1,
              rotate: 45
            }} transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}>
                <Triangle size={28} className="text-neon-green/40" />
              </motion.div>
              
              <motion.div className="absolute top-80 left-40" initial={{
              scale: 0,
              rotate: 0
            }} animate={{
              scale: 1,
              rotate: -30
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.5
            }}>
                <Circle size={20} className="text-neon-green/30" strokeWidth={1.5} />
              </motion.div>
              
              <motion.div className="absolute top-120 left-60" initial={{
              scale: 0
            }} animate={{
              scale: 1.2
            }} transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.8
            }}>
                <PlusCircle size={24} className="text-neon-green/50" />
              </motion.div>
              
              <motion.div className="absolute top-40 left-40" initial={{
              y: 0
            }} animate={{
              y: 15
            }} transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1
            }}>
                <Square size={18} className="text-neon-green/40" strokeWidth={1.5} />
              </motion.div>
            </div>
          </motion.div>

          {/* Main content - centered */}
          <div className="flex justify-center">
            <motion.div className="w-full max-w-[480px] border-4 border-neon-green rounded-[2.5rem] p-8 md:p-10 relative" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true,
              margin: "-100px"
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }}>
              <motion.div className="flex flex-col" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: "-100px"
              }}>
                <motion.p className="text-neon-green text-xl md:text-2xl mb-4" variants={itemVariants}>
                  Ready to talk?
                </motion.p>
                
                <motion.h2 className="text-4xl md:text-5xl font-bold mb-4" variants={itemVariants}>
                  Lets Discuss
                </motion.h2>
                
                <motion.p className="text-foreground/60 text-xl mb-8" variants={itemVariants}>
                  Find what you want.
                </motion.p>
                
                <motion.div className="space-y-4 mb-10" variants={itemVariants}>
                  {features.map((feature, index) => (
                    <motion.div key={index} className="flex items-center gap-3" initial={{
                      opacity: 0,
                      y: 10
                    }} whileInView={{
                      opacity: 1,
                      y: 0
                    }} viewport={{
                      once: true
                    }} transition={{
                      delay: 0.3 + index * 0.1
                    }}>
                      <div className="text-neon-green">
                        <Check size={24} />
                      </div>
                      <p className="text-foreground/80">{feature}</p>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex justify-center">
                  <Button 
                    className="rounded-full text-black bg-neon-green hover:bg-neon-green/90 text-lg py-8 px-14 h-auto text-xl font-semibold" 
                    size="lg"
                    onClick={handleBookCallClick}
                  >
                    <ArrowRight className="mr-2 h-5 w-5" /> Book an Intro Call
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side decoration - constellation pattern at top right */}
          <motion.div className="absolute right-10 top-10 hidden lg:block" initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 0.8,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7,
            delay: 0.3
          }}>
            <div className="w-[200px] h-[200px] relative">
              <motion.div className="absolute top-10 right-20" initial={{
              scale: 0,
              rotate: 0
            }} animate={{
              scale: 1,
              rotate: 45
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}>
                <Hexagon size={30} className="text-neon-green/40" strokeWidth={1.5} />
              </motion.div>
              
              <motion.div className="absolute top-60 right-30" initial={{
              scale: 0,
              opacity: 0.3
            }} animate={{
              scale: 1.2,
              opacity: 0.7
            }} transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.3
            }}>
                <Circle size={15} className="text-neon-green/40" fill="rgba(173, 255, 0, 0.2)" />
              </motion.div>
              
              <motion.div className="absolute top-30 right-50" initial={{
              y: 0
            }} animate={{
              y: -10
            }} transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.8
            }}>
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
