import React from 'react';
import Image from 'next/image'; // Import Image component from next/image

const blogPosts = [
    {
        title: "How to Choose the Right Perfume",
        excerpt: "Finding the perfect fragrance can be overwhelming. Here’s a guide to help you choose...",
        date: "October 10, 2024",
        img: "/blog1.webp"
    },
    {
        title: "Latest Trends in Men's Fashion",
        excerpt: "Stay ahead of the game with these fashion tips for men...",
        date: "October 15, 2024",
        img: "/blog2.jpeg"
    },
    {
        title: "Jewelry Care Tips",
        excerpt: "Keep your jewelry looking new with these care tips...",
        date: "October 20, 2024",
        img: "/blog3.webp"
    }
];

const Blog = () => {
    return (
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">Blog Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                    <div key={index} className="border rounded-lg shadow-md overflow-hidden">
                        <Image 
                            src={post.img} 
                            alt={post.title} 
                            className="w-full h-48 object-cover" 
                            width={500} // Set width according to your layout
                            height={200} // Set height according to your layout
                        />
                        <div className="p-4">
                            <h3 className="font-bold text-lg">{post.title}</h3>
                            <p className="text-gray-600">{post.excerpt}</p>
                            <span className="text-gray-400 text-sm">{post.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
