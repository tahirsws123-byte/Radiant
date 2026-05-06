export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: ["class", '[data-dark="true"]'],

  theme: {
    fontFamily: {
      sans: ["Switzer", "system-ui", "sans-serif"],
      display: ["Switzer", "system-ui", "sans-serif"],
    },

    extend: {
      // 🎨 COLORS
      colors: {
        radiant: {
          yellow: "#fff1be",
          pink: "#ee87cb",
          purple: "#b060ff",
          text: "#0a0a0a",
          muted: "#6b7280",
        },
      },

      // 📏 SPACING
      spacing: {
        "10.75": "2.6875rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
      },

      // 🔲 BORDER RADIUS
      borderRadius: {
        "4xl": "2rem",
      },

      // 📦 MAX WIDTH
      maxWidth: {
        "8xl": "90rem",
      },

      // 🔤 TYPOGRAPHY
      fontSize: {
        hero: ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },

      // 🌈 GRADIENT
      backgroundImage: {
        "radiant-gradient":
          "linear-gradient(135deg, #fff1be 0%, #ee87cb 50%, #b060ff 100%)",
      },

      // 🌫️ SHADOW
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },

      // 🎞️ ANIMATIONS
      keyframes: {
        pin: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5) translateY(20px)",
          },
          "60%": {
            opacity: "1",
            transform: "scale(1.1) translateY(-4px)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0)",
          },
        },

        "move-x": {
          from: { transform: "translateX(var(--move-x-from))" },
          to: { transform: "translateX(var(--move-x-to))" },
        },
      },

      animation: {
        pin: "pin 0.6s ease-out forwards",
        "move-x": "move-x linear infinite",
      },
    },
  },

  plugins: [],
}