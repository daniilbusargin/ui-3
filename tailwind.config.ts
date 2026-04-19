import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/esporfa/**/*.{ts,tsx}", "./src/main.tsx"],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF7",
        ink: "#1A1A1A",
        terracotta: "#C8553D",
        olive: "#6B7F3F",
        muted: "#8A8A85",
        line: "#E8E8E3",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Fraunces", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
