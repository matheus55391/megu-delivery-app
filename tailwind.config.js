/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [nativewind()],
}