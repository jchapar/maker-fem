/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tealColor: '#3EE9E5',
        blueColor: '#093F68',
        grayColor: '#777f98',
        whiteColor: '#ffffff',
        darkColor: '#080c20',
        pinkColor: '#ff2965',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
