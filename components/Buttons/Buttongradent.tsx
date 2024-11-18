import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}
const ButtonRainbow = ({ children }: ButtonProps) => {
  return (
    <div className="w-max relative p-1 m-2">
      <div className=" rainbow w-full -top-[1px] -left-[1px] absolute h-full z-0 " />
      <button className="border-2 border-white z-20 text-neutral-800 relative w-max bg-white/45 rounded-full px-4 py-2">
        {children}
      </button>
    </div>
  );
};

export default ButtonRainbow;
