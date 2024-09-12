import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter()
  const images = [
    "/images/icon-1.png",
    "/images/icon-2.png",
    "/images/icon-3.png",
    "/images/icon-4.png",
    "/images/icon-5.png",
    "/images/icon-6.png",
  ];

  const imageDescriptions = [
    "Absolutely free to join",
    "Earn commission on every valid sale you drive",
    "Stay updated on upcoming promotions",
    "Exclusive affiliate offers",
    "Verified 3rd party tracking and payment by Impact Radius",
    "Hassle free - we handle orders, shipping and payments",
  ];

  return (
    <div className="bg-[#ff7f00] text-[#161345]">
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotate-infinite {
          animation: rotate 5s linear infinite;
        }
      `}</style>
      <div className="py-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
          <h1 className="text-4xl md:text-6xl text-center font-semibold">
            Benefits of the Program
          </h1>
          <img
            src="/images/affiliate-badge.png"
            alt="Affiliate Badge"
            className="rounded-full rotate-infinite"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 pt-10">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col gap-4 md:gap-8"
            >
              <img
                src={src}
                alt={`Icon ${index + 1}`}
                className="rounded-full"
              />
              <p className="font-semibold text-center">
                {imageDescriptions[index]}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-10">
          <button onClick={()=>router.back()} className="hover:scale-105 w-full md:w-52 py-4 rounded-full bg-[#161345] text-white">
            Join Now →
          </button>
          <p className="text-lg mt-6 text-center">
            Questions about the program? <br />
            Email us at <span className="font-bold">affiliate@petfinn.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
