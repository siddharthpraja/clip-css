import CopyButton from "@/components/Copycode";
import Navbar3 from "@/components/Navbars/Navbar3";
import Link from "next/link";

const themeTogglecode = `
import React from "react";
import Link from "next/link";
import ThemeToggle from "../Buttons/Theme";
import { CiSquarePlus, CiSquareRemove } from "react-icons/ci";
const Navbar3 = () => {
  return (
    <div className="flex  z-0 flex-row-reverse items-center  mt-5 md:max-w-sm w-full overflow-hidden relative  justify-center mx-auto">
      <input
        type="checkbox"
        id="addOptions"
        name="addOptions"
        className="hidden"
      />
      <label htmlFor="addOptions" className="cursor-pointer">
        <p className="add">
        <CiSquarePlus className="text-lg" />
        </p>
        <p className="remove absolute top-0 right-0">
        <CiSquareRemove className="text-lg" />
        </p>
      </label>

      <div className="flex justify-between options  w-full items-center bg-neutral-100  px-5 py-2 rounded-full dark:bg-neutral-900 ">
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>Updates</Link>
        <Link href={"#"}>Blog</Link>
        <ThemeToggle />

        <button className="bg-[#39ff14] rounded-full px-3 py-[6px]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar3;

`;

const globalcss = `
.options {
    display: flex;
  }
  
  #addOptions:checked ~ .options {
    display: none;
  }
  
  .add{
    display: none;
  }
  
  #addOptions:checked + label .add {
    display: flex;
  }
  
  .remove {
    display: flex;
  }
  
  #addOptions:checked + label .remove {
    display: none;
  }

`;

const UnivesalNav = () => {
  return (
    <div>
      <Navbar3 />
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
            Follow Steps If requied <br />
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
          #Can skip this step if not want to hide nav
        </div>

        <div className="p-4">
          <strong>Step3:</strong> Add the following to your{" "}
          <code className="text-blue-500">components/SearchNav.tsx</code> file:
          <h1 className="">
            <CopyButton code={themeTogglecode} />
          </h1>
          <p className="text-purple-400 pt-4">Serverside</p>
        </div>
      </div>
    </div>
  );
};

export default UnivesalNav;
