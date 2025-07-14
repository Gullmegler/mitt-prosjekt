/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        github: "#191379", // Ny mørkeblå
        primary: "#f97316", // Oransje for knapper og ikoner
        dark: "#1f2937",
      },
    },
  },
  plugins: [],
};
