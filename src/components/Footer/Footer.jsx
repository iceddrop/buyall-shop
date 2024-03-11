import Logo from "../../assets/63e86ab4c21faa7bc0bd90dd_Logo.svg";
import "./Footer.css";
export default function Footer() {
  const marginTop = "10px";
  return (
    <footer className="footer">
      <div className="footer-div-one">
        <img src={Logo} className="footer-image" alt="buyall-logo" />
        <p className="footer-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus temporibus tempore qui quis.
        </p>
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
  );
}
