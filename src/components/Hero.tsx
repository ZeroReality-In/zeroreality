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
    <div className="min-h-screen flex items-center justify-center relative px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/30" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 max-w-7xl mx-auto pt-6 sm:pt-8 md:pt-12 w-full px-3 sm:px-4 md:px-6 lg:px-12"
      >
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
          {/* Left side - content */}
          <div className="flex-1 lg:pl-8 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              {/* Mobile-only logo above heading */}
              <div className="lg:hidden mb-6 flex justify-center">
                <motion.img
                  src="/zero.png"
                  alt="Zero Reality Logo"
                  className="w-14 h-14 object-contain opacity-90"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>

              <h1
                className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
                style={{
                  fontFamily: '"BBH Sans Bartle", system-ui, sans-serif',
                }}
              >
                Your Dreams,
                <br />
                Our Work.
              </h1>

              <p
                className="text-sm xs:text-base sm:text-lg md:text-lg text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                style={{ fontFamily: '"Inter Tight", sans-serif' }}
              >
                Get tools specially made for your business needs. Built for
                teams of any size. Secure, flexible, and ready to deliver real
                results. Change how you work and run your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToBookCall}
                  className="relative flex items-center justify-center gap-2 sm:gap-3 bg-neon-green hover:bg-neon-green/90 text-black py-3 sm:py-4 px-6 sm:px-8 rounded-full overflow-hidden group cursor-pointer font-semibold text-base sm:text-lg focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-offset-2 min-h-[48px] sm:min-h-[56px] touch-manipulation shadow-[0_0_20px_rgba(139,255,0,0.3)] hover:shadow-[0_0_30px_rgba(139,255,0,0.5)] transition-shadow duration-300"
                  aria-label="Book a call to discuss your project needs"
                >
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="whitespace-nowrap">Book a Call Now</span>
                </motion.button>

                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToWorks}
                  className="relative flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-foreground/30 hover:border-foreground/50 text-foreground py-3 sm:py-4 px-6 sm:px-8 rounded-full overflow-hidden group cursor-pointer focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 min-h-[48px] sm:min-h-[56px] touch-manipulation transition-all duration-300"
                  aria-label="View our portfolio of work"
                >
                  <span className="z-10 font-semibold text-base sm:text-lg whitespace-nowrap">
                    View Our Work
                  </span>
                  <motion.div
                    className="z-10 bg-neon-green rounded-full p-2 sm:p-2.5"
                    whileHover={{ rotate: 45, backgroundColor: "#8BFF00" }}
                  >
                    <ArrowDown size={18} className="text-black sm:w-6 sm:h-6" />
                  </motion.div>
                  <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-300" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right side - Spinning Zero Image - Desktop only */}
          <div className="hidden lg:flex flex-1 justify-center -mt-16">
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-sm mx-auto"
            >
              <div className="relative w-full aspect-square flex items-center justify-center">
                <motion.img
                  src="/zero.png"
                  alt="Zero Reality Logo"
                  className="w-80 h-80 object-contain"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
