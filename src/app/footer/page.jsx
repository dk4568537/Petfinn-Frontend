import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the email in local storage
    localStorage.setItem("subscriberEmail", email);

    // Log the submitted email to the console
    console.log("Submitted email:", email);

    // Set the success message
    setMessage("Subscription successful! Check your email for confirmation.");
    setEmail("");
  };

  return (
    <div className="bg-[#161345] text-white p-8 lg:sticky z-10 ">
      <div className="container mx-auto pt-0.5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className=" flex flex-col gap-5 text-base md:text-lg lg:text-5xl">
              <Link href="/">
                <p className="hover:text-orange-500 text-gray-400 cursor-pointer">
                  Home
                </p>
              </Link>
              <Link href="/product">
                <p className="hover:text-orange-500 text-gray-400 cursor-pointer">
                  Shop
                </p>
              </Link>
              <Link href="/about">
                <p className="hover:text-orange-500 text-gray-400 cursor-pointer">
                  About
                </p>
              </Link>
              <Link href="/consultion">
                <p className="hover:text-orange-500 text-gray-400 cursor-pointer">
                  Quiz
                </p>
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Instagram</h3>
              <ul className=" flex flex-col gap-4">
                <Link href="/login">
                  <li className="hover:text-orange-500 text-gray-400 cursor-pointer">
                    My Account
                  </li>
                </Link>
                <Link href="/faqs">
                  <li className="hover:text-orange-500 text-gray-400 cursor-pointer">
                    FAQs
                  </li>
                </Link>
                <Link href="/affiliate">
                  <li className="hover:text-orange-500 text-gray-400 cursor-pointer">
                    Affiliate Program
                  </li>
                </Link>
                <Link href="/career">
                  <li className="hover:text-orange-500 text-gray-400 cursor-pointer">
                    Careers
                  </li>
                </Link>
                <Link href="mailto:someone@example.com">
                  <li className="hover:text-orange-500 text-gray-400 cursor-pointer">
                    Press
                  </li>
                </Link>
                <Link href="/Terms">
                  <li className="hover:text-orange-500 text-gray-400 cursor-pointer">
                    Terms of Use
                  </li>
                </Link>
                <Link href="/PrivacyPolicy">
                  <li className="hover:text-orange-500 text-gray-400 cursor-pointer">
                    Privacy
                  </li>
                </Link>
                <Link href="/Accessibility">
                  <li className="hover:text-orange-500 text-gray-400 cursor-pointer">
                    Accessibility
                  </li>
                </Link>
                <Link href="https://finn-support.gorgias.help/en-US">
                  <li className="hover:text-orange-500 text-gray-400 cursor-pointer">
                    Help Center
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="space-y-6 row-span-2 col-span-2 flex flex-col justify-center items-start">
            <h1 className="text-2xl font-bold">Join the pack</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full"
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 py-2 px-4 border-b-2 bg-[#161345] border-orange-500 text-white focus:outline-none"
                required
              />
              <button
                className="flex items-center gap-x-3 border hover:scale-110 rounded-full text-white py-3 px-6"
                type="submit"
              >
                Submit
                <FaArrowRightLong />
              </button>
            </form>
            {message && <p className="text-sm mt-2">{message}</p>}
            <img
              src="/images/logo-white-full.png"
              alt="Logo"
              className="w-full "
            />
            <div className="flex flex-col md:flex-row gap-16 text-sm">
              <div>
                <p>
                  Finn Wellness, LLC <br />
                  100 Crosby St., Ste. 506 <br />
                  New York, NY 10012
                </p>
              </div>
              <div>
                <p>© 2024 Finn Wellness</p>
              </div>
            </div>
            <p className="text-sm">
              Questions? Email us at:{" "}
              <a
                href="mailto:support@petfinn.com"
                className="hover:text-orange-500 underline"
              >
                support@petfinn.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
