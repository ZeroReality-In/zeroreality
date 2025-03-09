
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PricingSection = () => {
  return (
    <div id="pricing-section" className="min-h-screen bg-background text-foreground">
      <motion.div 
        className="container max-w-6xl py-32 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold mb-6 text-center"
        >
          Invest in a design that propels
        </motion.h1>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold mb-16 text-center"
        >
          your business forward
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Standard Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-black border-2 border-neon-green p-8 relative overflow-hidden"
          >
            <h3 className="text-3xl font-bold mb-4 text-neon-green">Standard</h3>
            <p className="text-white/80 mb-6">
              Ideal for a trial, a few tasks, or small projects, offering maximum flexibility.
            </p>
            
            <div className="mb-6">
              <span className="text-5xl font-bold">$4,999</span>
              <span className="text-xl text-white/60">/m</span>
            </div>
            <p className="mb-8 text-white/60">Pause or cancel any time</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="text-neon-green mr-2 mt-1">✓</div>
                <div className="text-white/80">Dedicated senior designer</div>
              </div>
              <div className="flex items-start">
                <div className="text-neon-green mr-2 mt-1">✓</div>
                <div className="text-white/80">3 hours of focused work daily</div>
              </div>
              <div className="flex items-start">
                <div className="text-neon-green mr-2 mt-1">✓</div>
                <div className="text-white/80">Weekly update calls</div>
              </div>
              <div className="flex items-start">
                <div className="text-neon-green mr-2 mt-1">✓</div>
                <div className="text-white/80">Async comms</div>
              </div>
              <div className="flex items-start">
                <div className="text-neon-green mr-2 mt-1">✓</div>
                <div className="text-white/80">Pause or cancel anytime</div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-neon-green hover:bg-neon-green/90 text-black font-medium text-lg py-6 flex items-center justify-center gap-2"
              onClick={() => {
                const bookingSection = document.getElementById('booking-section');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book an Intro Call <ArrowRight className="ml-1" />
            </Button>
          </motion.div>
          
          {/* Project-Based Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-black border-2 border-[#9b87f5] p-8 relative overflow-hidden"
          >
            <h3 className="text-3xl font-bold mb-4 text-[#9b87f5]">Project-Based</h3>
            <p className="text-white/80 mb-6">
              Ideal for businesses or individuals with clear, specific needs.
            </p>
            
            <div className="mb-6">
              <span className="text-5xl font-bold">$7,999</span>
              <span className="text-xl text-white/60">/m</span>
            </div>
            <p className="mb-8 text-white/60">Pause or cancel any time</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="text-[#9b87f5] mr-2 mt-1">✓</div>
                <div className="text-white/80">Dedicated senior designer</div>
              </div>
              <div className="flex items-start">
                <div className="text-[#9b87f5] mr-2 mt-1">✓</div>
                <div className="text-white/80">6 hours of focused work daily</div>
              </div>
              <div className="flex items-start">
                <div className="text-[#9b87f5] mr-2 mt-1">✓</div>
                <div className="text-white/80">Bi-weekly update calls</div>
              </div>
              <div className="flex items-start">
                <div className="text-[#9b87f5] mr-2 mt-1">✓</div>
                <div className="text-white/80">1:1 Async comms via Slack</div>
              </div>
              <div className="flex items-start">
                <div className="text-[#9b87f5] mr-2 mt-1">✓</div>
                <div className="text-white/80">Pause or cancel anytime</div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-black font-medium text-lg py-6 flex items-center justify-center gap-2"
              onClick={() => {
                const bookingSection = document.getElementById('booking-section');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book an Intro Call <ArrowRight className="ml-1" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingSection;
