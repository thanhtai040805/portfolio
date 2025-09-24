import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import {cn} from "@/libs/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const themeStatus = localStorage.getItem("theme");
        if(themeStatus == "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const handleChangeMode = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setIsDarkMode(false);
        }else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
      <button onClick={handleChangeMode} className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-1 rounded-full transition-colors durartion-300",
        "focus:outlin-hidden"
        )}>
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    );
} 