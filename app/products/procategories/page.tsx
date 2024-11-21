import CopyButton from "@/components/Copycode";
import Feature3 from "@/components/Features/Feature3";
import Link from "next/link";
import React from "react";
import { BiArrowBack, BiHome } from "react-icons/bi";

const themeTogglecode = `
import React from "react";
import { FaMicrophone } from "react-icons/fa";
import {
  FaBug,
  FaChartBar,
  FaDatabase,
  FaFacebook,
  FaInstagram,
  FaPenNib,
  FaWordpress,
  FaYoutube,
} from "react-icons/fa6";
import {
  MdOutlineAssignment,
  MdOutlinePhoneAndroid,
  MdOutlineSchool,
} from "react-icons/md";
import { SiAdobe } from "react-icons/si";

import "./scrollanimation.css";

const categories = [
  {
    title: "Social Media Marketing",
    description: "Manage social media pages of companies",
    icon: <FaFacebook />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Video Creation",
    description:
      "Create and edit videos for companies and use your video creation skills",
    icon: <FaYoutube />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Website Design",
    description: "Design and build a website for companies",
    icon: <FaWordpress />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Influencer Marketing",
    description:
      "Create Reels, Memes, posts and videos for social media handles of companies",
    icon: <FaInstagram />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Mobile App Development",
    description: "Develop market ready apps for companies",
    icon: <MdOutlinePhoneAndroid />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Campus Ambassador",
    description: "Drive sales for companies by acquiring customers",
    icon: <MdOutlineSchool />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: (
      <div className="flex  items-center flex-col">
        <p  className="text-sm md:text-xl font-bold"> Project Categories</p>
        <p className="text-[10px] md:text-sm md:w-4/5">
          Hundreds of live project in each category. Register for categories
          ofyour choice in Funngro App and start working with companies.
        </p>
      </div>
    ),
    description:
      "Hundreds of live project in each category. Register for categories of your choice in Funngro App and start working with companies.",
    icon: <MdOutlineAssignment />,
    className: "md:col-span-3 col-span-2  text-gray-900 dark:text-gray-50",
  },
  {
    title: "Research & Survey",
    description: "Run Surveys for companies and complete research assignments",
    icon: <FaChartBar />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Data Entry",
    description:
      "Create databases for companies with your data research skills",
    icon: <FaDatabase />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Voice Over",
    description:
      "Work with companies in recording content with your voice over skills",
    icon: <FaMicrophone />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Content Writing",
    description:
      "Blogs, articles, website content and a lot more. Write for companies",
    icon: <FaPenNib />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Graphic Design",
    description: "Logos, Brochures, pamphlets, website, posts etc",
    icon: <SiAdobe />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
  {
    title: "Testing",
    description:
      "Test company products and give feedback, app, website, physical product",
    icon: <FaBug />,
    className: "col-span-1 flip-card text-gray-900 dark:text-gray-50",
  },
];
export const Feature3 = () => {
  return (
    <section className="onscroll">
      <div className="grid w-full p-4 md:p-8 text-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:w-10/12 mx-auto md:gap-6 gap-2 ">
        {categories.map((category, index) => (
          <div key={index} className={\`\${category.className}\`}>
            <div className="flip-card-inner">
              <div className="flip-card-front flex flex-col border shadow-md  items-center justify-center bg-gray-200 dark:bg-black p-4 rounded-lg">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flip-card-back flex items-center  justify-center bg-purple-500 p-4 rounded-lg">
                <p className="text-center  text-gray-50 dark:text-gray-900 ">
                  {category.description}.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature3;

`;

const globalcss = `

`;

const Navbars = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-10">
      <Link
        href={"./"}
        className="border absolute top-2 px-4 left-4  flex gap-2 items-center hover:bg-black hover:text-white py-1 rounded-lg my-2"
      >
        <BiArrowBack /> Back
      </Link>
      <div className="w-full mt-10 p-4">
        <Feature3 />
      </div>
      <div className="w-2/3">
        <div className="p-4">
          <strong>Step1:</strong> Install react-icons
          <code className="text-blue-500"> {" "}npm i react-icons</code>
        </div>
        <div className="p-4">
          <strong>Step2:</strong> Add the following to your{" "}
          <code className="text-blue-500">components/Categories.tsx</code> file:
          <h1 className="">
            <CopyButton code={themeTogglecode} />
          </h1>
        </div>

        <div className="p-4">
          <p className="bg-purple-400 w-max  rounded-lg mt-2 text-white   p-2">
            Serverside
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
