"use client";
import React from "react";
import Navbar from "@/app/navbar/page";
import Forbies from "@/app/forbies/page";
import CartSupplement from '@/cartsupplement/page'
import Topper from '@/app/topper/page'
import Bundles from '@/app/bundles/page'
import BodyCare from '@/app/bodyCare/page'
import MadeKona from '@/app/madeKona/page'
import Footer from '@/app/footer/page'

const page = () => {
  return (
    <>
      <Navbar />
      <div className=" object-cover opacity-1 flex justify-center items-center">
        <img className=" min-h-screen w-full" src="/images/productImg.png" alt="" />
      </div>
      <Forbies />
      <CartSupplement shop='Supplement'/>
      <Topper/>
      <Bundles/>
      <BodyCare/>
      <MadeKona image="/images/kona.png"/>
      <Footer/>
    </>
  );
};

export default page;
