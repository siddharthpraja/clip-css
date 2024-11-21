import CopyButton from "@/components/Copycode";
import Hero1 from "@/components/Hero/Hero1";
import Link from "next/link";
import React from "react";
import { BiArrowBack, BiHome } from "react-icons/bi";

const themeTogglecode = `
import React from "react";
import Button3D from "../Buttons/Button3D";
import IconGrid from "../Features/Feature1";

const Hero1 = () => {
  return (
    <div className="w-4/5  mx-auto">
      <h1 className="text-4xl onload delay-100 font-serif md:text-5xl lg:text-6xl xl:text-8xl my-4 md:my-6 ">
        Sending Money Abord <br /> has never been cheaper.
      </h1>
      <p className="lg:w-3/4 onload delay-300 duration-500 my-4 text-xs  md:text-sm xl:text-base text-wrap">
        You might not have received a reward for the offer terms and conditions.
        You can check the offer details to learn more. If you think your payment
        was eligible but the reward wasn't applied automatically, you can raise
        a ticket with PhonePe.
      </p>
      <Button3D className="m-2 onload bg-black dark:bg-white dark:text-black">
        Get it now
      </Button3D>
      <IconGrid />
    </div>
  );
};

export default Hero1;

`;

const globalcss = `
import { FaStar, FaSquare } from "react-icons/fa";
import { BsOctagonFill } from "react-icons/bs";
import { IoTriangle } from "react-icons/io5";

interface IconItem {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  text: string;
  iconColor: string;
  iconAlt: string;
  imgSrc: string;
}

const iconData: IconItem[] = [
  {
    id: 1,
    icon: FaStar,
    bgColor: "bg-indigo-500 dark:bg-indigo-800",
    text: "Hear what you send",
    iconColor: "text-pink-400 dark:text-pink-700",
    iconAlt: "star",
    imgSrc: "/money.svg",
  },
  {
    id: 2,
    icon: FaSquare,
    bgColor: "bg-purple-500 dark:bg-purple-800",
    text: "Set alarm on trades",
    iconColor: "text-green-400 dark:text-green-500 rotate-45",
    iconAlt: "square",
    imgSrc: "/alarm.svg",
  },
  {
    id: 3,
    icon: BsOctagonFill,
    bgColor: "bg-yellow-300 dark:bg-yellow-500",
    text: "Always find best deals",
    iconColor: "text-fuchsia-500",
    iconAlt: "octagon",
    imgSrc: "/magnifier.svg",
  },
  {
    id: 4,
    icon: IoTriangle,
    bgColor: "bg-green-300 dark:bg-green-600",
    text: "Keep your money safe",
    iconColor: "text-orange-400 dark:text-orange-500",
    iconAlt: "triangle",
    imgSrc: "/suitcase.svg",
  },
];

const Feature1: React.FC = () => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-4 gap-4">
      {iconData.map(
        ({ id, icon: Icon, bgColor, text, iconColor, iconAlt, imgSrc }) => (
          <div
            key={id}
            className={\`\${bgColor} h-64 rounded-[50px] relative group flex items-center overflow-hidden\`}
          >
            <Icon
              className={\`w-full h-52 \${iconColor} group-hover:scale-[4] duration-500 rounded-[50px]\`}
            />
            <div className="group-hover:flex duration-500 hidden">
              <h1 className="text-4xl w-1/2 absolute top-0 left-5 font-serif py-8 p-4">
                {text}
              </h1>
              {/* Add coin images */}
              <img
                src={"/coin.svg"}
                alt={iconAlt}
                className="w-10 h-10 absolute top-10 right-10"
              />
              <img
                src={"/coin.svg"}
                alt={iconAlt}
                className="w-10 h-10 absolute top-16 right-16"
              />
              <img
                src={"/coin.svg"}
                alt={iconAlt}
                className="w-10 h-10 absolute top-4 right-14"
              />
              {/* Each block-specific image (money, alarm, magnifier, suitcase) */}
              <img
                src={imgSrc}
                alt={iconAlt}
                className="absolute bottom-0 right-0 w-40"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Feature1;


`;

const HeroSection1 = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-10">
      <Link
        href={"./"}
        className="border absolute top-2 px-4 left-4  flex gap-2 items-center hover:bg-black hover:text-white py-1 rounded-lg my-2"
      >
        <BiArrowBack /> Back
      </Link>
      <div className="mt-12">
        <Hero1 />
      </div>
      <div className="w-2/3">
        <div className="p-4">
          <strong>Step1:</strong>  Add the following to your{" "}
          <code className="text-blue-500">
            components/PrimaryFeature.tsx
          </code>{" "}
          file:
          <h1 className="">
            <CopyButton code={globalcss} />
          </h1>
        </div>

        <div className="p-4">
          <strong>Step2:</strong> Add the following to your{" "}
          <code className="text-blue-500">components/PrimaryHero.tsx</code>{" "}
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
          </h1>
          <p className="bg-purple-400 w-max  rounded-lg mt-2 text-white   p-2">
            Serverside
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
