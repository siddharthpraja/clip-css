import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string; // Optional custom class
}

const OldButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <div>
      <button
        className={`font-inherit border-0 outline-1 outline-dotted outline-gray-700 outline-offset-[-4px] cursor-pointer ${
          className || "bg-gray-400"
        } shadow-[inset_-1px_-1px_#292929,inset_1px_1px_#fff,inset_-2px_-2px_rgb(158,158,158),inset_2px_2px_#ffffff] text-sm uppercase tracking-widest py-1 px-4 active:shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#292929,inset_-2px_-2px_#ffffff,inset_2px_2px_rgb(158,158,158)]`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default OldButton;
