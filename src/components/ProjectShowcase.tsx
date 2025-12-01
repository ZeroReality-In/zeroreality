
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  isLandscape?: boolean;
  delay?: number;
  descriptionColor?: string;
  techs?: string;
  link?: string;
}

const ProjectCard = ({ title, description, image, tags, isLandscape = false, delay = 0, descriptionColor = "text-white/48", techs, link }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer touch-manipulation"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Project Image */}
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full ${isLandscape ? 'h-[250px] xs:h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]' : image === '/project-images/project2.png' ? 'h-[389px] xs:h-[439px] sm:h-[489px] md:h-[539px] lg:h-[589px]' : 'h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]'} object-cover ${image === '/project-images/project1.png' ? 'object-left scale-100' : image === '/project-images/project2.png' ? 'object-center scale-110' : ''}`}
          loading="lazy"
          decoding="async"
        />
        {/* Link Button Overlay */}
        {link && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 rounded-xl sm:rounded-2xl">
            <Link to={link}>
              <Button 
                variant="default" 
                className="bg-white text-black hover:bg-gray-100 font-bold py-2 px-6 rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
              >
            
               <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 2H5.50003L4.00003 3.5L6.83581 6.33579L0.585815 12.5858L3.41424 15.4142L9.66424 9.16421L12.5 12L14 10.5L14 2Z" fill="#000000"></path> </g></svg>
              </Button>
            </Link>
          </div>
        )}
      </div>
      
      {/* Details Section Below Image */}
      <div 
        className="bg-white p-3 sm:p-4 md:p-6"
      >
        {/* Project Title */}
        <div className="flex items-center mb-2 sm:mb-3">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
          <h3 
            className="text-lg sm:text-xl md:text-2xl font-semibold text-black leading-tight"
            style={{ fontFamily: '"ClashDisplay-Semibold", sans-serif', fontWeight: 400 }}
          >
            {title}
          </h3>
        </div>
        
        
        {/* Description */}
        <p 
          className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 leading-relaxed"
          style={{ fontFamily: '"Inter Tight", sans-serif' }}
        >
          {description}
        </p>
        
        {/* Techs */}
        {techs && (
          <div className="mt-2 sm:mt-3">
            <div 
              className="inline-block px-2 sm:px-3 py-1 border border-gray-300 rounded-full"
            >
              <p 
                className="text-xs text-gray-600 font-medium leading-tight"
                style={{ fontFamily: '"Inter Tight", sans-serif' }}
              >
                Techs - {techs}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProjectShowcase = () => {
  return (
    <div id="project-showcase" className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <ProjectCard
            title="Nudge"
            description="An ERP software"
            image="/project-images/pro.png"
            tags={["DESIGN SYSTEM", "UI", "BRANDING"]} 
            isLandscape={true}
            delay={0}
            descriptionColor="text-white/48"
            
            link="https://nudge.zeroreality.in/"
          />
          
          <ProjectCard
            title="Latte Laven"
            description="Your perfect spot for coffee, pastries, and more."
            image="/project-images/project2.png"
            tags={["DESIGN SYSTEM", "UI", "BRANDING"]} 
            isLandscape={true}
            delay={0.2}
            descriptionColor="text-white/48"
            
            link="https://cafe.zeroreality.in"
          />
           
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
