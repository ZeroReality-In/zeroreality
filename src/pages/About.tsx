import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 relative"
      >
        {/* Rotating zero.png image at top right corner */}
        <motion.div
          className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <img 
            src="/zero.png" 
            alt="Zero Reality" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: "'ClashDisplay-Variable', system-ui, sans-serif" }}>
            About Us
          </h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="mb-6 text-lg leading-relaxed">
              ZeroReality is a technology company based in India, specializing in building custom Web, App, and business-focused digital solutions.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              Our goal is simple — to help brands and businesses transform ideas into powerful, modern digital products that are fast, reliable, and designed with intention.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              We work across multiple areas, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-lg">Website development</li>
              <li className="text-lg">Mobile app development</li>
              <li className="text-lg">Custom software systems</li>
              <li className="text-lg">Internal tools & dashboards</li>
              <li className="text-lg">Automation & workflow solutions</li>
            </ul>
            <p className="mb-6 text-lg leading-relaxed">
              Every product we build is guided by three principles:
              Quality. Speed. Modern design.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              We work closely with each client to understand their needs and turn them into clean, functional digital experiences. Over time, we've built a reputation for being fast, dependable, and easy to work with — delivering high-quality results without unnecessary complexity.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4" style={{ fontFamily: "'ClashDisplay-Variable', system-ui, sans-serif" }}>
              Our Mission
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              Our mission is to make technology simple, powerful, and accessible to any business looking to grow in the digital world.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4" style={{ fontFamily: "'ClashDisplay-Variable', system-ui, sans-serif" }}>
              Our Vision
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              Our vision is to become a trusted partner for brands who want smarter, modern, and long-lasting digital systems.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4" style={{ fontFamily: "'ClashDisplay-Variable', system-ui, sans-serif" }}>
              ZeroReality is not associated with Zero Latency VR, Fortnite’s Reality Zero, or any VR/entertainment companies.

            </h2>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
};

export default About;