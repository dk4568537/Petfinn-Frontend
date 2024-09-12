import { Addcart } from "@/webSystem";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { useDispatch } from "react-redux";

const products = [
  {
    id: 1,
    title: "Sign Tin",
    price: "$32",
    image: "/images/producttin-2.png",
    description: ["Try Finn Bone Broth Plus", "Ships Once"],
    buttonText: "Buy Now →",
  },
  {
    id: 2,
    title: "Two Pack",
    price: "$59",
    originalPrice: "$64",
    image: "/images/tins2345.png",
    description: ["Make it a 2-pack and save!", "Saves $5 + Free Shipping"],
    buttonText: "Buy Now →",
  },
  {
    id: 3,
    title: "Single Subscription",
    price: "$27.20",
    originalPrice: "$32",
    image: "/images/producttin-2.png",
    description: ["Subscribe & save 15%", "Ships Once"],
    buttonText: "Buy Now →",
  },
];

const Page = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#161345] text-white flex justify-center px-3">
      <div className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="max-w-sm bg-white text-[#131645] rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="px-6 pt-4">
                <h2 className="text-3xl font-semibold">{product.title}</h2>
                <p className="text-2xl font-semibold">
                  {product.price}
                  {product.originalPrice && (
                    <span className="text-gray-400 text-base line-through ml-2">
                      {product.originalPrice}
                    </span>
                  )}
                </p>
              </div>
              <div className="p-6 flex flex-col justify-center items-center gap-2">
                <img
                  className="w-full px-8"
                  src={product.image}
                  alt={product.title}
                />
                <ul className="text-start text-base">
                  {product.description.map((desc, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <GoDotFill />
                      {desc}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => dispatch(Addcart({ product, quantity: 1 }))}
                  className="font-semibold hover:scale-105 rounded-full bg-[#de2910] hover:bg-[#c22c18] w-2/3 text-white py-3"
                >
                  {product.buttonText}
                </button>
                <h3 className="text-center text-gray-400">
                  60 day money-back guarantee
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
