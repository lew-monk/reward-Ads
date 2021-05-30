module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        "-16": "-4rem",
        101: "150px",
        102: "410px",
        103: "217px",
        104: "270px",
        105: "350px",
        cof: "185px",
      },
      blur: {
        xs: "2px",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    height: {
      xxl: "1186px",
    },
    colors: {
      blue: {
        main: "#002A96",
      },
      primary: "#fff",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
