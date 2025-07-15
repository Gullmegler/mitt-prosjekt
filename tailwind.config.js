/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: "#111444",
        brandPurple: "#5648b1",
        brandOrange: "#f97316", // Tailwind sin orange-500
      },
    },
  },
  plugins: [],
};
