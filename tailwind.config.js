module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html", "./src/**/*.js", "./dist/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        //grid auto fill columns
        auto: "repeat(auto-fit, minmax(280px, 1fr))",
      },
      height: {
        "screen-50": "50vh",
        "screen-80": "80vh",
      },
      colors: {
        nebu: {
          purple: {
            DEFAULT: "#b18fc1",
            darker: "#75478a",
            darkest: "#524359",
          },
          pink: {
            DEFAULT: "#fcb0bf",
            darker: "#7C3342",
          },
          red: {
            DEFAULT: "#cf586f",
            darker: "#B0203C",
          },
          gray: {
            DEFAULT: "#f4f4f4",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
