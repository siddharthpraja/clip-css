import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Button3D from "../Buttons/Button3D";
import { TbMailFilled } from "react-icons/tb";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Hero2 = () => {
  return (
    <div className="w-11/12 mx-auto flex my-4 flex-col-reverse overflow-hidden   lg:flex-row-reverse gap-5">
      {/* Part 1 */}
      <div className="xl:w-1/3 lg:w-1/2">
        {/* text Part1 */}
        <div className="px-2 gap-2 h-[20vh] flex items-center justify-center ">
          <div className="w-1/2">
            <h1 className="font-semibold text-sm border-b-2 pb-1">Thermal Imaging <span className="text-gray-500">23</span></h1>
            <p className="text-sm lg:text-xs xl:text-sm">Used for tasks like search and rescue, firefighting.</p>
          </div>
          <div className="flex items-center w-20 h-20 justify-center relative rounded-full border-2 border-black dark:border-gray-200">
            <MdOutlineArrowOutward className="w-1/3 h-20" />
            <p className="absolute bg-white dark:bg-black text-xs font-bold lg:left-8 xl:left-10  -top-6 p-2 left-10">
              Explore Catalog
            </p>
          </div>
        </div>
        {/* Image Part1 */}
        <div className="w-full h-[60vh] relative  rounded-3xl">
          <Image
            src={"https://images.unsplash.com/photo-1504890001746-a9a68eda46e2"}
            alt="hero"
            className="w-full object-cover  h-full rounded-3xl"
            width={2072}
            height={1381}
          />
          <div className="">
            <div className="w-3 h-3 bg-white border-white border rounded-full absolute bottom-6 left-6" />
            <div className="w-3 h-3 bg-white/50 border-white border rounded-full absolute bottom-10 left-6" />
            <div className="w-3 h-3 bg-white/70 border-white border rounded-full absolute bottom-6 left-10" />
          </div>
          {/* Glass Shadow */}
          <div className="p-4 text-black dark:text-white w-2/3   bg-white/40 dark:bg-black/40 backdrop-blur-sm rounded-xl absolute bottom-8  right-4">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold">360°</h1>
              <MdOutlineArrowOutward className="w-5 h-auto" />
            </div>
            <p className="text-sm">
              Camera capturing views like virtual tours.
            </p>
          </div>
          {/* glass top */}
          <div className="py-2 px-5 font-semibold text-xs flex lg:flex-col xl:flex-row justify-center gap-2 items-center text-black dark:text-white w-full rounded-full absolute top-6 right-1">
            <div className="flex items-center justify-center gap-1 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full p-2">
              <div className="w-3 h-3 blur-sm rounded-full  bg-green-300" />
              <p className="w-max">Zoom Lens</p>
            </div>
            <div className="flex items-center justify-center gap-1 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-full p-2">
              <div className="w-3 h-3 blur-sm rounded-full bg-red-300" />
              <p>Lightweight</p>
            </div>
          </div>
        </div>
      </div>
      {/* Part 2 */}
      <div className="w-full h-[80vh] overflow-hidden relative rounded-3xl">
        <Image
          src={"https://images.unsplash.com/photo-1719937051230-8798ae2ebe86"}
          alt="hero"
          className="lg:w-full w-full object-cover h-full "
          width={2072}
          height={1381}
        />
        <div className="">
          {/* first 3 dots */}
          <div className="w-4 h-4 bg-white/80 rounded-full absolute bottom-6 left-6" />
          <div className="w-4 h-4 bg-white/30 rounded-full absolute bottom-11 left-6" />
          <div className="w-4 h-4 bg-white/60 rounded-full absolute bottom-6 left-11" />
          {/* second 3 dots */}
          <div className="w-4 h-4 bg-white/80 rounded-full absolute top-6 right-6" />
          <div className="w-4 h-4 bg-white/30 rounded-full absolute top-11 right-6" />
          <div className="w-4 h-4 bg-white/60 rounded-full absolute top-6 right-11" />
          {/* Glass Shadow */}
          <div className="p-4 text-white w-56  bg-white/20 backdrop-blur-sm rounded-xl absolute top-28 md:right-28 lg:right-4 right-4 xl:right-28">
            <div className="flex justify-between  items-start">
              <h1 className="text-3xl font-bold">4K/ 8K</h1>
              <MdOutlineArrowOutward className="w-5 h-auto" />
            </div>
            <p className="text-sm">
              video capabilities for capturing high-quality aerial footage.
            </p>
          </div>
          {/* glass shadow oneliner */}
          <div className="py-2 px-5  text-xs flex flex-col xl:flex-row justify-center gap-2 items-end text-white w-full   rounded-full absolute md:bottom-6 bottom-16 right-2">
            <div className="flex items-center justify-center gap-2 bg-white/30 backdrop-blur-sm rounded-full p-2">
              <div className="w-3 h-3 blur-sm rounded-full  bg-green-300" />
              <p>Modern drones are made from lightweight.</p>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/30 backdrop-blur-sm rounded-full p-2">
              <div className="w-3 h-3 blur-sm rounded-full bg-red-300" />
              <p>drones are designed to fly in light rain</p>
            </div>
          </div>
        </div>
      </div>
      {/* Part 3 */}
      <div className="xl:w-1/3 w-full py-4">
        {/* Points */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 font-semibold border px-2 rounded-full w-max">
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <p>Footage</p>
          </div>
          <div className="flex items-center gap-2 font-semibold border px-2 rounded-full w-max">
            <div className="w-2 h-2 rounded-full bg-red-300" />
            <p>Aerial Tour</p>
          </div>
        </div>
        {/* Headers */}
        <div className="flex flex-col  font-mono font-semibold justify-center items-center my-4 text-2xl md:text-5xl lg:text-6xl lg:absolute -left-0">
          <h1 className="bg-white dark:bg-black relative rounded-t-xl px-2 w-max">
            Drone Flight
            <img
              width={100}
              height={100}
              className="w-8 lg:absolute dark:hidden -right-[25px] -bottom-[8px] h-10"
              src="/something.png"
              alt=""
            />
          </h1>
          <h1 className="bg-white dark:bg-black rounded-xl px-5 py-2 ">
            <p className="border px-3 rounded-full">Over a Desert</p>
          </h1>
          <h1 className="bg-white dark:bg-black rounded-b-xl px-2 relative w-max">
            Landscape
            <img
              width={100}
              height={100}
              className="w-5 lg:absolute rotate-90  dark:hidden -right-[22.5px] -top-[13.5px] h-10"
              src="/something.png"
              alt=""
            />
          </h1>
        </div>
        {/* Buttons */}
        <div className="xl:pt-[35vh] lg:pt-[44vh] px-1">
          <p>
            Take off over the vast, windswept deserts, where golden dunes
            stretch to the horizon.
          </p>
          <div className="my-4 flex flex-row items-center justify-center gap-4">
            <Button3D className="bg-black dark:bg-white dark:text-black w-max">Book Now</Button3D>
            <button className="border p-2 rounded-md w-max">Explore More</button>
          </div>
          <div className="my-8 flex flex-row items-center justify-center gap-1">
            <TbMailFilled className="border p-3 text-5xl rounded-full" />
            <HiOutlineChevronDoubleDown className="border  p-3 text-5xl rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
