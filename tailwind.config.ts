import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050505',
        foreground: '#f5f5f5',
        muted: '#111111',
        border: '#262626',
        primary: {
          DEFAULT: '#3AFF71',
          foreground: '#020202'
        }
      },
      fontFamily: {
        joinville: ['"JoinvilleGrotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        '3xl': '1.75rem'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0,0,0,0.65)'
      }
    }
  },
  plugins: []
};

export default config;


