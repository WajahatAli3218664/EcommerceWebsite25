import React from 'react';
import Image from 'next/image'; 

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  // Conditional class to adjust text color for "Trending Accessories" banner
  const textColor = title === 'Trending Accessories' && mainTitle === 'Modern Day Glasses' ? 'text-black' : 'text-white';
  const priceColor = title === 'Trending Accessories' && mainTitle === 'Modern Day Glasses' ? 'text-yellow-600' : 'text-yellow-300';

  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        {/* Apply conditional text color */}
        <h3 className={`${textColor} text-[24px] lg:text-[28px]`}>{title}</h3>
        
        {/* Main Title with conditional color */}
        <h2 className={`${textColor} text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]`}>
          {mainTitle}
        </h2>

        {/* Price Section with conditional color */}
        <h3 className={`text-[24px] ${textColor}`}>
          starting at{' '}
          <b className={`text-[20px] md:text-[24px] lg:text-[30px] ${priceColor}`}>{price}</b>
        </h3>

        {/* Shop Now Button */}
        <div className="bg-yellow-500 text-black text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-yellow-600">
          Shop Now
        </div>
      </div>

      {/* Image Section */}
      <Image
        className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
        src={img}
        alt="banner"
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Slide;