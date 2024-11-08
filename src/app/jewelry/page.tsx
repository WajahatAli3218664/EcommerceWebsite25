"use client"; // Mark this file as a client component

import React, { useContext } from 'react';
import { CartContext } from '@/components/CartContext';
import Image from 'next/image'; // Import Image from Next.js

// Define an interface for the product data
interface Product {
    id: number;
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: number;
    originalPrice: number;
}

const productData: Product[] = [
    {
        id: 1,
        img: "/necklace.jpg",
        title: "Gold Necklace",
        desc: "Exquisite Diamond Necklace",
        rating: 5,
        price: 250.00,
        originalPrice: 300.00
    },
    {
        id: 2,
        img: "/party.jpg",
        title: "Golden Glam Heels",
        desc: "Dazzling Golden Heels",
        rating: 4,
        price: 60.00,
        originalPrice: 80.00
    },
    {
        id: 3,
        img: "/necks.webp",
        title: "Marble Chain Necklace",
        desc: "Gold Linked Crystal Accent",
        rating: 5,
        price: 50.00,
        originalPrice: 120.00
    },

    {
        id: 4,
        img: "/jewel.jpg",
        title: "Emerald Cascade Necklace Set",
        desc: "Royal Emerald Crystal Necklace Set",
        rating: 5,
        price: 999,
        originalPrice: 189
    }







];

const Jewelry: React.FC = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('Jewelry component must be used within a CartProvider');
    }
    const { addToCart } = context;

    const handleAddToCart = (product: Product) => {
        const itemToAdd = { ...product, quantity: 1 }; // Set default quantity to 1
        addToCart(itemToAdd);
        alert(`${product.title} has been added to your cart!`);
    };

    return (
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">Jewelry Products</h2>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productData.map((item) => (
                    <div key={item.id} className="border p-4 rounded-lg shadow-md h-auto flex flex-col">
                        <Image 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-48 object-cover mb-2" 
                            width={400}  // Specify width
                            height={300} // Specify height
                        />
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-red-600 font-bold">${item.price.toFixed(2)}</span>
                            <span className="line-through text-gray-500">${item.originalPrice.toFixed(2)}</span>
                        </div>
                        <div className="mt-1">
                            <span className="text-yellow-500">{"⭐".repeat(item.rating)}</span>
                        </div>
                        <button 
                            onClick={() => handleAddToCart(item)} 
                            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jewelry;
