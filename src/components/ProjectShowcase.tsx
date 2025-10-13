
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  isLandscape?: boolean;
  delay?: number;
  descriptionColor?: string;
  techs?: string;
}

const ProjectCard = ({ title, description, image, tags, isLandscape = false, delay = 0, descriptionColor = "text-white/48", techs }: ProjectCardProps) => {
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
            image="/project-images/project1.png"
            tags={["DESIGN SYSTEM", "UI", "BRANDING"]} 
            isLandscape={true}
            delay={0}
            descriptionColor="text-white/48"
            techs="Scalable Architecture, AI analytics"
          />
          
          <ProjectCard
            title="ProPg"
            description="Helps Pg owners to Keep Track of the tenents"
            image="/project-images/project2.png"
            tags={["DESIGN SYSTEM", "UI", "BRANDING"]} 
            isLandscape={false}
            delay={0.2}
            descriptionColor="text-white/48"
            techs="Cross-platform large and secure Databases"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
