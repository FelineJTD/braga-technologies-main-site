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
    extend: {},
  },
  plugins: [],
}
