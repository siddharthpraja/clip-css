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
