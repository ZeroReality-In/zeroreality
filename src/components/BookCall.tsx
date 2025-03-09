
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
        {/* Left side decoration */}
        <motion.div 
          className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative w-[200px] h-[200px]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="95" fill="#0D1900" stroke="#ADFF00" strokeWidth="1" opacity="0.6" />
              <circle cx="40" cy="160" r="15" stroke="#ADFF00" strokeWidth="2" fill="none" />
              <rect x="65" y="40" width="15" height="15" fill="#ADFF00" opacity="0.7" />
              <rect x="90" y="40" width="15" height="15" fill="#ADFF00" opacity="0.5" />
              <line x1="40" y1="100" x2="160" y2="100" stroke="#ADFF00" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
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

        {/* Right side decoration */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative w-[200px] h-[200px]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="95" fill="#0D1900" stroke="#ADFF00" strokeWidth="1" opacity="0.6" />
              <circle cx="100" cy="100" r="60" stroke="#ADFF00" strokeWidth="1" fill="none" />
              <circle cx="100" cy="100" r="30" stroke="#ADFF00" strokeWidth="1" fill="none" />
              <circle cx="155" cy="100" r="10" fill="#ADFF00" />
              <circle cx="100" cy="155" r="6" fill="#ADFF00" opacity="0.7" />
              <circle cx="100" cy="45" r="6" fill="#ADFF00" opacity="0.7" />
              <circle cx="165" cy="40" r="5" fill="#ADFF00" opacity="0.5" />
              <line x1="70" y1="70" x2="130" y2="130" stroke="#ADFF00" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
              <line x1="70" y1="130" x2="130" y2="70" stroke="#ADFF00" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;
