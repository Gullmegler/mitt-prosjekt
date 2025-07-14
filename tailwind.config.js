/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        github: "#0d1117",
        primary: "#f97316",
        dark: "#1f2937",
      },
    },
  },
  plugins: [],
};
