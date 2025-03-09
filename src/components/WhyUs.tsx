
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Star, Zap, Award } from "lucide-react";

type ReasonCardProps = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
};

const ReasonCard = ({ number, title, description, icon, delay }: ReasonCardProps) => {
  return (
    <motion.div 
      className="relative w-full rounded-[2rem] border border-foreground/20 bg-background p-6 md:p-8 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: delay * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02, borderColor: "#9b87f5" }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <motion.div 
          className="text-5xl font-bold text-muted-foreground/40" 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: delay * 0.1 + 0.2 }}
          viewport={{ once: true }}
        >
          {number}
        </motion.div>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <motion.div 
              className="text-[#9b87f5]"
              initial={{ rotate: -10, scale: 0.8 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: delay * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              {icon}
            </motion.div>
            <motion.h3 
              className="text-3xl md:text-4xl xl:text-5xl font-display font-bold text-[#9b87f5]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: delay * 0.1 + 0.4 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h3>
          </div>
          
          <motion.p 
            className="text-foreground/80 mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay * 0.1 + 0.5 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>
        
        <motion.div 
          className="absolute -right-4 -top-4 opacity-5 text-7xl"
          initial={{ scale: 0.5, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: delay * 0.1 + 0.3 }}
          viewport={{ once: true }}
        >
          {icon}
        </motion.div>
      </div>
    </motion.div>
  );
};

const WhyUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax and animation effects
  const titleY = useTransform(scrollYProgress, [0, 0.5], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);
  
  // Floating animation for the title container
  const containerY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -20, -40]);
  const containerRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-1, 0, 1]);

  const reasons = [
    {
      number: "01",
      title: "EXPERTISE",
      description: "Our team of specialists brings years of industry experience to deliver exceptional results.",
      icon: <Sparkles className="w-7 h-7" />,
    },
    {
      number: "02",
      title: "INNOVATION",
      description: "We push boundaries with cutting-edge design approaches and creative solutions.",
      icon: <Zap className="w-7 h-7" />,
    },
    {
      number: "03",
      title: "QUALITY",
      description: "We maintain the highest standards throughout every step of the design process.",
      icon: <Star className="w-7 h-7" />,
    },
    {
      number: "04",
      title: "RESULTS",
      description: "Our designs not only look amazing but drive tangible business outcomes.",
      icon: <Award className="w-7 h-7" />,
    },
  ];

  return (
    <div 
      id="services-showcase"
      ref={containerRef}
      className="relative pt-32 pb-32 my-16 md:my-32 overflow-hidden"
    >
      {/* Background elements */}
      <motion.div 
        className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-[#9b87f5]/5 blur-3xl"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [50, -100]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]) 
        }}
      />
      <motion.div 
        className="absolute -left-32 bottom-20 w-80 h-80 rounded-full bg-neon-green/5 blur-3xl"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [-50, 100]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.3, 1]) 
        }}
      />

      {/* Title section */}
      <motion.div 
        className="mb-20 text-center"
        style={{ 
          y: titleY,
          opacity, 
          scale,
          rotate: containerRotate
        }}
      >
        <motion.div
          className="inline-block bg-black dark:bg-black px-10 py-5 rounded-full border-2 border-[#9b87f5] mb-6"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="font-display text-3xl md:text-5xl font-bold text-white whitespace-nowrap flex items-center">
            WHY US? 
            <motion.span
              animate={{ 
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.2, 1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1]
              }}
              className="ml-2"
            >
              ✨
            </motion.span>
          </span>
        </motion.div>
      </motion.div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              number={reason.number}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
