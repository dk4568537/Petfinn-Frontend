import React, { useEffect, useState } from "react";

const Page = () => {
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "outer") {
            setHighlightIndex(0);
          } else if (entry.target.id === "retail") {
            setHighlightIndex(1);
          } else if (entry.target.id === "tinret") {
            setHighlightIndex(2);
          } else if (entry.target.id === "plastic") {
            setHighlightIndex(3);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const targets = document.querySelectorAll("img");
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col bg-gray-50 pb-5">
      <div className="flex justify-center items-center flex-col gap-8">
        <h1 className="text-center font-semibold text-3xl md:text-6xl lg:text-9xl">
          Packaging <br /> Recycling Guide
        </h1>
        <h1 className="text-center font-semibold lg:text-xl">
          Reduce your pup's carbon paw print: Tips and <br /> tricks for
          recycling our packaging!
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 container mt-10">
        <div className="">
          <ul className=" flex justify-between flex-col gap-10">
            <li
              className={`text-left text-6xl ${
                highlightIndex === 0
                  ? "text-[#161345] cursor-pointer font-bold"
                  : "text-gray-400"
              }`}
            >
              {highlightIndex === 0
                ? "→ Outer Shipping Boxes"
                : "Outer Shipping Boxes"}
            </li>
            <li
              className={`text-left text-6xl ${
                highlightIndex === 1
                  ? "text-[#161345] cursor-pointer font-bold"
                  : "text-gray-400"
              }`}
            >
              {highlightIndex === 1
                ? "→ Retail Boxes & Information Cards"
                : "Retail Boxes & Information Cards"}
            </li>
            <li
              className={`text-left text-6xl ${
                highlightIndex === 2
                  ? "text-[#161345] cursor-pointer font-bold"
                  : "text-gray-400"
              }`}
            >
              {highlightIndex === 2 ? "→ Tins" : "Tins"}
            </li>
            <li
              className={`text-left text-6xl ${
                highlightIndex === 3
                  ? "text-[#161345] cursor-pointer font-bold"
                  : "text-gray-400"
              }`}
            >
              {highlightIndex === 3 ? "→ Tamper Seals" : "Tamper Seals"}
            </li>
          </ul>
        </div>
        <div className="w-full h-screen overflow-y-scroll scroll-my-0">
          <img id="outer" src="/images/outer.png" alt="" />
          <p className="mb-5 mt-2">
            Our branded kraft shipping boxes are made from 100% recycled
            material and should be recycled following your local “Corrugated
            Cardboard” recycling rules.
          </p>
          <img id="retail" src="/images/retail.png" alt="" />
          <p className="mb-5 mt-2">
            These are made from paper and should be recycled following your
            local “Mixed Paper” recycling rules.
          </p>
          <img id="tinret" src="/images/tinret.png" alt="" />
          <p className="mb-5 mt-2">
            Our Finn tins are made from tin-plated steel and are recyclable into
            perpetuity. Please recycle following your local ”Steel Can”
            recycling rules.
          </p>
          <img id="plastic" src="/images/plastic.png" alt="" />
          <p className="mb-5 mt-2">
            Unfortunately, these are not currently recyclable, please dispose of
            them in <br /> your trash.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
