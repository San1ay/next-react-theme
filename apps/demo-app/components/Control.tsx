"use client";

import { AnimatePresence } from "motion/react";
import { useColorContext } from "@/app/ColorContext";
import ColorButtons from "./ColorButtons";
import Toggler from "./Toggler";

export default function Control() {
  const { colorScheme, setColorScheme, allColors, extended, setExtended, resetColors } = useColorContext();

  const primaryColors = allColors.slice(0, 8);

  return (
    <section className="top-0 z-50 border-b shadow-md px-6 py-4 w-full">
      <div className="flex gap-8 flex-col lg:flex-row lg:items-start">

        <div className="flex gap-4 content-start min-w-[200px] my-1 flex-row lg:flex-col">
          <Toggler text={"Color Scheme"} value={colorScheme} setValue={setColorScheme} />
          {colorScheme && (
            <>
              <Toggler text={"Extended Colors"} value={extended} setValue={setExtended} />
              <button className="px-4 font-semibold rounded-md hover:cursor-pointer bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 hidden sm:block" onClick={resetColors}>
                Reset Colors
              </button>
            </>
          )}
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  xl:grid-cols-6 gap-1 ">
            <AnimatePresence>{colorScheme && <ColorButtons colors={extended ? allColors : primaryColors} />}</AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
