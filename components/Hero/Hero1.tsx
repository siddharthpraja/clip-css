import React from "react";
import Button3D from "../Buttons/Button3D";
import IconGrid from "../Features/Feature1";  // Assuming this is a feature grid component for Clip-CSS

const Hero1 = () => {
  return (
    <div className="w-4/5 mx-auto">
      {/* Hero Heading */}
      <h1 className="text-4xl onload delay-100 font-serif md:text-5xl lg:text-6xl xl:text-8xl my-4 md:my-6">
        Elevate Your Designs <br /> with Clip-CSS.
      </h1>
      
      {/* Hero Description */}
      <p className="lg:w-3/4 onload delay-300 duration-500 my-4 text-xs md:text-sm xl:text-base text-wrap">
        Clip-CSS simplifies web development by offering reusable utility classes and custom clips for styling. 
        Whether you're building a website from scratch or optimizing an existing one, Clip-CSS provides the flexibility you need.
      </p>
      
      {/* Action Button */}
      <Button3D className="m-2 onload text-white bg-black dark:bg-white dark:text-black">
        Get Started
      </Button3D>
      
      {/* Features or Icons grid component (can show utility features of Clip-CSS) */}
      <IconGrid />
    </div>
  );
};

export default Hero1;
