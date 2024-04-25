"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const toggleMode = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  return (
    <div>
      <Button size="icon" variant="ghost" onClick={toggleMode}>
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

export { ModeToggle };
