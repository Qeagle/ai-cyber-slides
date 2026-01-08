import React from 'react';
import { motion } from 'framer-motion';
import { GaugeSlide as GaugeSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { ArrowDown, AlertOctagon } from 'lucide-react';

export const GaugeSlide: React.FC<{ slide: GaugeSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex flex-col items-center justify-center gap-12 mt-8">
          
          {/* Input Features */}
          <div className="flex gap-4">
            {slide.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="px-6 py-2 bg-slate-800 rounded-full border border-slate-700 text-slate-300 text-sm font-mono"
              >
                {f}
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="px-6 py-2 border-b-2 border-dashed border-slate-700 flex items-center gap-2 text-slate-500"
            >
              <ArrowDown size={14} /> Model
            </motion.div>
          </div>

          {/* The Gauge Visual */}
          <div className="relative w-[600px] h-[300px] flex items-end justify-center pb-8 overflow-hidden">
             {/* Gauge Background */}
             <div className="absolute bottom-0 w-[600px] h-[300px] rounded-t-full border-[40px] border-slate-800 border-b-0" />
             <div className="absolute bottom-0 w-[600px] h-[300px] rounded-t-full border-[40px] border-gradient-to-r from-green-500 via-yellow-500 to-red-500 border-b-0 opacity-20" />
             
             {/* Needle */}
             <motion.div 
               initial={{ rotate: -90 }}
               animate={{ rotate: 45 }}
               transition={{ delay: 1.5, type: 'spring', damping: 10 }}
               className="absolute bottom-0 left-1/2 w-2 h-[280px] bg-white origin-bottom rounded-full z-10 shadow-xl"
               style={{ marginLeft: -4 }} 
             />
             
             {/* Center Pivot */}
             <div className="absolute bottom-0 w-8 h-8 rounded-full bg-slate-900 border-4 border-white z-20 translate-y-1/2" />

             {/* Score Readout */}
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.8 }}
               className="absolute bottom-16 text-6xl font-black text-red-500 tracking-tighter"
             >
               0.92
             </motion.div>
          </div>

          {/* Action Output */}
          <div className="flex gap-8">
            {slide.actionLabels.map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + (i * 0.2) }}
                className="bg-red-900/30 border border-red-500/50 p-6 rounded-xl flex items-center gap-4 text-red-200"
              >
                <AlertOctagon />
                <span className="font-bold text-xl">{action}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </SlideBody>
    </SlideShell>
  );
};
