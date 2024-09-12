"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "How does the subscription offering work?",
    answer:
      "Every pup is unique, so there’s no ‘one size fits all’ when it comes to delivery cadence. We strive to offer a variety of subscription plans so your four-legged friend always has the support they deserve. Depending on your pup’s weight and serving size, subscription frequency may vary from just a few weeks to as long as 90 days between shipments.",
  },
  {
    question: "How can I update, change or cancel my subscription preferences?",
    answer:
      "You can update any details including product selection and subscription frequency through your Account page. You can pause or cancel your subscription at any time. While we hope you remain a Finn supporter forever, we understand that things change. If you need any help, just reach out to hello@petfinn.com.",
  },
  {
    question: "Do I need a subscription?",
    answer:
      "Nope – if you’re not quite ready for a subscription commitment, all Finn products can be purchased a la carte. However, a subscription is the easiest way to make sure you’re always stocked up on the necessary nutrients!",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express, Discover)..",
  },
  {
    question: "How can I check the status or track my order?",
    answer:
      "You will receive an email with all tracking details once your order has been shipped. You can always check previous orders through your Account page.",
  },
  {
    question: "Your site says I don't have an account, what do I do?",
    answer:
      "If you created an account after your purchase, make sure you are logging in with the same email you used in checkout to manage any subscriptions. Unfortunately, having a subscription does not automatically create an account. If you haven't previously created an account, you can create one here",
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
          <h1 className="text-3xl text-[#161345] font-serif sm:text-4xl md:text-5xl pb-5 font-bold max-w-2xl">
            Account Management
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
