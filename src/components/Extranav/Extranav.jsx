import React from "react";
import './Extranav.css';
import {HiOutlinePhone} from "react-icons/hi";
import {FiChevronDown} from "react-icons/fi";
import "../../index.css";

export default function Extranav(){
    return(
       <section className="extra-nav">
          <div className="contact-div">
             <HiOutlinePhone className="phone-icon"/>
             <p className="phone-number">+001234567890</p>
          </div>
          <div className="discount-div">
             <p>Get 50% Off on Selected Items </p>
             <p>|</p>
             <p>Shop Now</p>
          </div>
          <div className="dropdown-div">
             <div className="dropdown">
                <p className="dropdown-text">Eng</p>
                <FiChevronDown className="chevron-down"/>
                <ul className="dropdown-list">
                  <li className="dropdown-list-item">Yoruba</li>
                  <li className="dropdown-list-item">Arabic</li>
                  <li className="dropdown-list-item">English</li>
                </ul>
             </div>
             <div className="dropdown-2">
                 <p>Location</p>
                 <FiChevronDown className="chevron-down"/>
                 <ul className="dropdown-list-2">
                  <li className="dropdown-list-item">Africa</li>
                  <li className="dropdown-list-item">Europe</li>
                  <li className="dropdown-list-item">Asia</li>
                </ul>
             </div>
          </div>
       </section>
    )
}