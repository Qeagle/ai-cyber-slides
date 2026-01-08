import React from 'react';
import { motion } from 'framer-motion';
import { ImageSlide as ImageSlideType } from '../../slides/types';
import { SlideShell } from '../layout/SlideShell';
import { SlideBody } from '../layout/SlideBody';

export const ImageSlide: React.FC<{ slide: ImageSlideType }> = ({ slide }) => {
  return (
    <SlideShell>
      <SlideBody title={slide.title} headline={slide.headline} maxWidth="full">
        <div className="flex-1 flex items-center justify-center p-8 w-full h-full">
            <motion.img 
                src={slide.src} 
                alt={slide.alt || 'Slide Image'}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl border border-slate-800"
            />
        </div>
      </SlideBody>
    </SlideShell>
  );
};
