import React from "react";
import { GoDotFill } from "react-icons/go";

const page = () => {
  return (
    <div className=" bg-red-500 text-white flex justify-center px-3">
      <div className=" container mx-auto py-10">
        <h1 className=" text-center text-lg md:text-8xl font-bold md:my-10">
          Keep Fido Movin’
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="max-w-sm bg-white text-[#131645] rounded-3xl overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="/images/product-card-summary.png"
              alt="Sunset in the mountains"
            />
            <div class="p-6">
              <p class=" text-center text-base">
                Getting ahead of joint and mobility issues is key to keeping
                your dog active and comfortable later in life. Bone Broth Plus
                is here to help.
              </p>
            </div>
          </div>
          <div class="max-w-sm px-6 bg-white rounded-3xl py-4 flex-col flex gap-4 overflow-hidden shadow-lg">
            <p class=" text-[#161345] text-2xl font-semibold flex gap-4">
              <GoDotFill />
              Promotes mobility & longevity
            </p>
            <p class=" text-[#161345] text-2xl font-semibold flex gap-4">
              <GoDotFill />
              Naturally boosts hip & joint health
            </p>
            <p class=" text-[#161345] text-2xl font-semibold flex gap-4">
              <GoDotFill />
              Vital support for active & aging dogs
            </p>
            <p class=" text-[#161345] text-2xl font-semibold flex gap-4">
              <GoDotFill />
              Rich in collagen & essential amino acids
            </p>
          </div>
          <div class="text-center flex flex-col gap-4 max-w-sm rounded-3xl bg-white px-6 py-4 overflow-hidden shadow-lg">
            <div class="font-bold text-xl  mb-2">
              <p className=" text-[#131645] underline">Only 6 Ingredients</p>
            </div>
            <div class="flex justify-start items-center gap-x-5">
              <img
                class="w-14"
                src="images/bone-broth-1.png"
                alt="Beef Bone Broth"
              />
              <p class="text-[#131645] text-2xl font-bold">Beef Bone Broth</p>
            </div>
            <div class="flex justify-start items-center gap-x-5">
              <img class="w-14" src="images/apple-.png" alt="Apple" />
              <p class="text-[#131645] text-2xl font-bold">Apple</p>
            </div>
            <div class="flex justify-start items-center gap-x-5">
              <img
                class="w-14"
                src="images/sweet-potato.png"
                alt="Sweet Potato"
              />
              <p class="text-[#131645] text-2xl font-bold">Sweet Potato</p>
            </div>
            <div class="flex justify-start items-center gap-x-5">
              <img class="w-14" src="images/sunflower.png" alt="Sunflower" />
              <p class="text-[#131645] text-2xl font-bold">Sunflower</p>
            </div>
            <div class="flex justify-start items-center gap-x-5">
              <img class="w-14" src="images/tumeric.png" alt="Turmeric" />
              <p class="text-[#131645] text-2xl font-bold">Turmeric</p>
            </div>
            <div class="flex justify-start items-center gap-x-5">
              <img class="w-14" src="images/blueberry.png" alt="Blueberry" />
              <p class="text-[#131645] text-2xl font-bold">Blueberry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
