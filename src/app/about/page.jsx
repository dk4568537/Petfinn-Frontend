"use client";
import React from "react";
import Navbar from "@/app/navbar/page";
import Footer from "@/app/footer/page";
import AlexBonborn from '@/app/Alex-Bonborn/page'
import Committed from '@/app/Committed/page'
import LovedPets from '@/app/lovedPets/page'
import Cartsupplement from '@/cartsupplement/page'
import ForibiesSlider from '@/app/ForibesSlider/page'


const page = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div>
          <h1 className=" text-[#161345] py-3 sm:py-8 text-center text-2xl md:text-8xl font-bold">
          The Finn Story
          </h1>
          <img src="/images/above-the-fold.jpg" alt="" />
        </div>
        
      </div>
      <AlexBonborn/>
      <Committed/>
      <LovedPets/>
      <ForibiesSlider/>
      <Cartsupplement  button="Shop Now" shop="Our Products"/>
      <Footer />
    </>
  );
};

export default page;
