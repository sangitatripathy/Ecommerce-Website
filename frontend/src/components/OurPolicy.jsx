import React from 'react'
import {assets} from "../assets/assets"

const OurPolicy = () => {
  return (
    <>
    <div className="flex flex-col sm:flex-row w-[91%] mx-auto justify-around gap-12 sm:gap-2 text-center py-7">
      <div className='flex flex-col justify-center items-center mb-5'>
        <img src={assets.exchange_icon} className="size-10 mb-8"/>
        <p className="font-semibold">We Offer 7 days return policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div className='flex flex-col justify-center items-center mb-5'>
        <img src={assets.quality_icon} className="size-10 mb-8"/>
        <p className="font-semibold">7 days return policy</p>
        <p className="text-gray-400">We offer 7 days free return policy</p>
      </div>
      <div className='flex flex-col justify-center items-center mb-5'>
        <img src={assets.support_img} className="size-10 mb-8"/>
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
    </>
  )
}

export default OurPolicy