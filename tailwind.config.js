/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F2ED',
        charcoal: '#18181A',
        bronze: '#8A7560',
        stone: '#6E6862',
        linen: '#DDD8D0',
      },
      fontFamily: {
        serif: ['"Cormorant Garant"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['9rem', { lineHeight: '1' }],
        '11xl': ['11rem', { lineHeight: '1' }],
      },
      transitionDuration: {
        900: '900ms',
      },
    },
  },
  plugins: [],
};
