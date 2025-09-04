import { Link } from "react-router-dom";
import { useCartStore, useIdStore } from "../../store/store";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import Sidebarcomp from "../../components/Sidebar/Sidebar";
import Extranav from "../../components/Extranav/Extranav";
import Nav from "../../components/Nav/Nav";
import { ToastContainer } from "react-toastify";
import { Toast } from "flowbite-react";
import { FaRegTrashAlt, FaMinus, FaPlus } from "react-icons/fa";
import EmptyCart from "./EmptyCart";

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const { changeIdState } = useIdStore();
  console.log(cart);

  return (
    <>
      <Sidebarcomp />
      <div className="md:pl-20">
        <Extranav />
        <Nav />
        <div className="md:grid md:grid-cols-3 ">
          {cart.length == 0 ? (
            <EmptyCart />
          ) : (
            <div className="flex col-span-2 justify-between flex-col h-full px-4 md:px-2 bg-[#F5F5F5] m-2 py-2 rounded-md">
              <p className="font-semibold text-xl">Cart({cart.length})</p>
              {cart.map((product) => (
                <div className="">
                  <div
                    key={product.id}
                    className="flex mt-2 bg-white rounded-t-md py-2"
                    onClick={() => changeIdState(product.id)}
                  >
                    <div className="flex">
                      <img
                        src={product.thumbnail}
                        className="size-32 image-contain"
                        alt="homepod-mini"
                      />
                    </div>
                    <div className="flex flex-col pl-2">
                      <div className="">
                        <h3 className="font-semibold text-xl">
                          <Link to="/cartoverview">{product.title}</Link>
                        </h3>
                        <div className="price-div">
                          <h6 className="dollar pe-3">$</h6>
                          <p className="price">{product.price}</p>
                        </div>
                        <p className="font-semibold text-gray-400">
                          {product.availabilityStatus}
                        </p>
                      </div>
                      <div className="ratings-div">
                        <AiFillStar className="star-icon" />
                        <AiFillStar className="star-icon" />
                        <AiFillStar className="star-icon" />
                        <AiFillStar className="star-icon" />
                        <AiFillStar className="star-icon" />
                        <h6 className="rating">(120)</h6>
                      </div>
                      {/* <button className="cart-btn" onClick={() => removeFromCart(product) }>Remove</button> */}
                    </div>
                  </div>
                  <div className="flex justify-between p-4  bg-white rounded-b-md">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => removeFromCart(product)}
                    >
                      <FaRegTrashAlt className="text-green-900" />
                      <h6 className="pl-2 font-semibold text-green-900">
                        Remove
                      </h6>
                    </div>
                    <div className="flex items-center">
                      <FaMinus className="bg-green-900 text-white p-1 size-8 mx-3 rounded-sm cursor-pointer" />
                      <h6>1</h6>
                      <FaPlus className="bg-green-900 text-white p-1 size-8 mx-3 rounded-sm cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))}
              <ToastContainer />
            </div>
          )}
          <div className="m-2 p-4 bg-[#F5F5F5] rounded-md h-40">
            <h4 className="font-semibold">CART SUMMARY</h4>
            <div className="flex justify-between mt-4">
              <p className="font-medium">Subtotal</p>
              <div className="price-div">
                <h6 className="dollar pe-3">$</h6>
                <p className="price">4000</p>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <button className="bg-green-900 text-white p-2 w-full rounded-md mt-4 font-semibold">
                Checkout($4,0000)
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
