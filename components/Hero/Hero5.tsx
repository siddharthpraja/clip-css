"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Fifth = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false); // To handle the transition state
  const [fadeIn, setFadeIn] = useState(false); // For text fade-in effect

  const slides = [
    {
      image: "/cars/c6.png",
      text: "MCLEAREN P1",
      subtitle: "THE BEST OR NOTHING",
      bgColor: "bg-yellow-500",
    },
    {
      image: "/cars/c4.png", // green
      text: "FERRARI F8 ",
      subtitle: "POWER AND BEAUTY",
      bgColor: "bg-green-500",
    },
    {
      image: "/cars/c1.png", // red
      text: "AVENADOR DG8",
      subtitle: "FEEL THE THRILL",
      bgColor: "bg-red-500",
    },
    {
      image: "/cars/c2.png", // black
      text: "MCLAREN 720S",
      subtitle: "SPEED REDEFINED",
      bgColor: "bg-black",
    },
    {
      image: "/cars/c5.png", // purple
      text: "ASTON MARTIN DBS",
      subtitle: "ELEGANCE MEETS PERFORMANCE",
      bgColor: "bg-purple-500",
    },
  ];

  const goToPreviousSlide = () => {
    if (!animating) {
      setAnimating(true);
      setFadeIn(false); // Start fade-out animation
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  const goToNextSlide = () => {
    if (!animating) {
      setAnimating(true);
      setFadeIn(false); // Start fade-out animation
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  };

  // Reset animation state after the transition ends
  useEffect(() => {
    const timer = setTimeout(() => setAnimating(false), 600); // Match with animation duration
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Trigger fade-in for text after slide change
  useEffect(() => {
    const textFadeTimer = setTimeout(() => setFadeIn(true), 300); // Slight delay before fading in text
    return () => clearTimeout(textFadeTimer);
  }, [currentSlide]);

  return (
    <div
      className={`flex md:flex-col items-center justify-center overflow-hidden h-screen relative ${slides[currentSlide].bgColor} transition-all duration-700`}
    >
      <div className="md:w-3/5 w-full mx-auto relative">
        <img
          src={slides[currentSlide].image}
          alt=""
          className={`w-full h-full transform transition-transform duration-700 ${
            animating ? "scale-75" : "scale-100"
          }`}
        />
        <img
          src="/cars/group1.png"
          alt=""
          className="absolute lg:bottom-10 hidden md:flex md:bottom-5 bottom-0"
        />

        {/* Button Arrow */}
        <div className="absolute lg:bottom-10 md:bottom-5  -bottom-1 md:left-1/2 text-[6px] md:text-base flex -rotate-3 gap-2 pl-32">
          <button
            onClick={goToPreviousSlide}
            className="bg-white/40 border-white/50 border text-white/80 xl:p-2 p-1 rounded-full"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={goToNextSlide}
            className="bg-white/40 border-white/50 border text-white/80 xl:p-2 p-1 rounded-full"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Text Hero */}
      <div className="absolute bg-gradient-to-r w-max text-transparent lg:top-20 top-10 xl:text-8xl lg:text-7xl md:text-4xl text-xl font-thin z-10 tracking-tighter left-4 md:left-28">
        <h1
          className={`bg-gradient-to-b from-orange-50 to-${slides[currentSlide].bgColor} text-transparent bg-clip-text transition-opacity duration-700 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {slides[currentSlide].text}
        </h1>
        <p
          className={`lg:text-4xl md:text-xl text-xs tracking-normal text-transparent bg-clip-text bg-gradient-to-b from-orange-50 to-${slides[currentSlide].bgColor} transition-opacity duration-700 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {slides[currentSlide].subtitle}
        </p>
      </div>

      {/* Button Actions */}
      <div className="flex lg:gap-4 gap-2 md:text-xs text-[6px] lg:text-base absolute top-1/4 right-2 md:right-6 xl:right-20">
        <button className="bg-white/20 border-white/50 border text-white/80 xl:px-6 md:px-4 px-2 py-1 rounded-full xl:py-2">
          Buy Now
        </button>
        <button className="border-white/50 border text-white/80 xl:px-6 md:px-4 px-2 rounded-full py-1 xl:py-2">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Fifth;
