import "./Todaysdeal.css";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import "../TodaysDeal/Todaysdeal.css";
export default function Todaysdeal() {
  const [category, setCategory] = useState("");
  const [todaysDeal, setTodaysDeal] = useState([]);
  const [nameIsOpened, setNameIsOpened] = useState(false);
  const [specIsOpened, setSpecIsOpened] = useState(false);

  function fetchDeals() {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setTodaysDeal(json));
  }

  useEffect(fetchDeals, [category]);

  const todaysDealEl = todaysDeal.map((product) => {
    return (
      <div className="todays-deal-card">
        <div>
          <img
            src={product.image}
            className="todays-deal-img"
            alt="product-img"
          />
          <div className="heart-div">
            <AiOutlineHeart />
          </div>
        </div>
        <div className="deal-detail">
          <div className="detail-flex-div">
            <h3
              onClick={() => setNameIsOpened(!nameIsOpened)}
              className={nameIsOpened ? "product-title-two" : "product-title-one"}
            >
              {product.title}
            </h3>
            <div className="price-div">
              <h6 className="dollar pe-3">$</h6>
              <p>{product.price}</p>
            </div>
          </div>
          <p
            onClick={() => setSpecIsOpened(!specIsOpened)}
            className={
              specIsOpened ? "specifications-desc-two" : "specifications-desc-one"
            }
          >
            {product.description}
          </p>
          <div className="ratings-div">
            <AiFillStar className="star-icon" />
            <AiFillStar className="star-icon" />
            <AiFillStar className="star-icon" />
            <AiFillStar className="star-icon" />
            <AiFillStar className="star-icon" />
            <h6 className="rating">(120)</h6>
          </div>
          <button className="cart-btn">Add to cart</button>
        </div>
      </div>
    );
  });
  
  return (
    <section className="today-section">
      <h2 className="today-title">Todays Best Deals For You!</h2>
      <div className="today-category-list">
        <p onClick={() => setCategory("jewelery")} className="today-item">
          Jewelery
        </p>
        <p onClick={() => setCategory("electronics")} className="today-item">
          Electronics
        </p>
        <p onClick={() => setCategory("men's clothing")} className="today-item">
          Men's
        </p>
        <p
          onClick={() => setCategory("women's clothing")}
          className="today-item"
        >
          Women's
        </p>
      </div>
      <div className="today-deal-cards">{todaysDealEl}</div>
    </section>
  );
}
