// import type { ThemeContextType, Theme, ThemeColor } from "./types.d.ts";

export const getFromLS = (key: string): string => {
  return localStorage.getItem(key) ?? "";
};

export const setToLS = ( key: string, value: string ): void => {
  localStorage.setItem(key, value);
};
