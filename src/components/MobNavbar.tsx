"use client"; // Mark this file as a client component

import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineAppstore, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; 
import { HiOutlineShoppingBag } from 'react-icons/hi'; 
import { IoMenuOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const categories = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Men's", href: "/mens" },
  { name: "Women's", href: "/womens" },
  { name: "Jewelry", href: "/jewelry" },
  { name: "Perfume", href: "/perfume" },
  { name: "Blog", href: "/blog" },
  { name: "Hot Offers", href: "/offers" },
];

const MobNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the menu
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [heartCount, setHeartCount] = useState(8);
  const router = useRouter(); // Get the router instance

  const handleCartClick = () => {
    router.push('/cart');
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
    if (!isHeartFilled) {
      setHeartCount(heartCount + 1);
    } else {
      setHeartCount(heartCount - 1);
    }
  };

  const handleCategoriesClick = () => {
    router.push('/categories'); // Navigate to categories page
  };

  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8">
      <div className="flex justify-between text-[28px] py-2">
        <IoMenuOutline onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" /> 
        <div className="relative">
          <HiOutlineShoppingBag onClick={handleCartClick} className="cursor-pointer" />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-white text-[10px] flex justify-center items-center translate-x-2 -translate-y-2">
            12
          </div>
        </div>
        <AiOutlineHome onClick={handleHomeClick} className="cursor-pointer" />
        <div className="relative">
          {isHeartFilled ? (
            <AiFillHeart onClick={handleHeartClick} className="cursor-pointer text-red-600" />
          ) : (
            <AiOutlineHeart onClick={handleHeartClick} className="cursor-pointer" />
          )}
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-white text-[10px] flex justify-center items-center translate-x-2 -translate-y-2">
            {heartCount}
          </div>
        </div>
        <AiOutlineAppstore onClick={handleCategoriesClick} className="cursor-pointer" /> {/* Click opens categories */}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg mt-2">
          <ul className="flex flex-col">
            {categories.map((category, index) => (
              <li key={index} className="py-2" onClick={() => router.push(category.href)}>
                <span>{category.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobNavbar;
