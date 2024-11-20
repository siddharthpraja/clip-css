import Link from "next/link";
import React from "react";
import { IoClipboardSharp } from "react-icons/io5";
import "./navbar.css";
import { ImAppleinc } from "react-icons/im";
import ThemeToggle from "../Buttons/Theme";
import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { FcCopyright } from "react-icons/fc";

const Navbar2 = () => {
  return (
    <div className="flex h-16 z-10  flex-row sticky px-4 md:px-8 lg:px-16 2xl:px-28  top-0 bg-neutral-100 dark:bg-neutral-900 backdrop-blur-sm  items-center justify-between ">
      {/* Logo */}
      <Link href={"/"} className=" flex gap-2 items-center">
        <div className="relative">
          <span className="text-lg font-bold text-[#2196F3]">Clip</span>
          <span className="text-lg font-bold text-[#8BC34A]">CSS</span>
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
      </Link>
      {/* Nav */}

      <div className="font-bold gap-8 items-center hidden lg:flex ">
        <div className="flex items-center text-sm gap-1 relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent lg:flex hidden rounded-md p-2 border border-b-4 border-black dark:border-[#39ff14] dark:bg-white dark:text-black text-black"
          />
          <BsSearch className="text-lg absolute right-2 text-black" />{" "}
        </div>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/updates"}>Updates</Link>

        <ThemeToggle />
        <div className=" p-2 shadow-xl bg-black dark:bg-white text-sm font-bold gap-2 text-white dark:text-black items-center hidden lg:flex rounded-lg">
          <CgProfile className="text-xl" />
        </div>
      </div>
      {/* download */}

      {/* Mobile Responsive */}
      <div className="lg:hidden flex">
        {/* Menu Button */}
        <input type="checkbox" name="click2" id="click2" className="hidden" />
        <label htmlFor="click2">
          <div className="flex lg:hidden border p-2 rounded-lg  flex-col gap-[5px]">
            <div className="w-6 h-[3px] top bg-slate-900 origin-left duration-500 dark:bg-slate-100  " />
            <div className="w-6 h-[3px] middle bg-slate-900 duration-500 dark:bg-slate-100  " />
            <div className="w-6 h-[3px] bottom bg-slate-900 origin-left duration-500 dark:bg-slate-100  " />
          </div>
        </label>
        {/* Mobile nav */}
        <div className="fixed h-[calc(100vh-80px)  menu2 left-0 ease-in-out duration-700 bg-neutral-100 dark:bg-neutral-900 w-full p-10 top-16">
          <div className="font-bold gap-5  flex  flex-col ">
            <div className="flex items-center relative text-sm">
              <BsSearch className="text-lg absolute right-2 text-black" />
              <input
                type="text"
                className="p-2 rounded-lg"
                placeholder="Search..."
              />
            </div>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/updates"}>Updates</Link>
            <Link href={"/roadmap"}>Roadmap</Link>
            <ThemeToggle />
            <div className="px-[20px] shadow-xl py-[9px] w-max   bg-black dark:bg-white text-sm font-bold gap-2 text-white dark:text-black items-center  flex rounded-lg">
              <ImAppleinc />
              <Link href={"/Login"}>Download</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
