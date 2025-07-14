/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        githubBlue: "#101342",
        lightHero: "#5648b1",
        orange: "#f97316",
      },
    },
  },
  plugins: [],
};
