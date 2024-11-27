"use client";
import React, { useState } from "react";
import LOGO from "../assets/logo.png"; // Moonex logo
import check from "../assets/check_bold.png"; // Check icon
import cancel from "../assets/close_small.png"; // Cancel icon
import background from "../assets/bg.png"; // Background image
import LOGOUNI from "../assets/uniswap.png"; // Uniswap logo
import { motion } from "framer-motion";

import plus from "../assets/plus.png";
import down from "../assets/down.png";

export const WhyMoonex = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const togglePoint = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const points = [
    "Point no one",
    "Point no two",
    "Point no three",
    "Point no four",
    "Point no five",
  ];

  return (
    <section
      className="py-10 pt-32 pb-20 md:pt-52 md:pb-44 bg-[#0b1924] bg-cover bg-center px-6 md:px-12"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container mx-auto">
        {/* Why Moonex Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 font-extrabold text-white text-[24px] md:text-[45px] leading-tight text-left font-neue-machina"
        >
          Why <span className="text-[#e4b40d]">Moonex</span>?
        </motion.h2>

        {/* Mobile and Tablet View */}
        <div className="block md:hidden">
          {points.map((point, index) => (
            <div
              key={index}
              className="mb-4 p-4 bg-white bg-opacity-5 rounded-lg shadow-lg"
            >
              {/* Point Header */}
              <div
                className="flex justify-between items-center cursor-pointer text-white text-[18px] font-semibold"
                onClick={() => togglePoint(index)}
              >
                <p>{point}</p>
                <img
                  src={activeIndex === index ? down : plus}
                  alt="Toggle Icon"
                  className="h-6 w-6"
                />
              </div>

              {/* Expanded Content */}
              {activeIndex === index && (
                <div className="mt-4">
                  <div className="flex justify-around items-center mb-4">
                    <img
                      src={LOGO}
                      alt="Moonex Logo"
                      className="h-[33px] w-[90px]"
                    />
                    <img
                      src={LOGOUNI}
                      alt="Uniswap Logo"
                      className="h-[33px] w-[90px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <img
                      src={check}
                      alt="Check Icon"
                      className="h-[25px] w-[25px] mx-auto"
                    />
                    <img
                      src={cancel}
                      alt="Cancel Icon"
                      className="h-[25px] w-[25px] mx-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="relative px-6 md:px-12 py-6 bg-white bg-opacity-5 backdrop-blur-md rounded-lg shadow-lg max-w-full mx-auto">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 mb-6 items-center text-center">
              <div className="text-white font-neue-machina text-[20px] md:text-[28px] font-semibold">
                Comparison
              </div>
              <div>
                <img
                  src={LOGO}
                  alt="Moonex Logo"
                  className="mx-auto h-[33px] w-[90px] md:h-[39px] md:w-[107px]"
                />
              </div>
              <div>
                <img
                  src={LOGOUNI}
                  alt="Uniswap Logo"
                  className="mx-auto h-[33px] w-[90px]"
                />
              </div>
            </div>

            {/* Table Content */}
            <div className="grid grid-cols-3 gap-4 items-center">
              {points.map((point, index) => (
                <React.Fragment key={index}>
                  <div className="py-4 text-center text-[#F0F0F0B2] text-[16px] md:text-[20px] font-light font-neue-machina">
                    {point}
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src={check}
                      alt="Check Icon"
                      className="h-[25px] w-[25px] md:h-[33px] md:w-[33px]"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src={cancel}
                      alt="Cancel Icon"
                      className="h-[35px] w-[35px] md:h-[55px] md:w-[55px]"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMoonex;
