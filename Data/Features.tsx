import { TbBadge3DFilled, TbHandClick } from "react-icons/tb";
import { CgDarkMode } from "react-icons/cg";
import { IoIosColorFilter, IoIosSwitch } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TiFlowParallel } from "react-icons/ti";
import { GiCeilingLight, GiMedicines } from "react-icons/gi";
import { HiDesktopComputer } from "react-icons/hi";
import Link from "next/link";
import Button3D from "@/components/Buttons/Button3D";
import ThemeToggle from "@/components/Buttons/Theme";
import ButtonRainbow from "@/components/Buttons/Buttongradent";
import LoadingButton from "@/components/Buttons/ButtonLoading";
import NeonButton from "@/components/Buttons/ButtonNeon";
import { FaGamepad, FaHighlighter } from "react-icons/fa";
import ParallaxButton from "@/components/Buttons/ParalexButton";

export const categories = [
  {
    title: "3D Button",
    description: (
      <Button3D className="bg-black dark:bg-white">
        Click me
      </Button3D>
    ),
    icon: <TbBadge3DFilled />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Dark Mode",
    description: <ThemeToggle />,
    icon: <CgDarkMode />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Rinbow Button",
    description: <ButtonRainbow>Check Now</ButtonRainbow>,
    icon: <IoIosColorFilter />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Loading Button",
    description: <LoadingButton>Click me</LoadingButton>,
    icon: <AiOutlineLoading3Quarters className="animate-spin" />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Neon Button",
    description: <NeonButton>Click me</NeonButton>,
    icon: <FaHighlighter />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Paralex Button",
    description: <ParallaxButton>Click me</ParallaxButton>,
    icon: <TiFlowParallel />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: (
      <div className="flex  items-center flex-col">
        <p className="text-sm md:text-xl font-bold"></p>
        <p className="text-[10px] md:text-sm md:w-4/5">
          Just Copy and Paste the code in your project and you are good to go.{" "}
          <Link href="/buttons" className="text-blue-500 underline">
            Learn More
          </Link>
        </p>
      </div>
    ),
    description:
      "Hundreds of live project in each category. Register for categories of your choice in Funngro App and start working with companies.",
    icon: (
      <div className="relative">
        <span className="text-lg font-bold text-[#2196F3]">Buttons</span>
        <span className="text-lg font-bold text-[#8BC34A]"> Components</span>
        <div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#FFC107]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#9C27B0]"
          style={{
            clipPath: "polygon(50% 100%, 100% 50%, 100% 100%, 50% 100%)",
          }}
        />
      </div>
    ),
    className: "md:col-span-3 col-span-2  text-gray-900 dark:text-gray-50",
  },
  {
    title: "Medicine Button",
    description: (
      <button className="button-33" role="button">
        Click me
      </button>
    ),
    icon: <GiMedicines />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Push Button",
    description: (
      <button className="button-30" role="button">
        Click Me
      </button>
    ),
    icon: <TbHandClick />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Old PC Button",
    description: <button className="button-pc">Click me</button>,
    icon: <HiDesktopComputer />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Tube-Light Button",
    description: (
      <button
        style={{
          boxShadow: `inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)`,
        }}
        className="inline-flex w-max cursor-pointer items-center gap-1 rounded border dark:border-slate-300 bg-slate-950 dark:bg-gradient-to-b dark:from-slate-50 dark:to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 dark:focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
      >
        Click me
      </button>
    ),
    icon: <GiCeilingLight />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Gaming Button",
    description: (
      <button className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] rounded-[16px] active:scale-95">
        <span className="w-max h-full flex items-center gap-2 px-8 py-3 bg-gradient-to-t from-[#a62ce2] to-[#c045fc] text-white rounded-[14px]">
          Click me
        </span>
      </button>
    ),
    icon: <FaGamepad />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Switch Button",
    description: (
      <button className="bg-blue-700 w-max text-white border border-blue-500 border-b-4 font-medium overflow-hidden relative px-6 py-3 rounded-md hover:brightness-110 hover:border-t-4 hover:border-b-0 active:opacity-75 outline-none duration-300 group">
        <span className="bg-blue-500 shadow-blue-500 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        Click Me
      </button>
    ),
    icon: <IoIosSwitch />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
];
