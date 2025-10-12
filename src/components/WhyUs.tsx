import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Star, Zap, Award } from "lucide-react";

type ReasonCardProps = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
};

const ReasonCard = ({
  number,
  title,
  description,
  icon,
  delay,
}: ReasonCardProps) => {
  return (
    <motion.div
      className="relative w-full rounded-2xl border border-gray-500 bg-white p-8 overflow-hidden"
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: delay * 0.12,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      whileHover={{
        scale: 1.02,
        borderColor: "#9b87f5",
        boxShadow: "0 12px 24px rgba(155, 135, 245, 0.12)",
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Number */}
        <motion.div
          className="text-5xl font-bold text-gray-400 flex-shrink-0"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: delay * 0.12 + 0.1,
          }}
          viewport={{
            once: true,
          }}
        >
          {number}
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              initial={{
                scale: 0,
                rotate: -20,
              }}
              whileInView={{
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.5,
                delay: delay * 0.12 + 0.1,
                ease: "backOut",
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="text-[#9b87f5] w-6 h-6">{icon}</div>
            </motion.div>
            <motion.h3
              className="text-xl md:text-2xl font-bold text-[#9b87f5]"
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: delay * 0.12 + 0.15,
              }}
              viewport={{
                once: true,
              }}
            >
              {title}
            </motion.h3>
          </div>

          <motion.p
            className="text-gray-600 text-sm md:text-base leading-relaxed"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: delay * 0.12 + 0.2,
            }}
            viewport={{
              once: true,
            }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const WhyUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const reasons = [
    {
      number: "01",
      title: "EXPERTISE",
      description:
        "Our team of specialists brings years of industry experience to deliver exceptional results.",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "INNOVATION",
      description:
        "We push boundaries with cutting-edge design approaches and creative solutions.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "QUALITY",
      description:
        "We maintain the highest standards throughout every step of the design process.",
      icon: <Star className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "RESULTS",
      description:
        "Our designs not only look amazing but drive tangible business outcomes.",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <div
      id="why-us"
      ref={containerRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      {/* Background elements */}
      <motion.div
        className="absolute -right-40 top-32 w-72 h-72 rounded-full bg-[#9b87f5]/5 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -left-40 bottom-32 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Title section */}
      <motion.div
        className="max-w-7xl mx-auto mb-16 text-center"
        style={{
          y: titleY,
          opacity: titleOpacity,
        }}
      >
        <motion.div
          className="inline-block bg-white px-8 py-4 rounded-full border-2 border-[#9b87f5]"
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <span className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
            WHY US?
            <motion.span
              animate={{
                rotate: [0, 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✨
            </motion.span>
          </span>
        </motion.div>
      </motion.div>

      {/* Cards container */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              number={reason.number}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;