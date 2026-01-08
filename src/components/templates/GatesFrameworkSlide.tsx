import React from 'react';
import { motion } from 'framer-motion';
import { GatesFrameworkSlide as GatesFrameworkSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { Fingerprint, Database, MousePointerClick, HelpCircle, Lightbulb } from 'lucide-react';
import clsx from 'clsx';

const ICON_MAP: Record<string, React.ReactNode> = {
  'identity': <Fingerprint size={32} />,
  'data': <Database size={32} />,
  'actions': <MousePointerClick size={32} />,
};

const COLORS = [
  { border: 'border-cyan-500', bg: 'bg-cyan-500/10', icon: 'bg-cyan-500', text: 'text-cyan-400' },
  { border: 'border-purple-500', bg: 'bg-purple-500/10', icon: 'bg-purple-500', text: 'text-purple-400' },
  { border: 'border-amber-500', bg: 'bg-amber-500/10', icon: 'bg-amber-500', text: 'text-amber-400' },
];

export const GatesFrameworkSlide: React.FC<{ slide: GatesFrameworkSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex items-center justify-center gap-6 px-4">
          
          {/* The 3 Gates */}
          {slide.gates.map((gate, i) => {
            const color = COLORS[i];
            
            return (
              <motion.div 
                key={i} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
              >
                {/* Gate Card */}
                <div className={clsx(
                  "w-72 rounded-2xl border-2 flex flex-col p-6 transition-all duration-500",
                  color.border, color.bg
                )}>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={clsx(
                      "p-3 rounded-xl text-white",
                      color.icon
                    )}>
                      {ICON_MAP[gate.name.toLowerCase()] || <Fingerprint size={32} />}
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Gate {i+1}</div>
                      <div className="text-white text-2xl font-bold">{gate.name}</div>
                    </div>
                  </div>
                  
                  {/* Question */}
                  <motion.div 
                    className="bg-slate-800/60 rounded-xl p-4 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-slate-400 text-xs uppercase mb-2">
                      <HelpCircle size={12} /> The Question
                    </div>
                    <p className={clsx("text-lg font-semibold", color.text)}>{gate.question}</p>
                  </motion.div>
                  
                  {/* Example */}
                  <motion.div 
                    className="bg-slate-900/60 rounded-xl p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 + i * 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-slate-400 text-xs uppercase mb-2">
                      <Lightbulb size={12} /> Example
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{gate.example}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </SlideBody>
    </SlideShell>
  );
};
