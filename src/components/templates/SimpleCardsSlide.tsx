import React from 'react';
import { motion } from 'framer-motion';
import { SimpleCardsSlide as SimpleCardsSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { Fish, Shield, KeyRound, Bot, Code, Folder, BrainCircuit, Sparkles, ScanLine, Lock, Globe, Zap, Database, Users } from 'lucide-react';
import clsx from 'clsx';

const ICON_MAP: Record<string, React.ReactNode> = {
  'phishing': <Fish size={48} />,
  'shield': <Shield size={48} />,
  'key': <KeyRound size={48} />,
  'bot': <Bot size={48} />,
  'code': <Code size={48} />,
  'folder': <Folder size={48} />,
  'brain': <BrainCircuit size={48} />,
  'sparkles': <Sparkles size={48} />,
  'scan': <ScanLine size={48} />,
  'lock': <Lock size={48} />,
  'globe': <Globe size={48} />,
  'zap': <Zap size={48} />,
  'db': <Database size={48} />,
  'users': <Users size={48} />,
};

export const SimpleCardsSlide: React.FC<{ slide: SimpleCardsSlideType }> = ({ slide }) => {
  // If image is provided, use split layout
  if (slide.imageSrc) {
    return (
      <SlideShell>
        <SlideBody title={slide.title} headline={slide.headline}>
          <div className="flex-1 flex items-center justify-center gap-12">
            
            {/* Left Side - Cards as vertical list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              {slide.cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-4 px-6 py-4 bg-slate-800/50 rounded-xl border border-slate-700"
                >
                  <div className="p-3 rounded-lg bg-slate-900 text-primary-400">
                    {card.icon && (ICON_MAP[card.icon] || <Bot size={32}/>)}
                  </div>
                  <span className="text-xl text-slate-200 font-medium">{card.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src={slide.imageSrc} 
                alt={slide.imageAlt || 'Slide illustration'}
                className="w-[500px] h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>

          </div>
        </SlideBody>
      </SlideShell>
    );
  }

  // Default grid layout (no image)
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex flex-col items-center justify-center gap-12">
          
          {/* Main Cards Grid */}
          <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
            {slide.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={clsx(
                  "flex flex-col items-center justify-center p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500",
                  "w-56 h-56", // Fixed square size
                  card.active 
                    ? "bg-blue-900/20 border-blue-500 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]" 
                    : "bg-slate-800/40 border-slate-700 hover:border-slate-500"
                )}
              >
                <div className={clsx(
                  "mb-4 p-4 rounded-xl transition-all duration-500",
                  card.active ? "bg-blue-500 text-white" : "bg-slate-900 text-slate-400"
                )}>
                  {card.icon && (ICON_MAP[card.icon] || <Bot size={48}/>)}
                </div>
                <h3 className={clsx(
                  "text-xl font-bold tracking-tight text-center leading-tight",
                  card.active ? "text-white" : "text-slate-300"
                )}>
                  {card.label}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Optional Footer Chips (Frequency) */}
          {slide.footerChips && (
             <div className="flex gap-4 mt-8">
                {slide.footerChips.map((chip, i) => (
                   <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (i * 0.15) }}
                      className="px-6 py-2 rounded-full bg-slate-800 border border-slate-600 text-slate-300 font-mono text-sm uppercase tracking-wider shadow-lg"
                   >
                      {chip}
                   </motion.div>
                ))}
             </div>
          )}

        </div>
      </SlideBody>
    </SlideShell>
  );
};
