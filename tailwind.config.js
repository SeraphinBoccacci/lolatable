/* eslint-disable no-undef */
/* eslint-disable quote-props */
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#ffe8df",
      secondary: "#f0f0f0",
      white: "#ffffff",
      soft_black: "#888888",
      black: "#111111",
      transparent: "none",
    }),
    fontFamily: {
      main: ["Courgette", "cursive"],
      second: ["Raleway", "sans-serif"],
      third: ["Montserrat", "serif"],
    },
    extend: {
      rotate: {
        "-5": "-5deg",
        135: "135deg",
      },
      spacing: {
        "width-screen": "100vw",
        "height-screen": "100vh",
        "max-content": "max-content",
        "72": "18rem",
        "80": "20rem",
        "96": "24rem",
        "112": "28rem",
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "180": "50rem",
      },
      width: {
        "11/10": "150%",
      },
      height: {
        screen_without_header: "calc(100vh - 110px)",
        header: "70px",
      },
      maxWidth: {
        "width-screen": "100vw",
        "height-screen": "100vh",
      },
      cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        none: "none",
      },
      inset: {
        "72": "18rem",
        "px-1": "1px",
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
    },
  },
  variants: {},
  plugins: [],
};
