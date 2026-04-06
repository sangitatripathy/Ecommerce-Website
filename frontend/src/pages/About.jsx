import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div className="w-[91%] mx-auto">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />

        <div className="flex flex-col md:w-2/4 justify-center gap-6 text-gray-600">
          <p>
            Forever was born out of pure passion — a vision to create more than just an eCommerce platform, but a place where style, quality, and trust come together seamlessly. What started as a simple idea quickly evolved into a commitment: to bring carefully curated products that inspire confidence and elevate everyday living. Every collection at Forever reflects dedication, creativity, and an unwavering focus on delivering value to our customers.
          </p>

          <p>
            At Forever, we believe shopping should feel personal, effortless, and meaningful. That’s why we prioritize quality, authenticity, and customer satisfaction above everything else. Whether you're discovering something new or finding a timeless favorite, Forever is here to make every purchase feel special — because to us, it's not just about products, it's about creating experiences that last forever.
          </p>

          <b className="text-gray-800">OUR MISSION</b>

          <p>
            We strive to combine innovation with customer-centric values—offering a diverse selection, transparent pricing, and a user-friendly experience that makes shopping simple and enjoyable. At Forever, we believe in creating lasting relationships with our customers by consistently exceeding expectations and putting their needs at the heart of everything we do.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        
        {/* Quality Assurance */}
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p>
            We are committed to delivering products that meet the highest standards of quality. Every item on Forever is carefully selected and tested to ensure durability, reliability, and customer satisfaction. Our goal is to provide you with products you can trust, every time you shop with us.
          </p>
        </div>

        {/* Convenience */}
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>
            Shopping with Forever is designed to be simple, fast, and hassle-free. From easy navigation and secure checkout to multiple payment options and quick delivery, we ensure a smooth experience so you can find and purchase what you need without any stress.
          </p>
        </div>

        {/* Customer Service */}
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>
            At Forever, exceptional customer service is at the heart of everything we do. We are dedicated to providing prompt support, clear communication, and a seamless shopping experience from start to finish. Whether you need help choosing the perfect outfit, tracking an order, or resolving an issue, our friendly support team is always ready to assist you. We value your time and trust, and we go the extra mile to ensure every interaction leaves you feeling satisfied, confident, and cared for.
          </p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;