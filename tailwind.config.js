/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ablakunio: {
          blue: "#1d4ed8", // fő kék
          yellow: "#fee440", // kiemelés
          green: "#22c55e", // pozitív
        },
      },
    },
  },
  plugins: [],
}