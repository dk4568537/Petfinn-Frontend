"use client";
import React from "react";
import Navbar from "@/app/navbar/page";
import Forbies from "@/app/forbies/page";
import MadeKona from "@/app/madeKona/page";
import Footer from "@/app/footer/page";
import Topper from "../topper/page";

const page = () => {
  return (
    <>
      <Navbar />
      <div className=" object-cover opacity-1 flex justify-center items-center">
        <img
          className=" h-[87vh] w-full"
          src="/images/TopperPowders.png"
          alt=""
        />
      </div>
      <Forbies />
      <Topper />
      <MadeKona image="/images/dogSelImg.png" />
      <Footer />
    </>
  );
};

export default page;
