import Button3D from "@/components/Buttons/Button3D";
import CopyButton from "@/components/Copycode";
import Link from "next/link";

const themeTogglecode = `
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button3D = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={\`relative bg-blue-800 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out 
      hover:translate-y-[-2px] hover:shadow-xl 
      active:translate-y-[1px] active:shadow-md active:bg-blue-900 
      \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button3D;
`;

const globalcss = `
/* Button 3D */
.three-d-button {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.three-d-button:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.three-d-button:active {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

`;

const ThreeDButton = () => {
  return (
    <div className="h-full dark:text-white w-full flex flex-col items-center justify-center">
    
      <Button3D className="bg-blue-500">Click me!</Button3D>
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
          <code className="text-blue-500">components/Button3d.tsx</code> file:
          <h1 className="">
            <CopyButton code={themeTogglecode} />
          </h1>
          <p className="text-purple-400 pt-4">Serverside</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeDButton;
