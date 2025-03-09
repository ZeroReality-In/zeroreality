import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <div id="why-us" className="relative w-full bg-background py-24 md:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-6xl md:text-7xl font-display font-bold tracking-tight">
              Why <span className="text-[#9b87f5]">Us?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              We are more than just a digital agency. We are your partners in growth, committed to delivering innovative solutions that drive real results.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 text-neon-green flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a1.5 1.5 0 00-1.977-1.314l-.045.045a3 3 0 114.243 4.243l-.045.045a1.5 1.5 0 00-1.314-1.977l.045-.045a3 3 0 11-4.243-4.243l.045.045zm-7.5 0a1.5 1.5 0 00-1.977-1.314l-.045.045a3 3 0 114.243 4.243l-.045.045a1.5 1.5 0 00-1.314-1.977l.045-.045a3 3 0 11-4.243-4.243l.045.045z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Innovative Solutions</h4>
                  <p className="text-muted-foreground">We leverage the latest technologies to create cutting-edge solutions tailored to your unique needs.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 text-neon-green flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 15a6.75 6.75 0 0013.498 0A2.25 2.25 0 0018 13.5a3 3 0 10-3-3.751 3 3 0 00-3 3.751 2.25 2.25 0 00-.998 1.5H3.751z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Expert Team</h4>
                  <p className="text-muted-foreground">Our team of experienced professionals is dedicated to providing top-notch service and support.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 text-neon-green flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 16.5h-7.5a.75.75 0 01-.75-.75V12a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Client-Centric Approach</h4>
                  <p className="text-muted-foreground">We prioritize your goals and work closely with you to achieve the best possible outcomes.</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="/images/team-work.webp" 
                alt="Team Collaboration" 
                className="rounded-xl shadow-lg w-full h-auto object-cover" 
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent rounded-xl p-6">
                <h5 className="text-xl font-semibold text-white">
                  Collaborative Teamwork
                </h5>
                <p className="text-sm text-gray-300">
                  We foster a culture of collaboration, both internally and with our clients, to ensure seamless project execution.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
