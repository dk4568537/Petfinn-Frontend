import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="bg-orange-500">
      <div className="container mx-auto ">
        <div className=" relative items-center justify-center w-full">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 p-4">
            <div className="col-span-1">
              <img src="images/p1.svg" alt="Image 1" />
            </div>
            <div className="col-span-2">
              <img src="/images/p2.svg" alt="Image 2" />
            </div>
          </div>
          <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-4 p-4 pb-0">
            <div>
              <img src="images/p3.svg" alt="Image 3" />
            </div>
            <div>
              <img src="/images/p4.svg" alt="Image 4" />
            </div>
            <div>
              <img src="/images/p5.svg" alt="Image 5" />
            </div>
            <div>
              <img src="/images/p6.svg" alt="Image 6" />
            </div>
          </div>
          <div className="bg-[#feedddce] absolute top-52 left-48 text-center rounded-3xl flex w-[850px] h-[350px] flex-col gap-8 py-10 mx-auto">
            <h2 className="text-2xl text-[#161345] font-semibold">
              Partnership opportunity? Reach out to <br />
              <Link href="mailto:someone@example.com">
                <span className="text-orange-500 hover:underline">
                  partner@petfinn.com
                </span>
              </Link>
              , we’d love to hear from you!
            </h2>
            <p className="text-2xl text-[#161345] font-semibold">
              Anything else? Hit us up at{" "}
              <Link href="mailto:someone@example.com">
                <span className="text-orange-500 hover:underline">
                  hello@petfinn.com
                </span>{" "}
              </Link>
              and we’ll <br /> be happy to help!
            </p>
            <div className="flex justify-center items-center">
              <Link href="mailto:someone@example.com">
                <button className="hover:scale-105 bg-[#221d67] font-semibold text-white py-3 px-8 rounded-full">
                  VIEW ALL →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
