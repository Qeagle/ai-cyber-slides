import { useEffect } from 'react';

interface KeyboardNavProps {
  onNext: () => void;
  onPrev: () => void;
  onEnter?: () => void; // Optional special action
  onEsc?: () => void;   // Optional special action (e.g. toggle sidebar)
}

export function useKeyboardNav({ onNext, onPrev, onEnter, onEsc }: KeyboardNavProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ': // Space bar
        case 'PageDown':
          e.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          onPrev();
          break;
        case 'Enter':
          e.preventDefault();
          if (onEnter) onEnter();
          else onNext(); // Default Enter to Next if no handler
          break;
        case 'Escape':
          if (onEsc) onEsc();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, onEnter, onEsc]);
}
