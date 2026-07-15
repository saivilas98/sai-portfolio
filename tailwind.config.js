/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        "paper-alt": "rgb(var(--color-paper-alt) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        graphite: "rgb(var(--color-graphite) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        tape: "rgb(var(--color-tape) / <alpha-value>)",
        marker: "rgb(var(--color-marker) / <alpha-value>)",
        pen: "rgb(var(--color-pen) / <alpha-value>)",
        sage: "rgb(var(--color-sage) / <alpha-value>)",
      },
      fontFamily: {
        hand: ["'Caveat'", "cursive"],
        note: ["'Architects Daughter'", "cursive"],
        serif: ["'Patrick Hand'", "cursive"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "1180px",
        page: "760px",
      },
      rotate: {
        1.5: "1.5deg",
        2.5: "2.5deg",
        "-1.5": "-1.5deg",
        "-2.5": "-2.5deg",
      },
    },
  },
  plugins: [],
};
