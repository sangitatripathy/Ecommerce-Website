import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="w-[90%] mx-auto flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            suscipit esse sit, voluptatum rerum inventore beatae sunt vitae,
            debitis facere, ut quidem quia possimus unde aliquid labore. Id,
            laborum sed?
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div className="w-full sm:w-[90%] mx-auto">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyrights 2026@ forever.com - All Right Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
