/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
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
      fontFamily: {
        sans: ["var(--font-sfpro)"],
      },
      backgroundImage: {
        "lightpattern": "url('/light-pattern.svg')",
        "darkpattern": "url('/dark-pattern.svg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        verySmall: "0.5rem",
        3: "3rem",
        2: "2rem",
        1: "1rem",
      },
      boxShadow: {
        grid: "0px 4px 10px 0px rgba(0, 0, 0, 0.1);",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
