import Link from "next/link";
import React from "react";
import { BiLogoHeroku } from "react-icons/bi";
import { BsMenuButtonFill } from "react-icons/bs";
import { CiSquareMore } from "react-icons/ci";
import { IoIosRadioButtonOff } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { SiCssdesignawards } from "react-icons/si";
import { TbLayoutNavbarInactive } from "react-icons/tb";
import "./navbar.css";

const Sidebar = () => {
  return (
    <div className="w-max z-50 flex  bg-neutral-100 dark:bg-neutral-950 border-r   h-screen flex-col relative">
      <input
        type="checkbox"
        name="sidebarclick"
        id="sidebarclick"
        className="hidden"
      />
      <label htmlFor="sidebarclick">
        <MdKeyboardDoubleArrowRight className="text-3xl p-1 rotate-180 absolute sidebarbutton  bottom-6 -right-10  duration-500 bg-white dark:bg-black  border rounded-full" />
      </label>
      <div className="space-y-1 sidebarMenu   p-2">
        <Link
          href={"/"}
          className=" flex gap-2   justify-start w-56 px-4   h-16 items-center"
        >
          <SiCssdesignawards className="text-2xl rotate-6" />{" "}
          <div className=" font-mono">Clip-CSS</div>
        </Link>
        <div className="">
          <Link
            href={"/buttons"}
            className=" flex gap-2 w-full border bg-white dark:bg-black justify-start  px-4 py-2 rounded-xl items-center"
          >
            <IoIosRadioButtonOff className="" />
            <div className=" font-mono">Buttons</div>
          </Link>
        </div>
        <div className="">
          <Link
            href={"/navbars"}
            className=" flex gap-2 w-full border bg-white dark:bg-black justify-start  px-4 py-2 rounded-xl items-center"
          >
            <TbLayoutNavbarInactive className="" />
            <div className=" font-mono">Navbars</div>
          </Link>
        </div>
        <div className="">
          <Link
            href={"/heros"}
            className=" flex gap-2 w-full border bg-white dark:bg-black justify-start  px-4 py-2 rounded-xl items-center"
          >
            <BiLogoHeroku className="" />
            <div className=" font-mono">Hero Sections</div>
          </Link>
        </div>
        <div className="">
          <Link
            href={"/features"}
            className=" flex gap-2 w-full border bg-white dark:bg-black justify-start  px-4 py-2 rounded-xl items-center"
          >
            <BsMenuButtonFill className="" />
            <div className=" font-mono">Features</div>
          </Link>
        </div>
        <div className="">
          <Link
            href={"/soon"}
            className=" flex gap-2 w-full border bg-white dark:bg-black justify-start  px-4 py-2 rounded-xl items-center"
          >
            <CiSquareMore className="text-xl" />
            <div className=" font-mono">More Componets</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
