"use client";
import { Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [Loadig,setLoading] = useState(false)
  const router = useRouter();

  const handlestarted = () =>{
    setLoading(true)
    setTimeout(()=>{
      window.location.href ='/consultion'
    }, 1000)
  }
  return (
    <div className=" bg-[#ff7f00] pb-20 flex justify-between items-center flex-col">
      <div className=" h-screen container">
        <Link href="/">
          <h1 className=" text-center py-10 text-[#161345] text-5xl font-extrabold">
            finn
          </h1>
        </Link>
        <div className=" bg-white pb-5 rounded-xl flex justify-center text-[#161345] items-center flex-col">
          <img className=" my-10" src="/images/give.svg" alt="" />
          <h1 className=" text-5xl font-semibold text-center mb-10">
            Give your sidekick <br /> something good.
          </h1>
          <p className=" text-2xl mb-12 mt-2 font-semibold te">
            Superior pet health kicks off with our two-minute quiz.
          </p>
         
           <button
            onClick={handlestarted}
            disabled={Loadig}
              className=" hover:scale-105 mb-10 px-10 py-3 font-serif text-2xl border rounded-full border-[#161345]">
              Get Started →
              {Loadig && (
                <Spinner
                color="white"
               emptyColor="green"
                speed="0.65s"
                thickness="4px"
                width='28px'
                height='28px'
                />
              )}
            </button>
           
        </div>
        <button
          onClick={() => router.back()}
          className="bg-[#ff7f00] my-8 hover:font-extrabold hover:scale-100"
        >
          ￩ HOME
        </button>
      </div>
    </div>
  );
};

export default page;
