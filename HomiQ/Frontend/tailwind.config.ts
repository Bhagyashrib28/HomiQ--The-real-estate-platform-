import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        homiq: {
          bg: "#F6F4EF",
          ink: "#12241D",
          forest: "#12291F",
          forestlight: "#1B3A2C",
          gold: "#D99A44",
          goldlight: "#F0B968",
          verified: "#1E8A5F",
          card: "#FFFFFF",
          line: "#E4E0D6",
          muted: "#6B7269",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,36,29,0.06), 0 8px 24px rgba(18,36,29,0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
