import { Addcart } from "@/webSystem";
import Link from "next/link";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const products = [
  {
    id: 1,
    title: "Allergy & Itch",
    price: "$32.00",
    description:
      "The allergy support your dog's been itching for - powered by Bee Propolis, Colostrum, and Probiotics.",
    image: "/images/tin.png",
  },
  {
    id: 2,
    title: "Probiotics",
    price: "$32.00",
    description:
      "Help you pup throught stressful times the natural way with organic herbs, chamomile $ melatonin.",
    image: "/images/tin (1).png",
  },
  {
    id: 3,
    title: "Calming Aid",
    price: "$32.00",
    description:
      "The allergy support your dog's been itching for - powered by Bee Propolis, Colostrum, and Probiotics.",
    image: "/images/tin (3).png",
  },
  {
    id: 4,
    title: "Calming Aid",
    price: "$32.00",
    description:
      "The allergy support your dog's been itching for - powered by Bee Propolis, Colostrum, and Probiotics.",
    image: "/images/tin (4).png",
  },
  {
    id: 5,
    title: "Calming Aid",
    price: "$32.00",
    description:
      "The allergy support your dog's been itching for - powered by Bee Propolis, Colostrum, and Probiotics.",
    image: "/images/tin (5).png",
  },
  {
    id: 6,
    title: "Calming Aid",
    price: "$32.00",
    description:
      "The allergy support your dog's been itching for - powered by Bee Propolis, Colostrum, and Probiotics.",
    image: "/images/tin (6).png",
  },
  {
    id: 7,
    title: "Calming Aid",
    price: "$32.00",
    description:
      "The allergy support your dog's been itching for - powered by Bee Propolis, Colostrum, and Probiotics.",
    image: "/images/tin (7).png",
  },
  // Add more products as needed
];

const Page = ({ button, shop }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center bg-slate-50 text-[#161345] items-center md:pb-10 p-4">
      <div className="container w-full">
       <Slide><h1 className="flex justify-center pb-14 items-center text-md md:text-6xl lg:text-8xl font-semibold gap-3">
          {shop}{" "}
          <Link href="/product">
            <button className="hover:scale-105 lg:mt-10 md:text-lg flex justify-center items-center gap-5 border-2 border-gray-800 rounded-full py-1 px-3 md:py-3 md:px-8">
              {button}
              <FaArrowRightLong />
            </button>
          </Link>
        </h1></Slide>
      </div>
      <style>{`
        .hoverTrans:hover{
          transform:translateX(-20px);
          transition:transform ease-in-out 0.5s;
        }
        @keyframes moveLeftRight {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10px);
          }
            100% {
            transform : translateY(0px)}
        }
        .hoverMove:hover {
          animation: moveLeftRight 0.5s ease-in-out infinite;
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-center items-center flex-col max-w-xs"
          >
            <div className="bg-gray-100 rounded-lg p-12 ">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-t-lg hover:scale-105 hoverMove w-60 h-60"
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
