import Feature1 from "@/components/Features/Feature1";
import Feature2 from "@/components/Features/Feature2";
import Feature3 from "@/components/Features/Feature3";
import Navbar from "@/components/Navbars/Navbar1";
import Navbar2 from "@/components/Navbars/Navbar2";
import Navbar3 from "@/components/Navbars/Navbar3";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const Navbars = () => {
  return (
    <div className="h-full overflow-hidden">
      <Link
        href={"./"}
        className="border px-2 w-max mx-2 flex gap-2 items-center hover:bg-black hover:text-white py-1 rounded-lg my-2"
      >
        <BiArrowBack /> Back
      </Link>
      <div className="grid grid-cols-1 px-2  gap-2">
        <div className="text-center h-full py-8 border rounded-lg ">
          <div className="h-max mb-4">
            <Navbar />
          </div>

          <Link
            className="border px-2 w-max py-1 text-center rounded-lg"
            href="/navbars/profeatures"
          >
            Copy this Primary Navbar
          </Link>
        </div>
        <div className="text-center h-full py-8 border rounded-lg ">
          <div className="h-max mb-4">
            <Navbar2 />
          </div>

          <Link
            className="border px-2 w-max py-1 text-center rounded-lg"
            href="/navbars/procategories"
          >
            Copy this Secondery Navbar
          </Link>
        </div>
        <div className="text-center h-full py-8 border rounded-lg ">
          <div className="h-max mb-4">
            <Navbar3 />
          </div>

          <Link
            className="border px-2 w-max py-1 text-center rounded-lg"
            href="/navbars/propages"
          >
            Copy this Unique Navbar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
