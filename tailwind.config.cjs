/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        Cairo: 'Cairo',
        Amiri: 'Amiri',
        AmiriItalic: 'Amiri-italic',
      },
    },
  },
  plugins: [],
};
