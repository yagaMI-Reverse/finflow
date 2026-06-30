import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      fontWeight: {
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
      },
      colors: {
        // Friendly fresh palette: soft mint/green -> blue -> violet on a soft canvas.
        canvas: "#eef3fb",
        surface: "#f7faff",
        ink: {
          DEFAULT: "#1d2433", // body / headings — 13:1 on canvas
          soft: "#475069", // secondary text — 7:1 on canvas
          faint: "#6b7488", // muted captions — 4.6:1 on canvas
        },
        mint: {
          50: "#e9fbf3",
          100: "#c9f5e1",
          200: "#93ead0",
          300: "#5bd9b6",
          400: "#2fc79c",
          500: "#10a983",
          600: "#0a8a6c",
        },
        brand: {
          50: "#eef2ff",
          100: "#dbe4ff",
          200: "#bcccff",
          300: "#94aaff",
          400: "#6c84fb",
          500: "#4f63ef",
          600: "#3d49d4",
        },
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
      },
      borderRadius: {
        clay: "2rem",
        "clay-lg": "2.75rem",
        "clay-xl": "3.5rem",
      },
      boxShadow: {
        // Layered clay shadows: light highlight top-left, soft drop bottom-right.
        clay: "8px 8px 24px rgba(82,98,160,0.18), -8px -8px 24px rgba(255,255,255,0.9), inset 0 0 0 1px rgba(255,255,255,0.5)",
        "clay-sm":
          "5px 5px 14px rgba(82,98,160,0.16), -5px -5px 14px rgba(255,255,255,0.85), inset 0 0 0 1px rgba(255,255,255,0.5)",
        "clay-lg":
          "16px 18px 44px rgba(70,86,150,0.22), -10px -10px 30px rgba(255,255,255,0.85), inset 0 1px 0 0 rgba(255,255,255,0.6)",
        "clay-inset":
          "inset 5px 5px 12px rgba(82,98,160,0.18), inset -5px -5px 12px rgba(255,255,255,0.9)",
        "clay-brand":
          "8px 10px 26px rgba(79,99,239,0.35), -6px -6px 18px rgba(255,255,255,0.25), inset 0 1px 0 0 rgba(255,255,255,0.35)",
        phone:
          "0 40px 90px -20px rgba(58,73,142,0.45), 0 18px 40px -12px rgba(58,73,142,0.3)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-x": {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(16px,-12px)" },
        },
        "rise-bar": {
          "0%": { transform: "scaleY(0.15)" },
          "100%": { transform: "scaleY(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "float-slow": "float-slow 7s ease-in-out infinite",
        "float-x": "float-x 9s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
