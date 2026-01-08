/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // CYBER THEME - Dark, High Contrast, Neon Accents
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4', // Main Cyan
          600: '#0891b2',
          700: '#0e7490', // Accent Dark
          800: '#155e75',
          900: '#164e63',
        },
        // Secondary - Purple/Indigo for "Cyber for AI" track
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // Main Purple
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
         // Background colors - Dark theme
         bg: {
          primary: '#020617',    // Slate 950 - Main Deep Background
          secondary: '#0F172A',  // Slate 900 - Secondary Panel Background
          tertiary: '#1E293B',   // Slate 800 - Cards / Borders
          elevated: '#334155',   // Slate 700 - Hovers / Highlights
        },
        // Text colors - Light text on dark bg
        txt: {
          primary: '#F8FAFC',    // Slate 50 - High brightness
          secondary: '#94A3B8',  // Slate 400 - Subtitles
          muted: '#64748B',      // Slate 500 - De-emphasized
          onPrimary: '#000000',  // Text on Cyan
        },
        // Border/Divider
        border: '#1E293B', // Slate 800
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      fontSize: {
        // Presentation-optimized sizes (Matched to ai-master-class)
        'slide-title': ['4.5rem', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.02em' }],
        'slide-subtitle': ['2.25rem', { lineHeight: '1.2', fontWeight: '500' }],
        'section-title': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'body-xl': ['1.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-lg': ['1.5rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-md': ['1.25rem', { lineHeight: '1.5', fontWeight: '400' }],
        'label': ['1rem', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.05em' }],
        'caption': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        'slide': '4rem',
        'section': '3rem',
        'element': '1.5rem',
      },
      maxWidth: {
        'content': '1400px', // Wider for modern screens
        'narrow': '1000px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.2)' }, // Cyan glow
          '100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)' },
        },
      },
      aspectRatio: {
        '16/9': '16 / 9',
      },
    },
  },
  plugins: [],
}
