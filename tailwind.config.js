/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#191379",
        primaryLight: "#5648b1",
        orange: "#f97316",
      },
    },
  },
  plugins: [],
};
