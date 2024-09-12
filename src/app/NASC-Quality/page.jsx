import React from "react";

const page = () => {
  return (
    <div className=" bg-white px-3">
      <div className=" container mx-auto">
        <div className=" text-center text-[#161345] font-serif">
          <h1 className=" md:text-8xl py-5 font-semibold texcen]">
            The NASC <br /> Quality Seal
          </h1>
          <p className=" text-center justify-center my-3 text-xs sm:text-4xl">
            Certified through a comprehensive 3rd party audit and ongoing <br />{" "}
            compliance with rigorous NASC quality standards.
          </p>
        </div>
        <div className=" mt-8 w-full flex justify-center flex-col gap-5 items-center">
          <img src="/images/nasc-desktop.png" alt="" />
          <h1 className=" sm:text-3xl text-center text-[#161345] font-semibold">
            The NASC Quality Seal identifies products from companies that are{" "}
            <br /> committed to quality, vigilance, and continuous improvement.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
