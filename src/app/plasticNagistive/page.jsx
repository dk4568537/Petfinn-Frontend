"use client";
import React from "react";
import Navbar from "@/app/navbar/page";
import Footer from '@/app/footer/page';
import FinnRecovers from '@/app/FinnRecovers/page'
import HowItWork from '@/app/howItWork/page'
import PackagingRecycling from '@/app/PackagingRecycling/page'
import Letsprotect from '@/app/Letsprotect/page'
import OtherWays from '@/app/Otherways/page'

const page = () => {
  return (
    <>
      <Navbar />
      <div className=" relative object-cover opacity-1 flex justify-center flex-col items-center">
        <img className=" md:min-h-screen w-full" src="/images/plasticNagistiveImg.png" alt="" />
        <div className=" flex justify-center items-center flex-col md:gap-4 absolute text-center text-white">
            <h1 className=" text-xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold">Certified <br />    
            Plastic Negative</h1>
            <p className=" text-2xl">In partnership with...</p>
            <img className=" px-3" src="/images/rePurpose.svg" alt="" />
        </div>
      </div>
      <FinnRecovers/>
      <HowItWork/>
      <PackagingRecycling/>
      <Letsprotect/>
      <OtherWays/>
      <Footer/>
    </>
  );
};

export default page;
