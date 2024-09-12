import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const page = () => {
  return (
    <div className="flex justify-center items-center bg-[#ff7f00] py-16 px-3 md:px-16">
      <div className="relative flex justify-center items-center border-4 bg-gray-50 border-[#161345] rounded-2xl container">
        <div className=" flex justify-center items-center rounded-lg text-[#161345] flex-col px-3 py-16 gap-5">
          <h1 className=" text-2xl text-center md:text-8xl lg:text-9xl">
            Consult the <br /> Virtual Vet
          </h1>
          <p className=" lg:w-[770px] w-full text-xs md:text-3xl lg:text-4xl pb-3">
            Tell us a bit about your dog and get tailor-made supplement
            recommendations based on factors like age, breed, diet, and history.
          </p>
          <Link href='/Giveyour'><button className="hover:scale-105 font-semibold text-white bg-[#161345] font-sans md:text-lg flex justify-center items-center gap-5 border-2 border-gray-800 rounded-full py-2 px-5 md:py-3 md:px-10">
            Virtual Vet
            <FaArrowRightLong />
          </button></Link>
        </div>
        <div className=" hidden lg:block">
          <img
            className=" absolute -left-12 -bottom-1"
            src="/images/Best Natural Dog 1.svg"
            alt=""
          />
          <img
            className=" absolute -right-12 -bottom-1"
            src="/images/Best Natural Dog 2.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default page;
