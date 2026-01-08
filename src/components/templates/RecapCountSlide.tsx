import React from 'react';
import { motion } from 'framer-motion';
import { RecapCountSlide as RecapCountSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';

export const RecapCountSlide: React.FC<{ slide: RecapCountSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex gap-16 items-center justify-center">
          
          {/* Big Number */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-[0_0_100px_rgba(59,130,246,0.5)] border-8 border-slate-900"
          >
            <span className="text-9xl font-black text-white">{slide.count}</span>
          </motion.div>

          {/* List */}
          <div className="flex flex-col gap-6">
            {slide.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.2) }}
                className="flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-full border-2 border-slate-600 flex items-center justify-center text-slate-400 font-bold shrink-0">
                  {i + 1}
                </div>
                <h3 className="text-3xl font-light text-white">{item}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </SlideBody>
    </SlideShell>
  );
};
