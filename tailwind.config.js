/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    // colors: {
    //   white: "#fff",
    //   dark: "#555",
    //   dark2: "#000",
    //   dark3: "#444",
    //   blue: "#ff8577",
    //   green: "#2f9048",
    //   red: "#910606",
    //   pink: "#f2a2e2",
    // },
  },
  plugins: [require("@tailwindcss/typography")],
};
