/** @type {import('tailwindcss').Config} */
const pug = require("pug");

module.exports = {
  content: {
    files: ["./app/**/*.{html,pug}"],
    //transform: {
    //pug: (content) => {
    //return pug.render(content);
    //},
    //},
  },
  theme: {
    colors: {
      white: "#FFFFFF",
    },
    fontFamily: {
      assistant: ["Assistant"],
    },
    //fontSize: {
    //xl: "35px",
    //},
  },
  //presets: [],
  //corePlugins: ["fontFamily", "fontSize", "fontWeight"],
};
