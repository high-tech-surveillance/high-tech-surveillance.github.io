/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./app/**/*.{html,pug}"],
  },
  theme: {
    colors: {
      black: "#000000",
      red: {
        light: "#c11717",
        dark: "#a50d0d",
      },
      blue: {
        DEFAULT: "#1153a7",
      },
    },
    dropShadow: {
      md: "4px 4px 4px rgb(0 0 0 / 0.2)",
    },
    fontFamily: {
      assistant: ["Assistant"],
      sanspro: ['"Source Sans Pro"', "sans-serif"],
      barlow: ['"Barlow Condensed"'],
    },
    letterSpacing: {
      wide: "0.26923em",
    },
    extend: {
      fontSize: {
        35: "35px",
      },
    },
  },
  corePlugins: [
    "fontFamily",
    "fontSize",
    "fontWeight",
    "filter",
    "dropShadow",
    "letterSpacing",
  ],
};
