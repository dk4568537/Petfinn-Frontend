"use client";
import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { MdOutlineHorizontalRule } from "react-icons/md";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { title } from "process";

const Page = () => {
  // const checkout = useSelector((state) => state.user.carts);

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     firstName: "",
  //     lastName: "",
  //     address: "",
  //     apartment: "",
  //     city: "",
  //     state: "",
  //     zip: "",
  //     phone: "",
  //     newsletter: false,
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string().email("Invalid email address").required("Required"),
  //     firstName: Yup.string().required("Required"),
  //     lastName: Yup.string().required("Required"),
  //     address: Yup.string().required("Required"),
  //     city: Yup.string().required("Required"),
  //     state: Yup.string().required("Required"),
  //     zip: Yup.string().required("Required"),
  //     phone: Yup.string().required("Required"),
  //   }),
  //   onSubmit: (values, { resetForm }) => {
  //     console.log("Form data", values);
  //     resetForm();
  //   },
  // });
 
    const checkout = useSelector((state) => state.user.carts);
  
    const formik = useFormik({
      initialValues: {
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        newsletter: false,
      },
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        state: Yup.string().required("Required"),
        zip: Yup.string().required("Required"),
        phone: Yup.string().required("Required"),
      }),
      onSubmit: async (values, { resetForm }) => {
        try {
          const response = await fetch('/api/events', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...values, total }),
          });
  
          const data = await response.json();
  
          if (response.ok) {
            // Proceed to payment using the client secret
            const { clientSecret } = data;
            // Use Stripe's library to handle payment (omitted for brevity)
          } else {
            console.error('Error:', data.error);
          }
        } catch (error) {
          console.error('Error:', error);
        }
  
        resetForm();
      },
    });
  
    // Rest of your code remains the same

  
  // Calculate subtotal
  const subtotal = checkout
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  // Mock shipping and total values
  const shipping = "Calculated at next step";
  const total = parseFloat(subtotal) + 1; // Example shipping cost

  return (
    <div className="p-4 bg-white">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-4xl font-serif font-bold">Finn</h1>
            <ul className="flex items-center gap-2">
              <Link href='/'><li className="flex items-center gap-1">
                Cart <VscChevronRight />
              </li></Link>
              <li className="flex items-center gap-1">
                Information
                <VscChevronRight />
              </li>
              <li className="flex items-center gap-1">
                Shipping
                <VscChevronRight />
              </li>
              <li className="flex items-center gap-1">
                Payment
                <VscChevronRight />
              </li>
            </ul>
            <p className="text-lg font-semibold text-center">
              Express Checkout
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href='/CheckoutPayroll'><button className="text-white bg-blue-500 rounded-md px-14 py-3 text-xl font-bold flex items-center justify-center">
                Shop{" "}
                <span className="ml-1 p-1 rounded-md text-base bg-white text-blue-500">
                  Pay
                </span>
              </button></Link>
              <Link href='https://www.paypal.com/'><button className="text-[#291f91] bg-yellow-500 rounded-md font-bold px-16 py-3 text-xl flex items-center justify-center">
                Pay <span className="text-blue-500 ml-1">Pal</span>
              </button></Link>
              <Link href='https://www.pay.google.com/'><button className="text-white bg-black rounded-md px-20 py-3 text-xl font-bold flex items-center justify-center">
                G<span className="text-white">Pay</span>
              </button></Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-xs">
                By continuing with your payment, you agree to the future charges
                listed on this page and the cancellation policy.
              </p>
              <div className="flex items-center justify-center gap-2">
                <MdOutlineHorizontalRule />
                <p>OR</p>
                <MdOutlineHorizontalRule />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h2>Contact</h2>
              <Link href="/login">
                <p className="underline cursor-pointer hover:text-blue-500">
                  Login
                </p>
              </Link>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="w-full border p-2 rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
                <p className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    name="newsletter"
                    onChange={formik.handleChange}
                    checked={formik.values.newsletter}
                    className="border p-2 rounded-md"
                  />
                  <label>Email me with news and offers</label>
                </p>
              </div>
              <div className="w-full mt-4">
                <select
                  name="country"
                  className="w-full border p-2 rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                >
                  <option>United States</option>
                  <option>States-1</option>
                  <option>States-2</option>
                </select>
              </div>
              <div className="flex gap-2 mt-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="w-1/2 border p-2 rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.firstName}
                  </div>
                ) : null}
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="w-1/2 border p-2 rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
              <input
                className="w-full mt-4 border p-2 rounded-md"
                type="text"
                name="address"
                placeholder="Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.address}
                </div>
              ) : null}
              <input
                className="w-full mt-4 border p-2 rounded-md"
                type="text"
                name="apartment"
                placeholder="Apartment, suite, etc. (optional)"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apartment}
              />
              <div className="flex gap-2 mt-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="w-1/3 border p-2 rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.city}
                  </div>
                ) : null}
                <select
                  name="state"
                  className="w-1/3 border p-2 rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                >
                  <option>State</option>
                  <option>State-1</option>
                  <option>State-2</option>
                  {/* Add more options as needed */}
                </select>
                {formik.touched.state && formik.errors.state ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.state}
                  </div>
                ) : null}
                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP code"
                  className="w-1/3 border p-2 rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zip}
                />
                {formik.touched.zip && formik.errors.zip ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.zip}
                  </div>
                ) : null}
              </div>
              <input
                className="w-full mt-4 border p-2 rounded-md"
                type="text"
                name="phone"
                placeholder="Phone no"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.phone}
                </div>
              ) : null}
              <div className="flex justify-between items-center mt-4">
                <p className="underline">Return to cart</p>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-md"
                >
                  Continue to shipping
                </button>
              </div>
            </form>
            <div className="flex text-sm flex-wrap gap-5 mt-4">
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
          <div className="">
            {checkout.map(({product}) => (
              <div
                key={product.id}
                className="flex justify-between items-center mb-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className=" relative w-32 h-32"
                />
                <div>
                  <h3>{product.title}</h3>
                  <p className="text-gray-400">{product.delivery}</p>
                </div>
                <p>{product.price}</p>
              </div>
            ))}
            <div className="flex gap-3 mt-4">
              <input
                className="border rounded-md w-full px-2"
                type="text"
                placeholder="Discount code or gift card"
              />
              <button className="rounded-md border p-3">Apply</button>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p>Subtotal</p>
              <p>${(subtotal)}</p>
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
            <div className=" border-t pt-5 flex justify-between items-center mt-2">
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
