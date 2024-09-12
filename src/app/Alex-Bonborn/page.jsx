import React from "react";

const page = () => {
  return (
    <div className=" bg-[#ff7f00] px-3">
      <div className=" container mx-auto pb-5 md:pb-10">
        <div className=" py-3 sm:py-10">
          <h1 className=" text-center text-[#161345] text-xl sm:text-5xl md:text-9xl font-bold">
            Hi, I'm Alex, and this lady is Bonbon.
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:my-8">
          <div className=" flex justify-center items-center pb-3 sm:pb-0">
            <img src="/images/alex-and-bonbon.jpg" alt="" />
          </div>
          <div className=" w-full gap-5 text-xs sm:text-2xl text-[#161345] font-semibold flex justify-center items-center flex-col">
            <p>
              {" "}
              Originally, my partners and I founded a wellness company for
              humans.
            </p>
            <p className=" break-keep">
              I would come home every day from working to give people the
              healthiest, happiest lives possible, and be met at the door by the
              loving face of my best friend (who isn't getting any younger).
            </p>
            <p>
              {" "}
              I couldn't help but realize that BonBon deserved our help just as
              much as anyone. And so, Finn was born.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
