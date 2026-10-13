import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#09101B",
          900: "#0F1B2D",
          800: "#162740",
          700: "#1E3557",
          600: "#2B4770",
        },
        concrete: {
          50: "#FAF9F7",
          100: "#F4F3F0",
          200: "#E9E7E2",
          300: "#D6D3CB",
          400: "#A9A499",
        },
        amber: {
          DEFAULT: "#F28C28",
          hover: "#DE7B1B",
          gold: "#C59B27",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;