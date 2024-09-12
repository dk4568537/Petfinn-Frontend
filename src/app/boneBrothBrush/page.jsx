"use client";
import React, { useState } from "react";
import { FaStar, FaCheck } from "react-icons/fa";
import SlickCarousel from "../../carousel/index";
import Navbar from "@/app/navbar/page";
import Forbies from "@/app/forbies/page";
import KeepFido from "@/app/keepFido/page";
import Quality from "@/app/quality-edit/page";
import LovedByPups from "@/app/loved-By-Pups/page";
import HowToUse from "@/app/how-to-use/page";
import BoneBrothPlus from "@/app/bon-broth-plus/page";
import NASCQuality from "@/app/NASC-Quality/page";
import WorthBarkingAbout from "@/app/Worth-Barking-About/page";
import Faqs from "@/app/faqs/page";
import { useDispatch } from "react-redux";
import { Addcart } from "@/webSystem";
import HappinessGuarantee from "@/app/HappinessGuarantee/page";
import ShopBundless from "@/app/Shop-Bundless/page";
import Happiness from "@/app/Happniess/page";
import Footer from "@/app/footer/page";

const Page = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState("");
  const [pack, setPack] = useState("");
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setPrice(value === "one-time" ? "$32.00" : "$64.00");
    setPack(""); // Reset pack selection when radio changes
    setIsRadioSelected(true);
  };

  const handlePackChange = (packType) => {
    setPack(packType);
  };

  return (
    <>
      <Navbar />
      <div className=" bg-slate-50">
        <div className="container mx-auto p-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <SlickCarousel>
                {[
                  "producttin-2.png",
                  "2_Finn_Bone_Broth.jpg",
                  "3_Finn_Bone_Broth_Listing_Images_Render_Right.jpg",
                  "4_Finn_Bone_Broth_Listing_Images_Benefits.jpg",
                  "5_Finn_Bone_Broth_Listing_Images_Ingredients.jpg",
                  "7_Finn_Bone_Broth_Listing_Images_Serving_Guide.jpg",
                  "9_Finn_Bone_Broth_Listing_Images_Directions.jpg",
                ].map((src, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <img
                      className="w-3/4"
                      src={`/images/${src}`}
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                ))}
              </SlickCarousel>
            </div>
            <div className=" text-[#1e195c]">
              <h1 className="text-4xl font-semibold pb-2">Bone Broth Plus</h1>
              <h3 className="text-lg font-semibold">Superfood meal topper</h3>
              <div className="flex items-center gap-7 my-4">
                <ul className="flex text-orange-500 gap-1 text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </ul>
                <h3>10 PREVIEW</h3>
              </div>
              <p className="my-4 font-semibold">
                Keep your dog’s mobility in peak condition with our tasty
                superfood topper – packed with collagen & amino acids to promote
                joint health and long-term vitality.
              </p>
              <div className="flex items-center gap-4 my-4">
                <input
                  type="radio"
                  id="one-time"
                  name="purchase"
                  value="one-time"
                  onChange={handleRadioChange}
                />
                <label htmlFor="one-time" className="text-md">
                  One-Time Purchase
                </label>
                {isRadioSelected && <h3>{price}</h3>}
              </div>

              {isRadioSelected && (
                <div className="flex gap-4 my-4">
                  {["1-Pack", "2-Pack"].map((packType) => (
                    <button
                      key={packType}
                      className={`py-2 px-5 rounded-md border ${
                        pack === packType ? "border-black" : "border-gray-300"
                      }`}
                      onClick={() => handlePackChange(packType)}
                    >
                      {packType}
                    </button>
                  ))}
                </div>
              )}
              <div className="mb-4 bg-gray-300 p-5 rounded-md">
                <div
                  className="flex justify-between flex-wrap gap-3 items-center"
                  onClick={() => handleToggle(0)}
                >
                  <div className="flex gap-4">
                    <button>
                      <input type="radio" className="text-xl" />
                    </button>
                    <h2 className="text-xl font-semibold hover:underline">
                      Subscribe & Save 15%
                    </h2>
                  </div>
                  <p className="text-xl">$27.20</p>
                </div>
                {openIndex === 0 && (
                  <div className="relative mt-4">
                    <button
                      onClick={handleDropdownToggle}
                      className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/2 px-16 py-2.5 text-center inline-flex justify-between items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Dropdown hover
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute bottom-0 z-10 bg-white divide-y divide-gray-100 shadow w-full border border-black sm:w-[48%] dark:bg-gray-700">
                        <ul className=" bg-gray-200 text-sm  text-gray-700 dark:text-gray-200">
                          {[
                            "Mini dog(1-25 Ibs)",
                            "Small dog(26-50 Ibs)",
                            "Medium dog(51-75 Ibs)",
                            "Large dog(76+ Ibs)",
                          ].map((dogType, index) => (
                            <li
                              key={index}
                              className="hover:bg-white flex border-black border-b pb-4 justify-center items-center px-4 gap-6"
                            >
                              <img
                                className="w-6"
                                src={`/images/minni-dog.svg`}
                                alt=""
                              />
                              <p>
                                {dogType}
                                <br />
                                ships every 30 Days
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                <p className="flex items-center gap-3 mt-4">
                  <FaCheck />
                  Change or cancel anything
                </p>
              </div>
              <button
                onClick={() => dispatch(Addcart(Addcart))}
                className=" py-3 px-8 bg-[#de2910] hover:scale-105 text-white rounded-full"
              >
                $27.20 . Buy Now →
              </button>
            </div>
          </div>
          {/* <Invoice/> */}
        </div>
      </div>
      <Forbies />
      <KeepFido />
      <Quality />
      <LovedByPups />
      <HowToUse />
      <BoneBrothPlus />
      <NASCQuality />
      <WorthBarkingAbout />
      <Faqs />
      <HappinessGuarantee />
      <ShopBundless />
      <Happiness />
      <Footer />
    </>
  );
};

export default Page;
