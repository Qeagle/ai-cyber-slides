import React from 'react';
import { motion } from 'framer-motion';
import { FlowLeakSlide as FlowLeakSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { FileText, Database, ArrowRight, ShieldBan, CloudRain } from 'lucide-react';

export const FlowLeakSlide: React.FC<{ slide: FlowLeakSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          
          <div className="flex items-center gap-4 w-full max-w-6xl justify-between">
            {/* Step 1: Question */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700">
                 <FileText size={40} className="text-slate-400" />
              </div>
              <span className="text-lg font-medium">{slide.steps[0]}</span>
            </motion.div>

            <ArrowRight className="text-slate-700" size={32} />

            {/* Step 2: Retrieval (The Leak Point) */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-col items-center gap-4 relative group">
              <div className="w-24 h-24 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 relative overflow-visible">
                 <Database size={40} className="text-blue-400" />
                 
                 {/* Leak Animation */}
                 <motion.div 
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 1 }}
                   className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse"
                 >
                   !
                 </motion.div>
              </div>
              <span className="text-lg font-medium text-blue-400">{slide.steps[1]}</span>
              
              {/* Leaked Docs Popup - positioned below with more spacing */}
              <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1.5 }}
                 className="mt-4 w-64 p-4 bg-red-900/20 border border-red-500/50 rounded-xl text-red-200 text-sm"
              >
                <div className="flex gap-2 font-bold mb-2"><CloudRain size={16} /> Leakage</div>
                {slide.leaks[0]}
              </motion.div>
            </motion.div>

            <ArrowRight className="text-slate-700" size={32} />

             {/* Step 3: Answer */}
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700">
                 <FileText size={40} className="text-green-400" />
              </div>
              <span className="text-lg font-medium">{slide.steps[2]}</span>
            </motion.div>
          </div>

          {/* Fixes overlay */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="mt-16 bg-green-500/10 border border-green-500/30 px-8 py-4 rounded-full flex items-center gap-4"
          >
             <ShieldBan className="text-green-400" />
             <span className="text-green-100 font-medium">Fix: Permissions + Access Control Lists (ACLs)</span>
          </motion.div>

        </div>
      </SlideBody>
    </SlideShell>
  );
};
