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
    },
  },
  presets: [],
  corePlugins: ["fontFamily", "fontSize", "fontWeight"],
};
