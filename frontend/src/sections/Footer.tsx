import footerLogo from "../assets/footerlogo.png";
import telegramIcon from "../assets/telegram.png";
import twitterIcon from "../assets/Twitter.png";
import vectorIcon from "../assets/Vector.png";

const Footer = () => {
  return (
    <footer className="bg-[#0b1924] py-8 px-6 md:px-24">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* First Div: Logo */}
        <div className="mb-6 md:mb-0">
          <img
            src={footerLogo}
            alt="Footer Logo"
            className="w-[100px] md:w-[155px] h-auto"
          />
        </div>

        {/* Second Div: Links */}
        <div className="flex flex-col md:flex-row text-white items-center gap-4 md:gap-[76px] text-center font-raleway text-[16px] md:text-[18px] font-extrabold">
          <p>About Us</p>
          <p>Roadmap</p>
          <p>FAQs</p>
          <p>Contact Us</p>
        </div>

        {/* Third Div: Contact Us Section */}
        <div className="flex flex-col items-center mt-6 md:mt-0">
          {/* Contact Us Title */}
          <div className="text-white font-raleway text-[20px] md:text-[30px] font-extrabold text-center">
            Contact <span className="text-[#e4b40d]">Us</span>
          </div>

          {/* Contact Us Icons */}
          <div className="flex gap-4 mt-4">
            <img
              src={telegramIcon}
              alt="Telegram Icon"
              className="w-[24px] md:w-[31px] h-auto"
            />
            <img
              src={vectorIcon}
              alt="Vector Icon"
              className="w-[22px] md:w-[30px] h-auto"
            />
            <img
              src={twitterIcon}
              alt="Twitter Icon"
              className="w-[22px] md:w-[26px] h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
