import React from "react";

const page = () => {
  return (
    <div className=" bg-[#ffcfdb] px-3">
      <div className=" container mx-auto pb-4 md:pb-10">
        <div className=" py-4 md:py-10">
          <h1 className=" text-center text-[#161345] text-xl sm:text-5xl md:text-9xl font-bold">
            Committed to <br /> Making a Difference
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 my-3 md:my-8">
          <div className=" flex justify-center items-center pb-3 sm:pb-0">
            <img src="/images/foster-dogs-images.png" alt="" />
          </div>
          <div className=" w-full gap-5 text-xs sm:text-2xl text-[#161345] font-semibold flex justify-center items-center flex-col">
            <p>
              {" "}
              At Finn, we really, really love dogs. And we want to do everything
              that we can to keep our four legged friends happy and healthy.
            </p>
            <p className=" break-keep">
              So we give back — by partnering with local animal shelters, and
              donating a portion of our proceeds to help with their rescue
              efforts. And by giving shelters lots of Finn supplements — to help
              keep their doggos healthy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
