/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'line-active': '#21be9c',
        'line-inactive': '#333333',
        'custom-bg': '#0a0a0a',
        'custom-text': '#ffffff',
        'gradient-from': '#21be9c',
        'gradient-to': '#0f5848',
        'text-dark': '#000000',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'drawLine': 'drawLine 1.5s ease-out forwards',
        'drawVertical': 'drawVertical 1s ease-out forwards',
        'drawHorizontal': 'drawHorizontal 1s ease-out forwards',
        'drawHorizontalRight': 'drawHorizontalRight 1s ease-out forwards',
        'fadeSlideIn': 'fadeSlideIn 0.8s ease-out forwards',
        'fadeSlideInRight': 'fadeSlideInRight 0.8s ease-out forwards',
        'modalFadeIn': 'modalFadeIn 0.3s ease-out forwards',
        'typing': 'typing 3s steps(40, end)',
        'blink': 'blink 0.75s step-end infinite',
      },
      keyframes: {
        drawLine: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        drawVertical: {
          '0%': { transform: 'scaleY(0)', opacity: '0' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
        drawHorizontal: {
          '0%': { width: '0', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
        drawHorizontalRight: {
          '0%': { width: '0', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeSlideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        modalFadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
      },
    },
  },
  plugins: [],
}
