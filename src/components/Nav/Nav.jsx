import React from "react";
import "../../index.css";
import "./Nav.css";
import logo from "../../assets/63e86ab4c21faa7bc0bd90dd_Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart4 } from "react-icons/bs";
import { useCartStore } from "../../store/store";
import { Link } from "react-router-dom";
import { getProductsInstance } from "../../api/axiosInstance";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { useIdStore } from "../../store/store";
export default function Nav() {
  const cart = useCartStore((state) => state.cart);
  const [query, setQuery] = useState("");
  const { changeIdState } = useIdStore();

  const searchResult = async () => {
    try {
      const response = await getProductsInstance.get(`/search?q=${query}`);
      setPeople(response.data.products);
    } catch (err) {
      console.error(err);
    }
  };

  const [people, setPeople] = useState([{ id: 1, title: "search product" }]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.title.toLowerCase().includes(query.toLowerCase());
        });

  const [selected, setSelected] = useState(people[0]);

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
          <div className="pr-3">
            <Combobox
              value={selected}
              onChange={(value) => setSelected(value)}
              onClose={() => setQuery("")}
            >
              <div className="relative">
                <ComboboxInput
                  className={clsx(
                    "w-full rounded-lg border-solid border-black bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-black",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                  displayValue={(person) => person?.title}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    searchResult();
                  }}
                />
                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5"></ComboboxButton>
              </div>

              <ComboboxOptions
                anchor="bottom"
                transition
                className={clsx(
                  "w-[var(--input-width)] rounded-xl border border-black/5 bg-white/100 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
                  "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                )}
              >
                {filteredPeople.map((person) => (
                    <ComboboxOption
                      key={person.id}
                      value={person}
                      className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/60 "
                    >
                       <Link to="/productoverview">
                      <div onClick={() => changeIdState(person.id)} className="text-sm/6 text-black">{person.title}</div>
                      </Link>
                    </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Combobox>
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
