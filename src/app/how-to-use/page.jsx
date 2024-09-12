"use client"
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Page = () => {
  const [hoverData, setHoverData] = useState({
    image: "/images/outer.png",
    text: "Our branded kraft shipping boxes are made from 100% recycled material and should be recycled following your local “Corrugated Cardboard” recycling rules."
  });

  const items = [
    { id: 1, title: "Broth", image: "/images/Screenshot_12.png", text: "Max width warm water to create a nourishing broth, enhansing both the flover of your god's food & their health-span" },
    { id: 2, title: "Topper", image: "/images/Screenshot_1.png", text: "Sprinkle over food for a protain-powered boost to fual your dog's active lifeStyle" },
    { id: 3, title: "Baked Treat", image: "/images/Screenshot_14.png", text: "Back bone broth in to tasty treats but a spring in your doggo's step " },
    { id: 4, title: "BrothPupsicle", image: "/images/Pupsicle.png", text: "Frexe bone broth into pupsicles that energize your pup while keeping them cool" },
    { id: 5, title: "Lick mat", image: "/images/lick-mat.png", text: "promote Mobilite & mental stimulation by serving bone broth on an enrichment feeder" },
  ];

  return (
    <div className="flex justify-center items-center flex-col bg-[#ff9e8c] text-white pb-5 px-3">
      <div className="flex justify-center items-center flex-col gap-8">
        <h1 className="text-center font-semibold text-3xl md:text-6xl lg:text-9xl">
          How To USE
        </h1>
        <h1 className="text-center font-semibold text-xs sm:text-lg md::text-xl">
          Reduce your pup's carbon paw print: Tips and <br /> tricks for
          recycling our packaging!
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 container my-10">
        <div className="">
          <ul className="flex justify-between flex-col gap-4 md:gap-10">
            {items.map(item => (
              <li 
                key={item.id}
                className=" text-xs md:text-3xl text-center font-bold flex items-center hover:text-[#161345] cursor-pointer relative group"
                onMouseEnter={() => setHoverData({ image: item.image, text: item.text })}
              >
                <FaArrowRight className="mr-2 scale-105 opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 justify-center items-center">
          <img className="w-full" src={hoverData.image} alt="hovered item" />
          <p className=" text-xs sm:text-2xl mb-5 mt-2 text-center">
            {hoverData.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
