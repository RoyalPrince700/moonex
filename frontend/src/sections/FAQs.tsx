import React, { useState } from "react";
import plus from "../assets/plus.png";
import down from "../assets/down.png";
import backgroundfaq from "../assets/bgfaq.png";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I get a Referral Code?",
      answer:
        "To get a referral code, sign up for an account and navigate to the referral section. You'll find a unique code assigned to your profile.",
    },
    {
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer:
        "Rewards are given in tokens that you can redeem or convert to ETH. Check your dashboard for reward details after a successful referral.",
    },
    {
      question: "How do I withdraw my referral earnings?",
      answer:
        "Navigate to the earnings section of your dashboard, and select the withdrawal option. Your rewards will be processed within 24 hours.",
    },
  ];

  return (
    <section
      className="py-10 pb-24 relative bg-[#0b1924] bg-cover bg-center px-6 md:px-24"
      style={{
        backgroundImage: `url(${backgroundfaq})`,
      }}
    >
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-center text-[#e4b40d] font-neue-machina text-[28px] md:text-[45px] font-extrabold leading-tight pt-8">
          FAQs
        </h2>

        {/* FAQ List */}
        <div className="mt-10 flex flex-col items-center">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 flex flex-col justify-center p-4 rounded-lg shadow-lg border border-[#BBBBBB1A] bg-white/10 backdrop-blur-md w-full max-w-[997px] transition-all duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-80"
              }`}
            >
              {/* Question */}
              <div
                className="flex justify-between items-center cursor-pointer text-white font-raleway font-medium text-[16px] md:text-[18px] leading-[21.13px]"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
                <img
                  src={activeIndex === index ? down : plus}
                  alt="Toggle Icon"
                  className="h-[30px] md:h-[40px] w-[30px] md:w-[40px]"
                />
              </div>

              {/* Answer */}
              {activeIndex === index && (
                <p className="mt-3 text-gray-400 font-raleway font-light text-[14px] md:text-[16px] leading-[19px]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
