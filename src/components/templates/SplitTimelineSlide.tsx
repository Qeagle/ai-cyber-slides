import React from 'react';
import { motion } from 'framer-motion';
import { SplitTimelineSlide as SplitTimelineSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { User, Bot, Zap, Clock, ArrowRight, Briefcase } from 'lucide-react';

export const SplitTimelineSlide: React.FC<{ slide: SplitTimelineSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex flex-col justify-center gap-8">
          
          {/* Split Comparison - Two Columns */}
          <div className="flex gap-12 items-stretch justify-center">
            
            {/* OLD - Human Speed */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 max-w-md bg-slate-800/30 rounded-3xl border border-slate-700 p-8 flex flex-col items-center gap-6"
            >
              {/* Label */}
              <div className="px-6 py-2 bg-slate-700/50 rounded-full">
                <span className="text-2xl font-bold text-slate-400 tracking-wider">OLD</span>
              </div>

              {/* Visual Area */}
              <div className="relative w-full h-40 flex items-center justify-center">
                {/* Single slow arrow looping */}
                <div className="relative w-64 h-16">
                  <div className="absolute inset-0 flex items-center justify-between">
                    <div className="p-3 bg-slate-700 rounded-full">
                      <User size={28} className="text-slate-400" />
                    </div>
                    <div className="p-3 bg-slate-700 rounded-full">
                      <Clock size={28} className="text-slate-400" />
                    </div>
                  </div>
                  
                  {/* Single looping arrow */}
                  <motion.div
                    animate={{ x: [0, 160, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-8 top-1/2 -translate-y-1/2"
                  >
                    <ArrowRight size={24} className="text-slate-500" />
                  </motion.div>
                </div>
              </div>

              {/* Stat */}
              <div className="text-center">
                <span className="text-4xl font-bold text-slate-300">1</span>
                <span className="text-xl text-slate-500 ml-2">attack / hour</span>
              </div>
            </motion.div>

            {/* NOW - Machine Speed */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1 max-w-md bg-gradient-to-br from-pink-950/30 to-red-950/30 rounded-3xl border border-pink-500/30 p-8 flex flex-col items-center gap-6"
            >
              {/* Label */}
              <div className="px-6 py-2 bg-pink-500/20 rounded-full border border-pink-500/30">
                <span className="text-2xl font-bold text-pink-400 tracking-wider">NOW</span>
              </div>

              {/* Visual Area */}
              <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
                <div className="relative w-64 h-full">
                  {/* Multiple streaming attack lines */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 300, opacity: [0, 1, 1, 0] }}
                      transition={{ 
                        duration: 0.6 + (i * 0.05), 
                        repeat: Infinity, 
                        delay: i * 0.12,
                        ease: "linear"
                      }}
                      className="absolute h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-red-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]"
                      style={{ 
                        top: `${10 + (i * 11)}%`,
                        width: `${30 + Math.random() * 40}px`
                      }}
                    />
                  ))}
                  
                  {/* Bot icon on right */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-pink-500/20 rounded-full border border-pink-500/50"
                  >
                    <Bot size={32} className="text-pink-400" />
                  </motion.div>
                </div>
              </div>

              {/* Stat */}
              <div className="text-center">
                <span className="text-4xl font-bold text-pink-400">10,000+</span>
                <span className="text-xl text-pink-300/70 ml-2">attacks / sec</span>
              </div>
            </motion.div>
          </div>

          {/* Reasons Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-10 mt-4"
          >
            {slide.reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + (i * 0.15) }}
                className="flex items-center gap-3 px-5 py-3 bg-slate-800/50 rounded-xl border border-slate-700"
              >
                <Zap size={20} className="text-amber-400" />
                <span className="text-lg text-slate-300">{r}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Hiring Demand Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, type: "spring" }}
            className="flex justify-center mt-4"
          >
            <div className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl border border-cyan-500/30">
              <Briefcase size={28} className="text-cyan-400" />
              <span className="text-2xl font-semibold text-white">
                Demand for AI + Cyber talent is <span className="text-cyan-400">exploding</span>
              </span>
            </div>
          </motion.div>

        </div>
      </SlideBody>
    </SlideShell>
  );
};
