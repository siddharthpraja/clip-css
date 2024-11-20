
import React, { ButtonHTMLAttributes, ReactNode, useState } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  customBgColor?: string; // Optional custom background color
}

const PushButton = ({ children, customBgColor, ...props }: ButtonProps) => {

  return (
    <button
      className={`inline-flex items-center justify-center active:shadow-inner shadow-xl border-b-4 border-r-4 border-l-2 active:border-l-4 active:border-r-2 active:border-t-4 active:border-b border-t  text-[#36395A] dark:bg-black dark:text-white font-mono text-lg cursor-pointer py-2 px-4 rounded-sm bg-[#FCFCFD]`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PushButton;
