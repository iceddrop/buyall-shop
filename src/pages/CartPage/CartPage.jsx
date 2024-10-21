import { Link } from "react-router-dom";
import { useCartStore } from "../../store/store";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import Sidebarcomp from "../../components/Sidebar/Sidebar";
import Extranav from "../../components/Extranav/Extranav";
import Nav from "../../components/Nav/Nav";
const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <>
      <Sidebarcomp />
      <div className="md:pl-20">
        <Extranav/>
        <Nav/>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-0 px-2">
          {cart.map((product) => (
            <div key={product.id} className="md:pl-24">
              <div className="img-div">
                <img
                  src={product.images[0]}
                  className="card-img"
                  alt="homepod-mini"
                />
                <div className="heart-div">
                  <AiOutlineHeart className="heart-icon" />
                </div>
              </div>
              <div className="deal-detail">
                <div className="detail-flex-div">
                  <h3 className="product-name-one">
                    <Link to="/productoverview">{product.title}</Link>
                  </h3>
                  <div className="price-div">
                    <h6 className="dollar pe-3">$</h6>
                    <p className="price">{product.price}</p>
                  </div>
                </div>
                <div className="ratings-div">
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <h6 className="rating">(120)</h6>
                </div>
                <button className="cart-btn">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartPage;
