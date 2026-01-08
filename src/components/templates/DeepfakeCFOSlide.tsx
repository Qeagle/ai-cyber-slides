import React from 'react';
import { motion } from 'framer-motion';
import { DeepfakeCFOSlide as DeepfakeCFOSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';

export const DeepfakeCFOSlide: React.FC<{ slide: DeepfakeCFOSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <div className="w-full h-full flex items-center justify-center px-16 py-12">
        
        {/* Left Side - Title + Bullets */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 pr-12"
        >
          <h1 className="text-5xl font-bold text-txt-primary leading-tight mb-8">
            Attack In The Wild:<br />
            <span className="text-primary-400">The Deepfake CFO</span>
          </h1>

          <ul className="space-y-4 text-xl text-slate-300">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-3"
            >
              <span className="text-primary-400 mt-1">•</span>
              <span><strong className="text-white">Target:</strong> A multinational firm in Hong Kong</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-3"
            >
              <span className="text-primary-400 mt-1">•</span>
              <span><strong className="text-white">Method:</strong> AI-cloned voices and video</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-start gap-3"
            >
              <span className="text-primary-400 mt-1">•</span>
              <span><strong className="text-white">The 'Tell':</strong> A convincing group video call</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-start gap-3"
            >
              <span className="text-primary-400 mt-1">•</span>
              <span><strong className="text-white">Result:</strong> A <span className="text-red-400 font-bold">{slide.amount}</span> fraudulent transfer</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-start gap-3"
            >
              <span className="text-primary-400 mt-1">•</span>
              <span>The employee was the <strong className="text-amber-400">only real human</strong> on the call.</span>
            </motion.li>
          </ul>
        </motion.div>

        {/* Right Side - Deepfake Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <img 
            src="/images/deepfake.png" 
            alt="Deepfake video call showing 4 participants - only 1 is real"
            className="w-[480px] h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>

      </div>
    </SlideShell>
  );
};
