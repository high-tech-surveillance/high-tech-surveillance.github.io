/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./app/**/*.{html,pug}"],
  },
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      assistant: ["Assistant"],
      sanspro: ['"Source Sans Pro"', "sans-serif"],
      barlow: ['"Barlow Condensed"'],
    },
    fontSize: {
      "85px": "85px", // Cover headline
      "70px": "70px", // About us title
      "60px": "60px",
      "48px": "48px", // About us Services title, Remote surveillance title, Location Heading, bussiness card Heading, Request Heading, Company name
      "40px": "40px", // Each location higlight
      "36px": "36px", // About us, second title, image footer, phone number, Better yet!
      "35px": "35px", // Cover paragraph
      "26px": ["26px", { letterSpacing: "7px" }], // Cover second line, Remote survaillance second line
      "25px": "25px",
      "24px": "24px", // Company name, cover button, Cover paragraph, call to action, Get quote button, quote paragraph, request quote, paragraph
      "23px": "23px",
      "20px": "20px",
      "18px": "18px", // Heading menu item, paragraph small, image legend, quote paragraph small, address
      "14px": "14px", // Input label, Form button, input combo
      "11px": "11px", // Form legend
    },
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#FFF",
      salmon: "#ff7f7f",
      gray: {
        dark: "#111111",
        ligth: "#B1B2B5",
        get DEFAULT() {
          return this.light;
        },
      },
      red: {
        light: "#c11717",
        dark: "#a50d0d",
        get DEFAULT() {
          return this.light;
        },
      },
      blue: {
        DEFAULT: "#1153a7",
        dark: "#051965",
        darkest: "#13151E",
        pale: "#2A3044",
      },
    },
    dropShadow: {
      md: "4px 4px 4px rgb(0 0 0 / 0.2)",
    },
    extend: {
      width: {
        "40px": "40px",
        "60px": "60px",
        "350px": "350px",
      },
      lineHeight: {
        tight: "1.1em",
        fit: "1.2em",
        snug: "1.4em",
        relaxed: "1.6em",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
