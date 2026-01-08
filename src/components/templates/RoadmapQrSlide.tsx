import React from 'react';
import { motion } from 'framer-motion';
import { RoadmapQrSlide as RoadmapQrSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { CalendarClock, QrCode, ArrowRight } from 'lucide-react';

export const RoadmapQrSlide: React.FC<{ slide: RoadmapQrSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex gap-16 items-center justify-center">
          
          {/* Roadmap (Left) */}
          <div className="flex-1 max-w-xl">
            {slide.phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.4 }}
                className="flex gap-6 mb-8 group"
              >
                {/* Timeline Node */}
                <div className="flex flex-col items-center">
                   <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-slate-300 font-bold group-hover:border-pink-500 group-hover:text-pink-500 transition-colors z-10">
                     {30 * (i + 1)}d
                   </div>
                   {i < slide.phases.length - 1 && (
                     <div className="w-0.5 h-16 bg-slate-800 -mb-4 mt-2 group-hover:bg-pink-500/30 transition-colors delay-100" />
                   )}
                </div>

                {/* Content */}
                <div className="pt-2">
                   <h3 className="text-3xl font-bold text-white mb-2">{phase}</h3>
                   <div className="h-2 w-24 bg-slate-800 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: '100%' }}
                       transition={{ delay: 1 + (i * 0.5), duration: 1 }}
                       className="h-full bg-pink-500"
                     />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* QR Code (Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 2, type: "spring" }}
            className="relative bg-white p-8 rounded-3xl shadow-[0_0_60px_rgba(255,255,255,0.2)] rotate-3 hover:rotate-0 transition-transform duration-500"
          >
             <div className="absolute -top-6 -right-6 p-4 bg-pink-500 rounded-full text-white shadow-lg animate-bounce">
                <ArrowRight size={32} className="rotate-45" />
             </div>
             
             {/* Actual QR Placeholder - Replace image src if needed */}
             <div className="w-72 h-72 bg-slate-100 rounded-xl mb-6 flex items-center justify-center border-4 border-slate-900 border-dashed">
                {slide.qrUrl ? (
                   <img src={slide.qrUrl} alt="QR Code" className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <QrCode size={128} className="text-slate-900" />
                )}
             </div>

             <div className="text-center">
               <h3 className="text-black font-black text-2xl uppercase tracking-tighter">Scan to start</h3>
               <p className="text-slate-500 font-medium">Get roadmap + tools</p>
             </div>
          </motion.div>

        </div>
      </SlideBody>
    </SlideShell>
  );
};
