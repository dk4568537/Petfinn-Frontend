"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "Why should I give my dog supplements?",
    answer: "We are focused on improving your dog’s daily health and lifestyle by providing top-quality food and health supplements to enrich their usual diet. That’s why we have formulated our soft chews with only the best ingredients that are clinically proven to support your dog’s health and overall well-being. Because when your pup is healthy, everybody’s happy.",
  },
  {
    question: "Doesn’t my dog get all the necessary nutrients in their food?",
    answer:
      "Simply put, it depends on your dogs diet, breed, age, lifestyle, and more! Food supplements may provide additional nutrients that your dog isn’t getting from their normal diet. And health supplements help keep your dog in peak condition.",
  },
  {
    question: "What are concerns that would require me to give my dog supplements?",
    answer:
      "Our variety of food and health supplements should be used on a health maintenance basis for general health improvement and can help support healthy inflammation responses, skin, immune function, and joint health. Giving your pup food and health supplements on a regular basis can help maintain nearly all aspects of health. That’s why we partner with top-notch vets and animal health experts to make sure our soft chews are always up to snuff.",
  },
  {
    question: "Can I give these to my puppy? How old should my dog be?",
    answer:
      "Our soft chews are safe to be consumed by pups of all ages! While some conditions take time to develop, preventative health supplements or food supplements are the best way to support your dog’s long-term health and safety. We always recommend discussing with your veterinarian if you have any concerns.",
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
          <h1 className="text-4xl text-[#161345] font-serif sm:text-5xl md:text-6xl pb-5 font-bold max-w-xl">
            Why Finn
          </h1>
        </div>
        <div className="w-full bg-white p-10 rounded-2xl md:w-[830px]">
          {faqs.map((faq, index) => (
            <div key={index} className=" border-b mb-4">
              <div
                className="flex justify-between gap-3 items-center cursor-pointer py-3"
                onClick={() => handleToggle(index)}
              >
                <h2 className="text-xl hover:underline">
                  {faq.question}
                </h2>
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
        {/* <div className=" flex justify-end pt-8 items-end">
          <Link href="/Got-Questions">
            <button className=" border-2 bg-[#161345] hover:scale-105 hover:bg-[#221d67] text-white py-3 px-8 rounded-full">
              MORE FAQs →
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
