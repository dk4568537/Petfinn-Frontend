import { Addcart } from "@/webSystem";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const products = [
  {
    id: 1,
    title: "Measure",
    description:
      "Finn donates a percentage of every product sold to fund the collection of low-value plastic from the environment.",
    image: "/images/measure.png",
  },
  {
    id: 2,
    title: "Fund",
    description:
      "Low-value plastic is collected, cleaned and ethically processed by a women-owned recovery co-op in Aurangabad, India.",
    image: "/images/fund.png",
  },
  {
    id: 3,
    title: "Reduce",
    description:
      "Finn works with rePurpose Global to reduce the use of virgin plastics, supporting a more sustainable business model",
    image: "/images/reduce.png",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col justify-center bg-slate-50 text-[#161345] items-center md:pb-10 p-4">
      <div className="container w-full">
        <h1 className="flex justify-center pb-5 lg:pb-14 items-center text-3xl md:text-6xl lg:text-9xl font-semibold gap-3">
          How it works{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-center items-center gap-5 flex-col max-w-xs"
          >
            <div className="rounded-lg p-2">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-t-lg w-48 h-48"
              />
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold my-2">{product.title}</h2>
              <p className="mb-4 text-xl">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" bg-slate-50 flex justify-center items-center flex-col">
        <div className=" rounded-lg my-10 py-10 flex justify-center items-center text-center gap-5 md:gap-8 flex-col bg-[#08b864] text-white">
          <h1 className=" w-full md:w-[730px] lg:w-[990px] text-2xl md:text-6xl lg:text-8xl">
            rePurpose Global
          </h1>
          <p className=" w-full md:w-[730px] lg:w-[970px] text-xs md:text-lg lg:text-2xl">
            rePurpose Global is the world's leading Plastic Action Platform
            dedicated to fighting plastic waste and eliminates millions of
            pounds of plastic waste from nature every year. In so doing,
            rePurpose Global positively impacts the lives of 10,000+
            marginalized waste workers and community members worldwide.
          </p>
          <Link href="https://www.business.repurpose.global/impact">
            <button className=" py-3 md:py-4 bg-white text-[#161345] hover:scale-105 rounded-full border px-8 md:px-10">
              Learn more →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
