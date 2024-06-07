/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      colors: {
         gray: {
            900: '#010101',
         },
         green: {
            100: '#A1FFD5',
            300: '#54FFB1',
            500: '#50806A',
            700: '#2A8059',
            900: '#0B0D0B',
         },
      },
      extend: {},
   },
   plugins: [],
};
