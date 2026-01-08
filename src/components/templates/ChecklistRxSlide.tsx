import React from 'react';
import { motion } from 'framer-motion';
import { ChecklistRxSlide as ChecklistRxSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export const ChecklistRxSlide: React.FC<{ slide: ChecklistRxSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex flex-col justify-center gap-4 mx-auto w-full max-w-5xl">
          
          {slide.items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 h-20">
              
              {/* Risk (Problem) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3 }}
                className="flex-[2] bg-red-900/10 border border-red-900/30 rounded-lg px-6 py-4 flex items-center gap-3 text-red-200"
              >
                <XCircle size={20} className="text-red-500 shrink-0" />
                <span className="text-lg truncate">{item.risk}</span>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (i * 0.3) + 0.15 }}
                className="shrink-0 text-slate-600"
              >
                <ArrowRight />
              </motion.div>

              {/* Fix (Solution) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (i * 0.3) + 0.3 }}
                className="flex-[3] bg-green-900/10 border border-green-900/30 rounded-lg px-6 py-4 flex items-center gap-3 text-green-200"
              >
                <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                <span className="text-lg font-bold">{item.fix}</span>
              </motion.div>

            </div>
          ))}

        </div>
      </SlideBody>
    </SlideShell>
  );
};
