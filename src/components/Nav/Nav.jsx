import React from "react";
import "../../index.css";
import "./Nav.css";
import logo from "../../assets/63e86ab4c21faa7bc0bd90dd_Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart4 } from "react-icons/bs";
import { useCartStore } from "../../store/store";
import { Link } from "react-router-dom";
import { getProductsInstance } from "../../api/axiosInstance";
import { useState } from "react";
import { useIdStore } from "../../store/store";
export default function Nav() {
  const cart = useCartStore((state) => state.cart);
  const [query, setQuery] = useState("");
  const { changeIdState } = useIdStore();
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([{ id: 1, title: "search product" }]);
  const [showCombobox, setShowCombobox] = useState(false);
  // const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  const searchResult = async () => {
    try {
      setShowCombobox(true);
      const response = await getProductsInstance.get(`/search?q=${query}`);
      setOptions(response.data.products);
    } catch (err) {
      console.error(err);
    } 
  };



  const filteredPeople =
    query === ""
      ? options
      : options.filter((option) => {
        return option.title.toLowerCase().includes(query.toLowerCase());
      });

  const [selected, setSelected] = useState(options[0]);

  const filteredOptions = options.filter(opt =>
    opt.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelect = (option) => {
  setInputValue(option.title);
  setIsOpen(false);
  changeIdState(option.id);
  navigate("/productoverview");
  };
console.log(isOpen)
  return (
    <div className="py-2 px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <RxHamburgerMenu className="text-white" />
          <img
            src={logo}
            className="w-24 md:w-40  md:ml-4 mr-4 md:mr-0"
            alt="shop-cart-logo"
          />
        </div>
        <div className="flex items-center text-black">
          <div className="relative w-46 pr-6">
            <input
              type="text"
              className="w-full border px-3 py-2 rounded focus:outline-none"
              value={inputValue}
              onChange={e => {
                setInputValue(e.target.value);
                setIsOpen(true);
                searchResult()
              }}
              onFocus={() => setIsOpen(true)}
              placeholder="search"
            />
            {isOpen  && (
              <ul className="absolute z-10 bg-white border w-full mt-1 rounded shadow">
                {filteredOptions.map((opt, idx) => (
                  <Link to="/productoverview" onClick={() => changeIdState(opt.id)} className="text-sm/6 text-black cursor-pointer" >
                    <li
                      key={idx}
                      className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                      onMouseDown={() => handleSelect(opt) } // onMouseDown to avoid input blur before click
                    >
                      {opt.title}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-col items-center">
            <p className="bg-red-600 text-white px-2 rounded-full">
              {cart.length}
            </p>
            <Link to="/cart">
              <BsCart4 className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
