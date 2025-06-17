/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-white': '#FAF9F6',
        'warm-white-100': '#F7F6F2',
        'warm-white-200': '#F0EDE6',
        'warm-white-300': '#E8E4D9',
        'off-black': '#121212',
        'off-black-100': '#1E1E1E',
        'off-black-200': '#2D2D2D',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'spin': 'spin 8s linear infinite',
        'wave': 'wave 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          'from': { backgroundPosition: '0% 0%' },
          'to': { backgroundPosition: '200% 0%' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        spin: {
          'from': { transform: 'rotate(0deg) translateX(15px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(15px) rotate(-360deg)' },
        },
        wave: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '20% 60% 30% 70% / 70% 30% 50% 40%' },
          '75%': { borderRadius: '40% 30% 60% 40% / 30% 70% 40% 60%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
