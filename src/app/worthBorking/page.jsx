import React from "react";
import { Slide } from "react-awesome-reveal";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "DESIREE B.",
    text: "We’ve been giving Ruthy the Hip & Joint supplement and she’s running up and down the stairs again! She’s 8 years old and I’ve never seen her this active!",
  },
  {
    id: 2,
    name: "DEV R.",
    text: "Duke always gets scared and jumpy whenever he knows we’re going in the car, but Finn’s Calming Aid chews have definitely helped to chill him out and we can finally get on the road again with ease! Finally!!",
  },
  {
    id: 3,
    name: "LINDSEY W.",
    text: "Knox and I take our supplements every day together! I give him Multivitamin and Skin & Coat, and use them as treats as we try to train him at home!",
  },
  {
    id: 4,
    name: "CALEB P.",
    text: "I’ve been looking for chews to give to Nala without any nasty fillers or bad ingredients, and I’m so happy I found Finn! They show up at our doorstep every month, and she gobbles them down!",
  },
];

const Page = () => {
  return (
    <div className="relative flex flex-col items-center px-3 md:px-0 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-28 w-full max-w-screen">
        <div className="flex justify-center items-center">
          <img src="/images/worth-barking.jpg" alt="Dog supplement" className="w-full h-auto md:w-[1250px]" />
        </div>
        <div className="flex justify-center font-serif items-center flex-col pt-6 gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col gap-5 px-3 md:px-3 lg:-px-0">
              <div className="flex items-center gap-7">
                <ul className="flex text-orange-500 gap-2 text-2xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </ul>
                <h3>{review.name}</h3>
              </div>
              <p className="font-bold text-lg lg:text-base xl:text-xl xl:w-[620px]">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-10 md:top-12 w-full flex justify-center">
        <Slide><h1 className="text-center text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold">
          Worth Barking About
        </h1></Slide>
      </div>
    </div>
  );
};

export default Page;
