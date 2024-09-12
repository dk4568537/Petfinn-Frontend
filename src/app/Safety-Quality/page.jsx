"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "Who formulates Finn’s products, and what are their credentials?",
    answer:
      "We manufacture our soft chews in a US-based, current Good Manufacturing Practice (cGMP) compliant facility that is Safe Quality Foods (SQF) certified and certified by the National Animal Supplements Council (NASC). Our team works hard to find the best manufacturing partners, source the highest quality ingredients, and partner with suppliers who live up to our standards of testing, safety, and quality.",
  },
  {
    question: "What food safety inspections or qualifications are undertaken?",
    answer:
      "Every batch of our soft chews is lab-tested before leaving the facility, and has a unique code that tracks ingredient supplier, manufacturing shift, testing, and processing. We’ll never compromise or cut corners, because your pet’s well-being is not worth the risk.",
  },
  {
    question:
      "Where can I find detailed ingredient information and directions for use?",
    answer:
      "Please refer to the individual product pages on our website and our labels to review detailed ingredient information and directions for use. If you have any questions, we’re always here to help - just reach out to hello@petfinn.com.",
  },
  {
    question:
      "Do your products contain any ingredients that will be bad for my pet?",
    answer:
      "We have partnered extensively with vets, animal health experts, and our manufacturing partners to create products with ingredients of the highest quality. We made room for more of the active ingredients by eliminating cheap fillers and harmful additives. Our soft chews do not contain any cellulose powder, palm oil, corn, soy, wheat, artificial colors, or artificial flavors. They are cooked through cold-press extrusion, using very low temperatures to preserve maximum potency for your pooch!",
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [viewAll, setViewAll] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleViewAll = () => {
    setViewAll(true);
  };

  const displayedFaqs = viewAll ? faqs : faqs.slice(0, 3);

  return (
    <div className="bg-white py-8 px-3 border-b">
      <div className="flex container mx-auto max-w-[850px] flex-col pt-5">
        <div className="">
          <h1 className="text-4xl text-[#161345] font-serif sm:text-5xl md:text-6xl pb-5 font-bold max-w-xl">
            Safety & Quality
          </h1>
        </div>
        <div className="w-full bg-white p-10 rounded-2xl md:w-[830px]">
          {displayedFaqs.map((faq, index) => (
            <div key={index} className="border-b mb-4">
              <div
                className="flex justify-between gap-3 items-center cursor-pointer py-3"
                onClick={() => handleToggle(index)}
              >
                <h2 className="text-xl hover:underline">{faq.question}</h2>
                <button>
                  {openIndex === index ? (
                    <FaMinus className="text-xl" />
                  ) : (
                    <FaPlus className="text-xl" />
                  )}
                </button>
              </div>
              {openIndex === index && (
                <div className="py-4">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
          {!viewAll && (
            <div className="flex justify-end pt-8 items-end">
              <button
                onClick={handleViewAll}
                className="border-2 border-[#161345] hover:scale-95 hover:bg-[#221d67] text-[#161345] font-semibold hover:text-white py-3 px-8 rounded-full"
              >
                VIEW ALL →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
