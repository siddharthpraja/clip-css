import ParallaxButton from "@/components/Buttons/ParalexButton";
import CopyButton from "@/components/Copycode";
import Link from "next/link";

const themeTogglecode = `
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

export default ParallaxButton;`;

const globalcss = `
// Parallax Button
.parallax-button {
  position: relative;
  background-color: rebeccapurple;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.parallax-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  transform: translateY(0px);
  transition: transform 0.3s ease-out;
}
.dark .parallax-layer {
  background-color: rgba(255, 255, 255, 0.3);
}

.parallax-button:hover .parallax-layer {
  transform: translate(5px, 5px);
}

.parallax-button:active .parallax-layer {
  transform: translate(10px, 10px);
}
`;

const ParalaxButon = () => {
  return (
    <div className="h-screen dark:text-white w-full flex flex-col items-center justify-center">
      <ParallaxButton>Click me!</ParallaxButton>
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

export default ParalaxButon;
