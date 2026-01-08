import React from 'react';
import { motion } from 'framer-motion';
import { SplitCardsSlide as SplitCardsSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { CheckCircle2, AlertTriangle, Shield, Sword } from 'lucide-react';
import clsx from 'clsx';

export const SplitCardsSlide: React.FC<{ slide: SplitCardsSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex gap-12 items-center justify-center mt-8">
          
          {/* Left Card: Defense / Good */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 h-[500px] bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-blue-500/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <header className="flex items-center gap-4 mb-8">
               <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                 <Shield size={32} />
               </div>
               <h3 className="text-3xl font-bold text-blue-100">{slide.left.title}</h3>
            </header>

            <ul className="space-y-6">
              {slide.left.items.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (i * 0.2) }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-1" />
                  <span className="text-xl text-slate-300 font-light">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* VS Badge */}
          <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-slate-500 font-black text-xl z-20 shadow-xl">
             VS
          </div>

          {/* Right Card: Attack / Bad */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 h-[500px] bg-gradient-to-bl from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-pink-500/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-32 bg-pink-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <header className="flex items-center gap-4 mb-8">
               <div className="p-3 bg-pink-500/20 text-pink-400 rounded-xl">
                 <Sword size={32} />
               </div>
               <h3 className="text-3xl font-bold text-pink-100">{slide.right.title}</h3>
            </header>

            <ul className="space-y-6">
              {slide.right.items.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (i * 0.2) }}
                  className="flex items-start gap-4"
                >
                  <AlertTriangle className="text-pink-500 shrink-0 mt-1" />
                  <span className="text-xl text-slate-300 font-light">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </SlideBody>
    </SlideShell>
  );
};
