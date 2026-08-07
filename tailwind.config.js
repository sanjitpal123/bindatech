/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070A0F',
          darker: '#030508',
          card: '#0F172A',
          cardHover: '#131D35',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(16, 185, 129, 0.4)',
          primary: '#10B981',
          primaryHover: '#059669',
          secondary: '#06B6D4',
          accent: '#84CC16',
          success: '#10B981',
          heading: '#F8FAFC',
          body: '#94A3B8',
          subtle: '#64748B'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace']
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.18) 0%, rgba(6, 182, 212, 0.1) 35%, rgba(7, 10, 15, 0) 70%)',
        'glow-gradient': 'radial-gradient(circle at center, rgba(16, 185, 129, 0.25) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'button-gradient': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #06B6D4 0%, #10B981 100%)'
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(16, 185, 129, 0.2)',
        'glow-md': '0 0 30px rgba(16, 185, 129, 0.35)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      }
    },
  },
  plugins: [],
}
