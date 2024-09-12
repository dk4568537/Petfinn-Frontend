import React from "react";
import { Bounce, Slide } from "react-awesome-reveal";

const page = () => {
  return (
    <div className="bg-[#60c4bf] py-10 text-[#161345] lg:py-20">
      <div className=" lg:py-10 relative flex justify-center items-center flex-col">
        <div className=" flex justify-center items-center px-5 pb-20">
          <img
            className=" w-full h-full lg:h-[500px]"
            src="/images/finn-way.jpg"
            alt=""
          />
        </div>
        <div className=" absolute -top-7 md:-top-10 lg:-top-11">
          <Slide>
            <h1 className="text-center text-4xl md:text-6xl lg:text-9xl">
              The Funn way
            </h1>
          </Slide>
        </div>
        <div className="font-serif  grid grid-cols-1 md:grid-cols-2 w-full lg:w-[950px] gap-10 px-3">
          <Bounce>
            <div>
              <h1 className=" text-3xl lg:text-7xl font-semibold pb-5 lg:pb-10">
                Fresh Approach
              </h1>
              <p className=" w-full lg:w-[445px] md:text-2xl">
                Finding a pet supplement that ticks off all the right boxes is
                harder than teaching your dog to skateboard. Or play the piano.
                Or do your taxes. Finn measures up by combining trusted research
                with modern nutrition to create a standout supplement in today's
                confusing market.
              </p>
            </div>
            <div>
              <h1 className=" text-3xl lg:text-7xl font-semibold pb-5 lg:pb-10">
                Better Ingredients
              </h1>
              <p className="w-full lg:w-[450px] md:text-2xl">
                A supplement is only as good as the stuff that goes into it. We
                take a thoughtful approach to our modern product formulation and
                focus on using thoroughly vetted ingredients while steering
                clear of artificial additives and unnecessary fillers.
              </p>
            </div>
          </Bounce>
        </div>
      </div>
    </div>
  );
};

export default page;
