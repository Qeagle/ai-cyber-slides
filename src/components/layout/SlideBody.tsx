import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SlideBodyProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  headline?: string;
  maxWidth?: 'narrow' | 'content' | 'full';
  align?: 'center' | 'left' | 'start';
}

const maxWidthClasses = {
  narrow: 'max-w-narrow',   // 900px
  content: 'max-w-content', // 1400px
  full: 'max-w-full',
};

const alignClasses = {
  center: 'items-center text-center',
  left: 'items-start text-left',
  start: 'items-start text-left',
};

export const SlideBody: React.FC<SlideBodyProps> = ({ 
  children, 
  className,
  title,
  headline,
  maxWidth = 'content',
  align = 'center'
}) => {
  return (
    <div className={clsx(
        "w-full h-full flex flex-col mx-auto",
        maxWidthClasses[maxWidth],
        alignClasses[align],
        className
    )}>
      
      {/* Header Section */}
      {(title || headline) && (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full mb-12 shrink-0 space-y-4"
        >
            {title && (
                <div className="flex items-center gap-3 justify-center mb-4 opacity-70">
                   <div className="h-px w-8 bg-primary-500/50" />
                   <h6 className="text-label text-primary-400 uppercase tracking-widest">{title}</h6>
                   <div className="h-px w-8 bg-primary-500/50" />
                </div>
            )}
            
            {headline && (
                <h1 className="text-slide-title font-bold text-txt-primary leading-tight">
                    {headline}
                </h1>
            )}
        </motion.div>
      )}

      {/* Main Content Area - Fills remaining space */}
      <motion.div 
        className={clsx(
            "flex-1 w-full flex flex-col justify-center", // Centers content vertically in the available space
            align === 'center' ? 'items-center' : 'items-start'
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};