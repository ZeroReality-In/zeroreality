import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
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
  const [showCalendar, setShowCalendar] = useState(false);
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();

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
            <Navbar showCalendar={showCalendar} />
            <div className="relative z-10">
              <Hero />
              <div className="my-24 md:my-32">
                <ServicesShowcase />
              </div>
              <TextMarquee />
              <div className="my-10 md:my-40">
                <SelectedWork />
              </div>
              <div className="mt-16 md:-mt-20">
                <ProjectShowcase />
              </div>
              <WhyUs />
              <div className="mt-12 md:mt-16">
                <BookCall {...({ showCalendar, setShowCalendar } as any)} />
              </div>
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
          transition: { delay: 0.2, duration: 0.5 },
        }}
        exit={{
          scale: 1.2,
          opacity: 0,
          transition: { duration: 0.3 },
        }}
        className="flex flex-col items-center"
      >
        <motion.div
          className="text-4xl font-bold text-foreground mb-4"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.98, 1.02, 0.98],
            rotate: [-1, 1, -1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
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

        {/* Added pulsating dots for loading animation */}
        <motion.div className="flex mt-4 space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-neon-green rounded-full"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
