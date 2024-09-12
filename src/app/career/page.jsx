"use client";
import React from "react";
import Navbar from "@/app/navbar/page";
import PerfectForYou from "@/app/PerfectForYOu/page";
import Footer from "@/app/footer/page";

const page = () => {
  return (
    <>
      <Navbar />
      <div className=" container mx-auto px-3">
        <div className=" flex sm:h-screen font-serif justify-center items-center flex-col text-center">
          <h1 className=" py-3 text-2xl md:text-6xl lg:text-9xl text-[#161345] ">
            Current <br />
            Opportunities
          </h1>
          <p className=" sm:mt-12 text-xl text-[#999999]">
            We don't have any openings right now, <br /> but check back soon!
          </p>
        </div>
      </div>
      <PerfectForYou />
      <Footer />
    </>
  );
};

export default page;
