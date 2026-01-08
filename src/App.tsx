import React, { useState } from 'react';
import { useSlidesEngine } from './hooks/useSlidesEngine';
import { useKeyboardNav } from './hooks/useKeyboardNav';
import { SlideRegistry } from './slides/SlideRegistry';
import { Sidebar } from './components/layout/Sidebar';
import { slides } from './config/slides.cyber25';
import { Menu, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const { 
    currentSlide, 
    currentSlideIndex, 
    nextSlide, 
    prevSlide, 
    goToSlide, 
    totalSlides,
    isFirst,
    isLast
  } = useSlidesEngine(slides);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Keyboard navigation
  useKeyboardNav({
    onNext: nextSlide,
    onPrev: prevSlide,
    onEnter: () => {
        // Optional: Trigger animations inside slide?
        // For now, just next slide
        nextSlide();
    },
    onEsc: () => setIsSidebarOpen(prev => !prev)
  });

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false));
      }
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 text-white font-sans selection:bg-cyan-500/30">
      
      {/* Main Slide Stage */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
            <motion.div 
                key={currentSlide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
            >
                <SlideRegistry slide={currentSlide} />
            </motion.div>
        </AnimatePresence>
      </div>

      {/* Control Overlay (Hover to see) */}
      <div className="absolute top-0 right-0 p-4 z-50 flex gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
         <button 
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-300 backdrop-blur-sm"
         >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
         </button>
         <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-300 backdrop-blur-sm"
         >
            <Menu size={20} />
         </button>
      </div>

      {/* Progress Bar (Bottom) */}
      <div className="absolute bottom-0 left-0 h-1 bg-cyan-500/50 transition-all duration-300"
           style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }} 
      />

       {/* Navigation Hover Zones (Optional mouse nav) */}
       {!isFirst && (
        <div onClick={prevSlide} className="absolute inset-y-0 left-0 w-16 z-40 cursor-w-resize hover:bg-gradient-to-r hover:from-black/20 to-transparent transition-colors" title="Previous Slide (Left Arrow)" />
       )}
       {!isLast && (
        <div onClick={nextSlide} className="absolute inset-y-0 right-0 w-16 z-40 cursor-e-resize hover:bg-gradient-to-l hover:from-black/20 to-transparent transition-colors" title="Next Slide (Right Arrow)" />
       )}

      {/* Sidebar for Agenda / Jump */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        slides={slides}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={(idx) => {
            goToSlide(idx);
            setIsSidebarOpen(false);
        }}
      />
    </div>
  );
}

export default App;
