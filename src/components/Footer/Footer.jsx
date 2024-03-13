import Logo from "../../assets/63e86ab4c21faa7bc0bd90dd_Logo.svg";
import "./Footer.css";
import stripe from "../../assets/63eb1ce8816711ebecac46d8_stripe.png";
import applepay from "../../assets/63e8c4e4707380264b25e680_ApplePay.png";
import visa from "../../assets/63eb1ce82d440b7ab84a993f_visa.png";
import klarna from "../../assets/63eb1f054e419e42aca4a9a2_Klarna.png";
import googlepay from "../../assets/63eb1f55dc68c5ee83d0cbf8_GooglePay.png";
import { BiBriefcase } from "react-icons/bi";
import { CgGift } from "react-icons/cg";
import { AiOutlineQuestionCircle } from "react-icons/ai";
export default function Footer() {
  const marginTop = "10px";
  return (
    <>
    <footer className="footer">
      <div className="footer-div-zero">
        <div className="footer-div-one">
          <img src={Logo} className="footer-image" alt="buyall-logo" />
          <p className="footer-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus temporibus tempore qui quis.
          </p>
        </div>
        <div>
          <label className="footer-link-title">Accepted Payments</label>
          <div className="footer-payment-logo-div">
            <img src={stripe} className="payment-img" alt="payment-logo" />
            <img src={applepay} className="payment-img" alt="payment-logo" />
            <img src={klarna} className="payment-img" alt="payment-logo" />
            <img src={applepay} className="payment-img" alt="payment-logo" />
            <img src={visa} className="payment-img" alt="payment-logo" />
            <img src={visa} className="payment-img" alt="payment-logo" />
            <img src={stripe} className="payment-img" alt="payment-logo" />
            <img src={googlepay} className="payment-img" alt="payment-logo" />
          </div>
        </div>
      </div>
      <div className="footer-list">
        <div>
          <label className="footer-link-title">Department</label>
          <ul className="footer-list-items">
            <a href="#">
              <li>Fashion</li>
            </a>
            <a href="#">
              <li>Books</li>
            </a>
            <a href="#">
              <li>Fitness</li>
            </a>
            <a href="#">
              <li>Toys</li>
            </a>
            <a href="#">
              <li>Electronics and Gadgets</li>
            </a>
            <a href="#">
              <li>Furniture</li>
            </a>
          </ul>
        </div>
        <div>
          <label className="footer-link-title">About Us</label>
          <ul className="footer-list-items">
            <a href="#">
              <li>About Shopcart</li>
            </a>
            <a href="#">
              <li>Careers</li>
            </a>
            <a href="#">
              <li>Help</li>
            </a>
            <a href="#">
              <li>Press Center</li>
            </a>
            <a href="#">
              <li>Ideas and Guides</li>
            </a>
            <a href="#">
              <li>Affiliate & Partners</li>
            </a>
          </ul>
        </div>
        <div>
          <label className="footer-link-title">Services</label>
          <ul className="footer-list-items">
            <a href="#">
              <li>Gift Cards</li>
            </a>
            <a href="#">
              <li>Mobile App</li>
            </a>
            <a href="#">
              <li>Order Pickup</li>
            </a>
            <a href="#">
              <li>Amount Signup</li>
            </a>
          </ul>
        </div>
        <div>
          <label className="footer-link-title">Help</label>
          <ul className="footer-list-items">
            <a href="#">
              <li>Shopcart Help</li>
            </a>
            <a href="#">
              <li>Returns</li>
            </a>
            <a href="#">
              <li>Track Orders</li>
            </a>
            <a href="#">
              <li>Feedbacks</li>
            </a>
            <a href="#">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
     <div className="footer-div-two">
     <div className="footer-div-three">
       <div className="footer-div-four">
         <BiBriefcase className="footer-icon" />
         <a href="#">Seller</a>
       </div>
       <div className="footer-div-four">
         <CgGift className="footer-icon" />
         <a href="#">Gift Cards</a>
       </div>
       <div className="footer-div-four">
         <AiOutlineQuestionCircle className="footer-icon" />
         <a href="#">Help Center</a>
       </div>
     </div>
     <div>
       <a href="#">Terms of Service</a>
     </div>
     <p className="reserved-text">All rights reserved by Device | 2024</p>
   </div>
   </>
  );
}
