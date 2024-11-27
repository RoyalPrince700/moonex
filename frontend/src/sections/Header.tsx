"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Importing the hamburger icon
import { IoMdClose } from "react-icons/io"; // Importing the close icon
import LOGO from "../assets/logo.png"; // Importing the logo image
import { motion } from "framer-motion"; // Importing framer-motion for smooth animations

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the menu's open/close state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <header className="fixed w-full bg-inherit top-0 z-20 backdrop-blur-sm">
      <div className="py-5">
        <div className="flex justify-between items-center px-6 md:px-24">
          {/* Logo */}
          <img className="w-[150px] h-[55px]" src={LOGO} alt="Saas Logo" />

          {/* Hamburger Icon for Mobile/Tablet */}
          <div
            className="flex md:hidden text-white text-3xl"
            onClick={toggleMenu}
          >
            <FiMenu />
          </div>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex gap-[72px] mr-[218px] text-white items-center font-raleway text-[18px] font-extrabold leading-[21.13px]">
            <a href="#" className="text-[#E4B40D]">
              Home
            </a>
            <a href="#">About Us</a>
            <a href="#">Roadmap</a>
            <a href="#">FAQs</a>
            <a href="#">Contact Us</a>
          </nav>

          {/* Connect Wallet Button for Desktop */}
          <button className="hidden md:inline-block bg-[#E4B40D] text-black tracking-tight px-4 py-2 rounded-full font-medium">
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <motion.div
        className="fixed top-0 h-[100vh] inset-0 bg-[#0b1924] z-50 flex flex-col items-center 
        justify-center"
        initial={{ y: "-100%" }} // Start off-screen
        animate={{ y: isMenuOpen ? 0 : "-100%" }} // Animate to the top or bottom
        transition={{ type: "spring", stiffness: 100, damping: 25 }} // Smooth slide effect
      >
        {/* Close Icon */}
        {isMenuOpen && (
          <IoMdClose
            className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}

        {/* Mobile Navigation Links */}
        {isMenuOpen && (
          <nav className="flex flex-col items-center gap-6 text-white">
            <a href="#" className="text-[#E4B40D] text-xl" onClick={toggleMenu}>
              Home
            </a>
            <a href="#" className="text-xl" onClick={toggleMenu}>
              About Us
            </a>
            <a href="#" className="text-xl" onClick={toggleMenu}>
              Roadmap
            </a>
            <a href="#" className="text-xl" onClick={toggleMenu}>
              FAQs
            </a>
            <a href="#" className="text-xl" onClick={toggleMenu}>
              Contact Us
            </a>
            <button
              className="bg-[#E4B40D] text-black px-4 py-2 rounded-full font-medium mt-4"
              onClick={toggleMenu}
            >
              Connect Wallet
            </button>
          </nav>
        )}
      </motion.div>
    </header>
  );
};

export default Header;
