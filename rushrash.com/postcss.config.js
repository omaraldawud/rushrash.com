const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production"
      ? [
          purgecss.default({
            content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
            safelist: [/^col-/, /^d-/, /^btn-/], // keep Bootstrap classes safe
          }),
        ]
      : []),
  ],
};
