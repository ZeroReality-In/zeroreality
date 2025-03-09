
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";

const BookCall = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  return (
    <section id="book-call" className="py-24 md:py-32 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto relative">
        {/* Left side decoration - rotated radial lines */}
        <motion.div 
          className="absolute left-0 bottom-0 hidden lg:block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ transform: "rotate(30deg)" }}
        >
          <div className="w-[250px] h-[300px] relative">
            <svg width="250" height="300" viewBox="0 0 250 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Radial lines pattern */}
              <circle cx="125" cy="150" r="10" fill="#ADFF00" opacity="0.9" />
              
              {/* Diagonal lines */}
              <path d="M125 150 L225 50" stroke="#ADFF00" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" />
              <path d="M125 150 L225 250" stroke="#ADFF00" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" />
              <path d="M125 150 L25 250" stroke="#ADFF00" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" />
              <path d="M125 150 L25 50" stroke="#ADFF00" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" />
              
              {/* Horizontal and vertical lines */}
              <path d="M125 150 L225 150" stroke="#ADFF00" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" />
              <path d="M125 150 L25 150" stroke="#ADFF00" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" />
              <path d="M125 150 L125 250" stroke="#ADFF00" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" />
              <path d="M125 150 L125 50" stroke="#ADFF00" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" />
              
              {/* Accent dots at the end of lines */}
              <circle cx="225" cy="50" r="5" fill="#ADFF00" opacity="0.7" />
              <circle cx="225" cy="250" r="5" fill="#ADFF00" opacity="0.7" />
              <circle cx="25" cy="50" r="5" fill="#ADFF00" opacity="0.7" />
              <circle cx="25" cy="250" r="5" fill="#ADFF00" opacity="0.7" />
              
              {/* Small squares along the lines */}
              <rect x="175" y="100" width="4" height="4" fill="#ADFF00" opacity="0.8" />
              <rect x="75" y="100" width="4" height="4" fill="#ADFF00" opacity="0.8" />
              <rect x="175" y="200" width="4" height="4" fill="#ADFF00" opacity="0.8" />
              <rect x="75" y="200" width="4" height="4" fill="#ADFF00" opacity="0.8" />
            </svg>
          </div>
        </motion.div>

        {/* Main content - centered */}
        <div className="flex justify-center">
          <motion.div 
            className="w-full max-w-[480px] border-4 border-neon-green rounded-[2.5rem] p-8 md:p-10 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="flex flex-col"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p 
                className="text-neon-green text-xl md:text-2xl mb-4"
                variants={itemVariants}
              >
                Ready to talk?
              </motion.p>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-4"
                variants={itemVariants}
              >
                Lets Discuss
              </motion.h2>
              
              <motion.p 
                className="text-foreground/60 text-xl mb-8"
                variants={itemVariants}
              >
                Find what you want.
              </motion.p>
              
              <motion.div 
                className="space-y-4 mb-10"
                variants={itemVariants}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="text-neon-green">
                      <Check size={24} />
                    </div>
                    <p className="text-foreground/80">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="flex justify-center"
              >
                <Button 
                  className="rounded-full text-black bg-neon-green hover:bg-neon-green/90 text-lg py-6 px-10"
                  size="lg"
                >
                  <ArrowRight className="mr-2" /> Book an Intro Call
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side decoration - constellation pattern at top right */}
        <motion.div 
          className="absolute right-10 top-10 hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="w-[200px] h-[200px] relative">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Grid lines (more subtle) */}
              <path d="M0 0 H200" stroke="#ADFF00" strokeWidth="0.5" opacity="0.3" />
              <path d="M0 50 H200" stroke="#ADFF00" strokeWidth="0.5" opacity="0.3" />
              <path d="M0 100 H200" stroke="#ADFF00" strokeWidth="0.5" opacity="0.3" />
              <path d="M0 150 H200" stroke="#ADFF00" strokeWidth="0.5" opacity="0.3" />
              <path d="M0 200 H200" stroke="#ADFF00" strokeWidth="0.5" opacity="0.3" />
              
              <path d="M0 0 V200" stroke="#ADFF00" strokeWidth="0.5" opacity="0.3" />
              <path d="M50 0 V200" stroke="#ADFF00" strokeWidth="0.5" opacity="0.3" />
              <path d="M100 0 V200" stroke="#ADFF00" strokeWidth="0.5" opacity="0.3" />
              <path d="M150 0 V200" stroke="#ADFF00" strokeWidth="0.5" opacity="0.3" />
              <path d="M200 0 V200" stroke="#ADFF00" strokeWidth="0.5" opacity="0.3" />
              
              {/* Constellation nodes */}
              <circle cx="50" cy="50" r="6" fill="#ADFF00" opacity="0.8" />
              <circle cx="120" cy="80" r="8" fill="#ADFF00" opacity="0.9" />
              <circle cx="170" cy="40" r="6" fill="#ADFF00" opacity="0.8" />
              <circle cx="100" cy="150" r="6" fill="#ADFF00" opacity="0.8" />
              
              {/* Connection lines */}
              <path d="M50 50 L120 80" stroke="#ADFF00" strokeWidth="1.5" opacity="0.7" />
              <path d="M120 80 L170 40" stroke="#ADFF00" strokeWidth="1.5" opacity="0.7" />
              <path d="M120 80 L100 150" stroke="#ADFF00" strokeWidth="1.5" opacity="0.7" />
              
              {/* Animated pulse */}
              <circle cx="120" cy="80" r="12" stroke="#ADFF00" strokeWidth="1" opacity="0.4" fill="none">
                <animate attributeName="r" from="12" to="20" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;
