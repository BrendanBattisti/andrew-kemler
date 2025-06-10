/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
        content: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        andrew: {
          primary: "#2C3E50", // Your charcoal gray
          secondary: "#1E293B", // Darker shade for contrast
          accent: "#3B82F6", // Blue accent
          neutral: "#1E293B",
          "base-100": "#FFFFFF",
          "base-200": "#F8FAFC", // Light background
          "base-300": "#E2E8F0", // Slightly darker background
          info: "#3B82F6",
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
          fontFamily: "Urbanist, sans-serif",
          fontFamilyContent: "Inter, sans-serif",
        },
      },
    ],
    darkTheme: false,
  },
};
