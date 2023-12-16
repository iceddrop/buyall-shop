import Homepod from "../../assets/63e8c4e563db5507951bbfbe_homepad-mini-min.png";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import "./BestDeals.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Dna } from  'react-loader-spinner'
export default function BestDeals() {
  const [products, setProducts] = useState([]);
  const [nameIsOpened, setNameIsOpened] = useState(false);
  const [specIsOpened, setSpecIsOpened] = useState(false);
  const [loading, setLoading] = useState(false);

 /* useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((json) => setProducts(json));
      setLoading(true);
      const getProducts = async () => {
        try {
          setLoading(false);
          const res = await axios.get('https://api.escuelajs.co/api/v1/products');
          
          setProducts(res);
          setLoading(false);
        } catch (error){
          setLoading(false);
          console.error(error);
        }
      }
  });*/

  useEffect(() => {
    if (!loading) {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => {
          setProducts(data);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });

      setLoading(true);
    }
  }, []);



  return (
    <section className="best-deal-section">
      <h2 className="deal-title">Todays Best Deals For You!</h2>
     {!loading && <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper"
      >
        
 
          <>
          {products.map((product) => (
            <SwiperSlide key={product.id} className="deal-card">
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
                <button className="cart-btn">Add to Cart</button>
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
