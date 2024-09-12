"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "How many servings should I give my dog?",
    answer:
      "Every pup is unique. We recommend a daily suggested serving based on your dog’s weight. 1 - 25lbs: 1 chew per day 26 - 50lbs: 2 chews per day 51 - 75lbs: 3 chews per day Over 75lbs: 4 chews per day",
  },
  {
    question: "How can I get my dog to eat these daily?",
    answer:
      "We’ve formulated all of our health and food supplements as soft chews, so they’re easy-to-give and yummy-to-eat. With a focus on taste and palatability, we’re certain your pup will be panting for more!",
  },
  {
    question:
      "Can I give my dog Finn soft chews when they are taking medications?",
    answer:
      "Our products are meant to be paired with your dog’s usual diet in order to help your pup live their best, healthiest life. We always recommend discussing with your veterinarian if you have any concerns, especially if your pup is taking medication(s) or has a pre-existing health condition.",
  },
  {
    question:
      "How long will it take for me to see the positive effects in my pup?",
    answer:
      "Every dog is unique but with daily use, you should start to see results within around 3 weeks.",
  },
  {
    question: "Can I use these soft chews as treats?",
    answer:
      "Yes, you can use our soft chews as healthy treats! But be mindful of how many your pup takes in a day – our soft chews are still food or health supplements, and too many may impact their nutrient balance. We recommend sticking to the daily serving size suggested based on your dog’s size.",
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
            Efficacy & Administration
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
