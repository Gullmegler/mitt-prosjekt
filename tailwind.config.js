/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d1117",
        surface: "#161b22",
        primary: "#238636",  // grønn som GitHub knapper
        text: "#ffffff",
      },
    },
  },
  plugins: [],
};
