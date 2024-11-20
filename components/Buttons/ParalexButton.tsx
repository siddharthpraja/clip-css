import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string; // Optional custom background color class
}

const ParallaxButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`relative group ${
        className || "bg-purple-500"
      } border-none py-1 px-3 text-lg cursor-pointer`}
      {...props}
    >
      {children}
      <span className="absolute w-full h-full top-0 left-0 duration-500 group-hover:top-[6px] group-active:top-1 group-active:left-1 group-hover:left-1 bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-30"></span>
    </button>
  );
};

export default ParallaxButton;
