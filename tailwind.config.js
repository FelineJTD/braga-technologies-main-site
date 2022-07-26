/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // this differs from the developer handout, but I think it's safer
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'tt-hoves': ['TT Hoves', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray: {
          '50': '#FBFBFA',
          '100': '#F4F3F1',
          '200': '#E2E1DF',
          '300': '#C3C3BF',
          '400': '#B4B2AF',
          '500': '#777574',
          '600': '#4F4C4A',
          '700': '#353432',
          '800': '#232221',
          '900': '#161514',
        },
        primary: "#F36A1D",
        secondary: "#C3E85F",
      },
    },
  },
  plugins: [],
}
