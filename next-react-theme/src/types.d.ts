export interface ThemeContextType {
  theme: string;
  setTheme: (newTheme: string) => void;
  color?: string | null;
  setColor?: (newColor: string) => void;
}
