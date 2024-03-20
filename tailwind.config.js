/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        SourceSans: ["Source Sans 3", "sans-serif"],
      },
      fontWeight: {
        300: 300,
        400: 400,
        600: 600,
        700: 700,
      },
      screens: {
        mobileL: "425px",
        mobileM: "375px",
        mobileS: "320px",
      },
      colors: {
        red: {
          darkRed: "#CF0B0F",
          lightRed: "#FFD5D5",
        },
        black: {
          darkBlack: "#121212",
          lightBlack: "#262626",
        },
        grey: {
          darkGrey: "#2B2B2B",
          grey: "#DBDBDB",
          offGrey: "#696969",
          lightGrey: "#2626261A",
        },
        disabled: "#535353",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
