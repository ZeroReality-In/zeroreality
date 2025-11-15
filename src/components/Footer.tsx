import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();

  return (
    <footer id="footer" className="bg-background px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-8 mb-8 sm:mb-12 md:mb-16">
          {/* Follow us section */}
          <div className="lg:col-span-4">
            <h3 className="text-foreground/60 text-base sm:text-lg mb-4 sm:mb-6">Follow us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="https://x.com/ZerorealityIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-neon-green transition-colors text-sm sm:text-base touch-manipulation min-h-[44px] flex items-center"
                >
                  X.COM
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zeroreality.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-neon-green transition-colors text-sm sm:text-base touch-manipulation min-h-[44px] flex items-center"
                >
                  LINKEDIN
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zeroreality.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-neon-green transition-colors text-sm sm:text-base touch-manipulation min-h-[44px] flex items-center"
                >
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a
                  href="https://www.github.com/zeroreality-in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-neon-green transition-colors text-sm sm:text-base touch-manipulation min-h-[44px] flex items-center"
                >
                  GITHUB
                </a>
              </li>
            </ul>
          </div>

          {/* Contact section with image */}
          <div className="lg:col-span-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] aspect-square bg-gray-800 flex-shrink-0">
                <img
                  src="/lovable-uploads/giphy.gif"
                  alt="Contact"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-foreground/60 text-sm sm:text-base md:text-lg mb-2">
                  General Inquiries
                </h3>
                <a
                  href="mailto:contact@zeroreality.in"
                  className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-foreground hover:text-neon-green transition-colors break-all leading-tight"
                >
                  contact@zeroreality.in
                </a>
              </div>
            </div>

            {/* Get in touch oval */}
            <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 relative">
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdiLKMVpqNxSM_qiA3-X0467CZV8zAyXpF3XekPpLkU-RJZUg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-foreground/20 rounded-full py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 lg:px-8 w-fit transform -rotate-12 inline-block cursor-pointer touch-manipulation min-h-[44px] flex items-center"
                whileHover={{ scale: 1.05, rotate: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl font-medium">
                  GET IN TOUCH <span className="inline-block ml-1 sm:ml-2">☺</span>
                </span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="flex flex-col lg:flex-row justify-between items-start border-t border-foreground/10 pt-4 sm:pt-6 md:pt-8">
          <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-0">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="inline-block mr-1 sm:mr-2 md:mr-3">©</span>
              {currentYear}
              <span className="block lg:inline-block lg:ml-4 xl:ml-6 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold">
                Zero Reality
              </span>
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div className="mb-4">
              <a 
                href="/about" 
                className="border border-foreground/20 rounded-full py-2 px-4 text-sm sm:text-base md:text-lg font-medium hover:bg-foreground/5 transition-colors"
              >
                ABOUT US ℹ️
              </a>
            </div>
            <div className="max-w-sm lg:max-w-md text-foreground/60 text-xs sm:text-sm lg:text-right">
              <p className="leading-relaxed">
                ASSISTING STARTUPS AND BUSINESSES TO LAUNCH THEIR DIGITAL PRODUCTS
                EFFICIENTLY AND EFFORTLESSLY
              </p>
            </div>
          </div>
        </div>

        {/* Social Icons for mobile */}
        {isMobile && (
          <div className="mt-8 sm:mt-10 md:mt-12 flex gap-4 sm:gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-neon-green transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Twitter size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-neon-green transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-neon-green transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Instagram size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
