import { useState, useCallback, useEffect } from 'react';
import { Slide } from '../slides/types';

export function useSlidesEngine(slides: Slide[]) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // For auto-play or specific animations
  
  const totalSlides = slides.length;
  const currentSlide = slides[currentSlideIndex];
  
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex(prev => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex(prev => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
    }
  }, [totalSlides]);

  // Progress percentage (0 to 100)
  const progress = ((currentSlideIndex + 1) / totalSlides) * 100;

  return {
    currentSlide,
    currentSlideIndex,
    totalSlides,
    nextSlide,
    prevSlide,
    goToSlide,
    progress,
    isFirst: currentSlideIndex === 0,
    isLast: currentSlideIndex === totalSlides - 1
  };
}
