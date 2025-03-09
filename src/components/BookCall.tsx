
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
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 w-full">
          {/* Left side - Form content */}
          <motion.div 
            className="w-full lg:w-[580px] border-4 border-neon-green rounded-[2.5rem] p-8 md:p-12 relative"
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
                className="flex justify-center md:justify-start"
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

          {/* Right side - Illustration */}
          <motion.div 
            className="w-full lg:w-[580px] flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main illustration background */}
              <motion.div 
                className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-neon-green/20 to-transparent"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96"
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Abstract tech design elements */}
                  <circle cx="200" cy="200" r="180" stroke="#ADFF00" strokeWidth="2" strokeDasharray="6 6" />
                  <circle cx="200" cy="200" r="130" stroke="#ADFF00" strokeWidth="2" opacity="0.7" />
                  <circle cx="200" cy="200" r="80" stroke="#ADFF00" strokeWidth="3" opacity="0.9" />
                  
                  {/* Connection lines */}
                  <line x1="50" y1="200" x2="350" y2="200" stroke="#ADFF00" strokeWidth="1.5" strokeDasharray="4 8" />
                  <line x1="200" y1="50" x2="200" y2="350" stroke="#ADFF00" strokeWidth="1.5" strokeDasharray="4 8" />
                  
                  {/* Node points */}
                  <circle cx="120" cy="120" r="10" fill="#ADFF00" />
                  <circle cx="280" cy="120" r="8" fill="#ADFF00" opacity="0.8" />
                  <circle cx="120" cy="280" r="8" fill="#ADFF00" opacity="0.8" />
                  <circle cx="280" cy="280" r="10" fill="#ADFF00" />
                  <circle cx="200" cy="200" r="15" fill="#ADFF00" />
                </svg>
              </motion.div>
              
              {/* Central icon */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neon-green"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              >
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 14H3V21H10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 3H14V10H21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 3H3V10H10V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
              
              {/* Floating technology icons */}
              <motion.div 
                className="absolute top-[15%] right-[20%] text-neon-green opacity-80"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-[15%] left-[20%] text-neon-green opacity-80"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
