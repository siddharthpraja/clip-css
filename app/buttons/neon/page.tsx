import NeonButton from "@/components/Buttons/ButtonNeon";
import CopyButton from "@/components/Copycode";
import Link from "next/link";

const themeTogglecode = `
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
`;

const globalcss = `
/* Button Neon */
.bg-neon {
  background-color: #39ff14; /* Neon green */
}

.border-neon {
  border-color: #39ff14;
}

.text-neon {
  color: #39ff14;
}

.shadow-neon {
  box-shadow: 0 0 10px #39ff14;
}

.glow {
  text-shadow: 0 0 10px #39ff14;
}

/* Optional: Add some animation on hover */
.glow:hover {
  animation: glow 0.5s infinite;
}

@keyframes glow {
  0% {
    text-shadow: 0 0 10px #39ff14;
  }
  50% {
    text-shadow: 0 0 20px #39ff14;
  }
  100% {
    text-shadow: 0 0 10px #39ff14;
  }
}
`;

const NeonButtons = () => {
  return (
    <div className="h-full dark:text-white w-full flex flex-col items-center justify-center">
      <NeonButton>Click me!</NeonButton>
      <br />
      <div className="flex flex-col font-mono justify-center items-start">
        <div className="flex justify-start w-1/2">
          <Link href={"./"} className="border px-2 py-1 rounded-lg my-2">
            Back
          </Link>
        </div>
        <div className="p-4">
          <strong>Step1:</strong>
          <code>
            Change in <span className="text-blue-500"> global.css</span>
          </code>{" "}
          file:
          <h1 className="">
            <CopyButton code={globalcss} />
          </h1>
        </div>

        <div className="p-4">
          <strong>Step2:</strong> Add the following to your{" "}
          <code className="text-blue-500">components/NeonButton.tsx</code> file:
          <h1 className="">
            <CopyButton code={themeTogglecode} />
          </h1>
          <p className="text-purple-400 pt-4">Serverside</p>
        </div>
      </div>
    </div>
  );
};

export default NeonButtons;
