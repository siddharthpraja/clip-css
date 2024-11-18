import Button3D from "@/components/Buttons/Button3D";
import ButtonRainbow from "@/components/Buttons/Buttongradent";
import LoadingButton from "@/components/Buttons/ButtonLoading";
import NeonButton from "@/components/Buttons/ButtonNeon";
import ParallaxButton from "@/components/Buttons/ParalexButton";
import ThemeToggle from "@/components/Buttons/Theme";
import Link from "next/link";
import React from "react";
import { BiHome } from "react-icons/bi";

const Buttons = () => {
  return (
    <div className=" flex flex-col font-mono items-center justify-center h-screen">
      <div className="flex justify-start w-3/4">
        <Link
          href={"./"}
          className="border px-2 flex gap-2 items-center hover:bg-black hover:text-white py-1 rounded-lg my-2"
        >
          <BiHome /> home
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center h-max w-2/3">
        <div className="p-4 items-center flex flex-col">
          <ThemeToggle />
          <Link
            className="border px-2 py-1 rounded-lg my-2"
            href="/buttons/dark"
          >
            Code to Dark Mode
          </Link>
        </div>
        <div className="p-4 gap-2 items-center flex flex-col">
          <NeonButton>Neon Button</NeonButton>
          <Link
            className="border px-2 py-1 rounded-lg my-2"
            href="/buttons/neon"
          >
            Code to Neon
          </Link>
        </div>
        <div className="p-4 gap-2 items-center flex flex-col">
          <Button3D className="bg-blue-600">3D Button</Button3D>
          <Link className="border px-2 py-1 rounded-lg my-2" href="/buttons/3d">
            Code to 3D
          </Link>
        </div>
        <div className="p-4 gap-2 items-center flex flex-col">
          <ParallaxButton >Parallex</ParallaxButton>
          <Link
            className="border px-2 py-1 rounded-lg my-2"
            href="/buttons/parallax"
          >
            Code to Parallex
          </Link>
        </div>
        <div className="p-4 gap-2 items-center flex flex-col">
          <LoadingButton />
          <Link
            className="border px-2 py-1 rounded-lg my-2"
            href="/buttons/loading"
          >
            Code to Loading
          </Link>
        </div>
        <div className="p-4 gap-2 items-center flex flex-col">
          <ButtonRainbow> Rainbow </ButtonRainbow>
          <Link
            className="border px-2 py-1 rounded-lg my-2"
            href="/buttons/rainbow"
          >
            Code to Rainbow
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
