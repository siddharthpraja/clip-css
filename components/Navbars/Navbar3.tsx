import React from "react";
import Link from "next/link";
import ThemeToggle from "../Buttons/Theme";
import { CiSquarePlus, CiSquareRemove } from "react-icons/ci";
const Navbar3 = () => {
  return (
    <div className="flex z-0 flex-row-reverse items-center  mt-2  md:max-w-sm w-full overflow-hidden relative  justify-center mx-auto">
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
