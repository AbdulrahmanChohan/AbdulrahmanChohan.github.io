/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      lineHeight: {
        'loose': '1.75',
        'relaxed': '2',
      }
    },
  },
  plugins: [],
}