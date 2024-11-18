import ThemeToggle from "@/components/Buttons/Theme";
import CopyButton from "@/components/Copycode";
import Link from "next/link";

const themeTogglecode = `
"use client";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import CopyButton from "../Copycode";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true); // Changed from false to true
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else {
      localStorage.setItem("theme", "dark"); // Set default theme to dark
    }
  }, []);

  useEffect(() => {
    if (!animating) {
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

  return (
    <div className="relative w-10 h-5 bg-gray-200 rounded-full p-[2px] flex items-center justify-between">
      <div
        className={\` p-2  bg-white rounded-full shadow-md \${ isDark ? "ml-5" : "mr-5"} \${animating ? "animate-toggle" : ""}\`}
      />
      <div className="flex items-center">
        {isDark ? (
          <MdDarkMode className="absolute text-black text-xs right-1 " />
        ) : (
          <MdLightMode className="absolute text-black text-xs left-1 " />
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
`;

const DarkMode = () => {
  return (
    <div className="h-full dark:text-white w-full flex flex-col items-center justify-center">
      <ThemeToggle /> <br />
      <div className="flex flex-col font-mono justify-center lg:w-1/2 mx-auto items-start">
        <div className="flex justify-start w-1/2">
          <Link href={"./"} className="border px-2 py-1 rounded-lg my-2">
            Back
          </Link>
        </div>
        <div className="p-4 ">
          <strong>Step1:</strong>
          <code>
            Change in <span className="text-blue-500"> tailwindConfig.ts</span>
          </code>{" "}
          file:
          <h1 className="pt-4">
            const config: Config = {"{"} <br />
            <span className="text-green-500"> darkMode: "class",</span> //change
            Code <br />
            content: {"["} <br />
            "./pages/**/*.{"{js,ts,jsx,tsx,mdx}"}", <br />
            "./components/**/*.{"{js,ts,jsx,tsx,mdx}"}", <br />
            "./app/**/*.{"{js,ts,jsx,tsx,mdx}"}", <br />
            {"]"}, <br />
            {"}"}, <br />
          </h1>
        </div>

        <div className="p-4">
          <strong>Step2:</strong> Add the following to your{" "}
          <code className="text-blue-500">components/ThemeToogle.tsx</code>{" "}
          file:
          <h1 className="">
            <CopyButton code={themeTogglecode} />
          </h1>
          <p className="text-purple-400 pt-4">Serverside</p>
        </div>
      </div>
    </div>
  );
};
export default DarkMode;
