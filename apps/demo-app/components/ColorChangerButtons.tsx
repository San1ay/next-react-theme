"use client";
import { useTheme } from "next-react-theme";
import { AnimatePresence, motion } from "motion/react";

export default function ColorChangerButtons() {
  const { colors, setColor } = useTheme();

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 mt-3">
      <AnimatePresence key={"color-changer"}>
        {colors &&
          colors.map((color, idx) => (
            <motion.div
              key={`${color}-${idx}`}
              data-color={color}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="font-semibold rounded-md shadow-xs h-7 text-sm flex items-center flex-initial justify-center 
                 bg-primary hover:cursor-pointer hover:bg-primary/90
                text-primary-foreground "
            >
              <button
                className="font-semibold rounded-md hover:cursor-pointer bg-primary text-primary-foreground shadow-xs hover:bg-primary/80 h-8 w-40 md:items-start"
                onClick={() => setColor?.(color)}
              >
                {color}
              </button>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
}