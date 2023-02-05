/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["black"],
  },

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
