import Hero1 from "@/components/Hero/Hero1";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiArrowBack, BiHome } from "react-icons/bi";

const Navbars = () => {
  return (
    <div className="h-full overflow-hidden">
      <Link
        href={"./"}
        className="border px-2 w-max mx-2 flex gap-2 items-center hover:bg-black hover:text-white py-1 rounded-lg my-2"
      >
        <BiArrowBack /> Back
      </Link>
      <div className="grid grid-cols-1 px-2 lg:grid-cols-3 gap-2">
        <div className="text-center h-full py-8 border rounded-lg">
          <div className="h-max">
            <Image
              src={"/hero1.png"}
              alt="hero1"
              width={2500}
              height={2500}
              className="w-full bg-contain mb-4"
            />
          </div>

          <Link
            className="border px-2 w-max py-1 text-center rounded-lg"
            href="/heros/primary"
          >
            Copy this Hero Primary
          </Link>
        </div>
        <div className="text-center h-full py-8 border rounded-lg">
          <div className="h-max">
            <Image
              src={"/hero2.png"}
              alt="hero2"
              width={2500}
              height={2500}
              className="w-full bg-contain mb-4"
            />
          </div>

          <Link
            className="border px-2 w-max py-1 text-center rounded-lg"
            href="/heros/secondary"
          >
            Copy this Hero Secondary
          </Link>
        </div>
        <div className="text-center h-full py-8 border rounded-lg">
          <div className="h-max">
            <Image
              src={"/hero3.png"}
              alt="hero3"
              width={2500}
              height={2500}
              className="w-full bg-contain mb-4"
            />
          </div>

          <Link
            className="border px-2 w-max py-1 text-center rounded-lg"
            href="/heros/tertiary"
          >
            Copy this Hero Tertiary
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
