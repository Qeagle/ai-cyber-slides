import React from 'react';
import { motion } from 'framer-motion';
import { TamilCheckSlide as TamilCheckSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { Hand } from 'lucide-react';

export const TamilCheckSlide: React.FC<{ slide: TamilCheckSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <div className="w-full h-full flex flex-col items-center justify-center gap-12">
        
        {/* Tamil Letter Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-36 h-36 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/30 flex items-center justify-center"
        >
          <span className="text-8xl font-bold text-primary-400">ழ</span>
        </motion.div>

        {/* Question */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-6xl font-bold text-txt-primary text-center max-w-4xl leading-tight"
        >
          {slide.question}
        </motion.h1>

        {/* Hand Raise Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-4 px-8 py-4 rounded-full bg-slate-800/50 border border-slate-700"
        >
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <Hand size={32} className="text-amber-400" />
          </motion.div>
          <span className="text-2xl text-slate-300 font-medium">Raise your hand</span>
        </motion.div>

      </div>
    </SlideShell>
  );
};
