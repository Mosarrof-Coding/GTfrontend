/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        dot1: "fade 1.2s infinite",
        dot2: "fade 1.2s 0.2s infinite",
        dot3: "fade 1.2s 0.4s infinite",
        dot4: "fade 1.2s 0.6s infinite",
      },
    },
  },
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

  plugins: [require("@tailwindcss/typography")],
};
