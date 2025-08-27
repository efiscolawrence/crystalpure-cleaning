module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#7fdbff",
          DEFAULT: "#00aaff",
          dark: "#0077aa"
        }
      }
    },
  },
  plugins: [],
}