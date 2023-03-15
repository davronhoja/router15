/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myPurple: "#524fd5",
        myGrey: "#c0a180",
        primary: "#181B32",
        secondary: "#00f6ff",
        white: "rgba(255, 255, 255, 0.7)",
        bluee: "rgba(9, 151, 124, 0.9)",
      },
      fontFamily: {
        axiforma: ["Axiforma"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },

  plugins: [],
};
