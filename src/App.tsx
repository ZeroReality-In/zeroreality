
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

// Create subtle particle animation when the mouse moves
const MouseParticles = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; tx: number; ty: number; duration: number }[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Only add particle sometimes to avoid overwhelming animation
      if (Math.random() > 0.8) {
        const size = Math.random() * 8 + 2;
        const tx = (Math.random() - 0.5) * 100;
        const ty = (Math.random() - 0.5) * 100;
        const duration = Math.random() * 1 + 0.5;
        
        setParticles(prev => [
          ...prev, 
          { id: nextId, x: e.clientX, y: e.clientY, size, tx, ty, duration }
        ]);
        setNextId(id => id + 1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [nextId]);

  // Remove particles after their animation completes
  useEffect(() => {
    if (particles.length > 0) {
      const timeouts = particles.map(particle => {
        return setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== particle.id));
        }, particle.duration * 1000);
      });
      
      return () => {
        timeouts.forEach(timeout => clearTimeout(timeout));
      };
    }
  }, [particles]);

  return (
    <>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: 'rgba(173, 255, 0, 0.3)',
            boxShadow: '0 0 4px rgba(173, 255, 0, 0.5)',
            animation: `particle-animation ${particle.duration}s forwards ease-out`,
            '--tx': `${particle.tx}px`,
            '--ty': `${particle.ty}px`,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
};

const App = () => (
  <ThemeProvider defaultTheme="dark">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <MouseParticles />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
