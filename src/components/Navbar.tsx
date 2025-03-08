import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
const Navbar = () => {
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
  return <motion.header initial="hidden" animate="visible" variants={navVariants} className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div variants={itemVariants} className="flex items-center">
          <span className="text-white text-2xl font-bold">ZERO
REALITY</span>
        </motion.div>
        
        
        
        <motion.div variants={itemVariants} className="hidden md:flex items-center gap-8">
          <NavItem text="SERVICES" />
          <NavItem text="WORK" />
          <NavItem text="PRICING" />
          <Button className="bg-neon-green hover:bg-neon-green/90 text-black rounded-full font-medium">
            <span className="mr-2">→</span> START A PROJECT
          </Button>
        </motion.div>
      </div>
    </motion.header>;
};
const NavItem = ({
  text
}: {
  text: string;
}) => {
  return <motion.a href="#" className="text-white/80 hover:text-white transition-colors text-sm tracking-wide" whileHover={{
    scale: 1.05
  }} whileTap={{
    scale: 0.95
  }}>
      {text}
    </motion.a>;
};
export default Navbar;