"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem("formData", JSON.stringify(formData));
    // Log form data to console
    console.log(formData);
    // Clear form fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div className="bg-[#ff7f00] pb-20 flex justify-between items-center flex-col">
      <div className="h-screen container px-3 md:px-10">
        <button
          onClick={() => router.back()}
          className="bg-[#ff7f00] mt-14 hover:font-extrabold hover:scale-100"
        >
          ￩ Back
        </button>
        <h1 className=" text-center my-10 -mt-8 text-[#161345] text-6xl font-extrabold">
          finn
        </h1>
        <div className="bg-white rounded-2xl pb-10 flex justify-center text-[#161345] items-center flex-col">
          <h1 className="md:text-5xl font-semibold my-5 md:my-16 text-center opacity-95">
            Let’s get to know you! <br /> What’s your name and email?
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-wrap gap-3 mb-5 md:mb-12"
          >
            <input
              className="border-b border-[#161345] p-2"
              type="text"
              name="firstName"
              placeholder="Your First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              className="border-b border-[#161345] p-2"
              type="text"
              name="lastName"
              placeholder="Your Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              className="border-b border-[#161345] p-2"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="hover:scale-105 px-5 py-3 border rounded-full text-white bg-[#161345] border-[#161345]"
            >
              Next →
            </button>
          </form>
        </div>
        <div>
          <Link href="/">
            <button className="bg-[#ff7f00] my-4 md:my-10 hover:font-extrabold hover:scale-100">
              ￩ HOME
            </button>
          </Link>
          <ul className="flex flex-wrap gap-2 justify-center items-center md:-mt-16">
            <li>Profile_____________</li>
            <li>Breed_____________</li>
            <li>Lifestyle_____________</li>
            <li>Result</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
