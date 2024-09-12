"use client";
import Link from "next/link";
import { Disclosure, Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { VscChromeClose } from "react-icons/vsc";
import Carts from "@/carts";
import { useSelector } from "react-redux";
import {
  Button,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Menu,
  Img,
} from "@chakra-ui/react";
const Page = () => {
  const [isShop, setIsShop] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const quantity = useSelector((state) => state.user.carts);

  const handleShop = () => {
    setIsShop(!isShop);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCookiesLogout = () => {
    localStorage.clear();
    document.cookie.split(";").forEach((cookie) => {
      document.cookie =
        cookie.trim().split("=")[0] +
        "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    });
  };

  return (
    <div className="bg-slate-50 sticky z-10 top-0">
      <h1 className="uppercase text-center text-gray-100 py-0.5 hover:text-gray-500 font-bold text-md font-sans bg-[#161345]">
        Free shipping on all orders $40
      </h1>
      <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 flex-auto">
          <div className="max-w-screen flex items-center justify-between mx-auto px-3 py-2">
            <div className="flex items-center rtl:space-x-reverse">
              <button
                onClick={handleShop}
                aria-expanded={isShop ? "true" : "false"}
                className="hover:scale-95 rounded-full relative bg-[#161345] text-white font-bold px-7 py-1.5"
              >
                Shop
              </button>
              <div
                id="mega-menu-full-dropdown"
                className={`mt-1 absolute border-gray-200 shadow-sm top-20 left-0 ${
                  isShop ? "block" : "hidden"
                } bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600`}
              >
                <div className="gap-3 grid max-h-screen px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-1 md:grid-cols-7 md:px-6">
                  <div>
                    <Link
                      href="/bestSalers"
                      className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <h2 className="font-semibold hover:text-orange-500">
                        Best Sellers
                      </h2>
                    </Link>
                    <Link
                      href="/supplementProduct"
                      className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <h2 className="font-semibold hover:text-orange-500">
                        Supplements
                      </h2>
                    </Link>
                    <Link
                      href="/topperProduct"
                      className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <h2 className="font-semibold hover:text-orange-500">
                        Toppers
                      </h2>
                    </Link>
                    <Link
                      href="/bodyCareProduct"
                      className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <h2 className="font-semibold hover:text-orange-500">
                        Body Care
                      </h2>
                    </Link>
                    <Link
                      href="/BundlesProducts"
                      className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <h2 className="font-semibold hover:text-orange-500">
                        Bundles
                      </h2>
                    </Link>
                    <Link
                      href="/product"
                      className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <h2 className="font-semibold hover:text-orange-500">
                        Shop All
                      </h2>
                    </Link>
                  </div>
                  <Link href="/bestSalers">
                    <div className="flex justify-center flex-col items-center">
                      <img
                        className="w-full h-48"
                        src="/images/bestsellers.png"
                        alt=""
                      />
                      <h2 className="bg-[#161345] text-white text-center font-bold py-1 rounded-b-md w-full">
                        Best Sellers
                      </h2>
                    </div>
                  </Link>
                  <Link href="/supplementProduct">
                    <div className="flex justify-center flex-col items-center">
                      <img
                        className="w-full h-48"
                        src="/images/supplements.png"
                        alt=""
                      />
                      <h2 className="bg-[#161345] text-white text-center font-bold py-1 rounded-b-md w-full">
                        Supplements
                      </h2>
                    </div>
                  </Link>
                  <Link href="/topperProduct">
                    <div className="flex justify-center flex-col items-center">
                      <img
                        className="w-full h-48"
                        src="/images/powders.png"
                        alt=""
                      />
                      <h2 className="bg-[#161345] text-white text-center font-bold py-1 rounded-b-md w-full">
                        Toppers
                      </h2>
                    </div>
                  </Link>
                  <Link href="/bodyCareProduct">
                    <div className="flex justify-center flex-col items-center">
                      <img
                        className="w-full h-48"
                        src="/images/pawcare.png"
                        alt=""
                      />
                      <h2 className="bg-[#161345] text-white text-center font-bold py-1 rounded-b-md w-full">
                        Body Care
                      </h2>
                    </div>
                  </Link>
                  <Link href="/BundlesProducts">
                    <div className="flex justify-center flex-col items-center">
                      <img
                        className="w-full h-48"
                        src="/images/bundles.png"
                        alt=""
                      />
                      <h2 className="bg-[#161345] text-white text-center font-bold py-1 rounded-b-md w-full">
                        Bundles
                      </h2>
                    </div>
                  </Link>
                  <Link href="/product">
                    <div className="flex justify-center flex-col items-center">
                      <img
                        className="w-full h-48"
                        src="/images/all.png"
                        alt=""
                      />
                      <h2 className="bg-[#161345] text-white text-center font-bold py-1 rounded-b-md w-full">
                        Shop All
                      </h2>
                    </div>
                  </Link>
                </div>
              </div>
              <Link href="/Giveyour">
                <span className="hover:text-orange-500 text-[#161345] pl-2 hidden md:block lg:block self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Take Quiz
                </span>
              </Link>
            </div>
            <Link href="/">
              <h1 className="font-sans text-[#161345] text-4xl hover:scale-105 font-extrabold">
                finn
              </h1>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
              <div className="relative">
                <Menu>
                  <MenuButton as={Button}>
                    <Img className="md:mr-2" src="/images/logo.svg" />
                  </MenuButton>
                  <MenuList>
                    <MenuGroup>
                      {localStorage.getItem("token") ? (
                        <>
                          <Link href="#">
                            <MenuItem color='white' colorschema>Profile</MenuItem>
                          </Link>
                          <Link href="/login">
                            <MenuItem>Login</MenuItem>
                          </Link>
                        </>
                      ) : (
                        <Button onClick={handleCookiesLogout}>Logout</Button>
                      )}
                    </MenuGroup>
                    <MenuDivider />
                  </MenuList>
                </Menu>
                <span className="absolute top-0 right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
              </div>

              <button
                onClick={toggleSidebar}
                aria-controls="drawer-navigation"
                className="relative"
              >
                <FaCartShopping className="hover:text-orange-500 text-4xl md:ml-2" />
                <span className="absolute top-0.5 right-1 flex items-center justify-center text-xs font-bold text-white rounded-full w-5 h-5">
                  {quantity.length}
                </span>
              </button>
            </div>

            <Transition.Root show={isSidebarOpen} as={Fragment}>
              <Dialog open={isSidebarOpen} onClose={toggleSidebar}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0" />
                </Transition.Child>

                <div className="fixed z-10 inset-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                      <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                      >
                        <Dialog.Panel className="pointer-events-auto w-screen max-w-lg">
                          <div className="flex h-full flex-col bg-[#161345] text-white shadow-xl">
                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                              <div className="flex items-start justify-between">
                                <Dialog.Title className="text-lg font-medium text-white hover:text-orange-500">
                                  Shopping cart
                                </Dialog.Title>
                                <div className="ml-3 flex h-7 items-center">
                                  <button
                                    type="button"
                                    className="relative -m-2 p-2 text-lg text-white rounded-md hover:text-orange-500"
                                    onClick={toggleSidebar}
                                  >
                                    <span className="absolute -inset-0.5" />
                                    Close →
                                  </button>
                                </div>
                              </div>
                              <Carts />
                            </div>
                            {/* <div className="border-t border-gray-200 bg-[#161345] px-4 py-2 sm:px-6">
                              <div className="flex justify-between text-base font-medium text-white">
                                <p>Checkout</p>
                                <p>$262.00</p>
                              </div>

                              <div className="mt-4">
                                <Link
                                  href="/Chekout-Now"
                                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-semibold text-[#161345] shadow-sm hover:bg-orange-500"
                                >
                                  Go to Checkout
                                </Link>
                              </div>
                              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p className=" text-white">
                                  or{" "}
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-500 hover:text-orange-500"
                                    onClick={toggleSidebar}
                                  >
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                  </button>
                                </p>
                              </div>
                            </div> */}
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Page;
