'use client'

import Image from "next/image"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

type PTypes = {
    direction: string;
    image: string;
    details: string
    heading: string
    mt?: boolean;
}
const Content = ({direction, image, details, heading, mt}: PTypes) => {
  return (
    <div className={`max-w-[1400px] overflow-hidden ${direction === 'right' ? 'ml-auto' : 'mr-auto'} ${mt && 'mt-[120px]'}`}>
         <div className={` pl-4 grid grid-cols-1 md:grid-cols-2  items-center gap-12`}>
        {direction === 'right' && <>
        <div className="max-w-[90%] w-full" data-aos="fade-right">
            <h3 className={`heading mb-7`}>{heading}</h3>
            <h1 className={`text-[30px] md:text-[48px] leading-[130%] mb-7`}>{details}</h1>
            <FiArrowRight />
        </div>
        <Image src={image} alt="image" width={700} height={402} data-aos="fade-left"  />
        </>}
        {direction === 'left' && <>
        <Image src={image} alt="image" width={700} height={402} data-aos="fade-right" /> 
        <div className="max-w-[90%] w-full" data-aos="fade-left">
            <h3 className={`heading mb-7 text-right w-full`}>{heading}</h3>
            <h1 className={`text-[30px] md:text-[48px] leading-[130%] mb-7 text-right`}>{details}</h1>
            <FiArrowLeft className="ml-auto" />
        </div>
        </>}
 
      
    </div>
    </div>
   
  )
}

export default Content