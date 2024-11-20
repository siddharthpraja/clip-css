import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string; // Optional custom background color
}

const MedicienButton = ({ children, className, ...props }: ButtonProps) => {
  // Custom inline style for the complex box-shadow
  const customBoxShadow = {
    boxShadow: `
      rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, .15) 0 1px 2px,
      rgba(44, 187, 99, .15) 0 2px 4px,
      rgba(44, 187, 99, .15) 0 4px 8px,
      rgba(44, 187, 99, .15) 0 8px 16px,
      rgba(44, 187, 99, .15) 0 16px 32px
    `,
  };

  return (
    <button
      className={`inline-block text-green-600 hover:scale-105 active:scale-95 font-sans text-lg cursor-pointer py-2 px-4 text-center rounded-full transition-all duration-250 ${
        className || "bg-[#c2fbd7]"
      } `}
      style={customBoxShadow} // Apply custom box-shadow
      {...props}
    >
      {children}
    </button>
  );
};

export default MedicienButton;
