module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html", "./src/**/*.js", "./dist/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
