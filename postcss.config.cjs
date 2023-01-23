module.exports = {
  plugins: [
    require("tailwindcss")("./src/lib/assets/tailwind.config.cjs"),
    require("autoprefixer"),
  ],
}
