import ButtonRainbow from "@/components/Buttons/Buttongradent";
import CopyButton from "@/components/Copycode";
import Link from "next/link";

const themeTogglecode = `
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
`;

const globalcss = `
/* Rainbow */


.rainbow{
  background-image: conic-gradient(from 180deg at 50% 50%, #ebf6f2 0deg, #e7f3e0 56.3deg, #e5eff8 118.8deg, #fef1d8 176.4deg, #f7f4fa 237.6deg, #f7dbe5 295.2deg, #ebf6f2 360deg);
  border-radius: 100px;
  filter: blur(5px);
}
`;

const DarkMode = () => {
  return (
    <div className="h-screen dark:text-white w-full flex flex-col items-center justify-center">
      <ButtonRainbow>Click me!</ButtonRainbow>
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
          <code className="text-blue-500">components/RainbowButton.tsx</code>{" "}
          file:
          <h1 className="">
            <CopyButton code={themeTogglecode} />
          </h1>
          <p className="text-purple-400 pt-4">Serverside</p>
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
