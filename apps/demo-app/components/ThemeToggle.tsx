"use client";
import { useTheme } from "next-react-theme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-4 mt-5 items-center">
      <button
        className="px-4 py-2 font-semibold rounded-md hover:cursor-pointer bg-primary text-primary-foreground shadow-xs hover:bg-primary/90"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change Theme ({theme})
      </button>
    </div>
  );
}
