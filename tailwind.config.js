/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#0A0A0A",
        surface: "#131313",
        raised: "#1B1B1B",
        ink: "#FAFAFA",
        muted: "#8F8F8F",
        line: "#242424",
        invert: "#FAFAFA",
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
