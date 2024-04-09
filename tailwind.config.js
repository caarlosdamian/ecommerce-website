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
        customGray2: '#F2F2F2',
        customAlmostWhite: '#FAFAFA',
        error: '#CD2C2C',
      },
      backgroundImage: {
        'hero-mobile': "url('/src/assets/home/mobile/image-header.jpg')",
        'hero-tablet': "url('/src/assets/home/tablet/image-header.jpg')",
        'hero-desktop': "url('/src/assets/home/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
