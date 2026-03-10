import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  "#f2f7f4",
          100: "#e0ede5",
          200: "#c2daca",
          300: "#96c0a6",
          400: "#65a07e",
          500: "#42825e",
          600: "#31674a",
          700: "#27533c",
          800: "#1e3f2d", // main dark green
          900: "#1a3526",
          DEFAULT: "#1B4D2E",
        },
        cream: {
          50:  "#fefdfb",
          100: "#faf8f2", // main cream
          200: "#f4efe3",
          300: "#ece3d0",
          DEFAULT: "#FAF8F2",
        },
        gold: {
          DEFAULT: "#C9A96E",
          light: "#D4B87A",
          dark: "#A8854A",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans:  ["'Inter'", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee-left":  "marquee-left 60s linear infinite",
        "marquee-right": "marquee-right 60s linear infinite",
      },
      keyframes: {
        "marquee-left": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
