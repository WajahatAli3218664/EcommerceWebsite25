import React from 'react';
import Image from 'next/image'; 

interface CardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, price }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image 
        src={image} 
        alt={title} 
        className="w-full h-[200px] object-cover" 
        width={300} // Set width according to your layout
        height={200} // Set height according to your layout
      />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-lg font-semibold text-black">{price}</p>
      </div>
    </div>
  );
};

export default Card;
