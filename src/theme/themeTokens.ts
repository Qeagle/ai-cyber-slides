// Design tokens for the presentation
export const theme = {
  colors: {
    primary: {
      DEFAULT: '#3B82F6', // Blue 500
      glo: '#60A5FA', // Blue 400
      dim: '#1E3A8A', // Blue 900
    },
    accent: {
      DEFAULT: '#F472B6', // Pink 400
      pop: '#EC4899', // Pink 500
    },
    semantic: {
      success: '#10B981', // Emerald 500
      warning: '#F59E0B', // Amber 500
      danger: '#EF4444', // Red 500
    },
    bg: {
      main: '#0F172A', // Slate 900
      card: '#1E293B', // Slate 800
      overlay: 'rgba(15, 23, 42, 0.9)',
    },
    text: {
      main: '#F8FAFC', // Slate 50
      muted: '#94A3B8', // Slate 400
      dim: '#475569', // Slate 600
    }
  },
  layout: {
    sidebarWidth: '280px',
    slidePadding: '4rem',
    maxWidth: '1600px',
  },
  typography: {
    h1: 'text-5xl font-bold tracking-tight',
    h2: 'text-4xl font-bold tracking-tight',
    h3: 'text-2xl font-semibold',
    body: 'text-xl leading-relaxed',
    small: 'text-base text-slate-400',
  },
  animation: {
    fast: { duration: 0.3, ease: "easeOut" },
    normal: { duration: 0.5, ease: "easeOut" },
    slow: { duration: 0.8, ease: "easeInOut" },
  }
};
