"use client";

import React, { createContext, useLayoutEffect, useContext, useEffect, useState } from "react";
import { getFromLS, setToLS, shadcnColors } from "./utils";
import type { ThemeContextType, ThemeProviderType } from "./types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children, colorScheme = false, colors = shadcnColors }: ThemeProviderType) => {
  const [theme, setTheme] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);

  // Initialize theme and color on mount
  useLayoutEffect(() => {
    setTheme(getFromLS("theme") || "system");
    colorScheme && setColor(getFromLS("color") || "default");
  }, [colorScheme]);

  // Apply theme change
  useEffect(() => {
    if (!theme) return;
    const mediaPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => document.documentElement.classList.toggle("dark", theme === "dark" || (theme === "system" && mediaPrefersDark.matches));
    applyTheme();
    setToLS("theme", theme);
    if (theme === "system") mediaPrefersDark.addEventListener("change", applyTheme);
    return () => mediaPrefersDark.removeEventListener("change", applyTheme);
  }, [theme]);

  // Apply color changes
  useEffect(() => {
    document.documentElement.setAttribute("data-color", color && colorScheme ? color : "");
    if (color) setToLS("color", color);
  }, [color, colorScheme]);

  if (theme === null || (colorScheme && color === null)) return null;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        color: color ?? "N/A",
        setColor: colorScheme ? setColor : () => {},
        colors: colorScheme ? colors : [],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
