import React from 'react';
import { motion } from 'framer-motion';
import { LayeredCardsSlide as LayeredCardsSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { MessageSquare, Skull, AlertCircle } from 'lucide-react';

export const LayeredCardsSlide: React.FC<{ slide: LayeredCardsSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex items-center justify-center perspective-[1000px]">
          
          <div className="relative w-[500px] h-[340px] flex flex-col gap-4">
            
            {/* Front Card (User Prompt) - appears first, on top visually */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-slate-800 border border-slate-600 rounded-2xl p-6 shadow-xl flex flex-col"
            >
              <div className="flex items-center gap-3 text-slate-400 font-mono text-xs uppercase mb-3">
                 <MessageSquare size={14} /> User Input
              </div>
              <p className="text-xl font-light text-white">"{slide.layers[0]}"</p>
            </motion.div>

            {/* Hidden Prompt Card - revealed below with danger styling */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="bg-red-900/80 border-2 border-red-500 rounded-2xl p-6 shadow-[0_0_30px_rgba(239,68,68,0.3)] flex flex-col"
            >
              <div className="flex items-center gap-3 text-red-300 font-mono text-xs uppercase mb-3">
                 <Skull size={14} /> Hidden Instruction
              </div>
              <p className="text-lg font-mono text-red-100">{slide.layers[1]}</p>
            </motion.div>

          </div>

          {/* Outcome Arrow & Result */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 }}
            className="ml-16 flex items-center gap-6"
          >
             <div className="w-16 h-1 bg-slate-700 rounded-full" />
             <div className="bg-red-500 text-white p-6 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                <div className="flex items-center gap-2 mb-2 text-xs uppercase font-bold text-red-200">
                  <AlertCircle size={14} /> Output
                </div>
                <div className="text-xl font-bold">{slide.layers[2]}</div>
             </div>
          </motion.div>

        </div>
      </SlideBody>
    </SlideShell>
  );
};
