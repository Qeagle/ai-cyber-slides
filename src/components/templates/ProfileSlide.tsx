import React from 'react';
import { motion } from 'framer-motion';
import { ProfileSlide as ProfileSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { Building2, ShieldCheck, BrainCircuit } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  'bank': <Building2 size={32} />,
  'shield': <ShieldCheck size={32} />,
  'ai': <BrainCircuit size={32} />,
};

export const ProfileSlide: React.FC<{ slide: ProfileSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex items-center justify-center">
          <div className="flex gap-16 items-center">
            
            {/* Profile Avatar Area */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-80 h-80 shrink-0"
            >
              <div className="absolute inset-0 bg-blue-500 rounded-3xl rotate-6 opacity-20 blur-xl" />
              <div className="relative w-full h-full bg-slate-800 rounded-3xl border border-slate-700 flex items-center justify-center overflow-hidden">
                {/* Placeholder for actual photo if we had one, else initials */}
                <div className="text-8xl font-black text-slate-700 select-none">ID</div>
              </div>
              
              {/* Floating Icons */}
              {slide.icons.map((icon, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + (i * 0.2) }}
                  className="absolute p-4 rounded-xl bg-slate-900 border border-slate-700 shadow-xl text-blue-400"
                  style={{
                    top: i === 0 ? -20 : i === 1 ? '40%' : 'auto',
                    bottom: i === 2 ? -20 : 'auto',
                    right: i === 1 ? -30 : -20,
                  }}
                >
                  {ICON_MAP[icon]}
                </motion.div>
              ))}
            </motion.div>

            {/* Content Bullets */}
            <div className="space-y-8">
              {slide.bullets.map((txt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.15) }}
                  className="flex items-center gap-6"
                >
                  <div className="w-16 h-px bg-slate-700 shrink-0" />
                  <span className="text-4xl font-light tracking-tight text-white/90">
                    {txt}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SlideBody>
    </SlideShell>
  );
};
