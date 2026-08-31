import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        "ink-soft": "#17171A",
        paper: "#F6F5F2",
        "paper-elevated": "#FFFFFF",
        line: "#DEDBD3",
        muted: "#6B6963",
        violet: {
          DEFAULT: "#4B2E83",
          soft: "#EFE9F7",
          dim: "#3A2266",
        },
        signal: "#E8590C",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "Arial", "sans-serif"],
      },
      maxWidth: {
        wrap: "1180px",
      },
      letterSpacing: {
        label: "0.08em",
      },
    },
  },
  plugins: [],
};

export default config;
