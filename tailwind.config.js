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
        primary: '#F36A1D',
        secondary: '#C3E85F',
        error: '#E35131',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        'timeout': {
          '0%': {
            backgroundSize: '0% 2px',
          },
          '100%': {
            backgroundSize: '100% 2px',
          },
        },
        'sideways': {
          '0%': {
            transform: 'translateX(-0.1rem)',
          },
          '50%': {
            transform: 'translateX(0.1rem)',
          },
          '100%': {
            transform: 'translateX(-0.1rem)',
          },
        },
        'top-to-bottom': {
          '0%': {
            transform: 'translateY(2rem)',
          },
          '100%': {
            transform: 'translateY(-2rem)',
          },
        },
        'bottom-to-top': {
          '0%': {
            transform: 'translateY(-2rem)',
          },
          '100%': {
            transform: 'translateY(2rem)',
          },
        },
        'progress-bar': {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '90%',
          },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'timeout': 'timeout 5s ease-in-out',
        'sideways': 'sideways 3s ease-in-out infinite',
        'top-to-bottom': 'top-to-bottom 3s ease-out',
        'bottom-to-top': 'bottom-to-top 3s ease-out',
        'progress-bar': 'progress-bar 3s linear',
      }
    },
  },
  plugins: [],
}
