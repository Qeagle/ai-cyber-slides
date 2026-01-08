import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Mic, ShieldAlert, MonitorPlay } from 'lucide-react';
import { Slide } from '../../slides/types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  slides: Slide[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  slides,
  currentSlideIndex,
  onSelectSlide
}) => {
  const currentSlide = slides[currentSlideIndex];
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />
          
          {/* Panel */}
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed left-0 top-0 bottom-0 w-[400px] bg-slate-900 border-r border-slate-700 z-50 flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <MonitorPlay className="w-5 h-5 text-blue-400" /> 
                Explorer
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {/* Slides List */}
              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3 px-2">Timeline</h3>
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => onSelectSlide(i)}
                    className={clsx(
                      "w-full text-left px-3 py-2 rounded text-sm mb-1 flex items-center gap-3 transition-colors",
                      i === currentSlideIndex 
                        ? "bg-blue-900/30 text-blue-200 border-l-2 border-blue-500" 
                        : "text-slate-400 hover:bg-slate-800"
                    )}
                  >
                    <span className="opacity-50 w-5 text-right font-mono text-xs">{i + 1}</span>
                    <span className="truncate">{s.title}</span>
                  </button>
                ))}
              </div>

              {/* Speaker Notes (Only visible to presenter here) */}
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <h3 className="text-xs uppercase tracking-wider text-pink-400 font-bold mb-2 flex items-center gap-2">
                  <Mic size={12} /> Speaker Notes
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                  {currentSlide?.speakerNotes || "No notes for this slide."}
                </p>
                
                {currentSlide?.audiencePrompt && (
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <h4 className="text-xs text-green-400 font-bold mb-1">AUDIENCE ASK</h4>
                    <p className="text-white italic text-sm">"{currentSlide.audiencePrompt}"</p>
                  </div>
                )}

                {currentSlide?.safetyNote && (
                  <div className="mt-2 pt-2">
                    <div className="flex items-center gap-2 text-amber-500 text-xs font-bold">
                       <ShieldAlert size={12} /> SAFETY
                    </div>
                    <p className="text-amber-200/80 text-xs mt-1">{currentSlide.safetyNote}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Helper for 'clsx' inside the component
function clsx(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
