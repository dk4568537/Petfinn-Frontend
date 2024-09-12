"use client";
import React from "react";
import "@/app/forbies/forbies.css";

const Page = () => {
  const forbiesdata = [
    {
      id: 1,
      img4: "/images/forbes.svg",
      img1: "/images/great-pet.svg",
      img2: "/images/dodo-navy.svg",
      img3: "/images/travel.svg",
    },
  ];

  return (
    <div className="bg-[#d7ecff] py-5 overflow-hidden">
      <div className="flex justify-center w-full h-full items-center gap-6 marquee">
        <div
          key={`repeat`}
          className="marquee-content flex justify-between items-center gap-8"
        >
          <img src="/images/forbes.svg" alt="Forbes" className=" w-24" />
          <img src="/images/great-pet.svg" alt="Great Pet" className=" w-24" />
          <img src="/images/dodo-navy.svg" alt="Dodo Navy" className=" w-24" />
          <img src="/images/travel.svg" alt="Travel" className=" w-24" />
          <img src="/images/forbes.svg" alt="Forbes" className=" w-24" />
          <img src="/images/great-pet.svg" alt="Great Pet" className=" w-24" />
          <img src="/images/dodo-navy.svg" alt="Dodo Navy" className=" w-24" />
          <img src="/images/travel.svg" alt="Travel" className=" w-24" />
          <img src="/images/forbes.svg" alt="Forbes" className=" w-24" />
          <img src="/images/great-pet.svg" alt="Great Pet" className=" w-24" />
          <img src="/images/dodo-navy.svg" alt="Dodo Navy" className=" w-24" />
          <img src="/images/travel.svg" alt="Travel" className=" w-24" />
        </div>
      </div>
    </div>
  );
};

export default Page;
