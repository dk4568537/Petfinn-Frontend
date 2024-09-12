"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "Where do you ship to?",
    answer:
      "We ship to all 50 states, and offer free shipping on subscription orders and orders greater than $35. Once processed, most orders will generally take 1-2 days to ship and an additional 3-7 days to deliver depending on the shipment destination. We do not currently ship to PO boxes, APO/FPOs, or international addresses.",
  },
  {
    question: "How can I update my shipping address?",
    answer:
      "You can always update your shipping address or any other account details through your Account page. If you have any questions, we’re always here to help at hello@petfinn.com.",
  },
  {
    question: "How can I return my product? Can I get a refund?",
    answer:
      "We’re certain your pup will love our soft chews, and more importantly, feel great after proper consumption. If you’re unhappy with our product, just email hello@petfinn.com and we’ll get you sorted out with a refund.",
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-white py-8 border-b px-3">
      <div className="flex container mx-auto  max-w-[850px] flex-col pt-5">
        <div className="">
          <h1 className="text-3xl text-[#161345] font-serif sm:text-4xl md:text-5xl pb-5 font-bold max-w-xl">
            Shipping & Returns
          </h1>
        </div>
        <div className="w-full bg-white p-10 rounded-2xl md:w-[830px]">
          {faqs.map((faq, index) => (
            <div key={index} className=" border-b mb-4">
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
                <div className=" py-4">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
