import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="w-[91%] mx-auto flex flex-col md:flex-row border border-gray-400">
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-3">
        <div className="flex items-center gap-2">
          <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
          <p className="font-semibold text-sm md:text-base">OUR BESTSELLERS</p>
        </div>
        <p className="text-5xl font-medium">LATEST ARRIVALS</p>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
          <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={assets.hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
