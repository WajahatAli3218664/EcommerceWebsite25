import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"; // Added BsGithub
import { FaGlobe } from "react-icons/fa"; // Added FaGlobe for portfolio icon

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          {/* Social media icons with links */}
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <a href="https://wajahat-ali-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaGlobe /> {/* Replaced Facebook with Portfolio (Globe Icon) */}
              </a>
            </div>
            <div className="header_top__icon_wrapper">
              <a href="https://github.com/WajahatAli3218664" target="_blank" rel="noopener noreferrer">
                <BsGithub /> {/* Replaced Twitter with GitHub */}
              </a>
            </div>
            <div className="header_top__icon_wrapper">
              <a href="https://www.instagram.com/_wajo41_/" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
              </a>
            </div>
            <div className="header_top__icon_wrapper">
              <a href="https://www.linkedin.com/in/wajahat-ali-3189862b4/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
              </a>
            </div>
          </div>

          <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER -$60
          </div>

          <div className="flex gap-4">
            <select 
            className="text-gray-500 text-[12px] w-[70px]"
            name="currency" 
            id="currency"
            >
              <option value="USD $">USD $</option>
              <option value="PKR">PKR</option>
              <option value="EUR ">EUR</option>
              <option value="INR">INR</option>
            </select>

            <select 
            className="text-gray-500 text-[12px] w-[80px]"
            name="language" 
            id="language">
              <option value="English">English</option>
              <option value="Urdu">Urdu</option>
              <option value="French">French</option>
              <option value="Turkey">Turkey</option>
            </select>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
