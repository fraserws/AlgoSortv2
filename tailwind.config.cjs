/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        darkNord: {
          primary: "#5e81ac",
          secondary: "#bf616a",
          accent: "#d08770",
          neutral: "#2e3440",
          "base-100": "#3b3c4e",
          info: "#434c5e",
          success: "#8fbcbb",
          warning: "#ebcb8b",
          error: "#bf616a",
        },
      },
    ],
  },

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
