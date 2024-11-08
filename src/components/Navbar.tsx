"use client"; // Mark this component as a client component

import Link from "next/link";
import React, { useState } from 'react';

const Navbar = () => {
  // State for toggle
  const [isOpen, setIsOpen] = useState(false);

  // Array of navigation links
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "CATEGORIES", href: "/categories" },
    { name: "MEN'S", href: "/mens" },
    { name: "WOMEN'S", href: "/womens" },
    { name: "JEWELRY", href: "/jewelry" },
    { name: "PERFUME", href: "/perfume" },
    { name: "BLOG", href: "/blog" },
    { name: "HOT OFFERS", href: "/offers" },
    { name: "CART", href: "/cart" } // Added Cart link here
  ];

  return (
    <div>
      {/* Toggle button for small screens */}
      <div className="block lg:hidden p-4">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-black focus:outline-none"
        >
          {isOpen ? "✖" : "☰"} {/* Hamburger icon */}
        </button>
      </div>

      {/* Navbar links */}
      <div className={`container ${isOpen ? "block" : "hidden"} lg:block`}>
        <div className="flex flex-col lg:flex-row w-fit gap-10 mx-auto font-medium py-4 text-black">
          {navLinks.map((link, index) => (
            <Link className="navbar_link relative" key={index} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
