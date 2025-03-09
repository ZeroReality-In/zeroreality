
import { motion } from "framer-motion";
import { Calendar, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isMobile = useIsMobile();
  
  const navVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      
      // Add a slight offset to account for the fixed header
      const yOffset = -80; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
      
      console.log(`Scrolling to section: ${id}`);
    } else {
      console.log(`Section with id ${id} not found`);
    }
  };

  return (
    <motion.header 
      initial="hidden" 
      animate="visible" 
      variants={navVariants} 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 backdrop-blur-sm bg-background/70"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div variants={itemVariants} className="flex items-center">
          <span className="text-foreground text-2xl font-bold">ZERO REALITY</span>
        </motion.div>
        
        {isMobile ? (
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[80%] sm:w-[350px]">
                <div className="flex flex-col gap-6 mt-10">
                  <NavItem text="SERVICES" onClick={() => scrollToSection('services-showcase')} />
                  <NavItem text="WORK" onClick={() => scrollToSection('selected-work')} />
                  <Button className="bg-neon-green hover:bg-neon-green/90 text-black rounded-full font-medium">
                    <Calendar className="mr-2 h-4 w-4" /> BOOK A CALL
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <motion.div variants={itemVariants} className="flex items-center gap-8">
            <NavItem text="SERVICES" onClick={() => scrollToSection('services-showcase')} />
            <NavItem text="WORK" onClick={() => scrollToSection('selected-work')} />
            <ThemeToggle />
            <Button className="bg-neon-green hover:bg-neon-green/90 text-black rounded-full font-medium">
              <Calendar className="mr-2 h-4 w-4" /> BOOK A CALL
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

const NavItem = ({
  text,
  onClick
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <motion.a 
      onClick={onClick}
      className="text-foreground/80 hover:text-foreground transition-colors text-sm tracking-wide cursor-pointer" 
      whileHover={{
        scale: 1.05
      }} 
      whileTap={{
        scale: 0.95
      }}
    >
      {text}
    </motion.a>
  );
};

export default Navbar;
