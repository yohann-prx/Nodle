/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0047AB",
          light: "#4169E1",
          dark: "#003380",
        },
        secondary: {
          DEFAULT: "#4169E1",
          light: "#6A8AE6",
          dark: "#2A4BC7",
        },
        accent: {
          DEFAULT: "#FF7F50",
          light: "#FF9E7A",
          dark: "#E56038",
        },
        success: {
          DEFAULT: "#4CAF50",
          light: "#7BC67E",
          dark: "#3B8C3E",
        },
        warning: {
          DEFAULT: "#FFC107",
          light: "#FFCF3C",
          dark: "#E6AD06",
        },
        error: {
          DEFAULT: "#F44336",
          light: "#F77066",
          dark: "#D32F2F",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
