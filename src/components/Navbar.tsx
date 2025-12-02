import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { useLenis } from "@/hooks/useLenis";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  showCalendar?: boolean;
}

const Navbar = ({ showCalendar = false }: NavbarProps) => {
  const isMobile = useIsMobile();
  const lenis = useLenis({});
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

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
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 py-2 sm:py-3 md:px-8"
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
              padding: "10px 16px",
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
            <Link to="/">
              <img
                src="/lovable-uploads/Reality Logo-cropped.svg"
                alt="ZeroReality Logo"
                className="h-7 sm:h-8 w-auto"
                loading="eager"
                decoding="async"
              />
            </Link>
          </div>
        </motion.div>

        {!isAboutPage && (
          <>
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
                          padding: "8px 16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textDecoration: "none",
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: "rgb(153, 255, 51)",
                          fontFamily: "'Inter Tight', sans-serif",
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
                    padding: "6px 10px",
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
                    padding: "8px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    fontWeight: "900",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "rgb(153, 255, 51)",
                    fontFamily: "'Inter Tight', sans-serif",
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
          </>
        )}
      </div>
    </motion.header>
  );
};

const NavItem = ({ text, onClick, href }: { text: string; onClick?: () => void; href?: string }) => {
  // Special styling for "WORK" text
  const isWorkText = text === "WORK";

  if (href) {
    return (
      <Link
        to={href}
        className="text-gray-900 hover:text-gray-900 transition-colors text-sm font-bold tracking-wide cursor-pointer uppercase py-2 px-3 relative"
        style={{
          fontFamily: isWorkText ? '"Inter Tight", sans-serif' : '"Inter Tight", sans-serif',
          fontWeight: isWorkText ? 400 : 'normal'
        }}
      >
        {text}
      </Link>
    );
  }

  return (
    <motion.a
      onClick={onClick}
      className="text-gray-900 hover:text-gray-900 transition-colors text-xs font-bold tracking-wide cursor-pointer uppercase py-2 px-3 relative"
      style={{
        fontFamily: isWorkText ? '"Inter Tight", sans-serif' : '"Inter Tight", sans-serif',
        fontWeight: isWorkText ? 400 : 'normal'
      }}
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
