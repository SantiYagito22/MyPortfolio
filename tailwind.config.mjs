/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-down": "fade-down 0.3s ease-out",
      },
      colors: {
        cardBackground: {
          light: "#f9f4ef",
          dark: "#242629",
        },
        headline: {
          light: "#020826",
          dark: "#fffffe",
        },
        subHeadline: {
          light: "#716040",
          dark: "#94a1b2",
        },
        background: {
          light: "#eaddcf",
          dark: "#16161a",
        },
        cardHeading: {
          light: "#fffffe",
          dark: "#242629",
        },
        paragraph: {
          light: "#716040",
          dark: "#94a1b2",
        },
        button: {
          light: "#716040",
          dark: "#7f5af0",
        },
        buttonText: {
          light: "#fffffe",
          dark: "#fffffe",
        },
        stroke: {
          light: "#020826",
          dark: "#010101",
        },
        main: {
          light: "#fffffe",
          dark: "#fffffe",
        },
        highlight: {
          light: "#8c7851",
          dark: "#7f5af0",
        },
        secondary: {
          light: "#eaddcf",
          dark: "#72757e",
        },
        tertiary: {
          light: "#f25042",
          dark: "#2cb67d",
        },
        textSecondary: {
          light: "#6e5a32",
          dark: "#19191a",
        },
        borderButton: {
          light: "#c39238",
          dark: "#46337d",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode:  ['class'],
};
