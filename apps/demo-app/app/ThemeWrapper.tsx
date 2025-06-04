"use client";

import { ThemeProvider } from "next-react-theme";
import { useColorContext } from "./ColorContext";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { colorScheme, colors } = useColorContext();

  return (
    <ThemeProvider colorScheme={colorScheme} colors={colors}>
      {children}
    </ThemeProvider>
  );
}