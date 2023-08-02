import React from "react";
import "../../index.css";
import "./Nav.css";
import Searchcomp from "../Nav/Searchcomp";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { TbShoppingCartPlus } from "react-icons/tb";
import category from "../../assets/furniture.png";
export default function Navlink() {
    const[categoryDrop, setCategoryDrop] = React.useState(false);
    function dropCategory(){
        setCategoryDrop(preval => !preval);
    }
    console.log(categoryDrop)
  return (
    <>
      <ul className="navlist">
        <li>
          <div className="category">
            <p onClick={dropCategory}  className="nav-item">Category</p>
            {categoryDrop ? <FiChevronUp className="chevron-down"/> : <FiChevronDown className="chevron-down" />}
            {categoryDrop &&
            <div className="category-dropdown">
              <h5 className="popular-categories-text">Popular categories</h5>
              <hr></hr>
                <ul className="category-dropdown-menu">
                  <li>
                    <div className="category-sub-div">
                      <img src={category} className="" alt="" />
                      <div className="categories-text-div">
                        <h6 className="popular-categories-products-header">Furniture</h6>
                        <p className="categories-paragraph">240 items available</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="category-sub-div">
                      <img src={category} className="" alt="" />
                      <div className="categories-text-div">
                        <h6 className="popular-categories-products-header">Furniture</h6>
                        <p className="categories-paragraph">240 items available</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="category-sub-div">
                      <img src={category} className="" alt="" />
                      <div className="categories-text-div">
                        <h6 className="popular-categories-products-header">Furniture</h6>
                        <p className="categories-paragraph">240 items available</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="category-sub-div">
                      <img src={category} className="" alt="" />
                      <div className="categories-text-div">
                        <h6 className="popular-categories-products-header">Furniture</h6>
                        <p className="categories-paragraph">240 items available</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="category-sub-div">
                      <img src={category} className="" alt="" />
                      <div className="categories-text-div">
                        <h6 className="popular-categories-products-header">Furniture</h6>
                        <p className="categories-paragraph">240 items available</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="category-sub-div">
                      <img src={category} className="" alt="" />
                      <div className="categories-text-div">
                        <h6 className="popular-categories-products-header">Furniture</h6>
                        <p className="categories-paragraph">240 items available</p>
                      </div>
                    </div>
                  </li>
                </ul>
            </div>
            }
          </div>
        </li>
        <li className="nav-item">Deals</li>
        <li className="nav-item">What's New</li>
        <li className="nav-item">Delivery</li>
      </ul>
      <Searchcomp />
      <ul className="navlist-2">
        <li className="account">
          <RxPerson className="person-icon" />
          <p className="account-text">Account</p>
        </li>
        <li className="cart">
          <TbShoppingCartPlus className="cart-icon" />
          <p className="cart-text">Cart</p>
        </li>
      </ul>
    </>
  );
}
