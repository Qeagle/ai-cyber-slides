import React from 'react';
import { motion } from 'framer-motion';
import { AIMentalModelSlide as AIMentalModelSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { Archive, Brain, Wrench, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  'memory': <Archive size={64} />,
  'brain': <Brain size={64} />,
  'hands': <Wrench size={64} />,
};

export const AIMentalModelSlide: React.FC<{ slide: AIMentalModelSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex items-center justify-center">
          
          {/* Horizontal Flow - 3 Concepts with Animated Arrows */}
          <div className="flex items-center gap-4">
            {slide.concepts.map((concept, i) => (
              <React.Fragment key={i}>
                {/* Concept Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.3), duration: 0.5 }}
                  className="flex flex-col items-center gap-4 w-72"
                >
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white">
                    {concept.title}
                  </h3>

                  {/* Icon Container */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + (i * 0.3), type: "spring", stiffness: 200 }}
                    className="p-8 rounded-2xl bg-slate-800/50 border border-slate-600"
                  >
                    <div className="text-primary-400">
                      {ICON_MAP[concept.icon] || <Brain size={64} />}
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + (i * 0.3) }}
                    className="text-center"
                  >
                    <p className="text-lg text-white font-medium">
                      {concept.description}
                    </p>
                    <p className="text-base text-slate-300 mt-1">
                      ({concept.subtext})
                    </p>
                  </motion.div>
                </motion.div>

                {/* Animated Arrow (not after last item) */}
                {i < slide.concepts.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + (i * 0.3) }}
                    className="flex items-center mx-2"
                  >
                    {/* Dashed line with animated arrow */}
                    <div className="relative flex items-center">
                      <motion.div
                        className="w-16 h-0.5 bg-gradient-to-r from-slate-400 to-slate-500"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(90deg, #64748b 0px, #64748b 8px, transparent 8px, transparent 16px)'
                        }}
                      />
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      >
                        <ArrowRight size={24} className="text-slate-500 dark:text-slate-400" />
                      </motion.div>
                    </div>
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
