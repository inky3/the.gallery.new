import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAFA",
        "bg-inverted": "#0A0A0A",
        ink: "#0A0A0A",
        "ink-inverted": "#FFFFFF",
        accent: "#7C3AED",
        "accent-soft": "#EDE9FE",
        "accent-glow": "#A78BFA",
        "accent-dark": "#5B21B6",
        muted: "#737373",
        line: "#E5E5E5",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "var(--font-noto-serif-thai)", "serif"],
        body: ["var(--font-archivo)", "var(--font-noto-thai)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "var(--font-noto-thai)", "monospace"],
      },
      borderRadius: {
        none: "0px",
        card: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
