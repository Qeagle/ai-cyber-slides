import React from 'react';
import { motion } from 'framer-motion';
import { RuleChipsSlide as RuleChipsSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { PauseCircle, CheckCheck, Lock } from 'lucide-react';

export const RuleChipsSlide: React.FC<{ slide: RuleChipsSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          
          {slide.chips.map((chip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.4, type: "spring" }}
              className="w-full max-w-4xl"
            >
              <div className="bg-slate-800/80 border-l-4 border-l-blue-500 rounded-r-2xl p-8 flex items-center gap-6 shadow-lg backdrop-blur hover:bg-slate-800 transition-colors group">
                 <div className="p-4 bg-slate-900 rounded-full text-blue-400 group-hover:scale-110 transition-transform">
                    {i === 0 && <PauseCircle size={32} />}
                    {i === 1 && <CheckCheck size={32} />}
                    {i === 2 && <Lock size={32} />}
                 </div>
                 <div className="flex-1">
                    <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Rule 0{i+1}</span>
                    <h3 className="text-3xl font-bold text-white mt-1">{chip}</h3>
                    {slide.examples && slide.examples[i] && (
                      <p className="text-sm text-slate-400 mt-2 italic">"{slide.examples[i]}"</p>
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
