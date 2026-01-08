import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QuizSlide as QuizSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';
import { CheckCircle2, XCircle, Circle } from 'lucide-react';
import clsx from 'clsx';

export const QuizSlide: React.FC<{ slide: QuizSlideType }> = ({ slide }) => {
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const selectAnswer = (qIndex: number, optIndex: number) => {
    if (revealed[qIndex]) return; // Already answered
    setAnswers(prev => ({ ...prev, [qIndex]: optIndex }));
    // Auto-reveal after selection
    setTimeout(() => {
      setRevealed(prev => ({ ...prev, [qIndex]: true }));
    }, 300);
  };

  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline}>
        <div className="flex-1 flex flex-col gap-6 items-center justify-center px-8">
          
          {slide.questions.map((q, qIndex) => {
            const isRevealed = revealed[qIndex];
            const selectedAnswer = answers[qIndex];
            const isCorrect = selectedAnswer === q.correct;
            
            return (
              <motion.div
                key={qIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: qIndex * 0.2 }}
                className="w-full max-w-4xl"
              >
                {/* Question */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg">
                    {qIndex + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{q.q}</h3>
                  
                  {/* Result indicator */}
                  {isRevealed && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto"
                    >
                      {isCorrect ? (
                        <div className="flex items-center gap-2 text-green-400 bg-green-500/20 px-4 py-2 rounded-full">
                          <CheckCircle2 size={20} /> Correct!
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-red-400 bg-red-500/20 px-4 py-2 rounded-full">
                          <XCircle size={20} /> Try again
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
                
                {/* Options */}
                <div className="grid grid-cols-2 gap-3 ml-14">
                  {q.options.map((opt, optIndex) => {
                    const isSelected = selectedAnswer === optIndex;
                    const isCorrectOption = q.correct === optIndex;
                    
                    let optionStyle = 'bg-slate-800/60 border-slate-600 hover:border-cyan-500 hover:bg-slate-700/60';
                    if (isRevealed) {
                      if (isCorrectOption) {
                        optionStyle = 'bg-green-500/20 border-green-500 text-green-300';
                      } else if (isSelected && !isCorrectOption) {
                        optionStyle = 'bg-red-500/20 border-red-500 text-red-300';
                      } else {
                        optionStyle = 'bg-slate-800/30 border-slate-700 opacity-50';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-cyan-500/20 border-cyan-500';
                    }
                    
                    return (
                      <motion.button
                        key={optIndex}
                        onClick={() => selectAnswer(qIndex, optIndex)}
                        disabled={isRevealed}
                        className={clsx(
                          "px-5 py-3 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-3",
                          optionStyle,
                          !isRevealed && "cursor-pointer"
                        )}
                        whileHover={!isRevealed ? { scale: 1.02 } : {}}
                        whileTap={!isRevealed ? { scale: 0.98 } : {}}
                      >
                        <div className={clsx(
                          "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                          isRevealed && isCorrectOption ? "border-green-500 bg-green-500" :
                          isRevealed && isSelected && !isCorrectOption ? "border-red-500 bg-red-500" :
                          isSelected ? "border-cyan-500 bg-cyan-500" : "border-slate-500"
                        )}>
                          {isRevealed && isCorrectOption && <CheckCircle2 size={14} className="text-white" />}
                          {isRevealed && isSelected && !isCorrectOption && <XCircle size={14} className="text-white" />}
                          {!isRevealed && isSelected && <Circle size={10} className="text-white fill-white" />}
                        </div>
                        <span className={clsx(
                          "text-base",
                          !isRevealed ? "text-slate-200" : ""
                        )}>{opt}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}

        </div>
      </SlideBody>
    </SlideShell>
  );
};
