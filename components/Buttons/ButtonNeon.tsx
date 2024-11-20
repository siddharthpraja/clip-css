import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  neonColor?: string; // Optional neon color prop
}

const NeonButton = ({ children, neonColor = "#39ff14", ...props }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: neonColor,         // Custom neon background color
        borderColor: neonColor,             // Custom neon border color
        color: "white",                     // White text color
        boxShadow: `0 0 10px ${neonColor}`,  // Neon border glow
        textShadow: `0 0 10px ${neonColor}`, // Neon text glow
      }}
      className="
        font-bold 
        py-2 
        px-4 
        rounded 
        border-2 
        transition-all 
        duration-300 
        ease-in-out 
        hover:bg-transparent 
        hover:text-[neonColor] 
        hover:border-[neonColor] 
        focus:outline-none 
        focus:ring-2 
        focus:ring-[neonColor]
      "
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;


// { label: "Neon Green", color: "#39ff14" },
// { label: "Neon Pink", color: "#ff007f" },
// { label: "Neon Blue", color: "#00f0ff" },
// { label: "Neon Purple", color: "#8a2be2" },
// { label: "Neon Orange", color: "#ff6600" },
// { label: "Neon Yellow", color: "#ffff33" },
// { label: "Neon Red", color: "#ff3030" },