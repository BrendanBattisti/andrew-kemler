/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Urbanist", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1C549E",
        },
        whitebg: {
          100: "#f9f9f7",
          DEFAULT: "white",
        },
        fontsecondary: {
          DEFAULT: "#4f4f4f",
        },
      },
    },
  },
};
