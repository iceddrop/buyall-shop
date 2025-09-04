import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import "./BestDeals.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Dna } from "react-loader-spinner";
import { useGetAllProducts } from "../../store/store";
import { useIdStore } from "../../store/store";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/store";
import { ToastContainer} from 'react-toastify';

export default function BestDeals() {
  const [nameIsOpened, setNameIsOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data, execute } = useGetAllProducts();
  const { changeIdState } = useIdStore();
  const addToCart = useCartStore(state => state.addToCart);

  useEffect(() => {
    execute();
  }, []);


console.log(data)
  return (
    <section className="best-deal-section">
      <h2 className="deal-title">Todays Best Deals For You!</h2>
      {loading ? <p>Loading</p> : (
        <Swiper spaceBetween={50} slidesPerView={3} className="swiper cursor-grab">
          <>
            {data?.products?.map((product) => (
              <SwiperSlide
                key={product.id}
                className="deal-card"
                onClick={() => changeIdState(product.id)}
              >
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
                    <h3
                      onClick={() => setNameIsOpened(!nameIsOpened)}
                      className="product-name-one"
                    >
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
                  <button className="cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </SwiperSlide>
            ))}
          </>
        </Swiper>
      )}
      {loading && (
        <div className="spinner-div">
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
      <ToastContainer />
    </section>
  );
}
