import React from 'react';
import { motion } from 'framer-motion';
import { IconGridSlide as IconGridSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { ShieldAlert, Activity, Cpu, Database, Bug, ScanSearch } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  'shield': <ShieldAlert size={40} />,
  'pulse': <Activity size={40} />,
  'bot': <Cpu size={40} />,
  'search': <ScanSearch size={40} />,
  'db': <Database size={40} />,
  'bug': <Bug size={40} />,
};

export const IconGridSlide: React.FC<{ slide: IconGridSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
            {slide.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-slate-800/50 rounded-2xl p-6 flex items-start gap-5 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-colors group"
              >
                <div className="p-3 bg-slate-900 rounded-xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors flex-shrink-0">
                  {ICON_MAP[item.icon] || <Cpu size={40} />}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-white">
                    {item.label}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SlideBody>
    </SlideShell>
  );
};
