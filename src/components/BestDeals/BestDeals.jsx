import Homepod from "../../assets/63e8c4e563db5507951bbfbe_homepad-mini-min.png";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import "./BestDeals.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function BestDeals() {
  const [products, setProducts] = useState([]);
  const [nameIsOpened, setNameIsOpened] = useState(false);
  const [specIsOpened, setSpecIsOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => setProducts(json));
    setLoading(false);
  });

  return (
    <section className="best-deal-section">
      <h2 className="deal-title">Todays Best Deals For You!</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {loading ? (
          <p>jskdjkjdksj</p>
        ) : (
          <>
            {products.map((product) => (
              <SwiperSlide key={product.id} className="deal-card">
                <div className="img-div">
                  <img
                    src={product.image}
                    className="card-img"
                    alt="homepod-mini"
                  />
                  <div className="heart-div">
                    <AiOutlineHeart className="heart-icon" />
                  </div>
                </div>
                <div className="deal-detail">
                  <div className="detail-flex-div">
                    <h3
                      onClick={() => setNameIsOpened(!nameIsOpened)}
                      className={
                        nameIsOpened ? "product-name-two" : "product-name-one"
                      }
                    >
                      {product.title}
                    </h3>
                    <div className="price-div">
                      <h6 className="dollar">$</h6>
                      <p className="price">{product.price}</p>
                    </div>
                  </div>
                  <p
                    onClick={() => setSpecIsOpened(!specIsOpened)}
                    className={
                      specIsOpened ? "specifications-two" : "specifications-one"
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
                    <h6 className="rating">{product.rating.count}</h6>
                  </div>
                  <btn className="cart-btn">Add to Cart</btn>
                </div>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </section>
  );
}
