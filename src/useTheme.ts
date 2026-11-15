import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

function readChoice(key: string): Theme | null {
  try {
    const value = localStorage.getItem(key);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function systemTheme(): Theme {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme(key: string): [Theme, () => void] {
  const [choice, setChoice] = useState<Theme | null>(() => readChoice(key));
  const [system, setSystem] = useState<Theme>(systemTheme);
  const theme = choice ?? system;

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!media) return;
    const onChange = () => setSystem(media.matches ? "dark" : "light");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setChoice(next);
    try {
      localStorage.setItem(key, next);
    } catch {
      // The toggle still works for this visit when storage is unavailable.
    }
  };

  return [theme, toggle];
}
