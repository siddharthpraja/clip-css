import CopyButton from "@/components/Copycode";
import Navbar from "@/components/Navbars/Navbar1";
import Link from "next/link";

const themeTogglecode = `
import Link from "next/link";
import React from "react";
import { IoClipboardSharp } from "react-icons/io5";
import "./navbar.css";
import { ImAppleinc } from "react-icons/im";
import ThemeToggle from "../Buttons/Theme";

const Navbar = () => {
  return (
    <div className="flex h-16 z-20 flex-row sticky px-4 md:px-8 lg:px-16 2xl:px-28  top-0 bg-neutral-100/90 dark:bg-neutral-900/90 backdrop-blur-sm  items-center justify-between ">
      {/* Logo */}
      <Link href={"/"} className=" flex gap-2 items-center">
        <IoClipboardSharp className="text-3xl" />{" "}
        <div className="text-xl font-mono">Clip-CSS</div>
      </Link>
      {/* Nav */}

      <div className="font-bold gap-12 hidden items-center lg:flex ">
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/updates"}>Updates</Link>
        <Link href={"/roadmap"}>Roadmap</Link>
        <ThemeToggle />
      </div>
      {/* download */}
      <div className="px-[20px] shadow-xl py-[9px] bg-black dark:bg-white text-sm font-bold gap-2 text-white dark:text-black items-center hidden lg:flex rounded-lg">
        <ImAppleinc />
        <Link href={"/Login"}>Download</Link>
      </div>
      {/* Mobile Responsive */}
      <div className="lg:hidden flex">
        {/* Menu Button */}
        <input type="checkbox" name="click" id="click" className="hidden" />
        <label htmlFor="click">
          <div className="flex lg:hidden  flex-col gap-[5px]">
            <div className="w-6 h-[3px] top bg-slate-900 origin-left duration-500 dark:bg-slate-100  " />
            <div className="w-6 h-[3px] middle bg-slate-900 duration-500 dark:bg-slate-100  " />
            <div className="w-6 h-[3px] bottom bg-slate-900 origin-left duration-500 dark:bg-slate-100  " />
          </div>
        </label>
        {/* Mobile nav */}
        <div className="fixed h-[calc(100vh-80px)  menu left-0 ease-in-out duration-700 bg-neutral-100 dark:bg-neutral-900 w-full p-10 top-16">
          <div className="font-bold gap-5  flex  flex-col ">
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

export default Navbar;
`;

const globalcss = `
/* Primary Navbar */
.menu {
  display: none;
}

#click:checked ~ .menu {
  display: flex;
}

#click:checked + label .top {
  transform: rotate(45deg);
}

#click:checked + label .middle {
  opacity: 0;
}

#click:checked + label .bottom {
  transform: rotate(-45deg);
}

`;

const PrimaryNav = () => {
  return (
    <div className="">
      <Navbar />
      <br />
      <div className="flex mx-auto max-w-xl flex-col font-mono justify-center items-start">
        <div className="flex justify-start w-1/2">
          <Link href={"./"} className="border px-2 py-1 rounded-lg my-2">
            Back
          </Link>
        </div>
        <div className="p-4">
          <strong>Step1:</strong>
          <code>
            Follow Steps If requied{" "}
            <Link href={"/button/dark"} className="text-blue-500 underline">
              Dark Mode
            </Link>
          </code>
        </div>
        <div className="p-4">
          <strong>Step2:</strong>
          <code>
            Change in <span className="text-blue-500"> global.css</span>
          </code>{" "}
          file:
          <h1 className="">
            <CopyButton code={globalcss} />
          </h1>
        </div>

        <div className="p-4">
          <strong>Step3:</strong> Add the following to your{" "}
          <code className="text-blue-500">components/PrimaryNav.tsx</code> file:
          <h1 className="">
            <CopyButton code={themeTogglecode} />
          </h1>
          <p className="text-purple-400 pt-4">Serverside</p>
        </div>
      </div>
    </div>
  );
};

export default PrimaryNav;
