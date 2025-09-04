import emptycart from "../../assets/cobweb.png"
import "../../pages/CartPage/Cart.css"
const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center  h-screen">
        <img src={emptycart} className=" object-contain  w-1/2 h-1/2" alt="Empty Cart" />
      <h2 className="text-2xl font-bold text-font">Your Cart is Empty</h2>
      <button className="bg-green-500 text-white mt-2 px-4 py-2 rounded">Start Shopping</button>
    </div>
  );
};

export default EmptyCart;
