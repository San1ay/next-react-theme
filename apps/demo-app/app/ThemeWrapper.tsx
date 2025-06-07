"use client";

import { ThemeProvider } from "next-react-theme";
import { useColorContext } from "./ColorContext";
import { useEffect } from "react";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { colorScheme, colors, transition } = useColorContext();

  // Reset transition styles on mount if transition is not enabled
  useEffect(() => {
    if (!transition && typeof window !== "undefined") {
      document.documentElement.style.transition = "";
      document.body.style.transition = "";
    }
  }, [transition]);

  return (
    <ThemeProvider key={String(transition)} colorScheme={colorScheme} colors={colors} disableTransition={!transition}>
      {children}
    </ThemeProvider>
  );
}