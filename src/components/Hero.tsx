import { motion } from "framer-motion";
import { ArrowDown, Calendar } from "lucide-react";
import { useLenis } from "@/hooks/useLenis";

const Hero = () => {
  const lenis = useLenis({});

  const scrollToWorks = () => {
    const worksSection = document.getElementById("works");
    if (worksSection) {
      // Get the height of the navbar to offset the scroll position
      const navbar = document.querySelector("header");
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;

      // Get the section height to center it
      const sectionHeight = worksSection.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      const offset = Math.max((windowHeight - sectionHeight) / 2, navbarHeight);

      // Calculate the final scroll position
      const sectionTop =
        worksSection.getBoundingClientRect().top + window.scrollY;

      // Scroll with offset using Lenis
      lenis.current?.scrollTo(sectionTop - offset, {
        offset: 0,
        immediate: false,
        lock: true,
      });
    }
  };

  const scrollToBookCall = () => {
    const bookCallSection = document.getElementById("book-call");
    if (bookCallSection) {
      lenis.current?.scrollTo(bookCallSection, {
        offset: 0,
        immediate: false,
        lock: true,
      });
    }
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
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

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.6,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative px-6 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/30" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 max-w-7xl mx-auto pt-12 w-full px-6 md:px-12"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 lg:pl-8">
            <motion.div variants={itemVariants} className="text-left">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
                style={{
                  fontFamily: '"BBH Sans Bartle", system-ui, sans-serif',
                }}
              >
                Your Dreams,
                <br />
                Our Work.
              </h1>

              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
                Get tools specially made for your business needs. Built for
                teams of any size. Secure, flexible, and ready to deliver real
                results. Change how you work and run your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToBookCall}
                  className="relative flex items-center justify-center gap-4 bg-neon-green hover:bg-neon-green/90 text-black py-4 px-8 rounded-full overflow-hidden group cursor-pointer font-medium text-lg"
                >
                  <Calendar className="mr-2 h-5 w-5" /> Book a Call Now
                </motion.button>

                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToWorks}
                  className="relative flex items-center justify-center gap-4 bg-transparent border border-foreground/20 text-foreground py-4 px-8 rounded-full overflow-hidden group cursor-pointer"
                >
                  <span className="z-10 font-medium text-lg">
                    View Our Work
                  </span>
                  <motion.div
                    className="z-10 bg-neon-green rounded-full p-2"
                    whileHover={{ rotate: 45, backgroundColor: "#8BFF00" }}
                  >
                    <ArrowDown size={20} className="text-black" />
                  </motion.div>
                  <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-300" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right side - Vertical Reel-like Image */}
          <div className="flex-1 flex justify-center">
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-xs"
            >
              <div className="relative rounded-3xl overflow-hidden border-4 border-neon-green/20 bg-gradient-to-br from-neon-green/10 to-neon-green/5 backdrop-blur-sm aspect-[9/16]">
                <div className="w-full h-full bg-gray-200 border-2 border-dashed rounded-3xl flex items-center justify-center text-gray-500">
                  Reel Image
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-neon-green/20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-purple-500/20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
