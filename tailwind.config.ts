import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#040a18",
          900: "#0a1628",
          800: "#0f2240",
          700: "#162d52",
          600: "#1e3a68",
          500: "#2a4f8a",
        },
        teal: {
          500: "#0ea5e9",
          400: "#38bdf8",
          300: "#7dd3fc",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
