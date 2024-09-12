"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "Is your packaging safe for my dog?",
    answer:
      "Yes! Our tins are BPA-free and FDA-approved, so you can rest assured that the chews inside are safe and secure. Store the tins in a cool, dry place to maintain freshness for up to 2 years.",
  },
  {
    question: "Is your packaging recyclable?",
    answer:
      "At Finn, sustainability and wellness are at the heart of what we do. We believe in good health for humans, animals, and the planet. That’s why we package our soft chews in recyclable sources. Our tins are made with 100% recycled steel and can be recycled in perpetuity. Our cardboard packages can also be recycled to further minimize our environmental footprint.",
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-white py-8 border-b px-3">
      <div className="flex container mx-auto  max-w-5xl flex-col pt-5">
        <div className="">
          <h1 className="text-3xl text-[#161345] font-serif sm:text-4xl md:text-5xl pb-5 font-bold max-w-2xl">
            Packaging & Storage
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="w-full col-span-2 bg-white p-10 rounded-2xl ">
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
          <div className=" bg-[#ffcfdb] overflow-hidden border text-center items-center flex flex-col gap-3 col-span-1 p-5 rounded-3xl">
            <h1 className=" border-b text-3xl pb-3 font-semibold">
              Still have questions?
            </h1>
            <h3>Send us an email at</h3>
            <p className=" font-semibold hover:text-orange-500">
              hello@petfinn.com
            </p>
            <Link href="mailto:someone@example.com">
              <button className="border-2 border-[#161345] hover:scale-95 hover:bg-[#221d67] text-[#161345] font-semibold hover:text-white w-40 py-2 rounded-full">
                CONTACT US →
              </button>
            </Link>
            <img className=" md:-mr-72" src="/images/paking.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
