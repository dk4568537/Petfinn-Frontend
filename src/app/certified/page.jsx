import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const page = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 pb-10 md:pl-5">
      <div className=" grid grid-cols-1 md:grid-cols-2">
        <div className=" flex justify-center text-[#161345] items-start flex-col px-3 gap-3">
          <h1 className=" text-3xl lg:text-7xl lg:w-[500px]">
            We’re Certified Plastic-Negative
          </h1>
          <h3 className=" md:text-2xl font-bold">
            In partnership with rePurpose
          </h3>
          <p className=" md:text-xl font-semibold w-full lg:w-[500px]">
            Discover how we're striving to make the world a better place for
            future pups through our sustainability initiatives.
          </p>
          <Link href="/plasticNagistive">
            <button className="hover:scale-105 font-bold mb-5 md:mt-6 md:text-lg flex justify-center items-center gap-5 border-2 border-gray-800 rounded-full py-2 px-5 md:py-4 md:px-12">
              Learn more
              <FaArrowRightLong />
            </button>
          </Link>
        </div>
        <div className=" flex justify-center max-w-screen-lg">
          <img src="/images/green-tin.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default page;
