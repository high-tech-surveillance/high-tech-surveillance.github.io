/** @type {import('tailwindcss').Config} */
const pug = require("pug");

module.exports = {
  content: {
    files: ["./app/**/*.{html,pug}"],
  },
  theme: {
    colors: {
      white: "#FFFFFF",
    },
    fontFamily: {
      assistant: ["Assistant"],
      sanspro: ['"Source Sans Pro"', "sans-serif"],
      barlow: ['"Barlow Condensed"'],
    },
    //fontSize: {
    // 18px   16px
    // 24px   20px
    // 26px   23px
    // 35px   24px
    // 85px   60px
    //},
    extend: {
      fontSize: {
        35: "35px",
      },
    },
  },
  corePlugins: ["fontFamily", "fontSize", "fontWeight"],
};
