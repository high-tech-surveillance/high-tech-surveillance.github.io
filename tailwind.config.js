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
      lineHeight: {
        "leading-tight": "1.2",
      },
      fontSize: {
        "85px": "85px", // Cover headline
        "70px": "70px", // About us title
        "48px": "48px", // About us Services title, Remote surveillance title, Location Heading, bussiness card Heading, Request Heading, Company name
        "40px": "40px", // Each location higlight
        "36px": "36px", // About us, second title, image footer, phone number, Better yet!
        "35px": "35px", // Cover paragraph
        "26px": "26px", // Cover second line, Remove survaillance second line
        "24px": "24px", // Company name, cover button, Cover paragraph, call to action, Get quote button, quote paragraph, request quote, paragraph
        "18px": "18px", // Heading menu item, paragraph small, image legend, quote paragraph small, address
        "14px": "14px", // Input label, Form button, input combo
        "11px": "11px", // Form legend
      },
    },
  },
  corePlugins: [
    "fontFamily",
    "fontSize",
    "fontWeight",
    "textDecoration",
    "filter",
    "dropShadow",
    "letterSpacing",
  ],
};
