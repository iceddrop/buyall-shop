import React from "react";
import "../../index.css";
import "./Nav.css";
import logo from "../../assets/63e86ab4c21faa7bc0bd90dd_Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart4 } from "react-icons/bs";
export default function Nav() {
  const [dropdownMenu, setDropdownMenu] = React.useState(false);
  function isDropped() {
    setDropdownMenu((preVal) => !preVal);
  }

  return (
    <div className="py-2 px-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
        <RxHamburgerMenu className="" />
        <img src={logo} className="w-24 md:w-40 ml-2 md:ml-4" alt="shop-cart-logo" />
        </div>
        <div className="flex items-center">
          <input type="text" className="border-solid border-red-700 border-2 mr-4 pl-2 w-36 md:w-48" placeholder="search"/>
          <BsCart4 className="text-2xl"/>
        </div>
      </div>
    </div>
  );
}
