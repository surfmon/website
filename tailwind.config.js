module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "surfmon-blue": "#1751dc",
        "surfmon-red": "#d23009",
        "surfmon-purple": "#222940",
        "surfmon-grey": "#9194A2",
        "surfmon-white": "#f7f7f7",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
}
