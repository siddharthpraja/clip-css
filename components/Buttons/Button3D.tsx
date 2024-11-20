import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button3D = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`relative border px-4 py-2 rounded-lg transition duration-300 ease-in-out 
      hover:translate-y-[-2px] hover:shadow-xl 
      active:translate-y-[1px] active:shadow-md
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button3D;