"use client";
import React from "react";
import Benefits from "@/app/Benefits/page";
import Footer from "@/app/footer/page";

const Page = () => {
  return (
    <>
      <div className="bg-[#ffcfdb] py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-8">
          <div className="flex flex-col justify-center items-start gap-4">
            <h2 className="text-4xl md:text-7xl font-serif font-extrabold">
              finn
            </h2>
            <h1 className="text-3xl md:text-6xl">
              Obsessed with your dog? Share the love.
            </h1>
            <p className="text-lg md:text-2xl">
              Our <span className="font-bold">Affiliate Program</span> allows
              you to promote Finn products, earn commissions, and be a champion
              for dog wellness at the same time.
            </p>
            <button className="hover:scale-105 w-full md:w-52 border py-4 rounded-full bg-[#161345] text-white">
              Join Now →
            </button>
          </div>
          <div>
            <img
              src="/images/lifestyle.png"
              alt="Dog Lifestyle"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <Benefits />
      <Footer />
    </>
  );
};

export default Page;
