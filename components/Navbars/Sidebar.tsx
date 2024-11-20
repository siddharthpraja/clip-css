"use client"
import Link from "next/link";
import React from "react";
import { BiHome, BiLogoHeroku } from "react-icons/bi";
import { BsMenuButtonFill } from "react-icons/bs";
import { CiSquareMore } from "react-icons/ci";
import { IoIosRadioButtonOff } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TbLayoutNavbarInactive } from "react-icons/tb";// Import usePathname
import "./navbar.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname(); // Get the current pathname

  // Helper function to check if a link is active
  const isActive = (path: string) => pathname === path ? 'bg-orange-400 text-white' : '';

  return (
    <div className="w-max z-50 flex bg-neutral-100 dark:bg-neutral-950 border-r h-screen flex-col relative">
      <input type="checkbox" name="sidebarclick" id="sidebarclick" className="hidden" />
      <label htmlFor="sidebarclick">
        <MdKeyboardDoubleArrowRight className="text-3xl p-1 rotate-180 absolute sidebarbutton bottom-10 -right-10 duration-500 bg-white dark:bg-black border rounded-full" />
      </label>
      <div className="space-y-1 sidebarMenu p-2">
        <Link href={"/"} className="flex gap-2 justify-start w-56 px-4 h-16 items-center">
          <Image src={'/logo.png'} width={50} height={50} alt="logo" className="w-8 h-8" />
          <div className="font-mono">CLIP_Components</div>
        </Link>
        <div>
          <Link href={"/"} className={`flex gap-2 w-full border justify-start px-4 py-2 rounded-xl items-center ${isActive("/")}`}>
            <BiHome />
            <div className="font-mono">Home Page</div>
          </Link>
        </div>
        <div>
          <Link href={"/buttons"} className={`flex gap-2 w-full border justify-start px-4 py-2 rounded-xl items-center ${isActive("/buttons")}`}>
            <IoIosRadioButtonOff />
            <div className="font-mono">Buttons</div>
          </Link>
        </div>
        <div>
          <Link href={"/navbars"} className={`flex gap-2 w-full border justify-start px-4 py-2 rounded-xl items-center ${isActive("/navbars")}`}>
            <TbLayoutNavbarInactive />
            <div className="font-mono">Navbars</div>
          </Link>
        </div>
        <div>
          <Link href={"/heros"} className={`flex gap-2 w-full border justify-start px-4 py-2 rounded-xl items-center ${isActive("/heros")}`}>
            <BiLogoHeroku />
            <div className="font-mono">Hero Sections</div>
          </Link>
        </div>
        <div>
          <Link href={"/features"} className={`flex gap-2 w-full border justify-start px-4 py-2 rounded-xl items-center ${isActive("/features")}`}>
            <BsMenuButtonFill />
            <div className="font-mono">Features</div>
          </Link>
        </div>
        <div>
          <Link href={"/soon"} className={`flex gap-2 w-full border justify-start px-4 py-2 rounded-xl items-center ${isActive("/soon")}`}>
            <CiSquareMore className="text-xl" />
            <div className="font-mono">More Components</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
