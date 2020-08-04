module.exports = {
  purge: [],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#ffe8df",
      secondary: "#f0f0f0",
      white: "#ffffff",
      soft_black: "#888888",
      black: "#111111",
    }),
    fontFamily: {
      main: ["Courgette", "cursive"],
      second: ["Raleway", "sans-serif"],
    },
    rotate: {
      "-5": "-5deg",
    },
    height: {
      screen: "100vw",
      screen_without_header: "calc(100vh - 110px)",
      header: "70px",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
