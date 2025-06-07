'use client';

import { extendedColors, shadcnColors } from "@/lib/themes";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ColorContextType {
  colorScheme: boolean;
  setColorScheme: (value: boolean) => void;
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
  extended: boolean;
  setExtended: (value: boolean) => void;
  allColors: string[];
  disabledColors: string[];
  setDisabledColors: React.Dispatch<React.SetStateAction<string[]>>;
  resetColors: () => void;
  transition: boolean | null;
  setTransition: (value: boolean) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorScheme, setColorScheme] = useState<boolean>(true);
  const [extended, setExtended] = useState<boolean>(false);
  const [colors, setColors] = useState<string[]>([]);
  const [disabledColors, setDisabledColors] = useState<string[]>([]);
  const allColors = [...shadcnColors, ...extendedColors];
  const resetColors = () => {
    setDisabledColors([]);
    setColors(extended ? allColors : shadcnColors);
  };

  const [transition, setTransition] = useState<boolean | null>(() => {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem("theme-transition");
    return stored === "true" ? true : stored === "false" ? false : null;
  });

  useEffect(() => {
    if (!extended) {
      setColors([...shadcnColors]);
    } else {
      setColors([...shadcnColors, ...extendedColors]);
    }
  }, [extended]);

  useEffect(() => {
    localStorage.setItem("theme-transition", String(transition));
  }, [transition]);

  return (
    <ColorContext.Provider value={{ colorScheme, setColorScheme, colors, setColors, extended, setExtended, allColors, disabledColors, setDisabledColors, resetColors, transition, setTransition }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColorContext must be used within a ColorProvider');
  }
  return context;
};
