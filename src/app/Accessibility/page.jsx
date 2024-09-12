"use client";
import React from "react";
import Navbar from "@/app/navbar/page";
import Footer from "@/app/footer/page";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <div className=" font-serif">
        <div>
          <h1 className=" text-[#161345] py-3 sm:pt-8 font-serif text-center text-2xl md:text-8xl font-bold">
            Our Commitment <br /> to Accessibility
          </h1>
          <img src="/images/AssebilityImgCover.jpg" alt="" />
        </div>
        <div className=" container mx-auto pb-10 flex flex-col justify-center items-center text-[#161345]">
          <div className=" w-full lg:w-[85%]">
            <p className=" text-2xl py-7">
              Finn is committed to providing a website that is accessible and
              navigable to all users. We actively work to assess and increase
              the accessibility and usability of our website, and follow the
              guidelines of the Web Accessibility Initiative. The Web
              Accessibility Initiative guidelines help us understand how we can
              make our web content more accessible to individuals with
              disabilities.
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" text-3xl font-bold py-3">Our Ongoing Efforts</h2>
          </div>
          <div className=" w-full lg:w-[85%]">
            <p className=" text-2xl py-7">
              We regularly review our site in comparison to these guidelines
              using recognized accessibility evaluation tools. While we strive
              to adhere to the accepted guidelines and standards for
              accessibility and usability, it is not always possible to do so in
              all areas of the website at all times. If you are having
              difficulty viewing or navigating the content on this website, or
              notice any content, features, or functionality that you believe is
              not fully accessible to people with disabilities, please let us
              know. If you have any suggestions as to how we can further improve
              the accessibility, please let us know.
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" text-3xl font-bold py-3">Feedback</h2>
          </div>
          <div className=" w-full lg:w-[85%]">
            <p className=" text-2xl py-7">
              We welcome your feedback. We take all feedback seriously and will
              consider it as we evaluate ways to accommodate all of our
              customers and our overall accessibility policies. We have several
              ways that you can share your feedback and overall experience with
              the accessibility of our website:
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <ul className=" flex flex-col gap-2 text-2xl">
              <li>
                Phone:{" "}
                <Link href="tel:+023043107562">
                  <span className=" font-sans hover:text-orange-500 hover:font-bold">
                    (92) 304-310756-2
                  </span>
                </Link>
              </li>
              <li>
                Email:{" "}
                <Link href="mailto:someone@example.com">
                  <span className=" hover:text-orange-500 hover:font-bold">
                    support@petfinn.com
                  </span>
                </Link>
              </li>
              <li>
                Social:{" "}
                <Link href="https://www.instagram.com/petfinn/">
                  <span className=" hover:text-orange-500 hover:font-bold">
                    @petfinn
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
