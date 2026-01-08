import React from 'react';
import { motion } from 'framer-motion';
import { PipelineFlowSlide as PipelineFlowSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { ArrowRight, Radar, Settings, Calculator, ShieldCheck } from 'lucide-react';

export const PipelineFlowSlide: React.FC<{ slide: PipelineFlowSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex flex-col items-center justify-center">
          
          <div className="flex items-center gap-4 w-full max-w-6xl">
            {slide.steps.map((step, i) => (
              <React.Fragment key={i}>
                {/* Step Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 1.25, duration: 0.8, type: "spring", bounce: 0.4 }}
                  className="flex-1 relative group"
                >
                  <div className="h-40 bg-slate-800 rounded-2xl border border-slate-700 p-6 flex flex-col items-center justify-center text-center relative z-10 group-hover:border-blue-500 transition-colors">
                    <div className="mb-4 text-blue-400 p-3 bg-blue-500/10 rounded-full">
                       {i === 0 && <Radar />}
                       {i === 1 && <Settings />}
                       {i === 2 && <Calculator />}
                       {i === 3 && <ShieldCheck />}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{step.label}</h3>
                    {step.sub && <p className="text-sm text-slate-400">{step.sub}</p>}
                  </div>
                  
                  {/* Sequence Number */}
                  <div className="absolute -top-4 -left-2 w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold text-sm border-2 border-slate-900 z-20">
                    {i + 1}
                  </div>
                </motion.div>

                {/* Arrow Connector */}
                {i < slide.steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    transition={{ delay: (i * 1.25) + 0.6, duration: 0.5 }}
                    className="shrink-0 text-slate-600"
                  >
                    <ArrowRight size={32} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </SlideBody>
    </SlideShell>
  );
};
