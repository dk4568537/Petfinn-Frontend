import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 pb-10 flex-col">
      <div className="flex justify-center items-center text-center flex-col gap-5 md:gap-10">
        <h1 className="pt-5 md:pt-10 text-4xl md:text-6xl lg:text-9xl font-semibold">
          Other ways <br />
          to use your tins
        </h1>
        <p className="text-xs md:text-xl pb-5 md:pb-10">
          Don't let our tins go to waste! Get creative with <br /> them. The
          possibilities are endless, so let your <br /> imagination run wild!
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center mt-5 container gap-5 md:gap-5">
        <div className="flex justify-center flex-col items-center">
          <img className="w-full max-w-xs md:w-[350px]" src="/images/candle.png" alt="Candle Holder" />
          <h1 className="mt-5 text-2xl md:text-5xl text-[#161345] text-center">
            Candle <br /> Holder
          </h1>
        </div>
        <div className="flex justify-center flex-col items-center">
          <img className="w-full max-w-xs md:w-[350px]" src="/images/plant-pot.png" alt="Plant Pot" />
          <h1 className="mt-5 md:mt-16 text-2xl md:text-5xl text-[#161345] text-center">Plant Pot</h1>
        </div>
        <div className="flex justify-center flex-col items-center">
          <img className="w-full max-w-xs md:w-[350px]" src="/images/storage.png" alt="Storage & Organization" />
          <h1 className="mt-5 text-2xl md:text-5xl text-[#161345] text-center">
            Storage & <br /> Organization
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
