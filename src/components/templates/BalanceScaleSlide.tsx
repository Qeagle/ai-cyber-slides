import React from 'react';
import { motion } from 'framer-motion';
import { BalanceScaleSlide as BalanceScaleSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { Shield, AlertTriangle, Scale } from 'lucide-react';

export const BalanceScaleSlide: React.FC<{ slide: BalanceScaleSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          
          {/* Scale Visual - Simplified */}
          <div className="relative flex items-end justify-center gap-16 pt-8">
            
            {/* Left Pan - Customer Friction */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-64 p-8 bg-gradient-to-br from-green-900/30 to-emerald-900/20 border-2 border-green-500/40 rounded-2xl text-center shadow-2xl"
              >
                <Shield size={48} className="mx-auto mb-4 text-green-400" />
                <h3 className="text-2xl font-bold text-green-400 mb-2">{slide.leftSide}</h3>
                <p className="text-slate-400 text-sm">Block more = safer but annoying</p>
              </motion.div>
              {/* Short connector line */}
              <div className="w-1 h-8 bg-slate-600 rounded-full" />
            </motion.div>

            {/* Center - Scale Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="flex flex-col items-center mb-8"
            >
              <Scale size={64} className="text-slate-500" />
              <span className="text-sm text-slate-500 mt-2 uppercase tracking-widest">Balance</span>
            </motion.div>

            {/* Right Pan - Fraud Loss */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-64 p-8 bg-gradient-to-br from-red-900/30 to-orange-900/20 border-2 border-red-500/40 rounded-2xl text-center shadow-2xl"
              >
                <AlertTriangle size={48} className="mx-auto mb-4 text-red-400" />
                <h3 className="text-2xl font-bold text-red-400 mb-2">{slide.rightSide}</h3>
                <p className="text-slate-400 text-sm">Block less = losses pile up</p>
              </motion.div>
              {/* Short connector line */}
              <div className="w-1 h-8 bg-slate-600 rounded-full" />
            </motion.div>
          </div>

          {/* Micro Bullets */}
          {slide.microBullets && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center gap-8 mt-4"
            >
              {slide.microBullets.map((b, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-lg text-slate-300">{b}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Context Callout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-4 text-slate-400 text-lg"
          >
            Banks face this choice <span className="text-amber-400 font-semibold">millions of times daily</span>
          </motion.div>
        </div>
      </SlideBody>
    </SlideShell>
  );
};
