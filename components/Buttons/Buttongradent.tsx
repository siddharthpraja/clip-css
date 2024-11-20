import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const ButtonRainbow = ({ children }: ButtonProps) => {
  const rainbowStyle = {
    backgroundImage:
      "conic-gradient(from 180deg at 50% 50%, #ebf6f2 0deg, #e7f3e0 56.3deg, #e5eff8 118.8deg, #fef1d8 176.4deg, #f7f4fa 237.6deg, #f7dbe5 295.2deg, #ebf6f2 360deg)",
    borderRadius: "100px",
    filter: "blur(5px)",
  };

  return (
    <div className="w-max relative p-1 m-2">
      {/* Apply inline style directly */}
      <div
        style={rainbowStyle}
        className="w-full -top-[1px] -left-[1px] absolute h-full z-0"
      />
      <button className="border-2 border-white z-20 text-neutral-800 relative w-max bg-white/45 rounded-full px-4 py-2">
        {children}
      </button>
    </div>
  );
};

export default ButtonRainbow;
