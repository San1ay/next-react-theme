"use client";
import { AnimatePresence } from "motion/react";
import ColorChangerButtons from "@/components/ColorChangerButtons";
import ThemeToggle from "@/components/ThemeToggle";
import Control from "@/components/Control";
import CodePreview from "./CodePreview";
import PackageLink from "./PackageLink";

export default function Home() {
  return (
    <>
      <Control />
      <span className="flex flex-col items-center mt-2 text-3xl text-foreground">↑↑ Enable/Disable Theme Colors ↑↑</span>

      <div className="w-full container mx-auto">
        <div className="py-2 flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center text-foreground font-bold my-1">Next React Themes</h1>
          <PackageLink />
          <CodePreview code="npm i next-react-theme" />
          <ThemeToggle />
          <span className="flex flex-col items-center text-3xl text-foreground mt-4">↓↓ Change Theme Colors ↓↓</span>
          <AnimatePresence>
            <ColorChangerButtons />
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
