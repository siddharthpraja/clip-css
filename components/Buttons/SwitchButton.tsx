import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface SwitchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string; // Optional custom class
}

const SwitchButton = ({ children, className, ...props }: SwitchButtonProps) => {
  return (
    <button
      className={`bg-blue-700 w-max text-white border border-blue-500 border-b-4 font-medium overflow-hidden relative px-6 py-3 rounded-md active:brightness-110 active:border-t-4 active:border-b-0 active:opacity-75 outline-none duration-300 group ${className}`}
      {...props}
    >
      <span className="bg-blue-500 shadow-blue-500 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-active:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      {children}
    </button>
  );
};

export default SwitchButton;
