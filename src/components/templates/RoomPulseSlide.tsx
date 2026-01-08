import React from 'react';
import { motion } from 'framer-motion';
import { RoomPulseSlide as RoomPulseSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { GraduationCap, Users, UserCheck, Briefcase, Award, Bot, Sparkles, Brain, Cpu, CircleHelp } from 'lucide-react';
import clsx from 'clsx';

const ICON_MAP: Record<string, React.ReactNode> = {
  'student': <GraduationCap size={56} />,
  'graduated': <Award size={56} />,
  'working': <Briefcase size={56} />,
  'gpt': <Bot size={56} />,
  'claude': <Sparkles size={56} />,
  'gemini': <Brain size={56} />,
  'llama': <Cpu size={56} />,
  'others': <CircleHelp size={56} />,
  // Legacy
  'grad0': <Users size={56} />,
  'grad1': <GraduationCap size={56} />,
  'grad2': <UserCheck size={56} />,
};

export const RoomPulseSlide: React.FC<{ slide: RoomPulseSlideType }> = ({ slide }) => {
  const colCount = slide.options.length;
  const gridCols = colCount <= 3 ? 'grid-cols-3' : colCount === 4 ? 'grid-cols-4' : 'grid-cols-5';
  
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex items-center justify-center">
          <div className={clsx("grid gap-6 w-full max-w-6xl", gridCols)}>
            {slide.options.map((opt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-64 flex flex-col items-center justify-center bg-slate-800/50 border border-slate-700 hover:border-primary-500 transition-colors rounded-2xl p-6 backdrop-blur-md text-center">
                  <div className="mb-4 text-primary-400 p-5 bg-slate-900/60 rounded-2xl">
                    {opt.icon && (ICON_MAP[opt.icon] || <CircleHelp size={56} />)}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{opt.label}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SlideBody>
    </SlideShell>
  );
};
