import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component from next/image

const categories = [
    { name: "Men's Fashion", href: "/mens", img: "/man.webp" },
    { name: "Women's Fashion", href: "/womens", img: "/wpmen.avif" },
    { name: "Jewelry", href: "/jewelry", img: "/jweeley.webp" },
    { name: "Perfume", href: "/perfume", img: "/perfume.jpg" }
];

const Categories = () => {
    return (
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <Link key={index} href={category.href} className="border rounded-lg shadow-md overflow-hidden group">
                        <Image 
                            src={category.img} 
                            alt={category.name} 
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform" 
                            width={300}
                            height={200}
                        />
                        <div className="p-4 text-center">
                            <h3 className="font-bold text-lg">{category.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
