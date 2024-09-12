import React from "react";

const Page = () => {
  return (
    <div className="">
      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-color: #ff7f00;
          }
          25% {
            background-color: #00ff7f;
          }
          50% {
            background-color: #7f00ff;
          }
          75% {
            background-color: #ff007f;
          }
          100% {
            background-color: #ff7f00;
          }
        }

        .animated-bg {
          animation: gradientAnimation 10s infinite;
        }
      `}</style>
      <div className="h-96 py-10 flex justify-center animated-bg px-3">
        <div className="bg-white gap-5 rounded-[32px] text-[#161345] font-serif w-[850px] flex justify-center items-center flex-col">
          <h2 className="text-center sm:text-5xl font-medium">
            Don’t see the role that’s <br /> perfect for you?
          </h2>
          <p className="text-xs text-center md:text-2xl">
            We’re always looking to meet interesting people. Drop us a line at{" "}
            <br /> <span className="text-orange-500">hello@petfinn.com</span>{" "}
            and let us know how you can help!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
