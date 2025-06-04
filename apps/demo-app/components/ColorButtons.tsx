import { AnimatePresence, motion } from "motion/react";
import { ThemeCard } from "./ThemeCard";
import { useColorContext } from "@/app/ColorContext";
import { useState } from "react";

export default function ColorButtons({ colors }: { colors: string[] }) {
  const { setColors, disabledColors, setDisabledColors } = useColorContext();
  const [rotating, setRotating] = useState<{ [key: string]: boolean }>({});

  const handleClick = (color: string) => {
    setRotating((prev) => ({ ...prev, [color]: true }));

    setTimeout(() => {
      setRotating((prev) => ({ ...prev, [color]: false }));
      if (!disabledColors.includes(color)) {
        setDisabledColors((prev) => [...prev, color]);
        setColors((prev) => prev.filter((c) => c !== color));
      } else {
        setDisabledColors((prev) => prev.filter((c) => c !== color));
        setColors((prev) => [...prev, color]);
      }
    }, 400);
  };

  return (
    <>
      {colors.map((color, index) => {
        const isDisabled = disabledColors.includes(color);
        return (
          <motion.div
            key={`${color}-${index}`}
            data-color={color}
            className={`font-semibold rounded-md shadow-xs h-7 text-sm flex items-center flex-initial justify-center 
                ${isDisabled ? "bg-primary/30 " : "bg-primary hover:cursor-pointer hover:bg-primary/90"} 
                text-primary-foreground`}
            initial={{ opacity: 0, x: -20, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, y: 20, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: [0.4, 0, 0.1, 1],
              delay: index * 0.05,
            }}
          >
            <button className="flex w-45 items-center justify-between px-4 text-sm" onClick={() => handleClick(color)}>
              <motion.div className="mr-2" animate={rotating[color] ? { rotate: 360 } : { rotate: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
                <ThemeCard />
              </motion.div>
              <span>{color}</span>
            </button>
          </motion.div>
        );
      })}
    </>
  );
}
