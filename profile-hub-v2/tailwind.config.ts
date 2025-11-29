import type { Config } from "tailwindcss";


const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#1B365D',    // Deeper navy blue - more professional
        accent: '#FF7F50',     // Softer coral - more modern and playful
        cream: '#FFF1E6',      // Warmer cream - easier on eyes
        dark: '#1A1B1E',       // Richer dark - less harsh than pure black
        brownish: '#A65D57',   // Rosier brown - complements the palette better
        secondary: '#4A90E2',  // Additional blue tone for hierarchy
        highlight: '#FFD93D',  // Playful yellow for occasional accents
        midnight: '#141062',    //midnight blue
      },
      fontFamily: {
        abrilff: ["AbrilFatfaceRegular"],
        raleway: ["Raleway"],
        playfair: ["PlayfairDisplay"],
        inter: ["Inter"],
        lora: ["Lora"],
      },
      "animation": {
        shimmer: "shimmer 2s linear infinite"
      },
      "keyframes": {
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
      }
    },
  },
  plugins: [
    // rest of the code
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}