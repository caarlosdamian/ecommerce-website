/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D87D4A',
        secondary: '#101010',
        third: '#FBAF85',
        customBlack: '#000',
        customWhite: '#FFF',
        customGray: '#F1F1F1',
        customAlmostWhite: '#FAFAFA',
        error: '#CD2C2C',
      },
    },
  },
  plugins: [],
};
