// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF004D",
        backgrounddark: "#222831",
        textdark: "#EEEEEE",
        cardsdark: "#76ABAE",
        accents:"#FFAD84",
        accent: "#31363F",
        backgroundlight: "#FFE699",
        textlight: "#121212",
        cardslight: "#FFC47F",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries"), nextui()],
};
