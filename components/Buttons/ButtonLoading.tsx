"use client";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const LoadingButton = ({ children, className, ...props }: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Simulate API call or action
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <button
      className={`border font-bold py-2 px-4 rounded ${
        className || "bg-yellow-400"
      } ${isLoading ? "opacity-80 pointer-events-none" : ""}`}
      onClick={handleClick}
      {...props} // Spread additional props like onClick, etc.
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <AiOutlineLoading3Quarters className="animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;
