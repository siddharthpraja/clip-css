import React, { ReactNode, ButtonHTMLAttributes } from "react";
import "./button.css";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const NeonButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="
        transition 
        duration-300 
        ease-in-out 
        bg-neon 
        text-white 
        font-bold 
        py-2 
        px-4 
        rounded 
        border-2 
        border-neon 
        hover:bg-transparent 
        hover:text-neon 
        shadow-neon 
        glow"
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;
