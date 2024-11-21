import Feature1 from "@/components/Features/Feature1";
import Feature2 from "@/components/Features/Feature2";
import Feature3 from "@/components/Features/Feature3";
import Link from "next/link";
import React from "react";
import { BiArrowBack, BiHome } from "react-icons/bi";

const Navbars = () => {
  return (
    <div className="h-full">
      <Link
        href={"./"}
        className="border px-2 w-max mx-2 flex gap-2 items-center hover:bg-black hover:text-white py-1 rounded-lg my-2"
      >
        <BiArrowBack /> Back
      </Link>
      <div className="grid grid-cols-1 px-2  gap-6">
        <div className="text-center h-full py-8 border rounded-lg">
          <div className="h-max">
            <Feature1 />
          </div>

          <Link
            className="border px-2 w-max py-1 text-center rounded-lg"
            href="/products/profeatures"
          >
            Copy this Product Features
          </Link>
        </div>
        <div className="text-center h-full py-8 border rounded-lg">
          <div className="h-max">
            <Feature2 />
          </div>

          <Link
            className="border px-2 w-max py-1 text-center rounded-lg"
            href="/products/propages"
          >
            Copy this Product page
          </Link>
        </div>
        <div className="text-center h-full py-8 border rounded-lg">
          <div className="h-max">
            <Feature3 />
          </div>

          <Link
            className="border px-2 w-max py-1 text-center rounded-lg"
            href="/products/procategories"
          >
            Copy this Products Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
