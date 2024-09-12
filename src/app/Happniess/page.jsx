import React from "react";

const page = () => {
  return (
    <div className=" flex justify-center items-center bg-[#f8fafc]">
      <div className=" grid grid-cols-1 bg-white md:grid-cols-6 gap-2 sm:gap-0 container mx-auto">
        <div className=" items-center justify-center flex p-12 border">
          <img src="/images/satisfaction.svg" alt="" />
        </div>
        <div className=" items-center justify-center flex p-12 border">
          <img src="/images/happiness2.svg" alt="" />
        </div>
        <div className=" items-center justify-center flex p-12 border">
          <img src="/images/madein.svg" alt="" />
        </div>
        <div className=" items-center justify-center flex p-12 border">
          <img src="/images/gmp.svg" alt="" />
        </div>
        <div className=" items-center justify-center flex p-12 border">
          <img className=" max-w-14" src="/images/grainfree.svg" alt="" />
        </div>
        <div className=" items-center justify-center flex p-12 border">
          <img src="/images/natural.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default page;
