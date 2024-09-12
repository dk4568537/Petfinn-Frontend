"use client";
import React from "react";
import Navbar from "@/app/navbar/page";
import WhyFinn from "@/app/Why-Finn/page";
import SafetyQuality from "@/app/Safety-Quality/page";
import EfficacyAdministration from "@/app/Efficacy-Administration/page";
import PackagingStorage from "@/app/Packaging-Storage/page";
import ShippingReturns from "@/app/Shipping-Returns/page";
import AccounrManagement from "@/app/Account-Management/page";
import PartnershipOppurnity from "@/app/Partnership_oppurnity/page";
import Footer from "@/app/footer/page";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <div className=" pb-5">
        <div>
          <h1 className=" text-[#161345] py-8 text-center text-2xl md:text-8xl font-bold">
            Got Questions?
          </h1>
          <img src="/images/hero.jpg" alt="" />
          <h2 className=" text-[#161345] py-8 text-center text-2xl md:text-8xl font-bold">
            We've are Got Awnswer
          </h2>
        </div>
        <div className=" container mx-auto flex gap-2">
          <Link href="/Why-Finn">
            <button className=" border py-3 px-2 bg-pink-100 border-pink-500 text-pink-500 rounded-full">
              WHY FINN?
            </button>
          </Link>
          <Link href="/Safety-Quality">
            <button className=" border border-[#161345] hover:bg-pink-100 py-3 px-2 hover:border-pink-500 hover:text-pink-500 text-gray-500 rounded-full">
              SAFETY & QUALITY
            </button>
          </Link>
          <Link href="/Efficacy-Administration">
            <button className=" border border-[#161345] hover:bg-pink-100 py-3 px-2 hover:border-pink-500 hover:text-pink-500 text-gray-500 rounded-full">
              EFFICACY & ADMINISTRATION
            </button>
          </Link>
          <Link href="/Packaging-Storage">
            <button className=" border border-[#161345] hover:bg-pink-100 py-3 px-2 hover:border-pink-500 hover:text-pink-500 text-gray-500 rounded-full">
              PACKAGING & STORAGE
            </button>
          </Link>
          <Link href="/Shipping-Returns">
            <button className=" border border-[#161345] hover:bg-pink-100 py-3 px-2 hover:border-pink-500 hover:text-pink-500 text-gray-500 rounded-full">
              SHIPPING & RETURNS
            </button>
          </Link>
          <Link href="Account-Management">
            <button className=" border border-[#161345] hover:bg-pink-100 py-3 px-2 hover:border-pink-500 hover:text-pink-500 text-gray-500 rounded-full">
              ACCOUNT MANAGEMENT
            </button>
          </Link>
        </div>
      </div>
      <WhyFinn />
      <SafetyQuality />
      <EfficacyAdministration />
      <PackagingStorage />
      <ShippingReturns />
      <AccounrManagement />
      <PartnershipOppurnity />
      <Footer />
    </>
  );
};

export default page;
