import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TitleSlide as TitleSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { ShieldCheck, Cpu } from 'lucide-react';

export const TitleSlide: React.FC<{ slide: TitleSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <div className="flex flex-col items-center justify-center h-full text-center">
        
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-pink-400 pb-2">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="text-2xl text-slate-400 mt-6 tracking-wide uppercase font-light">
              {slide.subtitle}
            </p>
          )}
        </motion.div>

        {/* Tracks Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-8 mb-16"
        >
          {/* Track 1 */}
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-blue-950/30 border border-blue-800/50 backdrop-blur w-64">
             <div className="p-4 rounded-full bg-blue-500/10">
               <ShieldCheck size={40} className="text-blue-400" />
             </div>
             <span className="text-lg font-bold text-blue-200">AI for Cyber</span>
          </div>

          {/* Icon Divider */}
          <div className="flex items-center text-slate-600">
             <div className="h-px w-12 bg-slate-700"></div>
          </div>

          {/* Track 2 */}
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-pink-950/30 border border-pink-800/50 backdrop-blur w-64">
             <div className="p-4 rounded-full bg-pink-500/10">
               <Cpu size={40} className="text-pink-400" />
             </div>
             <span className="text-lg font-bold text-pink-200">Cyber for AI</span>
          </div>
        </motion.div>

        {/* Micro Bullets */}
        {slide.microBullets && (
          <div className="flex gap-12">
            {slide.microBullets.map((bullet, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (i * 0.2) }}
                className="flex items-center gap-2 text-slate-400 text-lg"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                {bullet}
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </SlideShell>
  );
};
