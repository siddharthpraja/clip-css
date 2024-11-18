import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ParallaxButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="parallax-button" {...props}>
      {children}
      <span className="parallax-layer"></span>
    </button>
  );
};

export default ParallaxButton;
