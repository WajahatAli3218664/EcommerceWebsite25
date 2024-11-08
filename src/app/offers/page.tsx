import React from 'react';
import Image from 'next/image'; // Import Image component from next/image

const offers = [
    {
        title: "30% Off on Jewelry",
        description: "Grab this exclusive offer on selected jewelry items!",
        img: "/sale1.avif"
    },
    {
        title: "Buy 1 Get 1 Free on Perfumes",
        description: "Limited time offer on our best-selling perfumes.",
        img: "/sale2.png"
    },
    {
        title: "20% Off on Men's Clothing",
        description: "Refresh your wardrobe with our men's clothing sale.",
        img: "/sale3.webp"
    }
];

const Offers = () => {
    return (
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">Current Offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.map((offer, index) => (
                    <div key={index} className="border rounded-lg shadow-md overflow-hidden">
                        <Image 
                            src={offer.img} 
                            alt={offer.title} 
                            className="w-full h-48 object-cover" 
                            width={500} // Set width according to your layout
                            height={200} // Set height according to your layout
                        />
                        <div className="p-4">
                            <h3 className="font-bold text-lg">{offer.title}</h3>
                            <p className="text-gray-600">{offer.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offers;
