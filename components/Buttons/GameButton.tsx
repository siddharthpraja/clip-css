import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface GameButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string; // Optional custom class
}

const GameButton = ({ children, className, ...props }: GameButtonProps) => {
  return (
    <button
      className={`relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] rounded-[16px] active:scale-95 ${className}`}
      {...props}
    >
      <span className="w-max h-full flex items-center gap-2 px-8 py-3 bg-gradient-to-t from-[#a62ce2] to-[#c045fc] text-white rounded-[14px]">
        {children}
      </span>
    </button>
  );
};

export default GameButton;
