import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VscAdd, VscChromeMinimize, VscChromeClose } from "react-icons/vsc";
import { clearCartItems, removeFromCart, updateCartItems } from "./webSystem";
import Link from "next/link";

const Carts = () => {
  const carts = useSelector((state) => state.user.carts);
  const dispatch = useDispatch();
  const [toggleText, setToggleText] = useState({});
  const [showDeliveryOptions, setShowDeliveryOptions] = useState({});

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrementCart = (productId) => {
    const newCart = [...carts];
    const index = newCart.findIndex((item) => item.product.id === productId);
    newCart[index] = {
      ...newCart[index],
      quantity: newCart[index].quantity + 1,
    };
    dispatch(updateCartItems(newCart));
  };

  const handleDecrementCart = (productId) => {
    const newCart = [...carts];
    const index = newCart.findIndex((item) => item.product.id === productId);
    if (newCart[index].quantity > 1) {
      newCart[index] = {
        ...newCart[index],
        quantity: newCart[index].quantity - 1,
      };
      dispatch(updateCartItems(newCart));
    }
  };

  const handleToggleClick = (productId) => {
    setToggleText((prev) => ({
      ...prev,
      [productId]:
        prev[productId] === "Unsubscribe" ? "Subscribe" : "Unsubscribe",
    }));
    setShowDeliveryOptions((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div className="mt-8">
      <div className="flow-root">
        {carts && carts.length > 0 ? (
          <ul>
            {carts.map(({ product, quantity = 1 }) => (
              <li key={product.id} className="flex my-2 flex-col md:flex-row">
                <div className="overflow-hidden rounded-md mb-4 md:mb-0 md:mr-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ maxWidth: "120px", padding: "5px" }}
                  />
                </div>
                <div className="flex flex-1 flex-col mt-4 md:mt-0">
                  <div className="flex justify-between text-base font-medium text-white">
                    <h3>
                      <a href="#" className="line-clamp-1">
                        {product.title}
                      </a>
                    </h3>
                    <button
                      onClick={() => handleRemoveFromCart(product.id)}
                      type="button"
                      className="font-semibold hover:scale-125 hover:text-orange-500"
                    >
                      <VscChromeClose />
                    </button>
                  </div>
                  <div className="flex justify-between text-xs my-2">
                    <div className="flex items-center gap-3 text-white">
                      <button
                        onClick={() => handleDecrementCart(product.id)}
                        className="hover:text-orange-500 text-white p-1 text-lg rounded"
                      >
                        <VscChromeMinimize />
                      </button>
                      <span className="mx-2 p-1">{quantity}</span>
                      <button
                        onClick={() => handleIncrementCart(product.id)}
                        className="hover:text-orange-500 text-white p-1 text-lg rounded"
                      >
                        <VscAdd />
                      </button>
                    </div>
                    <div className="flex items-center">
                      <p className="text-xl text-white">
                        ${parseFloat(product.price).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    <div className="flex justify-between items-center gap-3 text-white">
                      <span className="text-lg text-orange-500">
                        {toggleText[product.id] === "Unsubscribe"
                          ? "15% savings applied!"
                          : "Subscribe and save 15% →"}
                      </span>
                      <button
                        className="hover:text-orange-500 hover:scale-105"
                        onClick={() => handleToggleClick(product.id)}
                      >
                        {toggleText[product.id] || "Subscribe"}
                      </button>
                    </div>
                    {showDeliveryOptions[product.id] && (
                      <div className="flex flex-col items-start">
                        <span className="text-lg text-gray-500">
                          Delivery frequency
                        </span>
                        <div className="flex gap-2 mt-2">
                          <button className="px-3 py-1.5 border hover:bg-orange-500 hover:border-orange-500 rounded-md hover:text-white">
                            90 Days
                          </button>
                          <button className="px-3 py-1.5 border hover:bg-orange-500 hover:border-orange-500 rounded-md hover:text-white">
                            45 Days
                          </button>
                          <button className="px-3 py-1.5 border hover:bg-orange-500 hover:border-orange-500 rounded-md hover:text-white">
                            30 Days
                          </button>
                          <button className="px-3 py-1.5 border hover:bg-orange-500 hover:border-orange-500 rounded-md hover:text-white">
                            21 Days
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex justify-center gap-3 items-center flex-col">
            <img
              className="max-w-40 h-40"
              src="/images/sidebarImg.svg"
              alt="Empty Cart"
            />
            <h2 className="text-center text-white text-3xl">
              Your cart is empty! <br /> Fill it with healthy treats.
            </h2>
            <Link href="/product">
              <button
                style={{ background: "#e7770f" }}
                className="hover:scale-105 px-10 py-4 rounded-full mt-4"
              >
                Shop Now →
              </button>
            </Link>
          </div>
        )}
      </div>
      {carts && carts.length > 0 && (
        <div className="border-t border-gray-200 bg-[#161345] px-4 py-2 sm:px-6 mt-4">
          <div className="flex justify-between text-base font-medium text-white">
            <p>Subtotal</p>
            <p>
              $
              {carts
                .reduce(
                  (total, item) =>
                    total + parseFloat(item.product.price) * item.quantity,
                  0
                )
                .toFixed(2)}
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="/Chekout-Now"
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-semibold text-[#161345] shadow-sm hover:bg-orange-500"
            >
              Go to Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center items-end text-center text-sm text-gray-500">
            <p className="text-white">
              or{" "}
              <button
                type="button"
                className="font-medium text-indigo-500 hover:text-orange-500"
                // onClick={toggleSidebar}
              >
                Continue Shopping <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carts;
