"use client";
import { Addcart } from "@/webSystem";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const supplements = [
  {
    id: 1,
    title: "Chill Pup",
    price: "$59.00",
    description:
      "Support your Pop through stressful moments with claming aid + daily multivitamin / Probiotic.",
    image: "/images/tins-1.png",
  },
  {
    id: 2,
    title: "Pretty Pup",
    price: "$59.00",
    description:
      "Treat your pooch to a luxurious coat with daily skin & coat + multivitiman / Probiotic",
    image: "/images/tins-2.png",
  },
  {
    id: 3,
    title: "Active Pup",
    price: "$59.00",
    description:
      "Nature Joint mobilityand tissue rapai with dail Hip & joint + multivitiman / Probiotic.",
    image: "/images/tins-3.png",
  },
  {
    id: 4,
    title: "Starter Bundle",
    price: "$79.00",
    description:
      "For the dog that deserves it all-Calming aid, Digestive Probiotics + daily multivitamin.",
    image: "/images/tins-4.png",
  },
  {
    id: 5,
    title: "Comfy Pup Bundle",
    price: "$59.00",
    description:
      "For the dog that deserves it all-Calming aid, Digestive Probiotics + daily multivitamin.",
    image: "/images/tins5.png",
  },
  // Add more products as needed
];

const Page = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col bg-slate-50 items-center text-[#161345] justify-center md:pb-10 p-4">
      <div className="container w-full">
        <h1 className="flex justify-center pb-14 items-center text-md md:text-6xl lg:text-9xl font-sans font-bold gap-3">
          Bundles{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14">
        {supplements.map((product) => (
          <div
            key={product.id}
            className="flex justify-center items-center flex-col max-w-xs"
          >
            <div className="bg-gray-100 hover:scale-105 rounded-lg p-12">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-t-lg w-60 "
              />
            </div>
            <div className=" items-center flex justify-center flex-col text-center">
              <h2 className="text-3xl hover:text-orange-500 font-bold my-2">
                {product.title}
              </h2>
              <p className="text-orange-500 font-bold text-2xl mb-2">
                {product.price}
              </p>
              <p className="mb-4 px-3">{product.description}</p>
              <button
                onClick={() => dispatch(Addcart(Addcart))}
                className="hover:scale-105 lg:mt-10 md:text-lg flex justify-center items-center gap-5 border-2 border-gray-800 bg-[#161345] text-white rounded-full py-1 px-3 md:py-3 md:px-8"
              >
                Shop Now
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
