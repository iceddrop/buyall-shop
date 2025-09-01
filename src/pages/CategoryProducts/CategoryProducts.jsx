import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import "../../components/BestDeals/BestDeals.css";
import { Link } from "react-router-dom";
import { getProductsInstance } from "../../api/axiosInstance";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Nav/Nav";
import Extranav from "../../components/Extranav/Extranav";
import { useCategoryStore, useIdStore, useCartStore } from "../../store/store";

const CategoryProducts = () => {

  const [categoryProducts, setCategoryProducts] = useState([]);

  const {productCategory} = useCategoryStore();

  const {changeIdState} = useIdStore();

  const addToCart = useCartStore(state => state.addToCart);

  const getProducts = async () => {
    try {
      const response = await getProductsInstance.get(`/category/${productCategory}`);
      setCategoryProducts(response?.data?.products);
      console.log(response)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [productCategory]);
  return (
    <>
    <Sidebar/>
    <div className="md:pl-10">
      <Extranav/>
      <Nav/>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-0 px-2">
      {categoryProducts.map((product) => (
        <div key={product.id} className="md:pl-24" onClick={() => changeIdState(product.id)}>
          <div className="img-div" >
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
            <button onClick={() => addToCart(product)} className="cart-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default CategoryProducts;
