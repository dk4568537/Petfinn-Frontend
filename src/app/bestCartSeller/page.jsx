import { Addcart } from "@/webSystem";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const products = [
  {
    id: 1,
    title: "Allergy & Itch",
    price: "$32.00",
    description:
      "Pre and Probiotic blend for healthypoops, proper digestion, and a more comfortabe dog.",
    image: "/images/tin.png",
  },
  {
    id: 2,
    title: "Pumpkin Plus",
    price: "$32.00",
    description:
      "The ultimate trio for joint support and tissue repair-Glucosamine-chondrition & MSM",
    image: "/images/saller-1.png",
  },
  {
    id: 3,
    title: "Paw hero",
    price: "$20.00",
    description:
      "Powered by plant-based ingredients, our all weather superbalm heroically, protects nourishes, and repairs paws.",
    image: "/images/body-1.png",
  },
  {
    id: 4,
    title: "Comfy Pup Bundle",
    price: "$59.00",
    description:
      "For the dog that deserves it all-Calming aid, Digestive Probiotics + daily multivitamin.",
    image: "/images/tins5.png",
  },
  {
    id: 5,
    title: "Bone Broth Plus",
    price: "$32.00",
    description:
      "Packed with collagen & amino acids to promote joint health and Long-term vitality",
    image: "/images/producttin-2.png",
  },
  {
    id: 6,
    title: "Digestive Probiotics",
    price: "$32.00",
    description:
      "Pre and biotic blend for healthy props, proper digestio and a more comfortable dog.",
    image: "/images/tin (1).png",
  },
  // Add more products as needed
];

const Page = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center bg-slate-50 text-[#161345] items-center md:py-14 p-4">
      <div className="container w-full">
        <h1 className="flex justify-center pb-14 items-center text-md md:text-6xl lg:text-9xl font-semibold gap-3">
          Best Sellers{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-center items-center flex-col max-w-xs"
          >
            <div className="bg-gray-100 rounded-2xl  p-12">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-t-lg hover:scale-105 w-60 h-60 "
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl hover:text-orange-500 font-bold my-2">
                {product.title}
              </h2>
              <p className="text-orange-500 font-bold text-2xl mb-2">
                {product.price}
              </p>
              <p className="mb-4">{product.description}</p>
              <button
                onClick={() => {
                  dispatch(Addcart({ product, quantity: 1 }));
                }}
                className="bg-[#161345] flex justify-center font-bold items-center gap-2 min-w-full text-white py-4 hover:scale-105 rounded-full "
              >
                Shop Now <FaArrowRightLong />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
