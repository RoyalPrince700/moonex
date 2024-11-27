"use client";
import { motion } from "framer-motion"; // Importing motion from Framer Motion
import backgroundimage from "../assets/bg-img.png";

export const Hero = () => {
  return (
    <section
      className="pt-48 pb-[133px] px-6 md:pt-80 md:pb-44 bg-[#0b1924] bg-cover bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="container">
        <div className="md:flex items-center">
          {/* Animated Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            {/* Heading */}
            <h1 className="text-white font-bold text-4xl md:text-6xl font-neue-machina leading-tight md:leading-[72.37px]">
              Trusted Multi-Chain <br />
              <span className="text-yellow-500 uppercase">DEX</span> Platform
            </h1>

            {/* Subtitle */}
            <p className="text-[#9E9E9E] text-lg md:text-[25px] mt-6 font-neue-machina">
              Trade, earn, and own crypto on the all-in-one multi-chain DEX
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-5 mt-8 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E4B40D] text-black tracking-tight px-6 md:px-9 py-3 rounded-full font-medium"
              >
                Connect Wallet
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#E4B40D] border-[#E4B40D] border-2 tracking-tight px-6 md:px-9 py-3 rounded-full font-medium"
              >
                Trade Crypto
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
