import CopyButton from "@/components/Copycode";
import Hero4 from "@/components/Hero/Hero4";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const themeTogglecode = `
import React from "react";

const Hero4 = () => {
  return (
    <div className="flex items-center dark:text-black justify-center h-full py-2">
      <div className="grid grid-cols-1 row-span-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6   gap-2 h-[80vh] w-3/4 ">
        <div className="w-full h-full bg-yellow-400  flex flex-col items-center md:row-span-2 xl:col-span-2 justify-center border rounded-2xl">
          <h1 className="w-2/3 font-mono font-bold text-xl text-center  py-2 rounded-md  border mt-2 bg-yellow-50 border-black dark:border-white">
            Work Experience
          </h1>

          <iframe
            className="w-full object-contain"
            src="https://lottie.host/embed/6ea93095-ea80-4b5e-9dd6-d0711c918d4b/Syhe3o8dLV.lottie"
          ></iframe>
        </div>
        <div className="w-full h-full bg-indigo-500 flex flex-col items-center lg:col-span-2 justify-center border rounded-2xl">
          <h1 className="w-2/3 font-mono font-bold text-xl text-center  py-2 rounded-md  border mt-2 bg-yellow-50 border-black dark:border-white">
            Projects
          </h1>
          <iframe
            className="w-full object-contain mix-blend-multiply"
            src="https://lottie.host/embed/cae8ecce-fa62-4f06-8e3e-07b4ac88824a/x6q3Gi061Y.lottie"
          ></iframe>
        </div>
        <div className="w-full h-full bg-red-500 flex flex-col items-center justify-center xl:col-span-2 border">
          <h1 className="w-2/3 font-mono font-bold text-xl text-center  py-2 rounded-md  border mt-2 bg-yellow-50 border-black dark:border-white">
            Education
          </h1>
          <iframe
            className="w-full object-contain"
            src="https://lottie.host/embed/ec5927f0-3a1c-4899-b404-4f674ff24372/7PaLP7c81T.lottie"
          ></iframe>
        </div>
        <div className="w-full h-full bg-green-500 flex flex-col items-center md:col-span-2 xl:col-span-3 xl:flex-row p-2 justify-center border rounded-2xl">
          <div className="flex w-full flex-col xl:gap-1">
            <h1 className=" font-mono bg-yellow-50 border-black dark:border-white rounded-md font-bold text-3xl w-full text-center px-4 py-2   border">
              Gautam<span className="text-xs"> Prajapati</span>{" "}
            </h1>
            <h1 className=" font-mono font-bold text-xs w-full bg-yellow-50 border-black dark:border-white rounded-md text-center p-2   border">
              Web-developer,Full stack developer.
            </h1>
          </div>
          <iframe
            className="w-full object-contain"
            src="https://lottie.host/embed/401da356-fb70-4d55-9eeb-5f9600480b6c/g68IrSAvk9.lottie"
          ></iframe>
        </div>
        <div className="w-full h-full bg-sky-500 flex-col  flex items-center justify-center border rounded-2xl">
          <h1 className="w-2/3 font-mono font-bold text-xs text-center rounded-md  py-2 px-2   border mt-2 bg-yellow-50 border-black dark:border-white">
            Blog
          </h1>
          <iframe
            className="w-full object-contain"
            src="https://lottie.host/embed/73fec17f-b90c-49ae-adc3-d0da329ffd2c/rmEcTyNLyV.lottie"
          ></iframe>
        </div>
        <div className="w-full h-full bg-blue-500 flex flex-col  gap-4 p-2 items-center justify-center border rounded-2xl">
          <h1 className="w-2/3 font-mono font-bold text-xs text-center rounded-md  py-2 px-2   border mt-2 bg-yellow-50 border-black dark:border-white">
            Resume
          </h1>
          <img
            src="https://qresume.vercel.app/_next/image?url=%2Ftamplate4.webp&w=640&q=75"
            alt=""
            className="w-3/4"
          />
        </div>
        <div className="w-full h-full bg-lime-400 flex flex-col gap-4 md:flex-row md:col-span-2 xl:col-span-4 p-2 items-center justify-center border rounded-2xl">
          <div>
            
            <iframe
              className="w-full object-contain"
              src="https://lottie.host/embed/f6594609-48fe-4abc-aba3-979dee1e76fe/dC0sROJoZr.lottie"
            ></iframe>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="https://cdn-icons-png.freepik.com/512/2111/2111463.png?ga=GA1.1.1737810808.1731501359"
              alt="insta"
              className="w-12 "
            />
            <img
              src="https://cdn-icons-png.freepik.com/512/10050/10050553.png?ga=GA1.1.1737810808.1731501359"
              alt="insta"
              className="w-12 "
            />
            <img
              src="https://cdn-icons-png.freepik.com/512/3938/3938026.png?ga=GA1.1.1737810808.1731501359"
              alt="insta"
              className="w-12 "
            />
            <img
              src="https://cdn-icons-png.freepik.com/512/3536/3536505.png?ga=GA1.1.1737810808.1731501359"
              alt="insta"
              className="w-12 "
            />
            <img
              src="https://cdn-icons-png.freepik.com/512/3536/3536445.png?ga=GA1.1.1737810808.1731501359"
              alt="insta"
              className="w-12 "
            />
            <img
              src="https://qresume.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.fa4bf9af.webp&w=48&q=75"
              alt="insta"
              className="w-12 "
            />
          </div>
        </div>
        <div className="w-full h-full bg-white flex flex-col gap-4 items-center justify-center border rounded-2xl md:hidden lg:flex">
        <h1 className="w-2/3 font-mono  font-bold text-xs text-center rounded-md  py-2 px-2   border mt-2 bg-yellow-50 border-black dark:border-white">
            Profile
          </h1>
          <img
            src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
            alt=""
            className="w-full h-max "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero4;
`;

const UniqueHero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-10">
      <Link
        href={"./"}
        className="border z-10 absolute top-2 px-4 left-4  flex gap-2 items-center hover:bg-black hover:text-white py-1 rounded-lg my-2"
      >
        <BiArrowBack /> Back
      </Link>
      <div className="mt-10">
        <Hero4 />
      </div>
      <div className="w-2/3 mt-8">
        <div className="p-4 mt-8">
          <strong>Step1:</strong> Add the following to your{" "}
          <code className="text-blue-500">components/ForthHero.tsx</code> file:
          <h1 className="">
            <CopyButton code={themeTogglecode} />
          </h1>
        </div>
        <div className="p-4">
          <strong>Step2:</strong> Download & add the icons to your{" "}
          <code className="text-blue-500">public/</code> file:
          <h1 className="">
            download the icons from{" "}
            <a
              href="https://lottiefiles.com"
              className="text-orange-500 underline"
            >
              https://lottiefiles.com
            </a>
            <p className="text-purple-400  mt-4  font-semibold">Serverside</p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UniqueHero;
