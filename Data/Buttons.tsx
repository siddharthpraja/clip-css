import Button3D from "@/components/Buttons/Button3D";
import ButtonRainbow from "@/components/Buttons/Buttongradent";
import LoadingButton from "@/components/Buttons/ButtonLoading";
import NeonButton from "@/components/Buttons/ButtonNeon";
import GameButton from "@/components/Buttons/GameButton";
import MedicienButton from "@/components/Buttons/MedicineButton";
import OldButton from "@/components/Buttons/OldButton";
import ParallaxButton from "@/components/Buttons/ParalexButton";
import PushButton from "@/components/Buttons/PushButton";
import SwitchButton from "@/components/Buttons/SwitchButton";
import ThemeToggle from "@/components/Buttons/Theme";
import TubeButton from "@/components/Buttons/TubeButton";
import { FaGamepad } from "react-icons/fa";


export const buttons = [
  {
    name: "3d",
    component: <Button3D>Click me</Button3D>,
    description: "Test this Simple 3D Button",
    className: "bg-black text-white dark:bg-white dark:text-black",
    code: `import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button3D = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={\`relative border px-4 py-2 rounded-lg transition duration-300 ease-in-out 
      hover:translate-y-[-2px] hover:shadow-xl 
      active:translate-y-[1px] active:shadow-md
      \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
};

const App = () => {

  return (
    <div className="space-y-4 p-10">
      <Button3D className="">
        Click Me
      </Button3D>
    </div>
  );
};

export default App;
`,
  },
  {
    name: "rainbow",
    component: <ButtonRainbow>Click me</ButtonRainbow>,
    description: "Test this Rainbow Button",
    code: `import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const ButtonRainbow = ({ children }: ButtonProps) => {
  const rainbowStyle = {
    backgroundImage:
      "conic-gradient(from 180deg at 50% 50%, #ebf6f2 0deg, #e7f3e0 56.3deg, #e5eff8 118.8deg, #fef1d8 176.4deg, #f7f4fa 237.6deg, #f7dbe5 295.2deg, #ebf6f2 360deg)",
    borderRadius: "100px",
    filter: "blur(5px)",
  };

  return (
    <div className="w-max relative p-1 m-2">
      {/* Apply inline style directly */}
      <div
        style={rainbowStyle}
        className="w-full -top-[1px] -left-[1px] absolute h-full z-0"
      />
      <button className="border-2 border-white z-20 text-neutral-800 relative w-max bg-white/45 rounded-full px-4 py-2">
        {children}
      </button>
    </div>
  );
};

const App = () => {

  return (
    <div className="space-y-4 p-10">
      <ButtonRainbow className="">
        Click Me
      </ButtonRainbow>
    </div>
  );
};

export default App;
`,
  },
  {
    name: "dark",
    component: <ThemeToggle />,
    description: "Test this Dark Button",
    code: `"use client";
import { useEffect, useState } from "react";
// import { MdDarkMode, MdLightMode } from "react-icons/md"; If using react-icons

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(null); // useState<boolean | null>(null) for TS Set initial state to null (waiting for theme detection)
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;


    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else {
      setIsDark(systemPrefersDark);
      localStorage.setItem("theme", systemPrefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (isDark !== null && !animating) {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark, animating]);

  const handleThemeToggle = () => {
    setAnimating(true);
    setIsDark((prev) => !prev);
    setTimeout(() => {
      setAnimating(false);
    }, 500); // animation duration
  };

  if (isDark === null) return null;

  return (
    <div className="relative w-10 h-5 bg-gray-200 rounded-full p-[2px] flex items-center justify-between">
      <div
        className={\`p-2 bg-white rounded-full shadow-md \${
          isDark ? "ml-5" : "mr-5"
          } \${animating ? "animate-toggle" : ""}\`}
      />
      <div className="flex items-center">
        {isDark ? (
          "dark"// react-icons <MdDarkMode className="absolute text-black text-xs right-1" />
        ) : (
           "light" // react-icons <MdLightMode className="absolute text-black text-xs left-1" />
          )}
      </div>
      <button
        onClick={handleThemeToggle}
        className="absolute w-10 h-5 text-gray-600 rounded-full"
      />
     
    </div>
     // Must add in tailwind.config.ts
     //  ***
     // const config: Config = {
     // darkMode: "class",
     //  ***
  );
};

export default ThemeToggle;

`,
  },
  {
    name: "neon",
    component: <NeonButton neonColor="#00f0ff">Click me</NeonButton>,
    description: "Test this Neon Button",
    code: `import React from "react";

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
        boxShadow: \`0 0 10px \${neonColor}\`,  // Neon border glow
        textShadow: \`0 0 10px \${neonColor}\`, // Neon text glow
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


const App = () => {

  return (
    <div className="space-x-4 space-y-4">
      <NeonButton neonColor="#39ff14">
        Neon Green
      </NeonButton>
      <NeonButton neonColor="#00f0ff">
        Neon Blue
      </NeonButton>
      <NeonButton neonColor="#ff007f">
        Neon Pink
      </NeonButton>
      <NeonButton neonColor="#8a2be2">
        Neon Purple
      </NeonButton>
      <NeonButton neonColor="#ff6600">
        Neon Orange
      </NeonButton>
      <NeonButton neonColor="#ffff33">
        Neon Yellow
      </NeonButton>
      <NeonButton neonColor="#ff3030">
        Neon Red
      </NeonButton>

    </div>
  );
};

export default App;

`,
  },
  {
    name: "parallax",
    component: (
      <ParallaxButton className="bg-orange-500 text-black">
        Click me
      </ParallaxButton>
    ),
    description: "Test this Parallax Button",
    code: `import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string; // Optional custom background color class
}

const ParallaxButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={\`relative group \${
        className || "bg-purple-500"
        } border-none py-1 px-3 text-lg cursor-pointer\`}
      {...props}
    >
      {children}
      <span className="absolute w-full h-full top-0 left-0 duration-500 group-hover:top-[6px] group-active:top-1 group-active:left-1 group-hover:left-1 bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-30"></span>
    </button>
  );
};


const App = () => {

  return (
    <div className="p-10">
      <ParallaxButton className="bg-red-500">
        Neon Green
      </ParallaxButton>

    </div>
  );
};

export default App;
`,
  },
  {
    name: "loading",
    component: <LoadingButton>Click me</LoadingButton>,
    description: "Test this Loading Button",
    code: `
    "use client";
import React, { useState } from "react";
// import { AiOutlineLoading3Quarters } from "react-icons/ai"; if you are using react-icons

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
      className={\`border font-bold py-2 px-4 rounded \${
        className || "bg-yellow-400"
        } \${isLoading ? "opacity-80 pointer-events-none" : ""}\`}
      onClick={handleClick}
      {...props} // Spread additional props like onClick, etc.
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
        
          Loading...
        </span>
        // Can use the <AiOutlineLoading3Quarters className="animate-spin" /> Loading...
      ) : (
          children
        )}
    </button>
  );
};



const App = () => {

  return (
    <div className="p-10">
      <LoadingButton className="">
        Load
      </LoadingButton>
    </div>
  );
};

export default App;
`,
  },
  {
    name: "medicine",
    component: <MedicienButton>Click me</MedicienButton>,
    description: "Test this Medicine Button",
    code: `import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string; // Optional custom background color
}

const MedicienButton = ({ children, className, ...props }: ButtonProps) => {
  // Custom inline style for the complex box-shadow
  const customBoxShadow = {
    boxShadow: \`
      rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, .15) 0 1px 2px,
      rgba(44, 187, 99, .15) 0 2px 4px,
      rgba(44, 187, 99, .15) 0 4px 8px,
      rgba(44, 187, 99, .15) 0 8px 16px,
      rgba(44, 187, 99, .15) 0 16px 32px
    \`,
  };

  return (
    <button
      className={\`inline-block text-green-600 hover:scale-105 active:scale-95 font-sans text-lg cursor-pointer py-2 px-4 text-center rounded-full transition-all duration-250 \${
        className || "bg-[#c2fbd7]"
        } \`}
      style={customBoxShadow} // Apply custom box-shadow
      {...props}
    >
      {children}
    </button>
  );
};


const App = () => {

  return (
    <div className="p-10">
      <MedicienButton>
        Click me
      </MedicienButton>

    </div>
  );
};

export default App;
`,
  },
  {
    name: "push",
    component: <PushButton>Click me</PushButton>,
    description: "Test this Push Button",
    code: `import React, { ButtonHTMLAttributes, ReactNode, useState } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  customBgColor?: string; // Optional custom background color
}

const PushButton = ({ children, customBgColor, ...props }: ButtonProps) => {

  return (
    <button
      className={\`inline-flex items-center justify-center active:shadow-inner shadow-xl border-b-4 border-r-4 border-l-2 active:border-l-4 active:border-r-2 active:border-t-4 active:border-b border-t  text-[#36395A] dark:bg-black dark:text-white font-mono text-lg cursor-pointer py-2 px-4 rounded-sm bg-[#FCFCFD]\`}
      {...props}
    >
      {children}
    </button>
  );
};

const App = () => {

  return (
    <div className="p-10">
      <PushButton>
        Click me
      </PushButton>
    </div>
  );
};
// No Attribute in Push Button If needed Custom Changes in Button

export default App;

    `,
  },
  {
    name: "old",
    component: <OldButton>Click me</OldButton>,
    description: "Test this Old PC Button",
    code: `import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string; // Optional custom class
}

const OldButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <div>
      <button
        className={\`font-inherit border-0 outline-1 outline-dotted outline-gray-700 outline-offset-[-4px] cursor-pointer \${
          className || "bg-gray-400"
          } shadow-[inset_-1px_-1px_#292929,inset_1px_1px_#fff,inset_-2px_-2px_rgb(158,158,158),inset_2px_2px_#ffffff] text-sm uppercase tracking-widest py-1 px-4 active:shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#292929,inset_-2px_-2px_#ffffff,inset_2px_2px_rgb(158,158,158)]\`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};



const App = () => {

  return (
    <div className="p-10">
      <OldButton className="bg-green-500">
        Click me
      </OldButton>
    </div>
  );
};

export default App;
`,
  },
  {
    name: "tube",
    component: <TubeButton>Click me</TubeButton>,
    description: "Test this Tube-Light Button",
    code: `
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
          boxShadow: \`inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)\`,
        }}
        className={\`inline-flex w-max cursor-pointer items-center gap-1 rounded border dark:border-slate-300 text-white dark:text-black bg-slate-950 dark:bg-gradient-to-b dark:from-slate-50 dark:to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 dark:focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100 \${className}\`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};


const App = () => {

  return (
    <div className="p-10">
      <TubeButton className="bg-blue-500 dark:bg-white">
        Click me
      </TubeButton>
    </div>
  );
};
// No Attribute in Push Button If needed Custom Changes in Button

export default App;
`,
  },
  {
    name: "game",
    component: (
      <GameButton>
        <FaGamepad className="text-xl" /> Click me
      </GameButton>
    ),
    description: "Test this Game Button",
    code: `import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface GameButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string; // Optional custom class
}

const GameButton = ({ children, className, ...props }: GameButtonProps) => {
  return (
    <button
      className={\`relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] rounded-[16px] active:scale-95 \${className}\`}
      {...props}
    >
      <span className="w-max h-full flex items-center gap-2 px-8 py-3 bg-gradient-to-t from-[#a62ce2] to-[#c045fc] text-white rounded-[14px]">
        {children}
      </span>
    </button>
  );
};

const App = () => {

  return (
    <div className="p-10">
      <GameButton>
        Click me
      </GameButton>
    </div>
  );
};
// No Attribute in Push Button If needed Custom Changes in Button

export default App;
`,
  },
  {
    name: "switch",
    component: <SwitchButton>Click me</SwitchButton>,
    description: "Test this Switch Button",
    code: `import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface SwitchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string; // Optional custom class
}

const SwitchButton = ({ children, className, ...props }: SwitchButtonProps) => {
  return (
    <button
      className={\`bg-blue-700 w-max text-white border border-blue-500 border-b-4 font-medium overflow-hidden relative px-6 py-3 rounded-md active:brightness-110 active:border-t-4 active:border-b-0 active:opacity-75 outline-none duration-300 group \${className}\`}
      {...props}
    >
      <span className="bg-blue-500 shadow-blue-500 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-active:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      {children}
    </button>
  );
};


const App = () => {

  return (
    <div className="p-10">
      <SwitchButton>
        Click me
      </SwitchButton>
    </div>
  );
};

// No Attribute in Push Button If needed Custom Changes in Button

export default App;
`,
  },
];
