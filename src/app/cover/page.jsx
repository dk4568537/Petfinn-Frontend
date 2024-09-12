"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Page = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store email in local storage
    localStorage.setItem("emailForPasswordReset", email);
    // Log email to the console
    console.log("Email for Password Reset:", email);
    // Clear input field
    setEmail("");
  };

  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="container max-w-xl mx-auto p-8">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/">
            <h1 className="text-5xl font-serif text-[#161346] font-bold">
              Finn
            </h1>
          </Link>
          <h2 className="text-5xl font-serif text-[#161346] text-center font-bold">
            Forgot Your Password?
          </h2>
          <p className="text-center font-medium text-lg text-[#161346]">
            No problem, we'll send you an email to reset it.
          </p>
        </div>
        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-[#161346] font-semibold">
              EMAIL
            </label>
            <input
              id="email"
              className="p-4 bg-gray-300 border rounded-lg w-full"
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="flex items-center justify-center gap-x-3 border-2 border-[#161346] rounded-full hover:text-[#161346] hover:bg-gray-50 bg-[#161346] py-4 px-10 text-white"
              type="submit"
            >
              Submit
              <FaArrowRightLong />
            </button>
          </div>
          <div className="text-center">
            <button
              onClick={() => router.back()}
              className="pt-4 text-[#ff7f00] font-bold text-lg"
            >
              {" "}
              Nevermind, go back.
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
