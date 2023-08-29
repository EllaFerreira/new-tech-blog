/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        '300': 300,
        '400': 400,
        '600': 600,
        '700': 700,
      },
      screens: {
        mobileL: '425px',
        mobileM: '375px',
        mobileS: '320px',
      },
      colors: {
        darkRed: '#D61313',
        red: '#ED1941',
        blue: '#59B1E3',
        darkGreen: '#60B257',
        green: '#34C759',
        black: '#121212',
        lightBlack: '#262626',
        darkGrey: '#2B2B2B',
        grey: '#DBDBDB',
        offGrey: '#696969',
        disabled: '#535353',
        lightGrey: '#2626261A',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
