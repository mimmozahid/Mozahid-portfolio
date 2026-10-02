import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: [
          "var(--font-geist-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        canvas: {
          950: "#04070d",
          900: "#060a12",
          850: "#090f1a",
          800: "#0e1524",
          750: "#131c30",
          700: "#1b2640",
        },
        cp: {
          light: "#c084fc",
          DEFAULT: "#8b5cf6",
          dark: "#6d28d9",
          glow: "rgba(139, 92, 246, 0.15)",
        },
        swe: {
          light: "#38bdf8",
          DEFAULT: "#06b6d4",
          dark: "#0284c7",
          glow: "rgba(6, 182, 212, 0.15)",
        },
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;

