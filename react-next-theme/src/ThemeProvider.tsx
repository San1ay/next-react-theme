"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { setToLS, getFromLS } from "./utils";
import type { ThemeContextType } from "./types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<string | null>(null);
  const [color, setColorState] = useState<string | null>(null);

  // Initialize theme and color on mount
  useEffect(() => {
    const savedTheme = getFromLS("theme");
    if (savedTheme) {
      setThemeState(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setThemeState(prefersDark ? "dark" : "light");
    }

    const savedColor = getFromLS("color");
    if (savedColor) {
      setColorState(savedColor);
    } else {
      setColorState(savedTheme === "dark" ? "red" : "green");
    }
  }, []);

  // Side effects when theme changes
  useEffect(() => {
    if (theme === null) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    setToLS("theme", theme);
  }, [theme]);

  // Side effects when color changes
  useEffect(() => {
    if (color === null) return;
    document.documentElement.setAttribute("data-color", color);
    setToLS("color", color);
  }, [color]);

  // Expose setters that just update state, side effects handled by effects
  const setTheme = (newTheme: string) => setThemeState(newTheme);
  const setColor = (newColor: string) => setColorState(newColor);

  if (theme === null || color === null) {
    // prevent flash: wait for initial theme/color load
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
