import React from "react";
import "../../index.css";
import "./Nav.css";
import logo from "../../assets/63e86ab4c21faa7bc0bd90dd_Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart4 } from "react-icons/bs";
import { useCartStore } from "../../store/store";
import { Link } from "react-router-dom";
export default function Nav() {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="py-2 px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <RxHamburgerMenu className="text-white" />
          <img
            src={logo}
            className="w-24 md:w-40 ml-2 md:ml-4"
            alt="shop-cart-logo"
          />
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="border-solid rounded-xl border-2 mr-4 pl-2 w-36 md:w-48"
            placeholder="search"
          />
          <div className="flex flex-col items-center">
            <p className="bg-red-600 text-white px-2 rounded-full">
              {cart.length}
            </p>
            <Link to='/cart'>
              <BsCart4 className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
