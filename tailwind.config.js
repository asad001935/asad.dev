/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Base surfaces
        void: '#03050C',
        abyss: '#060A16',
        surface: '#0A0F1E',
        'surface-alt': '#0D1428',
        // Brand
        primary: {
          DEFAULT: '#2563EB',
          50: '#EAF0FF',
          100: '#D6E2FF',
          200: '#AFC6FF',
          300: '#88A9FF',
          400: '#5A82F5',
          500: '#2563EB',
          600: '#1D4FC4',
          700: '#173D99',
          800: '#112C6E',
          900: '#0B1C45',
        },
        accent: {
          DEFAULT: '#38BDF8',
          soft: '#7DD3FC',
          deep: '#0EA5E9',
        },
        slate: {
          150: '#E7ECF7',
          250: '#C7D0E4',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(37,99,235,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(56,189,248,0.14), transparent 45%), radial-gradient(circle at 50% 100%, rgba(37,99,235,0.12), transparent 50%)',
        'card-sheen':
          'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)',
        'button-gradient': 'linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(37, 99, 235, 0.45)',
        'glow-lg': '0 0 80px -12px rgba(37, 99, 235, 0.5)',
        'glow-accent': '0 0 40px -8px rgba(56, 189, 248, 0.45)',
        card: '0 8px 40px -12px rgba(0, 0, 0, 0.55)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        'float-delayed': 'float 10s ease-in-out infinite 2s',
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(20px, -30px) rotate(8deg)' },
          '66%': { transform: 'translate(-15px, 15px) rotate(-6deg)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
