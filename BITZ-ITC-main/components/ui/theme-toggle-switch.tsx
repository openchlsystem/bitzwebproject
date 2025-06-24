'use client';

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

import { cn } from "@/lib/utils";

export function ThemeToggleSwitch() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-10 w-20 items-center rounded-full p-1 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-900",
        theme === "dark"
          ? "bg-navy-950 dark:shadow-dark-neomorphic-inset"
          : "bg-gray-200 light:shadow-light-neomorphic-inset"
      )}
    >
      <span
        className={cn(
          "pointer-events-none inline-block h-8 w-8 transform rounded-full ring-0 transition duration-500 ease-in-out",
          theme === "dark"
            ? "translate-x-10 bg-navy-900 dark:shadow-dark-neomorphic-toggle"
            : "translate-x-0 bg-white shadow-lg"
        )}
      />
      <span
        className={cn(
          "absolute left-3 flex items-center justify-center transition-opacity duration-200",
          theme === "dark" ? "opacity-0" : "opacity-100"
        )}
      >
        <Sun className="h-5 w-5 text-navy-900" />
      </span>
      <span
        className={cn(
          "absolute right-3 flex items-center justify-center transition-opacity duration-200",
          theme === "dark" ? "opacity-100" : "opacity-0"
        )}
      >
        <Moon className="h-5 w-5 text-white" />
      </span>
    </button>
  );
} 