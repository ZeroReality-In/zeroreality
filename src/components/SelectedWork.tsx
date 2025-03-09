import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
const SelectedWork = () => {
  const scrollToProjects = () => {
    // Find the ProjectShowcase element and scroll to it
    const projectsSection = document.getElementById('project-showcase');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
    console.log('Button clicked');
  };
  return <div className="relative w-full bg-background flex flex-col items-center justify-center py-24 md:py-[215px]">
      <motion.div initial={{
      opacity: 0,
      y: -20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.1
    }} viewport={{
      once: true
    }} className="text-center">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-medium text-[#9b87f5] dark:text-[#9b87f5] tracking-tight mb-4">Our</h2>
        <h2 className="text-6xl md:text-7xl font-display font-bold uppercase tracking-tight lg:text-9xl">WORKS</h2>
      </motion.div>
      
      <motion.div initial={{
      opacity: 0,
      y: 10
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 0.6
    }} viewport={{
      once: true
    }} className="mt-12 md:mt-16">
        <motion.div className="rounded-full w-16 h-28 flex items-center justify-center border-2 border-foreground/30 bg-transparent relative cursor-pointer" whileHover={{
        y: 5
      }} transition={{
        type: "spring",
        stiffness: 400,
        damping: 10
      }} onClick={scrollToProjects}>
          <ChevronDown className="w-6 h-6 text-[#ADFF00]" />
        </motion.div>
      </motion.div>
    </div>;
};
export default SelectedWork;