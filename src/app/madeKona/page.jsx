import { Spinner } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

const page = ({ image }) => {
  const [Loading, setLoading] = useState(false);
  const hangleTake = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/Giveyour";
    }, 1000);
  };
  return (
    <div>
      <div className="md:relative lg:relative flex justify-between items-center flex-col">
        <div className="  object-cover opacity-1 flex justify-center items-center">
          <img className="  md:min-h-screen w-full" src={image} alt="" />
        </div>
        <div className=" md:absolute lg:absolute md:bottom-10 lg:bottom-10 justify-between grid grid-cols-1 md:grid-cols-2 gap-5 px-3 container">
          <div className=" flex justify-center items-center">
            <h1 className=" text-3xl md:text-7xl lg:text-9xl font-bold text-white">
              made for Kona
            </h1>
          </div>
          <div className=" flex justify-center items-center w-full lg:w-[450px] ml-0 lg:ml-12 flex-col rounded-lg gap-y-4 p-5 bg-white">
            <p className=" text-xl font-semibold text-[#161345]">
              Tell us a bit about your dog and get tailor- <br /> made
              supplement recommendations <br /> based on factors like age,
              breed, diet, and <br />
              history.
            </p>
            <button
              onClick={hangleTake}
              disabled={Loading}
              className="px-12 flex items-center justify-center md:px-24 lg:px-32 rounded-full py-4 font-bold bg-orange-500 text-[#161345] hover:bg-orange-600 transition-colors duration-200"
            >
              Take The Quiz →
              {Loading && (
                <Spinner
                  color="white"
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="green"
                  width="28px"
                  height="28px"
                  className="ml-2" // Add margin-left to separate the spinner from the text
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
