import React from "react";
import "./scrollanimation.css";
import { categories } from "@/Data/Features";

export const Feature3 = () => {
  return (
    <section className="onscroll">
      <div className="grid w-full p-4 md:p-8 text-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:w-10/12 mx-auto md:gap-6 gap-2 ">
        {categories.map((category, index) => (
          <div key={index} className={`${category.className}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front flex flex-col border shadow-md  items-center justify-center bg-gray-200 dark:bg-black p-4 rounded-lg">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flip-card-back relative flex items-center  justify-center border p-4 rounded-lg">
                <div className="text-center  text-gray-50 dark:text-gray-900 ">
                  {category.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature3;
