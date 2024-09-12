import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="text-white bg-red-600 min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-center py-5 text-4xl md:text-8xl font-bold">
          Happiness Guarantee
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3 pt-5">
          <div className="col-span-1 flex justify-center md:justify-start">
            <img className="rounded-3xl max-w-full h-auto" src="/images/happiness.png" alt="Happiness Guarantee" />
          </div>
          <div className="col-span-2 lg:pl-20 sm:px-5 md:px-0">
            <h3 className="text-3xl font-bold pb-8">Picky pup? No problem.</h3>
            <p className="text-2xl font-medium pb-6 md:max-w-xl border-b">
              We've got you covered with a 60 day money-back guarantee if Fido doesn't love their Finn.
            </p>
            <ul className="flex flex-col gap-5 text-lg pt-5">
              <li className="text-2xl font-bold">How We’re Different</li>
              <li>✔ Safety-First Manufacturing</li>
              <li>✔ Quality Ingredients</li>
              <li>✔ Tested & Approved</li>
              <li>✔ Maximum Benefits</li>
            </ul>
            <Link href="/boneBrothBrush">
              <button className="rounded-full bg-white text-red-500 py-3 px-4 sm:px-8 mt-5 hover:scale-105 font-semibold text-lg">
                Get Bone Broth Plus Now →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
