"use client";
import { useTheme } from "next-react-theme";

const themes = ["light", "dark", "system"] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Find the next theme in the list
  const nextTheme = () => {
    const idx = themes.indexOf(theme as (typeof themes)[number]);
    return themes[(idx + 1) % themes.length];
  };

  return (
    <div className="flex flex-col gap-4 mt-5 items-center">
      <button className="px-4 py-2 font-semibold rounded-md hover:cursor-pointer bg-primary text-primary-foreground shadow-xs hover:bg-primary/90" onClick={() => setTheme(nextTheme())}>
        Change Theme ({theme})
      </button>
      <div className="text-xs text-muted-foreground">(Cycles: light → dark → system)</div>
    </div>
  );
}
