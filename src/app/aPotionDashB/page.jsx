"use client"
import React, { useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/boneBrothBrush"; // Simulate the page transition
    }, 1000); // Adjust the delay as needed
  };

  return (
    <div className="object-cover opacity-1 flex justify-center items-center">
      {loading ? (
        <div className="loader h-screen w-full flex justify-center items-center"><h1 className=" text-gray-500 text-2xl font-bold">Loading...</h1></div>
      ) : (
        <img
          className="h-full w-[100%] cursor-pointer"
          src="/images/dashBoard.png"
          alt=""
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default Page;
