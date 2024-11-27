"use client";
import phone from "../assets/phone.png";
import setting from "../assets/setting.png";
import dollar from "../assets/dollar.png";
import cert from "../assets/cert.png";

export const OurFeatures = () => {
  return (
    <section className="py-16 bg-[#0b1924]">
      <div className="container mx-auto px-6 md:px-10">
        {/* Title */}
        <h2 className="text-center md:text-left font-neue-machina text-[32px] md:text-[45px] font-extrabold text-white mb-10">
          <span>Our </span>
          <span className="text-[#e4b40d]">Features</span>
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-lg backdrop-blur-md bg-white bg-opacity-5 shadow-lg">
            <img src={dollar} alt="Dollar Icon" className="h-12 w-12 md:h-16 md:w-16 mb-4" />
            <h3 className="font-raleway text-[18px] md:text-[20px] font-semibold text-white mb-2">
              Cheapest TXs
            </h3>
            <p className="font-roboto text-[14px] md:text-[16px] text-gray-400">
              Exchange popular digital currencies at the cheapest possible transaction price.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-lg backdrop-blur-md bg-white bg-opacity-5 shadow-lg">
            <img src={setting} alt="Setting Icon" className="h-12 w-12 md:h-16 md:w-16 mb-4" />
            <h3 className="font-raleway text-[18px] md:text-[20px] font-semibold text-white mb-2">
              Setting Feature
            </h3>
            <p className="font-roboto text-[14px] md:text-[16px] text-gray-400">
              We are audited by Certik. CertiK is the leading security-focused ranking platform.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-lg backdrop-blur-md bg-white bg-opacity-5 shadow-lg">
            <img src={phone} alt="Phone Icon" className="h-12 w-12 md:h-16 md:w-16 mb-4" />
            <h3 className="font-raleway text-[18px] md:text-[20px] font-semibold text-white mb-2">
              Phone Feature
            </h3>
            <p className="font-roboto text-[14px] md:text-[16px] text-gray-400">
              Description of this feature goes here. You can adjust this text as needed.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-lg backdrop-blur-md bg-white bg-opacity-5 shadow-lg">
            <img src={cert} alt="Certificate Icon" className="h-12 w-12 md:h-16 md:w-16 mb-4" />
            <h3 className="font-raleway text-[18px] md:text-[20px] font-semibold text-white mb-2">
              CerTIK
            </h3>
            <p className="font-roboto text-[14px] md:text-[16px] text-gray-400">
              We are audited by Certik. CertiK is the leading security-focused ranking platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
