import React from 'react';
import ProductCard from './ProductCard';

const productData = [
    {
        img: "/coat.webp",
        title: "Malaysian Grey Basic Waistcoat",
        desc: "Classic Formal Ethnic Vest",
        rating: 3,
        price: "58.00",
        originalPrice: "75.00" 
    },
    {
        img: "/nan.webp",
        title: "Naina Roohi by Mushq",
        desc: "Embroidered Khaadi Net Formal Luxury Dress",
        rating: 4,
        price: "220",
        originalPrice: "289"
    },
    {
        img: "/necks.webp",
        title: "Marble Chain Necklace",
        desc: "Gold Linked Crystal Accent",
        rating: 5,
        price: "120.00",
        originalPrice: "180.00"
    },
    {
        img: "/boy.webp",
        title: "Black Basic Jacket",
        desc: "Casual Sport Street Style",
        rating: 4,
        price: "25.00",
        originalPrice: "45.00"
    },
    {
        img: "/kurta.webp",
        title: "Classic Black Shalwar Kameez",
        desc: "Traditional Menswear Simple Elegance",
        rating: 4,
        price: "80.00",
        originalPrice: "110.00"
    },
    {
        img: "/eng.webp",
        title: "Classic Charcoal Polo Shirt",
        desc: "Casual Cotton Summer Menswear",
        rating: 5,
        price: "45.00",
        originalPrice: "60.00"
    },
  {
    img: "/red.webp",
    title: "Heavy Embroidered Fancy Chiffon Party Wear",
    desc: "Royal Embroidered Elegance",
    rating: 5,
    price: "58.00",
    originalPrice: "75.00" 
},



{
  img: "/anika.webp",
  title: "Mushq Roohi Luxury Collection",
  desc: " Elegant Embroidered Formal Dress",
  rating: 3,
  price: "39.00",
  originalPrice: "65.00" 
},


{
    img: "/mine.webp",
    title: "You're Mine-Pendora",
    desc: "Bold Sensual Captivating Fragrance",
    rating: 3,
    price: "58.00",
    originalPrice: "75.00" 
  },



  {
    img: "/club.webp",
    title: "Club Sport Pendora ",
    desc: "Rich Deep Mysterious Fragrance",
    rating: 3,
    price: "19.00",
    originalPrice: "27.00" 
  },



  {
    img: "/rose.webp",
    title: "ROSE MUSK MONSTER",
    desc: "Elegant Intense Captivating Fragrance",
    rating: 3,
    price: "18.00",
    originalPrice: "23.00" 
  },


  {
    img: "/killer.webp",
    title: "KILLER OUD",
    desc: "Bold Intense Captivating Fragrance",
    rating: 3,
    price: "23.00",
    originalPrice: "30.00" 
  },



];

const NewProduct = () => {
 return (
    <div>
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">New Products</h2> {/* Corrected text size to 2xl */}

            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-y-10"> {/* Fixed class names */}
                {productData.map((item, index) => (
                    <ProductCard 
                        key={index} 
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                        originalPrice={item.originalPrice} 
                    />
               ))}
            </div>
        </div>
    </div>
  );
}

export default NewProduct;