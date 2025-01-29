/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9B2249',
        'primary-dark': '#7A1B3A',
      },
    },
  },
  plugins: [],
};