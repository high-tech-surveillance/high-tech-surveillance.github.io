/** @type {import('tailwindcss').Config} */
const pug = require("pug");

module.exports = {
  content: {
    files: ["./app/**/*.{pug}"],
    transform: {
      pug: (content) => {
        return pug.render(content);
      },
    },
  },
  presets: [],
  corePlugins: [],
};
