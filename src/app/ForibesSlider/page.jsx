"use client";
import React from "react";
import "@/app/ForibesSlider/ForibiesSlider.css";

const Page = () => {
  const forbiesdata = [
    {
      id: 1,
      img4: "/images/forbes.svg",
    },
  ];

  return (
    <div className="bg-[#d7ecff] py-5 overflow-hidden">
      <div className="flex justify-center w-full h-full items-center gap-6 marquee">
        <div
          key={`repeat`}
          className="marquee-content flex justify-between items-center gap-8"
        >
          <img src="/images/sliderforibes.svg" alt="Forbes" className=" w-96" />
          <img src="/images/sliderforibes.svg" alt="Great Pet" className=" w-96" />
          <img src="/images/sliderforibes.svg" alt="Forbes" className=" w-96" />
          <img src="/images/sliderforibes.svg" alt="Great Pet" className=" w-96" />
        </div>
      </div>
    </div>
  );
};

export default Page;
