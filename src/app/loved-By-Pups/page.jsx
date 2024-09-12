import React from "react";
import { FaStar } from "react-icons/fa";

const page = () => {
  return (
    <div className=" bg-red-500 px-3">
      <div className=" container mx-auto">
        <div>
          <h1 className=" text-white font-semibold md:text-9xl text-center py-5 md:py-10">
            Loved by Pups
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-5 md:py-14">
          <div class="max-w-sm bg-white text-[#131645] rounded-3xl overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="/images/gracie-sunday.png"
              alt="Sunset in the mountains"
            />
            <div className=" flex justify-between py-4 px-6">
              <div>
                <h1 className=" font-extrabold">Gracie & Sunday</h1>
                <h3 className=" font-bold">The Shih Tzus</h3>
                <p className=" font-bold">
                  14 <span className=" font-normal text-xs">yrs old</span>11{" "}
                  <span className=" text-xs">Ibs</span>
                </p>
              </div>
              <div className=" flex flex-col gap-2">
                <div className=" flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <h1>1 tbsp/Day</h1>
                </div>
              </div>
            </div>
            <div className="px-6 py-2">
              <p className=" text-center text-base">
                It's only Been 2 Weeks,But i can alerdiy tell that My pup has
                her pep back! Since we started bone,Broth she's got ways more
                energy and is chasing her ball like a puppy again.
              </p>
            </div>
            <div className=" flex justify-end items-center px-6 py-3">
              <h1 className=" font-semibold text-xs">
                -- GRACE AND SUNDAE'S MOM
              </h1>
            </div>
          </div>
          <div class="max-w-sm bg-white text-[#131645] rounded-3xl overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="/images/maple.png"
              alt="Sunset in the mountains"
            />
            <div className=" flex justify-between py-4 px-6">
              <div>
                <h1 className=" font-extrabold">Maple</h1>
                <h3 className=" font-bold">The Husky Mix</h3>
                <p className=" font-bold">
                  8 <span className=" font-normal text-xs">yrs old</span> 57{" "}
                  <span className=" text-xs font-normal">Ibs</span>
                </p>
              </div>
              <div className=" flex flex-col gap-2">
                <div className=" flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <h1 className=" text-base font-semibold">2 tbsp per Day</h1>
                </div>
              </div>
            </div>
            <div class="px-6 py-2">
              <p class=" text-center text-base">
                My old girl absolutaly loves this. The extra collagen has really
                helped her joints. Her cot lookis shinier. Love the tin!
                packagign.
              </p>
            </div>
            <div className=" flex justify-end items-center px-6 py-3">
              <h1 className=" font-semibold text-xs">-- MAPLES MOM</h1>
            </div>
          </div>
          <div class="max-w-sm bg-white text-[#131645] rounded-3xl overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="/images/fig.png"
              alt="Sunset in the mountains"
            />
            <div className=" flex justify-between py-4 px-6">
              <div>
                <h1 className=" font-extrabold">Fig</h1>
                <h3 className=" font-bold">The Aussie</h3>
                <p className=" font-bold">
                  2 <span className=" font-normal text-xs">yrs old</span> 60{" "}
                  <span className=" text-xs font-normal">Ibs</span>
                </p>
              </div>
              <div className=" flex flex-col gap-2">
                <div className=" flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <h1 className=" font-semibold">2 tbsp per Day</h1>
                </div>
              </div>
            </div>
            <div class="px-6 py-2">
              <p class="  text-center text-base">
                Big absolutaly loved it. He makes sure to get every last drop
                from his bowl! He has been more active and feeling up to
                anything after having an Bon Broth.
              </p>
            </div>
            <div className=" flex justify-end items-center px-6 py-3">
              <h1 className=" font-semibold text-xs">-- FIG'S MOM</h1>
            </div>
          </div>
          <div class="max-w-sm bg-white text-[#131645] rounded-3xl overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="/images/moose.png"
              alt="Sunset in the mountains"
            />
            <div className=" flex justify-between py-4 px-6">
              <div>
                <h1 className=" font-extrabold">Moose</h1>
                <h3 className=" font-bold">The Toller</h3>
                <p className=" font-bold">
                  6 <span className=" font-normal text-xs">yrs old</span> 45{" "}
                  <span className=" text-xs font-normal">Ibs</span>
                </p>
              </div>
              <div className=" flex flex-col gap-2">
                <div className=" flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <h1>1.5 tbsp per Day</h1>
                </div>
              </div>
            </div>
            <div class="px-6 py-2">
              <p class=" text-center text-base">
                Can already tell we'll br using this every day! We've be using
                Broth as a broth with water, and just sprinkling it on his food.
                Either way, Moose loves it!
              </p>
            </div>
            <div className=" flex justify-end items-center px-6 py-3">
              <h1 className=" font-semibold text-xs">-- MOOSE MOM</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
