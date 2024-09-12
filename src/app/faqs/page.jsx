"use client";
import { Spinner } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "What is Bone Broth Plus?",
    answer:
      "Bone Broth Plus is a powdered meal topper packed with protein, collagen and amino acids, plus additional superfoods that help fight inflammation and boost mobility.",
  },
  {
    question: "What are the benefits of Bone Broth Plus?",
    answer:
      "Bone Broth Plus provides natural support for a wide-range of issues including mobility, joint health, digestive health, and overall wellness.",
  },
  {
    question: "How do I feed Bone Broth Plus to my dog?",
    answer:
      "Very easily! Either sprinkle it dry over food or mix with water to form a delicious & nutritious liquid broth.",
  },
  {
    question: "How soon can I expect to see results?",
    answer:
      "Your dog will love their better tasting meals immediately :) Joint, mobility, and digestive benefits your dog will have may take a bit longer -- usually between 4-6 weeks.",
  },
  {
    question: "How often should I give my dog Bone Broth Plus?",
    answer:
      "You can feed Bone Broth Plus multiple times daily -- as a meal topper, broth, or snack -- but we recommend not exceeding three recommended servings in total per day.",
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleMoreFaqsClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/Got-Questions"; // Simulate the page transition
    }, 1000); // Adjust the delay as needed
  };

  return (
    <div className="bg-gray-300 py-8 px-3">
      <div className="container text-[#161345] mx-auto max-w-[850px] flex flex-col pt-5">
        <div>
          <h1 className="text-4xl font-serif sm:text-5xl md:text-6xl pb-10 font-bold max-w-xl">
            FAQs
          </h1>
        </div>
        <div className="w-full bg-white p-10 rounded-2xl md:w-[730px]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b mb-4">
              <div
                className="flex justify-between gap-3 items-center cursor-pointer py-3"
                onClick={() => handleToggle(index)}
              >
                <h2 className="text-xlhover:underline">
                  {faq.question}
                </h2>
                <button>
                  {openIndex === index ? (
                    <FaMinus className="text-lg" />
                  ) : (
                    <FaPlus className="text-lg" />
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
        </div>
        <div className="flex justify-end pt-8 items-end">
          <button
            className="border-2 bg-[#161345] hover:scale-105 hover:bg-[#221d67] text-white py-3 px-8 rounded-full flex items-center gap-2"
            onClick={handleMoreFaqsClick}
            disabled={loading}
          >
            MORE FAQs →{" "}
            {loading && (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="red"
                color="white"
                width="28px"
                height="28px"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
