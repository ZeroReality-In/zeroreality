import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { useLenis } from "@/hooks/useLenis";

interface NavbarProps {
  showCalendar?: boolean;
}

const Navbar = ({ showCalendar = false }: NavbarProps) => {
  const isMobile = useIsMobile();
  const lenis = useLenis({});

  const navVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const scrollToSection = (id: string) => {
    console.log(`Attempting to scroll to section: ${id}`);
    const section = document.getElementById(id);
    if (section) {
      // Get the height of the navbar to offset the scroll position
      const navbar = document.querySelector("header");
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;

      // Set specific offsets depending on the section
      let offset = navbarHeight;

      if (id === "services-showcase") {
        offset = navbarHeight + 40;
      } else if (id === "works") {
        // Center the works section in the viewport
        const sectionHeight = section.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        offset = Math.max((windowHeight - sectionHeight) / 2, navbarHeight);
      } else if (id === "book-call") {
        // Center the book-call section in the viewport without any offset
        const sectionHeight = section.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;

        // If section is shorter than window, center it, otherwise just scroll to top with small offset
        if (sectionHeight < windowHeight) {
          offset = (windowHeight - sectionHeight) / 2;
          // Make sure we still account for the navbar
          offset = Math.max(offset, navbarHeight);
        } else {
          offset = navbarHeight + 20;
        }
      } else {
        offset = navbarHeight + 20;
      }

      // Get the top position of the target section
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      // Scroll with offset using Lenis
      lenis.current?.scrollTo(sectionTop - offset, {
        offset: 0,
        immediate: false,
        lock: true,
      });

      console.log(`Scrolled to section: ${id}`);
    } else {
      console.error(`Section with id ${id} not found`);
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate={showCalendar ? "hidden" : "visible"}
      variants={navVariants}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12"
      style={{
        backdropFilter: "none",
        display: showCalendar ? "none" : "block",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div variants={itemVariants} className="flex items-center">
          <div
            className="border border-white/20 rounded-xl backdrop-blur-xl relative overflow-hidden"
            style={{
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              padding: "12px 20px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Liquid glass shimmer effect */}
            <div
              className="absolute inset-0 rounded-xl opacity-30"
              style={{
                background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)",
                animation: "shimmer 3s ease-in-out infinite",
              }}
            />
            {/* Subtle glow effect */}
            <div
              className="absolute inset-0 rounded-xl -z-10"
              style={{
                boxShadow: "0 0 20px rgba(139, 255, 0, 0.2), inset 0 0 20px rgba(139, 255, 0, 0.1)",
              }}
            />
            <span className="text-gray-800 text-xl font-bold tracking-tight">
              ZERO REALITY
            </span>
          </div>
        </motion.div>

        {isMobile ? (
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-800">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[80%] sm:w-[350px]">
                <div className="flex flex-col gap-6 mt-10">
                  <NavItem
                    text="SERVICES"
                    onClick={() => scrollToSection("services-showcase")}
                  />
                  <NavItem
                    text="WORK"
                    onClick={() => scrollToSection("works")}
                  />
                  <NavItem
                    text="WHY US"
                    onClick={() => scrollToSection("why-us")}
                  />
                  <NavItem
                    text="CONTACT"
                    onClick={() => scrollToSection("footer")}
                  />
                  <a
                    href="#book-call"
                    className="framer-button"
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.14)",
                      backgroundColor: "rgb(0, 0, 0)",
                      height: "100%",
                      borderRadius: "12px",
                      opacity: "1",
                      padding: "10px 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      fontWeight: "700",
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "rgb(153, 255, 51)",
                      fontFamily: "'Inter', 'Inter Placeholder', sans-serif",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("book-call");
                    }}
                  >
                    → START A PROJECT
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <div
              className="flex items-center gap-2 border border-white/20 rounded-xl backdrop-blur-xl relative overflow-hidden"
              style={{
                backdropFilter: "blur(20px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "8px 12px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
            >
              {/* Liquid glass shimmer effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-30"
                style={{
                  background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              />
              {/* Subtle glow effect */}
              <div
                className="absolute inset-0 rounded-xl -z-10"
                style={{
                  boxShadow: "0 0 20px rgba(139, 255, 0, 0.2), inset 0 0 20px rgba(139, 255, 0, 0.1)",
                }}
              />
              <NavItem
                text="SERVICES"
                onClick={() => scrollToSection("services-showcase")}
              />
              <NavItem text="WORK" onClick={() => scrollToSection("works")} />
              <NavItem
                text="WHY US"
                onClick={() => scrollToSection("why-us")}
              />
              <NavItem
                text="CONTACT"
                onClick={() => scrollToSection("footer")}
              />
            </div>
            <a
              href="#book-call"
              className="framer-button"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.14)",
                backgroundColor: "rgb(0, 0, 0)",
                height: "100%",
                borderRadius: "12px",
                opacity: "1",
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "20px",
                color: "rgb(153, 255, 51)",
                fontFamily: "'Inter', 'Inter Placeholder', sans-serif",
              }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("book-call");
              }}
            >
              → START A PROJECT
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

const NavItem = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <motion.a
      onClick={onClick}
      className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium tracking-wide cursor-pointer uppercase py-3 px-4 relative"
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      {text}
    </motion.a>
  );
};

export default Navbar;
