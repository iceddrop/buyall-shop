
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import "./BestDeals.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Dna } from  'react-loader-spinner';
import { useGetAllProducts } from "../../store/store";
export default function BestDeals() {
  const [products, setProducts] = useState([]);
  const [nameIsOpened, setNameIsOpened] = useState(false);
  const [specIsOpened, setSpecIsOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const {data, execute} = useGetAllProducts();
  console.log(data)
 

  useEffect(() => {
    execute();
  }, []);

console.log(products)
  return (
    <section className="best-deal-section">
      <h2 className="deal-title">Todays Best Deals For You!</h2>
     {!loading && <Swiper
        spaceBetween={50}
        slidesPerView={3}

        
        className="swiper"
      >
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
                    <h6 className="dollar pe-3">$</h6>
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
                  <h6 className="rating">(120)</h6>
                </div>
                <button  className="cart-btn">Add to Cart</button>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
}
      {loading &&
      <div className='spinner-div'>
        <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      </div>
      } 
    </section>
  );
}
