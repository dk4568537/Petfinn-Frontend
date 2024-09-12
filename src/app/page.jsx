"use client";
import React from "react";
import APotionDashB from "@/app/aPotionDashB/page";
import Navbar from "@/app/navbar/page";
import Forbies from "@/app/forbies/page";
import CartSupplement from "@/cartsupplement/page";
import Certified from "@/app/certified/page";
import Cunselt from "@/app/cunsult/page";
import SaveBundles from "@/app/saveBundles/page";
import FinnWay from "@/app/funnWay/page";
import LovedPets from "@/app/lovedPets/page";
import WorthBorking from "@/app/worthBorking/page";
import Footer from "@/app/footer/page";
import { Fade } from "react-awesome-reveal";

const Page = () => {
  return (
    <div>
      <Fade>
      <Navbar />
      </Fade>
      <APotionDashB />
      <Forbies />
      <CartSupplement button="Shop Now" shop="Shop Supplement" />
      <Certified />
      <Cunselt />
      <SaveBundles />
      <FinnWay />
      <LovedPets />
      <WorthBorking />
      <Footer />
    </div>
  );
};

export default Page;
