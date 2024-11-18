import Navbar from "@/components/Navbars/Navbar1";
import Navbar2 from "@/components/Navbars/Navbar2";
import Navbar3 from "@/components/Navbars/Navbar3";
import Link from "next/link";
import React from "react";
import { BiHome } from "react-icons/bi";

const Navbars = () => {
  return (
    <div className="flex flex-col justify-center gap-10">
      <Link
        href={"./"}
        className="border px-2 w-max mx-2 flex gap-2 items-center hover:bg-black hover:text-white py-1 rounded-lg my-2"
      >
        <BiHome /> home
      </Link>
      <Navbar />

      <div className="mx-auto">
        <Link
          className="border px-2 w-max py-1 text-center rounded-lg"
          href="/navbars/primary"
        >
          Code for Primary Navbar
        </Link>
      </div>
      <Navbar2 />
      <div className="mx-auto">
        <Link
          className="border px-2 w-max py-1 text-center rounded-lg"
          href="/navbars/search"
        >
          Code for Searchable Navbar
        </Link>
      </div>
      <Navbar3 />
      <div className="mx-auto">
        <Link
          className="border px-2 w-max py-1 text-center rounded-lg"
          href="/navbars/tiny"
        >
          Code for Tiny Navbar
        </Link>
      </div>
    </div>
  );
};

export default Navbars;
