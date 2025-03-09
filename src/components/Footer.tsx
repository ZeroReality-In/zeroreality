
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Company section */}
          <div className="md:col-span-3">
            <h3 className="text-foreground/60 text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/work" className="text-foreground hover:text-neon-green transition-colors">
                  WORK
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground hover:text-neon-green transition-colors">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-foreground hover:text-neon-green transition-colors">
                  PLANS
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Follow us section */}
          <div className="md:col-span-3">
            <h3 className="text-foreground/60 text-lg mb-6">Follow us</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-neon-green transition-colors">
                  X.COM
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-neon-green transition-colors">
                  LINKEDIN
                </a>
              </li>
              <li>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-neon-green transition-colors">
                  DRIBBBLE
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-neon-green transition-colors">
                  INSTAGRAM
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact section with image */}
          <div className="md:col-span-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="rounded-3xl overflow-hidden w-full max-w-[240px] md:w-[180px] aspect-square bg-gray-800">
                <img 
                  src="/lovable-uploads/c331f054-e65a-4f8d-9e2f-67a5fa523590.png" 
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-foreground/60 text-lg">General Inquiries</h3>
                <a 
                  href="mailto:contact@zeroreality.com" 
                  className="text-3xl md:text-4xl font-bold text-foreground hover:text-neon-green transition-colors"
                >
                  contact@zeroreality.com
                </a>
              </div>
            </div>
            
            {/* Get in touch oval */}
            <div className="mt-16 relative">
              <motion.div 
                className="border border-foreground/20 rounded-full py-4 px-8 w-fit transform -rotate-12"
                whileHover={{ scale: 1.05, rotate: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-2xl md:text-3xl font-medium">GET IN TOUCH <span className="inline-block ml-2">☺</span></span>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Bottom copyright section */}
        <div className="mt-24 md:mt-36 flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <p className="text-5xl md:text-6xl lg:text-7xl font-semibold">
              <span className="inline-block mr-3">©</span>
              {currentYear}
              <span className="block md:inline-block md:ml-6 text-5xl md:text-6xl lg:text-7xl font-semibold">Zero Reality</span>
            </p>
          </div>
          <div className="max-w-sm text-foreground/60 text-sm md:text-right mt-4 md:mt-4">
            <p>ASSISTING STARTUPS AND BUSINESSES TO LAUNCH THEIR DIGITAL PRODUCTS EFFICIENTLY AND EFFORTLESSLY</p>
          </div>
        </div>
        
        {/* Social Icons for mobile */}
        <div className="mt-12 flex gap-6 md:hidden">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-neon-green transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-neon-green transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-neon-green transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
