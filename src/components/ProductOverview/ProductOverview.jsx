import { useEffect, useState } from "react";
import { useIdStore } from "../../store/store";
import Extranav from "../Extranav/Extranav";
import Nav from "../Nav/Nav";
import Sidebarcomp from "../Sidebar/Sidebar";
import "../../App.css";
import { AiFillStar } from "react-icons/ai";
import { PacmanLoader } from "react-spinners";
import { getProductsInstance } from "../../api/axiosInstance";
import { useCartStore } from "../../store/store";

const ProductOverview = () => {
  const { productId } = useIdStore();
  const [product, setProduct] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [productImg, setProductImg] = useState();
  const addToCart = useCartStore(state => state.addToCart);
  const color = "black";

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await getProductsInstance.get(`/${productId}`);
        setProduct(response);
        setProductImg(response?.data?.thumbnail);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };

    getProduct();
  }, [productId]);
  
  return (
    <>
      <Sidebarcomp />
      <div className="md:pl-20">
        <Extranav />
        <Nav />
        {loading ? (
          <div className="flex justify-center">
          <PacmanLoader
            color={color}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          </div>
        ) : (
          <div className="">
            <h4 className="text-center header-text-font">
              {product?.data?.brand}
            </h4>
            <div className="md:flex justify-center items-center">
              <div>
                <div className="flex justify-center">
                  <img
                    className="w-64 h-64"
                    src={productImg}
                    alt="product-thumbnail"
                  />
                </div>
                <div className="flex justify-around">
                  {product?.data?.images.map((image) => (
                    <img
                      className="w-20 h-20 object-contain bg-neutral-200 cursor-pointer "
                      key={product.id}
                      src={image}
                      onClick={() => setProductImg(image)}
                      alt="product-img"
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center mt-10 md:mt-0 pb-16">
                <div>
                  <h6 className="small-text-font">
                    NGN{" "}
                    <span className="font-bold">{product?.data?.price}</span>
                  </h6>
                  <p className="small-text-font text-red-600">
                    {product?.data?.availabilityStatus}
                  </p>
                  <div className="flex">
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <h6 className="rating">(120)</h6>
                  </div>
                  <buttton onClick={() => addToCart(product.data)} className="border-solid border-2 border-black px-8 py-1 relative top-4 rounded-md cursor-pointer">
                    Cart
                  </buttton>
                </div>
              </div>
            </div>
            <div className="pl-4 mt-4">
              <h4 className="header-text-font">Product description</h4>
              <p className="small-text-font pt-2 ">
                {product?.data?.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductOverview;
