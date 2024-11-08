'use client'; // Make sure this is at the top

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from './Slide'; // Adjust the path based on your project structure

interface SlideData {
    id: number;
    img: string;
    title: string;
    mainTitle: string;
    price: string;
}

const Hero: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData: SlideData[] = [
        {
            id: 0,
            img: "/bannerone.jpg",
            title: "Trending Items",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20",
        },
        {
            id: 1,
            img: "/bannertwo.jpg",
            title: "Trending Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price: "$15",
        },
        {
            id: 2,
            img: "/bannerthree.jpg",
            title: "Sale Offer",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "$30",
        },
    ];

    return (
        <Slider {...settings}>
            {slideData.map(slide => (
                <Slide 
                    key={slide.id}
                    img={slide.img}
                    title={slide.title}
                    mainTitle={slide.mainTitle}
                    price={slide.price}
                />
            ))}
        </Slider>
    );
};

export default Hero;
