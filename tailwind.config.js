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
        auto: "repeat(auto-fill, minmax(400px, 1fr))",
      },
      height: {
        "screen-50": "50vh",
        "screen-80": "80vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
