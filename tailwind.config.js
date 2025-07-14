/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#101342", // Github-inspired dark blue
        orange: "#f97316",  // Orange used for buttons and checkmarks
      },
    },
  },
  plugins: [],
};
