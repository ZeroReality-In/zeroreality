
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
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="w-full max-w-4xl border-4 border-neon-green rounded-[2.5rem] p-8 md:p-16 relative"
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
                className="text-4xl md:text-6xl font-bold mb-4"
                variants={itemVariants}
              >
                Lets Discuss
              </motion.h2>
              
              <motion.p 
                className="text-foreground/60 text-xl mb-10"
                variants={itemVariants}
              >
                Find what you want.
              </motion.p>
              
              <motion.div 
                className="space-y-4 mb-14"
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
        </div>
      </div>
    </section>
  );
};

export default BookCall;
