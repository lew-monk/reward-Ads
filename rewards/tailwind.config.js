module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        "-16": "-4rem",
        // 5: "19px",
        65: "270px",
        73: "500px",
        101: "150px",
        102: "410px",
        103: "217px",
        104: "270px",
        105: "390px",
        106: "332px",
        107: "21px",
      },
      blur: {
        xs: "2px",
      },
      backgroundImage: (theme) => ({
        "hero-svg": "url(./Images/Mwaura-LewisAsset 5.svg)",
      }),
    },
    fontFamily: {
      poppins: ["Montserrat"],
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
