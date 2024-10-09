/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      textDecoration: {
        "dotted-underline": "underline dotted",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
}
