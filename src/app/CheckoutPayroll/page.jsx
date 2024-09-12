"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaTag } from "react-icons/fa";
import { useSelector } from "react-redux";

const Page = () => {
  const checkout = useSelector((state) => state.user.carts);
  const [email, setEmail] = useState("");
  const [discount, setDiscount] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(""); // Clear the error when the user starts typing
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
    } else {
      // Handle form submission
      console.log("Email submitted:", email);
      console.log("Discount code submitted:", discount);
      setEmail(""); // Clear email input
      setDiscount(""); // Clear discount input
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const subtotal = checkout
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  // Mock shipping and total values
  const shipping = "Calculated at next step";
  const total = parseFloat(subtotal) + 1; // Example shipping cost

  return (
    <div className="bg-white">
      <style>
        {`
          @keyframes hanging {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(15deg); }
            50% { transform: rotate(-15deg); }
            75% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
          }

          .hanging-icon {
            animation: hanging 2s infinite;
          }
        `}
      </style>
      <div>
        <div className="flex justify-between items-center border-y py-4 px-14">
          <Link href="/">
            <h1 className="text-5xl font-serif font-bold">Finn</h1>
          </Link>
          <Link href="/product">
            <FaTag className="hanging-icon text-orange-500" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen container mx-auto bg-white">
          <div>
            <div className="gap-2 flex flex-col text-center border p-5 m-5">
              <h1 className="font-semibold text-xl">Sign in or Create an Account</h1>
              <p>Enter your Email to Sign In or create an Account</p>
              <form onSubmit={handleSubmit} className="flex-col flex gap-5 mt-5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`p-3 rounded-lg border ${error ? "border-red-500" : ""}`}
                  required
                />
                {error && <p className="text-red-500">{error}</p>}
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white pl-3 py-3 border rounded-lg mt-2"
                >
                  Continue with shop{" "}
                  <span className="px-1 bg-white rounded-md text-blue-700">
                    Pay
                  </span>
                </button>
              </form>
              <p className="text-lg pt-2">
                By using Shop Pay, you agree to{" "}
                <span className="text-blue-600">the terms of service</span> and{" "}
                <span className="text-blue-600">privacy policy.</span>
              </p>
              <div className="flex text-xs flex-wrap gap-5 mt-28">
                <Link href="#">
                  <p className="underline">Refund Policy</p>
                </Link>
                <Link href="#">
                  <p className="underline">Shipping Policy</p>
                </Link>
                <Link href="#">
                  <p className="underline">Privacy Policy</p>
                </Link>
                <Link href="#">
                  <p className="underline">Terms of Service</p>
                </Link>
                <Link href="#">
                  <p className="underline">Subscription Policy</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-l p-5">
            {checkout.map(({ product }) => (
              <div key={product.id} className="flex justify-between items-center mb-4">
                <img src={product.image} alt={product.name} className="relative w-32 h-32" />
                <div>
                  <h3>{product.title}</h3>
                  <p className="text-gray-400">{product.delivery}</p>
                </div>
                <p>{product.price}</p>
              </div>
            ))}
            <div className="flex gap-3 mt-4">
              <input
                id="discount"
                name="discount"
                className="border rounded-md w-full px-2"
                type="text"
                placeholder="Discount code or gift card"
                value={discount}
                onChange={handleDiscountChange}
              />
              <button onClick={handleSubmit} className="rounded-md border p-3">Apply</button>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <div className="text-gray-400 flex justify-between items-center mt-2">
              <p>Shipping</p>
              <p>{shipping}</p>
            </div>
            <div className="font-bold flex justify-between items-center mt-2">
              <p>Total</p>
              <p>
                <span className="text-gray-400">USD</span> ${total.toFixed(2)}
              </p>
            </div>
            <div className="border-t pt-5 flex justify-between items-center mt-2">
              <p>Recurring subtotal</p>
              <p>${subtotal} every 30 Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
