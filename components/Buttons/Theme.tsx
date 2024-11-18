"use client";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean | null>(null); // Set initial state to null (waiting for theme detection)
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // Check for system default theme (dark mode or light mode)
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Try to get the theme from localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      // If theme is set in localStorage, use it
      setIsDark(savedTheme === "dark");
    } else {
      // If no theme in localStorage, use system default
      setIsDark(systemPrefersDark);
      localStorage.setItem("theme", systemPrefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (isDark !== null && !animating) {
      // Only toggle the theme once isDark is set and animation is not ongoing
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark, animating]);

  const handleThemeToggle = () => {
    setAnimating(true);
    setIsDark((prev) => !prev);
    setTimeout(() => {
      setAnimating(false);
    }, 500); // animation duration
  };

  // If the theme has not been determined yet, return nothing or a loading spinner
  if (isDark === null) return null;

  return (
    <div className="relative w-10 h-5 bg-gray-200 rounded-full p-[2px] flex items-center justify-between">
      <div
        className={`p-2 bg-white rounded-full shadow-md ${
          isDark ? "ml-5" : "mr-5"
        } ${animating ? "animate-toggle" : ""}`}
      />
      <div className="flex items-center">
        {isDark ? (
          <MdDarkMode className="absolute text-black text-xs right-1" />
        ) : (
          <MdLightMode className="absolute text-black text-xs left-1" />
        )}
      </div>
      <button
        onClick={handleThemeToggle}
        className="absolute w-10 h-5 text-gray-600 rounded-full"
      />
    </div>
  );
};

export default ThemeToggle;
