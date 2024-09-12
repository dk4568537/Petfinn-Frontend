import { Addcart } from "@/webSystem";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const products = [
  {
    id: 1,
    title: "Pumpkin Plus",
    price: "$32.00",
    description:
      "The ultimale trio for joint support and tissue repair-Glucosamine, Chondroitin & MSM",
    image: "/images/producttin-1.png",
  },
  {
    id: 2,
    title: "Bone Broth Plus",
    price: "$32.00",
    description:
      "Packed with collagen & amino acids to promote joint health and Long-term vitality",
    image: "/images/producttin-2.png",
  },
]

const Page = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center bg-slate-50 text-[#161345] items-center md:pb-10 p-4">
      <div className="container w-full">
        <h1 className="flex justify-center pb-5 lg:pb-14 items-center text-3xl md:text-6xl lg:text-9xl font-semibold gap-3">
          Toppers{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-center items-center flex-col max-w-xs"
          >
            <div className="bg-gray-100 rounded-lg p-12">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-t-lg hover:scale-105 w-60 h-60"
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
