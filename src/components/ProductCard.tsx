import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
    originalPrice: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, title, desc, rating, price, originalPrice }) => {
    return (
        <div className="px-6 py-4 border border-gray-200 rounded-xl max-w-[300px] mb-6 mx-2 hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-200">
            <div className="flex justify-center">
                <div className="relative w-[200px] h-[200px]">
                    <Image 
                        className="object-cover rounded-md"
                        src={img}
                        layout="fill"
                        alt={title}
                    />
                </div>
            </div>
            <div className="space-y-2 pt-4 text-center">
                <h2 className="text-lg font-bold uppercase tracking-wide">{title}</h2>
                <p className="text-gray-600 text-sm">{desc}</p>
                <div className="flex justify-center">
                    <p className="text-yellow-500 font-bold text-sm">{"★".repeat(rating)}{"☆".repeat(5 - rating)}</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <span className="text-xl font-bold text-red-600">${price}</span>
                    <span className="text-sm text-gray-500 line-through decoration-gray-500 decoration-[1.5px]">${originalPrice}</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
