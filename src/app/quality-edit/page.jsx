import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center bg-[#161345] text-white px-3">
      <div className=" container mx-auto">
       <div className=" flex mt-10 justify-center items-center flex-col h-screen">
       <p className=" text-base md:text-5xl">
          We're loving this topper for our old dog – he's been  running up stairs
          again and has never enjoyed  mealtime more!
        </p>
        <img className=" w-full sm:w-80 mt-5" src="/images/quality.png" alt="" />
       </div>
      </div>
    </div>
  );
};

export default page;
