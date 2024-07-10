"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const Switch = ({
  checked,
  setChecked,
}: {
  checked: string | undefined,
  setChecked: (checked: string | undefined) => void,
}) => {  
  return (
    <form className="inline space-x-4 antialiased items-center">
      <label
        htmlFor="checkbox"
        className={twMerge(
          "h-6 px-1 flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full w-[50px] relative cursor-pointer transition duration-200",
          checked === "light" ? "bg-amn-light" : "bg-slate-700 border-slate-500"
        )}
      >
        <motion.div
          initial={{
            width: "15px",
            x: checked === "light" ? 0 : 20,
          }}
          animate={{
            height: ["20px", "10px", "20px"],
            width: ["20px", "30px", "20px", "20px"],
            x: checked === "light" ? 20 : 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
          key={String(checked)}
          className={twMerge(
            "h-[20px] block rounded-full bg-white shadow-md z-10"
          )}
        ></motion.div>
        <input
          type="checkbox"
          checked={!!checked}
          onChange={(e) => setChecked(e.target.value)}
          className="hidden"
          id="checkbox"
        />
      </label>
    </form>
  );
};

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();  
  
  return (
      <Switch checked={theme} setChecked={() => setTheme(theme === "dark" ? "light" : "dark")} />
  )
}

     