import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "sai-portfolio-theme";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    window.localStorage.setItem(STORAGE_KEY, theme);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "light" ? "#FFFFFF" : "#0A0A0A");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return { theme, toggleTheme };
}
