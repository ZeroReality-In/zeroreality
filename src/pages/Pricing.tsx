
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <motion.div 
        className="container max-w-5xl py-32 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-display font-bold mb-12 text-center"
        >
          Simple Pricing
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-white/70 text-lg max-w-2xl mx-auto mb-16"
        >
          A monthly design subscription that scales with your business. No contracts, cancel anytime.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Standard",
    price: "$1,995",
    description: "Everything you need to start designing products that users love.",
    features: [
      "1 design request at a time",
      "Unlimited revisions",
      "UI/UX design",
      "Design handoff",
      "Slack communication",
      "2-3 day turnaround"
    ]
  },
  {
    title: "Premium",
    price: "$3,995",
    description: "For companies ready to scale their design operations.",
    features: [
      "2 design requests at a time",
      "Unlimited revisions",
      "UI/UX design & strategy",
      "Design systems",
      "Dedicated design lead",
      "1-2 day turnaround"
    ],
    highlight: true
  }
];

const PricingCard = ({ plan, index }: { plan: PricingPlan, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
      className={`glass-card rounded-xl p-8 ${plan.highlight ? 'border-neon-green' : 'border-white/10'}`}
    >
      <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
      <div className="text-3xl font-bold mb-4 text-neon-green">{plan.price}<span className="text-sm text-white/70">/month</span></div>
      <p className="text-white/70 mb-6">{plan.description}</p>
      
      <div className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-center">
            <div className="text-neon-green mr-2">✓</div>
            <div className="text-white/80">{feature}</div>
          </div>
        ))}
      </div>
      
      <Button 
        className={`w-full ${plan.highlight ? 'bg-neon-green text-black' : 'bg-secondary text-white'}`}
        // Fix: Remove the framer-motion props from the Button component
      >
        Start Now
      </Button>
    </motion.div>
  );
};

export default Pricing;
