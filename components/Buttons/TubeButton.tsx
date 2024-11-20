import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface TubeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string; // Optional custom class
}

const TubeButton = ({ children, className, ...props }: TubeButtonProps) => {
  return (
    <div>
      <button
        style={{
          boxShadow: `inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)`,
        }}
        className={`inline-flex w-max cursor-pointer items-center gap-1 rounded border dark:border-slate-300 text-white dark:text-black bg-slate-950 dark:bg-gradient-to-b dark:from-slate-50 dark:to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 dark:focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100 ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default TubeButton;
