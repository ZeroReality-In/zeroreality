
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

const ProcessStep = ({ number, title, description, index }: ProcessStepProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );

  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [50, 0, 0, -50]
  );

  return (
    <motion.div
      ref={ref}
      className="relative flex w-full rounded-full overflow-hidden my-4 border border-[#333] py-12 px-10"
      style={{ opacity, x }}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center w-full">
        <div className="w-1/5 pr-4">
          <div className="text-[#666] text-7xl md:text-8xl font-display font-bold">
            {number}
          </div>
        </div>

        <div className="w-2/5">
          <motion.h3 
            className="text-[#9b87f5] text-5xl md:text-7xl font-display font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            {title}
          </motion.h3>
        </div>

        <div className="w-2/5 pl-4">
          <motion.p 
            className="text-lg text-white/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            {description}
          </motion.p>
        </div>

        <motion.div 
          className="absolute right-10"
          initial={{ opacity: 0, rotate: -20 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
        >
          <div className="text-white text-3xl">
            ✦
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  const titleScale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.8, 1, 1, 0.8]
  );

  const steps = [
    {
      number: "01",
      title: "SUBSCRIBE",
      description: "Join our exclusive Slack channel. Upon subscription, you'll be paired with a top-tier designer."
    },
    {
      number: "02",
      title: "REQUEST",
      description: "Share your design needs. We typically deliver these within an average of 2 business days, addressing them one by one."
    },
    {
      number: "03",
      title: "REFINE",
      description: "Need further adjustments? We'll tweak your design until it matches your vision perfectly."
    },
    {
      number: "04",
      title: "GROW",
      description: "Witness your project's growth as your vision becomes reality with each design request."
    }
  ];

  return (
    <div ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title section with HOW IT WORKS */}
        <motion.div 
          className="flex justify-center mb-24"
          style={{ opacity: titleOpacity, scale: titleScale }}
        >
          <motion.div 
            className="relative text-center border-2 border-[#333] rounded-full px-16 py-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white flex items-center gap-2">
              HOW IT WORKS <Sparkles className="h-8 w-8 text-[#9b87f5]" />
            </h2>
          </motion.div>
        </motion.div>

        {/* Process steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
