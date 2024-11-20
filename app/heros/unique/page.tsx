import CopyButton from "@/components/Copycode";
import Hero3 from "@/components/Hero/Hero3";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const themeTogglecode = `
import React from "react";
import Button3D from "../Buttons/Button3D";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";

const Hero3 = () => {
  return (
    <div className="bg-white relative dark:bg-black pb-6 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto ">
        <div className="onload">
          <h1 className="xl:text-5xl font-semibold  text-4xl w-full h-[35vh] flex flex-col items-start justify-center mx-auto -rotate-6">
            Drive Fresh, Live{" "}
            <p className="relative">
              <span className="w-1/2 left-1 h-2 absolute bottom-1 -z-10 bg-[#2dffc3]" />{" "}
              Green With{" "}
            </p>{" "}
            EcoCars!
          </h1>
        </div>
        <div className="rounded-sm onload bg-orange-200 dark:bg-rose-700 w-full h-max p-6 m-auto">
          <Image src="/alarm.svg" alt="clock" width={10} height={10} className="w-14 h-auto" />
          <p>
            One of the key advantages of EcoCars, especially electric vehicles
            EVs use electricity much more efficiently than traditional.
          </p>
        </div>
        <div className="rounded-sm onload bg-transparent w-full h-max p-6 m-auto">
          <img src="/money.svg" alt="clock" className="w-14 h-auto" />
          <p>
            Hybrid cars, which combine an electric motor with a gasoline engine,
            can also provide impressive fuel efficiency.
          </p>
        </div>
        <div className="rounded-sm bg-transparent w-full md:col-span-3 h-[45vh]  mx-auto">
          <img
            src="https://images.unsplash.com/photo-1579762593175-20226054cad0"
            alt="clock"
            className="w-full h-full object-cover object-bottom"
          />
          <Button3D className=" border-2 border-white text-sm absolute bottom-16 left-4 flex items-center gap-2 justify-center">
            More Options <MdOutlineArrowRightAlt className="text-2xl" />
          </Button3D>
        </div>
      </div>
      <div className="w-full h-max  flex justify-center z-10 -rotate-3 md:-rotate-1 bg-neutral-200 dark:text-neutral-900">
        <p className="text-xl font-mono w-full p-3">
          EcoCars vehicles are more &#183; environmentally friendly than
          traditional cars &#183; as they produce fewer &#183; emissions and use
          less fuel.
        </p>
      </div>
    </div>
  );
};

export default Hero3;

`;

const globalcss = `
@keyframes appear {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.onload {
  animation: appear 1s alternate;
}

.onscroll {
  animation: appear 1s alternate;
  animation-timeline: view();
  animation-range: entry 0% cover 50%;
}


`;

const UniqueHero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-10">
      <Link
        href={"./"}
        className="border absolute top-2 px-4 left-4  flex gap-2 items-center hover:bg-black hover:text-white py-1 rounded-lg my-2"
      >
        <BiArrowBack /> Back
      </Link>
      <div className="mt-12">
        <Hero3 />
      </div>
      <div className="w-2/3">
        <div className="p-4">
          <strong>Step1:</strong> Add the following to your{" "}
          <code className="text-blue-500">/global.css</code> file:
          <h1 className="">
            <CopyButton code={globalcss} />
          </h1>
        </div>

        <div className="p-4">
          <strong>Step2:</strong> Add the following to your{" "}
          <code className="text-blue-500">components/SecondaryHero.tsx</code>{" "}
          file:
          <h1 className="">
            <CopyButton code={themeTogglecode} />
          </h1>
        </div>
        <div className="p-4">
          <strong>Step3:</strong> Download & add the icons to your{" "}
          <code className="text-blue-500">public/</code> file:
          <h1 className="">
            download the icons from{" "}
            <a
              href="https://www.svgrepo.com"
              className="text-orange-500 underline"
            >
              https://www.svgrepo.com
            </a>
            <p className="text-purple-400  mt-4  font-semibold">Serverside</p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UniqueHero;
