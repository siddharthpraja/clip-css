import LoadingButton from "@/components/Buttons/ButtonLoading";
import CopyButton from "@/components/Copycode";
import Link from "next/link";

const themeTogglecode = `
"use client";
import React, { useState } from 'react';

const LoadingButton = () => {
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
      className={\`bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded \${
        isLoading ? 'opacity-80 pointer-events-none' : ''
      }\`}
      onClick={handleClick}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg
            className="animate-spin h-5 w-5 mr-2"
            viewBox="0 0 24 24"
          >
            <circle
              className="fill-none stroke-white stroke-2"
              cx="12"
              cy="12"
              r="10"
            />
          </svg>
          Loading...
        </span>
      ) : (
        'Loading'
      )}
    </button>
  );
};

export default LoadingButton;`;

const DarkMode = () => {
  return (
    <div className="h-full dark:text-white w-full flex flex-col items-center justify-center">
      
      <LoadingButton />
      <br />
      <div className="flex flex-col font-mono justify-center items-start">
      <div className="flex justify-start w-1/2">
        <Link href={"./"} className="border px-2 py-1 rounded-lg my-2">
          Back
        </Link>
      </div>
        <div className="p-4">
          <strong>Step1:</strong> Add the following to your{" "}
          <code className="text-blue-500">components/NeonButton.tsx</code> file:
          <h1 className="">
            <CopyButton code={themeTogglecode} />
          </h1>
          <p className="text-red-400 pt-4">Client Side</p>
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
