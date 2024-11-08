"use client"; // Ensure this is a client component

import React, { useState } from 'react'; // Import useState
import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { useCart } from '@/components/CartContext'; // Ensure you're importing useCart from the correct path

const HeaderMain = () => {
    const [heartCount, setHeartCount] = useState(0); // Heart count state
    const { cart } = useCart(); // Use the useCart hook to access cart
    const router = useRouter(); // Get the router instance

    const handleUserClick = () => {
        window.open("https://www.linkedin.com/in/wajahat-ali-3189862b4/", '_blank'); // Open LinkedIn in a new tab
    };

    const handleCartClick = () => {
        router.push('/cart'); // Navigate to the cart page
    };

    const handleHeartClick = () => {
        setHeartCount(prevCount => prevCount + 1); // Increment heart count as an example
    };

    return (
        <div className="border-b border-gray-200 py-6">
            <div className="container mx-auto sm:flex justify-between items-center">
                <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-black">
                    WAJAHAT ALI
                </div>

                <div className="w-full sm:w-[450px] md:w-[60%] relative">
                    <div className="relative">
                        <input
                            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
                            type="text"
                            placeholder="Enter any product name..."
                        />
                        <BsSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>

                <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
                    <BiUser onClick={handleUserClick} className="cursor-pointer" />
                    <div className="relative">
                        <FiHeart onClick={handleHeartClick} className="cursor-pointer" />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                            {heartCount}
                        </div>
                    </div>

                    <div className="relative">
                        <HiOutlineShoppingBag onClick={handleCartClick} className="cursor-pointer" />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                            {cart.length} {/* Accessing the number of items in the cart */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;