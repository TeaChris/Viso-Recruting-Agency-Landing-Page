/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        colorPrimary: "#0000ff",
        colorSecondary: "#3ff7fa",
        colorGray: "#bebebe",
        colorWhite: "#fff",
        colorBlack: "#000",
      },
      spacing: {
        seekers: "30rem",
        img: "70rem",
      },
    },
  },
  plugins: [],
};
