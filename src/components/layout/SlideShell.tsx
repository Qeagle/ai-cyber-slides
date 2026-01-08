import React from 'react';
import clsx from 'clsx';
// import { motion } from 'framer-motion'; // Kept if we want to animate the shell entry

interface SlideShellProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'alt' | 'accent';
}

const backgrounds = {
    default: 'bg-bg-primary',     // Deep Slate (Main)
    alt: 'bg-bg-secondary',       // Slightly lighter (Context)
    accent: 'bg-bg-tertiary'      // Distinct (Breakout)
};

export const SlideShell: React.FC<SlideShellProps> = ({ 
    children, 
    className,
    variant = 'default'
}) => {
  return (
    <div className={clsx(
        // Core layout: Full viewport, hidden overflow, flex center
        "w-screen h-screen overflow-hidden flex items-center justify-center relative",
        backgrounds[variant],
        className
    )}>
        {/* === Background Layers === */}
        
        {/* 1. Subtle Radial Gradient (Vignette) */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_120%)] opacity-80" />

        {/* 2. Cyber Grid Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
          style={{ 
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
              backgroundSize: '80px 80px' 
          }} 
        />
        
        {/* 3. Ambient Glows (Atmosphere) */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-secondary-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

        {/* === Logo === */}
        <img 
            src="/images/k7-logo.png" 
            alt="K7 Academy" 
            className="absolute top-8 right-8 h-12 w-auto z-50 object-contain drop-shadow-lg opacity-90"
        />

        {/* === Main Content Area === */}
        <div className="relative z-10 w-full h-full p-slide flex items-center justify-center">
             {children}
        </div>
    </div>
  );
};
