import React from 'react';
import { motion } from 'framer-motion';
import { RuleChipsSlide as RuleChipsSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { PauseCircle, CheckCheck, Lock, Bot } from 'lucide-react';

export const RuleChipsSlide: React.FC<{ slide: RuleChipsSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 grid grid-cols-2 gap-8 px-12 content-center">
          
          {slide.chips.map((chip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.2, type: "spring" }}
              className="w-full"
            >
              <div className="h-full bg-slate-800/80 border-l-4 border-l-blue-500 rounded-r-2xl p-8 flex items-start gap-6 shadow-lg backdrop-blur hover:bg-slate-800 transition-colors group">
                 <div className="p-4 bg-slate-900 rounded-full text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                    {i === 0 && <PauseCircle size={40} />}
                    {i === 1 && <CheckCheck size={40} />}
                    {i === 2 && <Lock size={40} />}
                    {i === 3 && <Bot size={40} />}
                 </div>
                 <div className="flex-1 min-w-0">
                    <span className="text-sm uppercase font-bold text-slate-500 tracking-wider block mb-2">Rule 0{i+1}</span>
                    <h3 className="text-2xl font-bold text-white leading-tight">{chip}</h3>
                    {slide.examples && slide.examples[i] && (
                      <p className="text-lg text-slate-400 mt-3 italic leading-relaxed">"{slide.examples[i]}"</p>
                    )}
                 </div>
              </div>
            </motion.div>
          ))}
          
        </div>
      </SlideBody>
    </SlideShell>
  );
};
